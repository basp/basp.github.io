(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+51p":
/*!**************************!*\
  !*** ./src/app/state.ts ***!
  \**************************/
/*! exports provided: State */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "State", function() { return State; });
/* harmony import */ var break_infinity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! break_infinity.js */ "X9ex");
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generator */ "7fgj");


class State {
    constructor() {
        this.energy = new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](10);
        this.output = new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](0);
        this.interval = new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1000);
        this.level = 0;
        this.generators = [
            new _generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](0, 'Generator', new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e1), new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e3), 0),
            new _generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](1, 'Booster', new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e2), new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e4), 1),
            new _generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](2, 'Hyper Booster', new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e3), new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e5), 1),
            new _generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](3, 'Enhanced Sensors', new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e5), new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e7), 2),
            new _generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](4, '6DoF Stabilizers', new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e8), new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e9), 3),
            new _generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](5, 'Deep Learning', new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e13), new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e12), 5),
            new _generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](6, 'Nano Servos', new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e19), new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e14), 8),
            new _generator__WEBPACK_IMPORTED_MODULE_1__["Generator"](7, 'Gravity Shift', new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e25), new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e18), 13),
        ];
    }
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\basp\legendary-fiesta\src\main.ts */"zUnb");


/***/ }),

/***/ "1S5r":
/*!*******************************!*\
  !*** ./src/app/formatting.ts ***!
  \*******************************/
/*! exports provided: hasKnownSuffix, shorten, formatBignumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasKnownSuffix", function() { return hasKnownSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shorten", function() { return shorten; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatBignumber", function() { return formatBignumber; });
/* harmony import */ var break_infinity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! break_infinity.js */ "X9ex");

// https://officespace.zendesk.com/hc/en-us/articles/115000593531-Scientific-Notation-Large-Numbers-Guide
const suffixes = [
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e3),
        name: 'kilo',
        unit: 'K'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e6),
        name: 'million',
        unit: 'M'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e9),
        name: 'billion',
        unit: 'B'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e12),
        name: 'trillion',
        unit: 'T'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e15),
        name: 'quadrillion',
        unit: 'Qa'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e18),
        name: 'quintillion',
        unit: 'Qi'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e21),
        name: 'sextillion',
        unit: 'Sx'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e24),
        name: 'septillion',
        unit: 'Sp'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e27),
        name: 'octillion',
        unit: 'Oc'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e30),
        name: 'nonillion',
        unit: 'No'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e33),
        name: 'decillion',
        unit: 'Dc'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e36),
        name: 'undecillion',
        unit: 'Ud'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e39),
        name: 'duodecillion',
        unit: 'Dd'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e42),
        name: 'tredecillion',
        unit: 'Td'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e45),
        name: 'quattuordecillion',
        unit: 'Qad'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e48),
        name: 'quindecillion',
        unit: 'Qid'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e51),
        name: 'sexdecillion',
        unit: 'Sxd'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e54),
        name: 'septendecillion',
        unit: 'Spd'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e57),
        name: 'octodecillion',
        unit: 'Ocd'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e60),
        name: 'novemdecillion',
        unit: 'Nod'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e63),
        name: 'vigintillion',
        unit: 'Vg'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1e66),
        name: 'unvigintillion',
        unit: 'Uvg'
    },
];
const lastSuffixSize = suffixes[suffixes.length - 1].size;
function hasKnownSuffix(value) {
    return value.lessThanOrEqualTo(lastSuffixSize);
}
function shorten(value) {
    let suffix;
    for (let s of suffixes) {
        if (value.greaterThanOrEqualTo(s.size)) {
            suffix = s;
        }
    }
    let val = value.div(suffix.size);
    return [val, suffix.name, suffix.unit];
}
function formatBignumber(value) {
    let mantissa = value.mantissa;
    let exponent = value.exponent;
    if (mantissa >= 10) {
        exponent += 1;
        mantissa /= 10;
    }
    return `${mantissa.toFixed(1)}e${exponent}`;
}


/***/ }),

/***/ "2vsq":
/*!**************************************!*\
  !*** ./src/app/format-score.pipe.ts ***!
  \**************************************/
/*! exports provided: FormatScorePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatScorePipe", function() { return FormatScorePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatting */ "1S5r");



