(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-usuarios-usuarios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/usuarios/components/usuarios-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/usuarios/components/usuarios-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n    <div class=\"card mt-3\">\n      <div class=\"card-header\" [ngClass]=\"templateData.cardHeaderStyle\">\n        {{ templateData.titulo + \" usuario\" }}\n      </div>\n\n      <div class=\"card-body\">\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit(submitBtn)\">\n\n          <div class=\"form-group\">\n            <label for=\"name\" class=\"control-label\"> Nombre </label>\n            <input type=\"text\" formControlName=\"name\" [readonly]=\"templateData.titulo==='Eliminar'\"\n              [class.is-invalid]=\"name.invalid && name.touched\" class=\"form-control\" />\n            <small class=\"text-danger\" [class.d-none]=\"name.untouched || !name.hasError('required')\">El campo nombre es\n              requerido</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"email\" class=\"control-label\"> Email </label>\n            <input type=\"email\" formControlName=\"email\" [readonly]=\"templateData.titulo==='Eliminar'\"\n              [class.is-invalid]=\"email.invalid && email.touched\" class=\"form-control\" />\n            <small class=\"text-danger\" [class.d-none]=\"email.untouched || !email.hasError('required')\">El campo email es\n              requerido</small>\n            <small class=\"text-danger\" [class.d-none]=\"email.untouched || !email.hasError('uniqueEmail')\">Ya existe un\n              usuario con este email</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"rol\" class=\"control-label\"> Rol </label>\n            <select formControlName=\"rol\" required [class.is-invalid]=\"rol.invalid && rol.touched\"\n              class=\"custom-select\">\n              <option value=\"rol\"></option>\n              <option value=\"Inscripciones\">Inscripciones</option>\n              <option value=\"Administración\">Administración</option>\n              <option value=\"Competencias\">Competencias</option>\n            </select>\n            <small class=\"text-danger\" [class.d-none]=\"rol.untouched || !rol.hasError('required')\">El rol es\n              requerido</small>\n            <small class=\"text-danger\" [class.d-none]=\"rol.untouched || !rol.hasError('invalidGenero')\">Seleccione el\n              rol</small>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"club\" class=\"control-label\"> Club </label>\n            <select formControlName=\"club\" required [class.is-invalid]=\"club.invalid && club.touched\"\n              class=\"custom-select\">\n              <option value=\"club\"></option>\n              <option [value]=\"item.nombre\" *ngFor=\"let item of tblClubes\">{{ item.nombre }}</option>\n            </select>\n            <small class=\"text-danger\" [class.d-none]=\"club.valid || club.untouched\">El club es requerido</small>\n          </div>\n\n          <div *ngIf=\"templateData.titulo === 'Agregar'\" class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"password\" class=\"control-label\"> Contraseña </label>\n                <input type=\"password\" formControlName=\"password\"\n                  [class.is-invalid]=\"password.invalid && password.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"password.untouched || !password.hasError('required')\">El\n                  campo contraseña es requerido</small>\n                <small class=\"text-danger\" [class.d-none]=\"password.untouched || !password.hasError('minlength')\">La\n                  longitud mínima es de 6 caracteres</small>\n              </div>\n            </div>\n\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"password2\" class=\"control-label\"> Confireme contraseña </label>\n                <input type=\"password\" formControlName=\"password2\"\n                  [class.is-invalid]=\"password2.invalid && password2.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"password2.untouched || !password2.hasError('required')\">El\n                  campo contraseña es requerido</small>\n                <small class=\"text-danger\" [class.d-none]=\"password2.untouched || !password2.hasError('minlength')\">La\n                  longitud mínima es de 6 caracteres</small>\n                <small class=\"text-danger\" [class.d-none]=\"password2.untouched || !password2.hasError('compare')\">La\n                  contraseña y la confirmación no coinciden</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button [disabled]=\"!miForm.valid\" #submitBtn\n                [ngClass]=\"templateData.titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\" type=\"submit\"\n                class=\"btn btn-block\">\n                {{ templateData.titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\n                Cancelar\n              </button>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/usuarios/components/usuarios.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/usuarios/components/usuarios.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\n  <div class=\"card-header d-flex\">\n    Usuarios\n    <a routerLink=\"/usuarios/add\" class=\"text-primary ml-auto\">\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\n    </a>\n  </div>\n</div>\n\n<table class=\"table table-bordered table-hover\">\n  <thead>\n    <tr>\n      <th> Nombre </th>\n      <th> Email </th>\n      <th> Rol </th>\n      <th> Club </th>\n      <th> </th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let registro of tabla\">\n      <td routerLink=\"/usuarios/edit/{{registro.id}}\"> {{ registro.name }} </td>\n      <td routerLink=\"/usuarios/edit/{{registro.id}}\"> {{ registro.email }} </td>\n      <td routerLink=\"/usuarios/edit/{{registro.id}}\"> {{ registro.rol }} </td>\n      <td routerLink=\"/usuarios/edit/{{registro.id}}\"> {{ registro.club }} </td>\n      <td class=\"text-center\">\n        <a routerLink=\"/usuarios/delete/{{registro.id}}\" class=\"text-danger\">\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n\n</table>");

