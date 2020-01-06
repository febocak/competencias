(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["procedures-consola-consola-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/consola/components/consola.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/consola/components/consola.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n    <div class=\"card mt-3\">\n      <div class=\"card-header text-center\">\n        <div *ngIf=\"!!registro\" class=\"\">\n          {{ desStatus }} [ {{ nivelStatus }} ]<br>\n          {{ registro.competencia }} <br>\n          {{ registro.club}}\n        </div>\n      </div>\n      \n      <div class=\"card-body\">\n\n        <div class=\"row mt-3\">\n          <div class=\"col-10\">\n            <button class=\"btn btn-block btn-lg\" \n              data-toggle=\"modal\" data-target=\"#modalCompetencia\" [disabled]=\"nivelStatus > 0\"\n              [ngClass]=\"nivelStatus >= 1 ? 'btn-primary' : 'btn-outline-primary'\">\n              Establecer próxima competencia\n            </button>\n          </div>\n          <div class=\"col-2\">\n            <span class=\"text-primary\">\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 1 ? 'fa-check-square-o': 'fa-square-o'\"></i>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row mt-3\">\n          <div class=\"col-10\">\n            <button class=\"btn btn-block btn-lg\" (click)=\"abrirInscirpciones()\"\n              [disabled]=\"nivelStatus === 2 || nivelStatus > 3\"\n              [ngClass]=\"nivelStatus >= 2 ? 'btn-primary' : 'btn-outline-primary'\">\n              Abrir inscripciones\n            </button>\n          </div>\n          <div class=\"col-2\">\n            <span class=\"text-primary\">\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 2 ? 'fa-check-square-o': 'fa-square-o'\"></i>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row mt-3\">\n          <div class=\"col-10\">\n            <button class=\"btn btn-block btn-lg\" (click)=\"cerrarInscirpciones()\"\n            [ngClass]=\"nivelStatus >= 3 ? 'btn-primary' : 'btn-outline-primary'\">\n              Cerrar inscripciones\n            </button>\n          </div>\n          <div class=\"col-2\">\n            <span class=\"text-primary\">\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 3 ? 'fa-check-square-o': 'fa-square-o'\"></i>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row mt-3\">\n          <div class=\"col-10\">\n            <button class=\"btn btn-block btn-lg\" \n            data-toggle=\"modal\" data-target=\"#modalDownload\"\n            [ngClass]=\"nivelStatus >= 4 ? 'btn-primary' : 'btn-outline-primary'\">\n              Exportar datos de las inscripciones\n            </button>\n          </div>\n          <div class=\"col-2\">\n            <span class=\"text-primary\">\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 4 ? 'fa-check-square-o': 'fa-square-o'\"></i>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row mt-3\">\n          <div class=\"col-10\">\n            <button class=\"btn btn-block btn-lg\" (click)=\"abrirCompetencia()\"\n              [ngClass]=\"nivelStatus >= 5 ? 'btn-primary' : 'btn-outline-primary'\">\n              Abrir competencia\n            </button>\n          </div>\n          <div class=\"col-2\">\n            <span class=\"text-primary\">\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 5 ? 'fa-check-square-o': 'fa-square-o'\"></i>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row mt-3\">\n          <div class=\"col-10\">\n            <button class=\"btn btn-block btn-lg\" (click)=\"importarDatos()\"\n              [ngClass]=\"nivelStatus >= 6 ? 'btn-primary' : 'btn-outline-primary'\">\n              Importar datos de la competencia\n            </button>\n          </div>\n          <div class=\"col-2\">\n            <span class=\"text-primary\">\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 6 ? 'fa-check-square-o': 'fa-square-o'\"></i>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"row mt-3\">\n          <div class=\"col-10\">\n            <button class=\"btn btn-block btn-lg\" (click)=\"cerrarCompetencia()\"\n              [ngClass]=\"nivelStatus >= 7 ? 'btn-primary' : 'btn-outline-primary'\">\n              Cerrar competencia\n            </button>\n          </div>\n          <div class=\"col-2\">\n            <span class=\"text-primary\">\n              <i class=\"fa fa-3x\" [ngClass]=\"nivelStatus >= 7 ? 'fa-check-square-o': 'fa-square-o'\"></i>\n            </span>\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n<app-modal-competencia\n  [tabla]=\"tblCompetencias\"\n  (emitSeleccionar)=\"seleccionarCompetencia($event)\"\n></app-modal-competencia>\n\n<app-modal-download\n  [competencia] = 'registro'\n  (emitExportar)=\"exportarDatos()\"\n></app-modal-download>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/consola/components/modal-competencia.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/consola/components/modal-competencia.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Modal -->\n<div id=\"modalCompetencia\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> Competencias </h5>\n        <button #btClose type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <table class=\"table table-bordered table-hover\">\n          <thead>\n            <tr>\n              <th> Desde </th>\n              <th> Hasta </th>\n              <th> Competencia </th>\n              <th> Club </th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let registro of tabla\">\n              <td (click)=\"seleccionar(registro)\"> {{ registro.desde }} </td>\n              <td (click)=\"seleccionar(registro)\"> {{ registro.hasta }} </td>\n              <td (click)=\"seleccionar(registro)\"> {{ registro.competencia }} </td>\n              <td (click)=\"seleccionar(registro)\"> {{ registro.club }} </td>\n            </tr>\n          </tbody>\n\n        </table>\n\n        <button class=\"btn btn-secondary float-center\" (click)=\"cancelar()\">\n          Cancelar\n        </button>\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/consola/components/modal-download.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/consola/components/modal-download.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"modalDownload\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-md\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> Exportar datos </h5>\n        <button #btCloseDownload type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <h4> {{ mensaje }} </h4>\n          </div>\n          <div class=\"col-6\">\n            <button class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"preparacionStatus > 0\"\n              (click)=\"generateDownloadJsonUri()\">\n              Procesar\n            </button>\n          </div>\n          <div class=\"col-6\">\n            <button class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"preparacionStatus < 2\"\n              (click)=\"exportarDatos()\">\n              Exportar\n            </button>\n          </div>\n        </div>\n\n        <div class=\"row mt-3\">\n          <div class=\"col-6 mx-auto\">\n            <button class=\"btn btn-block btn-secondary\" (click)=\"cancelar()\">\n              Cancelar\n            </button>\n          </div>\n        </div>\n        \n        <a #aDownload class=\"btn btn-clear d-none\" title=\"Download JSON\" [href]=\"downloadJsonHref\" download=\"FeBoCaK.json\">\n          Link\n        </a> \n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/procedures/consola/components/consola.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/procedures/consola/components/consola.component.ts ***!
  \********************************************************************/
/*! exports provided: ConsolaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolaComponent", function() { return ConsolaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");





let ConsolaComponent = class ConsolaComponent {
    constructor(crudService, msg, router) {
        this.crudService = crudService;
        this.msg = msg;
        this.router = router;
        this.nivelStatus = 0;
        this.desStatus = '';
    }
    ngOnInit() {
        this.getRecords();
        this.crudService.getAllRecords$('competencias').subscribe(data => this.tblCompetencias = data);
    }
    getRecords() {
        this.crudService.getRecord$('consola', '01').subscribe(data => {
            this.registro = data;
            this.setState();
        });
    }
    setState() {
        switch (this.registro.status) {
            case 'Establecer próxima competencia':
                this.nivelStatus = 1;
                this.desStatus = 'Próxima competencia';
                break;
            case 'Abrir inscripciones':
                this.nivelStatus = 2;
                this.desStatus = 'Inscripciones abiertas';
                break;
            case 'Cerrar inscripciones':
                this.nivelStatus = 3;
                this.desStatus = 'Inscripciones cerradas';
                break;
            case 'Exportar datos':
                this.nivelStatus = 4;
                this.desStatus = 'Inscripciones cerradas - Datos exportados';
                break;
            case 'Abrir competencia':
                this.nivelStatus = 5;
                this.desStatus = 'En competencia';
                break;
            case 'Importar datos':
                this.nivelStatus = 6;
                this.desStatus = 'Resultados de la competencia cargados';
                break;
            case 'Cerrar competencia':
                this.nivelStatus = 0;
                this.desStatus = 'Competencia guardada en el histórico';
                break;
            default:
                break;
        }
    }
    seleccionarCompetencia(registro) {
        if (registro) {
            this.establecerProximaCompetencia(registro);
        }
    }
    establecerProximaCompetencia(registro) {
        if (this.nivelStatus !== 0) {
            this.msg.ok('Este proceso ya se realizó');
            return;
        }
        this.registro = registro;
        this.registro.status = 'Establecer próxima competencia';
        this.registro.id = '01';
        this.crudService.updateRecord$('consola', '01', this.registro).subscribe(_ => {
            this.msg.ok('Competencia establecida satisfactoriamente');
            this.nivelStatus = 1;
        }, error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => console.log("this.router.navigate(['home'])"));
    }
    abrirInscirpciones() {
        if (this.nivelStatus > 4) {
            this.msg.ok('No puede reabrir las inscripciones después de haber importado los datos de la competencia');
            return;
        }
        if (this.nivelStatus < 1) {
            this.msg.ok('Primero debe establecer la competencia');
            return;
        }
        this.registro.status = 'Abrir inscripciones';
        this.crudService.updateRecord$('consola', '01', this.registro).subscribe(_ => {
            this.msg.ok('Inscripciones abiertas satisfactoriamente');
            this.nivelStatus = 2;
        }, error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => console.log("this.router.navigate(['home'])"));
    }
    cerrarInscirpciones() {
        if (this.nivelStatus > 2) {
            this.msg.ok('Este proceso ya se realizó');
            return;
        }
        if (this.nivelStatus < 2) {
            this.msg.ok('Primero debe abrir inscripciones');
            return;
        }
        this.registro.status = 'Cerrar inscripciones';
        this.crudService.updateRecord$('consola', '01', this.registro).subscribe(_ => {
            this.msg.ok('Inscripciones cerradas satisfactoriamente');
            this.nivelStatus = 3;
        }, error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => console.log("this.router.navigate(['home'])"));
    }
    exportarDatos() {
        /* if (this.nivelStatus > 3) {
          this.msg.ok('Este proceso ya se realizó');
          return
        } */
        if (this.nivelStatus < 3) {
            this.msg.ok('Primero debe cerrar inscripciones');
            return;
        }
        this.registro.status = 'Exportar datos';
        this.nivelStatus = 4;
        this.guardarStatus('Datos exportados satisfactoriamente');
    }
    abrirCompetencia() {
        if (this.nivelStatus > 4) {
            this.msg.ok('Este proceso ya se realizó');
            return;
        }
        if (this.nivelStatus < 4) {
            this.msg.ok('Primero debe exportar los datos');
            return;
        }
        this.registro.status = 'Abrir competencia';
        this.nivelStatus = 5;
        this.guardarStatus('Competencia abierta satisfactoriamente');
    }
    importarDatos() {
        if (this.nivelStatus > 5) {
            this.msg.ok('Este proceso ya se realizó');
            return;
        }
        if (this.nivelStatus < 5) {
            this.msg.ok('Primero debe abrir la competencia');
            return;
        }
        this.registro.status = 'Importar datos';
        this.nivelStatus++;
        this.guardarStatus('Datos importados satisfactoriamente');
    }
    cerrarCompetencia() {
        if (this.nivelStatus > 6) {
            this.msg.ok('Este proceso ya se realizó');
            return;
        }
        if (this.nivelStatus < 6) {
            this.msg.ok('Primero debe importar los datos');
            return;
        }
        this.registro.status = 'Cerrar competencia';
        this.nivelStatus++;
        this.guardarStatus('Competencia cerrada satisfactoriamente');
    }
    guardarStatus(mensaje) {
        this.crudService.updateRecord$('consola', this.registro.id, this.registro).subscribe(_ => this.msg.ok(mensaje), error => this.msg.error('Error al actualizar los datos: ' + error.statusText), () => console.log("this.router.navigate(['home'])"));
    }
};
ConsolaComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__["CrudService"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ConsolaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consola',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consola.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/consola/components/consola.component.html")).default
    })
], ConsolaComponent);



