(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tables-palistas-palistas-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/palistas/components/palistas-form.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/palistas/components/palistas-form.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n    <div class=\"card mt-3\">\n      <div class=\"card-header\" [ngClass]=\"templateData.cardHeaderStyle\">\n        {{ templateData.titulo + \" Palista\" }}\n\n      </div>\n\n      <div class=\"card-body\">\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit(submitBtn)\">\n\n          <div class=\"row\">\n            <div class=\"col col-6\">\n              <div class=\"form-group\">\n                <label for=\"nombre\" class=\"control-label\"> Nombre </label>\n                <input type=\"text\" formControlName=\"nombre\" [readonly]=\"templateData.titulo==='Eliminar'\" required maxlength=\"30\"\n                  [class.is-invalid]=\"nombre.invalid && nombre.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('required')\">El nombre\n                  es requerido</small>\n                <small class=\"text-danger\" [class.d-none]=\"nombre.untouched || !nombre.hasError('minlength')\">La\n                  longitud mínima es 2</small>\n              </div>\n            </div>\n\n            <div class=\"col col-6\">\n              <div class=\"form-group\">\n                <label for=\"apellido\" class=\"control-label\"> Apellido </label>\n                <input type=\"text\" formControlName=\"apellido\" [readonly]=\"templateData.titulo==='Eliminar'\" required maxlength=\"30\"\n                  [class.is-invalid]=\"apellido.invalid && apellido.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"apellido.untouched || !apellido.hasError('required')\">El\n                  apellido es requerido</small>\n                <small class=\"text-danger\" [class.d-none]=\"apellido.untouched || !apellido.hasError('minlength')\">La\n                  longitud mínima es 2</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"DNI\" class=\"control-label\"> DNI </label>\n                <input type=\"text\" formControlName=\"dni\" [readonly]=\"templateData.titulo==='Eliminar'\" required maxlength=\"8\"\n                  [class.is-invalid]=\"dni.invalid && dni.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"dni.untouched || !dni.hasError('required')\">El DNI es\n                  requerido</small>\n                <small class=\"text-danger\" [class.d-none]=\"dni.untouched || !dni.hasError('minlength')\">La longitud\n                  mínima es 8</small>\n              </div>\n            </div>\n\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"genero\" class=\"control-label\"> Genero </label>\n                <select formControlName=\"genero\" required (change)=\"buscarCategoria(fnacimiento.value, genero.value)\"\n                  [class.is-invalid]=\"genero.invalid && genero.touched\" class=\"custom-select\">\n                  <option value=\"genero\"></option>\n                  <option value=\"Masculino\">Masculino</option>\n                  <option value=\"Femenino\">Femenino</option>\n                </select>\n                <small class=\"text-danger\" [class.d-none]=\"genero.valid || genero.untouched\">El genero es\n                  requerido</small>\n                <small class=\"text-danger\"\n                  [class.d-none]=\"genero.untouched || !genero.hasError('invalidGenero')\">Seleccione el genero</small>\n              </div>\n            </div>\n\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"fnacimiento\" class=\"control-label\"> F. nacimiento </label>\n                <input type=\"date\" formControlName=\"fnacimiento\" [readonly]=\"templateData.titulo==='Eliminar'\" required\n                  (change)=\"buscarCategoria(fnacimiento.value, genero.value)\"\n                  [class.is-invalid]=\"fnacimiento.invalid && fnacimiento.touched\" class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"fnacimiento.valid || fnacimiento.untouched\">La fecha de\n                  nacimiento es requerida</small>\n              </div>\n            </div>\n\n            <div class=\"col-6\">\n              <div class=\"form-group\">\n                <label for=\"categoria\" class=\"control-label\"> Categoría </label>\n                <input type=\"text\" formControlName=\"categoria\" [readonly]=\"true\" required\n                  [class.is-invalid]=\"(categoria.invalid && categoria.touched)   || categoria.value == 'No se encontró'\"\n                  class=\"form-control\" />\n                <small class=\"text-danger\" [class.d-none]=\"categoria.valid || fnacimiento.untouched\">La categoría es\n                  requerida</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label for=\"club\" class=\"control-label\"> Club </label>\n            <select formControlName=\"club\" required [class.is-invalid]=\"club.invalid && club.touched\"\n              class=\"custom-select\">\n              <option value=\"club\"></option>\n              <option [value]=\"registro.nombre\" *ngFor=\"let registro of tblClubes\">{{ registro.nombre }}</option>\n            </select>\n            <small class=\"text-danger\" [class.d-none]=\"club.untouched || !club.hasError('required')\">El club es\n              requerido</small>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button [disabled]=\"!miForm.valid\" #submitBtn\n                [ngClass]=\"templateData.titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\n                type=\"submit\" class=\"btn btn-block\">\n                {{ templateData.titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\n                Cancelar\n              </button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/palistas/components/palistas.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tables/palistas/components/palistas.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\n    <div class=\"card-header d-flex\">\n      Palistas\n      <a routerLink=\"/palistas/add\" class=\"text-primary ml-auto\">\n        <i class=\"fa fa-plus-circle fa-2x\"></i>\n      </a>\n    </div>\n  </div>\n  <table class=\"table table-bordered table-hover\">\n    <thead>\n      <tr>\n        <th> DNI </th>\n        <th> Nombre </th>\n        <th> F. Nacimiento </th>\n        <th> Genero </th>\n        <th> Categoría </th>\n        <th> </th>\n      </tr>\n    </thead>\n  \n    <tbody>\n      <tr *ngFor=\"let registro of tabla\">\n        <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ registro.dni }} </td>\n        <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ registro.palista }} </td>\n        <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ registro.fnacimiento | date }} </td>\n        <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ registro.genero }} </td>\n        <td routerLink=\"/palistas/edit/{{registro.id}}\"> {{ registro.categoria }} </td>\n        <td class=\"text-center\">\n          <a routerLink=\"/palistas/delete/{{registro.id}}\" class=\"text-danger\">\n            <i class=\"fa fa-minus-circle fa-2x\"></i>\n          </a>\n        </td>\n      </tr>\n    </tbody>\n  \n  </table>");

