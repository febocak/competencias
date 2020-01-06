(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-tipos-de-competencias-tipos-de-competencias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/tipos-de-competencias/components/tipos-de-competencias-form.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/tipos-de-competencias/components/tipos-de-competencias-form.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\" [ngClass]=\"templateData.cardHeaderStyle\">\r\n        {{ templateData.titulo + \" tipo de competencia\" }}\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit(submitBtn)\">\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"tipo\" class=\"control-label\"> Tipo </label>\r\n            <input type=\"text\" formControlName=\"tipo\" maxlength=\"80\" [readonly]=\"templateData.titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"tipo.invalid && tipo.touched\" class=\"form-control\" />\r\n            <small class=\"text-danger\" [class.d-none]=\"tipo.untouched || !tipo.hasError('required')\">El tipo es requerido</small>\r\n            <small class=\"text-danger\" [class.d-none]=\"tipo.untouched || !tipo.hasError('minlength')\">La longitud mínima es 3</small>\r\n          </div>\r\n\r\n          <div class=\"form-group\">\r\n            <label for=\"descripcion\" class=\"control-label\"> Descripción </label>\r\n            <input type=\"text\" formControlName=\"descripcion\" maxlength=\"80\" [readonly]=\"templateData.titulo==='Eliminar'\"\r\n              [class.is-invalid]=\"descripcion.invalid && descripcion.touched\" class=\"form-control\" />\r\n            <small class=\"text-danger\" [class.d-none]=\"descripcion.untouched || !descripcion.hasError('required')\">La descripción es requerida</small>\r\n            <small class=\"text-danger\" [class.d-none]=\"descripcion.untouched || !descripcion.hasError('minlength')\">La longitud mínima es 10</small>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"!miForm.valid\" #submitBtn\r\n                [ngClass]=\"templateData.titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                type=\"submit\" class=\"btn btn-block\">\r\n                {{ templateData.titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/tipos-de-competencias/components/tipos-de-competencias.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/tipos-de-competencias/components/tipos-de-competencias.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\r\n  <div class=\"card-header d-flex\">\r\n    Tipos de competencias\r\n    <a routerLink=\"/tipos-de-competencias/add\" class=\"text-primary ml-auto\">\r\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table table-bordered table-hover\">\r\n  <thead>\r\n    <tr>\r\n      <th> Tipo </th>\r\n      <th> Descripción </th>\r\n      <th> Distancias </th>\r\n      <th> </th>\r\n    </tr>\r\n  </thead>\r\n\r\n  <tbody>\r\n    <tr *ngFor=\"let registro of tabla\">\r\n      <td routerLink=\"/tipos-de-competencias/edit/{{registro.id}}\"> {{ registro.tipo }} </td>\r\n      <td routerLink=\"/tipos-de-competencias/edit/{{registro.id}}\"> {{ registro.descripcion }} </td>\r\n      <td class=\"text-center\">\r\n        <a routerLink=\"/distancias/{{registro.id}}\" class=\"text-primary\">\r\n          <i class=\"fa fa-cogs fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n      <td class=\"text-center\">\r\n        <a routerLink=\"/tipos-de-competencias/delete/{{registro.id}}\" class=\"text-danger\">\r\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n        </a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n\r\n</table>\r\n");

/***/ }),

/***/ "./src/app/tables/tipos-de-competencias/components/tipos-de-competencias-form.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/tables/tipos-de-competencias/components/tipos-de-competencias-form.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: TiposDeCompetenciasFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposDeCompetenciasFormComponent", function() { return TiposDeCompetenciasFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_array_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/array.service */ "./src/app/services/array.service.ts");








