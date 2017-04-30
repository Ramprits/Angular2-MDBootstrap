import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IProduct } from 'app/product/product.module';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ProductService {
    private baseURL = 'src/app/common/product.json';
    constructor(private http: Http) { }
    GetProducts(): Observable<IProduct[]> {
        return this.http.get(this.baseURL)
            .map((res: Response) => {
                return <IProduct[]>res.json();
            })
            .catch(this.handleError);
    }
    private handleError(errr: Response) {
        return Observable.throw(errr.statusText);
    }


}