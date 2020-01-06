(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/competencias/services/series.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/competencias/services/series.service.ts ***!
  \*********************************************************/
/*! exports provided: SeriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeriesService", function() { return SeriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/util.service */ "./src/app/services/util.service.ts");







let SeriesService = class SeriesService {
    constructor(afs, authService, util) {
        this.afs = afs;
        this.authService = authService;
        this.util = util;
        this.usuario = this.authService.getUser();
    }
    nombreDetalle(tipoCarrera) {
        return tipoCarrera === 'series' ? 'detalleSeries' :
            tipoCarrera === 'semis' ? 'detalleSemis' : 'detalleFinales';
    }
    limpiarCarreras() {
        localStorage.setItem('series', JSON.stringify([]));
        localStorage.setItem('detalleSeries', JSON.stringify([]));
        localStorage.setItem('semis', JSON.stringify([]));
        localStorage.setItem('detalleSemis', JSON.stringify([]));
        localStorage.setItem('finales', JSON.stringify([]));
        localStorage.setItem('detalleFinales', JSON.stringify([]));
    }
    /* Métodos para Editar series con Drag and Drop */
    getSerie(id) {
        const tabla = JSON.parse(localStorage.getItem('series'));
        return tabla.find(elemento => elemento.id === id);
    }
    updateSerie(id, registro) {
        registro.id = id;
        const tabla = JSON.parse(localStorage.getItem('series'));
        tabla.splice(tabla.findIndex(element => element.id === id), 1, registro);
        localStorage.setItem('series', JSON.stringify(tabla));
    }
    getSeries() {
        return JSON.parse(localStorage.getItem('series'));
    }
    getDetalleSerie(id) {
        const series = JSON.parse(localStorage.getItem('detalleSeries'));
        let serie = series.filter(elemento => elemento.idSerie === id);
        return serie;
    }
    updateDetalleSeries(id, tabla) {
        let series = JSON.parse(localStorage.getItem('detalleSeries'));
        if (!series) {
            series = [];
        }
        let filtro = series.filter(elemento => elemento.idSerie !== id);
        localStorage.setItem('detalleSeries', JSON.stringify(tabla.concat(filtro)));
    }
    /* Semifinales y finales */
    getCarrera(tipoCarrera, id) {
        const tabla = JSON.parse(localStorage.getItem(tipoCarrera));
        return tabla.find(elemento => elemento.id === id);
    }
    getCarreras(tipo) {
        return JSON.parse(localStorage.getItem(tipo));
    }
    getDetalleCarrera(tipoCarrera, id) {
        const palistas = JSON.parse(localStorage.getItem(this.nombreDetalle(tipoCarrera)));
        return palistas.filter(elemento => elemento.idSerie === id);
    }
    updateCarrera(tipoCarrera, id, registro) {
        const tabla = JSON.parse(localStorage.getItem(tipoCarrera));
        tabla.splice(tabla.findIndex(element => element.id === id), 1, registro);
        localStorage.setItem(tipoCarrera, JSON.stringify(tabla));
    }
    updateDetalleCarrera(tipoCarrera, id, tabla) {
        const detalle = this.nombreDetalle(tipoCarrera);
        const series = JSON.parse(localStorage.getItem(detalle)).
            filter(elemento => elemento.idSerie !== id);
        localStorage.setItem(detalle, JSON.stringify(series.concat(tabla)));
    }
    /* **********   */
    getSemis() {
        return JSON.parse(localStorage.getItem('semis'));
    }
    addAllSemifinales(tabla) {
        localStorage.setItem('semis', JSON.stringify(tabla));
    }
    updateDetalleSemis(id, tabla) {
        let series = JSON.parse(localStorage.getItem('detalleSemis'));
        if (!series) {
            series = [];
        }
        let filtro = series.filter(elemento => elemento.idSerie !== id);
        localStorage.setItem('detalleSemis', JSON.stringify(tabla.concat(filtro)));
    }
    getFinales() {
        return JSON.parse(localStorage.getItem('finales'));
    }
    addAllFinales(tabla) {
        localStorage.setItem('finales', JSON.stringify(tabla));
    }
    updateDetalleFinales(id, tabla) {
        let series = JSON.parse(localStorage.getItem('detalleFinales'));
        if (!series) {
            series = [];
        }
        let filtro = series.filter(elemento => elemento.idSerie !== id);
        localStorage.setItem('detalleFinales', JSON.stringify(tabla.concat(filtro)));
    }
    addAllGrupoSeries(tabla) {
        localStorage.setItem('grupoSeries', JSON.stringify(tabla));
    }
    getGrupoSerie(categoria, genero, distancia) {
        const grupoSeries = JSON.parse(localStorage.getItem('grupoSeries'));
        return grupoSeries.find(el => el.categoria === categoria && el.genero === genero && el.distancia === distancia);
    }
    /* */
    getRecords$() {
        return this.usuario.rol === 'Competencias' ? this.getRecordsLS$() : this.getRecordsFB$();
    }
    getRecordsLS$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(JSON.parse(localStorage.getItem('series')));
    }
    getRecordsFB$() {
        this.collection = this.afs.collection('series');
        return this.collection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    getRecord$(id) {
        const tabla = JSON.parse(localStorage.getItem('series'));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(tabla.find(elemento => elemento.id === id));
    }
    addRecord$(registro) {
        return this.usuario.rol === 'Competencias' ? this.addRecordLS$(registro) : this.addRecordFB$(registro);
    }
    addRecordLS$(registro) {
        const tabla = JSON.parse(localStorage.getItem('series'));
        registro.id = this.util.generarID();
        tabla.push(registro);
        localStorage.setItem('series', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    }
    addRecordFB$(registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.collection.add(registro));
    }
    updateRecord$(id, registro) {
        return this.usuario.rol === 'Competencias' ? this.updateRecordLS$(id, registro) : this.updateRecordFB$(id, registro);
    }
    updateRecordLS$(id, registro) {
        registro.id = id;
        const tabla = JSON.parse(localStorage.getItem('series'));
        tabla.splice(tabla.findIndex(element => element.id === id), 1, registro);
        localStorage.setItem('series', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(registro);
    }
    updateRecordFB$(id, registro) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc(`palistas/${id}`).update(registro));
    }
    deleteRecord$(id) {
        return this.usuario.rol === 'Competencias' ? this.deleteRecordLS$(id) : this.deleteRecordFB$(id);
    }
    deleteRecordLS$(id) {
        const tabla = JSON.parse(localStorage.getItem('series'));
        tabla.splice(tabla.findIndex(element => element.id === id), 1);
        localStorage.setItem('series', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    }
    deleteRecordFB$(id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.afs.doc(`palistas/${id}`).delete());
    }
    addSeriesLS$(tabla) {
        localStorage.setItem('series', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    }
    addDetalleSeriesLS$(tabla) {
        localStorage.setItem('detalleSeries', JSON.stringify(tabla));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    }
    updateDetalleSeriesLS$(id, tabla) {
        const series = JSON.parse(localStorage.getItem('detalleSeries')).
            filter(elemento => elemento.idSerie !== id);
        localStorage.setItem('detalleSeries', JSON.stringify(series.concat(tabla)));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tabla);
    }
    getDetalleSerieLS$(id) {
        const series = JSON.parse(localStorage.getItem('detalleSeries'));
        let serie = series.filter(elemento => elemento.idSerie === id);
        serie = serie.sort((a, b) => parseInt(a.numero) - parseInt(b.numero) < 0 ? -1 : 0);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(serie);
    }
};
SeriesService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] }
];
SeriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SeriesService);



