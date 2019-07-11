import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class DataService{
    /**
     *
     */
    constructor(private http: HttpClient) {
        
        
    }
    getFilmes(){
        return this.http.get<any[]>('https://copadosfilmes.azurewebsites.net/api/filmes')
    }
}