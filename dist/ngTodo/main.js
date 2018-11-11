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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', redirectTo: 'todos', pathMatch: 'full' },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" [ngClass]=\"'margin-bottom-2rem'\">\n  <mat-toolbar-row>\n    <span>NgTodo</span>\n    <mat-icon class=\"icon\">note_add</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  padding: 0 14px; }\n\n.spacer {\n  flex: 1 1 auto; }\n\n.margin-bottom-2rem {\n  margin-bottom: 2rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXFdlYkRldlxcYXBwc1xcbmdUb2RvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNhc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZSxFQUFHOztBQUVwQjtFQUNFLGVBQWMsRUFBRzs7QUFFbkI7RUFDRSwrQkFBOEIsRUFBRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uIHtcbiAgcGFkZGluZzogMCAxNHB4OyB9XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bzsgfVxuXG4ubWFyZ2luLWJvdHRvbS0ycmVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbSAhaW1wb3J0YW50OyB9XG5cbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ngTodo';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _todos_todos_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos/todos.module */ "./src/app/todos/todos.module.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
// import { HttpClientModule } from '@angular/common/http';


// Material


// import { MatMenuModule } from '@angular/material/menu';

// Components


// Importations pour charger et configurer l'API simulée.


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                // HttpClientModule,
                _todos_todos_module__WEBPACK_IMPORTED_MODULE_3__["TodosModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_9__["InMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_10__["InMemoryDataService"]),
                // CommonModule,
                // FormsModule,
                // HttpModule,
                // AppRoutingModule,
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                // MatMenuModule,
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var _local_db_mock_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local-db/mock-todos */ "./src/app/local-db/mock-todos.ts");

var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var todos = _local_db_mock_todos__WEBPACK_IMPORTED_MODULE_0__["TODOS"];
        return {};
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/local-db/mock-todos.ts":
/*!****************************************!*\
  !*** ./src/app/local-db/mock-todos.ts ***!
  \****************************************/
/*! exports provided: TODOS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TODOS", function() { return TODOS; });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/app/local-db/todo.ts");

var TODOS = [
    {
        id: 1,
        title: 'Payment for rent',
        description: 'Love all, trust a few, do wrong to none.',
        status: _todo__WEBPACK_IMPORTED_MODULE_0__["Status"].done,
        creationDate: new Date(2018, 11, 10),
        dueDate: new Date(2018, 11, 30)
    },
    {
        id: 2,
        title: 'Read Angular manual',
        description: 'Fair is foul, and foul is fair: Hover through the fog and filthy air.',
        status: _todo__WEBPACK_IMPORTED_MODULE_0__["Status"].toDo,
        creationDate: new Date(2018, 11, 7),
        dueDate: new Date(2018, 12, 31)
    },
    {
        id: 3,
        title: 'Write essay',
        description: 'To thine own self be true, and it must follow, as the night the day, thou canst not then be false to any man.',
        status: _todo__WEBPACK_IMPORTED_MODULE_0__["Status"].toDo,
        creationDate: new Date(2018, 1, 1),
        dueDate: new Date(2018, 12, 1)
    },
    {
        id: 4,
        title: 'Concert',
        description: 'Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.',
        status: _todo__WEBPACK_IMPORTED_MODULE_0__["Status"].toDo,
        creationDate: new Date(2018, 9, 10),
        dueDate: new Date(2018, 11, 17)
    },
    {
        id: 5,
        title: 'Housing tax',
        description: 'Once in a while as human being we have to contribute to the national effort. As so, pay taxes.',
        status: _todo__WEBPACK_IMPORTED_MODULE_0__["Status"].toDo,
        creationDate: new Date(2018, 10, 14),
        dueDate: new Date(2018, 11, 26)
    }
];


/***/ }),

/***/ "./src/app/local-db/todo.ts":
/*!**********************************!*\
  !*** ./src/app/local-db/todo.ts ***!
  \**********************************/
/*! exports provided: Todo, Status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Todo", function() { return Todo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
var Todo = /** @class */ (function () {
    function Todo() {
    }
    return Todo;
}());

var Status;
(function (Status) {
    Status["toDo"] = "To do";
    // inProgress = 'In Progress',
    Status["done"] = "Done";
})(Status || (Status = {}));


