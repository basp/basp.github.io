(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\basp\sandbox\src\main.ts */"zUnb");


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
/* harmony import */ var break_infinity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! break_infinity.js */ "X9ex");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pretty-number-pipe */ "gLLH");





function AppComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Current warp factor is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "formatNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " time units.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r0.warp()));
} }
function AppComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "formatNumber");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "formatProduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_14_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const dim_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return dim_r2.buy(ctx_r3.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "formatCost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_14_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const dim_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return dim_r2.buyTo10(ctx_r5.state); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "formatCost");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dim_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dim_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 8, dim_r2.number), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" x", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 10, dim_r2.production()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !dim_r2.isBuyEnabled(ctx_r1.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](dim_r2.purchased());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 12, dim_r2.cost()), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !dim_r2.isBuyTo10Enabled(ctx_r1.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 14, dim_r2.costTo10()), " ");
} }
class Dimension {
    constructor(tier, name, baseCost, costMultiplier, baseProduction) {
        this.tier = tier;
        this.name = name;
        this.baseCost = baseCost;
        this.costMultiplier = costMultiplier;
        this.baseProduction = baseProduction;
        this.number = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](0);
        this.numberBought = 0;
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
        return this.baseProduction.mul(new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](2).pow(this.power()));
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
        return state.dimensions[this.tier - 1].number.greaterThan(0);
    }
}
class State {
    constructor() {
        this.energy = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](10);
        this.output = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](0);
        this.interval = new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1000);
        this.dimensions = [
            new Dimension(0, 'Generator', new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e1), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e3), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1)),
            new Dimension(1, 'Booster', new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e2), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e4), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1)),
            new Dimension(2, 'Hyper Booster', new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e3), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e5), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1)),
            new Dimension(3, 'Enhanced Sensors', new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e5), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e7), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1)),
            new Dimension(4, '6DoF Stabilizers', new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e8), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e9), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1)),
            new Dimension(5, 'Deep Learning', new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e13), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e12), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1)),
            new Dimension(6, 'Nano Servos', new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e19), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e14), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1)),
            new Dimension(7, 'Gravity Shift', new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e25), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e18), new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1)),
        ];
    }
}
const refspeed = 1000;
const tickspeed = 1000;
const rate = 10;
const interval = 1000 / rate;
class AppComponent {
    constructor() {
        this.title = 'Sandbox';
        this.state = new State();
        this.state.lastUpdate = performance.now();
        setInterval(() => {
            const thisUpdate = performance.now();
            this.update(thisUpdate - this.state.lastUpdate);
            this.state.lastUpdate = thisUpdate;
        }, interval);
    }
    core() {
        return this.state.dimensions[0];
    }
    meta() {
        return this.state.dimensions.slice(1);
    }
    dimensions() {
        let state = this.state;
        return this.state.dimensions.filter(function (x) {
            return x.isVisible(state);
        });
    }
    warp() {
        return refspeed / tickspeed;
    }
    max() {
        for (let dim of this.dimensions()) {
            if (this.state.energy.greaterThanOrEqualTo(dim.costTo10())) {
                dim.buyTo10(this.state);
            }
        }
    }
    isMaxEnabled() {
        let state = this.state;
        let dims = this.dimensions();
        return dims.some(function (x) {
            return x.isBuyTo10Enabled(state);
        });
    }
    update(dt) {
        // The value of `dt` should be around 1000 / rate. 
        // With rate of 20 this boils down to 50 millisecods.
        // However, it might be a bit shorter or longer.
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
        r = r < 1.0 ? 1.0 : r;
        // Now we just need to compensate this with either a higher
        // or lower tickspeed. The `tickspeed` value starts of at 1000
        // but can be dynamically adjusted. The `refspeed` value never
        // changes but it should probably be equal to the `tickspeed`
        // starting value for normal purposes.
        // First we convert our scaled unit value `r` into "speed" domain.
        // If we are running exactly on time then `r` should be very close
        // to 1.0 and to normalize it we want it to be around a 1000.
        let s = r * refspeed;
        // Now we scale `s` with our actual tickspeed. If the tickspeed
        // is lower than a 1000 then time should be progressing faster
        // scorewise even though we're not actually decreasing `interval`.
        // If tickspeed is 1000 and we are running on time then this should
        // return back into a scale unit of around 1.0.
        s = s / tickspeed;
        // Now we can finally scale our production with time and tickspeed.
        let gen = this.core();
        let grossEnergy = gen.number.mul(gen.production());
        this.state.energy = this.state.energy.add(grossEnergy);
        this.state.output = grossEnergy.mul(rate).floor();
        let gens = this.meta();
        for (let g of gens) {
            let x = g.number.mul(g.production()).mul(s);
            let downstream = this.state.dimensions[g.tier - 1];
            downstream.number = downstream.number.add(x);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 23, vars: 9, consts: [[1, "container"], [1, "text-center"], ["class", "text-center", 4, "ngIf"], ["class", "row align-items-center", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-sm", "pt-1"], ["type", "button", 1, "btn", "btn-primary", "btn-block", 3, "disabled", "click"], [1, "row", "align-items-center"], [1, "col-sm", "pt-1", 2, "font-family", "'Secular One', sans-serif", "font-size", "1.1em"], [1, "col-sm", "pt-1", "text-right"], ["type", "button", 1, "btn", "btn-secondary", "btn-block", 3, "disabled", "click"], [1, "badge", "badge-light"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "formatScore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Generating ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "formatOutput");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " energy per second.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AppComponent_p_12_Template, 6, 3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AppComponent_div_14_Template, 19, 16, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_21_listener() { return ctx.max(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Max ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx.state.energy));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 7, ctx.state.output));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.warp() > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dimensions());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.isMaxEnabled());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], pipes: [_pretty_number_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatScorePipe"], _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatOutputPipe"], _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatNumberPipe"], _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatProductionPipe"], _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatCostPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pretty-number-pipe */ "gLLH");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatScorePipe"],
        _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatCostPipe"],
        _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatNumberPipe"],
        _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatProductionPipe"],
        _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatOutputPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatScorePipe"],
                    _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatCostPipe"],
                    _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatNumberPipe"],
                    _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatProductionPipe"],
                    _pretty_number_pipe__WEBPACK_IMPORTED_MODULE_2__["FormatOutputPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "gLLH":
/*!***************************************!*\
  !*** ./src/app/pretty-number-pipe.ts ***!
  \***************************************/
/*! exports provided: FormatScorePipe, FormatOutputPipe, FormatNumberPipe, FormatProductionPipe, FormatCostPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatScorePipe", function() { return FormatScorePipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatOutputPipe", function() { return FormatOutputPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatNumberPipe", function() { return FormatNumberPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatProductionPipe", function() { return FormatProductionPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatCostPipe", function() { return FormatCostPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var break_infinity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! break_infinity.js */ "X9ex");



const suffixes = [
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e3),
        unit: 'K'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e6),
        unit: 'M'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e9),
        unit: 'B'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e12),
        unit: 'T'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e15),
        unit: 'Qa'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e18),
        unit: 'Qt'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e21),
        unit: 'Sx'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e24),
        unit: 'Sp'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e27),
        unit: 'Oc'
    },
    {
        size: new break_infinity_js__WEBPACK_IMPORTED_MODULE_1__["default"](1e30),
        unit: 'No'
    }
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
    return [val, suffix.unit];
}
class FormatScorePipe {
    transform(value) {
        if (value.lessThan(1e4)) {
            return value.toFixed(0);
        }
        if (!hasKnownSuffix(value)) {
            return `${value.mantissa.toFixed(1)}e${value.exponent}`;
        }
        let [val, suffix] = shorten(value);
        return `${val.toFixed(1)} ${suffix}`;
    }
}
FormatScorePipe.ɵfac = function FormatScorePipe_Factory(t) { return new (t || FormatScorePipe)(); };
FormatScorePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatScore", type: FormatScorePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatScorePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'formatScore' }]
    }], null, null); })();
