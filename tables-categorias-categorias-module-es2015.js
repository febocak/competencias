(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-categorias-categorias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/categorias/components/categorias-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/categorias/components/categorias-form.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n    <div class=\"card mt-3\">\n      <div class=\"card-header\" [ngClass]=\"templateData.cardHeaderStyle\">\n        {{ templateData.titulo + \" categoría\" }}\n      </div>\n\n      <div class=\"card-body\">\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit(submitBtn)\">\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"desde\" class=\"control-label\"> Desde </label>\n                <input type=\"number\" formControlName=\"desde\" [readonly]=\"templateData.titulo==='Eliminar'\"\n                  min=\"1900\" max=\"2020\"\n                  [class.is-invalid]=\"desde.invalid && desde.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"desde.untouched || !desde.hasError('required')\">El campo desde es requerido</small>\n                <small class=\"text-danger\" [class.d-none]=\"desde.untouched || !desde.hasError('min')\">Debe colocar un valor mayor a 1900</small>\n                <small class=\"text-danger\" [class.d-none]=\"desde.untouched || !desde.hasError('max')\">Debe colocar un valor menor a 2020</small>\n              </div>\n\n            </div>\n\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"hasta\" class=\"control-label\"> hasta </label>\n                <input type=\"number\" formControlName=\"hasta\" [readonly]=\"templateData.titulo==='Eliminar'\"\n                min=\"1900\" max=\"2020\"\n                  [class.is-invalid]=\"hasta.invalid && hasta.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"hasta.untouched || !hasta.hasError('required')\">El campo hasta es requerido</small>\n                <small class=\"text-danger\" [class.d-none]=\"hasta.untouched || !hasta.hasError('min')\">Debe colocar un valor mayor a 1900</small>\n                <small class=\"text-danger\" [class.d-none]=\"hasta.untouched || !hasta.hasError('max')\">Debe colocar un valor menor a 2020</small>\n              </div>\n\n            </div>\n\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"genero\" class=\"control-label\"> Genero </label>\n            <select formControlName=\"genero\" required \n              [class.is-invalid]=\"genero.invalid && genero.touched\" class=\"custom-select\" > \n              <option value=\"genero\"></option>\n              <option value=\"Masculino\">Masculino</option>\n              <option value=\"Femenino\">Femenino</option>\n              <option value=\"Masculino y Femenino\">Masculino y Femenino</option>\n            </select>\n            <small class=\"text-danger\" [class.d-none]=\"genero.untouched || !genero.hasError('required')\">El genero es requerido</small>\n            <small class=\"text-danger\" [class.d-none]=\"genero.untouched || !genero.hasError('invalidGenero')\">Seleccione el genero</small>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"categoria\" class=\"control-label\"> Categoría </label>\n            <input type=\"text\" formControlName=\"categoria\" maxlength=\"80\" [readonly]=\"templateData.titulo==='Eliminar'\"\n              [class.is-invalid]=\"categoria.invalid && categoria.touched\" class=\"form-control\" />\n            <small class=\"text-danger\" [class.d-none]=\"categoria.untouched || !categoria.hasError('required')\">La categoría es requerida</small>\n            <small class=\"text-danger\" [class.d-none]=\"categoria.untouched || !categoria.hasError('minlength')\">La longitud mínima es 3</small>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button [disabled]=\"!miForm.valid\" #submitBtn\n                [ngClass]=\"templateData.titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\n                type=\"submit\" class=\"btn btn-block\">\n                {{ templateData.titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\n                Cancelar\n              </button>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/categorias/components/categorias.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/categorias/components/categorias.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\n  <div class=\"card-header d-flex\">\n    Categorías\n    <a routerLink=\"/categorias/add\" class=\"text-primary ml-auto\">\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\n    </a>\n  </div>\n</div>\n\n<table class=\"table table-bordered table-hover\">\n  <thead>\n    <tr>\n      <th> Desde </th>\n      <th> Hasta </th>\n      <th> Genero </th>\n      <th> Categoría </th>\n      <th> </th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let registro of tabla\">\n      <td routerLink=\"/categorias/edit/{{registro.id}}\"> {{ registro.desde }} </td>\n      <td routerLink=\"/categorias/edit/{{registro.id}}\"> {{ registro.hasta }} </td>\n      <td routerLink=\"/categorias/edit/{{registro.id}}\"> {{ registro.genero }} </td>\n      <td routerLink=\"/categorias/edit/{{registro.id}}\"> {{ registro.categoria }} </td>\n      <td class=\"text-center\">\n        <a routerLink=\"/categorias/delete/{{registro.id}}\" class=\"text-danger\">\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n\n</table>");

/***/ }),

/***/ "./src/app/tables/categorias/categorias-form-resolver.guard.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tables/categorias/categorias-form-resolver.guard.ts ***!
  \*********************************************************************/
/*! exports provided: CategoriasFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasFormResolver", function() { return CategoriasFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let CategoriasFormResolver = class CategoriasFormResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        return this.crudService.getRecord$('categorias', id);
    }
};
CategoriasFormResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
CategoriasFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriasFormResolver);



/***/ }),

