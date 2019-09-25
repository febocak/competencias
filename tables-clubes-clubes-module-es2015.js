(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-clubes-clubes-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/clubes/components/clubes-form.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/clubes/components/clubes-form.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n    <div class=\"card mt-3\">\n      <div class=\"card-header\" [ngClass]=\"templateData.cardHeaderStyle\">\n        {{ templateData.titulo + \" club\" }}\n      </div>\n\n      <div class=\"card-body\">\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit(submitBtn)\">\n\n          <div class=\"form-group\">\n            <label for=\"nombre\" class=\"control-label\"> Nombre </label>\n            <input type=\"text\" formControlName=\"nombre\" [readonly]=\"templateData.titulo==='Eliminar'\"\n              [class.is-invalid]=\"nombre.invalid && nombre.touched\" class=\"form-control\" />\n            <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('required')\">El nombre es requerido</small>\n            <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('minlength')\">La longitud mínima es 2</small>\n          </div>\n\n\n          <div class=\"form-group\">\n            <label for=\"descripcion\" class=\"control-label\"> Descripción </label>\n            <input type=\"text\" formControlName=\"descripcion\" maxlength=\"80\" [readonly]=\"templateData.titulo==='Eliminar'\"\n              [class.is-invalid]=\"descripcion.invalid && descripcion.touched\" class=\"form-control\" />\n            <small class=\"text-danger\" [class.d-none]=\"descripcion.untouched || !descripcion.hasError('required')\">La descripción es requerida</small>\n            <small class=\"text-danger\" [class.d-none]=\"descripcion.untouched || !descripcion.hasError('minlength')\">La longitud mínima es 2</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"delegado\" class=\"control-label\"> Delegado </label>\n            <input type=\"text\" formControlName=\"delegado\" maxlength=\"80\" [readonly]=\"templateData.titulo==='Eliminar'\"\n              [class.is-invalid]=\"delegado.invalid && delegado.touched\" class=\"form-control\" />\n            <small class=\"text-danger\" [class.d-none]=\"delegado.untouched || !delegado.hasError('required')\">El delegado es requerido</small>\n            <small class=\"text-danger\" [class.d-none]=\"delegado.untouched || !delegado.hasError('minlength')\">La longitud mínima es 2</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"entrenador\" class=\"control-label\"> Entrenador </label>\n            <input type=\"text\" formControlName=\"entrenador\" maxlength=\"80\" [readonly]=\"templateData.titulo==='Eliminar'\"\n              [class.is-invalid]=\"entrenador.invalid && entrenador.touched\" class=\"form-control\" />\n            <small class=\"text-danger\" [class.d-none]=\"entrenador.untouched || !entrenador.hasError('required')\">El entrenador es requerido</small>\n            <small class=\"text-danger\" [class.d-none]=\"entrenador.untouched || !entrenador.hasError('minlength')\">La longitud mínima es 2</small>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button [disabled]=\"!miForm.valid\" #submitBtn\n                [ngClass]=\"templateData.titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\n                type=\"submit\" class=\"btn btn-block\">\n                {{ templateData.titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\n                Cancelar\n              </button>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/clubes/components/clubes.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/clubes/components/clubes.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\n  <div class=\"card-header d-flex\">\n    Clubes\n    <a routerLink=\"/clubes/add\" class=\"text-primary ml-auto\">\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\n    </a>\n  </div>\n</div>\n\n<table class=\"table table-bordered table-hover\">\n  <thead>\n    <tr>\n      <th>Nombre</th>\n      <th>Descripción</th>\n      <th>Logo</th>\n      <th> </th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let registro of tabla\">\n      <td routerLink=\"/clubes/edit/{{registro.id}}\"> {{ registro.nombre }} </td>\n      <td routerLink=\"/clubes/edit/{{registro.id}}\"> {{ registro.descripcion }} </td>\n      <td>\n        <a routerLink=\"/clubes/logo/{{registro.id}}\" class=\"text-primary\">\n          <i class=\"fa fa-picture-o fa-4x\"> </i>\n        </a>\n      </td>\n      <td class=\"text-center\">\n        <a routerLink=\"/clubes/delete/{{registro.id}}\" class=\"text-danger\">\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n\n</table>");

/***/ }),

/***/ "./src/app/tables/clubes/clubes-form-resolver.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/tables/clubes/clubes-form-resolver.guard.ts ***!
  \*************************************************************/
/*! exports provided: ClubesFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubesFormResolver", function() { return ClubesFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let ClubesFormResolver = class ClubesFormResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        return this.crudService.getRecord$('clubes', id);
    }
};
ClubesFormResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
ClubesFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClubesFormResolver);



/***/ }),

/***/ "./src/app/tables/clubes/clubes-resolver.guard.ts":
/*!********************************************************!*\
  !*** ./src/app/tables/clubes/clubes-resolver.guard.ts ***!
  \********************************************************/
/*! exports provided: ClubesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubesResolver", function() { return ClubesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let ClubesResolver = class ClubesResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        return this.crudService.getAllRecords$('clubes', 'nombre');
    }
};
ClubesResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
ClubesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClubesResolver);



/***/ }),