/***/ }),

/***/ "./src/app/services/array.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/array.service.ts ***!
  \*******************************************/
/*! exports provided: ArrayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayService", function() { return ArrayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ArrayService = class ArrayService {
    constructor() { }
    sort(source, parFields, type = 'up') {
        const copySource = [...source];
        copySource.sort((a, b) => this.biggerSmallerOrSame(a, b, parFields, type));
        return copySource;
    }
    groupAndFlat(source, parFields) {
        const copySource = this.sort(source, parFields, 'down');
        let newArray = [];
        let group = this.concatFields(copySource[0], parFields);
        newArray.push(copySource[0]);
        for (let i = 0; i < copySource.length; i++) {
            let newGroup = this.concatFields(copySource[i], parFields);
            if (newGroup !== group) {
                group = newGroup;
                newArray.push(copySource[i]);
            }
        }
        return newArray;
    }
    groupAndCount(source, parFields) {
        const copySource = [...source];
        copySource.sort((a, b) => this.biggerSmallerOrSame(a, b, parFields));
        let newArray = [];
        let i = 0;
        while (i < copySource.length) {
            let contador = 0;
            let group = this.concatFields(copySource[i], parFields);
            let element = copySource[i];
            while (i < copySource.length && group === this.concatFields(copySource[i], parFields)) {
                i++;
                contador++;
            }
            newArray.push(Object.assign({}, element, { cantidad: contador }));
        }
        return newArray;
    }
    groupAndSum(source, parFields, fieldSum) {
        const copySource = [...source];
        copySource.sort((a, b) => this.biggerSmallerOrSame(a, b, parFields));
        let newArray = [];
        let i = 0;
        while (i < copySource.length) {
            let suma = 0;
            let group = this.concatFields(copySource[i], parFields);
            let element = copySource[i];
            while (i < copySource.length && group === this.concatFields(copySource[i], parFields)) {
                suma += +copySource[i][fieldSum];
                i++;
            }
            newArray.push(Object.assign({}, element, { suma }));
        }
        return newArray;
    }
    concatFields(obj, fields) {
        let retorno = fields.reduce((acc, el) => acc + this.toString(obj[el]).trim(), '');
        return retorno;
    }
    toString(parVariable) {
        if (typeof parVariable === 'number') {
            return parVariable.toString();
        }
        if (typeof parVariable === 'boolean') {
            return parVariable ? '1' : '0';
        }
        if (typeof parVariable === 'string') {
            return parVariable;
        }
    }
    biggerSmallerOrSame(parA, parB, fields, type = 'up') {
        const A = this.concatFields(parA, fields);
        const B = this.concatFields(parB, fields);
        if (A > B) {
            return type === 'up' ? -1 : 1;
        }
        if (B > A) {
            return type === 'up' ? 1 : -1;
        }
        ;
        return 0;
    }
    find(source, objSearch) {
        const fields = Object.keys(objSearch);
        let searchCondition = this.concatFields(objSearch, fields);
        return source.find(value => this.concatFields(value, fields) === searchCondition);
    }
    findIndex(source, objSearch) {
        const fields = Object.keys(objSearch);
        let searchCondition = this.concatFields(objSearch, fields);
        return source.findIndex(value => this.concatFields(value, fields) === searchCondition);
    }
    filter(source, objSearch) {
        const fields = Object.keys(objSearch);
        let searchCondition = this.concatFields(objSearch, fields);
        return source.filter(value => this.concatFields(value, fields) === searchCondition);
    }
};
ArrayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArrayService);



/***/ }),

/***/ "./src/app/services/util.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UtilService = class UtilService {
    constructor() { }
    showDate(strFecha) {
        const fecha = new Date(strFecha + 'T00:00:00');
        const dia = fecha.getDate().toString().padStart(2, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        return dia + '/' + mes + '/' + fecha.getFullYear();
    }
    generarID() {
        const fecha = new Date();
        const año = fecha.getFullYear().toString().padStart(4, '0');
        const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
        const dia = fecha.getDate().toString().padStart(2, '0');
        const hora = fecha.getHours().toString().padStart(2, '0');
        const minutos = fecha.getMinutes().toString().padStart(2, '0');
        const segundos = fecha.getSeconds().toString().padStart(2, '0');
        const ms = fecha.getMilliseconds().toString().padStart(1, '0');
        return 'local' + año + mes + dia + hora + minutos + segundos + ms;
    }
};
UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UtilService);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map