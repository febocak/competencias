(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["procedures-inscripciones-inscripciones-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/inscripciones/components/inscripciones-form.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/inscripciones/components/inscripciones-form.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n    <div class=\"card mt-3\">\n      <div class=\"card-header\" [ngClass]=\"templateData.cardHeaderStyle\">\n        {{ templateData.titulo + \" inscipción\" }}\n        \n      </div>\n\n      <div class=\"card-body\">\n        <form [formGroup]=\"miForm\" (ngSubmit)=\"onSubmit(submitBtn)\">\n\n          <div class=\"row\">\n            <div class=\"col-9\">\n              <div class=\"form-group\">\n                <label for=\"palista\" class=\"control-label\"> Palista </label>\n                <select formControlName=\"palista\" required\n                  [class.is-invalid]=\"palista.invalid && palista.touched\" class=\"custom-select\"\n                  (change)=\"selectPalista(palista.value)\">\n                  <option value=\"\"></option>\n                  <option [value]=\"registro.palista\" *ngFor=\"let registro of tblPalistas\" >{{ registro.palista }}</option>\n                </select>\n                <small class=\"text-danger\" [class.d-none]=\"palista.untouched || !palista.hasError('required')\">El palista es requerido</small>\n              </div>\n\n\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <div class=\"form-group\">\n                    <label for=\"genero\" class=\"control-label\"> Genero </label>\n                    <input type=\"text\" formControlName=\"genero\" [readonly]=\"true\" required\n                      [class.is-invalid]=\"(genero.invalid && genero.touched)\"\n                      class=\"form-control\" />\n                    <small class=\"text-danger\" [class.d-none]=\"genero.valid || genero.untouched\">El genero es requerido</small>\n                  </div>\n                </div>\n  \n                <div class=\"col-6\">\n                  <div class=\"form-group\">\n                    <label for=\"categoria\" class=\"control-label\"> Categoría </label>\n                    <input type=\"text\" formControlName=\"categoria\" [readonly]=\"true\" required\n                      [class.is-invalid]=\"(categoria.invalid && categoria.touched)\"\n                      class=\"form-control\" />\n                    <small class=\"text-danger\" [class.d-none]=\"categoria.valid || categoria.untouched\">La categoría es requerida</small>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"form-group\">\n                <label for=\"club\" class=\"control-label\"> Club </label>\n                <select formControlName=\"club\" required \n                  [class.is-invalid]=\"club.invalid && club.touched\" class=\"custom-select\">\n                  <option value=\"\"></option>\n                  <option [value]=\"registro.nombre\" *ngFor=\"let registro of tblClubes\" >{{ registro.nombre }}</option>\n                </select>\n                <small class=\"text-danger\" [class.d-none]=\"club.untouched || !club.hasError('required')\">El club es requerido</small>\n              </div>\n            </div>\n          \n            <div class=\"col-3\">\n              <div class=\"form-group\">\n                <label for=\"distancia\" class=\"control-label\"> Distancia </label>\n                <select multiple #selectDistancia formControlName=\"distancia\" required size=\"9\"\n                  [class.is-invalid]=\"distancia.invalid && distancia.touched\" class=\"custom-select\" >\n                  <option [value]=\"registro.embarcacion + ' ' + registro.distancia\" \n                    *ngFor=\"let registro of tblDistancias\" >{{ registro.embarcacion + ' ' + registro.distancia }}</option>\n                </select>\n                <small class=\"text-danger\" [class.d-none]=\"distancia.untouched || !distancia.hasError('required')\">La distancia es requerida</small>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <button [disabled]=\"!miForm.valid\" #submitBtn\n                [ngClass]=\"templateData.titulo==='Eliminar' ? 'btn-danger' : 'btn-primary'\"\n                type=\"submit\" class=\"btn btn-block\">\n                {{ templateData.titulo === 'Eliminar' ? 'Eliminar' : 'Aceptar' }}\n              </button>\n            </div>\n            <div class=\"col-6\">\n              <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\n                Cancelar\n              </button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/inscripciones/components/inscripciones.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/inscripciones/components/inscripciones.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\n  <div class=\"card-header d-flex\">\n    Inscripciones\n    <a routerLink=\"/inscripciones/add\" class=\"text-primary ml-auto\">\n      <i class=\"fa fa-plus-circle fa-2x\"></i>\n    </a>\n  </div>\n</div>\n\n<table class=\"table table-bordered table-hover\">\n  <thead>\n    <tr>\n      <th>DNI </th>\n      <th>Nombre </th>\n      <th>Genero</th>\n      <th>Categoría</th>\n      <th>Carrera</th>\n      <th> </th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let registro of tabla\">\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.dni }} </td>\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.palista }} </td>\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.genero }} </td>\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.categoria }} </td>\n      <td routerLink=\"/inscripciones/edit/{{registro.id}}\"> {{ registro.distancia }} </td>\n      <td>\n        <a routerLink=\"/inscripciones/delete/{{registro.id}}\" class=\"text-danger ml-auto\">\n          <i class=\"fa fa-minus-circle fa-2x\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n\n</table>");

/***/ }),

