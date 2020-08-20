import { Component, OnInit, ViewEncapsulation, Inject, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { UserStorageService } from '../../service/user-storage.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class LoginPageComponent implements OnInit {

    private data: any = {};
    private md5;
    @Inject('BASE_URL') baseUrl: string;

    contentInput: ElementRef<HTMLInputElement>;
    returnUrl: string;
    loginForm: FormGroup;
    resetForm: FormGroup;
    loginError: boolean;
    loginErrorMessage: string;

    //modalRef: BsModalRef;

    constructor(
        private formBuilder: FormBuilder,
        //private loginService: LoginService,
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private userService: UserStorageService,
        private loginService: LoginService,
        //private userIdle: UserIdleService,
        //private breadcrumbService: BreadcrumbService,
        //private modalService: BsModalService,
    ) {

        //this.loginService.Login('Anomimo', '');
    }

    ngOnInit() {
        
        this.loginForm = this.formBuilder.group({
            user: ['', [Validators.required]],
            password: ['', Validators.required]
        });

        this.resetForm = this.formBuilder.group({
            cpf: ['', Validators.required],
            login: ['', Validators.required]
        });

    }

    disableBreadcrumb() {
        //this.breadcrumbService.removeWay();
    }

    loginErrorException() {
        return "O usuário ou a senha estão incorretos.";
    }

    login() {
        if (this.loginForm.valid) {

            let user = this.loginForm.get('user').value;
            let password = this.criptToMD5(this.loginForm.get('password').value);
            this.loginService.Login(user, password);
        }
    }

    reset(e) {
        if (this.resetForm.valid) {
            // const legalPerson = this.legalPersonForm.getRawValue() as PessoaJuridicaBasica;
            // legalPerson.dataNascimentoResponsavel = this.transformToDate(this.legalPersonForm.get('dataNascimentoResponsavel').value);
            // this.registerService
            // 	.IncluirDadosBasicosPJ(legalPerson)
            // 	.subscribe(
            // 		() => {
            // 			this.successRegister = true;
            // 		},
            // 		err => console.log('Erro no registro | PJ.')
            // 	)
        }
    }

    criptToMD5(value: string) {
        //this.md5 = new Md5();
        return value;//this.md5.appendStr(value).end();
    }

    openModal(template: TemplateRef<any>) {
        //this.modalRef = this.modalService.show(template);
    }

    decline(): void {
        //this.modalRef.hide();
    }

}