/***/ }),

/***/ "./src/app/tables/palistas/components/palistas-form.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/tables/palistas/components/palistas-form.component.ts ***!
  \***********************************************************************/
/*! exports provided: PalistasFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalistasFormComponent", function() { return PalistasFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");







let PalistasFormComponent = class PalistasFormComponent {
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
        this.tblClubes = this.actRoute.snapshot.data['palistaData'][1];
        this.tblCategorias = this.actRoute.snapshot.data['palistaData'][2];
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
            dni: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2)]],
            fnacimiento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            genero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            club: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]]
        });
        //this.miForm.controls.club.setValue(this.usuario.club);
    }
    setFormData() {
        const record = this.actRoute.snapshot.data['palistaData'][0];
        this.miForm.patchValue(record);
        if (this.templateData.titulo === 'Eliminar') {
            this.miForm.controls.club.disable();
        }
    }
    get dni() {
        return this.miForm.get('dni');
    }
    get apellido() {
        return this.miForm.get('apellido');
    }
    get nombre() {
        return this.miForm.get('nombre');
    }
    get fnacimiento() {
        return this.miForm.get('fnacimiento');
    }
    get genero() {
        return this.miForm.get('genero');
    }
    get categoria() {
        return this.miForm.get('categoria');
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
        this.crudService.addRecord$('palistas', record).subscribe(_ => this.msg.ok(record.nombre.trim() + ' ' + record.apellido + ' Agregado satisfactoriamente'), error => this.msg.error('Error al agregar los datos: ' + error.statusText), () => this.router.navigate(['palistas']));
    }
    aceptarEditar(record) {
        this.crudService.updateRecord$('palistas', record.id, record).subscribe(_ => this.msg.ok(record.nombre.trim() + ' ' + record.apellido + ' Actualizado satisfactoriamente'), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => this.router.navigate(['palistas']));
    }
    aceptarEliminar(record) {
        this.crudService.deleteRecord$('palistas', record.id).subscribe(_ => this.msg.ok(record.nombre.trim() + ' ' + record.apellido + ' Eliminado satisfactoriamente'), error => this.msg.error('Error al eliminar los datos: ' + error.statusText), () => this.router.navigate(['palistas']));
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
    buscarCategoria(fecha, genero) {
        const año = parseInt(fecha.substring(0, 4));
        if (!año || año < 1900) {
            this.miForm.controls.categoria.setValue('No se encontró');
        }
        else {
            const categoria = this.tblCategorias.find(el => año >= el.desde && año <= el.hasta && el.genero.includes(genero)).categoria;
            this.miForm.controls.categoria.setValue(categoria);
        }
    }
};
PalistasFormComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PalistasFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-palistas-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./palistas-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/palistas/components/palistas-form.component.html")).default,
        styles: [""]
    })
], PalistasFormComponent);



/***/ }),

