(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competencias-series-series-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/asignar-numero/asignar-numero.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/asignar-numero/asignar-numero.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!serie.status.cargarTiempos; else infoMessage\">\r\n  <app-series-header\r\n    [titulo]=\"'Asignar números'\"\r\n    [serie]=\"serie\"\r\n    (emitGuardar)=\"onSave()\"\r\n    (emitCancelar)=\"goBack()\"\r\n  > </app-series-header>\r\n\r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th> Número </th>\r\n        <th> Palista </th>\r\n        <th> Club </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let registro of tabla; let i=index\" >\r\n        <td width=\"15%\" class=\"pt-2 pb-2\"> \r\n          <input type=\"tel\" class=\"mi-form-control mi-font-min\" maxlength=2 [(ngModel)]=\"registro.numero\"> \r\n        </td>\r\n        <td class=\"pt-2 pb-2\"> {{ registro.palista }} </td>\r\n        <td class=\"pt-2 pb-2\"> {{ registro.club }} </td>\r\n        \r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</ng-container>\r\n\r\n<ng-template #infoMessage>\r\n    <div class=\"jumbotron\">\r\n      <h1 class=\"display-4\">Asignar números</h1>\r\n      <p class=\"lead\">\r\n        No puede reasignar los números  a los participantes de la serie <strong>{{ serie.id }}</strong> porque ya cargó los tiempos a los participantes\r\n      </p>\r\n      <hr class=\"my-4\">\r\n  \r\n      <div class=\"text-center\">\r\n        <button class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">\r\n            Regresar <i class=\"fa fa-arrow-circle-left fa-2x\"></i>\r\n        </button>\r\n      </div>\r\n  \r\n    </div>\r\n  </ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/cargar-tiempos/cargar-tiempos.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/cargar-tiempos/cargar-tiempos.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"serie.status.asignarNumero && !serie.status.generarResultados\">\r\n\r\n  <app-series-header\r\n    [titulo]=\"'Cargar tiempos'\"\r\n    [serie]=\"serie\"\r\n    (emitGuardar)=\"onSave()\"\r\n    (emitCancelar)=\"goBack()\"\r\n  > </app-series-header>\r\n  \r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th> Número </th>\r\n        <th> Palista </th>\r\n        <th> Club </th>\r\n        <th> Tiempo </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let registro of tabla\">\r\n        <td class=\"pt-2 pb-2\" width=\"15%\"> {{ registro.numero }} </td>\r\n        <td class=\"pt-2 pb-2\"> {{ registro.palista }} </td>\r\n        <td class=\"pt-2 pb-2\"> {{ registro.club }} </td>\r\n        <td class=\"pt-2 pb-2\" width=\"15%\">\r\n          <input type=\"tel\" class=\"mi-form-control mi-font-min\" [(ngModel)]=\"registro.tiempo\" [(appTimeFormat)]=\"registro.tiempo\"\r\n            placeholder=\"hh:mm:ss.00\">\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"!serie.status.asignarNumero\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Cargar tiempos</h1>\r\n    <p class=\"lead\">\r\n      No puede cargar los tiempos a la serie <strong>{{ serie.id }}</strong> porque aún no le ha asignado números a los participantes\r\n    </p>\r\n    <hr class=\"my-4\">\r\n\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">\r\n          Regresar <i class=\"fa fa-arrow-circle-left fa-2x\"></i>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</ng-container>\r\n\r\n<ng-container *ngIf=\"serie.status.generarResultados\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Cargar tiempos</h1>\r\n    <p class=\"lead\">\r\n      No puede recargar los tiempos a la serie <strong>{{ serie.id }}</strong> porque ya generó los resultados de esta serie\r\n    </p>\r\n    <hr class=\"my-4\">\r\n\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">\r\n          Regresar <i class=\"fa fa-arrow-circle-left fa-2x\"></i>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</ng-container>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/resultados/resultados.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/resultados/resultados.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"serie.status.cargarTiempos; else infoMessage\">\r\n  <app-series-header\r\n    [titulo]=\"'Resultados'\"\r\n    [serie]=\"serie\"\r\n    (emitGuardar)=\"onSave()\"\r\n    (emitCancelar)=\"goBack()\"\r\n  > </app-series-header>\r\n\r\n  <table class=\"table table-bordered table-hover\">\r\n    <thead>\r\n      <tr>\r\n        <th> Número </th>\r\n        <th> Palista </th>\r\n        <th> Club </th>\r\n        <th> Tiempo </th>\r\n        <th> Resultado </th>\r\n      </tr>\r\n    </thead>\r\n\r\n    <tbody>\r\n      <tr *ngFor=\"let registro of tabla; let i=index\">\r\n        <td width=\"15%\"> {{ registro.numero }} </td>\r\n        <td> {{ registro.palista }} </td>\r\n        <td> {{ registro.club }} </td>\r\n        <td> {{ registro.tiempo }} </td>\r\n        <td [ngClass]=\"resultadoClass(registro.resultado)\"> {{ registro.resultado }} </td>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</ng-container>\r\n\r\n<ng-template #infoMessage>\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-4\">Generar Resultados</h1>\r\n    <p class=\"lead\">\r\n      No puede generar los resultados de la serie <strong>{{ serie.id }}</strong> porque aún no ha cargado el tiempo de los participantes\r\n    </p>\r\n    <hr class=\"my-4\">\r\n\r\n    <div class=\"text-center\">\r\n      <button class=\"btn btn-lg btn-primary\" (click)=\"goBack()\">\r\n        Regresar <i class=\"fa fa-arrow-circle-left fa-2x\"></i>\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/series-header/series-header.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/series-header/series-header.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\r\n  <div class=\"card-header\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-2\">\r\n        <h5>{{ titulo }}</h5>\r\n      </div>\r\n      <div class=\"col-7\">\r\n        <table width=\"100%\">\r\n          <tr>\r\n            <th width=\"10%\">Serie</th>\r\n            <th width=\"40%\">Categoría</th>\r\n            <th width=\"25%\">Genero</th>\r\n            <th width=\"25%\">Distancia</th>\r\n          </tr>\r\n\r\n          <tr>\r\n            <td>{{ serie.id }}</td>\r\n            <td>{{ serie.categoria }}</td>\r\n            <td>{{ serie.genero }}</td>\r\n            <td>{{ serie.distancia }}</td>\r\n          </tr>\r\n        </table>\r\n\r\n      </div>\r\n\r\n      <div class=\"col-3\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6\">\r\n            <button class=\"btn btn-block btn-primary\" (click)=\"onSave()\">\r\n              <i class=\"fa fa-save \"></i> Guardar\r\n            </button>\r\n          </div>\r\n          <div class=\"col-6\">\r\n            <button class=\"btn btn-block btn-secondary\" (click)=\"goBack()\">\r\n              <i class=\"fa fa-undo \"></i> Cancelar\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/series.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/series.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mt-3\">\n  <div class=\"card-header d-flex\">\n    {{ titulo }}\n  </div>\n</div>\n\n<table class=\"table table-bordered table-hover\">\n  <thead>\n    <tr>\n      <th> Número </th>\n      <th> Genero </th>\n      <th> Categoría </th>\n      <th> Distancia </th>\n      <th> Cantidad </th>\n      <th> </th>\n      <th> </th>\n      <th> </th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor=\"let registro of tabla\">\n      <td> {{ registro.id }} </td>\n      <td> {{ registro.genero }} </td>\n      <td> {{ registro.categoria }} </td>\n      <td> {{ registro.distancia }} </td>\n      <td> {{ registro.cantidad }} </td>\n      <td class=\"text-center\" width=\"7%\" >\n        <a routerLink=\"/carreras/{{tipoCarrera}}/asignar-numero/{{registro.id}}\" [ngClass]=\"asignarNumeroStatus(registro.status)\">\n          <i class=\"fa fa-list-ol fa-2x\"></i>\n        </a>\n      </td>\n      <td class=\"text-center\" width=\"7%\" >\n        <a routerLink=\"/carreras/{{tipoCarrera}}/cargar-tiempos/{{registro.id}}\" [ngClass]=\"cargarTiemposStatus(registro.status)\">\n          <i class=\"fa fa-clock-o fa-2x\"></i>\n        </a>\n      </td>\n      <td class=\"text-center\" width=\"7%\" >\n        <a routerLink=\"/carreras/{{tipoCarrera}}/resultados/{{registro.id}}\" [ngClass]=\"generarResultadosStatus(registro.status)\">\n          <i class=\"fa fa-signal fa-2x\"></i>\n        </a>\n      </td>\n    </tr>\n  </tbody>\n\n</table>");

