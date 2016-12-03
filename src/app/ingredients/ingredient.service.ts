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

    //private headers = new Headers({'Content-Type': 'application/json'});
    //headers.append('Content-Type', 'Access-Control-Allow-Headers');

    private ingredientsUrl = 'api/ingredients';

    constructor(private http: Http) { 
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Content-Type', 'Access-Control-Allow-Headers');//Ehhh for CORS stuff?
    }

    // getIngredients(): Ingredient[]{
    //     let ingredients: Ingredient[];
    //     ingredients =  [
    //         {id: 1, name: "Salt"},
    //         {id: 2, name: "Pepper"},
    //     ];
    //     return ingredients;
    // } 

    getIngredients(): Observable<Ingredient[]>{
        return this.http
                    //.get(this.ingredientsUrl, {headers: this.headers})
                    .get('https://w3j6l1eiu5.execute-api.us-west-2.amazonaws.com/test/ingredient', {headers: this.headers})
                    .map((response: Response) => {
                        return <Ingredient[]>response.json().data;
                    })
                    .catch(this.handleError);
    }


    update(ingredient: Ingredient){
        const url = `${this.ingredientsUrl}/${ingredient.id}`;
        return this.http.put(url, JSON.stringify(ingredient), {headers: this.headers})
                    .map((response: Response) => {
                        console.dir(response);
                        return response.json();
                    })
                    .catch(this.handleError);
    }

    add(ingredient): Observable<Ingredient>{
        return this.http.post(this.ingredientsUrl, JSON.stringify(ingredient), {headers: this.headers})
                    .map((response: Response) => {
                        console.log("Created?");
                        console.dir(response);
                        return <Ingredient>response.json().data;
                    })
                    .catch(this.handleError);
    }

    handleError(error: any){
        console.error('server error:', error);
        return Observable.throw(error || ' ehhh default error handlererererer');
    }

}