/***/ "./src/app/procedures/inscripciones/components/inscripciones-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/procedures/inscripciones/components/inscripciones-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InscripcionesFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionesFormComponent", function() { return InscripcionesFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_array_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/array.service */ "./src/app/services/array.service.ts");








let InscripcionesFormComponent = class InscripcionesFormComponent {
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
        this.tblClubes = this.actRoute.snapshot.data['inscripcionData'][1];
        this.tblCategorias = this.actRoute.snapshot.data['inscripcionData'][2];
        this.tblPalistas = this.actRoute.snapshot.data['inscripcionData'][3];
        this.tblInscripciones = this.actRoute.snapshot.data['inscripcionData'][4];
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
            palista: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            dni: [''],
            apellido: [''],
            nombre: [''],
            fnacimiento: [''],
            genero: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            categoria: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            club: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            distancia: [[], [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.miForm.controls.club.disable();
    }
    setFormData() {
        const record = this.actRoute.snapshot.data['inscripcionData'][0];
        this.miForm.patchValue(record);
        this.tblDistancias = this.distanciasDeLaCategoria(record.categoria);
        this.marcarDistancias(record.distancia);
        this.miForm.controls.palista.disable();
        this.miForm.controls.club.disable();
        if (this.templateData.titulo === 'Eliminar') {
            this.miForm.controls.distancia.disable();
        }
    }
    get palista() {
        return this.miForm.get('palista');
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
    get distancia() {
        return this.miForm.get('distancia');
    }
    onSubmit(submitBtn) {
        submitBtn.disabled = true;
        this.miForm.controls.club.enable();
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
        this.crudService.addRecord$('inscripciones', record).subscribe(_ => this.msg.ok(record.nombre.trim() + ' ' + record.apellido + ' Agregado satisfactoriamente'), error => this.msg.error('Error al agregar los datos: ' + error.statusText), () => this.router.navigate(['inscripciones']));
    }
    aceptarEditar(record) {
        this.crudService.updateRecord$('inscripciones', record.id, record).subscribe(_ => this.msg.ok(record.nombre.trim() + ' ' + record.apellido + ' Actualizado satisfactoriamente'), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => this.router.navigate(['inscripciones']));
    }
    aceptarEliminar(record) {
        this.crudService.deleteRecord$('inscripciones', record.id).subscribe(_ => this.msg.ok(record.nombre.trim() + ' ' + record.apellido + ' Eliminado satisfactoriamente'), error => this.msg.error('Error al eliminar los datos: ' + error.statusText), () => this.router.navigate(['inscripciones']));
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
    selectPalista(valor) {
        const palista = this.tblPalistas.find(element => element.palista === valor);
        if (this.templateData.titulo === 'Agregar' && !!this.tblInscripciones.find(element => element.dni === palista.dni)) {
            this.miForm.controls.palista.setValue('');
            this.msg.warning(palista.palista + ' Ya está inscrito. Si lo desea modifique su inscripción');
        }
        else {
            this.miForm.patchValue(palista);
            this.tblDistancias = this.distanciasDeLaCategoria(palista.categoria);
        }
    }
    marcarDistancias(arrayDistancias) {
        const options = this.selectDistancia.nativeElement.options;
        for (let i = 0, len = options.length; i < len; i++) {
            if (arrayDistancias.indexOf(options[i].text) != -1) {
                options[i].selected = true;
            }
        }
    }
    distanciasDeLaCategoria(categoria) {
        let todasLasDistancias = this.actRoute.snapshot.data['inscripcionData'][5];
        return todasLasDistancias.filter(data => data.categoria === categoria);
    }
};
InscripcionesFormComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_6__["CrudService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_array_service__WEBPACK_IMPORTED_MODULE_7__["ArrayService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectDistancia', { static: true })
], InscripcionesFormComponent.prototype, "selectDistancia", void 0);
InscripcionesFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inscripciones-form',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inscripciones-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/inscripciones/components/inscripciones-form.component.html")).default,
        styles: [""]
    })
], InscripcionesFormComponent);



/***/ }),

/***/ "./src/app/procedures/inscripciones/components/inscripciones.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/procedures/inscripciones/components/inscripciones.component.ts ***!
  \********************************************************************************/
/*! exports provided: InscripcionesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionesComponent", function() { return InscripcionesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let InscripcionesComponent = class InscripcionesComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        this.tabla = this.route.snapshot.data['inscripcionData'];
        console.table(this.tabla);
    }
};
InscripcionesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
InscripcionesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-inscripciones',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./inscripciones.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/inscripciones/components/inscripciones.component.html")).default
    })
], InscripcionesComponent);



/***/ }),

/***/ "./src/app/procedures/inscripciones/inscripciones-form-resolver.guard.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/procedures/inscripciones/inscripciones-form-resolver.guard.ts ***!
  \*******************************************************************************/