/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-404',
            template: "\n        <div class='center'>\n            <img src=\"\"/>\n            <h1>Hey, cette page n'existe pas !</h1>\n            <a routerLink=\"/\" class=\"waves-effect waves-teal btn-flat\">\n                Retourner \u00E0 l' accueil\n            </a>\n        </div>"
        })
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-details/todo-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/todos/todo-details/todo-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"todo\" [ngClass]=\"'card center-me'\">\n  <mat-card-title>{{ todo.title }}</mat-card-title>\n  <mat-card-subtitle>{{ todo.description }}</mat-card-subtitle>\n  <mat-card-content>\n    <table>\n      <tbody>\n        <tr>\n          <td>Creation Date</td>\n          <td>{{ todo.creationDate | date: 'dd/MM/yyyy' }}</td>\n        </tr>\n        <tr>\n          <td>Due Date</td>\n          <td>{{ todo.dueDate | date: 'dd/MM/yyyy' }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </mat-card-content>\n\n  <mat-card-actions>\n    <div class=\"flex-container-nowrap justify-content-between\">\n      <button mat-flat-button color=\"primary\" (click)=\"goBack()\">Back to List</button>\n      <button mat-flat-button color=\"primary\" (click)=\"goEdit(todo)\">Edit</button>\n    </div>\n  </mat-card-actions>\n</mat-card>\n\n<h4 *ngIf=\"!todo\" class=\"center\">No Todo to display !</h4>\n"

/***/ }),

/***/ "./src/app/todos/todo-details/todo-details.component.sass":
/*!****************************************************************!*\
  !*** ./src/app/todos/todo-details/todo-details.component.sass ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  max-width: 600px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1kZXRhaWxzL0Q6XFxXZWJEZXZcXGFwcHNcXG5nVG9kby9zcmNcXGFwcFxcdG9kb3NcXHRvZG8tZGV0YWlsc1xcdG9kby1kZXRhaWxzLmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCLEVBQUciLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvLWRldGFpbHMvdG9kby1kZXRhaWxzLmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xuICBtYXgtd2lkdGg6IDYwMHB4OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/todos/todo-details/todo-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/todos/todo-details/todo-details.component.ts ***!
  \**************************************************************/
/*! exports provided: TodoDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailsComponent", function() { return TodoDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todos.service */ "./src/app/todos/todos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoDetailsComponent = /** @class */ (function () {
    function TodoDetailsComponent(route, router, todosService) {
        this.route = route;
        this.router = router;
        this.todosService = todosService;
        this.todo = null;
    }
    TodoDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.todo = _this.todosService.getOne(id); // on utilise le service pour récupérer un pokémon en fonction de son identifiant.
        });
    };
    TodoDetailsComponent.prototype.goBack = function () {
        this.router.navigate(['/todos']);
    };
    TodoDetailsComponent.prototype.goEdit = function (todo) {
        var link = ['/todo/edit', todo.id];
        this.router.navigate(link);
    };
    TodoDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-details',
            template: __webpack_require__(/*! ./todo-details.component.html */ "./src/app/todos/todo-details/todo-details.component.html"),
            styles: [__webpack_require__(/*! ./todo-details.component.sass */ "./src/app/todos/todo-details/todo-details.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"]])
    ], TodoDetailsComponent);
    return TodoDetailsComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-edit/todo-edit.component.html":
/*!**********************************************************!*\
  !*** ./src/app/todos/todo-edit/todo-edit.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"todo\" [ngClass]=\"'card center-me'\">\n  <form>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Title\" [(ngModel)]=\"todo.title\" name=\"title\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <textarea matInput placeholder=\"Description\" [(ngModel)]=\"todo.description\" name=\"description\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\" [(ngModel)]=\"todo.dueDate\" name=\"dueDate\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n  </form>\n\n  <mat-card-actions>\n    <div class=\"flex-container-nowrap justify-content-between\">\n      <button mat-flat-button color=\"warn\" (click)=\"goBack()\">Cancel</button>\n      <button mat-flat-button color=\"primary\" (click)=\"save(todo)\">Save</button>\n    </div>\n  </mat-card-actions>\n</mat-card>\n<h4 *ngIf=\"!todo\" class=\"center\">No Todo to edit !</h4>\n"

/***/ }),

/***/ "./src/app/todos/todo-edit/todo-edit.component.sass":
/*!**********************************************************!*\
  !*** ./src/app/todos/todo-edit/todo-edit.component.sass ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kby1lZGl0L0Q6XFxXZWJEZXZcXGFwcHNcXG5nVG9kby9zcmNcXGFwcFxcdG9kb3NcXHRvZG8tZWRpdFxcdG9kby1lZGl0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWdCO0VBQ2hCLGlCQUFnQjtFQUNoQixZQUFXLEVBQUciLCJmaWxlIjoic3JjL2FwcC90b2Rvcy90b2RvLWVkaXQvdG9kby1lZGl0LmNvbXBvbmVudC5zYXNzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cblxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/todos/todo-edit/todo-edit.component.ts":
/*!********************************************************!*\
  !*** ./src/app/todos/todo-edit/todo-edit.component.ts ***!
  \********************************************************/
