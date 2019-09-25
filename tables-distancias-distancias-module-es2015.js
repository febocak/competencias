(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-distancias-distancias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/competencia-info.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/competencia-info.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\n  <div class=\"card-header\">\n    Compentencia\n  </div>\n\n  <div class=\"card-body\">\n    <p>{{ competencia.competencia }}</p>\n    <p>Desde: {{ competencia.desde }} hasta: {{ competencia.hasta }} </p>\n    <p>{{ competencia.club }}</p>\n    \n    <button class=\"btn btn-block btn-secondary\" (click)=\"goBack()\">\n      Regresar\n    </button>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias-form.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-3\">\n    <app-competencia-info\n      [competencia]=\"competencia\"\n    ></app-competencia-info>\n  </div>\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n    <div class=\"card mt-3\">\n      <div class=\"card-header\" [ngClass]=\"templateData.cardHeaderStyle\">\n        {{ templateData.titulo + \" distancia\" }}\n      </div>\n\n      <div class=\"card-body\">\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit(submitBtn)\">\n\n          <div class=\"row\">\n            <div class=\"col-12\">\n              <div class=\"form-group\">\n                <label for=\"categoria\" class=\"control-label\"> Categoría </label>\n                <select formControlName=\"categoria\" required\n                  [class.is-invalid]=\"categoria.invalid && categoria.touched\" class=\"custom-select\">\n                  <option value=\"categoria\"></option>\n                  <option [value]=\"registro.categoria\" *ngFor=\"let registro of tblCategoria\" >{{ registro.categoria }}</option>\n                </select>\n                <small class=\"text-danger\" [class.d-none]=\"categoria.untouched || !categoria.hasError('required')\">La categoría es requerida</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-4\">\n              <div class=\"form-group\">\n                <label for=\"embarcacion\" class=\"control-label\"> Embarcación </label>\n                <select formControlName=\"embarcacion\" required\n                  [class.is-invalid]=\"embarcacion.invalid && embarcacion.touched\" class=\"custom-select\">\n                  <option value=\"embarcacion\"></option>\n                  <option value=\"K1\">K1</option>\n                  <option value=\"K2\">K2</option>\n                  <option value=\"K4\">K4</option>\n                  <option value=\"430\">430</option>\n                  <option value=\"canoa\">Canoa</option>\n                </select>\n                <small class=\"text-danger\" [class.d-none]=\"embarcacion.untouched || !embarcacion.hasError('required')\">El tipo de embarcación es requerido</small>\n              </div>\n            </div>\n\n            <div class=\"col-4\">\n              <div class=\"form-group\">\n                <label for=\"distancia\" class=\"control-label\"> Distancia </label>\n                <input type=\"text\" formControlName=\"distancia\" maxlength=\"80\" [readonly]=\"templateData.titulo==='Eliminar'\"\n                  [class.is-invalid]=\"distancia.invalid && distancia.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La distancia es requerida</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button [disabled]=\"!miForm.valid\" #submitBtn\n                [ngClass]=\"templateData.titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\n                type=\"submit\" class=\"btn btn-block\">\n                {{ templateData.titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\n                Cancelar\n              </button>\n            </div>\n          </div>\n\n        </form>\n\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-lg-3\">\n    <app-competencia-info\n      [competencia]=\"competencia\"\n    ></app-competencia-info>\n  </div>\n\n  <div class=\"col-lg-9\">\n    <div class=\"card mt-3\">\n      <div class=\"card-header d-flex\">\n        Distancias\n        <a routerLink=\"/distancias/{{competencia.id}}/add\" class=\"text-primary ml-auto\">\n          <i class=\"fa fa-plus-circle fa-2x\"></i>\n        </a>\n      </div>\n    </div>\n\n    <table class=\"table table-bordered table-hover\">\n      <thead>\n        <tr>\n          <th> Categoría </th>\n          <th> Embarcación </th>\n          <th> Distancia </th>\n          <th> </th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor=\"let registro of tabla; let i = index\">\n          <td routerLink=\"/distancias/{{competencia.id}}/edit/{{i}}\"> {{ registro.categoria }} </td>\n          <td routerLink=\"/distancias/{{competencia.id}}/edit/{{i}}\"> {{ registro.embarcacion }} </td>\n          <td routerLink=\"/distancias/{{competencia.id}}/edit/{{i}}\"> {{ registro.distancia }} </td>\n          <td class=\"text-center\">\n            <a routerLink=\"/distancias/{{competencia.id}}/delete/{{i}}\" class=\"text-danger\">\n              <i class=\"fa fa-minus-circle fa-2x\"></i>\n            </a>\n          </td>\n        </tr>\n      </tbody>\n\n    </table>\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/tables/distancias/components/competencia-info.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/tables/distancias/components/competencia-info.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompetenciaInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetenciaInfoComponent", function() { return CompetenciaInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let CompetenciaInfoComponent = class CompetenciaInfoComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
CompetenciaInfoComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CompetenciaInfoComponent.prototype, "competencia", void 0);
CompetenciaInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-competencia-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./competencia-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/competencia-info.component.html")).default
    })
], CompetenciaInfoComponent);