/***/ }),

/***/ "./src/app/competencias/series/asignar-numero/asignar-numero.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/competencias/series/asignar-numero/asignar-numero.component.ts ***!
  \********************************************************************************/
/*! exports provided: AsignarNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignarNumeroComponent", function() { return AsignarNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_series_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/series.service */ "./src/app/competencias/services/series.service.ts");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let AsignarNumeroComponent = class AsignarNumeroComponent {
    constructor(dataService, msg, location, actRoute, router) {
        this.dataService = dataService;
        this.msg = msg;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.id = '';
        this.tipoCarrera = '';
    }
    ngOnInit() {
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.tipoCarrera = this.actRoute.snapshot.paramMap.get('tipoCarrera');
        this.msg.clearMessages();
        this.getRecords();
        this.getSerie();
    }
    getRecords() {
        this.tabla = this.dataService.getDetalleCarrera(this.tipoCarrera, this.id);
        this.tabla.sort((a, b) => a.numero > b.numero ? 1 : a.numero < b.numero ? -1 : 0);
    }
    getSerie() {
        this.serie = this.dataService.getCarrera(this.tipoCarrera, this.id);
    }
    onSave() {
        let todosTienenNumero = true;
        this.tabla.forEach(elemento => todosTienenNumero = todosTienenNumero && !!elemento.numero);
        this.serie.status = { asignarNumero: todosTienenNumero, cargarTiempos: false, generarResultados: false };
        this.dataService.updateCarrera(this.tipoCarrera, this.id, this.serie);
        this.dataService.updateDetalleCarrera(this.tipoCarrera, this.id, this.tabla);
        this.msg.ok('Proceso realizado satisfactoriamente');
        this.router.navigate(['carreras/' + this.tipoCarrera]);
    }
    goBack() {
        this.location.back();
    }
};
AsignarNumeroComponent.ctorParameters = () => [
    { type: _services_series_service__WEBPACK_IMPORTED_MODULE_2__["SeriesService"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
AsignarNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-asignar-numero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./asignar-numero.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/asignar-numero/asignar-numero.component.html")).default
    })
], AsignarNumeroComponent);