/*! exports provided: TodoEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEditComponent", function() { return TodoEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _todos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../todos.service */ "./src/app/todos/todos.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TodoEditComponent = /** @class */ (function () {
    function TodoEditComponent(route, todosService) {
        this.route = route;
        this.todosService = todosService;
        this.todo = null;
    }
    TodoEditComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params['id'];
        this.todo = this.todosService.getOne(id);
    };
    TodoEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-edit',
            template: __webpack_require__(/*! ./todo-edit.component.html */ "./src/app/todos/todo-edit/todo-edit.component.html"),
            styles: [__webpack_require__(/*! ./todo-edit.component.sass */ "./src/app/todos/todo-edit/todo-edit.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _todos_service__WEBPACK_IMPORTED_MODULE_1__["TodosService"]])
    ], TodoEditComponent);
    return TodoEditComponent;
}());



/***/ }),

/***/ "./src/app/todos/todo-routing.module.ts":
/*!**********************************************!*\
  !*** ./src/app/todos/todo-routing.module.ts ***!
  \**********************************************/
/*! exports provided: TodoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoRoutingModule", function() { return TodoRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos-list/todos-list.component */ "./src/app/todos/todos-list/todos-list.component.ts");
/* harmony import */ var _todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-details/todo-details.component */ "./src/app/todos/todo-details/todo-details.component.ts");
/* harmony import */ var _todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-edit/todo-edit.component */ "./src/app/todos/todo-edit/todo-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// routes definition
var todosRoutes = [
    { path: 'todos', component: _todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_2__["TodosListComponent"] },
    { path: 'todo/:id', component: _todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_3__["TodoDetailsComponent"] },
    { path: 'todo/edit/:id', component: _todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_4__["TodoEditComponent"] }
];
var TodoRoutingModule = /** @class */ (function () {
    function TodoRoutingModule() {
    }
    TodoRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(todosRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TodoRoutingModule);
    return TodoRoutingModule;
}());



/***/ }),

/***/ "./src/app/todos/todos-list/todos-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/todos/todos-list/todos-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"center-me\" style=\"width:90%\">\n  <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"status\" matSortDirection=\"desc\" class=\"mat-elevation-z8\">\n    <!-- Read Column -->\n    <ng-container matColumnDef=\"read\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-icon title=\"View details\" color='primary' class=\"pointer\" (click)=\"this.router.navigate(['/todo', element.id])\">visibility</mat-icon>\n      </td>\n    </ng-container>\n\n    <!-- Edit Column -->\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n\n        <mat-icon title=\"Edit\" color='primary' class=\"pointer\" (click)=\"this.router.navigate(['/todo/edit', element.id])\">edit</mat-icon>\n\n      </td>\n    </ng-container>\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <mat-checkbox color=\"primary\" (click)=\"$event.stopPropagation()\" (change)=\"onCheckboxChange($event,element)\"\n          [checked]=\"element.status==='Done'?true:false\">\n        </mat-checkbox>\n      </td>\n    </ng-container>\n\n    <!-- Title Column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Title </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.status==='Done'?'crossed-text':''\"> {{element.title}}\n      </td>\n    </ng-container>\n\n    <!-- Status Column -->\n    <ng-container matColumnDef=\"status\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Status </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.status==='Done'?'crossed-text':''\">\n        {{element.status}}\n      </td>\n    </ng-container>\n\n    <!-- Creation Date Column -->\n    <ng-container matColumnDef=\"creationDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Creation Date </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.status==='Done'?'crossed-text':''\">\n        {{element.creationDate|date:\"dd/MM/yyyy\"}} </td>\n    </ng-container>\n\n    <!-- Due Date Column -->\n    <ng-container matColumnDef=\"dueDate\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Due Date </th>\n      <td mat-cell *matCellDef=\"let element\" [ngClass]=\"element.status==='Done'?'crossed-text':''\">\n        {{element.dueDate|date:\"dd/MM/yyyy\"}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedRowIndex == row.id}\"\n      (mouseenter)=\"highlight(row)\" (mouseleave)=\"selectedRowIndex = -1\"></tr>\n  </table>\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n\n</div>\n"

/***/ }),

/***/ "./src/app/todos/todos-list/todos-list.component.sass":
/*!************************************************************!*\
  !*** ./src/app/todos/todos-list/todos-list.component.sass ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n.highlight {\n  background: #EEE; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9kb3MvdG9kb3MtbGlzdC9EOlxcV2ViRGV2XFxhcHBzXFxuZ1RvZG8vc3JjXFxhcHBcXHRvZG9zXFx0b2Rvcy1saXN0XFx0b2Rvcy1saXN0LmNvbXBvbmVudC5zYXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBVyxFQUFHOztBQUVoQjtFQUNFLGFBQVksRUFBRzs7QUFFakI7RUFDRSxpQkFBZ0IsRUFBRyIsImZpbGUiOiJzcmMvYXBwL3RvZG9zL3RvZG9zLWxpc3QvdG9kb3MtbGlzdC5jb21wb25lbnQuc2FzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxudGgubWF0LXNvcnQtaGVhZGVyLXNvcnRlZCB7XG4gIGNvbG9yOiBibGFjazsgfVxuXG4uaGlnaGxpZ2h0IHtcbiAgYmFja2dyb3VuZDogI0VFRTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/todos/todos-list/todos-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/todos/todos-list/todos-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TodosListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosListComponent", function() { return TodosListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _local_db_todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../local-db/todo */ "./src/app/local-db/todo.ts");