class FormatScorePipe {
    transform(value) {
        if (value.lessThan(1e4)) {
            return value.toFixed(0);
        }
        if (!Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["hasKnownSuffix"])(value)) {
            return Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["formatBignumber"])(value);
        }
        let [val, name, suffix] = Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["shorten"])(value);
        return `${val.toFixed(1)} ${suffix} (${name})`;
    }
}
FormatScorePipe.ɵfac = function FormatScorePipe_Factory(t) { return new (t || FormatScorePipe)(); };
FormatScorePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatScore", type: FormatScorePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatScorePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'formatScore' }]
    }], null, null); })();


/***/ }),

/***/ "4BTn":
/*!*************************************!*\
  !*** ./src/app/format-cost.pipe.ts ***!
  \*************************************/
/*! exports provided: FormatCostPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatCostPipe", function() { return FormatCostPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatting */ "1S5r");



class FormatCostPipe {
    transform(value) {
        if (value.lessThan(1e4)) {
            return value.toString();
        }
        if (!Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["hasKnownSuffix"])(value)) {
            return `${value.mantissa}e${value.exponent}`;
        }
        let [val, _, suffix] = Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["shorten"])(value);
        return `${val.toFixed(0)} ${suffix}`;
    }
}
FormatCostPipe.ɵfac = function FormatCostPipe_Factory(t) { return new (t || FormatCostPipe)(); };
FormatCostPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatCost", type: FormatCostPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatCostPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'formatCost' }]
    }], null, null); })();


/***/ }),

/***/ "7fgj":
/*!******************************!*\
  !*** ./src/app/generator.ts ***!
  \******************************/
/*! exports provided: Generator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Generator", function() { return Generator; });
/* harmony import */ var break_infinity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! break_infinity.js */ "X9ex");

class Generator {
    constructor(tier, name, baseCost, costMultiplier, requiredLevel) {
        this.tier = tier;
        this.name = name;
        this.baseCost = baseCost;
        this.costMultiplier = costMultiplier;
        this.requiredLevel = requiredLevel;
        this.number = new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](0);
        this.numberBought = 0;
        this.level = 0;
        this.baseProduction = new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](1);
    }
    buy(state) {
        state.energy = state.energy.sub(this.cost());
        this.number = this.number.add(1);
        this.numberBought += 1;
    }
    buyTo10(state) {
        let num = 10 - (this.numberBought % 10);
        for (let i = 0; i < num; i++) {
            this.buy(state);
        }
    }
    power() {
        return Math.floor(this.numberBought / 10);
    }
    purchased() {
        return Math.floor(this.numberBought % 10);
    }
    cost() {
        return this.baseCost.mul(this.costMultiplier.pow(this.power()));
    }
    costTo10() {
        let num = 10 - (this.numberBought % 10);
        return this.cost().mul(num);
    }
    production() {
        let base = this.baseProduction.plus(this.level * 0.5);
        return base.mul(new break_infinity_js__WEBPACK_IMPORTED_MODULE_0__["default"](2).pow(this.power()));
    }
    isBuyEnabled(state) {
        return state.energy.greaterThanOrEqualTo(this.cost());
    }
    isBuyTo10Enabled(state) {
        return state.energy.greaterThanOrEqualTo(this.costTo10());
    }
    isVisible(state) {
        if (this.tier < 1) {
            return true;
        }
        return state.generators[this.tier - 1].number.greaterThan(0) &&
            this.requiredLevel <= state.level;
    }
}


/***/ }),

/***/ "7kv/":
/*!******************************************!*\
  !*** ./src/app/score/score.component.ts ***!
  \******************************************/
/*! exports provided: ScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreComponent", function() { return ScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var break_infinity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! break_infinity.js */ "X9ex");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.service */ "Ebwu");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _format_score_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../format-score.pipe */ "2vsq");
/* harmony import */ var _format_number_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../format-number.pipe */ "yvgr");
/* harmony import */ var _format_cost_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../format-cost.pipe */ "4BTn");









function ScoreComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScoreComponent_div_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.evolve(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Evolve ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ScoreComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Next evolutionary algorithm at ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "formatCost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " joule.\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r1.target()));
} }
const baseTarget = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e4);
const targetMultiplier = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e6);
class ScoreComponent {
    constructor(stateService, toastr) {
        this.stateService = stateService;
        this.toastr = toastr;
    }
    ngOnInit() {
        this.state = this.stateService.getState();
    }
    target() {
        return baseTarget.mul(targetMultiplier.pow(this.state.level));
    }
    progress() {
        if (this.state.output.lessThan(1)) {
            return 0;
        }
        let e = this.state.energy.plus(1).log10();
        let t = this.target().plus(1).log10();
        return Math.min(e / t * 100, 100);
    }
    evolve() {
        this.stateService.evolve();
        for (let g of this.state.generators) {
            if (g.requiredLevel === this.state.level) {
                this.toastr.info(`${g.name} unlocked!`, 'New generator', {
                    disableTimeOut: true,
                    closeButton: false
                });
            }
        }
    }
}
ScoreComponent.ɵfac = function ScoreComponent_Factory(t) { return new (t || ScoreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
ScoreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ScoreComponent, selectors: [["app-score"]], decls: 16, vars: 12, consts: [[1, "text-center"], [1, "progress", "mb-2", "mt-2", 2, "height", "20px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated"], ["class", "mb-2", 4, "ngIf"], [1, "mb-2"], ["type", "button", 1, "btn", "btn-success", "btn-block", 3, "click"]], template: function ScoreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "formatScore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Generating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "formatNumber");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " joule per second.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ScoreComponent_div_14_Template, 3, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ScoreComponent_div_15_Template, 6, 3, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 8, ctx.state.energy));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 10, ctx.state.output));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.progress().toFixed(0) + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-valuenow", ctx.progress());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.progress().toFixed(1), "% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress() >= 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.progress() < 100);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], pipes: [_format_score_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatScorePipe"], _format_number_pipe__WEBPACK_IMPORTED_MODULE_6__["FormatNumberPipe"], _format_cost_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatCostPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3JlL3Njb3JlLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScoreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-score',
                templateUrl: './score.component.html',
                styleUrls: ['./score.component.css']
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "8cSL":
/*!**********************************************!*\
  !*** ./src/app/options/options.component.ts ***!
  \**********************************************/
/*! exports provided: OptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsComponent", function() { return OptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "Lw2Y");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state.service */ "Ebwu");




class OptionsComponent {
    constructor(stateService) {
        this.stateService = stateService;
    }
    ngOnInit() {
        this.state = this.stateService.getState();
    }
    reset() {
        this.stateService.reset();
        localStorage.removeItem(_common__WEBPACK_IMPORTED_MODULE_1__["SAVE_FILE"]);
    }
}
OptionsComponent.ɵfac = function OptionsComponent_Factory(t) { return new (t || OptionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"])); };
OptionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptionsComponent, selectors: [["app-options"]], decls: 12, vars: 0, consts: [[1, "row"], [1, "col-3"], ["type", "button", 1, "btn", "btn-primary", "btn-block", "btn-danger", 3, "click"]], template: function OptionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nothing is eternal. Eternal is darkness. Darkness is bliss.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Reset will ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "totally wipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " all your progress.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsComponent_Template_button_click_10_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-options',
                templateUrl: './options.component.html',
                styleUrls: ['./options.component.css']
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_2__["StateService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Ebwu":
/*!**********************************!*\
  !*** ./src/app/state.service.ts ***!
  \**********************************/
/*! exports provided: StateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateService", function() { return StateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var break_infinity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! break_infinity.js */ "X9ex");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "+51p");




const def = new _state__WEBPACK_IMPORTED_MODULE_2__["State"]();
class StateService {
    constructor() {
        this.state = new _state__WEBPACK_IMPORTED_MODULE_2__["State"]();
    }
    getState() {
        return this.state;
    }
    evolve() {
        this.state.energy = def.energy;
        this.state.interval = def.interval;
        this.state.output = def.output;
        for (let g of this.state.generators) {
            if (g.requiredLevel > this.state.level) {
                continue;
            }
            g.number = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](0);
            g.numberBought = 0;
            g.baseProduction = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1);
            g.level += 1;
        }
        this.state.level += 1;
    }
    reset() {
        this.state.energy = def.energy;
        this.state.interval = def.interval;
        this.state.level = def.level;
        this.state.output = def.output;
        for (let g of this.state.generators) {
            g.number = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](0);
            g.numberBought = 0;
            g.level = 0;
            g.baseProduction = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1);
        }
    }
}
StateService.ɵfac = function StateService_Factory(t) { return new (t || StateService)(); };
StateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateService, factory: StateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Lw2Y":
/*!***************************!*\
  !*** ./src/app/common.ts ***!
  \***************************/
