(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-distancias-distancias-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias-form.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias-form.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-lg-3\">\r\n    <app-tipo-de-competencia-info\r\n      [tCompetencia]=\"tCompetencia\"\r\n    ></app-tipo-de-competencia-info>\r\n  </div>\r\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\r\n\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header\" [ngClass]=\"templateData.cardHeaderStyle\">\r\n        {{ templateData.titulo + \" distancia\" }}\r\n      </div>\r\n\r\n      <div class=\"card-body\">\r\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit(submitBtn)\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"categoria\" class=\"control-label\"> Categoría </label>\r\n                <select formControlName=\"categoria\" required\r\n                  [class.is-invalid]=\"categoria.invalid && categoria.touched\" class=\"custom-select\">\r\n                  <option value=\"categoria\"></option>\r\n                  <option [value]=\"registro.categoria\" *ngFor=\"let registro of tblCategoria\" >{{ registro.categoria }}</option>\r\n                </select>\r\n                <small class=\"text-danger\" [class.d-none]=\"categoria.untouched || !categoria.hasError('required')\">La categoría es requerida</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"embarcacion\" class=\"control-label\"> Embarcación </label>\r\n                <select formControlName=\"embarcacion\" required\r\n                  [class.is-invalid]=\"embarcacion.invalid && embarcacion.touched\" class=\"custom-select\">\r\n                  <option value=\"embarcacion\"></option>\r\n                  <option value=\"K1\">K1</option>\r\n                  <option value=\"K2\">K2</option>\r\n                  <option value=\"K4\">K4</option>\r\n                  <option value=\"430\">430</option>\r\n                  <option value=\"canoa\">Canoa</option>\r\n                </select>\r\n                <small class=\"text-danger\" [class.d-none]=\"embarcacion.untouched || !embarcacion.hasError('required')\">El tipo de embarcación es requerido</small>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-4\">\r\n              <div class=\"form-group\">\r\n                <label for=\"distancia\" class=\"control-label\"> Distancia </label>\r\n                <input type=\"text\" formControlName=\"distancia\" maxlength=\"80\" [readonly]=\"templateData.titulo==='Eliminar'\"\r\n                  [class.is-invalid]=\"distancia.invalid && distancia.touched\" class=\"form-control\" />\r\n                <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La distancia es requerida</small>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-6\">\r\n              <button [disabled]=\"!miForm.valid\" #submitBtn\r\n                [ngClass]=\"templateData.titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\r\n                type=\"submit\" class=\"btn btn-block\">\r\n                {{ templateData.titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\r\n              </button>\r\n            </div>\r\n            <div class=\"col-6\">\r\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\r\n                Cancelar\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </form>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/distancias.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-lg-3\">\r\n    <app-tipo-de-competencia-info\r\n      [tCompetencia]=\"tCompetencia\"\r\n    ></app-tipo-de-competencia-info>\r\n  </div>\r\n\r\n  <div class=\"col-lg-9\">\r\n    <div class=\"card mt-3\">\r\n      <div class=\"card-header d-flex\">\r\n        Distancias\r\n        <a routerLink=\"/distancias/{{tCompetencia.id}}/add\" class=\"text-primary ml-auto\">\r\n          <i class=\"fa fa-plus-circle fa-2x\"></i>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <table class=\"table table-bordered table-hover\">\r\n      <thead>\r\n        <tr>\r\n          <th> Categoría </th>\r\n          <th> Embarcación </th>\r\n          <th> Distancia </th>\r\n          <th> </th>\r\n        </tr>\r\n      </thead>\r\n\r\n      <tbody>\r\n        <tr *ngFor=\"let registro of tabla; let i = index\">\r\n          <td routerLink=\"/distancias/{{tCompetencia.id}}/edit/{{i}}\"> {{ registro.categoria }} </td>\r\n          <td routerLink=\"/distancias/{{tCompetencia.id}}/edit/{{i}}\"> {{ registro.embarcacion }} </td>\r\n          <td routerLink=\"/distancias/{{tCompetencia.id}}/edit/{{i}}\"> {{ registro.distancia }} </td>\r\n          <td class=\"text-center\">\r\n            <a routerLink=\"/distancias/{{tCompetencia.id}}/delete/{{i}}\" class=\"text-danger\">\r\n              <i class=\"fa fa-minus-circle fa-2x\"></i>\r\n            </a>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n\r\n    </table>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/tipo-de-competencia-info.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/tipo-de-competencia-info.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\r\n  <div class=\"card-header\">\r\n    Tipo de compentencia\r\n  </div>\r\n\r\n  <div class=\"card-body\">\r\n    <p>{{ tCompetencia.tipo }}</p>\r\n    <p>{{ tCompetencia.descripcion }}</p>\r\n    \r\n    <button class=\"btn btn-block btn-secondary\" (click)=\"goBack()\">\r\n      Regresar\r\n    </button>\r\n\r\n  </div>\r\n</div>");

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
/* harmony import */ var _services_array_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/array.service */ "./src/app/services/array.service.ts");








