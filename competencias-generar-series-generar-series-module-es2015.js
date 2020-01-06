(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["competencias-generar-series-generar-series-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/generar-series/generar-series.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/generar-series/generar-series.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12 col-md-8 col-lg-6 mx-auto\">\n    <div class=\"card mt-3\">\n      <div class=\"card-header\">\n        Generar series\n      </div>\n\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h5>Clubes</h5>\n            <table class=\"table\">\n              <ng-container *ngIf=\"!!clubes\">\n                <tr *ngFor=\"let item of clubes\">\n                  <td class=\"p-1\"> {{ item }} </td>\n                </tr>\n              </ng-container>\n            </table>\n          </div>\n\n          <div class=\"col-3\">\n            <button type=\"button\" class=\"btn btn-primary btn-block\" (click)=\"onGenerar()\">\n              <i class=\"fa fa-running\"></i> Generar\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary btn-block\" (click)=\"goBack()\">\n              Cancelar\n            </button>\n          </div>\n        </div>\n\n        <div class=\"row\">\n\n          <h5>Categorías</h5>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Categoría</th>\n                <th>Genero</th>\n                <th>Distancia</th>\n                <th>Competidores</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of series\">\n                <td> {{ item.categoria }} </td>\n                <td> {{ item.genero }} </td>\n                <td> {{ item.distancia }} </td>\n                <td> {{ item.cantidad }} </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/competencias/generar-series/generar-series.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/competencias/generar-series/generar-series.component.ts ***!
  \*************************************************************************/
/*! exports provided: GenerarSeriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarSeriesComponent", function() { return GenerarSeriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/message/message.service */ "./src/app/core/message/message.service.ts");
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/crud.service */ "./src/app/services/crud.service.ts");
/* harmony import */ var _services_series_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/series.service */ "./src/app/competencias/services/series.service.ts");







