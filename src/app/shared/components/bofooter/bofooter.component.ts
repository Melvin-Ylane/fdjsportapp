import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bofooter',
  templateUrl: './bofooter.component.html',
  styleUrls: ['./bofooter.component.scss']
})
export class BofooterComponent implements OnInit {
  
  currentYear: number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