/***/ }),

/***/ "./src/app/tables/distancias/components/distancias-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/tables/distancias/components/distancias-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: DistanciasFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanciasFormComponent", function() { return DistanciasFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");







let DistanciasFormComponent = class DistanciasFormComponent {
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
        this.competencia = Object.assign({ id: this.actRoute.snapshot.paramMap.get('idCompetencia') }, this.actRoute.snapshot.data['distanciaData'][0]);
        this.tblCategoria = this.actRoute.snapshot.data['distanciaData'][1];
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
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            embarcacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            distancia: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    setFormData() {
        const record = this.competencia.distancia[this.templateData.id];
        this.miForm.patchValue(record);
        if (this.templateData.titulo === 'Eliminar') {
            this.miForm.controls.categoria.disable();
        }
    }
    get embarcacion() {
        return this.miForm.get('embarcacion');
    }
    get distancia() {
        return this.miForm.get('distancia');
    }
    get categoria() {
        return this.miForm.get('categoria');
    }
    onSubmit(submitBtn) {
        submitBtn.disabled = true;
        this.prepararArreglo(this.templateData.titulo);
        this.guardar();
    }
    prepararArreglo(parAccion) {
        let objDistancia = {
            categoria: this.miForm.controls.categoria.value,
            embarcacion: this.miForm.controls.embarcacion.value,
            distancia: this.miForm.controls.distancia.value,
        };
        if (!this.competencia.distancia) {
            this.competencia = Object.assign({}, this.competencia, { distancia: [objDistancia] });
        }
        else if (parAccion === 'Agregar') {
            this.competencia.distancia.push(objDistancia);
        }
        else if (parAccion === 'Modificar') {
            this.competencia.distancia.splice(+this.templateData.id, 1, objDistancia);
        }
        else if (parAccion === 'Eliminar') {
            this.competencia.distancia.splice(+this.templateData.id, 1);
        }
    }
    guardar() {
        this.crudService.updateRecord$('competencias', this.competencia.id, this.competencia).subscribe(_ => this.msg.ok(this.miForm.controls['distancia'].value + ' Actualizado satisfactoriamente'), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => this.goBack());
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
DistanciasFormComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DistanciasFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-distancias-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./distancias-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias-form.component.html")).default,
        styles: [""]
    })
], DistanciasFormComponent);



/***/ }),

/***/ "./src/app/tables/distancias/components/distancias.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/tables/distancias/components/distancias.component.ts ***!
  \**********************************************************************/
/*! exports provided: DistanciasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanciasComponent", function() { return DistanciasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DistanciasComponent = class DistanciasComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.competencia = Object.assign({ id: this.route.snapshot.paramMap.get('idCompetencia') }, this.route.snapshot.data['distanciaData']);
        this.tabla = this.competencia.distancia;
    }
};
DistanciasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
DistanciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-distanciass',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./distancias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias.component.html")).default
    })
], DistanciasComponent);



/***/ }),

