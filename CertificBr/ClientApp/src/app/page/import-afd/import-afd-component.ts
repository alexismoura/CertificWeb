import { Component, AfterContentInit, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserStorageService } from '../../service/user-storage.service';
import { PontoService } from '../../service/ponto.service';
import { DomSanitizer, SafeResourceUrl, } from '@angular/platform-browser';
//import { UserIdleService } from 'angular-user-idle';
import { fadeInAnimation } from '../../component/animations/default';

@Component({
  selector: 'app-home',
  templateUrl: './import-afd-component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ImportAfdComponent implements OnInit {


  user: any;
  session: any;
  private data: any = {};
  private url: string;
  safeUrl: SafeResourceUrl;
  caminho;
  fileToUpload: File = null;
  previewUrl: any = null;
  saving = false;
  public text: string = 'Enviar Arquivo';

  constructor(
    private userStorage: UserStorageService,
    private pontoservice: PontoService,
    //private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit() {

    this.user = this.userStorage.getUserStorage();
    this.session = this.getCookie();
    this.caminho = [{
      caminho: { NomeCompleto: "Página inicial" }
    }]
  }

  getCookie() {
    var pairs = document.cookie.split(";");
    var cookies: any = {};

    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      cookies[(pair[0] + '').trim()] = unescape(pair[1]);
    }
    return cookies.ANGULAR_SessionId;
  }

  loginService() {
    this.data = this.userStorage.getUserStorage();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.preview();
  }

  preview() {
    var mimeType = this.fileToUpload.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileToUpload);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  onSubmit() {
    this.text = 'Aguarde Enviando...';
    this.saving = false;
    this.pontoservice.UploadArquivoTangerino(this.fileToUpload)
      .subscribe(result => {
        debugger;
        if (result) {
          alert('Arquivo enviado com Sucesso');
          this.text = 'Enviar Arquivo';
          this.saving = false;
        }
      }, error => {
        this.text = 'Enviar Arquivo';
        this.saving = false;
        alert('Ocorreu um erro ao enviar');
      });
  }

}