/*! exports provided: SAVE_FILE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_FILE", function() { return SAVE_FILE; });
const SAVE_FILE = 'sandbox.save';


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "Lw2Y");
/* harmony import */ var break_infinity_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! break_infinity.js */ "X9ex");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state.service */ "Ebwu");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score/score.component */ "7kv/");
/* harmony import */ var _generators_generators_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./generators/generators.component */ "gA45");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./achievements/achievements.component */ "vZP+");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./options/options.component */ "8cSL");










// In order to increase game speed without increasing
// the actual framerate we'll use `refspeed` and `tickspeed`.
// At the start of the game `refspeed` and `tickspeed` should
// be equal. This will yield a production multiplier of 1.
// During the game, `tickspeed` might become lower and thus the 
// ratio of `refspeed` divided by `tickspeed` will be greater
// than one. If production is then multiplied with this value
// we will get a "virtual" time boost.
const refspeed = 1000;
const tickspeed = 1000;
// This is the actual "framerate" (i.e the game will update `rate` 
// times per second).
const rate = 10;
// This is the expect duration of each "frame" in milliseconds if
// the game would run on an infinitely fast CPU with 100% accurate
// browser scheduling.
const interval = 1000 / rate;
class AppComponent {
    constructor(stateService, toastr) {
        this.stateService = stateService;
        this.toastr = toastr;
        this.title = 'Legendary Fiesta';
    }
    ngOnInit() {
        // State is now shared between multiple components
        // so we'll obtain it via a state service.
        this.state = this.stateService.getState();
        // We probably don't want to do this once
        // we enable offline progression.
        this.state.lastUpdate = performance.now();
        // Try to load any save game we might have.
        // This will do nothing if there's no stored
        // save file available (i.e. a completely new user).
        this.load();
        // Initialize the main gameloop timer.
        setInterval(() => {
            const thisUpdate = performance.now();
            // The value of `dt` is the amount of time that
            // has passed since we last updated the game.
            const dt = thisUpdate - this.state.lastUpdate;
            this.update(dt);
            // Make sure we remember the last time that
            // we updated for the next frame update.
            this.state.lastUpdate = thisUpdate;
        }, interval);
        // We'll save every 30 seconds which seems reasonable.
        const saveInterval = 30 * 1000;
        setInterval(() => {
            this.save();
            this.toastr.info('Game saved.', null, {
                closeButton: false,
            });
        }, saveInterval);
    }
    // Returns the head of our generator list. This is the
    // generator that actually produces energy.
    head() {
        return this.state.generators[0];
    }
    // Return all generators (in order) except the main
    // generator (which is returned by `head`). All generators
    // except the main generator produce other generators
    // one tier below them.
    tail() {
        return this.state.generators.slice(1);
    }
    save() {
        localStorage.setItem(_common__WEBPACK_IMPORTED_MODULE_1__["SAVE_FILE"], JSON.stringify(this.state));
    }
    load() {
        let json = localStorage.getItem(_common__WEBPACK_IMPORTED_MODULE_1__["SAVE_FILE"]);
        // Make sure we actually have a save file, otherwise just
        // return early and do nothing.
        if (!json) {
            return;
        }
        // The rest of this code just copies the values from our
        // save file into the actual state. This code is quite
        // error prone and may lead to really weird stuff if you
        // forget anything.
        let save = JSON.parse(json);
        this.state.energy = new break_infinity_js__WEBPACK_IMPORTED_MODULE_2__["default"](save.energy);
        this.state.lastUpdate = save.lastUpdate;
        this.state.level = save.level;
        for (let i = 0; i < this.state.generators.length; i++) {
            this.state.generators[i].baseProduction = new break_infinity_js__WEBPACK_IMPORTED_MODULE_2__["default"](save.generators[i].baseProduction);
            this.state.generators[i].number = new break_infinity_js__WEBPACK_IMPORTED_MODULE_2__["default"](save.generators[i].number);
            this.state.generators[i].numberBought = save.generators[i].numberBought;
            this.state.generators[i].level = save.generators[i].level;
        }
    }
    update(dt) {
        // The value of `dt` should be around 1000 / rate. 
        // With `rate` of 10 this boils down to 100 millisecods.
        // It might be a bit shorter or longer depending on browser timing.
        // First we need to find out if we under- or overshot our
        // intended interval. We expect this method to be called
        // every `interval` of time (which is a number in milliseconds)
        // so we need to see how much of the interval we have (especially
        // when we are lagging).
        // If we are running exactly on schedule then `r` should be 1.0.
        // If we are lagging then `r` will be greater than 1.0.
        // If we are running too fast (usually only happens due to tiny
        // browser scheduling variations) then `r` will be less than 1.0.
        let r = dt / interval;
        // However, if `r` is less than 1.0 we'll clamp it to 1 so we dont
        // get weird number behavior going between growth and decline.
        // If we didn't do this your energy gain of 3.2 might suddenly become
        // 3.17 on the next frame and that is really annoying.
        r = r < 1.0 ? 1.0 : r;
        // Now we just need to compensate this with either a higher
        // or lower tickspeed. The `tickspeed` value starts of at 1000
        // but can be dynamically adjusted by whatever the game requires. 
        // The `refspeed` value never changes but it should be equal 
        // to the `tickspeed` at the beginning of the game.
        // First we convert our scaled unit value `r` into "speed" domain.
        // If we are running exactly on time then `r` should be very close
        // to 1.0 and to normalize it we want it to be around a `refspeed` 
        // instead.
        let s = r * refspeed;
        // Now we scale `s` with our actual tickspeed. If the tickspeed
        // is lower than a 1000 then time should be progressing faster
        // scorewise (even though we're still ticking along the same `interval`).
        // If tickspeed is 1000 and we are running on time then this should
        // return back into a scale unit of around 1.0.
        s = s / tickspeed;
        // Now we can finally scale our production with time and tickspeed.
        // The way we need to deal with generators depends on whether it 
        // produces energy or other generators. All generators except the first
        // one (`head`) produce generators one tier below them. The `head`
        // generators produce the actual energy.
        let first = this.head();
        // The value of `grossEnergy` is what we would've produced if the
        // game was running perfectly on time.
        let grossEnergy = first.number.mul(first.production());
        // The value of `nettEnergy` is compensated for the slight variations
        // of actual frame duration (`dt`).
        let nettEnergy = grossEnergy.mul(s);
        this.state.energy = this.state.energy.add(nettEnergy);
        // We'll use `grossEnergy` to display current output because it's a
        // much more stable number than `nettEnergy`. So even though we're
        // technically lying to the user this leads to a much more pleasant
        // experience.
        this.state.output = grossEnergy.mul(rate).floor();
        // The rest of the generators can all be handled by just looping
        // through them and adding their production to the number of 
        // generators one tier below (i.e. a hyper booster produces boosters
        // and a booster produces generators).
        let rest = this.tail();
        for (let g of rest) {
            let x = g.number.mul(g.production()).mul(s);
            let downstream = this.state.generators[g.tier - 1];
            downstream.number = downstream.number.add(x);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 17, vars: 0, consts: [[1, "container"], ["id", "nav-tab", "role", "tablist", 1, "nav", "nav-pills", "mb-2"], ["id", "nav-generators-tab", "data-toggle", "tab", "href", "#nav-generators", "role", "tab", "aria-controls", "nav-generators", "aria-selected", "true", 1, "nav-item", "nav-link", "active"], ["id", "nav-achievements-tab", "data-toggle", "tab", "href", "#nav-achievements", "role", "tab", "aria-controls", "nav-achievements", "aria-selected", "false", 1, "nav-item", "nav-link"], ["id", "nav-options-tab", "data-toggle", "tab", "href", "#nav-options", "role", "tab", "aria-controls", "nav-options", "aria-selected", "false", 1, "nav-item", "nav-link"], ["id", "nav-tabContent", 1, "tab-content"], ["id", "nav-generators", "role", "tabpanel", "aria-labelledby", "nav-generators-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "nav-achievements", "role", "tabpanel", "aria-labelledby", "nav-achievements-tab", 1, "tab-pane", "fade"], ["id", "nav-options", "role", "tabpanel", "aria-labelledby", "nav-options-tab", 1, "tab-pane", "fade"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-score");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Generators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "app-generators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "app-achievements");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_score_score_component__WEBPACK_IMPORTED_MODULE_5__["ScoreComponent"], _generators_generators_component__WEBPACK_IMPORTED_MODULE_6__["GeneratorsComponent"], _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_7__["AchievementsComponent"], _options_options_component__WEBPACK_IMPORTED_MODULE_8__["OptionsComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_3__["StateService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _generators_generators_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generators/generators.component */ "gA45");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./options/options.component */ "8cSL");
/* harmony import */ var _score_score_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./score/score.component */ "7kv/");
/* harmony import */ var _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./achievements/achievements.component */ "vZP+");
/* harmony import */ var _format_cost_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./format-cost.pipe */ "4BTn");
/* harmony import */ var _format_number_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./format-number.pipe */ "yvgr");
/* harmony import */ var _format_production_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./format-production.pipe */ "ip1Z");
/* harmony import */ var _format_score_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./format-score.pipe */ "2vsq");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "5eHb");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _generators_generators_component__WEBPACK_IMPORTED_MODULE_3__["GeneratorsComponent"],
        _options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"],
        _score_score_component__WEBPACK_IMPORTED_MODULE_5__["ScoreComponent"],
        _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_6__["AchievementsComponent"],
        _format_cost_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatCostPipe"],
        _format_number_pipe__WEBPACK_IMPORTED_MODULE_8__["FormatNumberPipe"],
        _format_production_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatProductionPipe"],
        _format_score_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatScorePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _generators_generators_component__WEBPACK_IMPORTED_MODULE_3__["GeneratorsComponent"],
                    _options_options_component__WEBPACK_IMPORTED_MODULE_4__["OptionsComponent"],
                    _score_score_component__WEBPACK_IMPORTED_MODULE_5__["ScoreComponent"],
                    _achievements_achievements_component__WEBPACK_IMPORTED_MODULE_6__["AchievementsComponent"],
                    _format_cost_pipe__WEBPACK_IMPORTED_MODULE_7__["FormatCostPipe"],
                    _format_number_pipe__WEBPACK_IMPORTED_MODULE_8__["FormatNumberPipe"],
                    _format_production_pipe__WEBPACK_IMPORTED_MODULE_9__["FormatProductionPipe"],
                    _format_score_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatScorePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gA45":