let DistanciasFormComponent = class DistanciasFormComponent {
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
        const data = this.actRoute.snapshot.data['distanciaData'];
        this.tCompetencia = Object.assign({}, this.actRoute.snapshot.data['distanciaData'][0], { id: this.actRoute.snapshot.paramMap.get('idTipoDeCompetencia') });
        this.tblCategoria = this.actRoute.snapshot.data['distanciaData'][1];
        this.tblCategoria = this.arrayService.sort(this.tblCategoria, ['desde']);
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
        const record = this.tCompetencia.distancia[this.templateData.id];
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
        const record = Object.assign({ id: this.templateData.id }, this.miForm.value);
        if (this.templateData.titulo !== 'Eliminar' && !this.validations(record)) {
            submitBtn.disabled = false;
            return;
        }
        this.prepararArreglo(this.templateData.titulo);
        this.guardar();
    }
    prepararArreglo(parAccion) {
        let objDistancia = {
            categoria: this.miForm.controls.categoria.value,
            embarcacion: this.miForm.controls.embarcacion.value,
            distancia: this.miForm.controls.distancia.value,
        };
        if (!this.tCompetencia.distancia) {
            this.tCompetencia = Object.assign({}, this.tCompetencia, { distancia: [objDistancia] });
        }
        else if (parAccion === 'Agregar') {
            this.tCompetencia.distancia.push(objDistancia);
        }
        else if (parAccion === 'Modificar') {
            this.tCompetencia.distancia.splice(+this.templateData.id, 1, objDistancia);
        }
        else if (parAccion === 'Eliminar') {
            this.tCompetencia.distancia.splice(+this.templateData.id, 1);
        }
    }
    guardar() {
        this.crudService.updateRecord$('tipos-de-competencias', this.tCompetencia.id, this.tCompetencia).subscribe(_ => this.msg.ok(this.miForm.controls['distancia'].value + ' Actualizado satisfactoriamente'), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => this.goBack());
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
        const tabla = this.tCompetencia.distancia ? this.tCompetencia.distancia : [];
        const errorMessages = [];
        errorMessages.push('Ya hay otro registro con los mismos valores para los campos categoria, embarcación y distancia');
        const objSearch = [];
        objSearch.push({ categoria: record.categoria, embarcacion: record.embarcacion, distancia: record.distancia });
        for (let i = 0; i < objSearch.length; i++) {
            const index = this.arrayService.findIndex(tabla, objSearch[i]);
            if (index >= 0) {
                if (this.templateData.titulo === 'Agregar') {
                    this.msg.warning(errorMessages[i]);
                    return false;
                }
                else {
                    if (+record.id !== index) {
                        this.msg.warning(errorMessages[i]);
                        return false;
                    }
                }
            }
        }
        return true;
    }
};
DistanciasFormComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_array_service__WEBPACK_IMPORTED_MODULE_7__["ArrayService"] }
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
        this.tCompetencia = Object.assign({}, this.route.snapshot.data['distanciaData'], { id: this.route.snapshot.paramMap.get('idTipoDeCompetencia') });
        this.tabla = this.tCompetencia.distancia;
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

/***/ "./src/app/tables/distancias/components/tipo-de-competencia-info.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tables/distancias/components/tipo-de-competencia-info.component.ts ***!
  \************************************************************************************/
/*! exports provided: TipoDeCompetenciaInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoDeCompetenciaInfoComponent", function() { return TipoDeCompetenciaInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let TipoDeCompetenciaInfoComponent = class TipoDeCompetenciaInfoComponent {
    constructor(location) {
        this.location = location;
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
};
TipoDeCompetenciaInfoComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TipoDeCompetenciaInfoComponent.prototype, "tCompetencia", void 0);
TipoDeCompetenciaInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tipo-de-competencia-info',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tipo-de-competencia-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/distancias/components/tipo-de-competencia-info.component.html")).default
    })
], TipoDeCompetenciaInfoComponent);



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
        const idTipoDeCompetencia = route.paramMap.get('idTipoDeCompetencia');
        const allData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(this.crudService.getRecord$('tipos-de-competencias', idTipoDeCompetencia), this.crudService.getAllRecords$('categorias', 'categoria'));
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
        const id = route.paramMap.get('idTipoDeCompetencia');
        return this.crudService.getRecord$('tipos-de-competencias', id);
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
    { path: ':idTipoDeCompetencia', resolve: { distanciaData: _distancias_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["DistanciasResolver"] }, component: _components_distancias_component__WEBPACK_IMPORTED_MODULE_5__["DistanciasComponent"] },
    { path: ':idTipoDeCompetencia/:action', resolve: { distanciaData: _distancias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["DistanciasFormResolver"] }, component: _components_distancias_form_component__WEBPACK_IMPORTED_MODULE_6__["DistanciasFormComponent"] },
    { path: ':idTipoDeCompetencia/:action/:id', resolve: { distanciaData: _distancias_form_resolver_guard__WEBPACK_IMPORTED_MODULE_4__["DistanciasFormResolver"] }, component: _components_distancias_form_component__WEBPACK_IMPORTED_MODULE_6__["DistanciasFormComponent"] }
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
/* harmony import */ var _components_tipo_de_competencia_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/tipo-de-competencia-info.component */ "./src/app/tables/distancias/components/tipo-de-competencia-info.component.ts");








let DistanciasModule = class DistanciasModule {
};
DistanciasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_distancias_component__WEBPACK_IMPORTED_MODULE_5__["DistanciasComponent"], _components_distancias_form_component__WEBPACK_IMPORTED_MODULE_6__["DistanciasFormComponent"], _components_tipo_de_competencia_info_component__WEBPACK_IMPORTED_MODULE_7__["TipoDeCompetenciaInfoComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _distancias_routing_module__WEBPACK_IMPORTED_MODULE_3__["DistanciasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ]
    })
], DistanciasModule);



/***/ })

}]);
//# sourceMappingURL=tables-distancias-distancias-module-es2015.js.map