/***/ "./src/app/tables/clubes/clubes-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tables/clubes/clubes-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ClubesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubesRoutingModule", function() { return ClubesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_clubes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/clubes.component */ "./src/app/tables/clubes/components/clubes.component.ts");
/* harmony import */ var _components_clubes_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/clubes-form.component */ "./src/app/tables/clubes/components/clubes-form.component.ts");
/* harmony import */ var _clubes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./clubes-resolver.guard */ "./src/app/tables/clubes/clubes-resolver.guard.ts");
/* harmony import */ var _clubes_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./clubes-form-resolver.guard */ "./src/app/tables/clubes/clubes-form-resolver.guard.ts");







const routes = [
    { path: '', resolve: { clubData: _clubes_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["ClubesResolver"] }, component: _components_clubes_component__WEBPACK_IMPORTED_MODULE_3__["ClubesComponent"] },
    { path: ':action', resolve: { clubData: _clubes_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["ClubesFormResolver"] }, component: _components_clubes_form_component__WEBPACK_IMPORTED_MODULE_4__["ClubesFormComponent"] },
    { path: ':action/:id', resolve: { clubData: _clubes_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["ClubesFormResolver"] }, component: _components_clubes_form_component__WEBPACK_IMPORTED_MODULE_4__["ClubesFormComponent"] }
];
let ClubesRoutingModule = class ClubesRoutingModule {
};
ClubesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ClubesRoutingModule);



/***/ }),

/***/ "./src/app/tables/clubes/clubes.module.ts":
/*!************************************************!*\
  !*** ./src/app/tables/clubes/clubes.module.ts ***!
  \************************************************/
/*! exports provided: ClubesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubesModule", function() { return ClubesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _clubes_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clubes-routing.module */ "./src/app/tables/clubes/clubes-routing.module.ts");
/* harmony import */ var _components_clubes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/clubes.component */ "./src/app/tables/clubes/components/clubes.component.ts");
/* harmony import */ var _components_clubes_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/clubes-form.component */ "./src/app/tables/clubes/components/clubes-form.component.ts");







let ClubesModule = class ClubesModule {
};
ClubesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_clubes_component__WEBPACK_IMPORTED_MODULE_5__["ClubesComponent"], _components_clubes_form_component__WEBPACK_IMPORTED_MODULE_6__["ClubesFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _clubes_routing_module__WEBPACK_IMPORTED_MODULE_4__["ClubesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], ClubesModule);



/***/ }),

/***/ "./src/app/tables/clubes/components/clubes-form.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/tables/clubes/components/clubes-form.component.ts ***!
  \*******************************************************************/
/*! exports provided: ClubesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubesFormComponent", function() { return ClubesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");







let ClubesFormComponent = class ClubesFormComponent {
    constructor(crudService, fb, msg, location, actRoute, router) {
        this.crudService = crudService;
        this.fb = fb;
        this.msg = msg;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.templateData = { titulo: '', cardHeaderStyle: '', id: '' };
    }
    ngOnInit() {
        this.msg.clearMessages();
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
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            delegado: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            entrenador: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
    }
    setFormData() {
        this.miForm.patchValue(this.actRoute.snapshot.data['clubData']);
    }
    get nombre() {
        return this.miForm.get('nombre');
    }
    get descripcion() {
        return this.miForm.get('descripcion');
    }
    get delegado() {
        return this.miForm.get('delegado');
    }
    get entrenador() {
        return this.miForm.get('entrenador');
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
        this.crudService.addRecord$('clubes', record).subscribe(_ => this.msg.ok(this.miForm.controls['nombre'].value + ' Agregado satisfactoriamente'), error => this.msg.error('Error al agregar los datos: ' + error.statusText), () => this.router.navigate(['clubes']));
    }
    aceptarEditar(record) {
        this.crudService.updateRecord$('clubes', record.id, record).subscribe(_ => this.msg.ok(record.nombre + ' Actualizado satisfactoriamente'), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => this.router.navigate(['clubes']));
    }
    aceptarEliminar(record) {
        this.crudService.deleteRecord$('clubes', record.id).subscribe(_ => this.msg.ok(record.nombre + ' Eliminado satisfactoriamente'), error => this.msg.error('Error al eliminar los datos: ' + error.statusText), () => this.router.navigate(['clubes']));
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
ClubesFormComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ClubesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clubes-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clubes-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/clubes/components/clubes-form.component.html")).default
    })
], ClubesFormComponent);



/***/ }),

/***/ "./src/app/tables/clubes/components/clubes.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/tables/clubes/components/clubes.component.ts ***!
  \**************************************************************/
/*! exports provided: ClubesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClubesComponent", function() { return ClubesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let ClubesComponent = class ClubesComponent {
    constructor(route) {
        this.route = route;
        this.tabla = [];
    }
    ngOnInit() {
        this.tabla = this.route.snapshot.data['clubData'];
    }
};
ClubesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ClubesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-clubes',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./clubes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/clubes/components/clubes.component.html")).default
    })
], ClubesComponent);



/***/ })

}]);
//# sourceMappingURL=tables-clubes-clubes-module-es2015.js.map