(self["webpackChunkangular"] = self["webpackChunkangular"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _home_home_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.container */ 2654);
/* harmony import */ var _not_found_page_not_found_page_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found-page/not-found-page.container */ 1330);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path: 'home',
        component: _home_home_container__WEBPACK_IMPORTED_MODULE_0__.HomeContainer,
    },
    {
        path: 'navbar',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_Navbar_navbar_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../Navbar/navbar.module */ 3755)).then((m) => m.NavbarModule),
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_Auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../Auth/auth.module */ 9816)).then((m) => m.AuthModule),
    },
    {
        path: 'content',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_content_content_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../content/content.module */ 2299)).then((m) => m.ContentModule),
    },
    {
        path: 'hide-nav',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_navbar-hide_navbar-hide_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../navbar-hide/navbar-hide.module */ 5040)).then((m) => m.NavbarHideModule),
    },
    {
        path: 'money',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_Money_money_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../Money/money.module */ 37)).then((m) => m.MoneyModule),
    },
    {
        path: '**',
        component: _not_found_page_not_found_page_container__WEBPACK_IMPORTED_MODULE_1__.NotFoundPageContainer,
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'angular';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout */ 8662);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../material.module */ 370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _not_found_page_not_found_page_container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found-page/not-found-page.container */ 1330);
/* harmony import */ var _home_home_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.container */ 2654);









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _not_found_page_not_found_page_container__WEBPACK_IMPORTED_MODULE_3__.NotFoundPageContainer, _home_home_container__WEBPACK_IMPORTED_MODULE_4__.HomeContainer], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_7__.FlexLayoutModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] }); })();


/***/ }),

/***/ 2654:
/*!****************************************!*\
  !*** ./src/app/home/home.container.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeContainer": () => (/* binding */ HomeContainer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ 582);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 1258);




const _c0 = function () { return ["/content"]; };
const _c1 = function () { return ["/navbar"]; };
const _c2 = function () { return ["/auth"]; };
const _c3 = function () { return ["/hide-nav"]; };
const _c4 = function () { return ["/money"]; };
class HomeContainer {
    constructor() { }
    ngOnInit() { }
}
HomeContainer.ɵfac = function HomeContainer_Factory(t) { return new (t || HomeContainer)(); };
HomeContainer.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeContainer, selectors: [["ng-component"]], decls: 13, vars: 10, consts: [["fxLayout", "column", "fxLayoutAlign", "center center", "fxLayoutGap", "8px"], ["mat-raised-button", "", 3, "routerLink"]], template: function HomeContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Money mate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Bottom navigation ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " hide nav ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " money ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutAlignDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__.DefaultLayoutGapDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], styles: ["h1[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29udGFpbmVyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImhvbWUuY29udGFpbmVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSB7XG4gICAgbWFyZ2luLXRvcDogM3JlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 1330:
/*!************************************************************!*\
  !*** ./src/app/not-found-page/not-found-page.container.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundPageContainer": () => (/* binding */ NotFoundPageContainer)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

class NotFoundPageContainer {
    constructor() { }
    ngOnInit() { }
}
NotFoundPageContainer.ɵfac = function NotFoundPageContainer_Factory(t) { return new (t || NotFoundPageContainer)(); };
NotFoundPageContainer.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundPageContainer, selectors: [["not-found-page"]], decls: 2, vars: 0, template: function NotFoundPageContainer_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQtcGFnZS5jb250YWluZXIuc2NzcyJ9 */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 370:
/*!********************************!*\
  !*** ./src/material.module.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 6322);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/grid-list */ 5937);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/menu */ 221);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ 365);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ 181);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ 2080);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tabs */ 9348);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/badge */ 330);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/divider */ 1124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);




















class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheetModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
            _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRippleModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule,
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule,
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule,
        ], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRippleModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRippleModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule], exports: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_6__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_10__.MatMenuModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__.MatProgressSpinnerModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MatRippleModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__.MatSlideToggleModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_16__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_18__.MatBadgeModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__.MatDividerModule] }); })();


/***/ }),

/***/ 6461:
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": 708
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6461;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3208), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map