/***/ }),

/***/ "./src/app/procedures/consola/components/modal-competencia.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/procedures/consola/components/modal-competencia.component.ts ***!
  \******************************************************************************/
/*! exports provided: ModalCompetenciaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCompetenciaComponent", function() { return ModalCompetenciaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");



let ModalCompetenciaComponent = class ModalCompetenciaComponent {
    constructor(crudService) {
        this.crudService = crudService;
        this.emitSeleccionar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    seleccionar(registro) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('TCL: ModalCompetenciaComponent -> seleccionar -> registro antes', registro);
            const tipoDeCompetencia = yield this.crudService.getRecordByField$('tipos-de-competencias', 'tipo', registro.tipoDeCompetencia).toPromise();
            registro = Object.assign({}, registro, { distancia: tipoDeCompetencia.distancia });
            console.log('TCL: ModalCompetenciaComponent -> seleccionar -> registro despues', registro);
            yield this.crudService.updateRecord$('competencias', registro.id, registro).toPromise();
            this.emitSeleccionar.emit(registro);
            this.btClose.nativeElement.click();
        });
    }
    cancelar() {
        this.btClose.nativeElement.click();
    }
};
ModalCompetenciaComponent.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__["CrudService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btClose', { static: false })
], ModalCompetenciaComponent.prototype, "btClose", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ModalCompetenciaComponent.prototype, "tabla", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ModalCompetenciaComponent.prototype, "emitSeleccionar", void 0);
ModalCompetenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-competencia',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-competencia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/consola/components/modal-competencia.component.html")).default
    })
], ModalCompetenciaComponent);



/***/ }),

