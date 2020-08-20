import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { UserStorageService } from './user-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PontoService {
  imports: [
    BrowserModule,
    //HttpModule
  ]
  private data: any = {};
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private userService: UserStorageService,
    //private http: Http,
  ) { }

  UploadArquivoTangerino(fileData: File) : Observable<any>{
    const formData = new FormData();
    formData.append('file', fileData);
    return this.httpClient.post('api/ControlePonto/ImortarArquivoAFD', formData);
  }

}

class Login {
  user: string;
  password: string;
}
