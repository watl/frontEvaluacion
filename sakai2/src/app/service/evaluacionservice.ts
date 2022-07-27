
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class EvaluacionService {

constructor(private http: HttpClient) { }
    httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
    }
    getData(){

    return this.http.get('/api/Employee');  //https://localhost:44352/ webapi host url
    }

    postData(formData){
    return this.http.post('/api/Employee',formData);
    }

    putData(id,formData){
    return this.http.put('/api/Employee/'+id,formData);
    }

    deleteData(id){
    return this.http.delete('/api/Employee/'+id);
    }

}
