(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-player></app-player>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'video-selector';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/player/player.component */ "./src/app/components/player/player.component.ts");
/* harmony import */ var _components_selector_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/selector/selector.component */ "./src/app/components/selector/selector.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



// import { AppRoutingModule } from '@angular/router';






var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_7__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faPlayCircle"]);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_player_player_component__WEBPACK_IMPORTED_MODULE_4__["PlayerComponent"],
                _components_selector_selector_component__WEBPACK_IMPORTED_MODULE_5__["SelectorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // AppRoutingModule,
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/player/player.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/player/player.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "!DOCTYPE html>\n<html lang=\"en\">\n\n<body>\n  <div class=\"player-container\">\n    <video class=\"video-content\" src=\"\"></video>\n    <div class=\"player-controller\">\n      <div class=\"progress-bar\">\n        <div class=\"progress-drag\"></div>\n      </div>\n      <button class=\"play-button\">\n        <div>\n          <fa-icon icon=\"fa-play-circle\" size=\"xs\"></fa-icon>\n        </div>\n      </button>\n      <input type=\"range\" name=\"volume\" class=\"player-volume\" min=\"0\" max=\"1\" step=\"0.65\" value=\"1\">\n      <button skip=\"-10\" class=\"player-skip-button\">\n        <div style=\"text-align: center\">\n          <fa-icon icon=\"fa-step-backward\" siz=\"xs\"></fa-icon>\n        </div>\n      </button>\n      <button skip=\"10\" class=\"player-skip-button\">\n        <div style=\"text-align: center\">\n          <fa-icon icon=\"fa-step-forward\" siz=\"xs\"></fa-icon>\n        </div>\n      </button>\n    </div>\n  </div>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/app/components/player/player.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/player/player.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  box-sizing: border-box; }\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0;\n  padding: 0;\n  background: url(player_backdrop.jpg) black;\n  background-size: cover; }\n\n.player-container {\n  max-width: 875px;\n  border: 5px solid rgba(0, 153, 224, 0.9);\n  box-shadow: 0 0 20px rgba(255, 136, 0, 0.9);\n  overflow: hidden; }\n\n.player-container :hover .player-controller {\n    transform: translateY(0); }\n\n.player-container:hover .progress-bar {\n    height: 20px; }\n\n.player-container:-webkit-full-screen {\n  width: 100%; }\n\n.player-container:-moz-full-screen {\n  width: 100%; }\n\n.player-container:-ms-fullscreen {\n  width: 100%; }\n\n.player-container:fullscreen {\n  width: 100%; }\n\n.player-container:-webkit-full-screen {\n  width: 100%; }\n\n.video-content {\n  width: 100%; }\n\n.play-button {\n  background: none; }\n\n.play-button div {\n    text-align: center; }\n\n.play-button:focus {\n    border-color: rgba(255, 136, 0, 0.9); }\n\nfa-icon {\n  color: white;\n  cursor: pointer;\n  max-width: 50px; }\n\n.player-drag {\n  width: 10px;\n  height: 30px; }\n\n.player-controller {\n  display: flex;\n  flex-wrap: wrap;\n  background: rgba(0, 0, 0, 0.4);\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  transform: translateY(100%) translate(-5px);\n  transition: all .5s; }\n\n.player-controller > * {\n    flex: 1; }\n\n.progress-bar {\n  display: flex;\n  flex-basis: 100%;\n  flex: 10;\n  position: relative;\n  height: 5px;\n  transition: height 0.3s;\n  background: rgba(0, 0, 0, 0.4);\n  cursor: pointer; }\n\n.progress-drag {\n  width: 50%;\n  background: rgba(255, 136, 0, 0.9);\n  flex: 0;\n  flex-basis: 10%; }\n\ninput[type=range] {\n  width: 100%;\n  margin: 0 5px;\n  background: transparent;\n  -webkit-appearance: none; }\n\ninput[type=range] :focus {\n    outline: none; }\n\ninput[type=range] ::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 9px;\n    background: rgba(142, 197, 223, 0.982);\n    border: 0.5px solid rgba(0, 153, 224, 0.9);\n    border-radius: 1.3px;\n    cursor: pointer; }\n\ninput[type=range] ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 16px;\n    height: 16px;\n    margin-top: -3.5px;\n    background: rgba(0, 153, 224, 0.9);\n    cursor: pointer; }\n\ninput[type=range] :focus::-webkit-slider-runnable-track {\n    background: rgba(142, 197, 223, 0.982);\n    border: 0.5px solid rgba(0, 153, 224, 0.9); }\n\ninput[type=range] ::-moz-range-track {\n    width: 100%;\n    height: 9px;\n    background: rgba(142, 197, 223, 0.982);\n    border: 0.5px solid rgba(0, 153, 224, 0.9);\n    border-radius: 1.3px;\n    cursor: pointer; }\n\ninput[type=range] ::-moz-range-thumb {\n    width: 16px;\n    height: 16px;\n    background: rgba(0, 153, 224, 0.9);\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxsZWJvdC92aWRlby1zZWxlY3Rvci9zcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyL3BsYXllci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMENBQTBDO0VBQzFDLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGdCQUFnQjtFQUNoQix3Q0FBcUM7RUFDckMsMkNBQXdDO0VBQ3hDLGdCQUFnQixFQUFBOztBQUpwQjtJQU9RLHdCQUF3QixFQUFBOztBQVBoQztJQVdRLFlBQVksRUFBQTs7QUFLcEI7RUFDSSxXQUFXLEVBQUE7O0FBRGY7RUFDSSxXQUFXLEVBQUE7O0FBRGY7RUFDSSxXQUFXLEVBQUE7O0FBRGY7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxnQkFBZ0IsRUFBQTs7QUFEcEI7SUFJUSxrQkFBa0IsRUFBQTs7QUFKMUI7SUFRUSxvQ0FBaUMsRUFBQTs7QUFJekM7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsOEJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLDJDQUEyQztFQUMzQyxtQkFBbUIsRUFBQTs7QUFSdkI7SUFXUSxPQUFPLEVBQUE7O0FBSWY7RUFDSSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2Qiw4QkFBMkI7RUFDM0IsZUFBZSxFQUFBOztBQUduQjtFQUNJLFVBQVU7RUFDVixrQ0FBK0I7RUFDL0IsT0FBTztFQUNQLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix3QkFBd0IsRUFBQTs7QUFKNUI7SUFPUSxhQUFhLEVBQUE7O0FBUHJCO0lBV1EsV0FBVztJQUNYLFdBQVc7SUFDWCxzQ0FBc0M7SUFDdEMsMENBQXVDO0lBQ3ZDLG9CQUFvQjtJQUNwQixlQUFlLEVBQUE7O0FBaEJ2QjtJQW9CUSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0NBQStCO0lBQy9CLGVBQWUsRUFBQTs7QUF6QnZCO0lBNkJRLHNDQUF1QztJQUN2QywwQ0FBdUMsRUFBQTs7QUE5Qi9DO0lBbUNRLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0NBQXNDO0lBQ3RDLDBDQUF1QztJQUN2QyxvQkFBb0I7SUFDcEIsZUFBZSxFQUFBOztBQXhDdkI7SUE0Q1EsV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBK0I7SUFDL0IsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJhY2tncm91bmQ6IHVybChwbGF5ZXJfYmFja2Ryb3AuanBnKSBibGFjaztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucGxheWVyLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA4NzVweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2JhKDAsMTUzLDIyNCwwLjkpO1xuICAgIGJveC1zaGFkb3c6IDAgMCAyMHB4IHJnYmEoMjU1LDEzNiwwLDAuOSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIDpob3ZlciAucGxheWVyLWNvbnRyb2xsZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgfVxuXG4gICAgJjpob3ZlciAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbn1cblxuLy8gc3VwcG9ydCBmdWxsIHNjcmVlblxuLnBsYXllci1jb250YWluZXI6ZnVsbHNjcmVlbiB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wbGF5ZXItY29udGFpbmVyOi13ZWJraXQtZnVsbC1zY3JlZW4ge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udmlkZW8tY29udGVudCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wbGF5LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcblxuICAgIGRpdiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwxMzYsMCwwLjkpO1xuICAgIH1cbn1cblxuZmEtaWNvbiB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXgtd2lkdGg6IDUwcHg7XG59XG5cbi5wbGF5ZXItZHJhZyB7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xufVxuXG4ucGxheWVyLWNvbnRyb2xsZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC40KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKSB0cmFuc2xhdGUoLTVweCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIC41cztcbiAgICBcbiAgICAmID4gKiB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxufVxuXG4ucHJvZ3Jlc3MtYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgZmxleDogMTA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNXB4O1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC40KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5wcm9ncmVzcy1kcmFnIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDEzNiwwLDAuOSk7XG4gICAgZmxleDogMDtcbiAgICBmbGV4LWJhc2lzOiAxMCU7XG59XG5cbmlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgNXB4O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblxuICAgIDpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxuXG4gICAgOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDlweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNDIsIDE5NywgMjIzLCAwLjk4Mik7XG4gICAgICAgIGJvcmRlcjogMC41cHggc29saWQgcmdiYSgwLDE1MywyMjQsMC45KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS4zcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICA6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMy41cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxNTMsMjI0LDAuOSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICA6Zm9jdXM6Oi13ZWJraXQtc2xpZGVyLXJ1bm5hYmxlLXRyYWNrIHtcbiAgICAgICAgYmFja2dyb3VuZDogIHJnYmEoMTQyLCAxOTcsIDIyMywgMC45ODIpO1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHJnYmEoMCwxNTMsMjI0LDAuOSk7IFxuICAgICAgfVxuXG4gICAgLy8gZmlyZWZveCBicm93c2VyXG4gICAgOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogOXB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0MiwgMTk3LCAyMjMsIDAuOTgyKTtcbiAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCByZ2JhKDAsMTUzLDIyNCwwLjkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxLjNweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIDo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxNTMsMjI0LDAuOSk7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/components/player/player.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");



var PlayerComponent = /** @class */ (function () {
    function PlayerComponent() {
        this.faPlayCircle = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPlayCircle"];
        this.faStepBackward = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStepBackward"];
        this.faStepForward = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStepForward"];
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/components/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/components/player/player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/components/selector/selector.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/selector/selector.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  selector works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/selector/selector.component.sass":
/*!*************************************************************!*\
  !*** ./src/app/components/selector/selector.component.sass ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VsZWN0b3Ivc2VsZWN0b3IuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/components/selector/selector.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/selector/selector.component.ts ***!
  \***********************************************************/
/*! exports provided: SelectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectorComponent", function() { return SelectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectorComponent = /** @class */ (function () {
    function SelectorComponent() {
    }
    SelectorComponent.prototype.ngOnInit = function () {
    };
    SelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-selector',
            template: __webpack_require__(/*! ./selector.component.html */ "./src/app/components/selector/selector.component.html"),
            styles: [__webpack_require__(/*! ./selector.component.sass */ "./src/app/components/selector/selector.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectorComponent);
    return SelectorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/bellebot/video-selector/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map