/***/ "./src/app/tables/palistas/components/palistas.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tables/palistas/components/palistas.component.ts ***!
  \******************************************************************/
/*! exports provided: PalistasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalistasComponent", function() { return PalistasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PalistasComponent = class PalistasComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.tabla = this.route.snapshot.data['palistaData'];
    }
};
PalistasComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PalistasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-palistas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./palistas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tables/palistas/components/palistas.component.html")).default
    })
], PalistasComponent);



/***/ }),

/***/ "./src/app/tables/palistas/palistas-form-resolver.guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/tables/palistas/palistas-form-resolver.guard.ts ***!
  \*****************************************************************/
/*! exports provided: PalistasFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalistasFormResolver", function() { return PalistasFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");




let PalistasFormResolver = class PalistasFormResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        const id = route.paramMap.get('id');
        const allData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])(this.crudService.getRecord$('palistas', id), this.crudService.getAllRecords$('clubes', 'nombre'), this.crudService.getAllRecords$('categorias', 'desde'));
        return allData$;
    }
};
PalistasFormResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] }
];
PalistasFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PalistasFormResolver);



/***/ }),

/***/ "./src/app/tables/palistas/palistas-resolver.guard.ts":
/*!************************************************************!*\
  !*** ./src/app/tables/palistas/palistas-resolver.guard.ts ***!
  \************************************************************/
/*! exports provided: PalistasResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalistasResolver", function() { return PalistasResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let PalistasResolver = class PalistasResolver {
    constructor(crudService) {
        this.crudService = crudService;
    }
    resolve(route, state) {
        console.log('Palistas resolver');
        return this.crudService.getAllRecords$('palistas', 'palista');
    }
};
PalistasResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
PalistasResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PalistasResolver);



/***/ }),

/***/ "./src/app/tables/palistas/palistas-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/tables/palistas/palistas-routing.module.ts ***!
  \************************************************************/
/*! exports provided: PalistasRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalistasRoutingModule", function() { return PalistasRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_palistas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/palistas.component */ "./src/app/tables/palistas/components/palistas.component.ts");
/* harmony import */ var _components_palistas_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/palistas-form.component */ "./src/app/tables/palistas/components/palistas-form.component.ts");
/* harmony import */ var _palistas_resolver_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./palistas-resolver.guard */ "./src/app/tables/palistas/palistas-resolver.guard.ts");
/* harmony import */ var _palistas_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./palistas-form-resolver.guard */ "./src/app/tables/palistas/palistas-form-resolver.guard.ts");







const routes = [
    { path: '', resolve: { palistaData: _palistas_resolver_guard__WEBPACK_IMPORTED_MODULE_5__["PalistasResolver"] }, component: _components_palistas_component__WEBPACK_IMPORTED_MODULE_3__["PalistasComponent"] },
    { path: ':action', resolve: { palistaData: _palistas_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["PalistasFormResolver"] }, component: _components_palistas_form_component__WEBPACK_IMPORTED_MODULE_4__["PalistasFormComponent"] },
    { path: ':action/:id', resolve: { palistaData: _palistas_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["PalistasFormResolver"] }, component: _components_palistas_form_component__WEBPACK_IMPORTED_MODULE_4__["PalistasFormComponent"] }
];
let PalistasRoutingModule = class PalistasRoutingModule {
};
PalistasRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PalistasRoutingModule);



/***/ }),

/***/ "./src/app/tables/palistas/palistas.module.ts":
/*!****************************************************!*\
  !*** ./src/app/tables/palistas/palistas.module.ts ***!
  \****************************************************/
/*! exports provided: PalistasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PalistasModule", function() { return PalistasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _palistas_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./palistas-routing.module */ "./src/app/tables/palistas/palistas-routing.module.ts");
/* harmony import */ var _components_palistas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/palistas.component */ "./src/app/tables/palistas/components/palistas.component.ts");
/* harmony import */ var _components_palistas_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/palistas-form.component */ "./src/app/tables/palistas/components/palistas-form.component.ts");







let PalistasModule = class PalistasModule {
};
PalistasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_palistas_component__WEBPACK_IMPORTED_MODULE_5__["PalistasComponent"], _components_palistas_form_component__WEBPACK_IMPORTED_MODULE_6__["PalistasFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _palistas_routing_module__WEBPACK_IMPORTED_MODULE_4__["PalistasRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], PalistasModule);



/***/ })

}]);
//# sourceMappingURL=tables-palistas-palistas-module-es2015.js.map