/***/ }),

/***/ "./src/app/competencias/series/cargar-tiempos/cargar-tiempos.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/competencias/series/cargar-tiempos/cargar-tiempos.component.ts ***!
  \********************************************************************************/
/*! exports provided: CargarTiemposComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CargarTiemposComponent", function() { return CargarTiemposComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_series_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/series.service */ "./src/app/competencias/services/series.service.ts");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let CargarTiemposComponent = class CargarTiemposComponent {
    constructor(dataService, msg, location, actRoute, router) {
        this.dataService = dataService;
        this.msg = msg;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.id = '';
        this.tipoCarrera = '';
    }
    ngOnInit() {
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.tipoCarrera = this.actRoute.snapshot.paramMap.get('tipoCarrera');
        this.msg.clearMessages();
        this.getRecords();
        this.getSerie();
    }
    getRecords() {
        this.tabla = this.dataService.getDetalleCarrera(this.tipoCarrera, this.id);
        this.tabla.sort((a, b) => a.numero > b.numero ? 1 : a.numero < b.numero ? -1 : 0);
    }
    getSerie() {
        this.serie = this.dataService.getCarrera(this.tipoCarrera, this.id);
    }
    onSave() {
        let todosTienenTiempo = true;
        this.tabla.forEach(elemento => todosTienenTiempo = todosTienenTiempo && !!elemento.tiempo);
        this.serie.status = { asignarNumero: true, cargarTiempos: todosTienenTiempo, generarResultados: false };
        this.dataService.updateCarrera(this.tipoCarrera, this.id, this.serie);
        this.dataService.updateDetalleCarrera(this.tipoCarrera, this.id, this.tabla);
        this.msg.ok('Tiempos guardados satisfactoriamente');
        this.router.navigate(['carreras/' + this.tipoCarrera]);
    }
    goBack() {
        this.location.back();
    }
};
CargarTiemposComponent.ctorParameters = () => [
    { type: _services_series_service__WEBPACK_IMPORTED_MODULE_2__["SeriesService"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
CargarTiemposComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cargar-tiempos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cargar-tiempos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/cargar-tiempos/cargar-tiempos.component.html")).default
    })
], CargarTiemposComponent);



/***/ }),

