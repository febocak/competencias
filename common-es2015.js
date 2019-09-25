(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
    groupAndFlat(source, parFields) {
        const copySource = [...source];
        copySource.sort((a, b) => this.mayMinOrEqual(a, b, parFields));
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
        copySource.sort((a, b) => this.mayMinOrEqual(a, b, parFields));
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
        copySource.sort((a, b) => this.mayMinOrEqual(a, b, parFields));
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
        return fields.reduce((acc, el) => acc + obj[el].trim(), '');
    }
    mayMinOrEqual(parA, parB, fields) {
        const A = this.concatFields(parA, fields);
        const B = this.concatFields(parB, fields);
        if (A > B) {
            return 1;
        }
        if (B > A) {
            return -1;
        }
        ;
        return 0;
    }
};
ArrayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ArrayService);

/*

   --- ALGUNAS PRUEBAS ---
const contarArray = this.arrayService.groupAndCount(todasLasDistancias, ['embarcacion','distancia']);
    const sumarArray = this.arrayService.groupAndSum(todasLasDistancias, ['embarcacion','distancia'], 'distancia');
*/ 


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map