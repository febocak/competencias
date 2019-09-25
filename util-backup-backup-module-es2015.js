(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["util-backup-backup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/backup/backup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/backup/backup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n\n    <div class=\"card mt-3\">\n      <div class=\"card-header\">\n        Respaldar datos\n\n      </div>\n\n      <div class=\"card-body\">\n\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <h4> {{ mensaje }} </h4>\n          </div>\n          <div class=\"col-6\">\n            <button class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"preparacionStatus > 0\"\n              (click)=\"generateDownloadJsonUri()\">\n              Procesar\n            </button>\n          </div>\n          <div class=\"col-6\">\n            <button class=\"btn btn-lg btn-block btn-primary\" [disabled]=\"preparacionStatus < 2\"\n              (click)=\"exportarDatos()\">\n              Exportar\n            </button>\n          </div>\n        </div>\n\n        <div class=\"row mt-3\">\n          <div class=\"col-6 mx-auto\">\n            <button class=\"btn btn-block btn-secondary\" (click)=\"goBack()\">\n              Cancelar\n            </button>\n          </div>\n        </div>\n\n        <a #aDownload class=\"btn btn-clear d-none\" title=\"Download JSON\" [href]=\"downloadJsonHref\" download=\"FeBoCaK.json\">\n          Link\n        </a> \n\n      </div>\n    </div>\n\n  </div>\n</div>");

/***/ }),

/***/ "./src/app/util/backup/backup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/util/backup/backup.component.ts ***!
  \*************************************************/
/*! exports provided: BackupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupComponent", function() { return BackupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let BackupComponent = class BackupComponent {
    constructor(location, sanitizer, crudService) {
        this.location = location;
        this.sanitizer = sanitizer;
        this.crudService = crudService;
        this.emitExportar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.preparacionStatus = 0;
        this.mensaje = 'El proceso de exportar los datos puede tardar varios minutos. Para iniciar pulse en el botón preparar datos. Una vez finalizado el proceso pulse en el botón exportar';
    }
    ngOnInit() {
    }
    goBack() {
        this.location.back();
    }
    exportarDatos() {
        this.aDownload.nativeElement.click();
        this.emitExportar.emit('Exportar');
        this.location.back();
    }
    generateDownloadJsonUri() {
        this.mensaje = 'P r e p a r a n d o . . .';
        this.preparacionStatus = 1;
        let jsonData = '{';
        let contador = 0;
        let nomTablas = ['categorias', 'clubes', 'distancias', 'competencias', 'consola', 'inscripciones', 'palistas', 'users'];
        let arrObs = [];
        nomTablas.forEach(tabla => arrObs.push(this.crudService.getAllRecords$(tabla)));
        const result$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["merge"])(...arrObs);
        result$.subscribe({
            next: data => {
                jsonData = jsonData + '"' + nomTablas[contador] + '":' + JSON.stringify(data);
                contador++;
                if (contador < nomTablas.length) {
                    jsonData = jsonData + ',';
                }
            },
            complete: () => {
                jsonData = jsonData + '}';
                this.downloadJsonHref = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(jsonData));
                this.mensaje = 'Preparación finalizada';
                this.preparacionStatus = 2;
            }
        });
    }
};
BackupComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BackupComponent.prototype, "competencia", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('aDownload', { static: false })
], BackupComponent.prototype, "aDownload", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], BackupComponent.prototype, "emitExportar", void 0);
BackupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-backup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./backup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/backup/backup.component.html")).default
    })
], BackupComponent);



/***/ }),

/***/ "./src/app/util/backup/backup.module.ts":
/*!**********************************************!*\
  !*** ./src/app/util/backup/backup.module.ts ***!
  \**********************************************/
/*! exports provided: BackupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupModule", function() { return BackupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _backup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./backup.component */ "./src/app/util/backup/backup.component.ts");





const routes = [
    { path: '', component: _backup_component__WEBPACK_IMPORTED_MODULE_4__["BackupComponent"] }
];
let BackupModule = class BackupModule {
};
BackupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_backup_component__WEBPACK_IMPORTED_MODULE_4__["BackupComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], BackupModule);



/***/ })

}]);
//# sourceMappingURL=util-backup-backup-module-es2015.js.map