/***/ "./src/app/competencias/series/directives/time-format.directive.ts":
/*!*************************************************************************!*\
  !*** ./src/app/competencias/series/directives/time-format.directive.ts ***!
  \*************************************************************************/
/*! exports provided: TimeFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeFormatDirective", function() { return TimeFormatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TimeFormatDirective = class TimeFormatDirective {
    constructor(el) {
        this.el = el;
        this.appTimeFormatChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.appTimeFormat = this.appTimeFormat || "";
        this.formatear(this.appTimeFormat);
    }
    formatear(value) {
        const char = value.slice(-1);
        const valoresPermitidos = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
        if ([3, 6, 9].includes(value.length)) {
            console.warn(`No debió tener longitud  ${value.length} dígitos nunca`);
            value = value.slice(0, value.length - 2);
        }
        else if (char === '.') {
            if (value.length < 3) {
                value = '00:';
            }
            else if (value.length < 6) {
                value = value.substr(0, 3) + '00:';
            }
            else if (value.length < 9) {
                value = value.substr(0, 6) + '00:';
            }
            else if (value.length < 11) {
                value = value.substr(0, 9) + '00';
            }
        }
        else if (!valoresPermitidos.includes(char)) {
            value = value.slice(0, value.length - 1);
        }
        else if (value.length === 1 && !['0', '1', '2'].includes(char)) {
            value = value.slice(0, value.length - 1);
        }
        else if (value.length === 2) {
            if (value[0] === '2' && !['0', '1', '2', '3', '4'].includes(char)) {
                value = value.slice(0, value.length - 1);
            }
            else {
                value = value + ':';
            }
        }
        else if (value.length === 4) {
            if (char === '6' && value.substr(0, 2) !== '00') {
                value = value.slice(0, value.length - 1);
            }
            else if (!['0', '1', '2', '3', '4', '5', '6'].includes(char)) {
                value = value.slice(0, value.length - 1);
            }
        }
        else if (value.length === 5) {
            if (value[3] === '6' && char !== '0') {
                value = value.slice(0, value.length - 1);
            }
            else {
                value = value + ':';
            }
        }
        else if (value.length === 7) {
            if (char === '6' && value.substr(3, 2) !== '00') {
                value = value.slice(0, value.length - 1);
            }
            else if (!['0', '1', '2', '3', '4', '5', '6'].includes(char)) {
                value = value.slice(0, value.length - 1);
            }
        }
        else if (value.length === 8) {
            if (value[6] === '6' && char !== '0') {
                value = value.slice(0, value.length - 1);
            }
            else {
                value = value + '.';
            }
        }
        this.setValue(value);
    }
    setValue(value) {
        this.el.nativeElement.value = value;
        this.appTimeFormatChange.next(value);
    }
};
TimeFormatDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appTimeFormat')
], TimeFormatDirective.prototype, "appTimeFormat", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TimeFormatDirective.prototype, "appTimeFormatChange", void 0);
TimeFormatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appTimeFormat]',
        host: {
            "[value]": "appTimeFormat",
            "(input)": "formatear($event.target.value)"
        }
    })
], TimeFormatDirective);



/***/ }),

/***/ "./src/app/competencias/series/resultados/resultados.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/competencias/series/resultados/resultados.component.ts ***!
  \************************************************************************/
/*! exports provided: ResultadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultadosComponent", function() { return ResultadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_series_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/series.service */ "./src/app/competencias/services/series.service.ts");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_condiciones_carreras_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/condiciones-carreras.service */ "./src/app/competencias/services/condiciones-carreras.service.ts");
/* harmony import */ var _services_puntuacion_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/puntuacion.service */ "./src/app/competencias/services/puntuacion.service.ts");