/***/ "./src/app/tables/distancias/distancias-form-resolver.guard.ts":
/*!*********************************************************************!*\
  !*** ./src/app/tables/distancias/distancias-form-resolver.guard.ts ***!
  \*********************************************************************/
/*! exports provided: DistanciasFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanciasFormResolver", function() { return DistanciasFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let DistanciasFormResolver = class DistanciasFormResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        const idCompetencia = route.paramMap.get('idCompetencia');
        const allData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.crudService.getRecord$('competencias', idCompetencia), this.crudService.getAllRecords$('categorias', 'categoria'));
        return allData$;
    }
};
DistanciasFormResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
DistanciasFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DistanciasFormResolver);



/***/ }),

/***/ "./src/app/tables/distancias/distancias-resolver.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/tables/distancias/distancias-resolver.guard.ts ***!
  \****************************************************************/
/*! exports provided: DistanciasResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanciasResolver", function() { return DistanciasResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let DistanciasResolver = class DistanciasResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('idCompetencia');
        return this.crudService.getRecord$('competencias', id);
    }
};
DistanciasResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
DistanciasResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DistanciasResolver);



/***/ }),

/***/ "./src/app/tables/distancias/distancias-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/tables/distancias/distancias-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: DistanciasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanciasRoutingModule", function() { return DistanciasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _distancias_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distancias-resolver.guard */ "./src/app/tables/distancias/distancias-resolver.guard.ts");
/* harmony import */ var _distancias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./distancias-form-resolver.guard */ "./src/app/tables/distancias/distancias-form-resolver.guard.ts");
/* harmony import */ var _components_distancias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/distancias.component */ "./src/app/tables/distancias/components/distancias.component.ts");
/* harmony import */ var _components_distancias_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/distancias-form.component */ "./src/app/tables/distancias/components/distancias-form.component.ts");







const routes = [
    { path: '', component: _components_distancias_component__WEBPACK_IMPORTED_MODULE_5__["DistanciasComponent"] },
    { path: ':idCompetencia', resolve: { distanciaData: _distancias_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["DistanciasResolver"] }, component: _components_distancias_component__WEBPACK_IMPORTED_MODULE_5__["DistanciasComponent"] },
    { path: ':idCompetencia/:action', resolve: { distanciaData: _distancias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["DistanciasFormResolver"] }, component: _components_distancias_form_component__WEBPACK_IMPORTED_MODULE_6__["DistanciasFormComponent"] },
    { path: ':idCompetencia/:action/:id', resolve: { distanciaData: _distancias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["DistanciasFormResolver"] }, component: _components_distancias_form_component__WEBPACK_IMPORTED_MODULE_6__["DistanciasFormComponent"] }
];
let DistanciasRoutingModule = class DistanciasRoutingModule {
};
DistanciasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DistanciasRoutingModule);



/***/ }),

/***/ "./src/app/tables/distancias/distancias.module.ts":
/*!********************************************************!*\
  !*** ./src/app/tables/distancias/distancias.module.ts ***!
  \********************************************************/
/*! exports provided: DistanciasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanciasModule", function() { return DistanciasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _distancias_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./distancias-routing.module */ "./src/app/tables/distancias/distancias-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_distancias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/distancias.component */ "./src/app/tables/distancias/components/distancias.component.ts");
/* harmony import */ var _components_distancias_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/distancias-form.component */ "./src/app/tables/distancias/components/distancias-form.component.ts");
/* harmony import */ var _components_competencia_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/competencia-info.component */ "./src/app/tables/distancias/components/competencia-info.component.ts");








let DistanciasModule = class DistanciasModule {
};
DistanciasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_distancias_component__WEBPACK_IMPORTED_MODULE_5__["DistanciasComponent"], _components_distancias_form_component__WEBPACK_IMPORTED_MODULE_6__["DistanciasFormComponent"], _components_competencia_info_component__WEBPACK_IMPORTED_MODULE_7__["CompetenciaInfoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _distancias_routing_module__WEBPACK_IMPORTED_MODULE_3__["DistanciasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], DistanciasModule);



/***/ })

}]);
//# sourceMappingURL=tables-distancias-distancias-module-es2015.js.map