/*!****************************************************!*\
  !*** ./src/app/generators/generators.component.ts ***!
  \****************************************************/
/*! exports provided: GeneratorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorsComponent", function() { return GeneratorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state.service */ "Ebwu");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _format_number_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../format-number.pipe */ "yvgr");
/* harmony import */ var _format_production_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../format-production.pipe */ "ip1Z");
/* harmony import */ var _format_cost_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../format-cost.pipe */ "4BTn");







function GeneratorsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "formatNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "formatProduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneratorsComponent_div_0_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const g_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return g_r1.buy(ctx_r2.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "formatCost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneratorsComponent_div_0_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const g_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return g_r1.buyTo10(ctx_r4.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "formatCost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const g_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", g_r1.name, " (", g_r1.level, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 9, g_r1.number), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" x", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 11, g_r1.production()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !g_r1.isBuyEnabled(ctx_r0.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](g_r1.purchased());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 13, g_r1.cost()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !g_r1.isBuyTo10Enabled(ctx_r0.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 15, g_r1.costTo10()), " ");
} }
class GeneratorsComponent {
    constructor(stateService) {
        this.stateService = stateService;
    }
    ngOnInit() {
        this.state = this.stateService.getState();
    }
    generators() {
        let state = this.state;
        return this.state.generators.filter(function (x) {
            return x.isVisible(state);
        });
    }
    max() {
        for (let g of this.generators()) {
            if (this.state.energy.greaterThanOrEqualTo(g.costTo10())) {
                g.buyTo10(this.state);
            }
        }
    }
    isMaxEnabled() {
        let state = this.state;
        let gens = this.generators();
        return gens.some(function (x) {
            return x.isBuyTo10Enabled(state);
        });
    }
}
GeneratorsComponent.ɵfac = function GeneratorsComponent_Factory(t) { return new (t || GeneratorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"])); };
GeneratorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GeneratorsComponent, selectors: [["app-generators"]], decls: 9, vars: 2, consts: [["class", "row align-items-center", 4, "ngFor", "ngForOf"], [1, "row", "mb-4"], [1, "col-sm", "pt-1"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "row", "align-items-center"], [1, "col-sm", "pt-1", 2, "font-family", "'Secular One', sans-serif", "font-size", "1.1em"], [1, "col-sm", "pt-1", "text-right"], ["type", "button", 1, "btn", "btn-secondary", "btn-block", 3, "disabled", "click"], [1, "badge", "badge-light"]], template: function GeneratorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GeneratorsComponent_div_0_Template, 19, 17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneratorsComponent_Template_button_click_7_listener() { return ctx.max(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Max ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.generators());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isMaxEnabled());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_format_number_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatNumberPipe"], _format_production_pipe__WEBPACK_IMPORTED_MODULE_4__["FormatProductionPipe"], _format_cost_pipe__WEBPACK_IMPORTED_MODULE_5__["FormatCostPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRvcnMvZ2VuZXJhdG9ycy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneratorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-generators',
                templateUrl: './generators.component.html',
                styleUrls: ['./generators.component.css']
            }]
    }], function () { return [{ type: _state_service__WEBPACK_IMPORTED_MODULE_1__["StateService"] }]; }, null); })();