let TiposDeCompetenciasFormComponent = class TiposDeCompetenciasFormComponent {
    constructor(crudService, fb, msg, location, actRoute, router, arrayService) {
        this.crudService = crudService;
        this.fb = fb;
        this.msg = msg;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.arrayService = arrayService;
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
            tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]]
        });
    }
    setFormData() {
        const record = this.actRoute.snapshot.data['tipoDeCompetenciaData'][0];
        this.miForm.patchValue(record);
    }
    get tipo() {
        return this.miForm.get('tipo');
    }
    get descripcion() {
        return this.miForm.get('descripcion');
    }
    onSubmit(submitBtn) {
        submitBtn.disabled = true;
        const record = Object.assign({ id: this.templateData.id }, this.miForm.value);
        if (this.templateData.titulo !== 'Eliminar' && !this.validations(record)) {
            submitBtn.disabled = false;
            return;
        }
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
        this.crudService.addRecord$('tipos-de-competencias', record).subscribe(_ => this.msg.ok(this.miForm.controls['tipo'].value + ' Agregado satisfactoriamente'), error => this.msg.error('Error al agregar los datos: ' + error.statusText), () => this.router.navigate(['tipos-de-competencias']));
    }
    aceptarEditar(record) {
        this.crudService.updateRecord$('tipos-de-competencias', record.id, record).subscribe(_ => this.msg.ok(record.tipo + ' Actualizado satisfactoriamente'), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => this.router.navigate(['tipos-de-competencias']));
    }
    aceptarEliminar(record) {
        this.crudService.deleteRecord$('tipos-de-competencias', record.id).subscribe(_ => this.msg.ok(record.tipo + ' Eliminado satisfactoriamente'), error => this.msg.error('Error al eliminar los datos: ' + error.statusText), () => this.router.navigate(['tipos-de-competencias']));
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
    validations(record) {
        const tabla = this.actRoute.snapshot.data['tipoDeCompetenciaData'][1];
        const errorMessages = [];
        errorMessages.push('Ya hay otro registro con el mismo tipo');
        errorMessages.push('Ya hay otro registro con la mismas descripción');
        const objSearch = [];
        objSearch.push({ tipo: record.tipo });
        objSearch.push({ descripcion: record.descripcion });
        for (let i = 0; i < objSearch.length; i++) {
            const encontro = this.arrayService.find(tabla, objSearch[i]);
            if (!!encontro) {
                if (this.templateData.titulo === 'Agregar') {
                    this.msg.warning(errorMessages[i]);
                    return false;
                }
                else {
                    if (record.id !== encontro.id) {
                        this.msg.warning(errorMessages[i]);
                        return false;
                    }
                }
            }
        }
        return true;
    }
};
TiposDeCompetenciasFormComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_array_service__WEBPACK_IMPORTED_MODULE_7__["ArrayService"] }
];
TiposDeCompetenciasFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tipos-de-competencias-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tipos-de-competencias-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/tipos-de-competencias/components/tipos-de-competencias-form.component.html")).default
    })
], TiposDeCompetenciasFormComponent);



/***/ }),

/***/ "./src/app/tables/tipos-de-competencias/components/tipos-de-competencias.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/tables/tipos-de-competencias/components/tipos-de-competencias.component.ts ***!
  \********************************************************************************************/
/*! exports provided: TiposDeCompetenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposDeCompetenciasComponent", function() { return TiposDeCompetenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let TiposDeCompetenciasComponent = class TiposDeCompetenciasComponent {
    constructor(route) {
        this.route = route;
        this.tabla = [];
    }
    ngOnInit() {
        this.tabla = this.route.snapshot.data['tipoDeCompetenciaData'];
    }
};
TiposDeCompetenciasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
TiposDeCompetenciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tipos-de-competencias',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tipos-de-competencias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/tipos-de-competencias/components/tipos-de-competencias.component.html")).default
    })
], TiposDeCompetenciasComponent);



/***/ }),

/***/ "./src/app/tables/tipos-de-competencias/tipos-de-competencias-form-resolver.guard.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/tables/tipos-de-competencias/tipos-de-competencias-form-resolver.guard.ts ***!
  \*******************************************************************************************/
/*! exports provided: TiposDeCompetenciasFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposDeCompetenciasFormResolver", function() { return TiposDeCompetenciasFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");




let TiposDeCompetenciasFormResolver = class TiposDeCompetenciasFormResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        const allData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.crudService.getRecord$('tipos-de-competencias', id), this.crudService.getAllRecords$('tipos-de-competencias', 'tipo'));
        return allData$;
    }
};
TiposDeCompetenciasFormResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
TiposDeCompetenciasFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TiposDeCompetenciasFormResolver);



/***/ }),

/***/ "./src/app/tables/tipos-de-competencias/tipos-de-competencias-resolver.guard.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tables/tipos-de-competencias/tipos-de-competencias-resolver.guard.ts ***!
  \**************************************************************************************/