/***/ }),

/***/ "./src/app/shared/compare-validator.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/compare-validator.directive.ts ***!
  \*******************************************************/
/*! exports provided: compareValidator, CompareValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareValidator", function() { return compareValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompareValidatorDirective", function() { return CompareValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
var CompareValidatorDirective_1;



function compareValidator(controlNameToCompare) {
    return (c) => {
        if (c.value === null || c.value.length === 0) {
            return null;
        }
        const controlToCompare = c.root.get(controlNameToCompare);
        if (controlToCompare) {
            const subscription = controlToCompare.valueChanges.subscribe(() => {
                c.updateValueAndValidity();
                subscription.unsubscribe();
            });
            return controlToCompare && controlToCompare.value !== c.value ? { 'compare': true } : null;
        }
    };
}
let CompareValidatorDirective = CompareValidatorDirective_1 = class CompareValidatorDirective {
    validate(c) {
        return compareValidator(this.controlNameToCompare)(c);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('compare')
], CompareValidatorDirective.prototype, "controlNameToCompare", void 0);
CompareValidatorDirective = CompareValidatorDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[compare]',
        providers: [{
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                useExisting: CompareValidatorDirective_1,
                multi: true
            }]
    })
], CompareValidatorDirective);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _compare_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./compare-validator.directive */ "./src/app/shared/compare-validator.directive.ts");




let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _compare_validator_directive__WEBPACK_IMPORTED_MODULE_3__["CompareValidatorDirective"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        exports: [
            _compare_validator_directive__WEBPACK_IMPORTED_MODULE_3__["CompareValidatorDirective"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/tables/usuarios/components/usuarios-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tables/usuarios/components/usuarios-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: UsuariosFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosFormComponent", function() { return UsuariosFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/compare-validator.directive */ "./src/app/shared/compare-validator.directive.ts");









let UsuariosFormComponent = class UsuariosFormComponent {
    constructor(crudService, authService, fb, msg, location, actRoute, router) {
        this.crudService = crudService;
        this.authService = authService;
        this.fb = fb;
        this.msg = msg;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.templateData = { titulo: '', cardHeaderStyle: '', id: '' };
    }
    ngOnInit() {
        this.msg.clearMessages();
        this.tblClubes = this.actRoute.snapshot.data['usuarioData'][1];
        const action = this.actRoute.snapshot.paramMap.get('action');
        this.templateData.titulo = this.getTitle(action);
        this.templateData.cardHeaderStyle = this.getClassHeader(action);
        this.templateData.id = this.actRoute.snapshot.paramMap.get('id');
        this.buildForm();
        if (this.templateData.titulo !== 'Agregar') {
            this.setFormData();
        }
    }
    buildForm() {
        this.miForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            rol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            club: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), Object(_shared_compare_validator_directive__WEBPACK_IMPORTED_MODULE_8__["compareValidator"])('password')]]
        });
        if (this.templateData.titulo !== 'Agregar') {
            this.miForm.removeControl('password');
            this.miForm.removeControl('password2');
        }
    }
    setFormData() {
        const record = this.actRoute.snapshot.data['usuarioData'][0];
        this.miForm.patchValue(record);
        if (this.templateData.titulo === 'Eliminar') {
            this.miForm.controls.club.disable();
            this.miForm.controls.rol.disable();
        }
    }
    get name() {
        return this.miForm.get('name');
    }
    get email() {
        return this.miForm.get('email');
    }
    get club() {
        return this.miForm.get('club');
    }
    get rol() {
        return this.miForm.get('rol');
    }
    get password() {
        return this.miForm.get('password');
    }
    get password2() {
        return this.miForm.get('password2');
    }
    onSubmit(submitBtn) {
        submitBtn.disabled = true;
        const record = Object.assign({ id: this.templateData.id }, this.miForm.value);
        switch (this.templateData.titulo) {
            case 'Agregar':
                this.aceptarAgregar(record);
                break;
            case 'Modificar':
                this.aceptarEditar(record);
                break;
            case 'Eliminar':
                this.aceptarEliminar(record);
                break;
        }
    }
    aceptarAgregar(record) {
        this.crudService.addRecord$('users', record).subscribe(_ => {
            this.authService.afAuth.auth.createUserWithEmailAndPassword(record.email, record.password).then(() => this.msg.ok(this.miForm.controls['name'].value + ' Agregado satisfactoriamente'), error => this.msg.error('Error al agregar los datos: ' + error.statusText));
        }, error => this.msg.error('Error al agregar los datos: ' + error.statusText), () => this.router.navigate(['usuarios']));
    }
    aceptarEditar(record) {
        this.crudService.updateRecord$('users', record.id, record).subscribe(_ => this.msg.ok(record.name + ' Actualizado satisfactoriamente'), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => this.router.navigate(['usuarios']));
    }
    aceptarEliminar(record) {
        this.crudService.deleteRecord$('users', record.id).subscribe(_ => this.msg.ok(record.name + ' Eliminado satisfactoriamente'), error => this.msg.error('Error al eliminar los datos: ' + error.statusText), () => this.router.navigate(['usuarios']));
    }
    goBack() {
        this.location.back();
    }
    getTitle(action) {
        const objTitle = { add: 'Agregar', edit: 'Modificar', delete: 'Eliminar' };
        return objTitle[action];
    }
    getClassHeader(action) {
        const objStyle = { add: 'bg-primary', edit: 'bg-warning', delete: 'bg-danger' };
        return objStyle[action];
    }
};
UsuariosFormComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
UsuariosFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuarios-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuarios-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/usuarios/components/usuarios-form.component.html")).default,
        styles: [""]
    })
], UsuariosFormComponent);