/* harmony import */ var _todos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../todos.service */ "./src/app/todos/todos.service.ts");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TodosListComponent = /** @class */ (function () {
    function TodosListComponent(router, todosService) {
        this.router = router;
        this.todosService = todosService;
        this.displayedColumns = [
            'select',
            'title',
            'status',
            'creationDate',
            'dueDate',
            'read',
            'edit',
        ];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.selectedRowIndex = -1;
    }
    TodosListComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.todosService.getAll());
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    TodosListComponent.prototype.onCheckboxChange = function (e, element) {
        if (element.status !== _local_db_todo__WEBPACK_IMPORTED_MODULE_2__["Status"].done) {
            element.status = _local_db_todo__WEBPACK_IMPORTED_MODULE_2__["Status"].done;
            this.dataSource.sort = this.sort;
        }
        else {
            element.status = _local_db_todo__WEBPACK_IMPORTED_MODULE_2__["Status"].toDo;
            this.dataSource.sort = this.sort;
        }
    };
    TodosListComponent.prototype.highlight = function (row) {
        this.selectedRowIndex = row.id;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], TodosListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], TodosListComponent.prototype, "paginator", void 0);
    TodosListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos-list',
            template: __webpack_require__(/*! ./todos-list.component.html */ "./src/app/todos/todos-list/todos-list.component.html"),
            styles: [__webpack_require__(/*! ./todos-list.component.sass */ "./src/app/todos/todos-list/todos-list.component.sass")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _todos_service__WEBPACK_IMPORTED_MODULE_3__["TodosService"]])
    ], TodosListComponent);
    return TodosListComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.module.ts":
/*!***************************************!*\
  !*** ./src/app/todos/todos.module.ts ***!
  \***************************************/
/*! exports provided: TodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosModule", function() { return TodosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _todo_routing_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./todo-routing.module */ "./src/app/todos/todo-routing.module.ts");
/* harmony import */ var _todos_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./todos.service */ "./src/app/todos/todos.service.ts");
/* harmony import */ var _todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./todos-list/todos-list.component */ "./src/app/todos/todos-list/todos-list.component.ts");
/* harmony import */ var _todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./todo-details/todo-details.component */ "./src/app/todos/todo-details/todo-details.component.ts");
/* harmony import */ var _todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./todo-edit/todo-edit.component */ "./src/app/todos/todo-edit/todo-edit.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Modules



// Material Angular Modules










// Application Module & Components





var TodosModule = /** @class */ (function () {
    function TodosModule() {
    }
    TodosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_todos_list_todos_list_component__WEBPACK_IMPORTED_MODULE_15__["TodosListComponent"], _todo_details_todo_details_component__WEBPACK_IMPORTED_MODULE_16__["TodoDetailsComponent"], _todo_edit_todo_edit_component__WEBPACK_IMPORTED_MODULE_17__["TodoEditComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatNativeDateModule"],
                _todo_routing_module__WEBPACK_IMPORTED_MODULE_13__["TodoRoutingModule"]
            ],
            providers: [_todos_service__WEBPACK_IMPORTED_MODULE_14__["TodosService"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_12__["MatDatepickerModule"]]
        })
    ], TodosModule);
    return TodosModule;
}());



/***/ }),

/***/ "./src/app/todos/todos.service.ts":
/*!****************************************!*\
  !*** ./src/app/todos/todos.service.ts ***!
  \****************************************/
/*! exports provided: TodosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosService", function() { return TodosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_db_mock_todos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-db/mock-todos */ "./src/app/local-db/mock-todos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpClient} from '@angular/http';
// import {Observable} from 'rxjs';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
var TodosService = /** @class */ (function () {
    function TodosService() {
    }
    TodosService.prototype.getAll = function () {
        return _local_db_mock_todos__WEBPACK_IMPORTED_MODULE_1__["TODOS"];
    };
    /*private handleError(error: any): Observable<any> {
      console.error('Error : ', error);
      return Observable.reject(error.message || error);
    }*/
    TodosService.prototype.getOne = function (id) {
        var todos = this.getAll();
        for (var index = 0; index < todos.length; index++) {
            if (id === todos[index].id) {
                return todos[index];
            }
        }
    };
    TodosService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TodosService);
    return TodosService;
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

module.exports = __webpack_require__(/*! D:\WebDev\apps\ngTodo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map