let ResultadosComponent = class ResultadosComponent {
    constructor(dataService, condicionesService, puntuacionService, msg, location, actRoute, router) {
        this.dataService = dataService;
        this.condicionesService = condicionesService;
        this.puntuacionService = puntuacionService;
        this.msg = msg;
        this.location = location;
        this.actRoute = actRoute;
        this.router = router;
        this.titulo = '';
        this.id = '';
        this.tipoCarrera = '';
        this.tabla = [];
    }
    ngOnInit() {
        this.id = this.actRoute.snapshot.paramMap.get('id');
        this.tipoCarrera = this.actRoute.snapshot.paramMap.get('tipoCarrera');
        this.msg.clearMessages();
        this.getRecords();
        this.getSerie();
    }
    getRecords() {
        const data = this.dataService.getDetalleCarrera(this.tipoCarrera, this.id);
        this.condiciones = this.condicionesService.getCondiciones(data[0].categoria, data[0].genero, data[0].distancia);
        data.sort((a, b) => a.tiempo > b.tiempo ? 1 : (a.tiempo < b.tiempo ? -1 : 0));
        data.forEach((el, i) => this.tabla.push(Object.assign({}, el, { posicion: i + 1, resultado: this.resultado(el.categoria, i + 1) })));
    }
    getSerie() {
        this.serie = this.dataService.getCarrera(this.tipoCarrera, this.id);
    }
    resultado(categoria, posicion) {
        if (this.tipoCarrera === 'series')
            return this.resultadoSerie(posicion);
        else if (this.tipoCarrera === 'semis') {
            return this.resultadoSemi(posicion);
        }
        else {
            return this.resultadoFinal(categoria, posicion);
        }
    }
    resultadoSerie(posicion) {
        if (this.condiciones.serie.pasanDirectoAfinal.includes(posicion)) {
            return 'Pasa directo a la final';
        }
        else if (this.condiciones.serie.pasanAsemiFinal.includes(posicion)) {
            return 'Pasa a semifinal';
        }
        else if (this.condiciones.serie.adicional.posicion.includes(posicion)) {
            return 'Revisión';
        }
        else {
            return 'Eliminado';
        }
    }
    resultadoSemi(posicion) {
        if (this.condiciones.semis.pasanAfinal.includes(posicion)) {
            return 'Pasa a la final';
        }
        else {
            return 'Eliminado';
        }
    }
    resultadoFinal(categoria, posicion) {
        let prefijo = 'Puntos: ';
        if (posicion < 4) {
            prefijo = 'Medalla de ';
            prefijo += (posicion === 1 ? 'Oro' : posicion === 2 ? 'Plata' : 'Bronce') + '  -  Puntos: ';
        }
        return prefijo + this.puntuacionService.getPuntuacion(categoria, posicion);
    }
    resultadoClass(resultado) {
        if (this.tipoCarrera === 'series') {
            return {
                "text-primary": resultado === 'Pasa directo a la final',
                "text-success": resultado === 'Pasa a semifinal',
                "text-warning": resultado === 'Revisión',
                "text-danger": resultado === 'Eliminado'
            };
        }
        else if (this.tipoCarrera === 'semis') {
            return {
                "text-success": resultado === 'Pasa a la final',
                "text-danger": resultado === 'Eliminado'
            };
        }
        else {
            return {
                "text-primary": resultado.includes('Medalla de Oro'),
                "text-info": resultado.includes('Medalla de Plata'),
                "text-warning": resultado.includes('Medalla de Bronce')
            };
        }
    }
    onSave() {
        this.serie.status = { asignarNumero: true, cargarTiempos: true, generarResultados: true };
        this.dataService.updateCarrera(this.tipoCarrera, this.id, this.serie);
        this.dataService.updateDetalleCarrera(this.tipoCarrera, this.id, this.tabla);
        this.router.navigate(['carreras/' + this.tipoCarrera]);
    }
    goBack() {
        this.location.back();
    }
};
ResultadosComponent.ctorParameters = () => [
    { type: _services_series_service__WEBPACK_IMPORTED_MODULE_2__["SeriesService"] },
    { type: _services_condiciones_carreras_service__WEBPACK_IMPORTED_MODULE_6__["CondicionesCarrerasService"] },
    { type: _services_puntuacion_service__WEBPACK_IMPORTED_MODULE_7__["PuntuacionService"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ResultadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-resultados',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./resultados.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/resultados/resultados.component.html")).default
    })
], ResultadosComponent);



/***/ }),

/***/ "./src/app/competencias/series/series-header/series-header.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/competencias/series/series-header/series-header.component.ts ***!
  \******************************************************************************/
/*! exports provided: SeriesHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesHeaderComponent", function() { return SeriesHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SeriesHeaderComponent = class SeriesHeaderComponent {
    constructor() {
        this.emitGuardar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.emitCancelar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSave() {
        this.emitGuardar.emit('Guardar');
    }
    goBack() {
        this.emitCancelar.emit('Cancelar');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeriesHeaderComponent.prototype, "serie", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeriesHeaderComponent.prototype, "titulo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SeriesHeaderComponent.prototype, "emitGuardar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SeriesHeaderComponent.prototype, "emitCancelar", void 0);
SeriesHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-series-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./series-header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/series-header/series-header.component.html")).default
    })
], SeriesHeaderComponent);



/***/ }),