/***/ "./src/app/procedures/consola/components/modal-download.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/procedures/consola/components/modal-download.component.ts ***!
  \***************************************************************************/
/*! exports provided: ModalDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDownloadComponent", function() { return ModalDownloadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _exportar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../exportar.service */ "./src/app/procedures/consola/exportar.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let ModalDownloadComponent = class ModalDownloadComponent {
    constructor(sanitizer, exportarService) {
        this.sanitizer = sanitizer;
        this.exportarService = exportarService;
        this.emitExportar = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.preparacionStatus = 0;
        this.mensaje = 'El proceso de exportar los datos puede tardar varios minutos. Para iniciar pulse en el botón preparar datos. Una vez finalizado el proceso pulse en el botón exportar';
    }
    ngOnInit() {
    }
    cancelar() {
        this.btClose.nativeElement.click();
    }
    exportarDatos() {
        this.aDownload.nativeElement.click();
        this.emitExportar.emit('Exportar');
        this.btClose.nativeElement.click();
    }
    generateDownloadJsonUri() {
        this.mensaje = 'P r e p a r a n d o . . .';
        this.preparacionStatus = 1;
        let jsonData = '{';
        let contador = 0;
        let nombres = [];
        const categorias$ = this.exportarService.getCategorias$();
        nombres.push('categorias');
        const clubes$ = this.exportarService.getClubes$();
        nombres.push('clubes');
        const competencias$ = this.exportarService.getCompetencias$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.filter(elemento => elemento.club === this.competencia.club &&
            elemento.competencia === this.competencia.competencia &&
            elemento.desde === this.competencia.desde &&
            elemento.hasta === this.competencia.hasta)));
        nombres.push('competencias');
        const consola$ = this.exportarService.getConsola$();
        const inscripciones$ = this.exportarService.getInscripciones$();
        nombres.push('inscripciones');
        const palistas$ = this.exportarService.getPalistas$();
        nombres.push('palistas');
        const users$ = this.exportarService.getUsers$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => data.filter(usuario => usuario.rol === 'Competencias')));
        nombres.push('users');
        const result$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(categorias$, clubes$, competencias$, consola$, inscripciones$, palistas$, users$);
        result$.subscribe(data => {
            jsonData = jsonData + '"' + nombres[contador] + '":' + JSON.stringify(data);
            contador++;
            if (contador == nombres.length) {
                jsonData = jsonData + '}';
                this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonData));
                this.mensaje = 'Preparación finalizada';
                this.preparacionStatus = 2;
            }
            else {
                jsonData = jsonData + ',';
            }
        });
    }
};
ModalDownloadComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _exportar_service__WEBPACK_IMPORTED_MODULE_4__["ExportarService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ModalDownloadComponent.prototype, "competencia", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('btCloseDownload', { static: true })
], ModalDownloadComponent.prototype, "btClose", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('aDownload', { static: true })
], ModalDownloadComponent.prototype, "aDownload", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ModalDownloadComponent.prototype, "emitExportar", void 0);
ModalDownloadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-modal-download',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-download.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/procedures/consola/components/modal-download.component.html")).default
    })
], ModalDownloadComponent);