/*! exports provided: InscripcionesFormResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionesFormResolver", function() { return InscripcionesFormResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let InscripcionesFormResolver = class InscripcionesFormResolver {
    constructor(crudService, authService) {
        this.crudService = crudService;
        this.authService = authService;
    }
    resolve(route, state) {
        const distancias$ = this.crudService.getRecord$('consola', '01').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data.idCompetencia.trim()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(idCompetencia => this.crudService.getRecord$('competencias', idCompetencia)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(competencia => competencia.distancia));
        const club = this.authService.getUser().club;
        const id = route.paramMap.get('id');
        const allData$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.crudService.getRecord$('inscripciones', id), this.crudService.getAllRecords$('clubes', 'nombre'), this.crudService.getAllRecords$('categorias', 'desde'), this.crudService.queryByField$('palistas', 'club', club), this.crudService.queryByField$('inscripciones', 'club', club), distancias$);
        return allData$;
    }
};
InscripcionesFormResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
InscripcionesFormResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InscripcionesFormResolver);



/***/ }),

/***/ "./src/app/procedures/inscripciones/inscripciones-resolver.guard.ts":
/*!**************************************************************************!*\
  !*** ./src/app/procedures/inscripciones/inscripciones-resolver.guard.ts ***!
  \**************************************************************************/
/*! exports provided: InscripcionesResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionesResolver", function() { return InscripcionesResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/services/auth.service.ts");




let InscripcionesResolver = class InscripcionesResolver {
    constructor(crudService, authService) {
        this.crudService = crudService;
        this.authService = authService;
    }
    resolve(route, state) {
        const club = this.authService.getUser().club;
        return this.crudService.queryByField$('inscripciones', 'club', club);
    }
};
InscripcionesResolver.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
InscripcionesResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], InscripcionesResolver);



/***/ }),

/***/ "./src/app/procedures/inscripciones/inscripciones-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/procedures/inscripciones/inscripciones-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: InscripcionesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionesRoutingModule", function() { return InscripcionesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _inscripciones_resolver_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inscripciones-resolver.guard */ "./src/app/procedures/inscripciones/inscripciones-resolver.guard.ts");
/* harmony import */ var _components_inscripciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inscripciones.component */ "./src/app/procedures/inscripciones/components/inscripciones.component.ts");
/* harmony import */ var _components_inscripciones_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inscripciones-form.component */ "./src/app/procedures/inscripciones/components/inscripciones-form.component.ts");
/* harmony import */ var _inscripciones_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inscripciones-form-resolver.guard */ "./src/app/procedures/inscripciones/inscripciones-form-resolver.guard.ts");







const routes = [
    { path: '', resolve: { inscripcionData: _inscripciones_resolver_guard__WEBPACK_IMPORTED_MODULE_3__["InscripcionesResolver"] }, component: _components_inscripciones_component__WEBPACK_IMPORTED_MODULE_4__["InscripcionesComponent"] },
    { path: ':action', resolve: { inscripcionData: _inscripciones_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["InscripcionesFormResolver"] }, component: _components_inscripciones_form_component__WEBPACK_IMPORTED_MODULE_5__["InscripcionesFormComponent"] },
    { path: ':action/:id', resolve: { inscripcionData: _inscripciones_form_resolver_guard__WEBPACK_IMPORTED_MODULE_6__["InscripcionesFormResolver"] }, component: _components_inscripciones_form_component__WEBPACK_IMPORTED_MODULE_5__["InscripcionesFormComponent"] }
];
let InscripcionesRoutingModule = class InscripcionesRoutingModule {
};
InscripcionesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], InscripcionesRoutingModule);



/***/ }),

/***/ "./src/app/procedures/inscripciones/inscripciones.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/procedures/inscripciones/inscripciones.module.ts ***!
  \******************************************************************/
/*! exports provided: InscripcionesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InscripcionesModule", function() { return InscripcionesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _inscripciones_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inscripciones-routing.module */ "./src/app/procedures/inscripciones/inscripciones-routing.module.ts");
/* harmony import */ var _components_inscripciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/inscripciones.component */ "./src/app/procedures/inscripciones/components/inscripciones.component.ts");
/* harmony import */ var _components_inscripciones_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/inscripciones-form.component */ "./src/app/procedures/inscripciones/components/inscripciones-form.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let InscripcionesModule = class InscripcionesModule {
};
InscripcionesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_inscripciones_component__WEBPACK_IMPORTED_MODULE_4__["InscripcionesComponent"], _components_inscripciones_form_component__WEBPACK_IMPORTED_MODULE_5__["InscripcionesFormComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _inscripciones_routing_module__WEBPACK_IMPORTED_MODULE_3__["InscripcionesRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
        ]
    })
], InscripcionesModule);



/***/ })

}]);
//# sourceMappingURL=procedures-inscripciones-inscripciones-module-es2015.js.map