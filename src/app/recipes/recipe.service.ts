import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Http, Headers, Response } from '@angular/http';
//rxjs
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

@Injectable()
export class RecipeService {

    private apiURL = '/api/recipes';

    constructor(private http: Http) { }

    getRecipes(): Observable<Recipe[]>{
        return this.http
                    .get(this.apiURL)
                    .map((response: Response) => {
                        return <Recipe[]>response.json().data;
                    })
                    .catch(this.handleError);
    }

    getRecipe(id: string): Observable<Recipe> {
        console.log(`getRecipe(): ${id}`);
        const url = `${this.apiURL}/${id}`;
        console.log(url);
        return this.http
                    .get(url)
                    .map((response: Response) => {
                        console.dir(response);
                        return <Recipe>response.json().data;
                    })
                    .catch(this.handleError);
    }

    handleError(error: any){
        console.error('server error:', error);
        return Observable.throw(error || ' default error handlererererer');
    }

}