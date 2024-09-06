import { HttpParams } from "@angular/common/http";

export const BASE_PREFIX = "app";

export const createRequestOption = (req: any):HttpParams => {
  if (req) {
    Object.keys(req).forEach(key => {
      if (['page','size'].findIndex(k => k == key) !== -1) {
        req[key] = Number(req[key]);
      }
      if (req[key].constructor === Array) {
        req[key+'[]'] = req[key];
        delete req[key];
      }
    });
  }
  const options: HttpParams = new HttpParams({fromObject: req});
  return options;
}

export function convertModelToFormData(model: any, fileArrayFields: string[] = []): FormData {
    const formData = new FormData();
    let formKey;

    for (let propertyName in model) {
      const value = model[propertyName];
      if (fileArrayFields.findIndex(v => v == propertyName) > -1 && value && value instanceof Array) {
        value.forEach((e: File) => {
          formData.append(propertyName, e);
        });
      }else if(value instanceof Array){
        value.forEach((e: any) => {
            formData.append(propertyName+"[]", e);
        });
      }else{
        formData.append(propertyName, value);
      }
    }
    return formData;
}

export function clearData(datas: any, fileFields?: string[]) {
  for (const k in datas) {
    if(datas[k]){
      // if (datas[k].constructor === Boolean) return;
      if (fileFields && fileFields.findIndex(ff => ff == k) > -1 && datas[k].constructor !== File) {
        delete datas[k];
      }else if (datas[k].constructor === Array && datas[k].length === 0) {
        delete datas[k];
      }
    }else{
      if (datas[k] !== false && datas[k] !== 0){
        delete datas[k];
      }
    }
  }
  return datas;
}