/***/ "./src/app/competencias/series/series.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/competencias/series/series.component.ts ***!
  \*********************************************************/
/*! exports provided: SeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesComponent", function() { return SeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_series_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/series.service */ "./src/app/competencias/services/series.service.ts");




let SeriesComponent = class SeriesComponent {
    constructor(dataService, actRoute) {
        this.dataService = dataService;
        this.actRoute = actRoute;
        this.tipoCarrera = '';
        this.titulo = '';
    }
    ngOnInit() {
        this.actRoute.paramMap.subscribe(params => {
            this.tipoCarrera = params.get('tipoCarrera');
            this.titulo = this.tipoCarrera === 'series' ? 'Series' :
                this.tipoCarrera === 'semis' ? 'Semifinales' : 'Finales';
            this.getRecords();
        });
    }
    getRecords() {
        console.log(this.tipoCarrera);
        /* if (this.tipoCarrera === 'series') {
          this.dataService.getRecords$().subscribe(data => this.tabla = data);
        } else { */
        this.tabla = this.dataService.getCarreras(this.tipoCarrera);
        //} 
    }
    asignarNumeroStatus(status) {
        return {
            "text-success": !status.asignarNumero,
            "text-warning": status.asignarNumero,
            "text-danger": status.cargarTiempos
        };
    }
    cargarTiemposStatus(status) {
        return {
            "text-secondary": !status.asignarNumero,
            "text-success": status.asignarNumero,
            "text-warning": status.cargarTiempos,
            "text-danger": status.generarResultados
        };
    }
    generarResultadosStatus(status) {
        return {
            "text-secondary": !status.cargarTiempos,
            "text-success": status.cargarTiempos,
            "text-warning": status.generarResultados,
        };
    }
};
SeriesComponent.ctorParameters = () => [
    { type: _services_series_service__WEBPACK_IMPORTED_MODULE_3__["SeriesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'series',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./series.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/series/series.component.html")).default
    })
], SeriesComponent);



/***/ }),

/***/ "./src/app/competencias/series/series.module.ts":
/*!******************************************************!*\
  !*** ./src/app/competencias/series/series.module.ts ***!
  \******************************************************/
/*! exports provided: SeriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesModule", function() { return SeriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _directives_time_format_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/time-format.directive */ "./src/app/competencias/series/directives/time-format.directive.ts");
/* harmony import */ var _series_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./series.component */ "./src/app/competencias/series/series.component.ts");
/* harmony import */ var _asignar_numero_asignar_numero_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./asignar-numero/asignar-numero.component */ "./src/app/competencias/series/asignar-numero/asignar-numero.component.ts");
/* harmony import */ var _series_header_series_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./series-header/series-header.component */ "./src/app/competencias/series/series-header/series-header.component.ts");
/* harmony import */ var _cargar_tiempos_cargar_tiempos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cargar-tiempos/cargar-tiempos.component */ "./src/app/competencias/series/cargar-tiempos/cargar-tiempos.component.ts");
/* harmony import */ var _resultados_resultados_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resultados/resultados.component */ "./src/app/competencias/series/resultados/resultados.component.ts");











const routes = [
    {
        path: '',
        /* resolve: { categoriaData: CategoriasResolver },  */
        component: _series_component__WEBPACK_IMPORTED_MODULE_6__["SeriesComponent"]
    },
    { path: 'asignar-numero/:id', component: _asignar_numero_asignar_numero_component__WEBPACK_IMPORTED_MODULE_7__["AsignarNumeroComponent"] },
    { path: 'cargar-tiempos/:id', component: _cargar_tiempos_cargar_tiempos_component__WEBPACK_IMPORTED_MODULE_9__["CargarTiemposComponent"] },
    { path: 'resultados/:id', component: _resultados_resultados_component__WEBPACK_IMPORTED_MODULE_10__["ResultadosComponent"] }
];
let SeriesModule = class SeriesModule {
};
SeriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _directives_time_format_directive__WEBPACK_IMPORTED_MODULE_5__["TimeFormatDirective"],
            _series_component__WEBPACK_IMPORTED_MODULE_6__["SeriesComponent"],
            _series_header_series_header_component__WEBPACK_IMPORTED_MODULE_8__["SeriesHeaderComponent"],
            _asignar_numero_asignar_numero_component__WEBPACK_IMPORTED_MODULE_7__["AsignarNumeroComponent"],
            _cargar_tiempos_cargar_tiempos_component__WEBPACK_IMPORTED_MODULE_9__["CargarTiemposComponent"],
            _resultados_resultados_component__WEBPACK_IMPORTED_MODULE_10__["ResultadosComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], SeriesModule);



/***/ }),

