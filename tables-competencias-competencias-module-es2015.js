(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-competencias-competencias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/competencias/components/competencias-form.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/competencias/components/competencias-form.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n    <div class=\"card mt-3\">\n      <div class=\"card-header\" [ngClass]=\"templateData.cardHeaderStyle\">\n        {{ templateData.titulo + \" Compentencia\" }}\n        \n      </div>\n\n      <div class=\"card-body\">\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit(submitBtn)\">\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"desde\" class=\"control-label\"> Desde </label>\n                <input type=\"date\" formControlName=\"desde\" [readonly]=\"templateData.titulo==='Eliminar'\"\n                  [class.is-invalid]=\"desde.invalid && desde.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"desde.untouched || !desde.hasError('required')\">El campo desde es requerido</small>\n              </div>\n\n            </div>\n\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"hasta\" class=\"control-label\"> hasta </label>\n                <input type=\"date\" formControlName=\"hasta\" [readonly]=\"templateData.titulo==='Eliminar'\"\n                  [class.is-invalid]=\"hasta.invalid && hasta.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"hasta.untouched || !hasta.hasError('required')\">El campo hasta es requerido</small>\n              </div>\n\n            </div>\n\n          </div>\n\n              <div class=\"form-group\">\n                <label for=\"competencia\" class=\"control-label\"> Descripción </label>\n                <input type=\"text\" formControlName=\"competencia\" [readonly]=\"templateData.titulo==='Eliminar'\" required maxlength=\"80\"\n                  [class.is-invalid]=\"competencia.invalid && competencia.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"competencia.untouched || !competencia.hasError('required')\">La descripción es requerida</small>\n                <small class=\"text-danger\" [class.d-none]=\"competencia.untouched || !competencia.hasError('minlength')\">La longitud mínima es 2</small>\n              </div>\n\n          <div class=\"form-group\">\n            <label for=\"club\" class=\"control-label\"> Club </label>\n            <select formControlName=\"club\" required\n              [class.is-invalid]=\"club.invalid && club.touched\" class=\"custom-select\">\n              <option value=\"club\"></option>\n              <option [value]=\"registro.nombre\" *ngFor=\"let registro of tblClubes\" >{{ registro.nombre }}</option>\n            </select>\n            <small class=\"text-danger\" [class.d-none]=\"club.untouched || !club.hasError('required')\">El club es requerido</small>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button [disabled]=\"!miForm.valid\" #submitBtn\n                [ngClass]=\"templateData.titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\n                type=\"submit\" class=\"btn btn-block\">\n                {{ templateData.titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\n                Cancelar\n              </button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/competencias/components/competencias.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/competencias/components/competencias.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\n  <div class=\"card-header d-flex\">\n    Competencias\n    <a routerLink=\"/competencias/add\" class=\"text-primary ml-auto\">\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\n    </a>\n  </div>\n</div>\n\n<table class=\"table table-bordered table-hover\">\n  <thead>\n    <tr>\n      <th> Desde </th>\n      <th> Hasta </th>\n      <th> Competencia </th>\n      <th> Club </th>\n      <th> </th>\n      <th> </th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let registro of tabla\">\n      <td routerLink=\"/competencias/edit/{{registro.id}}\"> {{ registro.desde }} </td>\n      <td routerLink=\"/competencias/edit/{{registro.id}}\"> {{ registro.hasta }} </td>\n      <td routerLink=\"/competencias/edit/{{registro.id}}\"> {{ registro.competencia }} </td>\n      <td routerLink=\"/competencias/edit/{{registro.id}}\"> {{ registro.club }} </td>\n      <td class=\"text-center\">\n        <a routerLink=\"/distancias/{{registro.id}}\" class=\"text-primary\">\n          <i class=\"fa fa-cogs fa-2x\"></i>\n        </a>\n      </td>\n      <td class=\"text-center\">\n        <a routerLink=\"/competencias/delete/{{registro.id}}\" class=\"text-danger\">\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n\n</table>");

/***/ }),

/***/ "./src/app/tables/competencias/competencias-form-resolver.guard.ts":
/*!*************************************************************************!*\
  !*** ./src/app/tables/competencias/competencias-form-resolver.guard.ts ***!
  \*************************************************************************/
/*! exports provided: CompetenciasFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasFormResolver", function() { return CompetenciasFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");




let CompetenciasFormResolver = class CompetenciasFormResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        const allData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.crudService.getRecord$('competencias', id), this.crudService.getAllRecords$('clubes', 'nombre'));
        return allData$;
    }
};
CompetenciasFormResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
CompetenciasFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompetenciasFormResolver);



/***/ }),

/***/ "./src/app/tables/competencias/competencias-resolver.guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/tables/competencias/competencias-resolver.guard.ts ***!
  \********************************************************************/
/*! exports provided: CompetenciasResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasResolver", function() { return CompetenciasResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let CompetenciasResolver = class CompetenciasResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        return this.crudService.getAllRecords$('competencias', 'competencia');
    }
};
CompetenciasResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
CompetenciasResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CompetenciasResolver);



/***/ }),

