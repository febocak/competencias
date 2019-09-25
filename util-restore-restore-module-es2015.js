(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["util-restore-restore-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/restore/restore.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/util/restore/restore.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n    <div class=\"card mt-3\">\n      <div class=\"card-header\">\n        Restaurar BD\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"row\" >\n          <div class=\"col-9\">\n\n            <h5>Datos del archivo</h5>\n            <table  class=\"table\">\n              <tr>\n                <th>Nombre: </th>\n                <td colspan=\"3\" *ngIf=\"!!file\"> {{ file.name }} </td>\n              </tr>\n              <tr>\n                <th>Fecha: </th>\n                <td *ngIf=\"!!file\"> {{ fecha }} </td>\n                <th>Hora: </th>\n                <td *ngIf=\"!!file\"> {{ hora }} </td>\n              </tr>\n              \n              <tr>\n                <th>tipo: </th>\n                <td *ngIf=\"!!file\"> {{ file.type }} </td>\n                <th>tamaño: </th>\n                <td *ngIf=\"!!file\"> {{ file.size }} </td>\n              </tr>\n            </table>\n          </div>\n\n          <div class=\"col-3\">\n            <h5>Tablas</h5>\n            <table class=\"table\">\n              <ng-container *ngIf=\"!!tablas\"> \n                <tr *ngFor=\"let tabla of tablas\">\n                  <td class=\"p-1\"> {{ tabla }} </td>\n                </tr>\n              </ng-container>\n            </table>\n          </div>\n        </div >\n\n        <label class=\"btn btn-primary btn-block btn-file\">\n            <i class=\"fa fa-folder\"> </i> Seleccione el archivo \n          <input #fileUrl type=\"file\" style=\"display: none;\" accept=\".json\" (change)=\"onChange($event)\">\n        </label>\n\n        <div class=\"row\">\n          <div class=\"col-6\">\n            <button type=\"button\" class=\"btn btn-lg btn-primary btn-block\" [disabled]=\"!fileUrl.value\"\n              (click)=\"onUpload()\">\n              <i class=\"fa fa-upload\"></i> Restaurar BD\n            </button>\n          </div>\n          <div class=\"col-6\">\n            <button type=\"button\" class=\"btn btn-lg btn-secondary btn-block\" (click)=\"goBack()\">\n              Cancelar\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/util/restore/restore.component.ts":
/*!***************************************************!*\
  !*** ./src/app/util/restore/restore.component.ts ***!
  \***************************************************/
/*! exports provided: RestoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreComponent", function() { return RestoreComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");






let RestoreComponent = class RestoreComponent {
    constructor(router, location, msg, crudService) {
        this.router = router;
        this.location = location;
        this.msg = msg;
        this.crudService = crudService;
    }
    ngOnInit() {
    }
    onChange(e) {
        this.file = e.target.files[0];
        let fecha = new Date(this.file.lastModified);
        this.fecha = fecha.toLocaleDateString();
        this.hora = fecha.toLocaleTimeString();
        let reader = new FileReader();
        reader.onloadend = () => {
            this.datos = JSON.parse(reader.result);
            this.tablas = Object.keys(this.datos);
        };
        reader.readAsText(this.file);
    }
    onUpload() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let numRecordsInDB = 0;
            for (const tabla of this.tablas.filter(el => el !== 'users')) {
                let verifyData = yield this.verifyTabla(tabla);
                let numRegistros = verifyData ? verifyData.length : 0;
                numRecordsInDB += numRegistros;
                console.log('tabla:', tabla, 'registros', numRegistros);
                let datos = JSON.stringify(this.datos[tabla]);
            }
            console.log('numRecordsInDB', numRecordsInDB);
            if (numRecordsInDB === 0) {
                this.tablas.forEach((tabla) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let datos = [...this.datos[tabla]];
                    console.log(tabla);
                    datos.forEach(record => {
                        this.crudService.setRecord$(tabla, record);
                    });
                }));
            }
            this.router.navigate(['home']);
            this.msg.ok('Datos restaurados satisfactoriamente');
        });
    }
    goBack() {
        this.location.back();
    }
    verifyTabla(tabla) {
        return this.crudService.getAllRecords$(tabla).toPromise();
    }
};
RestoreComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] }
];
RestoreComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-restore',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./restore.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/util/restore/restore.component.html")).default
    })
], RestoreComponent);



/***/ }),

/***/ "./src/app/util/restore/restore.module.ts":
/*!************************************************!*\
  !*** ./src/app/util/restore/restore.module.ts ***!
  \************************************************/
/*! exports provided: RestoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestoreModule", function() { return RestoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _restore_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./restore.component */ "./src/app/util/restore/restore.component.ts");





const routes = [
    { path: '', component: _restore_component__WEBPACK_IMPORTED_MODULE_4__["RestoreComponent"] }
];
let RestoreModule = class RestoreModule {
};
RestoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_restore_component__WEBPACK_IMPORTED_MODULE_4__["RestoreComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], RestoreModule);



/***/ })

}]);
//# sourceMappingURL=util-restore-restore-module-es2015.js.map