/*! exports provided: TiposDeCompeteciasResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposDeCompeteciasResolver", function() { return TiposDeCompeteciasResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let TiposDeCompeteciasResolver = class TiposDeCompeteciasResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        return this.crudService.getAllRecords$('tipos-de-competencias', 'tipo');
    }
};
TiposDeCompeteciasResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
TiposDeCompeteciasResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TiposDeCompeteciasResolver);



/***/ }),

/***/ "./src/app/tables/tipos-de-competencias/tipos-de-competencias-routing.module.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/tables/tipos-de-competencias/tipos-de-competencias-routing.module.ts ***!
  \**************************************************************************************/
/*! exports provided: TiposDeCompetenciasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposDeCompetenciasRoutingModule", function() { return TiposDeCompetenciasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_tipos_de_competencias_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tipos-de-competencias.component */ "./src/app/tables/tipos-de-competencias/components/tipos-de-competencias.component.ts");
/* harmony import */ var _components_tipos_de_competencias_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tipos-de-competencias-form.component */ "./src/app/tables/tipos-de-competencias/components/tipos-de-competencias-form.component.ts");
/* harmony import */ var _tipos_de_competencias_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tipos-de-competencias-resolver.guard */ "./src/app/tables/tipos-de-competencias/tipos-de-competencias-resolver.guard.ts");
/* harmony import */ var _tipos_de_competencias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tipos-de-competencias-form-resolver.guard */ "./src/app/tables/tipos-de-competencias/tipos-de-competencias-form-resolver.guard.ts");







const routes = [
    {
        path: '',
        resolve: { tipoDeCompetenciaData: _tipos_de_competencias_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["TiposDeCompeteciasResolver"] },
        component: _components_tipos_de_competencias_component__WEBPACK_IMPORTED_MODULE_3__["TiposDeCompetenciasComponent"]
    },
    {
        path: ':action',
        resolve: { tipoDeCompetenciaData: _tipos_de_competencias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["TiposDeCompetenciasFormResolver"] },
        component: _components_tipos_de_competencias_form_component__WEBPACK_IMPORTED_MODULE_4__["TiposDeCompetenciasFormComponent"]
    },
    {
        path: ':action/:id',
        resolve: { tipoDeCompetenciaData: _tipos_de_competencias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["TiposDeCompetenciasFormResolver"] },
        component: _components_tipos_de_competencias_form_component__WEBPACK_IMPORTED_MODULE_4__["TiposDeCompetenciasFormComponent"]
    }
];
let TiposDeCompetenciasRoutingModule = class TiposDeCompetenciasRoutingModule {
};
TiposDeCompetenciasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TiposDeCompetenciasRoutingModule);



/***/ }),

/***/ "./src/app/tables/tipos-de-competencias/tipos-de-competencias.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/tables/tipos-de-competencias/tipos-de-competencias.module.ts ***!
  \******************************************************************************/
/*! exports provided: TiposDeCompetenciasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TiposDeCompetenciasModule", function() { return TiposDeCompetenciasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tipos_de_competencias_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tipos-de-competencias-routing.module */ "./src/app/tables/tipos-de-competencias/tipos-de-competencias-routing.module.ts");
/* harmony import */ var _components_tipos_de_competencias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tipos-de-competencias.component */ "./src/app/tables/tipos-de-competencias/components/tipos-de-competencias.component.ts");
/* harmony import */ var _components_tipos_de_competencias_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tipos-de-competencias-form.component */ "./src/app/tables/tipos-de-competencias/components/tipos-de-competencias-form.component.ts");







let TiposDeCompetenciasModule = class TiposDeCompetenciasModule {
};
TiposDeCompetenciasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_tipos_de_competencias_component__WEBPACK_IMPORTED_MODULE_5__["TiposDeCompetenciasComponent"], _components_tipos_de_competencias_form_component__WEBPACK_IMPORTED_MODULE_6__["TiposDeCompetenciasFormComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _tipos_de_competencias_routing_module__WEBPACK_IMPORTED_MODULE_4__["TiposDeCompetenciasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], TiposDeCompetenciasModule);



/***/ })

}]);
//# sourceMappingURL=tables-tipos-de-competencias-tipos-de-competencias-module-es2015.js.map