let GenerarSeriesComponent = class GenerarSeriesComponent {
    constructor(router, location, msg, crudService, dataService) {
        this.router = router;
        this.location = location;
        this.msg = msg;
        this.crudService = crudService;
        this.dataService = dataService;
        this.inscripciones = [];
        this.grupoSeries = [];
        this.series = [];
        this.detalleSeries = [];
        this.clubes = [];
        this.semis = [];
        this.finales = [];
    }
    ngOnInit() {
        this.limpiarCarreras();
        this.cargarInscripciones();
    }
    limpiarCarreras() {
        this.dataService.limpiarCarreras();
    }
    cargarInscripciones() {
        this.crudService.getAllRecords$('inscripciones').subscribe(data => {
            for (let i = 0; i < data.length; i++) {
                for (let j = 0; j < data[i].distancia.length; j++) {
                    this.inscripciones.push(Object.assign({}, data[i], { distancia: data[i].distancia[j] }));
                }
            }
            this.inscripciones.sort((a, b) => {
                let aValue = a.categoria + a.genero + a.distancia;
                let bValue = b.categoria + b.genero + b.distancia;
                return aValue === bValue ? 0 : aValue > bValue ? -1 : 1;
            });
            this.generarClubes();
            this.generarSeries();
            this.generarFinalesYsemis();
        });
    }
    generarClubes() {
        this.inscripciones.forEach(elemento => {
            if (this.clubes.indexOf(elemento.club) === -1) {
                this.clubes.push(elemento.club);
            }
        });
    }
    generarSeries() {
        let numCarrera = 0;
        let i = 0;
        while (i < this.inscripciones.length) {
            let elemento = this.inscripciones[i];
            numCarrera++;
            let registro = this.generarObjetoSerie(elemento, numCarrera);
            this.series.push(registro);
            this.agregraGrupoSeries(registro);
            let numero = 0;
            while (i < this.inscripciones.length &&
                elemento.categoria + elemento.genero + elemento.distancia ===
                    registro.categoria + registro.genero + registro.distancia &&
                this.series[numCarrera - 1].cantidad < 9) {
                numero++;
                this.contarGrupoSeries(registro);
                this.series[numCarrera - 1].cantidad++;
                this.detalleSeries.push(Object.assign({}, elemento, { numero: numero.toString(), idSerie: registro.id, tiempo: '' }));
                i++;
                elemento = this.inscripciones[i];
            }
        }
    }
    generarObjetoSerie(data, contador) {
        return {
            id: contador.toString().padStart(4, '0'),
            categoria: data.categoria,
            genero: data.genero,
            distancia: data.distancia,
            cantidad: 0,
            status: { asignarNumero: false, cargarTiempos: false, generarResultados: false }
        };
    }
    agregraGrupoSeries(registro) {
        const encontro = this.grupoSeries.find(elemento => elemento.categoria + elemento.genero + elemento.distancia === registro.categoria + registro.genero + registro.distancia);
        if (!encontro) {
            this.grupoSeries.push({
                categoria: registro.categoria, genero: registro.genero, distancia: registro.distancia, total: 0
            });
        }
    }
    contarGrupoSeries(reg) {
        let indice = this.grupoSeries.findIndex(el => el.categoria + el.genero + el.distancia === reg.categoria + reg.genero + reg.distancia);
        this.grupoSeries[indice].total++;
    }
    generarFinalesYsemis() {
        let condiciones = [
            { minimo: 10, maximo: 18,
                carreras: { series: 2, semis: 1, final: 1 },
            },
            { minimo: 19, maximo: 27,
                carreras: { series: 3, semis: 2, final: 1 },
            },
            { minimo: 28, maximo: 36,
                carreras: { series: 4, semis: 3, final: 1 },
            },
            { minimo: 37, maximo: 45,
                carreras: { series: 5, semis: 3, final: 1 },
            },
            { minimo: 46, maximo: 54,
                carreras: { series: 6, semis: 3, final: 1 },
            },
            { minimo: 55, maximo: 63,
                carreras: { series: 7, semis: 4, final: 1 },
            },
            { minimo: 64, maximo: 72,
                carreras: { series: 8, semis: 4, final: 1 },
            }
        ];
        for (let i = 0; i < this.grupoSeries.length; i++) {
            let el = this.grupoSeries[i];
            for (let j = 0; j < condiciones.length; j++) {
                let condicion = condiciones[j];
                if (el.total >= condicion.minimo && el.total <= condicion.maximo) {
                    this.grupoSeries[i] = Object.assign({}, el, { carreras: condicion.carreras });
                }
            }
        }
        let contadorSemis = 0;
        let contadorFinales = 0;
        this.grupoSeries.forEach(el => {
            if (!!el.carreras) {
                for (let i = 0; i < el.carreras.semis; i++) {
                    contadorSemis++;
                    this.semis.push({
                        id: 'S' + contadorSemis.toString().padStart(3, '0'),
                        categoria: el.categoria,
                        genero: el.genero,
                        distancia: el.distancia,
                        cantidad: '0',
                        status: { asignarNumero: false, cargarTiempos: false, generarResultados: false }
                    });
                }
                contadorFinales++;
                this.finales.push({
                    id: 'F' + contadorFinales.toString().padStart(3, '0'),
                    categoria: el.categoria,
                    genero: el.genero,
                    distancia: el.distancia,
                    cantidad: '0',
                    status: { asignarNumero: false, cargarTiempos: false, generarResultados: false }
                });
            }
        });
    }
    onGenerar() {
        /* TODO: Verificar que no existan series,
            si hay series mostrar warning,
            si las series tienen tiempos cargados impedir generar series.
        */
        this.dataService.addAllGrupoSeries(this.grupoSeries);
        this.dataService.addAllSemifinales(this.semis);
        this.dataService.addAllFinales(this.finales);
        this.dataService.addSeriesLS$(this.series).subscribe(() => this.dataService.addDetalleSeriesLS$(this.detalleSeries).subscribe(() => this.msg.ok('Proceso realizado satisfactoriamente')), () => this.msg.error('Error generando las series'), () => this.router.navigate(['home']));
    }
    goBack() {
        this.location.back();
    }
};
GenerarSeriesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _core_message_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"] },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_5__["CrudService"] },
    { type: _services_series_service__WEBPACK_IMPORTED_MODULE_6__["SeriesService"] }
];
GenerarSeriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-generar-series',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./generar-series.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/competencias/generar-series/generar-series.component.html")).default
    })
], GenerarSeriesComponent);



/***/ }),

/***/ "./src/app/competencias/generar-series/generar-series.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/competencias/generar-series/generar-series.module.ts ***!
  \**********************************************************************/
/*! exports provided: GenerarSeriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerarSeriesModule", function() { return GenerarSeriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _generar_series_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generar-series.component */ "./src/app/competencias/generar-series/generar-series.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





const routes = [
    { path: '', component: _generar_series_component__WEBPACK_IMPORTED_MODULE_3__["GenerarSeriesComponent"] }
];
let GenerarSeriesModule = class GenerarSeriesModule {
};
GenerarSeriesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_generar_series_component__WEBPACK_IMPORTED_MODULE_3__["GenerarSeriesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], GenerarSeriesModule);



/***/ })

}]);
//# sourceMappingURL=competencias-generar-series-generar-series-module-es2015.js.map