/***/ "./src/app/tables/categorias/categorias-resolver.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/tables/categorias/categorias-resolver.guard.ts ***!
  \****************************************************************/
/*! exports provided: CategoriasResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasResolver", function() { return CategoriasResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let CategoriasResolver = class CategoriasResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        return this.crudService.getAllRecords$('categorias', 'desde');
    }
};
CategoriasResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
CategoriasResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriasResolver);



/***/ }),

/***/ "./src/app/tables/categorias/categorias-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/tables/categorias/categorias-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: CategoriasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasRoutingModule", function() { return CategoriasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_categorias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/categorias.component */ "./src/app/tables/categorias/components/categorias.component.ts");
/* harmony import */ var _components_categorias_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/categorias-form.component */ "./src/app/tables/categorias/components/categorias-form.component.ts");
/* harmony import */ var _categorias_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias-resolver.guard */ "./src/app/tables/categorias/categorias-resolver.guard.ts");
/* harmony import */ var _categorias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categorias-form-resolver.guard */ "./src/app/tables/categorias/categorias-form-resolver.guard.ts");







const routes = [
    {
        path: '',
        resolve: { categoriaData: _categorias_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["CategoriasResolver"] },
        component: _components_categorias_component__WEBPACK_IMPORTED_MODULE_3__["CategoriasComponent"]
    },
    {
        path: ':action',
        resolve: { categoriaData: _categorias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["CategoriasFormResolver"] },
        component: _components_categorias_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoriasFormComponent"]
    },
    {
        path: ':action/:id',
        resolve: { categoriaData: _categorias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["CategoriasFormResolver"] },
        component: _components_categorias_form_component__WEBPACK_IMPORTED_MODULE_4__["CategoriasFormComponent"]
    }
];
let CategoriasRoutingModule = class CategoriasRoutingModule {
};
CategoriasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoriasRoutingModule);



/***/ }),

/***/ "./src/app/tables/categorias/categorias.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tables/categorias/categorias.module.ts ***!
  \********************************************************/
/*! exports provided: CategoriasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasModule", function() { return CategoriasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _categorias_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categorias-routing.module */ "./src/app/tables/categorias/categorias-routing.module.ts");
/* harmony import */ var _components_categorias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/categorias.component */ "./src/app/tables/categorias/components/categorias.component.ts");
/* harmony import */ var _components_categorias_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/categorias-form.component */ "./src/app/tables/categorias/components/categorias-form.component.ts");







let CategoriasModule = class CategoriasModule {
};
CategoriasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_categorias_component__WEBPACK_IMPORTED_MODULE_5__["CategoriasComponent"], _components_categorias_form_component__WEBPACK_IMPORTED_MODULE_6__["CategoriasFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _categorias_routing_module__WEBPACK_IMPORTED_MODULE_4__["CategoriasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], CategoriasModule);



/***/ }),

/***/ "./src/app/tables/categorias/components/categorias-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tables/categorias/components/categorias-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: CategoriasFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasFormComponent", function() { return CategoriasFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");







let CategoriasFormComponent = class CategoriasFormComponent {
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
            desde: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(2020)]],
            hasta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1900), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(2020)]],
            genero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
    }
    setFormData() {
        const record = this.actRoute.snapshot.data['categoriaData'];
        this.miForm.patchValue(record);
        if (this.templateData.titulo === 'Eliminar') {
            this.miForm.controls.genero.disable();
        }
    }
    get desde() {
        return this.miForm.get('desde');
    }
    get hasta() {
        return this.miForm.get('hasta');
    }
    get genero() {
        return this.miForm.get('genero');
    }
    get categoria() {
        return this.miForm.get('categoria');
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
        this.crudService.addRecord$('categorias', record).subscribe(_ => this.msg.ok(this.miForm.controls['categoria'].value + ' Agregado satisfactoriamente'), error => this.msg.error('Error al agregar los datos: ' + error.statusText), () => this.router.navigate(['categorias']));
    }
    aceptarEditar(record) {
        this.crudService.updateRecord$('categorias', record.id, record).subscribe(_ => this.msg.ok(record.categoria + ' Actualizado satisfactoriamente'), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => this.router.navigate(['categorias']));
    }
    aceptarEliminar(record) {
        this.crudService.deleteRecord$('categorias', record.id).subscribe(_ => this.msg.ok(record.categoria + ' Eliminado satisfactoriamente'), error => this.msg.error('Error al eliminar los datos: ' + error.statusText), () => this.router.navigate(['categorias']));
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
CategoriasFormComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CategoriasFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categorias-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/categorias/components/categorias-form.component.html")).default
    })
], CategoriasFormComponent);



/***/ }),

/***/ "./src/app/tables/categorias/components/categorias.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/tables/categorias/components/categorias.component.ts ***!
  \**********************************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CategoriasComponent = class CategoriasComponent {
    constructor(route) {
        this.route = route;
        this.tabla = [];
    }
    ngOnInit() {
        this.tabla = this.route.snapshot.data['categoriaData'];
    }
};
CategoriasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CategoriasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./categorias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/categorias/components/categorias.component.html")).default
    })
], CategoriasComponent);



/***/ })

}]);
//# sourceMappingURL=tables-categorias-categorias-module-es2015.js.map