class FormatOutputPipe {
    transform(value) {
        if (value.lessThan(1e4)) {
            return value.toFixed(0);
        }
        if (!hasKnownSuffix(value)) {
            return `${value.mantissa.toFixed(1)}e${value.exponent}`;
        }
        let [val, suffix] = shorten(value);
        return `${val.toFixed(1)} ${suffix}`;
    }
}
FormatOutputPipe.ɵfac = function FormatOutputPipe_Factory(t) { return new (t || FormatOutputPipe)(); };
FormatOutputPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatOutput", type: FormatOutputPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatOutputPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'formatOutput' }]
    }], null, null); })();
class FormatNumberPipe {
    transform(value) {
        if (value.lessThan(1e4)) {
            return value.toFixed(0);
        }
        if (!hasKnownSuffix(value)) {
            return `${value.round()}e${value.exponent}`;
        }
        let [val, suffix] = shorten(value);
        return `${val.toFixed(1)} ${suffix}`;
    }
}
FormatNumberPipe.ɵfac = function FormatNumberPipe_Factory(t) { return new (t || FormatNumberPipe)(); };
FormatNumberPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatNumber", type: FormatNumberPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatNumberPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'formatNumber' }]
    }], null, null); })();
class FormatProductionPipe {
    transform(value) {
        if (value.lessThan(1e4)) {
            return value.toFixed(1);
        }
        if (!hasKnownSuffix(value)) {
            return `${value.mantissa}e${value.exponent}`;
        }
        let [val, suffix] = shorten(value);
        return `${val.toFixed(1)} ${suffix}`;
    }
}
FormatProductionPipe.ɵfac = function FormatProductionPipe_Factory(t) { return new (t || FormatProductionPipe)(); };
FormatProductionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatProduction", type: FormatProductionPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatProductionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'formatProduction' }]
    }], null, null); })();
class FormatCostPipe {
    transform(value) {
        if (value.lessThan(1e4)) {
            return value.toString();
        }
        if (!hasKnownSuffix(value)) {
            return `${value.mantissa}e${value.exponent}`;
        }
        let [val, suffix] = shorten(value);
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