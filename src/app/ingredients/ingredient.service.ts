import { Injectable } from '@angular/core';
import { Ingredient } from './ingredient';
import { Http, Headers, Response } from '@angular/http';
//rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

@Injectable()
export class IngredientService {

    private headers: Headers;

    private apiURL = 'https://w3j6l1eiu5.execute-api.us-west-2.amazonaws.com/test';

    constructor(private http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Content-Type', 'Access-Control-Allow-Headers');//Ehhh for CORS stuff?
    }

    getIngredients(): Observable<Ingredient[]>{
        return this.http
                    //.get(this.ingredientsUrl, {headers: this.headers})
                    .get(`${this.apiURL}/ingredient`, {headers: this.headers})
                    .map((response: Response) => {
                        console.dir(response);
                        return <Ingredient[]>response.json();
                    })
                    .catch(this.handleError);
    }

    delete(ingredient: Ingredient){
        let encodedName = encodeURIComponent(ingredient.name);
        return this.http.delete(`${this.apiURL}/ingredient/${encodedName}` , {headers: this.headers})
                    .map((response: Response) => {
                        return this.isSuccessStatusCode(response.status);
                    })
                    .catch(this.handleError);
    }

    add(ingredient): Observable<boolean>{
        return this.http.post(`${this.apiURL}/ingredient`, JSON.stringify(ingredient), {headers: this.headers})
                    .map((response: Response) => {
                        return this.isSuccessStatusCode(response.status);
                    })
                    .catch(this.handleError);
    }

    handleError(error: any){
        console.error('server error:', error);
        return Observable.throw(error || ' default error handlererererer');
    }

    private isSuccessStatusCode(statusCode) {
        return (statusCode >= 200 && statusCode < 300);
    }

    private extractData<T>(response: Response){
        if(response.status < 200 || response.status >= 300){
            throw new Error(`Bad response status from server ${response.status}`);
        }
        let body = response.json ? response.json() : null;
        return <T>(body && body.data || {});
    }

}