/***/ "./src/app/tables/competencias/competencias-routing.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/tables/competencias/competencias-routing.module.ts ***!
  \********************************************************************/
/*! exports provided: CompetenciasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasRoutingModule", function() { return CompetenciasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _competencias_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competencias-resolver.guard */ "./src/app/tables/competencias/competencias-resolver.guard.ts");
/* harmony import */ var _components_competencias_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/competencias.component */ "./src/app/tables/competencias/components/competencias.component.ts");
/* harmony import */ var _competencias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./competencias-form-resolver.guard */ "./src/app/tables/competencias/competencias-form-resolver.guard.ts");
/* harmony import */ var _components_competencias_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/competencias-form.component */ "./src/app/tables/competencias/components/competencias-form.component.ts");







const routes = [
    { path: '', resolve: { competenciaData: _competencias_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["CompetenciasResolver"] }, component: _components_competencias_component__WEBPACK_IMPORTED_MODULE_4__["CompetenciasComponent"] },
    { path: ':action', resolve: { competenciaData: _competencias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["CompetenciasFormResolver"] }, component: _components_competencias_form_component__WEBPACK_IMPORTED_MODULE_6__["CompetenciasFormComponent"] },
    { path: ':action/:id', resolve: { competenciaData: _competencias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["CompetenciasFormResolver"] }, component: _components_competencias_form_component__WEBPACK_IMPORTED_MODULE_6__["CompetenciasFormComponent"] }
];
let CompetenciasRoutingModule = class CompetenciasRoutingModule {
};
CompetenciasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CompetenciasRoutingModule);



/***/ }),

/***/ "./src/app/tables/competencias/competencias.module.ts":
/*!************************************************************!*\
  !*** ./src/app/tables/competencias/competencias.module.ts ***!
  \************************************************************/
/*! exports provided: CompetenciasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasModule", function() { return CompetenciasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _competencias_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./competencias-routing.module */ "./src/app/tables/competencias/competencias-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_competencias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/competencias.component */ "./src/app/tables/competencias/components/competencias.component.ts");
/* harmony import */ var _components_competencias_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/competencias-form.component */ "./src/app/tables/competencias/components/competencias-form.component.ts");







let CompetenciasModule = class CompetenciasModule {
};
CompetenciasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_competencias_component__WEBPACK_IMPORTED_MODULE_5__["CompetenciasComponent"], _components_competencias_form_component__WEBPACK_IMPORTED_MODULE_6__["CompetenciasFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _competencias_routing_module__WEBPACK_IMPORTED_MODULE_3__["CompetenciasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], CompetenciasModule);



/***/ }),

/***/ "./src/app/tables/competencias/components/competencias-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/tables/competencias/components/competencias-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CompetenciasFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasFormComponent", function() { return CompetenciasFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");







let CompetenciasFormComponent = class CompetenciasFormComponent {
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
        this.tblClubes = this.actRoute.snapshot.data['competenciaData'][1];
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
            desde: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            hasta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            competencia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            club: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    setFormData() {
        const record = this.actRoute.snapshot.data['competenciaData'][0];
        this.miForm.patchValue(record);
        if (this.templateData.titulo === 'Eliminar') {
            this.miForm.controls.club.disable();
        }
    }
    get desde() {
        return this.miForm.get('desde');
    }
    get hasta() {
        return this.miForm.get('hasta');
    }
    get competencia() {
        return this.miForm.get('competencia');
    }
    get club() {
        return this.miForm.get('club');
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
        this.crudService.addRecord$('competencias', record).subscribe(_ => this.msg.ok(this.miForm.controls['competencia'].value + ' Agregado satisfactoriamente'), error => this.msg.error('Error al agregar los datos: ' + error.statusText), () => this.router.navigate(['competencias']));
    }
    aceptarEditar(record) {
        this.crudService.updateRecord$('competencias', record.id, record).subscribe(_ => this.msg.ok(record.competencia + ' Actualizado satisfactoriamente'), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => this.router.navigate(['competencias']));
    }
    aceptarEliminar(record) {
        this.crudService.deleteRecord$('competencias', record.id).subscribe(_ => this.msg.ok(record.competencia + ' Eliminado satisfactoriamente'), error => this.msg.error('Error al eliminar los datos: ' + error.statusText), () => this.router.navigate(['competencias']));
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
CompetenciasFormComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CompetenciasFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-competencias-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./competencias-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/competencias/components/competencias-form.component.html")).default,
        styles: [""]
    })
], CompetenciasFormComponent);



/***/ }),

/***/ "./src/app/tables/competencias/components/competencias.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/tables/competencias/components/competencias.component.ts ***!
  \**************************************************************************/
/*! exports provided: CompetenciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciasComponent", function() { return CompetenciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let CompetenciasComponent = class CompetenciasComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.tabla = this.route.snapshot.data['competenciaData'];
    }
};
CompetenciasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
CompetenciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-competencias',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./competencias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/competencias/components/competencias.component.html")).default
    })
], CompetenciasComponent);



/***/ })

}]);
//# sourceMappingURL=tables-competencias-competencias-module-es2015.js.map