/***/ }),

/***/ "./src/app/procedures/consola/consola-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/procedures/consola/consola-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ConsolaRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolaRoutingModule", function() { return ConsolaRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_consola_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/consola.component */ "./src/app/procedures/consola/components/consola.component.ts");




const routes = [
    { path: '', component: _components_consola_component__WEBPACK_IMPORTED_MODULE_3__["ConsolaComponent"] }
];
let ConsolaRoutingModule = class ConsolaRoutingModule {
};
ConsolaRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ConsolaRoutingModule);



/***/ }),

/***/ "./src/app/procedures/consola/consola.module.ts":
/*!******************************************************!*\
  !*** ./src/app/procedures/consola/consola.module.ts ***!
  \******************************************************/
/*! exports provided: ConsolaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolaModule", function() { return ConsolaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _consola_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consola-routing.module */ "./src/app/procedures/consola/consola-routing.module.ts");
/* harmony import */ var _components_consola_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/consola.component */ "./src/app/procedures/consola/components/consola.component.ts");
/* harmony import */ var _components_modal_competencia_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal-competencia.component */ "./src/app/procedures/consola/components/modal-competencia.component.ts");
/* harmony import */ var _components_modal_download_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal-download.component */ "./src/app/procedures/consola/components/modal-download.component.ts");







let ConsolaModule = class ConsolaModule {
};
ConsolaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_components_consola_component__WEBPACK_IMPORTED_MODULE_4__["ConsolaComponent"], _components_modal_competencia_component__WEBPACK_IMPORTED_MODULE_5__["ModalCompetenciaComponent"], _components_modal_download_component__WEBPACK_IMPORTED_MODULE_6__["ModalDownloadComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _consola_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConsolaRoutingModule"]
        ]
    })
], ConsolaModule);



/***/ }),

/***/ "./src/app/procedures/consola/exportar.service.ts":
/*!********************************************************!*\
  !*** ./src/app/procedures/consola/exportar.service.ts ***!
  \********************************************************/
/*! exports provided: ExportarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportarService", function() { return ExportarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let ExportarService = class ExportarService {
    constructor(afs) {
        this.afs = afs;
    }
    getCategorias$() {
        const collection = this.afs.collection("categorias", ref => ref.orderBy('desde'));
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    getClubes$() {
        const collection = this.afs.collection("clubes");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    getCompetencias$() {
        const collection = this.afs.collection("competencias");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    getConsola$() {
        const collection = this.afs.collection("consola");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    getInscripciones$() {
        const collection = this.afs.collection("inscripciones");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    getPalistas$() {
        const collection = this.afs.collection("palistas");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    getUsers$() {
        const collection = this.afs.collection("users");
        return collection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
};
ExportarService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
];
ExportarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], ExportarService);



/***/ })

}]);
//# sourceMappingURL=procedures-consola-consola-module-es2015.js.map