/***/ }),

/***/ "./src/app/tables/usuarios/components/usuarios.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tables/usuarios/components/usuarios.component.ts ***!
  \******************************************************************/
/*! exports provided: UsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosComponent", function() { return UsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let UsuariosComponent = class UsuariosComponent {
    constructor(route) {
        this.route = route;
        this.tabla = [];
    }
    ngOnInit() {
        this.tabla = this.route.snapshot.data['usuarioData'];
    }
};
UsuariosComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
UsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuarios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuarios.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/usuarios/components/usuarios.component.html")).default
    })
], UsuariosComponent);



/***/ }),

/***/ "./src/app/tables/usuarios/usuarios-form-resolver.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/usuarios/usuarios-form-resolver.guard.ts ***!
  \*****************************************************************/
/*! exports provided: UsuariosFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosFormResolver", function() { return UsuariosFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");




let UsuariosFormResolver = class UsuariosFormResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        const allData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.crudService.getRecord$('users', id), this.crudService.getAllRecords$('clubes', 'nombre'));
        return allData$;
    }
};
UsuariosFormResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
UsuariosFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuariosFormResolver);



/***/ }),

/***/ "./src/app/tables/usuarios/usuarios-resolver.guard.ts":
/*!************************************************************!*\
  !*** ./src/app/tables/usuarios/usuarios-resolver.guard.ts ***!
  \************************************************************/
/*! exports provided: UsuariosResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosResolver", function() { return UsuariosResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let UsuariosResolver = class UsuariosResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        return this.crudService.getAllRecords$('users', 'name');
    }
};
UsuariosResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
UsuariosResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuariosResolver);



/***/ }),

/***/ "./src/app/tables/usuarios/usuarios-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/tables/usuarios/usuarios-routing.module.ts ***!
  \************************************************************/
/*! exports provided: UsuariosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosRoutingModule", function() { return UsuariosRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_usuarios_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/usuarios.component */ "./src/app/tables/usuarios/components/usuarios.component.ts");
/* harmony import */ var _components_usuarios_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/usuarios-form.component */ "./src/app/tables/usuarios/components/usuarios-form.component.ts");
/* harmony import */ var _usuarios_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuarios-resolver.guard */ "./src/app/tables/usuarios/usuarios-resolver.guard.ts");
/* harmony import */ var _usuarios_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuarios-form-resolver.guard */ "./src/app/tables/usuarios/usuarios-form-resolver.guard.ts");







const routes = [
    { path: '', resolve: { usuarioData: _usuarios_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["UsuariosResolver"] }, component: _components_usuarios_component__WEBPACK_IMPORTED_MODULE_3__["UsuariosComponent"] },
    { path: ':action', resolve: { usuarioData: _usuarios_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["UsuariosFormResolver"] }, component: _components_usuarios_form_component__WEBPACK_IMPORTED_MODULE_4__["UsuariosFormComponent"] },
    { path: ':action/:id', resolve: { usuarioData: _usuarios_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["UsuariosFormResolver"] }, component: _components_usuarios_form_component__WEBPACK_IMPORTED_MODULE_4__["UsuariosFormComponent"] }
];
let UsuariosRoutingModule = class UsuariosRoutingModule {
};
UsuariosRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], UsuariosRoutingModule);



/***/ }),

/***/ "./src/app/tables/usuarios/usuarios.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tables/usuarios/usuarios.module.ts ***!
  \****************************************************/
/*! exports provided: UsuariosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuariosModule", function() { return UsuariosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuarios-routing.module */ "./src/app/tables/usuarios/usuarios-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_usuarios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/usuarios.component */ "./src/app/tables/usuarios/components/usuarios.component.ts");
/* harmony import */ var _components_usuarios_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/usuarios-form.component */ "./src/app/tables/usuarios/components/usuarios-form.component.ts");








let UsuariosModule = class UsuariosModule {
};
UsuariosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_usuarios_component__WEBPACK_IMPORTED_MODULE_6__["UsuariosComponent"], _components_usuarios_form_component__WEBPACK_IMPORTED_MODULE_7__["UsuariosFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _usuarios_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsuariosRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ]
    })
], UsuariosModule);



/***/ })

}]);
//# sourceMappingURL=tables-usuarios-usuarios-module-es2015.js.map