/***/ }),

/***/ "ip1Z":
/*!*******************************************!*\
  !*** ./src/app/format-production.pipe.ts ***!
  \*******************************************/
/*! exports provided: FormatProductionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatProductionPipe", function() { return FormatProductionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatting */ "1S5r");



class FormatProductionPipe {
    transform(value) {
        if (value.lessThan(1e4)) {
            return value.toFixed(1);
        }
        if (!Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["hasKnownSuffix"])(value)) {
            return Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["formatBignumber"])(value);
        }
        let [val, _, suffix] = Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["shorten"])(value);
        return `${val.toFixed(1)} ${suffix}`;
    }
}
FormatProductionPipe.ɵfac = function FormatProductionPipe_Factory(t) { return new (t || FormatProductionPipe)(); };
FormatProductionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatProduction", type: FormatProductionPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatProductionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'formatProduction' }]
    }], null, null); })();


/***/ }),

/***/ "vZP+":
/*!********************************************************!*\
  !*** ./src/app/achievements/achievements.component.ts ***!
  \********************************************************/
/*! exports provided: AchievementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AchievementsComponent", function() { return AchievementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const ACHIEVEMENTS = [];
class AchievementsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AchievementsComponent.ɵfac = function AchievementsComponent_Factory(t) { return new (t || AchievementsComponent)(); };
AchievementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AchievementsComponent, selectors: [["app-achievements"]], decls: 2, vars: 0, template: function AchievementsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Coming soon!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjaGlldmVtZW50cy9hY2hpZXZlbWVudHMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AchievementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-achievements',
                templateUrl: './achievements.component.html',
                styleUrls: ['./achievements.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "yvgr":
/*!***************************************!*\
  !*** ./src/app/format-number.pipe.ts ***!
  \***************************************/
/*! exports provided: FormatNumberPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatNumberPipe", function() { return FormatNumberPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _formatting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatting */ "1S5r");



class FormatNumberPipe {
    transform(value) {
        if (value.lessThan(1e4)) {
            return value.toFixed(0);
        }
        if (!Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["hasKnownSuffix"])(value)) {
            return Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["formatBignumber"])(value);
        }
        let [val, _, suffix] = Object(_formatting__WEBPACK_IMPORTED_MODULE_1__["shorten"])(value);
        return `${val.toFixed(1)} ${suffix}`;
    }
}
FormatNumberPipe.ɵfac = function FormatNumberPipe_Factory(t) { return new (t || FormatNumberPipe)(); };
FormatNumberPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatNumber", type: FormatNumberPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatNumberPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'formatNumber' }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map