/***/ "./src/app/competencias/services/condiciones-carreras.service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/competencias/services/condiciones-carreras.service.ts ***!
  \***********************************************************************/
/*! exports provided: CondicionesCarrerasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CondicionesCarrerasService", function() { return CondicionesCarrerasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _series_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./series.service */ "./src/app/competencias/services/series.service.ts");



let CondicionesCarrerasService = class CondicionesCarrerasService {
    constructor(seriesService) {
        this.seriesService = seriesService;
        this.condiciones = [
            {
                minimo: 10,
                maximo: 18,
                serie: {
                    pasanDirectoAfinal: [1, 2, 3],
                    pasanAsemiFinal: [4, 5, 6, 7],
                    adicional: { posicion: [8], cantidad: [1] }
                },
                semis: {
                    pasanAfinal: [1, 2, 3]
                }
            },
            {
                minimo: 19,
                maximo: 27,
                serie: {
                    pasanDirectoAfinal: [1],
                    pasanAsemiFinal: [2, 3, 4, 5, 6, 7],
                    adicional: { posicion: [10], cantidad: [0] }
                },
                semis: {
                    pasanAfinal: [1, 2, 3]
                }
            },
            {
                minimo: 19,
                maximo: 27,
                serie: {
                    pasanDirectoAfinal: [1],
                    pasanAsemiFinal: [2, 3, 4, 5, 6, 7],
                    adicional: { posicion: [10], cantidad: [0] }
                },
                semis: {
                    pasanAfinal: [1, 2, 3]
                }
            },
            {
                minimo: 28,
                maximo: 36,
                serie: {
                    pasanDirectoAfinal: [0],
                    pasanAsemiFinal: [1, 2, 3, 4, 5, 6],
                    adicional: { posicion: [7], cantidad: [3] }
                },
                semis: {
                    pasanAfinal: [1, 2, 3]
                }
            }
        ];
    }
    getCondiciones(categoria, genero, distancia) {
        const cantidadDeAtletas = this.getCantidadGrupoSerie(categoria, genero, distancia);
        return this.condiciones.find(elemento => cantidadDeAtletas >= elemento.minimo && cantidadDeAtletas <= elemento.maximo);
    }
    getCantidadGrupoSerie(categoria, genero, distancia) {
        const grupoSerie = this.seriesService.getGrupoSerie(categoria, genero, distancia);
        return grupoSerie ? grupoSerie.total : 0;
    }
};
CondicionesCarrerasService.ctorParameters = () => [
    { type: _series_service__WEBPACK_IMPORTED_MODULE_2__["SeriesService"] }
];
CondicionesCarrerasService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], CondicionesCarrerasService);



/***/ }),

/***/ "./src/app/competencias/services/puntuacion.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/competencias/services/puntuacion.service.ts ***!
  \*************************************************************/
/*! exports provided: PuntuacionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuntuacionService", function() { return PuntuacionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PuntuacionService = class PuntuacionService {
    constructor() {
        this.puntuaciones = [
            {
                categorias: ['Pre infantiles', 'Infantiles', 'Menores A', 'Menores B'],
                puntos: [16, 13, 10, 8, 6, 4, 3, 2],
                default: 1
            },
            {
                categorias: ['Cadetes', 'Juniors', 'Seniors', 'Masters'],
                puntos: [15, 12, 9, 7, 5, 3, 1],
                default: 0
            },
        ];
    }
    getPuntuacion(categoria, posicion) {
        categoria = categoria.includes('Masters') ? 'Masters' : categoria;
        let puntuacion = this.puntuaciones.find(elemento => elemento.categorias.includes(categoria));
        let puntos = puntuacion.puntos[posicion - 1] || puntuacion.default;
        return puntos;
    }
};
PuntuacionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PuntuacionService);



/***/ })

}]);
//# sourceMappingURL=competencias-series-series-module-es2015.js.map