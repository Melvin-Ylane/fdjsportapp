import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-search-field',
	templateUrl: './search-field.component.html',
	styleUrls: ['./search-field.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: SearchFieldComponent
		}
	]
})
export class SearchFieldComponent implements OnInit {

	loading = false;
	@Input() datas: any[] = [];
	currentValue: any = null;
	
	unsubscriber: Subject<void> = new Subject();
	timeout?: any;

	showCancelBtn: boolean = false;

	onChange = (value: any): void => { };
	onTouched = () => { };

	@Input() bindLabel: string = '';
	@Input() bindValue: string = '';
	@Input() placeholder: string = '';
	@Input() notFoundText: string = '';
	@Input() service: any;
	@Input() searchTerm: any;
	@Input() addedTerms: any = {};
	@Input() multiple: boolean = false;
	@Input() loadAll: boolean = false;
	@Output() change = new EventEmitter<any>();

	constructor() { }

	ngOnInit(): void {
	}

	selectChange(): void {
		this.showCancelBtn = true;
		this.onChange(this.currentValue);
		this.onTouched();
		this.change.emit(this.currentValue);
	}

	clearClick(): void {
		this.datas = [];
		this.currentValue = null;
		this.change.emit(null);
		this.showCancelBtn = false;
	}

	writeValue(value: any): void {
		if (!value && !this.loadAll) this.datas = [];
		this.currentValue = value;
	}
	
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	onSearchInput(event: any) {
		if (this.loadAll) return;
		this.loading = true;
		if (this.timeout) clearTimeout(this.timeout);
		if (event.term) {
			this.timeout = setTimeout(() => {
				this.datas = [];
				let searchDatas = { [this.searchTerm]: event.term }
				this.service.findAllWithPagination({...searchDatas, ...this.addedTerms}).pipe(takeUntil(this.unsubscriber)).subscribe({
					next: (res: any) => {
						this.loading = false;
						this.datas = [...res.datas];
					},
					error: () => {
						this.loading = false;
					}
				});
			}, 1000);
		} else {
			this.loading = false;
			this.datas = [];
		}
	}
}
