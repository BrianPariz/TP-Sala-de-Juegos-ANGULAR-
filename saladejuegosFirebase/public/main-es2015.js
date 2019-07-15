(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-principal></app-principal>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    {{nuevoJuego.nombre}}!\r\n  </h1>\r\n </div>\r\n<h2></h2>\r\n<form name=\"juego\">\r\n\r\n   <label>ingrese numero:  </label>  <input [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"ingrese numero\" name=\"numeroIngresado\" type=\"text\" class=\"form-control\" style=\"width:50%\"/>\r\n    <h1>{{nuevoJuego.numeroIngresado}}  </h1>\r\n \r\n    <h2 [hidden]=\"ocultarVerificar\"><button  *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\" class=\"btn btn-success btn-lg\">Verificar</button></h2>\r\n \r\n    <h2><button *ngIf=\"nuevoJuego.numeroSecreto==0 \" (click)=\"generarnumero()\"  class=\"btn btn-info btn-lg\">Nuevo número secreto</button></h2>\r\n \r\n    <h2><p *ngIf=\"nuevoJuego.numeroSecreto!=0\" ><i class=\"fa fa-spinner fa-spin\"></i>Esperando que ingrese un número</p></h2>\r\n\r\n    <h3 [hidden]=\"!nuevoJuego.gano\">usted adivino el número</h3>\r\n    <h3 [hidden]=\"nuevoJuego.gano\">usted aún no gano </h3>\r\n\r\n\r\n</form>\r\n<div id=\"snackbar\">{{Mensajes}}</div> -->\r\n\r\n<form name=\"juego\">\r\n  <div class=\"container\">\r\n    <div class=\"cardGame\">\r\n      <h1>{{nuevoJuego.nombre}}</h1>\r\n      <div class=\"row\">\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-8\">\r\n          <input [disabled]=\"nuevoJuego.numeroSecreto == 0\" [(ngModel)]=\"nuevoJuego.numeroIngresado\" placeholder=\"Ingrese un número\" name=\"numeroIngresado\"\r\n            type=\"text\" class=\"form-control\" />\r\n        </div>\r\n        <div class=\"col-md-4\"></div>\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-md-4\"></div>\r\n        <div class=\"col-md-4\">\r\n          <button [hidden]=\"ocultarVerificar\" *ngIf=\"nuevoJuego.numeroSecreto!=0\" (click)=\"verificar()\"\r\n            class=\"btn btn-secondary\">Verificar</button>\r\n          <button *ngIf=\"nuevoJuego.numeroSecreto == 0\" (click)=\"generarnumero()\" class=\"btn btn-secondary\">Nuevo\r\n            número secreto</button>\r\n        </div>\r\n        <div class=\"col-md-4\"></div>\r\n      </div>\r\n    </div>\r\n    <button id=\"btnSalir\" type=\"button\" class=\"float-right mt-3 btn btn-secondary\" (click)=\"salir()\">Salir</button>\r\n  </div>\r\n</form>\r\n\r\n<!-- <div id=\"snackbar\">{{Mensajes}}</div> -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"juego\">\r\n  <div class=\"container\">\r\n    <div class=\"cardGame\">\r\n      <h1>Agilidad Aritmética</h1>\r\n\r\n      <div class=\"row\">\r\n\r\n        <div class=\"col-md-2\"></div>\r\n        <div class=\"col-md-8\">\r\n          <ul>\r\n            <li>\r\n              Primer número: <input [(ngModel)]=\"nuevoJuego.primerNumero\" name=\"primerNumero\" type=\"text\"\r\n                class=\"form-control\" readonly />\r\n\r\n            </li>\r\n            <li>\r\n              Operador: <input [(ngModel)]=\"nuevoJuego.operador\" name=\"operador\" type=\"text\" class=\"form-control\"\r\n                readonly />\r\n\r\n            </li>\r\n            <li>\r\n              Segundo número: <input [(ngModel)]=\"nuevoJuego.segundoNumero\" name=\"segundoNumero\" type=\"text\"\r\n                class=\"form-control\" readonly />\r\n\r\n            </li>\r\n            <li>\r\n              Respuesta: <input id=\"inputNumero\" [(ngModel)]=\"nuevoJuego.numeroIngresado\" [disabled]=\"ocultarVerificar\"\r\n                placeholder=\"Ingrese un número\" name=\"numeroIngresado\" type=\"number\" class=\"form-control\" />\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n        <div class=\"col-md-4\"></div>\r\n\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-md-4\"></div>\r\n        <div class=\"col-md-4\">\r\n          <button [hidden]=\"!ocultarVerificar\" type=\"button\" class=\"btn btn-secondary\"\r\n            (click)=\"NuevoJuego()\">Jugar</button>\r\n          <button [hidden]=\"ocultarVerificar\" (click)=\"Verificar()\" type=\"button\" class=\"btn btn-secondary\">Verificación\r\n            en\r\n            {{Tiempo}}</button>\r\n        </div>\r\n        <div class=\"col-md-4\"></div>\r\n      </div>\r\n    </div>\r\n    <button id=\"btnSalir\" type=\"button\" class=\"float-right mt-3 btn btn-secondary\" (click)=\"salir()\">Salir</button>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/cabecera/cabecera.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/cabecera/cabecera.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg text-uppercase\" id=\"mainNav\">\r\n    <div class=\"container\">\r\n        <a class=\"navbar-brand mx-lg-1\" routerLink=\"\">Sala de Juegos</a>\r\n        <button class=\"navbar-toggler navbar-toggler-right text-uppercase font-weight-bold text-white rounded\"\r\n            type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\r\n            aria-expanded=\"false\" id=\"btnMenuToggle\">\r\n            Menú\r\n            <i class=\"fa fa-bars\"></i>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n                <li class=\"nav-item mx-0 mx-lg-1\" *ngIf=\"!estaLogeado\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\" routerLink=\"/registrarse\">Creá tu cuenta</a>\r\n                </li>\r\n                <li class=\"nav-item mx-0 mx-lg-1\" *ngIf=\"!estaLogeado\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\" routerLink=\"/logearse\">Ingresá</a>\r\n                </li>\r\n                <li class=\"nav-item mx-0 mx-lg-1\" *ngIf=\"estaLogeado\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\">\r\n                        <img src=\"{{imageUrl}}\" class=\"img-responsive user-img\">\r\n                        <span class=\"\">{{nombre}}</span>\r\n                    </a>\r\n                </li>\r\n                <li class=\"nav-item mx-0 mx-lg-1\" *ngIf=\"estaLogeado\" (click)=\"Deslogearse()\">\r\n                    <a class=\"nav-link py-3 px-0 px-lg-3 rounded\" routerLink=\"\">Cerrar sesión</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"h-100 mt-4\">\n  <div class=\"container h-100\">\n    <div class=\"row justify-content-md-center h-100\">\n\n      <mat-form-field>\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n      </mat-form-field>\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n        <ng-container matColumnDef=\"ImagenUrl\">\n          <th mat-header-cell *matHeaderCellDef> Imágen del Jugador </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <a class=\"nav-link py-3 px-0 px-lg-3 rounded\">\n              <img src=\"{{element.ImagenUrl}}\" class=\"img-responsive user-img\">\n            </a>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Jugador\">\n          <th mat-header-cell *matHeaderCellDef> Nombre del Jugador </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Jugador}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Juego\">\n          <th mat-header-cell *matHeaderCellDef> Nombre del Juego </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Juego}} </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Puntuacion\">\n          <th mat-header-cell *matHeaderCellDef> Puntuación </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Puntuacion}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n\n      <div *ngIf=\"noData | async\" class=\"no-resultados\">\n        No hay resultados\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/lista-usuarios/lista-usuarios.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/lista-usuarios/lista-usuarios.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"h-100 mt-4\">\n  <div class=\"container h-100\"> \n    <div class=\"row justify-content-md-center h-100\">\n\n      <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n        <!-- Imagen Column -->\n        <ng-container matColumnDef=\"Imágen\">\n          <th mat-header-cell *matHeaderCellDef> Imágen </th>\n          <td mat-cell *matCellDef=\"let element\">\n            <a class=\"nav-link py-3 px-0 px-lg-3 rounded\">\n              <img src=\"{{element.ImagenUrl}}\" class=\"img-responsive user-img\">\n            </a>\n          </td>\n        </ng-container>\n\n        <!-- Nombre Column -->\n        <ng-container matColumnDef=\"Nombre\">\n          <th mat-header-cell *matHeaderCellDef> Nombre </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Nombre}} </td>\n        </ng-container>\n\n        <!-- Email Column -->\n        <ng-container matColumnDef=\"Email\">\n          <th mat-header-cell *matHeaderCellDef> Email </th>\n          <td mat-cell *matCellDef=\"let element\"> {{element.Email}} </td>\n        </ng-container>\n\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/login/login.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"h-100 login-pagina\">\r\n  <div class=\"container h-100\">\r\n    <div class=\"row justify-content-md-center h-100\">\r\n      <div class=\"card-wrapper\">\r\n        <div class=\"brand\">\r\n          <img src=\"/assets/imagenes/boardGames.png\">\r\n        </div>\r\n        <div class=\"card fat\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Entrá a tu cuenta</h4>\r\n            <form (ngSubmit)=\"f.form.valid && Logearse()\" #f=\"ngForm\" novalidate>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Dirección de Email</label>\r\n\r\n                <input id=\"email\" type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"emailModel\"\r\n                #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required autofocus>\r\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"email.errors.required\">Ingrese el Email</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Contraseña\r\n                  <!-- <a href=\"forgot.html\" class=\"float-right\">\r\n                    Te olvidaste la contraseña?\r\n                  </a> -->\r\n                </label>\r\n                <input id=\"password\" type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"passwordModel\"\r\n                #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>\r\n                <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"password.errors.required\">Ingrese la contraseña</div>\r\n                </div>\r\n              </div>\r\n\r\n              <form class=\"margin-bottom\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"remember\">\r\n                  <label class=\"custom-control-label\" for=\"customCheck\">Recordarme</label>\r\n                </div>\r\n              </form>\r\n\r\n              <div class=\"form-group no-margin mt-3\">\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                  Ingresar\r\n                </button>\r\n              </div>\r\n              <div class=\"margin-top20 text-center\">\r\n                Todavía no tenés una cuenta? <a routerLink=\"/registrarse\">Creá tu cuenta</a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form name=\"juego\">\r\n    <div class=\"container\">\r\n        <div class=\"cardGame\">\r\n            <h1>{{palabra}}</h1>\r\n            <h3>{{timeLeft}}</h3>\r\n            <div class=\"row\" style=\"padding: 5%;\">\r\n                <input id=\"palabraInput\" [disabled]=\"deshabilitado\" class=\"form-control\" type=\"text\"\r\n                    style=\"text-align:center;\" (keydown)=\"onKeyDown($event)\" (keyup)=\"onKeyUp($event)\">\r\n            </div>\r\n            <div class=\"row\">\r\n                <button id=\"btnRestart\" type=\"button\" class=\"btn btn-secondary\" style=\"display:none;\"\r\n                    (click)=\"ReiniciarJuego()\">Jugar de nuevo</button>\r\n            </div>\r\n        </div>\r\n        <button id=\"btnSalir\" type=\"button\" class=\"float-right mt-3 btn btn-secondary\" (click)=\"salir()\">Salir</button>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/menu-card/menu-card.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/menu-card/menu-card.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"wrapper\">\r\n  <section class=\"juegos\" id=\"juegos\">\r\n    <ul>\r\n\r\n      <li>\r\n        <figure>\r\n          <img src=\"./assets/imagenes/cerebro.jpg\">\r\n          <figcaption>\r\n            <h3>Velocidad y agilidad aritmética</h3>\r\n          </figcaption>\r\n        </figure>\r\n        <p>\r\n          Juego de agilidad mental\r\n        </p>\r\n        <a routerLink=\"/juegos/agilidad\">Jugar</a>\r\n      </li>\r\n\r\n      <li>\r\n        <figure>\r\n          <img src=\"./assets/imagenes/ppt.png\">\r\n          <figcaption>\r\n            <h3>Piedra Papel o Tijera</h3>\r\n          </figcaption>\r\n        </figure>\r\n        <p>\r\n          Juega contra la máquina\r\n        </p>\r\n        <a routerLink=\"/juegos/ppt\">Jugar</a>\r\n      </li>\r\n\r\n      <li>\r\n        <figure>\r\n          <img src=\"./assets/imagenes/adivina.jpg\">\r\n          <figcaption>\r\n            <h3>Adivina el número secreto</h3>\r\n          </figcaption>\r\n        </figure>\r\n        <p>\r\n          Juego de adivinanza\r\n        </p>\r\n        <a routerLink=\"/juegos/adivina\">Jugar</a>\r\n      </li>\r\n\r\n      <li>\r\n        <figure>\r\n          <img src=\"./assets/imagenes/teclasMezcladas.jpg\">\r\n          <figcaption>\r\n            <h3>Memokey</h3>\r\n          </figcaption>\r\n        </figure>\r\n        <p>\r\n          Juego de memorización\r\n        </p>\r\n        <a routerLink=\"/juegos/memokey\">Jugar</a>\r\n      </li>\r\n\r\n      <li>\r\n          <figure>\r\n            <img src=\"./assets/imagenes/tateti.png\">\r\n            <figcaption>\r\n              <h3>Ta-Te-Ti</h3>\r\n            </figcaption>\r\n          </figure>\r\n          <p>\r\n            Juego de estrategia\r\n          </p>\r\n          <a routerLink=\"/juegos/tateti\">Jugar</a>\r\n        </li>\r\n\r\n    </ul>\r\n  </section>\r\n</main>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/menu/menu.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"projects\" class=\"projects-section\">\r\n  <div class=\"container\">\r\n\r\n    <!-- Featured Project Row -->\r\n    <a routerLink=\"/juegos\">\r\n      <div class=\"row align-items-center no-gutters mb-4 mb-lg-5\">\r\n        <div class=\"col-xl-8 col-lg-7\">\r\n          <img class=\"img-fluid mb-3 mb-lg-0\" src=\"./assets/imagenes/games.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-xl-4 col-lg-5\">\r\n          <div class=\"featured-text text-center text-lg-left\">\r\n            <h4>Juegos</h4>\r\n            <p class=\"text-black-50 mb-0\">El método lúdico es un conjunto de estrategias diseñadas para crear un\r\n              ambiente de armonía en los estudiantes que están inmersos en el proceso de aprendizaje. Este método busca\r\n              que los alumnos se apropien de los temas impartidos por los docentes utilizando el juego.</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </a>\r\n\r\n    <!-- Project One Row -->\r\n    <a routerLink=\"/resultados\">\r\n      <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0\">\r\n        <div class=\"col-lg-6\">\r\n          <img class=\"img-fluid\" src=\"./assets/imagenes/listado.jpg\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"bg-black text-center h-100 project\">\r\n            <div class=\"d-flex h-100\">\r\n              <div class=\"project-text w-100 my-auto text-center text-lg-left\">\r\n                <h4 class=\"text-white\">Listados de resultados</h4>\r\n                <p class=\"mb-0 text-white-50\">Los listados de los resultados con ordenamiento y búsqueda.</p>\r\n                <hr class=\"d-none d-lg-block mb-0 ml-0\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </a>\r\n\r\n    <!-- Project Two Row -->\r\n    <a routerLink=\"/jugadores\">\r\n      <div class=\"row justify-content-center no-gutters\">\r\n        <div class=\"col-lg-6\">\r\n          <img class=\"img-fluid\" src=\"./assets/imagenes/jugadores.png\" alt=\"\">\r\n        </div>\r\n        <div class=\"col-lg-6 order-lg-first\">\r\n          <div class=\"bg-black text-center h-100 project\">\r\n            <div class=\"d-flex h-100\">\r\n              <div class=\"project-text w-100 my-auto text-center text-lg-right\">\r\n                <h4 class=\"text-white\">Jugadores</h4>\r\n                <p class=\"mb-0 text-white-50\">Listado de jugadores.</p>\r\n                <hr class=\"d-none d-lg-block mb-0 mr-0\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </a>\r\n\r\n    <!-- Project Three Row -->\r\n    <div class=\"row justify-content-center no-gutters mb-5 mb-lg-0\">\r\n      <div class=\"col-lg-6\">\r\n        <img class=\"img-fluid\" src=\"./assets/imagenes/Configuracion.png\" alt=\"\">\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"bg-black text-center h-100 project\">\r\n          <div class=\"d-flex h-100\">\r\n            <div class=\"project-text w-100 my-auto text-center text-lg-left\">\r\n              <h4 class=\"text-white\">Configuraci&oacute;n</h4>\r\n              <p class=\"mb-0 text-white-50\">Ajustes de la aplicación y los métodos de autentificación.</p>\r\n              <hr class=\"d-none d-lg-block mb-0 ml-0\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/pie/pie.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/pie/pie.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer text-center\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col-lg-6 mb-5 mb-lg-0\">\r\n                <h4 class=\"text-uppercase mb-4\">Brian Pariz en la Web</h4>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\" href=\"https://github.com/BrianPariz\" target=\"_blank\">\r\n                    <i class=\"fa fa-github\"></i>\r\n                </a>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\"\r\n                    href=\"https://steamcommunity.com/profiles/76561198110052261/\" target=\"_blank\">\r\n                    <i class=\"fa fa-steam\"></i>\r\n                </a>\r\n                <a class=\"btn btn-outline-light btn-social mx-1\"\r\n                    href=\"https://www.linkedin.com/in/brian-pariz-585643143/\" target=\"_blank\">\r\n                    <i class=\"fa fa-linkedin\"></i>\r\n                </a>\r\n            </div>\r\n\r\n            <div class=\"col-lg-6\">\r\n                <h4 class=\"text-uppercase mb-4\">Acerca de Sala de Juego</h4>\r\n                <p class=\"lead mb-0\">Sala de Juegos es una página de juegos a la que cualquier persona puede acceder,\r\n                    creada por la <a class=\"color_primary\" href=\"http://www.fra.utn.edu.ar/\" target=\"_blank\">UTNFra</a>\r\n                    y mejorada por\r\n                    <a class=\"color_primary\" href=\"/QuienSoy\">Brian\r\n                        Pariz</a>.</p>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</footer>\r\n\r\n<section class=\"copyright py-4 text-center text-white\">\r\n    <div class=\"container\">\r\n        <small>Copyright &copy; Sala de Juegos - Brian Pariz 2019</small>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"cardGame\">\n    <h1>Piedra Papel o Tijeras</h1>\n\n    <div class=\"content\">\n      <div class=\"row\">\n        <mat-card>\n          <mat-card-content>\n            <div class=\"content1\">\n              <h2>{{nombre}}</h2>\n              <button mat-fab color=\"primary\" class=\"score\">{{ scores[0] }}</button>\n            </div>\n            <h3> Elegí tu arma: </h3>\n            <div class=\"content2\">\n              <i (click)=\"pick(0)\" [ngClass]=\"{'selectedWeapon':(playerSelected === 0)}\" class=\"fa fa-hand-rock-o\"></i>\n              <i (click)=\"pick(1)\" [ngClass]=\"{'selectedWeapon':(playerSelected === 1)}\" class=\"fa fa-hand-paper-o\"></i>\n              <i (click)=\"pick(2)\" [ngClass]=\"{'selectedWeapon':(playerSelected === 2)}\"\n                class=\"fa fa-hand-scissors-o\"></i>\n            </div>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <mat-card>\n        <mat-card-content>\n          <div class=\"content1\">\n            <h2> La máquina</h2>\n            <button mat-fab color=\"accent\" class=\"score\">{{ scores[1] }}</button>\n\n          </div>\n          <br><br>\n\n          <div *ngIf=\"enemySelected !== -1\" class=\"flex-container flex-center\">\n            <i *ngIf=\"enemySelected === 0\" class=\"fa fa-hand-rock-o\"></i>\n            <i *ngIf=\"enemySelected === 1\" class=\"fa fa-hand-paper-o\"></i>\n            <i *ngIf=\"enemySelected === 2\" class=\"fa fa-hand-scissors-o\"></i>\n          </div>\n        </mat-card-content>\n      </mat-card>\n\n    </div>\n    <div *ngIf=\"!loading && isResultShow\" class=\"flex-container flex-center\" style=\"flex-direction: column\">\n      <div [ngSwitch]=\"theResult\">\n        <ng-template [ngSwitchCase]=\"0\">\n          <h1> Ganaste! </h1>\n        </ng-template>\n        <ng-template [ngSwitchCase]=\"1\">\n          <h1> Perdiste </h1>\n        </ng-template>\n        <ng-template [ngSwitchCase]=\"2\">\n          <h1>Es un empate! </h1>\n        </ng-template>\n        <ng-template ngSwitchDefault> </ng-template>\n      </div>\n      <p> Selecciona de nuevo para continuar o</p>\n      <button (click)=\"reset()\" mat-raised-button color=\"primary\"> Restear puntuación</button>\n    </div>\n\n    <div class=\"flex-container flex-center\" *ngIf=\"loading\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </div>\n  <button id=\"btnSalir\" type=\"button\" class=\"float-right mt-3 btn btn-secondary\" (click)=\"salir()\">{{btnMensaje}}</button>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/principal/principal.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/principal/principal.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecera></app-cabecera>\r\n\r\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\r\n\r\n<app-pie></app-pie>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/quien-soy/quien-soy.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/quien-soy/quien-soy.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header class=\"header column\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <h2 class=\"margin\">Quién Soy?</h2>\r\n          <h3 style=\"text-align: center;\">Soy un alumno de la UTN FRA</h3>\r\n      </div>\r\n      <div class=\"col-md-2\">\r\n        <a class=\"navbar-brand\">\r\n          <span><strong>Brian Pariz</strong></span>\r\n          <span class=\"d-none d-lg-block\">\r\n            <img class=\"img-fluid img-profile rounded-circle mx-auto mb-2\" src=\"./assets/imagenes/quiensoy.jpg\" alt=\"\">\r\n          </span>\r\n        </a>\r\n      </div>\r\n      <div class=\"col-md-1\"></div>\r\n      <div class=\"col-md-1\"></div>\r\n    </div>\r\n\r\n  </header>\r\n  <aside class=\"sidebar column\">\r\n      <h3 class=\"margin\">Esto es un trabajo práctico</h3>\r\n      <p>Cada universidad, cada facultad, cada carrera y obviamente cada materia en particular tiene estrategias didácticas\r\n        y formas de evaluación diferentes. A pesar de que en muchos casos las universidades intentan estandarizar la forma\r\n        de dictar clase para generar un orden en las planificaciones cuatrimestre a cuatrimestre, las formas de evaluación\r\n        son elementales tanto para las instituciones y profesores como para los alumnos. A través de la evaluación formativa\r\n        el educador busca información en el alumno para lograr comprender cómo se está\r\n        produciendo el proceso de aprendizaje y poder reajustar los objetivos pedagógicos. Y para el alumno es una muestra\r\n        del progreso que está logrando y si puede aplicar, materializar y darle visibilidad a la comprensión del tema. Según\r\n        Black y William (1998), la evaluación formativa, ayuda a que los estudiantes sean independientes a la hora del\r\n        aprendizaje, es decir, se presenta como receptor, autorregulador y centro de esa misma evaluación. </p>\r\n  </aside>\r\n  <main class=\"content column\">\r\n    <h3 class=\"margin\">Dónde Funciona?</h3><br>\r\n    <div class=\"row\">\r\n      <p>Con las tecnologias WEB que permiten desarrollar aplicaciones multiplataforma</p>\r\n      <img src=\"./assets/imagenes/quiensoy1.png\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <p>Principalmente orientada a la experiencia del usuario, garantizando que su funcionamieto sea fluido y pensado\r\n        en el comportamiento del usuario y en la funcionalidad.</p>\r\n      <img src=\"./assets/imagenes/quiensoy2.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <p>Para los sistemas operativos lideres en el mercado del consumo masivo</p>\r\n      <img src=\"./assets/imagenes/quiensoy3.jpg\" class=\"img-responsive margin imagenDeQuienSoy\" alt=\"Image\">\r\n    </div>\r\n  </main>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/registro/registro.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/registro/registro.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"h-100 registro-pagina\">\r\n  <div class=\"container h-100\">\r\n    <div class=\"row justify-content-md-center h-100\">\r\n      <div class=\"card-wrapper registro-pagina\">\r\n        <div class=\"brand\">\r\n          <img src=\"/assets/imagenes/boardGames.png\">\r\n        </div>\r\n        <div class=\"card fat\">\r\n          <div class=\"card-body\">\r\n            <h4 class=\"card-title\">Creá tu cuenta</h4>\r\n            <form (ngSubmit)=\"f.form.valid && acepTYC.valid && Registrarse()\" #f=\"ngForm\" novalidate>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"name\">Nombre</label>\r\n                <input type=\"text\" class=\"form-control\" name=\"name\" id=\"name\" [(ngModel)]=\"nombreModel\"\r\n                  #name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required autofocus>\r\n                <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"name.errors.required\">Nombre requerido</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"email\">Dirección de Email</label>\r\n                <input type=\"email\" class=\"form-control\" name=\"email\" id=\"email\" [(ngModel)]=\"emailModel\"\r\n                  #email=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\" required>\r\n                <div *ngIf=\"f.submitted && email.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"email.errors.required\">Email requerido</div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"password\">Contraseña</label>\r\n                <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)]=\"passwordModel\"\r\n                  #password=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\" required>\r\n                <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"password.errors.required\">Contraseña requerida</div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- carga de imágen -->\r\n\r\n              <form class=\"form-group\">\r\n                <label for=\"customFile\">Imágen</label>\r\n                <div class=\"custom-file\">\r\n                  <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" accept=\".png, .jpg\"\r\n                    (change)=\"ImagenCargada($event)\">\r\n                  <label class=\"custom-file-label\" for=\"customFile\">{{imgName}}</label>\r\n                </div>\r\n              </form>\r\n\r\n              <input #imgUsuario type=\"hidden\" [value]=\"urlImagen | async\">\r\n\r\n              <!-- *************** -->\r\n\r\n              <form class=\"margin-bottom\">\r\n                <div class=\"custom-control custom-checkbox\">\r\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"customCheck\" name=\"customCheck\"\r\n                    [(ngModel)]=\"accepted\" #acepTYC=\"ngModel\"\r\n                    [ngClass]=\"{ 'is-invalid': f.submitted && acepTYC.invalid }\" required>\r\n                  <label class=\"custom-control-label\" for=\"customCheck\">Acepto los términos y\r\n                    condiciones</label>\r\n                </div>\r\n              </form>\r\n\r\n              <div class=\"form-group no-margin mt-3\">\r\n\r\n                <ng-container *ngIf=\"(urlImagen | async) || noCargando; else registroDeshabilitado\">\r\n                  <button type=\"submit\" class=\"btn btn-primary btn-block\">\r\n                    Registrarse\r\n                  </button>\r\n                </ng-container>\r\n\r\n                <ng-template #registroDeshabilitado>\r\n                  <button type=\"submit\" disabled=true class=\"btn btn-secondary btn-block\">\r\n                    Registrarse\r\n                  </button>\r\n                </ng-template>\r\n\r\n              </div>\r\n              <div class=\"margin-top20 text-center\">\r\n                Ya tenés una cuenta? <a routerLink=\"/logearse\">Ingresá</a>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/componentes/ta-te-ti/ta-te-ti.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/componentes/ta-te-ti/ta-te-ti.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h3 *ngIf=\"!gameOver\">Current player: {{ currentPlayer.name }}</h3>\n<h3 *ngIf=\"gameOver && lastWinner == PLAYER_HUMAN\">You win</h3>\n<h3 *ngIf=\"gameOver && lastWinner == PLAYER_COMPUTER\">Computer wins</h3>\n<h3 *ngIf=\"gameOver && lastWinner == DRAW\">It's a draw</h3>\n\n<div id=\"board\" [class.locked]=\"boardLocked || gameOver\">\n  <div *ngFor=\"let square of board\" class=\"square\" [class.checked]=\"square.value != ''\" [class.winner]=\"square.winner\"\n    (click)=\"square_click(this.square)\">\n    {{ square.value }}\n  </div>\n</div>\n\n<input type=\"button\" value=\"Play again\" *ngIf=\"gameOver\" (click)=\"newGame()\" /> -->\n\n<form name=\"juego\">\n  <div class=\"container\">\n    <h3 *ngIf=\"!gameOver\">Turno de: {{ currentPlayer.name }}</h3>\n    <div class=\"cardGame\">\n\n      <!-- <h1>{{palabra}}</h1>\n      <h3>{{timeLeft}}</h3> -->\n      <div class=\"row\" style=\"padding: 5%;\">\n        <div id=\"board\" [class.locked]=\"boardLocked || gameOver\">\n          <div *ngFor=\"let square of board\" class=\"square\" [class.checked]=\"square.value != ''\"\n            [class.winner]=\"square.winner\" (click)=\"square_click(this.square)\">\n            {{ square.value }}\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <!-- <input type=\"button\" value=\"Play again\" *ngIf=\"gameOver\" (click)=\"newGame()\" /> -->\n        <button id=\"btnRestart\" type=\"button\" value=\"Play again\" class=\"btn btn-secondary\" *ngIf=\"gameOver\"\n          (click)=\"newGame()\">Jugar de nuevo</button>\n      </div>\n\n\n    </div>\n    <button id=\"btnSalir\" type=\"button\" class=\"float-right mt-3 btn btn-secondary\" (click)=\"salir()\">Salir</button>\n  </div>\n</form>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/lista-usuarios/lista-usuarios.component */ "./src/app/componentes/lista-usuarios/lista-usuarios.component.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_memoriza_las_teclas_memoriza_las_teclas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/memoriza-las-teclas/memoriza-las-teclas.component */ "./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.ts");
/* harmony import */ var _componentes_lista_puntuaciones_lista_puntuaciones_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/lista-puntuaciones/lista-puntuaciones.component */ "./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _componentes_ta_te_ti_ta_te_ti_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./componentes/ta-te-ti/ta-te-ti.component */ "./src/app/componentes/ta-te-ti/ta-te-ti.component.ts");















const routes = [
    { path: '', component: _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"] },
    { path: 'logearse', component: _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'QuienSoy', component: _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_7__["QuienSoyComponent"] },
    { path: 'registrarse', component: _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_5__["RegistroComponent"] },
    { path: 'jugadores', component: _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_6__["ListaUsuariosComponent"] },
    { path: 'resultados', component: _componentes_lista_puntuaciones_lista_puntuaciones_component__WEBPACK_IMPORTED_MODULE_10__["ListaPuntuacionComponent"] },
    {
        path: 'juegos', children: [
            { path: '', component: _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_8__["MenuCardComponent"] },
            { path: 'adivina', component: _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_11__["AdivinaElNumeroComponent"] },
            { path: 'agilidad', component: _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_12__["AgilidadAritmeticaComponent"] },
            { path: 'ppt', component: _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_13__["PiedraPapelTijeraComponent"] },
            { path: 'tateti', component: _componentes_ta_te_ti_ta_te_ti_component__WEBPACK_IMPORTED_MODULE_14__["TaTeTiComponent"] },
            { path: 'memokey', component: _componentes_memoriza_las_teclas_memoriza_las_teclas_component__WEBPACK_IMPORTED_MODULE_9__["MemorizaLasTeclasComponent"] }
        ]
    }
    // { path: '**', component: ErrorComponent },
    // { path: 'error', component: ErrorComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html")
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./componentes/principal/principal.component */ "./src/app/componentes/principal/principal.component.ts");
/* harmony import */ var _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./componentes/cabecera/cabecera.component */ "./src/app/componentes/cabecera/cabecera.component.ts");
/* harmony import */ var _componentes_pie_pie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./componentes/pie/pie.component */ "./src/app/componentes/pie/pie.component.ts");
/* harmony import */ var _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./componentes/menu/menu.component */ "./src/app/componentes/menu/menu.component.ts");
/* harmony import */ var _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./componentes/login/login.component */ "./src/app/componentes/login/login.component.ts");
/* harmony import */ var _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./componentes/registro/registro.component */ "./src/app/componentes/registro/registro.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./componentes/lista-usuarios/lista-usuarios.component */ "./src/app/componentes/lista-usuarios/lista-usuarios.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./componentes/quien-soy/quien-soy.component */ "./src/app/componentes/quien-soy/quien-soy.component.ts");
/* harmony import */ var _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./componentes/menu-card/menu-card.component */ "./src/app/componentes/menu-card/menu-card.component.ts");
/* harmony import */ var _componentes_memoriza_las_teclas_memoriza_las_teclas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./componentes/memoriza-las-teclas/memoriza-las-teclas.component */ "./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.ts");
/* harmony import */ var _componentes_lista_puntuaciones_lista_puntuaciones_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./componentes/lista-puntuaciones/lista-puntuaciones.component */ "./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.ts");
/* harmony import */ var _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./componentes/adivina-el-numero/adivina-el-numero.component */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts");
/* harmony import */ var _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./componentes/agilidad-aritmetica/agilidad-aritmetica.component */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts");
/* harmony import */ var _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./componentes/piedra-papel-tijera/piedra-papel-tijera.component */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts");
/* harmony import */ var _componentes_ta_te_ti_ta_te_ti_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./componentes/ta-te-ti/ta-te-ti.component */ "./src/app/componentes/ta-te-ti/ta-te-ti.component.ts");




























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _componentes_principal_principal_component__WEBPACK_IMPORTED_MODULE_5__["PrincipalComponent"],
            _componentes_cabecera_cabecera_component__WEBPACK_IMPORTED_MODULE_6__["CabeceraComponent"],
            _componentes_pie_pie_component__WEBPACK_IMPORTED_MODULE_7__["PieComponent"],
            _componentes_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
            _componentes_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _componentes_registro_registro_component__WEBPACK_IMPORTED_MODULE_10__["RegistroComponent"],
            _componentes_lista_usuarios_lista_usuarios_component__WEBPACK_IMPORTED_MODULE_18__["ListaUsuariosComponent"],
            _componentes_quien_soy_quien_soy_component__WEBPACK_IMPORTED_MODULE_20__["QuienSoyComponent"],
            _componentes_menu_card_menu_card_component__WEBPACK_IMPORTED_MODULE_21__["MenuCardComponent"],
            _componentes_memoriza_las_teclas_memoriza_las_teclas_component__WEBPACK_IMPORTED_MODULE_22__["MemorizaLasTeclasComponent"],
            _componentes_lista_puntuaciones_lista_puntuaciones_component__WEBPACK_IMPORTED_MODULE_23__["ListaPuntuacionComponent"],
            _componentes_adivina_el_numero_adivina_el_numero_component__WEBPACK_IMPORTED_MODULE_24__["AdivinaElNumeroComponent"],
            _componentes_agilidad_aritmetica_agilidad_aritmetica_component__WEBPACK_IMPORTED_MODULE_25__["AgilidadAritmeticaComponent"],
            _componentes_piedra_papel_tijera_piedra_papel_tijera_component__WEBPACK_IMPORTED_MODULE_26__["PiedraPapelTijeraComponent"],
            _componentes_ta_te_ti_ta_te_ti_component__WEBPACK_IMPORTED_MODULE_27__["TaTeTiComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_12__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_14__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_16__["AngularFirestoreModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _material_material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/clases/juego-adivina.ts":
/*!*****************************************!*\
  !*** ./src/app/clases/juego-adivina.ts ***!
  \*****************************************/
/*! exports provided: JuegoAdivina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAdivina", function() { return JuegoAdivina; });
/* harmony import */ var _clases_juego__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../clases/juego */ "./src/app/clases/juego.ts");

class JuegoAdivina extends _clases_juego__WEBPACK_IMPORTED_MODULE_0__["Juego"] {
    constructor(nombre, gano, jugador) {
        super("Adivina el número", gano, jugador);
        this.numeroSecreto = 0;
        this.numeroIngresado = 0;
    }
    verificar() {
        if (this.numeroIngresado == this.numeroSecreto) {
            this.gano = true;
        }
        if (this.gano) {
            return true;
        }
        else {
            return false;
        }
    }
    generarnumero() {
        this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
        console.info('numero Secreto:' + this.numeroSecreto);
        this.gano = false;
    }
    retornarAyuda() {
        if (this.numeroIngresado < this.numeroSecreto) {
            return "Falta";
        }
        return "Te pasaste";
    }
}


/***/ }),

/***/ "./src/app/clases/juego-agilidad.ts":
/*!******************************************!*\
  !*** ./src/app/clases/juego-agilidad.ts ***!
  \******************************************/
/*! exports provided: JuegoAgilidad */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JuegoAgilidad", function() { return JuegoAgilidad; });
class JuegoAgilidad {
    randomValores() {
        this.primerNumero = Math.floor(Math.random() * 50) + 1;
        this.segundoNumero = Math.floor(Math.random() * 50) + 1;
        let numOperador = Math.floor(Math.random() * 3);
        switch (numOperador) {
            case 0:
                this.operador = "+";
                break;
            case 1:
                this.operador = "*";
                break;
            case 2:
                this.operador = "-";
                break;
            // case 3:
            //     this.operador = "/";
            //     break;
        }
    }
}


/***/ }),

/***/ "./src/app/clases/juego.ts":
/*!*********************************!*\
  !*** ./src/app/clases/juego.ts ***!
  \*********************************/
/*! exports provided: Juego */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Juego", function() { return Juego; });
class Juego {
    constructor(nombre, gano, jugador) {
        this.nombre = 'Sin Nombre';
        this.gano = false;
        if (nombre)
            this.nombre = nombre;
        if (gano)
            this.gano = gano;
        if (jugador)
            this.jugador = jugador;
        else
            this.jugador = "natalia natalia";
    }
    retornarAyuda() {
        return "NO hay Ayuda definida";
    }
}


/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 5%;\n}\n\n.cardGame {\n  background-color: #1abc9c;\n  text-align: center;\n  padding: 5rem;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXFRQLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItXFxTYWxhLWRlLUp1ZWdvcy12Mi9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXGFkaXZpbmEtZWwtbnVtZXJvXFxhZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvYWRpdmluYS1lbC1udW1lcm8vYWRpdmluYS1lbC1udW1lcm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2FkaXZpbmEtZWwtbnVtZXJvL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSx5QkVORztFRk9ILGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9hZGl2aW5hLWVsLW51bWVyby9hZGl2aW5hLWVsLW51bWVyby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5jYXJkR2FtZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmNhcmRHYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM5YztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufSIsIi8vIFNldCBjdXN0b20gY29sb3JzXHJcbiR0ZWFsOiAjMWFiYzljICFkZWZhdWx0O1xyXG4kdGVhbDI6ICNiMmYwZTMgIWRlZmF1bHQ7XHJcbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcclxuJGJsYWNrOiBibGFjaztcclxuJGRhcmstYmx1ZTogIzJjM2U1MCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBwcmltYXJ5IGFuZCBzZWNvbmRhcnkgY29sb3JzXHJcbiRwcmltYXJ5OiAkdGVhbCAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogJGRhcmstYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0LXByaW1hcnk6ICR0ZWFsMiAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBmb250IHZhcmlhYmxlc1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJMYXRvXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogMTAwMCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0LWJpZ2dlcjogMTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBib3JkZXIgdmFyaWFibGVzXHJcbiRib3JkZXItd2lkdGg6IDAuMTI1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogMC41cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMC43NXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgaW5wdXQvYnV0dG9uIHZhcmlhYmxlc1xyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBtb2RhbCB2YXJpYWJsZXNcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDRyZW0gMXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/componentes/adivina-el-numero/adivina-el-numero.component.ts ***!
  \******************************************************************************/
/*! exports provided: AdivinaElNumeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdivinaElNumeroComponent", function() { return AdivinaElNumeroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-adivina */ "./src/app/clases/juego-adivina.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");







let AdivinaElNumeroComponent = class AdivinaElNumeroComponent {
    constructor(usuarioServe, dataApi, router) {
        this.usuarioServe = usuarioServe;
        this.dataApi = dataApi;
        this.router = router;
        this.enviarJuego = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nuevoJuego = new _clases_juego_adivina__WEBPACK_IMPORTED_MODULE_2__["JuegoAdivina"]();
        console.info("Número secreto:", this.nuevoJuego.numeroSecreto);
        this.ocultarVerificar = false;
    }
    ngOnInit() {
    }
    generarnumero() {
        this.nuevoJuego.generarnumero();
        this.contador = 0;
    }
    verificar() {
        this.contador++;
        this.ocultarVerificar = true;
        console.info("Número secreto:", this.nuevoJuego.gano);
        if (this.nuevoJuego.verificar()) {
            this.enviarJuego.emit(this.nuevoJuego);
            this.MostarMensaje("Sos un Genio!!!", true);
            this.nuevoJuego.numeroSecreto = 0;
        }
        else {
            let mensaje;
            switch (this.contador) {
                case 1:
                    mensaje = "Ese no es, intento fallido, metele pila";
                    break;
                case 2:
                    mensaje = "Tampoco, te estarás acercando???";
                    break;
                case 3:
                    mensaje = "No es, la tercera no es la vencida parece ser..";
                    break;
                case 4:
                    mensaje = "No era ese juntamente";
                    break;
                case 5:
                    mensaje = "Tantos intentos y todavía nada.";
                    break;
                case 6:
                    mensaje = "Afortunado en el amor";
                    break;
                default:
                    mensaje = "Ya le erraste " + this.contador + " veces";
                    break;
            }
            this.MostarMensaje("#" + this.contador + " " + mensaje + "\nAYUDA: " + this.nuevoJuego.retornarAyuda());
        }
        console.info("numero Secreto: ", this.nuevoJuego.gano);
    }
    MostarMensaje(mensaje = "este es el mensaje", ganador = false) {
        this.Mensajes = mensaje;
        if (ganador) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                type: 'success',
                title: 'Ganaste!',
                timer: 1500
            });
            this.guardarResultados();
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                position: 'top-end',
                type: 'info',
                title: mensaje,
                showConfirmButton: false,
                timer: 2500
            });
        }
        var modelo = this;
        setTimeout(function () {
            modelo.ocultarVerificar = false;
        }, 3000);
    }
    guardarResultados() {
        let img = "assets/imagenes/default-user.png";
        let nombre = "Anónimo";
        if (this.usuarioServe.usuario.Nombre != "") {
            img = this.usuarioServe.usuario.ImagenUrl;
            nombre = this.usuarioServe.usuario.Nombre;
        }
        let puntos = {
            ImagenUrl: img,
            Jugador: nombre,
            Juego: "Adivina el Número",
            Puntuacion: "Ganó en " + this.contador.toString() + " intento/s"
        };
        this.dataApi.AgregarUno(puntos, "puntuacion");
    }
    salir() {
        this.router.navigate(['/juegos']);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], AdivinaElNumeroComponent.prototype, "enviarJuego", void 0);
AdivinaElNumeroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-adivina-el-numero',
        template: __webpack_require__(/*! raw-loader!./adivina-el-numero.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/adivina-el-numero/adivina-el-numero.component.html"),
        styles: [__webpack_require__(/*! ./adivina-el-numero.component.scss */ "./src/app/componentes/adivina-el-numero/adivina-el-numero.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"], src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_6__["DataApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AdivinaElNumeroComponent);



/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 5%;\n}\n\n.cardGame {\n  background-color: #1abc9c;\n  text-align: center;\n  padding: 5rem;\n  border-radius: 25px;\n}\n\ndl, ol, ul {\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtYXJpdG1ldGljYS9EOlxcQ2FycGV0YXMgVXN1YXJpb1xcRXNjcml0b3Jpb1xcV29ya2luZ1xcVFAtU2FsYS1kZS1KdWVnb3MtQU5HVUxBUi1cXFNhbGEtZGUtSnVlZ29zLXYyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcYWdpbGlkYWQtYXJpdG1ldGljYVxcYWdpbGlkYWQtYXJpdG1ldGljYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtYXJpdG1ldGljYS9hZ2lsaWRhZC1hcml0bWV0aWNhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9hZ2lsaWRhZC1hcml0bWV0aWNhL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSx5QkVORztFRk9ILGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxxQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvYWdpbGlkYWQtYXJpdG1ldGljYS9hZ2lsaWRhZC1hcml0bWV0aWNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNhcmRHYW1lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmc6IDVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG5kbCwgb2wsIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY2FyZEdhbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbmRsLCBvbCwgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59IiwiLy8gU2V0IGN1c3RvbSBjb2xvcnNcclxuJHRlYWw6ICMxYWJjOWMgIWRlZmF1bHQ7XHJcbiR0ZWFsMjogI2IyZjBlMyAhZGVmYXVsdDtcclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kZGFyay1ibHVlOiAjMmMzZTUwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHByaW1hcnkgYW5kIHNlY29uZGFyeSBjb2xvcnNcclxuJHByaW1hcnk6ICR0ZWFsICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAkZGFyay1ibHVlICFkZWZhdWx0O1xyXG4kbGlnaHQtcHJpbWFyeTogJHRlYWwyICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGZvbnQgdmFyaWFibGVzXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIkxhdG9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAxMDAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtYmlnZ2VyOiAxMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGJvcmRlciB2YXJpYWJsZXNcclxuJGJvcmRlci13aWR0aDogMC4xMjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBpbnB1dC9idXR0b24gdmFyaWFibGVzXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIG1vZGFsIHZhcmlhYmxlc1xyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogNHJlbSAxcmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AgilidadAritmeticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgilidadAritmeticaComponent", function() { return AgilidadAritmeticaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clases/juego-agilidad */ "./src/app/clases/juego-agilidad.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





// import { Subscription } from "rxjs";
// import {TimerObservable} from "rxjs/observable/TimerObservable";
let AgilidadAritmeticaComponent = class AgilidadAritmeticaComponent {
    constructor(router) {
        this.router = router;
        this.ocultarVerificar = true;
        this.Tiempo = 10;
        this.nuevoJuego = new _clases_juego_agilidad__WEBPACK_IMPORTED_MODULE_2__["JuegoAgilidad"]();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        clearInterval(this.repetidor);
    }
    NuevoJuego() {
        this.nuevoJuego.randomValores();
        this.ocultarVerificar = false;
        // clearInterval(this.repetidor);
        this.repetidor = setInterval(() => {
            this.Tiempo--;
            if (this.Tiempo == 0) {
                // clearInterval(this.repetidor);
                this.Verificar();
                this.ocultarVerificar = true;
            }
        }, 900);
        window.setTimeout(function () {
            document.getElementById('inputNumero').focus();
            document.getElementById('inputNumero')["value"] = "";
        }, 0);
    }
    Verificar() {
        let result;
        clearInterval(this.repetidor);
        switch (this.nuevoJuego.operador) {
            case "+":
                result = this.nuevoJuego.primerNumero + this.nuevoJuego.segundoNumero;
                break;
            case "*":
                result = this.nuevoJuego.primerNumero * this.nuevoJuego.segundoNumero;
                break;
            // case "/":
            //   result = this.nuevoJuego.primerNumero / this.nuevoJuego.segundoNumero;
            //   break;
            case "-":
                result = this.nuevoJuego.primerNumero - this.nuevoJuego.segundoNumero;
                break;
        }
        if (result == this.nuevoJuego.numeroIngresado) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Ganaste!',
                animation: false,
                type: 'success',
                customClass: {
                    popup: 'animated tada'
                }
            }).then(() => {
                this.ocultarVerificar = true;
                this.Tiempo = 10;
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Perdiste!',
                animation: false,
                type: 'error',
                customClass: {
                    popup: 'animated tada'
                }
            }).then(() => {
                this.ocultarVerificar = true;
                this.Tiempo = 10;
            });
        }
    }
    salir() {
        this.router.navigate(['/juegos']);
    }
};
AgilidadAritmeticaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-agilidad-aritmetica',
        template: __webpack_require__(/*! raw-loader!./agilidad-aritmetica.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.html"),
        styles: [__webpack_require__(/*! ./agilidad-aritmetica.component.scss */ "./src/app/componentes/agilidad-aritmetica/agilidad-aritmetica.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], AgilidadAritmeticaComponent);



/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainNav {\n  font-family: \"Montserrat\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  font-weight: 1000;\n  background-color: black;\n}\n#mainNav .navbar-brand {\n  color: #fff;\n}\n#mainNav .navbar-brand:hover {\n  color: #1abc9c;\n}\n#mainNav .navbar-nav {\n  margin-top: 1rem;\n}\n#mainNav .navbar-nav li.nav-item a.nav-link {\n  color: #fff;\n}\n#mainNav .navbar-nav li.nav-item a.nav-link:hover {\n  color: #1abc9c;\n}\n#mainNav .navbar-nav li.nav-item a.nav-link.active {\n  color: #1abc9c;\n}\n#mainNav .navbar-toggler {\n  font-size: 80%;\n  padding: 0.8rem;\n}\n@media (min-width: 992px) {\n  #mainNav {\n    transition: padding-top 0.3s, padding-bottom 0.3s;\n  }\n  #mainNav .navbar-brand {\n    font-size: 1.75em;\n    transition: font-size 0.3s;\n  }\n  #mainNav .navbar-brand:hover {\n    font-size: 1.8em;\n  }\n  #mainNav .navbar-nav {\n    margin-top: 0;\n  }\n}\n#btnMenuToggle {\n  background-color: #1abc9c;\n}\n#btnMenuToggle:focus {\n  outline: none;\n}\n.user-img {\n  width: 28px;\n  height: 28px;\n  margin-right: 10px;\n  border-radius: 50%;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXFRQLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItXFxTYWxhLWRlLUp1ZWdvcy12Mi9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXGNhYmVjZXJhXFxjYWJlY2VyYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXFRQLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItXFxTYWxhLWRlLUp1ZWdvcy12Mi9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2NhYmVjZXJhL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxnTkNVcUI7RURUckIsaUJDVXFCO0VEVHJCLHVCQ0ZNO0FDQVI7QUZHRTtFQUNFLFdDTEk7QUNJUjtBRkVJO0VBQ0UsY0NUQztBQ1NQO0FGR0U7RUFDRSxnQkFBQTtBRURKO0FGR007RUFDRSxXQ2RBO0FDYVI7QUZFUTtFQUNFLGNDbEJIO0FDa0JQO0FGRVE7RUFDRSxjQ3JCSDtBQ3FCUDtBRktFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUVISjtBQ2tDSTtFSDNCRjtJQUNFLGlEQUFBO0VFSEY7RUZJRTtJQUNFLGlCQUFBO0lBQ0EsMEJBQUE7RUVGSjtFRkdJO0lBQ0UsZ0JBQUE7RUVETjtFRklFO0lBQ0UsYUFBQTtFRUZKO0FBQ0Y7QUZNQTtFQUNFLHlCQ2hESztBQzRDUDtBRktFO0VBQ0UsYUFBQTtBRUhKO0FGT0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBRUpKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvY2FiZWNlcmEvY2FiZWNlcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJzcmMvc2Nzcy9jb21wXCI7XHJcblxyXG4jbWFpbk5hdiB7XHJcbiAgZm9udC1mYW1pbHk6ICRoZWFkaW5ncy1mb250LWZhbWlseTtcclxuICBmb250LXdlaWdodDogJGhlYWRpbmdzLWZvbnQtd2VpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcclxuICAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgfVxyXG4gIH1cclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbGkubmF2LWl0ZW0ge1xyXG4gICAgICBhLm5hdi1saW5rIHtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogJHByaW1hcnk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIHBhZGRpbmc6IDAuOHJlbTtcclxuICB9XHJcbn1cclxuQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xyXG4gICNtYWluTmF2IHtcclxuICAgIHRyYW5zaXRpb246IHBhZGRpbmctdG9wIDAuM3MsIHBhZGRpbmctYm90dG9tIDAuM3M7XHJcbiAgICAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgZm9udC1zaXplOiAxLjc1ZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzO1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmF2YmFyLW5hdiB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jYnRuTWVudVRvZ2dsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnVzZXItaW1nIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLDAsMCwuMDUpO1xyXG59IiwiLy8gU2V0IGN1c3RvbSBjb2xvcnNcclxuJHRlYWw6ICMxYWJjOWMgIWRlZmF1bHQ7XHJcbiR0ZWFsMjogI2IyZjBlMyAhZGVmYXVsdDtcclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kZGFyay1ibHVlOiAjMmMzZTUwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHByaW1hcnkgYW5kIHNlY29uZGFyeSBjb2xvcnNcclxuJHByaW1hcnk6ICR0ZWFsICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAkZGFyay1ibHVlICFkZWZhdWx0O1xyXG4kbGlnaHQtcHJpbWFyeTogJHRlYWwyICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGZvbnQgdmFyaWFibGVzXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIkxhdG9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAxMDAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtYmlnZ2VyOiAxMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGJvcmRlciB2YXJpYWJsZXNcclxuJGJvcmRlci13aWR0aDogMC4xMjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBpbnB1dC9idXR0b24gdmFyaWFibGVzXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIG1vZGFsIHZhcmlhYmxlc1xyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogNHJlbSAxcmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiIsIiNtYWluTmF2IHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgXCJOb3RvIENvbG9yIEVtb2ppXCI7XG4gIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbiNtYWluTmF2IC5uYXZiYXItYnJhbmQge1xuICBjb2xvcjogI2ZmZjtcbn1cbiNtYWluTmF2IC5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICBjb2xvcjogIzFhYmM5Yztcbn1cbiNtYWluTmF2IC5uYXZiYXItbmF2IHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbiNtYWluTmF2IC5uYXZiYXItbmF2IGxpLm5hdi1pdGVtIGEubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmZjtcbn1cbiNtYWluTmF2IC5uYXZiYXItbmF2IGxpLm5hdi1pdGVtIGEubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogIzFhYmM5Yztcbn1cbiNtYWluTmF2IC5uYXZiYXItbmF2IGxpLm5hdi1pdGVtIGEubmF2LWxpbmsuYWN0aXZlIHtcbiAgY29sb3I6ICMxYWJjOWM7XG59XG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXIge1xuICBmb250LXNpemU6IDgwJTtcbiAgcGFkZGluZzogMC44cmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI21haW5OYXYge1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmctdG9wIDAuM3MsIHBhZGRpbmctYm90dG9tIDAuM3M7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3M7XG4gIH1cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZDpob3ZlciB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgfVxuICAjbWFpbk5hdiAubmF2YmFyLW5hdiB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxufVxuI2J0bk1lbnVUb2dnbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xufVxuI2J0bk1lbnVUb2dnbGU6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udXNlci1pbWcge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/cabecera/cabecera.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/cabecera/cabecera.component.ts ***!
  \************************************************************/
/*! exports provided: CabeceraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceraComponent", function() { return CabeceraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let CabeceraComponent = class CabeceraComponent {
    constructor(usuarioService, dataApi) {
        this.usuarioService = usuarioService;
        this.dataApi = dataApi;
    }
    ngOnInit() {
        this.TraerUsuarioActual();
    }
    TraerUsuarioActual() {
        this.usuarioService.EstaLogeado().subscribe(user => {
            if (user) {
                this.dataApi.TraerUno(user.uid, 'usuarios').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(userx => {
                    this.usuarioService.usuario = userx;
                    this.imageUrl = this.usuarioService.usuario.ImagenUrl;
                    this.nombre = this.usuarioService.usuario.Nombre;
                });
                this.estaLogeado = true;
            }
            else {
                this.estaLogeado = false;
            }
        });
    }
    Deslogearse() {
        this.usuarioService.DeslogearUsuario();
    }
};
CabeceraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cabecera',
        template: __webpack_require__(/*! raw-loader!./cabecera.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/cabecera/cabecera.component.html"),
        styles: [__webpack_require__(/*! ./cabecera.component.scss */ "./src/app/componentes/cabecera/cabecera.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_3__["DataApiService"]])
], CabeceraComponent);



/***/ }),

/***/ "./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  background-color: #1abc9c;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.user-img {\n  width: 28px;\n  height: 28px;\n  margin-right: 10px;\n  border-radius: 50%;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  color: #fff;\n  font-size: large;\n}\n\n.no-resultados {\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGEtcHVudHVhY2lvbmVzL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxsaXN0YS1wdW50dWFjaW9uZXNcXGxpc3RhLXB1bnR1YWNpb25lcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGEtcHVudHVhY2lvbmVzL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhLXB1bnR1YWNpb25lcy9saXN0YS1wdW50dWFjaW9uZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EseUJDSEs7QUNFUDs7QUZJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FFREY7O0FGR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBRUFGOztBRkdBO0VBQ0UsV0NqQk07RURrQk4sZ0JBQUE7QUVBRjs7QUZHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FFQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9saXN0YS1wdW50dWFjaW9uZXMvbGlzdGEtcHVudHVhY2lvbmVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udXNlci1pbWcge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG5cclxudGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuXHJcbi5uby1yZXN1bHRhZG9zIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59IiwiLy8gU2V0IGN1c3RvbSBjb2xvcnNcclxuJHRlYWw6ICMxYWJjOWMgIWRlZmF1bHQ7XHJcbiR0ZWFsMjogI2IyZjBlMyAhZGVmYXVsdDtcclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kZGFyay1ibHVlOiAjMmMzZTUwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHByaW1hcnkgYW5kIHNlY29uZGFyeSBjb2xvcnNcclxuJHByaW1hcnk6ICR0ZWFsICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAkZGFyay1ibHVlICFkZWZhdWx0O1xyXG4kbGlnaHQtcHJpbWFyeTogJHRlYWwyICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGZvbnQgdmFyaWFibGVzXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIkxhdG9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAxMDAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtYmlnZ2VyOiAxMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGJvcmRlciB2YXJpYWJsZXNcclxuJGJvcmRlci13aWR0aDogMC4xMjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBpbnB1dC9idXR0b24gdmFyaWFibGVzXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIG1vZGFsIHZhcmlhYmxlc1xyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogNHJlbSAxcmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VyLWltZyB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG50ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLm5vLXJlc3VsdGFkb3Mge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListaPuntuacionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaPuntuacionComponent", function() { return ListaPuntuacionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ListaPuntuacionComponent = class ListaPuntuacionComponent {
    constructor(dataApi, usuarioService) {
        this.dataApi = dataApi;
        this.usuarioService = usuarioService;
        this.displayedColumns = ['ImagenUrl', 'Jugador', 'Juego', 'Puntuacion'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.puntuaciones);
        this.noData = this.dataSource.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => data.length === 0));
    }
    ngOnInit() {
        this.dataApi.TraerTodos('puntuacion')
            .subscribe(puntuaciones => {
            this.puntuaciones = puntuaciones;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.puntuaciones);
            this.noData = this.dataSource.connect().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((data) => data.length === 0));
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
};
ListaPuntuacionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-puntuaciones',
        template: __webpack_require__(/*! raw-loader!./lista-puntuaciones.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.html"),
        styles: [__webpack_require__(/*! ./lista-puntuaciones.component.scss */ "./src/app/componentes/lista-puntuaciones/lista-puntuaciones.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"], src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]])
], ListaPuntuacionComponent);



/***/ }),

/***/ "./src/app/componentes/lista-usuarios/lista-usuarios.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/componentes/lista-usuarios/lista-usuarios.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%;\n  background-color: #1abc9c;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.user-img {\n  width: 28px;\n  height: 28px;\n  margin-right: 10px;\n  border-radius: 50%;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\ntd.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  color: #fff;\n  font-size: large;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGEtdXN1YXJpb3MvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXFRQLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItXFxTYWxhLWRlLUp1ZWdvcy12Mi9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXGxpc3RhLXVzdWFyaW9zXFxsaXN0YS11c3Vhcmlvcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGEtdXN1YXJpb3MvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXFRQLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItXFxTYWxhLWRlLUp1ZWdvcy12Mi9zcmNcXHNjc3NcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbGlzdGEtdXN1YXJpb3MvbGlzdGEtdXN1YXJpb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxXQUFBO0VBQ0EseUJDSEs7QUNFUDs7QUZJQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FFREY7O0FGR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtBRUFGOztBRkdBO0VBQ0UsV0NqQk07RURrQk4sZ0JBQUE7QUVBRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xpc3RhLXVzdWFyaW9zL2xpc3RhLXVzdWFyaW9zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udXNlci1pbWcge1xyXG4gIHdpZHRoOiAyOHB4O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG5cclxudGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcclxuICBjb2xvcjogJHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn0iLCIvLyBTZXQgY3VzdG9tIGNvbG9yc1xyXG4kdGVhbDogIzFhYmM5YyAhZGVmYXVsdDtcclxuJHRlYWwyOiAjYjJmMGUzICFkZWZhdWx0O1xyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRibGFjazogYmxhY2s7XHJcbiRkYXJrLWJsdWU6ICMyYzNlNTAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgcHJpbWFyeSBhbmQgc2Vjb25kYXJ5IGNvbG9yc1xyXG4kcHJpbWFyeTogJHRlYWwgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICRkYXJrLWJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodC1wcmltYXJ5OiAkdGVhbDIgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgZm9udCB2YXJpYWJsZXNcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDEwMDAgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1iaWdnZXI6IDEyMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgYm9yZGVyIHZhcmlhYmxlc1xyXG4kYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGlucHV0L2J1dHRvbiB2YXJpYWJsZXNcclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgbW9kYWwgdmFyaWFibGVzXHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiA0cmVtIDFyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuIiwidGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM5Yztcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItaW1nIHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbnRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwsIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IGxhcmdlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/lista-usuarios/lista-usuarios.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/componentes/lista-usuarios/lista-usuarios.component.ts ***!
  \************************************************************************/
/*! exports provided: ListaUsuariosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListaUsuariosComponent", function() { return ListaUsuariosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let ListaUsuariosComponent = class ListaUsuariosComponent {
    constructor(dataApi) {
        this.dataApi = dataApi;
        this.displayedColumns = ['Imágen', 'Nombre', 'Email'];
    }
    ngOnInit() {
        this.dataApi.TraerTodos('usuarios')
            .subscribe(users => {
            this.usuarios = users;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.usuarios);
        });
    }
};
ListaUsuariosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lista-usuarios',
        template: __webpack_require__(/*! raw-loader!./lista-usuarios.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/lista-usuarios/lista-usuarios.component.html"),
        styles: [__webpack_require__(/*! ./lista-usuarios.component.scss */ "./src/app/componentes/lista-usuarios/lista-usuarios.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_2__["DataApiService"]])
], ListaUsuariosComponent);



/***/ }),

/***/ "./src/app/componentes/login/login.component.scss":
/*!********************************************************!*\
  !*** ./src/app/componentes/login/login.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-pagina {\n  font-size: 14px;\n  margin-top: 40px;\n  margin-bottom: 80px;\n  text-align: center;\n}\n\n.login-pagina .brand {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin: 40px auto;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.login-pagina .brand img {\n  width: 100%;\n}\n\n.login-pagina .card-wrapper {\n  width: 400px;\n}\n\n.login-pagina .card {\n  border-color: transparent;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.login-pagina .card.fat {\n  padding: 10px;\n}\n\n.login-pagina .card .card-title {\n  margin-bottom: 30px;\n}\n\n.login-pagina .form-control {\n  border-width: 2.3px;\n}\n\n.login-pagina .form-group label {\n  width: 100%;\n}\n\n.login-pagina .btn.btn-block {\n  padding: 12px 10px;\n}\n\n.login-pagina .margin-top20 {\n  margin-top: 20px;\n}\n\n.login-pagina .no-margin {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXFRQLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItXFxTYWxhLWRlLUp1ZWdvcy12Mi9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7RUFDQSx3Q0FBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLFNBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLXBhZ2luYSB7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdG1hcmdpbi10b3A6IDQwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogODBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdpbmEgLmJyYW5kIHtcclxuXHR3aWR0aDogOTBweDtcclxuXHRoZWlnaHQ6IDkwcHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRib3JkZXItcmFkaXVzOiA1MCU7XHJcblx0bWFyZ2luOiAwIGF1dG87XHJcblx0bWFyZ2luOiA0MHB4IGF1dG87XHJcblx0Ym94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLDAsMCwuMDUpO1xyXG59XHJcblxyXG4ubG9naW4tcGFnaW5hIC5icmFuZCBpbWcge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tcGFnaW5hIC5jYXJkLXdyYXBwZXIge1xyXG5cdHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2luYSAuY2FyZCB7XHJcblx0Ym9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHRib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsMCwwLC4wNSk7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdpbmEgLmNhcmQuZmF0IHtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4tcGFnaW5hIC5jYXJkIC5jYXJkLXRpdGxlIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ubG9naW4tcGFnaW5hIC5mb3JtLWNvbnRyb2wge1xyXG5cdGJvcmRlci13aWR0aDogMi4zcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdpbmEgLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubG9naW4tcGFnaW5hIC5idG4uYnRuLWJsb2NrIHtcclxuXHRwYWRkaW5nOiAxMnB4IDEwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1wYWdpbmEgLm1hcmdpbi10b3AyMCB7XHJcblx0bWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLmxvZ2luLXBhZ2luYSAubm8tbWFyZ2luIHtcclxuXHRtYXJnaW46IDA7XHJcbn0iLCIubG9naW4tcGFnaW5hIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1wYWdpbmEgLmJyYW5kIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5sb2dpbi1wYWdpbmEgLmJyYW5kIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubG9naW4tcGFnaW5hIC5jYXJkLXdyYXBwZXIge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5sb2dpbi1wYWdpbmEgLmNhcmQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4ubG9naW4tcGFnaW5hIC5jYXJkLmZhdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5sb2dpbi1wYWdpbmEgLmNhcmQgLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ubG9naW4tcGFnaW5hIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItd2lkdGg6IDIuM3B4O1xufVxuXG4ubG9naW4tcGFnaW5hIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2dpbi1wYWdpbmEgLmJ0bi5idG4tYmxvY2sge1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG59XG5cbi5sb2dpbi1wYWdpbmEgLm1hcmdpbi10b3AyMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5sb2dpbi1wYWdpbmEgLm5vLW1hcmdpbiB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/login/login.component.ts":
/*!******************************************************!*\
  !*** ./src/app/componentes/login/login.component.ts ***!
  \******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");




let LoginComponent = class LoginComponent {
    constructor(usuarioService, router) {
        this.usuarioService = usuarioService;
        this.router = router;
        this.emailModel = "";
        this.passwordModel = "";
    }
    ngOnInit() { }
    Logearse() {
        this.usuarioService.LogearUsuario(this.emailModel, this.passwordModel);
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/componentes/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 5%;\n}\n\n.cardGame {\n  background-color: #1abc9c;\n  text-align: center;\n  padding: 5rem;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVtb3JpemEtbGFzLXRlY2xhcy9EOlxcQ2FycGV0YXMgVXN1YXJpb1xcRXNjcml0b3Jpb1xcV29ya2luZ1xcVFAtU2FsYS1kZS1KdWVnb3MtQU5HVUxBUi1cXFNhbGEtZGUtSnVlZ29zLXYyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcbWVtb3JpemEtbGFzLXRlY2xhc1xcbWVtb3JpemEtbGFzLXRlY2xhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbWVtb3JpemEtbGFzLXRlY2xhcy9tZW1vcml6YS1sYXMtdGVjbGFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9tZW1vcml6YS1sYXMtdGVjbGFzL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSx5QkVORztFRk9ILGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9tZW1vcml6YS1sYXMtdGVjbGFzL21lbW9yaXphLWxhcy10ZWNsYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3Njc3MvdmFyaWFibGVzXCI7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG59XHJcblxyXG4uY2FyZEdhbWUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgcGFkZGluZzogNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuIiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY2FyZEdhbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59IiwiLy8gU2V0IGN1c3RvbSBjb2xvcnNcclxuJHRlYWw6ICMxYWJjOWMgIWRlZmF1bHQ7XHJcbiR0ZWFsMjogI2IyZjBlMyAhZGVmYXVsdDtcclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kZGFyay1ibHVlOiAjMmMzZTUwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHByaW1hcnkgYW5kIHNlY29uZGFyeSBjb2xvcnNcclxuJHByaW1hcnk6ICR0ZWFsICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAkZGFyay1ibHVlICFkZWZhdWx0O1xyXG4kbGlnaHQtcHJpbWFyeTogJHRlYWwyICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGZvbnQgdmFyaWFibGVzXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIkxhdG9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAxMDAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtYmlnZ2VyOiAxMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGJvcmRlciB2YXJpYWJsZXNcclxuJGJvcmRlci13aWR0aDogMC4xMjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBpbnB1dC9idXR0b24gdmFyaWFibGVzXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIG1vZGFsIHZhcmlhYmxlc1xyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogNHJlbSAxcmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.ts ***!
  \**********************************************************************************/
/*! exports provided: MemorizaLasTeclasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemorizaLasTeclasComponent", function() { return MemorizaLasTeclasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






// import { getTranslationForTemplate } from '@angular/core/src/render3/i18n';
let MemorizaLasTeclasComponent = class MemorizaLasTeclasComponent {
    constructor(usuarioServe, dataApi, router) {
        this.usuarioServe = usuarioServe;
        this.dataApi = dataApi;
        this.router = router;
        this.codes = new Array();
        this.palabras = ['Oso', 'Casa', 'Banana', 'Sapo', 'Perro', 'Palabra', 'Calendario', 'Murcielago', 'Arteriosclerosis'];
        this.deshabilitado = false;
        this.puntuacion = 0;
        this.cantidadPalabras = 9;
        this.palabra = this.palabras[0];
        this.indexPalabra = 0;
    }
    ngOnDestroy() {
        clearInterval(this.interval);
    }
    ReiniciarJuego() {
        this.palabra = this.palabras[0];
        this.indexPalabra = 0;
        this.puntuacion = 0;
        this.deshabilitado = false;
        document.getElementById("palabraInput")["value"] = "";
        document.getElementById("btnRestart")["style"]["display"] = "none";
        this.ReiniciarAttr();
        window.setTimeout(function () {
            document.getElementById('palabraInput').focus();
        }, 0);
    }
    ReiniciarAttr() {
        this.lastKeyCode = -1;
        this.indexLetra = 0;
        this.palabra = this.palabras[this.indexPalabra];
        this.lastChar = 0;
        this.input = "";
        clearInterval(this.interval);
        this.timeLeft = 60;
        this.StartTimer();
    }
    ngOnInit() {
        //completamos el array con los cod de todas las letras
        //primero le agregamos el cod de la Ñ al primer objeto del array
        this.codes[0] = new Array(2);
        this.codes[0][0] = 209;
        //luego a lo demás
        let index = 1;
        for (let code = 65; code <= 90; code++) {
            this.codes[index] = new Array(2);
            this.codes[index][0] = code;
            index++;
        }
        this.CodsAleatorios();
        setTimeout(() => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Bienvenido a Memokey!\n\nTu objetivo es completar la palabra indicada en un minuto, pero las letras NO ESTÁN DONDE DEBERÍAN!\n\nTené en cuenta que solo se puede escribir una letra a la vez, asique si no le embocás, tenes que borrarla para escribir otra, podes borrar de la manera tradicional o apretando la misma tecla dos veces!\n\nSuerte!").then(() => {
                this.ReiniciarAttr();
                document.getElementById("palabraInput").focus();
            });
        }, 1000);
    }
    onKeyDown(event) {
        return false;
    }
    onKeyUp(event) {
        let value = document.getElementById("palabraInput")["value"];
        //let value = palabraInput.value;
        //USAR NGMODEL
        let charCode = event.keyCode;
        if (charCode === 8) {
            this.input = value.replace(new RegExp(value.charAt(this.lastChar) + '$'), "");
            document.getElementById("palabraInput")["value"] = this.input;
            this.lastKeyCode = -1;
        }
        else if ((charCode >= 65 && charCode <= 90) || charCode === 192) {
            charCode = charCode === 192 ? 209 : charCode;
            for (let i = 0; i < this.codes.length; i++) {
                if (this.codes[i][0] == charCode) {
                    charCode = this.codes[i][1];
                    break;
                }
            }
            if (this.lastKeyCode == charCode) {
                this.input = value.replace(new RegExp(value.charAt(this.lastChar) + '$'), "");
                document.getElementById("palabraInput")["value"] = this.input;
                this.lastKeyCode = -1;
                return false;
            }
            if (this.input.length == this.indexLetra + 1) {
                return false;
            }
            this.input += String.fromCharCode(charCode);
            document.getElementById("palabraInput")["value"] = this.input;
            if (this.input.length <= this.palabra.length) {
                if (this.palabra[this.indexLetra].toUpperCase() == String.fromCharCode(charCode)) {
                    if (this.input.length == this.palabra.length) {
                        clearInterval(this.interval);
                        this.SiguientePalabra();
                        return false;
                    }
                    this.lastKeyCode = -1;
                    this.lastChar++;
                    this.indexLetra++;
                }
                else {
                    this.lastKeyCode = charCode;
                }
            }
        }
        else {
            return false;
        }
    }
    CodsAleatorios() {
        let aleatoryIndex;
        let indexUsados = new Array();
        for (let code of this.codes) {
            do {
                //obtenemos un numero entre 0 y 26 que es la cantidad de codigos que tenemos
                aleatoryIndex = Math.floor(Math.random() * 27);
                //hacemos esto para que no tengamos el mismo codigo en diferentes teclas
            } while (indexUsados.includes(aleatoryIndex));
            //con ese numero aleatorio como index, buscamos el codigo del array que le corresponde y se lo ponemos al segundo item de cada item del array
            code[1] = this.codes[aleatoryIndex][0];
            indexUsados.push(aleatoryIndex);
        }
    }
    SiguientePalabra() {
        this.deshabilitado = true;
        setTimeout(() => {
            if (this.indexPalabra == this.cantidadPalabras - 1) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Ganaste!',
                    animation: false,
                    type: 'success',
                    customClass: {
                        popup: 'animated tada'
                    }
                });
                this.guardarResultados();
                this.deshabilitado = true;
                document.getElementById("btnRestart")["style"]["display"] = "block";
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    position: 'top-end',
                    type: 'success',
                    title: "Palabra completada! La que sigueee",
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    this.puntuacion += 100;
                    this.indexPalabra++;
                    document.getElementById("palabraInput")["value"] = "";
                    this.ReiniciarAttr();
                    this.CodsAleatorios();
                });
            }
        }, 1000);
        this.deshabilitado = false;
        document.getElementById("palabraInput").focus();
    }
    StartTimer() {
        this.interval = setInterval(() => {
            if (this.timeLeft > 0) {
                this.timeLeft--;
            }
            else {
                clearInterval(this.interval);
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                    title: 'Se acabó el tiempo, PERDISTE',
                    animation: false,
                    type: 'error',
                    customClass: {
                        popup: 'animated tada'
                    }
                });
                this.guardarResultados();
                this.deshabilitado = true;
                document.getElementById("btnRestart")["style"]["display"] = "block";
            }
        }, 1000);
    }
    salir() {
        this.router.navigate(['/juegos']);
    }
    guardarResultados() {
        if (this.puntuacion > 0) {
            let img = "assets/imagenes/default-user.png";
            let nombre = "Anónimo";
            if (this.usuarioServe.usuario.Nombre != "") {
                img = this.usuarioServe.usuario.ImagenUrl;
                nombre = this.usuarioServe.usuario.Nombre;
            }
            let puntos = {
                ImagenUrl: img,
                Jugador: nombre,
                Juego: "Memokey",
                Puntuacion: this.puntuacion.toString()
            };
            this.dataApi.AgregarUno(puntos, "puntuacion");
        }
    }
};
MemorizaLasTeclasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-memoriza-las-teclas',
        template: __webpack_require__(/*! raw-loader!./memoriza-las-teclas.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.html"),
        styles: [__webpack_require__(/*! ./memoriza-las-teclas.component.scss */ "./src/app/componentes/memoriza-las-teclas/memoriza-las-teclas.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], MemorizaLasTeclasComponent);



/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1, h2, h3, h4, h5, h6 {\n  font-family: \"Playfair Display\", serif;\n}\n\np, a {\n  font-family: \"Source Sans Pro\", sans-serif;\n}\n\n/* Generic styles */\n\nhtml {\n  scroll-behavior: smooth;\n}\n\na {\n  background-color: #1abc9c;\n  text-decoration: none;\n  color: white;\n  border-radius: 0.25rem;\n  text-align: center;\n  display: inline-block;\n  transition: all 0.3s;\n}\n\na:hover {\n  opacity: 0.6;\n}\n\n.juegos {\n  padding: 2rem;\n}\n\n.juegos > ul {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(520px, 1fr));\n  grid-gap: 1rem;\n}\n\n.juegos > ul > li {\n  border: 1px solid #E2E2E2;\n  border-radius: 0.5rem;\n  border-color: #1abc9c;\n  background-color: black;\n}\n\n.juegos > ul > li > figure {\n  max-height: 220px;\n  overflow: hidden;\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n  position: relative;\n}\n\n.juegos > ul > li > figure > img {\n  width: 100%;\n}\n\n.juegos > ul > li > figure > figcaption {\n  position: absolute;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  width: 100%;\n}\n\n.juegos > ul > li > figure > figcaption > h3 {\n  color: white;\n  padding: 0.75rem;\n  font-size: 1.25rem;\n}\n\n.juegos > ul > li > p {\n  font-size: 1rem;\n  line-height: 1.5;\n  padding: 1rem 0.75rem;\n  color: white;\n}\n\n.juegos > ul > li > a {\n  padding: 0.5rem 1rem;\n  margin: 0.5rem;\n}\n\ndl, ol, ul {\n  list-style-type: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxtZW51LWNhcmRcXG1lbnUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxzQ0FBQTtBQ0ZGOztBREtBO0VBQ0UsMENBQUE7QUNGRjs7QURLQSxtQkFBQTs7QUFDQTtFQUNFLHVCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkVoQks7RUZpQkwscUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNGRjs7QURLQTtFQUNFLFlBQUE7QUNGRjs7QURNQTtFQUNFLGFBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLGNBQUE7QUNIRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkUzQ0s7RUY0Q0wsdUJBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLFdBQUE7QUNIRjs7QURNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0Usb0JBQUE7RUFDQSxjQUFBO0FDSEY7O0FETUE7RUFDRSxxQkFBQTtBQ0hGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS1jYXJkL21lbnUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcInNyYy9zY3NzL2NvbXBcIjtcclxuXHJcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xyXG59XHJcblxyXG5wLCBhIHtcclxuICBmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi8qIEdlbmVyaWMgc3R5bGVzICovXHJcbmh0bWwge1xyXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG59XHJcblxyXG5hIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiRwcmltYXJ5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4zcztcclxufVxyXG5cclxuYTpob3ZlciB7XHJcbiAgb3BhY2l0eTogLjY7XHJcbn1cclxuXHJcblxyXG4uanVlZ29zIHtcclxuICBwYWRkaW5nOiAycmVtO1xyXG59XHJcblxyXG4uanVlZ29zID4gdWwge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg1MjBweCwgMWZyKSk7XHJcbiAgZ3JpZC1nYXA6IDFyZW07XHJcbn1cclxuXHJcbi5qdWVnb3MgPiB1bCA+IGxpIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRTJFMkUyO1xyXG4gIGJvcmRlci1yYWRpdXM6IC41cmVtO1xyXG4gIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2tcclxufVxyXG5cclxuLmp1ZWdvcyA+IHVsID4gbGkgPiBmaWd1cmUge1xyXG4gIG1heC1oZWlnaHQ6IDIyMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjVyZW07XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC41cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmp1ZWdvcyA+IHVsID4gbGkgPiBmaWd1cmUgPiBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uanVlZ29zID4gdWwgPiBsaSA+IGZpZ3VyZSA+IGZpZ2NhcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuNyk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5qdWVnb3MgPiB1bCA+IGxpID4gZmlndXJlID4gZmlnY2FwdGlvbiA+IGgzIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxufVxyXG5cclxuLmp1ZWdvcyA+IHVsID4gbGkgPiBwIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBwYWRkaW5nOiAxcmVtIC43NXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5qdWVnb3MgPiB1bCA+IGxpID4gYSB7XHJcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICBtYXJnaW46IC41cmVtO1xyXG59XHJcblxyXG5kbCwgb2wsIHVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuIiwiaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBsYXlmYWlyIERpc3BsYXlcIiwgc2VyaWY7XG59XG5cbnAsIGEge1xuICBmb250LWZhbWlseTogXCJTb3VyY2UgU2FucyBQcm9cIiwgc2Fucy1zZXJpZjtcbn1cblxuLyogR2VuZXJpYyBzdHlsZXMgKi9cbmh0bWwge1xuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbn1cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbmE6aG92ZXIge1xuICBvcGFjaXR5OiAwLjY7XG59XG5cbi5qdWVnb3Mge1xuICBwYWRkaW5nOiAycmVtO1xufVxuXG4uanVlZ29zID4gdWwge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUyMHB4LCAxZnIpKTtcbiAgZ3JpZC1nYXA6IDFyZW07XG59XG5cbi5qdWVnb3MgPiB1bCA+IGxpIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0UyRTJFMjtcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICBib3JkZXItY29sb3I6ICMxYWJjOWM7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuXG4uanVlZ29zID4gdWwgPiBsaSA+IGZpZ3VyZSB7XG4gIG1heC1oZWlnaHQ6IDIyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwLjVyZW07XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmp1ZWdvcyA+IHVsID4gbGkgPiBmaWd1cmUgPiBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmp1ZWdvcyA+IHVsID4gbGkgPiBmaWd1cmUgPiBmaWdjYXB0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5qdWVnb3MgPiB1bCA+IGxpID4gZmlndXJlID4gZmlnY2FwdGlvbiA+IGgzIHtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbi5qdWVnb3MgPiB1bCA+IGxpID4gcCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgcGFkZGluZzogMXJlbSAwLjc1cmVtO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5qdWVnb3MgPiB1bCA+IGxpID4gYSB7XG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICBtYXJnaW46IDAuNXJlbTtcbn1cblxuZGwsIG9sLCB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn0iLCIvLyBTZXQgY3VzdG9tIGNvbG9yc1xyXG4kdGVhbDogIzFhYmM5YyAhZGVmYXVsdDtcclxuJHRlYWwyOiAjYjJmMGUzICFkZWZhdWx0O1xyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRibGFjazogYmxhY2s7XHJcbiRkYXJrLWJsdWU6ICMyYzNlNTAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgcHJpbWFyeSBhbmQgc2Vjb25kYXJ5IGNvbG9yc1xyXG4kcHJpbWFyeTogJHRlYWwgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICRkYXJrLWJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodC1wcmltYXJ5OiAkdGVhbDIgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgZm9udCB2YXJpYWJsZXNcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDEwMDAgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1iaWdnZXI6IDEyMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgYm9yZGVyIHZhcmlhYmxlc1xyXG4kYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGlucHV0L2J1dHRvbiB2YXJpYWJsZXNcclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgbW9kYWwgdmFyaWFibGVzXHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiA0cmVtIDFyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/menu-card/menu-card.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/menu-card/menu-card.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuCardComponent", function() { return MenuCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MenuCardComponent = class MenuCardComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
    }
};
MenuCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-card',
        template: __webpack_require__(/*! raw-loader!./menu-card.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/menu-card/menu-card.component.html"),
        styles: [__webpack_require__(/*! ./menu-card.component.scss */ "./src/app/componentes/menu-card/menu-card.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MenuCardComponent);



/***/ }),

/***/ "./src/app/componentes/menu/menu.component.scss":
/*!******************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#mainNav {\n  min-height: 56px;\n  background-color: #fff;\n}\n\n#mainNav .navbar-toggler {\n  font-size: 80%;\n  padding: 0.75rem;\n  color: #64a19d;\n  border: 1px solid #64a19d;\n}\n\n#mainNav .navbar-toggler:focus {\n  outline: none;\n}\n\n#mainNav .navbar-brand {\n  color: #161616;\n  font-weight: 700;\n  padding: 0.9rem 0;\n}\n\n#mainNav .navbar-nav .nav-item:hover {\n  color: fade(white, 80%);\n  outline: none;\n  background-color: transparent;\n}\n\n#mainNav .navbar-nav .nav-item:active, #mainNav .navbar-nav .nav-item:focus {\n  outline: none;\n  background-color: transparent;\n}\n\n@media (min-width: 992px) {\n  #mainNav {\n    padding-top: 0;\n    padding-bottom: 0;\n    border-bottom: none;\n    background-color: transparent;\n    transition: background-color 0.3s ease-in-out;\n  }\n\n  #mainNav .navbar-brand {\n    padding: 0.5rem 0;\n    color: rgba(255, 255, 255, 0.5);\n  }\n\n  #mainNav .nav-link {\n    transition: none;\n    padding: 2rem 1.5rem;\n    color: rgba(255, 255, 255, 0.5);\n  }\n\n  #mainNav .nav-link:hover {\n    color: rgba(255, 255, 255, 0.75);\n  }\n\n  #mainNav .nav-link:active {\n    color: white;\n  }\n\n  #mainNav.navbar-shrink {\n    background-color: #fff;\n  }\n\n  #mainNav.navbar-shrink .navbar-brand {\n    color: #161616;\n  }\n\n  #mainNav.navbar-shrink .nav-link {\n    color: #161616;\n    padding: 1.5rem 1.5rem 1.25rem;\n    border-bottom: 0.25rem solid transparent;\n  }\n\n  #mainNav.navbar-shrink .nav-link:hover {\n    color: #64a19d;\n  }\n\n  #mainNav.navbar-shrink .nav-link:active {\n    color: #467370;\n  }\n\n  #mainNav.navbar-shrink .nav-link.active {\n    color: #64a19d;\n    outline: none;\n    border-bottom: 0.25rem solid #64a19d;\n  }\n}\n\n.btn {\n  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n  padding: 1.25rem 2rem;\n  font-family: \"Varela Round\";\n  font-size: 80%;\n  text-transform: uppercase;\n  letter-spacing: 0.15rem;\n  border: 0;\n}\n\n.btn-primary {\n  background-color: #64a19d;\n}\n\n.btn-primary:hover {\n  background-color: #4f837f;\n}\n\n.btn-primary:focus {\n  background-color: #4f837f;\n  color: white;\n}\n\n.btn-primary:active {\n  background-color: #467370 !important;\n}\n\n.projects-section {\n  padding: 5rem 0;\n}\n\n.projects-section .featured-text {\n  padding: 2rem;\n}\n\n@media (min-width: 992px) {\n  .projects-section .featured-text {\n    padding: 0 0 0 2rem;\n    border-left: 0.5rem solid #64a19d;\n  }\n}\n\n.projects-section .project-text {\n  padding: 3rem;\n  font-size: 90%;\n}\n\n@media (min-width: 992px) {\n  .projects-section .project-text {\n    padding: 5rem;\n  }\n\n  .projects-section .project-text hr {\n    border-color: #64a19d;\n    border-width: 0.25rem;\n    width: 30%;\n  }\n}\n\n.signup-section .form-inline input {\n  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1) !important;\n  padding: 1.25rem 2rem;\n  height: auto;\n  font-family: \"Varela Round\";\n  font-size: 80%;\n  text-transform: uppercase;\n  letter-spacing: 0.15rem;\n  border: 0;\n}\n\n.contact-section {\n  padding: 5rem 0 0;\n}\n\n.contact-section .card {\n  border: 0;\n  border-bottom: 0.25rem solid #64a19d;\n}\n\n.contact-section .card h4 {\n  font-size: 0.8rem;\n  font-family: \"Varela Round\";\n  text-transform: uppercase;\n  letter-spacing: 0.15rem;\n}\n\n.contact-section .card hr {\n  border-color: #64a19d;\n  border-width: 0.25rem;\n  width: 3rem;\n}\n\n.contact-section .social {\n  margin-top: 5rem;\n}\n\n.contact-section .social a {\n  text-align: center;\n  height: 3rem;\n  width: 3rem;\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 100%;\n  line-height: 3rem;\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.contact-section .social a:hover {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.contact-section .social a:active {\n  color: #fff;\n}\n\nbody {\n  font-family: \"Nunito\";\n  letter-spacing: 0.0625em;\n}\n\na {\n  color: #64a19d;\n}\n\na:focus, a:hover {\n  text-decoration: none;\n  color: #3c6360;\n}\n\n.bg-black {\n  background-color: #161616 !important;\n}\n\n.bg-primary {\n  background-color: #64a19d !important;\n}\n\n.text-primary {\n  color: #64a19d !important;\n}\n\nfooter {\n  padding: 5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS9EOlxcQ2FycGV0YXMgVXN1YXJpb1xcRXNjcml0b3Jpb1xcV29ya2luZ1xcVFAtU2FsYS1kZS1KdWVnb3MtQU5HVUxBUi1cXFNhbGEtZGUtSnVlZ29zLXYyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xcbWVudVxcbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0FDQ0o7O0FERUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtBQ0NKOztBREVFO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0lBRUEsNkNBQUE7RUNDSjs7RURDRTtJQUNFLGlCQUFBO0lBQ0EsK0JBQUE7RUNFSjs7RURBRTtJQUVFLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSwrQkFBQTtFQ0dKOztFRERFO0lBQ0UsZ0NBQUE7RUNJSjs7RURGRTtJQUNFLFlBQUE7RUNLSjs7RURIRTtJQUNFLHNCQUFBO0VDTUo7O0VESkU7SUFDRSxjQUFBO0VDT0o7O0VETEU7SUFDRSxjQUFBO0lBQ0EsOEJBQUE7SUFDQSx3Q0FBQTtFQ1FKOztFRE5FO0lBQ0UsY0FBQTtFQ1NKOztFRFBFO0lBQ0UsY0FBQTtFQ1VKOztFRFJFO0lBQ0UsY0FBQTtJQUNBLGFBQUE7SUFDQSxvQ0FBQTtFQ1dKO0FBQ0Y7O0FEUkU7RUFFRSxpRUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNVSjs7QURQRTtFQUNFLHlCQUFBO0FDVUo7O0FEUEU7RUFDRSx5QkFBQTtBQ1VKOztBRFBFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FDVUo7O0FEUEU7RUFDRSxvQ0FBQTtBQ1VKOztBRFBFO0VBQ0UsZUFBQTtBQ1VKOztBRFBFO0VBQ0UsYUFBQTtBQ1VKOztBRFBFO0VBQ0U7SUFDRSxtQkFBQTtJQUNBLGlDQUFBO0VDVUo7QUFDRjs7QURQRTtFQUNFLGFBQUE7RUFDQSxjQUFBO0FDU0o7O0FETkU7RUFDRTtJQUNFLGFBQUE7RUNTSjs7RURQRTtJQUNFLHFCQUFBO0lBQ0EscUJBQUE7SUFDQSxVQUFBO0VDVUo7QUFDRjs7QURQRTtFQUVFLGlFQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFNBQUE7QUNTSjs7QURORTtFQUNFLGlCQUFBO0FDU0o7O0FETkU7RUFDRSxTQUFBO0VBQ0Esb0NBQUE7QUNTSjs7QURORTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FDU0o7O0FETkU7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ1NKOztBRE5FO0VBQ0UsZ0JBQUE7QUNTSjs7QURORTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ1NKOztBRE5FO0VBQ0UsK0JBQUE7QUNTSjs7QURORTtFQUNFLFdBQUE7QUNTSjs7QURORTtFQUNFLHFCQUFBO0VBQ0Esd0JBQUE7QUNTSjs7QURORTtFQUNFLGNBQUE7QUNTSjs7QURORTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQ1NKOztBRE5FO0VBQ0Usb0NBQUE7QUNTSjs7QURORTtFQUNFLG9DQUFBO0FDU0o7O0FETkU7RUFDRSx5QkFBQTtBQ1NKOztBRE5FO0VBQ0UsZUFBQTtBQ1NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW5OYXYge1xyXG4gICAgbWluLWhlaWdodDogNTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG4gIFxyXG4gICNtYWluTmF2IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICBjb2xvcjogIzY0YTE5ZDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2NGExOWQ7XHJcbiAgfVxyXG4gIFxyXG4gICNtYWluTmF2IC5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICBcclxuICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcclxuICAgIGNvbG9yOiAjMTYxNjE2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIHBhZGRpbmc6IC45cmVtIDA7XHJcbiAgfVxyXG4gIFxyXG4gICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTpob3ZlciB7XHJcbiAgICBjb2xvcjogZmFkZSh3aGl0ZSwgODAlKTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmFjdGl2ZSwgI21haW5OYXYgLm5hdmJhci1uYXYgLm5hdi1pdGVtOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAjbWFpbk5hdiB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcbiAgICAjbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcclxuICAgICAgcGFkZGluZzogLjVyZW0gMDtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgIH1cclxuICAgICNtYWluTmF2IC5uYXYtbGluayB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogbm9uZTtcclxuICAgICAgcGFkZGluZzogMnJlbSAxLjVyZW07XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICB9XHJcbiAgICAjbWFpbk5hdiAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICAgIH1cclxuICAgICNtYWluTmF2IC5uYXYtbGluazphY3RpdmUge1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIGNvbG9yOiAjMTYxNjE2O1xyXG4gICAgfVxyXG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsge1xyXG4gICAgICBjb2xvcjogIzE2MTYxNjtcclxuICAgICAgcGFkZGluZzogMS41cmVtIDEuNXJlbSAxLjI1cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbms6aG92ZXIge1xyXG4gICAgICBjb2xvcjogIzY0YTE5ZDtcclxuICAgIH1cclxuICAgICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rOmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjNDY3MzcwO1xyXG4gICAgfVxyXG4gICAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgY29sb3I6ICM2NGExOWQ7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgIzY0YTE5ZDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmJ0biB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4xODc1cmVtIDAuMTg3NXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4xODc1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDJyZW07XHJcbiAgICBmb250LWZhbWlseTogJ1ZhcmVsYSBSb3VuZCc7XHJcbiAgICBmb250LXNpemU6IDgwJTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLjE1cmVtO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0YTE5ZDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bi1wcmltYXJ5OmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZjgzN2Y7XHJcbiAgfVxyXG4gIFxyXG4gIC5idG4tcHJpbWFyeTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY4MzdmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYnRuLXByaW1hcnk6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjczNzAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnByb2plY3RzLXNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNXJlbSAwO1xyXG4gIH1cclxuICBcclxuICAucHJvamVjdHMtc2VjdGlvbiAuZmVhdHVyZWQtdGV4dCB7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5wcm9qZWN0cy1zZWN0aW9uIC5mZWF0dXJlZC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogMCAwIDAgMnJlbTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDAuNXJlbSBzb2xpZCAjNjRhMTlkO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC10ZXh0IHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC10ZXh0IHtcclxuICAgICAgcGFkZGluZzogNXJlbTtcclxuICAgIH1cclxuICAgIC5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LXRleHQgaHIge1xyXG4gICAgICBib3JkZXItY29sb3I6ICM2NGExOWQ7XHJcbiAgICAgIGJvcmRlci13aWR0aDogLjI1cmVtO1xyXG4gICAgICB3aWR0aDogMzAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAuc2lnbnVwLXNlY3Rpb24gLmZvcm0taW5saW5lIGlucHV0IHtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4xODc1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMTg3NXJlbSAwLjE4NzVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW0gMnJlbTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJztcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDVyZW0gMCAwO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1zZWN0aW9uIC5jYXJkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDAuMjVyZW0gc29saWQgIzY0YTE5ZDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3Qtc2VjdGlvbiAuY2FyZCBoNCB7XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiAnVmFyZWxhIFJvdW5kJztcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3Qtc2VjdGlvbiAuY2FyZCBociB7XHJcbiAgICBib3JkZXItY29sb3I6ICM2NGExOWQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDAuMjVyZW07XHJcbiAgICB3aWR0aDogM3JlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0LXNlY3Rpb24gLnNvY2lhbCBhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogM3JlbTtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJztcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjA2MjVlbTtcclxuICB9XHJcbiAgXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogIzY0YTE5ZDtcclxuICB9XHJcbiAgXHJcbiAgYTpmb2N1cywgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzNjNjM2MDtcclxuICB9XHJcbiAgXHJcbiAgLmJnLWJsYWNrIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTYgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLmJnLXByaW1hcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0YTE5ZCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAudGV4dC1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiAjNjRhMTlkICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGZvb3RlciB7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgfVxyXG4gICIsIiNtYWluTmF2IHtcbiAgbWluLWhlaWdodDogNTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuI21haW5OYXYgLm5hdmJhci10b2dnbGVyIHtcbiAgZm9udC1zaXplOiA4MCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGNvbG9yOiAjNjRhMTlkO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNjRhMTlkO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLWJyYW5kIHtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDAuOXJlbSAwO1xufVxuXG4jbWFpbk5hdiAubmF2YmFyLW5hdiAubmF2LWl0ZW06aG92ZXIge1xuICBjb2xvcjogZmFkZSh3aGl0ZSwgODAlKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbiNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTphY3RpdmUsICNtYWluTmF2IC5uYXZiYXItbmF2IC5uYXYtaXRlbTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgI21haW5OYXYge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgI21haW5OYXYgLm5hdmJhci1icmFuZCB7XG4gICAgcGFkZGluZzogMC41cmVtIDA7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuXG4gICNtYWluTmF2IC5uYXYtbGluayB7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgfVxuXG4gICNtYWluTmF2IC5uYXYtbGluazpob3ZlciB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gIH1cblxuICAjbWFpbk5hdiAubmF2LWxpbms6YWN0aXZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG5cbiAgI21haW5OYXYubmF2YmFyLXNocmluayAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogIzE2MTYxNjtcbiAgfVxuXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rIHtcbiAgICBjb2xvcjogIzE2MTYxNjtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMS41cmVtIDEuMjVyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogIzY0YTE5ZDtcbiAgfVxuXG4gICNtYWluTmF2Lm5hdmJhci1zaHJpbmsgLm5hdi1saW5rOmFjdGl2ZSB7XG4gICAgY29sb3I6ICM0NjczNzA7XG4gIH1cblxuICAjbWFpbk5hdi5uYXZiYXItc2hyaW5rIC5uYXYtbGluay5hY3RpdmUge1xuICAgIGNvbG9yOiAjNjRhMTlkO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4yNXJlbSBzb2xpZCAjNjRhMTlkO1xuICB9XG59XG4uYnRuIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAuMTg3NXJlbSAwLjE4NzVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwLjE4NzVyZW0gMC4xODc1cmVtIDAgcmdiYSgwLCAwLCAwLCAwLjEpICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEuMjVyZW0gMnJlbTtcbiAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCI7XG4gIGZvbnQtc2l6ZTogODAlO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMC4xNXJlbTtcbiAgYm9yZGVyOiAwO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRhMTlkO1xufVxuXG4uYnRuLXByaW1hcnk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY4MzdmO1xufVxuXG4uYnRuLXByaW1hcnk6Zm9jdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY4MzdmO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tcHJpbWFyeTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY3MzcwICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9qZWN0cy1zZWN0aW9uIHtcbiAgcGFkZGluZzogNXJlbSAwO1xufVxuXG4ucHJvamVjdHMtc2VjdGlvbiAuZmVhdHVyZWQtdGV4dCB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAucHJvamVjdHMtc2VjdGlvbiAuZmVhdHVyZWQtdGV4dCB7XG4gICAgcGFkZGluZzogMCAwIDAgMnJlbTtcbiAgICBib3JkZXItbGVmdDogMC41cmVtIHNvbGlkICM2NGExOWQ7XG4gIH1cbn1cbi5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LXRleHQge1xuICBwYWRkaW5nOiAzcmVtO1xuICBmb250LXNpemU6IDkwJTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcm9qZWN0cy1zZWN0aW9uIC5wcm9qZWN0LXRleHQge1xuICAgIHBhZGRpbmc6IDVyZW07XG4gIH1cblxuICAucHJvamVjdHMtc2VjdGlvbiAucHJvamVjdC10ZXh0IGhyIHtcbiAgICBib3JkZXItY29sb3I6ICM2NGExOWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAwLjI1cmVtO1xuICAgIHdpZHRoOiAzMCU7XG4gIH1cbn1cbi5zaWdudXAtc2VjdGlvbiAuZm9ybS1pbmxpbmUgaW5wdXQge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMC4xODc1cmVtIDAuMTg3NXJlbSAwIHJnYmEoMCwgMCwgMCwgMC4xKSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDAuMTg3NXJlbSAwLjE4NzVyZW0gMCByZ2JhKDAsIDAsIDAsIDAuMSkgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMS4yNXJlbSAycmVtO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIlZhcmVsYSBSb3VuZFwiO1xuICBmb250LXNpemU6IDgwJTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMTVyZW07XG4gIGJvcmRlcjogMDtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDVyZW0gMCAwO1xufVxuXG4uY29udGFjdC1zZWN0aW9uIC5jYXJkIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAwLjI1cmVtIHNvbGlkICM2NGExOWQ7XG59XG5cbi5jb250YWN0LXNlY3Rpb24gLmNhcmQgaDQge1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgZm9udC1mYW1pbHk6IFwiVmFyZWxhIFJvdW5kXCI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xufVxuXG4uY29udGFjdC1zZWN0aW9uIC5jYXJkIGhyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNjRhMTlkO1xuICBib3JkZXItd2lkdGg6IDAuMjVyZW07XG4gIHdpZHRoOiAzcmVtO1xufVxuXG4uY29udGFjdC1zZWN0aW9uIC5zb2NpYWwge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xufVxuXG4uY29udGFjdC1zZWN0aW9uIC5zb2NpYWwgYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAzcmVtO1xuICB3aWR0aDogM3JlbTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBsaW5lLWhlaWdodDogM3JlbTtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiAuc29jaWFsIGE6aG92ZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xufVxuXG4uY29udGFjdC1zZWN0aW9uIC5zb2NpYWwgYTphY3RpdmUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNjI1ZW07XG59XG5cbmEge1xuICBjb2xvcjogIzY0YTE5ZDtcbn1cblxuYTpmb2N1cywgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgY29sb3I6ICMzYzYzNjA7XG59XG5cbi5iZy1ibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTYgIWltcG9ydGFudDtcbn1cblxuLmJnLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjRhMTlkICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LXByaW1hcnkge1xuICBjb2xvcjogIzY0YTE5ZCAhaW1wb3J0YW50O1xufVxuXG5mb290ZXIge1xuICBwYWRkaW5nOiA1cmVtIDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/menu/menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/componentes/menu/menu.component.ts ***!
  \****************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuComponent = class MenuComponent {
    constructor() { }
    ngOnInit() {
    }
};
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: __webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/menu/menu.component.html"),
        styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/componentes/menu/menu.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuComponent);



/***/ }),

/***/ "./src/app/componentes/pie/pie.component.scss":
/*!****************************************************!*\
  !*** ./src/app/componentes/pie/pie.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n  background-color: #2c3e50;\n  color: #fff;\n}\n\n.copyright {\n  background-color: #1a252f;\n}\n\n.btn-social {\n  border-radius: 100%;\n  display: inline-flex;\n  width: 3.25rem;\n  height: 3.25rem;\n  font-size: 1.25rem;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGllL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxwaWVcXHBpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvcGllL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL3BpZS9waWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQ0hJO0FDRVI7O0FGSUE7RUFDSSx5QkFBQTtBRURKOztBRklBO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FFREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9waWUvcGllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmZvb3RlciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeTtcclxuICAgIGNvbG9yOiAkd2hpdGU7XHJcbn1cclxuXHJcbi5jb3B5cmlnaHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRzZWNvbmRhcnksIDEwJSk7XHJcbn1cclxuXHJcbi5idG4tc29jaWFsIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIHdpZHRoOiAzLjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAzLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59IiwiLy8gU2V0IGN1c3RvbSBjb2xvcnNcclxuJHRlYWw6ICMxYWJjOWMgIWRlZmF1bHQ7XHJcbiR0ZWFsMjogI2IyZjBlMyAhZGVmYXVsdDtcclxuJHdoaXRlOiAjZmZmICFkZWZhdWx0O1xyXG4kYmxhY2s6IGJsYWNrO1xyXG4kZGFyay1ibHVlOiAjMmMzZTUwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIHByaW1hcnkgYW5kIHNlY29uZGFyeSBjb2xvcnNcclxuJHByaW1hcnk6ICR0ZWFsICFkZWZhdWx0O1xyXG4kc2Vjb25kYXJ5OiAkZGFyay1ibHVlICFkZWZhdWx0O1xyXG4kbGlnaHQtcHJpbWFyeTogJHRlYWwyICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGZvbnQgdmFyaWFibGVzXHJcbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiBcIkxhdG9cIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsICdOb3RvIENvbG9yIEVtb2ppJyAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAxMDAwICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQtYmlnZ2VyOiAxMjAwICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGJvcmRlciB2YXJpYWJsZXNcclxuJGJvcmRlci13aWR0aDogMC4xMjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzOiAwLjVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLWxnOiAwLjc1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1zbTogMC4yNXJlbSAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBpbnB1dC9idXR0b24gdmFyaWFibGVzXHJcbiRpbnB1dC1idG4tYm9yZGVyLXdpZHRoOiAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIG1vZGFsIHZhcmlhYmxlc1xyXG4kbW9kYWwtaW5uZXItcGFkZGluZzogNHJlbSAxcmVtICFkZWZhdWx0O1xyXG4kbW9kYWwtY29udGVudC1ib3JkZXItd2lkdGg6IDAgIWRlZmF1bHQ7XHJcbiIsIi5mb290ZXIge1xuICBwYWRkaW5nLXRvcDogNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhMjUyZjtcbn1cblxuLmJ0bi1zb2NpYWwge1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgd2lkdGg6IDMuMjVyZW07XG4gIGhlaWdodDogMy4yNXJlbTtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/componentes/pie/pie.component.ts":
/*!**************************************************!*\
  !*** ./src/app/componentes/pie/pie.component.ts ***!
  \**************************************************/
/*! exports provided: PieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieComponent", function() { return PieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PieComponent = class PieComponent {
    constructor() { }
    ngOnInit() {
    }
};
PieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pie',
        template: __webpack_require__(/*! raw-loader!./pie.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/pie/pie.component.html"),
        styles: [__webpack_require__(/*! ./pie.component.scss */ "./src/app/componentes/pie/pie.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PieComponent);



/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 5%;\n}\n\n.cardGame {\n  background-color: #1abc9c;\n  text-align: center;\n  padding: 5rem;\n  border-radius: 25px;\n}\n\np {\n  font-family: Lato;\n}\n\n.content {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: 2em;\n}\n\n.flex-container {\n  display: flex;\n  width: 100%;\n}\n\n.flex-center {\n  align-items: center;\n  justify-content: center;\n}\n\n/* mat-card-content{\n  display:grid;\n  grid-template-columns: 2fr 1fr;\n} */\n\n.content1 {\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n}\n\n.score {\n  margin-top: 0.5em;\n  margin-left: 2em;\n  font-size: 1.5em;\n}\n\n.content2 {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n}\n\n.fa {\n  cursor: pointer;\n  font-size: 5em;\n}\n\n.selectedWeapon {\n  color: background;\n}\n\n.mat-toolbar {\n  background-color: #1abc9c;\n}\n\n.mat-card {\n  background: black;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcGllZHJhLXBhcGVsLXRpamVyYS9EOlxcQ2FycGV0YXMgVXN1YXJpb1xcRXNjcml0b3Jpb1xcV29ya2luZ1xcVFAtU2FsYS1kZS1KdWVnb3MtQU5HVUxBUi1cXFNhbGEtZGUtSnVlZ29zLXYyL3NyY1xcYXBwXFxjb21wb25lbnRlc1xccGllZHJhLXBhcGVsLXRpamVyYVxccGllZHJhLXBhcGVsLXRpamVyYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvcGllZHJhLXBhcGVsLXRpamVyYS9waWVkcmEtcGFwZWwtdGlqZXJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRlcy9waWVkcmEtcGFwZWwtdGlqZXJhL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSx5QkVORztFRk9ILGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxpQkFBQTtBQ0RKOztBRElFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7QUNBSjs7QURHRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURFRTs7O0dBQUE7O0FBS0E7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURJRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ0RKOztBRElFO0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0FDREo7O0FESUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElFO0VBQ0UsaUJBQUE7QUNESjs7QURJQztFQUNJLHlCRTlERTtBRDZEUDs7QURJQztFQUNHLGlCQUFBO0VBQ0EsWUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50ZXMvcGllZHJhLXBhcGVsLXRpamVyYS9waWVkcmEtcGFwZWwtdGlqZXJhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA1JTtcclxufVxyXG5cclxuLmNhcmRHYW1lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmc6IDVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudHtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIHBhZGRpbmc6IDJlbTtcclxuICB9XHJcbiAgLmZsZXgtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXgtY2VudGVye1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAvKiBtYXQtY2FyZC1jb250ZW50e1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xyXG4gIH0gKi9cclxuICBcclxuICAuY29udGVudDF7XHJcbiAgICBcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMmZyIDFmcjtcclxuICB9XHJcbiAgXHJcbiAgLnNjb3Jle1xyXG4gICAgbWFyZ2luLXRvcDouNWVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6MmVtO1xyXG4gICAgZm9udC1zaXplOjEuNWVtXHJcbiAgfVxyXG4gIFxyXG4gIC5jb250ZW50MntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xyXG4gIH1cclxuICBcclxuICAuZmF7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTo1ZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWxlY3RlZFdlYXBvbntcclxuICAgIGNvbG9yOiBiYWNrZ3JvdW5kO1xyXG4gIH1cclxuXHJcbiAubWF0LXRvb2xiYXIge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xyXG4gfVxyXG5cclxuIC5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSIsIi5jb250YWluZXIge1xuICBwYWRkaW5nOiA1JTtcbn1cblxuLmNhcmRHYW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM5YztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cmVtO1xuICBib3JkZXItcmFkaXVzOiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1mYW1pbHk6IExhdG87XG59XG5cbi5jb250ZW50IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBwYWRkaW5nOiAyZW07XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmxleC1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogbWF0LWNhcmQtY29udGVudHtcbiAgZGlzcGxheTpncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG59ICovXG4uY29udGVudDEge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG59XG5cbi5zY29yZSB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBtYXJnaW4tbGVmdDogMmVtO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4uY29udGVudDIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4uZmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogNWVtO1xufVxuXG4uc2VsZWN0ZWRXZWFwb24ge1xuICBjb2xvcjogYmFja2dyb3VuZDtcbn1cblxuLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFhYmM5Yztcbn1cblxuLm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbn0iLCIvLyBTZXQgY3VzdG9tIGNvbG9yc1xyXG4kdGVhbDogIzFhYmM5YyAhZGVmYXVsdDtcclxuJHRlYWwyOiAjYjJmMGUzICFkZWZhdWx0O1xyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRibGFjazogYmxhY2s7XHJcbiRkYXJrLWJsdWU6ICMyYzNlNTAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgcHJpbWFyeSBhbmQgc2Vjb25kYXJ5IGNvbG9yc1xyXG4kcHJpbWFyeTogJHRlYWwgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICRkYXJrLWJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodC1wcmltYXJ5OiAkdGVhbDIgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgZm9udCB2YXJpYWJsZXNcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDEwMDAgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1iaWdnZXI6IDEyMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgYm9yZGVyIHZhcmlhYmxlc1xyXG4kYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGlucHV0L2J1dHRvbiB2YXJpYWJsZXNcclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgbW9kYWwgdmFyaWFibGVzXHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiA0cmVtIDFyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PiedraPapelTijeraComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PiedraPapelTijeraComponent", function() { return PiedraPapelTijeraComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");





let PiedraPapelTijeraComponent = class PiedraPapelTijeraComponent {
    constructor(uService, router, dataApi) {
        this.uService = uService;
        this.router = router;
        this.dataApi = dataApi;
        this.btnMensaje = "Salir";
        this.scores = [0, 0];
        this.weapons = [
            'rock',
            'paper',
            'scissors'
        ];
        this.playerSelected = -1;
        this.loading = false;
        this.isResultShow = false;
        // theResult -  0 winner
        //              1 lose
        //              2 tie
        this.theResult = 0;
        this.enemySelected = -1;
    }
    ngOnInit() {
        this.nombre = "Anónimo";
        this.imagenUser = "assets/imagenes/default-user.png";
        if (this.uService.usuario.Nombre != "") {
            this.nombre = this.uService.usuario.Nombre;
            this.imagenUser = this.uService.usuario.ImagenUrl;
        }
    }
    pick(weapon) {
        // return immediately when still loading. You don't want
        // the user to spam the button.
        if (this.loading)
            return;
        this.loading = true;
        this.playerSelected = weapon;
        //create a delay to simulate enemy's turn.
        setTimeout(() => {
            this.loading = false;
            // generate a number from 0 -2 
            const randomNum = Math.floor(Math.random() * 3);
            this.enemySelected = randomNum;
            this.checkResult();
            this.isResultShow = true;
        }, Math.floor(Math.random() * 500) + 200);
    }
    reset() {
        this.scores = [0, 0];
    }
    checkResult() {
        const playerPick = this.playerSelected;
        const enemyPick = this.enemySelected;
        // if you and the enemy have the same weapon, then it is a tie.
        if (playerPick == enemyPick) {
            this.theResult = 2;
        }
        else if ((playerPick - enemyPick + 3) % 3 == 1) {
            // YOU WIN
            this.theResult = 0;
            this.scores[0] = this.scores[0] + 1;
        }
        else {
            // YOU LOSE
            this.theResult = 1;
            this.scores[1] = this.scores[1] + 1;
        }
        if (this.scores[0] > this.scores[1]) {
            this.btnMensaje = "Salir y guardar puntuación";
        }
    }
    salir() {
        this.guardarResultados();
        this.router.navigate(['/juegos']);
    }
    guardarResultados() {
        if (this.scores[0] > this.scores[1]) {
            let puntos = {
                ImagenUrl: this.imagenUser,
                Jugador: this.nombre,
                Juego: "Piedra-Papel-Tijeras",
                Puntuacion: "Jugador: " + this.scores[0] + "\nLa Máquina: " + this.scores[1]
            };
            this.dataApi.AgregarUno(puntos, "puntuacion");
        }
    }
};
PiedraPapelTijeraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-piedra-papel-tijera',
        template: __webpack_require__(/*! raw-loader!./piedra-papel-tijera.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.html"),
        styles: [__webpack_require__(/*! ./piedra-papel-tijera.component.scss */ "./src/app/componentes/piedra-papel-tijera/piedra-papel-tijera.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"]])
], PiedraPapelTijeraComponent);



/***/ }),

/***/ "./src/app/componentes/principal/principal.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudGVzL3ByaW5jaXBhbC9wcmluY2lwYWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/componentes/principal/principal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/principal/principal.component.ts ***!
  \**************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PrincipalComponent = class PrincipalComponent {
    constructor() { }
    ngOnInit() {
    }
    onActivate(event) {
        let scrollToTop = window.setInterval(() => {
            let pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    }
};
PrincipalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-principal',
        template: __webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/principal/principal.component.html"),
        styles: [__webpack_require__(/*! ./principal.component.scss */ "./src/app/componentes/principal/principal.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PrincipalComponent);



/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".imagenDeQuienSoy {\n  width: 100%;\n}\n\nbody {\n  background-color: LavenderBlush;\n  color: Teal;\n  font-size: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n  line-height: 1.5;\n  margin: 0;\n  padding: 1rem;\n}\n\n*, ::after, ::before {\n  box-sizing: border-box;\n}\n\n/* grid styles */\n\n.container {\n  --columns: 12;\n  /* number of columns in the grid system */\n  margin: 40px auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.column {\n  --width: 0;\n  /* default value */\n  border: LavenderBlush 2px solid;\n  border-radius: 8px;\n  padding: 30px;\n  flex-basis: calc(var(--width) / var(--columns) * 100%);\n}\n\n.margin {\n  margin-bottom: 45px;\n}\n\n/* sections */\n\n.header {\n  background-color: #1abc9c;\n  --width: 12;\n}\n\n.content {\n  background-color: #2c3e50;\n  color: #fff;\n  --width: 8;\n}\n\n.sidebar {\n  background-color: black;\n  color: #fff;\n  --width: 4;\n}\n\n.img-profile {\n  max-width: 10rem;\n  max-height: 10rem;\n  border: 0.5rem solid rgba(255, 255, 255, 0.2);\n}\n\n.navbar-brand {\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxhcHBcXGNvbXBvbmVudGVzXFxxdWllbi1zb3lcXHF1aWVuLXNveS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L3F1aWVuLXNveS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvcXVpZW4tc295L0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxXQUFBO0FDRko7O0FES0E7RUFDSSwrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa01BQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0FDRko7O0FES0U7RUFDRSxzQkFBQTtBQ0ZKOztBREtFLGdCQUFBOztBQUVBO0VBQ0UsYUFBQTtFQUFlLHlDQUFBO0VBRWYsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1FO0VBQ0UsVUFBQTtFQUFZLGtCQUFBO0VBRVosK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzREFBQTtBQ0hKOztBRE1FO0VBQVMsbUJBQUE7QUNGWDs7QURJRSxhQUFBOztBQUVBO0VBQ0UseUJFNUNHO0VGNkNILFdBQUE7QUNGSjs7QURNRTtFQUNFLHlCRTlDUTtFRitDUixXRWpESTtFRmtESixVQUFBO0FDSEo7O0FET0U7RUFDRSx1QkV0REk7RUZ1REosV0V4REk7RUZ5REosVUFBQTtBQ0pKOztBRE9FO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDZDQUFBO0FDSko7O0FET0U7RUFDSSxrQkFBQTtFQUNBLGtNQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9xdWllbi1zb3kvcXVpZW4tc295LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwic3JjL3Njc3MvY29tcFwiO1xyXG5cclxuLmltYWdlbkRlUXVpZW5Tb3l7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBMYXZlbmRlckJsdXNoO1xyXG4gICAgY29sb3I6IFRlYWw7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsQXJpYWwsXCJOb3RvIFNhbnNcIixzYW5zLXNlcmlmLFwiQXBwbGUgQ29sb3IgRW1vamlcIixcIlNlZ29lIFVJIEVtb2ppXCIsXCJTZWdvZSBVSSBTeW1ib2xcIixcIk5vdG8gQ29sb3IgRW1vamlcIjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAqLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuICBcclxuICAvKiBncmlkIHN0eWxlcyAqL1xyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgLS1jb2x1bW5zOiAxMjsgLyogbnVtYmVyIG9mIGNvbHVtbnMgaW4gdGhlIGdyaWQgc3lzdGVtICovXHJcbiAgICAvLyBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICBcclxuICAuY29sdW1uIHtcclxuICAgIC0td2lkdGg6IDA7IC8qIGRlZmF1bHQgdmFsdWUgKi9cclxuICAgIFxyXG4gICAgYm9yZGVyOiBMYXZlbmRlckJsdXNoIDJweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICBmbGV4LWJhc2lzOiBjYWxjKHZhcigtLXdpZHRoKSAvIHZhcigtLWNvbHVtbnMpICogMTAwJSk7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXJnaW4ge21hcmdpbi1ib3R0b206IDQ1cHg7fVxyXG5cclxuICAvKiBzZWN0aW9ucyAqL1xyXG4gIFxyXG4gIC5oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjokcHJpbWFyeTtcclxuICAgIC0td2lkdGg6IDEyO1xyXG4gICAgLy8gaGVpZ2h0OiA4cmVtO1xyXG4gIH1cclxuICBcclxuICAuY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiRzZWNvbmRhcnk7XHJcbiAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgLS13aWR0aDogODtcclxuICAgIC8vIGhlaWdodDogNjRyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6JGJsYWNrO1xyXG4gICAgY29sb3I6ICR3aGl0ZTtcclxuICAgIC0td2lkdGg6IDQ7XHJcbiAgfVxyXG5cclxuICAuaW1nLXByb2ZpbGUge1xyXG4gICAgbWF4LXdpZHRoOiAxMHJlbTtcclxuICAgIG1heC1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgYm9yZGVyOiAwLjVyZW0gc29saWQgZmFkZS1vdXQoJHdoaXRlLCAwLjgpO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFwiU2Vnb2UgVUlcIixSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLEFyaWFsLFwiTm90byBTYW5zXCIsc2Fucy1zZXJpZixcIkFwcGxlIENvbG9yIEVtb2ppXCIsXCJTZWdvZSBVSSBFbW9qaVwiLFwiU2Vnb2UgVUkgU3ltYm9sXCIsXCJOb3RvIENvbG9yIEVtb2ppXCI7XHJcbiAgfSIsIi5pbWFnZW5EZVF1aWVuU295IHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBMYXZlbmRlckJsdXNoO1xuICBjb2xvcjogVGVhbDtcbiAgZm9udC1zaXplOiAxMDAlO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgXCJOb3RvIFNhbnNcIiwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCIsIFwiTm90byBDb2xvciBFbW9qaVwiO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogZ3JpZCBzdHlsZXMgKi9cbi5jb250YWluZXIge1xuICAtLWNvbHVtbnM6IDEyO1xuICAvKiBudW1iZXIgb2YgY29sdW1ucyBpbiB0aGUgZ3JpZCBzeXN0ZW0gKi9cbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNvbHVtbiB7XG4gIC0td2lkdGg6IDA7XG4gIC8qIGRlZmF1bHQgdmFsdWUgKi9cbiAgYm9yZGVyOiBMYXZlbmRlckJsdXNoIDJweCBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBmbGV4LWJhc2lzOiBjYWxjKHZhcigtLXdpZHRoKSAvIHZhcigtLWNvbHVtbnMpICogMTAwJSk7XG59XG5cbi5tYXJnaW4ge1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuXG4vKiBzZWN0aW9ucyAqL1xuLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWJjOWM7XG4gIC0td2lkdGg6IDEyO1xufVxuXG4uY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYzNlNTA7XG4gIGNvbG9yOiAjZmZmO1xuICAtLXdpZHRoOiA4O1xufVxuXG4uc2lkZWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBjb2xvcjogI2ZmZjtcbiAgLS13aWR0aDogNDtcbn1cblxuLmltZy1wcm9maWxlIHtcbiAgbWF4LXdpZHRoOiAxMHJlbTtcbiAgbWF4LWhlaWdodDogMTByZW07XG4gIGJvcmRlcjogMC41cmVtIHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIjtcbn0iLCIvLyBTZXQgY3VzdG9tIGNvbG9yc1xyXG4kdGVhbDogIzFhYmM5YyAhZGVmYXVsdDtcclxuJHRlYWwyOiAjYjJmMGUzICFkZWZhdWx0O1xyXG4kd2hpdGU6ICNmZmYgIWRlZmF1bHQ7XHJcbiRibGFjazogYmxhY2s7XHJcbiRkYXJrLWJsdWU6ICMyYzNlNTAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgcHJpbWFyeSBhbmQgc2Vjb25kYXJ5IGNvbG9yc1xyXG4kcHJpbWFyeTogJHRlYWwgIWRlZmF1bHQ7XHJcbiRzZWNvbmRhcnk6ICRkYXJrLWJsdWUgIWRlZmF1bHQ7XHJcbiRsaWdodC1wcmltYXJ5OiAkdGVhbDIgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgZm9udCB2YXJpYWJsZXNcclxuJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWY6IFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBcIk5vdG8gU2Fuc1wiLCBzYW5zLXNlcmlmLCBcIkFwcGxlIENvbG9yIEVtb2ppXCIsIFwiU2Vnb2UgVUkgRW1vamlcIiwgXCJTZWdvZSBVSSBTeW1ib2xcIiwgJ05vdG8gQ29sb3IgRW1vamknICFkZWZhdWx0O1xyXG4kaGVhZGluZ3MtZm9udC13ZWlnaHQ6IDEwMDAgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodC1iaWdnZXI6IDEyMDAgIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgYm9yZGVyIHZhcmlhYmxlc1xyXG4kYm9yZGVyLXdpZHRoOiAwLjEyNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtbGc6IDAuNzVyZW0gIWRlZmF1bHQ7XHJcbiRib3JkZXItcmFkaXVzLXNtOiAwLjI1cmVtICFkZWZhdWx0O1xyXG5cclxuLy8gT3ZlcnJpZGUgQm9vdHN0cmFwIGlucHV0L2J1dHRvbiB2YXJpYWJsZXNcclxuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgbW9kYWwgdmFyaWFibGVzXHJcbiRtb2RhbC1pbm5lci1wYWRkaW5nOiA0cmVtIDFyZW0gIWRlZmF1bHQ7XHJcbiRtb2RhbC1jb250ZW50LWJvcmRlci13aWR0aDogMCAhZGVmYXVsdDtcclxuIl19 */"

/***/ }),

/***/ "./src/app/componentes/quien-soy/quien-soy.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/componentes/quien-soy/quien-soy.component.ts ***!
  \**************************************************************/
/*! exports provided: QuienSoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuienSoyComponent", function() { return QuienSoyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuienSoyComponent = class QuienSoyComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuienSoyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quien-soy',
        template: __webpack_require__(/*! raw-loader!./quien-soy.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/quien-soy/quien-soy.component.html"),
        styles: [__webpack_require__(/*! ./quien-soy.component.scss */ "./src/app/componentes/quien-soy/quien-soy.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], QuienSoyComponent);



/***/ }),

/***/ "./src/app/componentes/registro/registro.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registro-pagina {\n  font-size: 14px;\n  margin-top: 40px;\n  margin-bottom: 80px;\n  text-align: center;\n}\n\n.registro-pagina .brand {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto;\n  margin: 40px auto;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.registro-pagina .brand img {\n  width: 100%;\n}\n\n.registro-pagina .card-wrapper {\n  width: 400px;\n}\n\n.registro-pagina .card {\n  border-color: transparent;\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.05);\n}\n\n.registro-pagina .card.fat {\n  padding: 10px;\n}\n\n.registro-pagina .card .card-title {\n  margin-bottom: 30px;\n}\n\n.registro-pagina .form-control {\n  border-width: 2.3px;\n}\n\n.registro-pagina .form-group label {\n  width: 100%;\n}\n\n.registro-pagina .btn.btn-block {\n  padding: 12px 10px;\n}\n\n.registro-pagina .margin-top20 {\n  margin-top: 20px;\n}\n\n.registro-pagina .no-margin {\n  margin: 0;\n}\n\n.custom-file-input ~ .custom-file-label::after {\n  content: \"Buscar\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXFRQLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItXFxTYWxhLWRlLUp1ZWdvcy12Mi9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXHJlZ2lzdHJvXFxyZWdpc3Ryby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvcmVnaXN0cm8vcmVnaXN0cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtBQ0NEOztBREVBO0VBQ0MsWUFBQTtBQ0NEOztBREVBO0VBQ0MseUJBQUE7RUFDQSx3Q0FBQTtBQ0NEOztBREVBO0VBQ0MsYUFBQTtBQ0NEOztBREVBO0VBQ0MsbUJBQUE7QUNDRDs7QURFQTtFQUNDLG1CQUFBO0FDQ0Q7O0FERUE7RUFDQyxXQUFBO0FDQ0Q7O0FERUE7RUFDQyxrQkFBQTtBQ0NEOztBREVBO0VBQ0MsZ0JBQUE7QUNDRDs7QURFQTtFQUNDLFNBQUE7QUNDRDs7QURFQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy9yZWdpc3Ryby9yZWdpc3Ryby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWdpc3Ryby1wYWdpbmEge1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRtYXJnaW4tdG9wOiA0MHB4O1xyXG5cdG1hcmdpbi1ib3R0b206IDgwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmVnaXN0cm8tcGFnaW5hIC5icmFuZCB7XHJcblx0d2lkdGg6IDkwcHg7XHJcblx0aGVpZ2h0OiA5MHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG1hcmdpbjogMCBhdXRvO1xyXG5cdG1hcmdpbjogNDBweCBhdXRvO1xyXG5cdGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG5cclxuLnJlZ2lzdHJvLXBhZ2luYSAuYnJhbmQgaW1nIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ2lzdHJvLXBhZ2luYSAuY2FyZC13cmFwcGVyIHtcclxuXHR3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Ryby1wYWdpbmEgLmNhcmQge1xyXG5cdGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblx0Ym94LXNoYWRvdzogMCAwIDQwcHggcmdiYSgwLDAsMCwuMDUpO1xyXG59XHJcblxyXG4ucmVnaXN0cm8tcGFnaW5hIC5jYXJkLmZhdCB7XHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuLnJlZ2lzdHJvLXBhZ2luYSAuY2FyZCAuY2FyZC10aXRsZSB7XHJcblx0bWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnJlZ2lzdHJvLXBhZ2luYSAuZm9ybS1jb250cm9sIHtcclxuXHRib3JkZXItd2lkdGg6IDIuM3B4O1xyXG59XHJcblxyXG4ucmVnaXN0cm8tcGFnaW5hIC5mb3JtLWdyb3VwIGxhYmVsIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ2lzdHJvLXBhZ2luYSAuYnRuLmJ0bi1ibG9jayB7XHJcblx0cGFkZGluZzogMTJweCAxMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0cm8tcGFnaW5hIC5tYXJnaW4tdG9wMjAge1xyXG5cdG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5yZWdpc3Ryby1wYWdpbmEgLm5vLW1hcmdpbiB7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4uY3VzdG9tLWZpbGUtaW5wdXQgfiAuY3VzdG9tLWZpbGUtbGFiZWw6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiQnVzY2FyXCI7XHJcbn0iLCIucmVnaXN0cm8tcGFnaW5hIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLmJyYW5kIHtcbiAgd2lkdGg6IDkwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luOiA0MHB4IGF1dG87XG4gIGJveC1zaGFkb3c6IDAgMCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLmJyYW5kIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVnaXN0cm8tcGFnaW5hIC5jYXJkLXdyYXBwZXIge1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLmNhcmQge1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgNDBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4ucmVnaXN0cm8tcGFnaW5hIC5jYXJkLmZhdCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLmNhcmQgLmNhcmQtdGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG4ucmVnaXN0cm8tcGFnaW5hIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXItd2lkdGg6IDIuM3B4O1xufVxuXG4ucmVnaXN0cm8tcGFnaW5hIC5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLmJ0bi5idG4tYmxvY2sge1xuICBwYWRkaW5nOiAxMnB4IDEwcHg7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLm1hcmdpbi10b3AyMCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5yZWdpc3Ryby1wYWdpbmEgLm5vLW1hcmdpbiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmN1c3RvbS1maWxlLWlucHV0IH4gLmN1c3RvbS1maWxlLWxhYmVsOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiQnVzY2FyXCI7XG59Il19 */"

/***/ }),

/***/ "./src/app/componentes/registro/registro.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/registro/registro.component.ts ***!
  \************************************************************/
/*! exports provided: RegistroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroComponent", function() { return RegistroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let RegistroComponent = class RegistroComponent {
    constructor(usuarioService, storage) {
        this.usuarioService = usuarioService;
        this.storage = storage;
        this.noCargando = true;
        this.imgName = "Seleccionar imágen..";
        this.usuario = this.usuarioService.UsuarioVacio();
    }
    ngOnInit() { }
    Registrarse() {
        this.usuario.Email = this.emailModel;
        this.usuario.Nombre = this.nombreModel;
        this.usuario.Password = this.passwordModel;
        this.usuario.ImagenUrl = this.InputImagenUser.nativeElement.value;
        if (!this.usuario.ImagenUrl) {
            this.usuario.ImagenUrl = "assets/imagenes/default-user.png";
        }
        this.usuarioService.RegistrarUsuario(this.usuario);
    }
    ImagenCargada(e) {
        this.noCargando = false;
        const img = e.target.files[0];
        if (img != undefined) {
            this.imgName = img.name;
            const nombreImg = img.name.substr(0, img.name.lastIndexOf('.'));
            const ext = img.name.substr(img.name.lastIndexOf('.') + 1);
            const filePath = "imagenes/usuarios/" + nombreImg + "-" + Date.now() + "." + ext;
            const ref = this.storage.ref(filePath);
            const task = this.storage.upload(filePath, img);
            this.porcentajeUpload = task.percentageChanges();
            task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(() => this.urlImagen = ref.getDownloadURL())).subscribe();
        }
        else {
            this.imgName = "Seleccionar imágen..";
            this.urlImagen = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["empty"])();
            this.noCargando = true;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("imgUsuario", { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], RegistroComponent.prototype, "InputImagenUser", void 0);
RegistroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registro',
        template: __webpack_require__(/*! raw-loader!./registro.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/registro/registro.component.html"),
        styles: [__webpack_require__(/*! ./registro.component.scss */ "./src/app/componentes/registro/registro.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"]])
], RegistroComponent);



/***/ }),

/***/ "./src/app/componentes/ta-te-ti/ta-te-ti.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/componentes/ta-te-ti/ta-te-ti.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  padding: 5%;\n}\n\n.cardGame {\n  background-color: #1abc9c;\n  text-align: center;\n  padding: 5rem;\n  border-radius: 25px;\n}\n\n#board {\n  width: 302px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 100px 100px 100px;\n  grid-template-rows: 100px 100px 100px;\n  font-size: 50px;\n  background-color: #666;\n  grid-gap: 1px;\n}\n\n#board.locked {\n  opacity: 0.7;\n  pointer-events: none;\n}\n\n#board .square {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #fff;\n  cursor: pointer;\n}\n\n#board .square.checked {\n  cursor: default;\n}\n\n#board .square.winner {\n  background-color: goldenrod;\n}\n\ninput[type=button] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50ZXMvdGEtdGUtdGkvRDpcXENhcnBldGFzIFVzdWFyaW9cXEVzY3JpdG9yaW9cXFdvcmtpbmdcXFRQLVNhbGEtZGUtSnVlZ29zLUFOR1VMQVItXFxTYWxhLWRlLUp1ZWdvcy12Mi9zcmNcXGFwcFxcY29tcG9uZW50ZXNcXHRhLXRlLXRpXFx0YS10ZS10aS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50ZXMvdGEtdGUtdGkvdGEtdGUtdGkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudGVzL3RhLXRlLXRpL0Q6XFxDYXJwZXRhcyBVc3VhcmlvXFxFc2NyaXRvcmlvXFxXb3JraW5nXFxUUC1TYWxhLWRlLUp1ZWdvcy1BTkdVTEFSLVxcU2FsYS1kZS1KdWVnb3MtdjIvc3JjXFxzY3NzXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FDREo7O0FESUE7RUFDSSx5QkVORztFRk9ILGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDREo7O0FES0E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUVBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0hKOztBRE1BO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0FDSEo7O0FETUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQ0hKOztBRE1BO0VBQ0ksZUFBQTtBQ0hKOztBRE1BO0VBQ0ksMkJBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRlcy90YS10ZS10aS90YS10ZS10aS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc2Nzcy92YXJpYWJsZXNcIjtcclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbi5jYXJkR2FtZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBwYWRkaW5nOiA1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuXHJcbiNib2FyZCB7XHJcbiAgICB3aWR0aDogMzAycHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCAxMDBweCAxMDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjY2O1xyXG4gICAgZ3JpZC1nYXA6IDFweDtcclxufVxyXG5cclxuI2JvYXJkLmxvY2tlZCB7XHJcbiAgICBvcGFjaXR5OiAuNztcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4jYm9hcmQgLnNxdWFyZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2JvYXJkIC5zcXVhcmUuY2hlY2tlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuXHJcbiNib2FyZCAuc3F1YXJlLndpbm5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9YnV0dG9uXSB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDUlO1xufVxuXG4uY2FyZEdhbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWFiYzljO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG5cbiNib2FyZCB7XG4gIHdpZHRoOiAzMDJweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggMTAwcHggMTAwcHg7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggMTAwcHggMTAwcHg7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY2NjtcbiAgZ3JpZC1nYXA6IDFweDtcbn1cblxuI2JvYXJkLmxvY2tlZCB7XG4gIG9wYWNpdHk6IDAuNztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNib2FyZCAuc3F1YXJlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2JvYXJkIC5zcXVhcmUuY2hlY2tlZCB7XG4gIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuI2JvYXJkIC5zcXVhcmUud2lubmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xufVxuXG5pbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufSIsIi8vIFNldCBjdXN0b20gY29sb3JzXHJcbiR0ZWFsOiAjMWFiYzljICFkZWZhdWx0O1xyXG4kdGVhbDI6ICNiMmYwZTMgIWRlZmF1bHQ7XHJcbiR3aGl0ZTogI2ZmZiAhZGVmYXVsdDtcclxuJGJsYWNrOiBibGFjaztcclxuJGRhcmstYmx1ZTogIzJjM2U1MCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBwcmltYXJ5IGFuZCBzZWNvbmRhcnkgY29sb3JzXHJcbiRwcmltYXJ5OiAkdGVhbCAhZGVmYXVsdDtcclxuJHNlY29uZGFyeTogJGRhcmstYmx1ZSAhZGVmYXVsdDtcclxuJGxpZ2h0LXByaW1hcnk6ICR0ZWFsMiAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBmb250IHZhcmlhYmxlc1xyXG4kZm9udC1mYW1pbHktc2Fucy1zZXJpZjogXCJMYXRvXCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIFwiTm90byBTYW5zXCIsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCAnTm90byBDb2xvciBFbW9qaScgIWRlZmF1bHQ7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogMTAwMCAhZGVmYXVsdDtcclxuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0LWJpZ2dlcjogMTIwMCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBib3JkZXIgdmFyaWFibGVzXHJcbiRib3JkZXItd2lkdGg6IDAuMTI1cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1czogMC41cmVtICFkZWZhdWx0O1xyXG4kYm9yZGVyLXJhZGl1cy1sZzogMC43NXJlbSAhZGVmYXVsdDtcclxuJGJvcmRlci1yYWRpdXMtc206IDAuMjVyZW0gIWRlZmF1bHQ7XHJcblxyXG4vLyBPdmVycmlkZSBCb290c3RyYXAgaW5wdXQvYnV0dG9uIHZhcmlhYmxlc1xyXG4kaW5wdXQtYnRuLWJvcmRlci13aWR0aDogJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcclxuXHJcbi8vIE92ZXJyaWRlIEJvb3RzdHJhcCBtb2RhbCB2YXJpYWJsZXNcclxuJG1vZGFsLWlubmVyLXBhZGRpbmc6IDRyZW0gMXJlbSAhZGVmYXVsdDtcclxuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLXdpZHRoOiAwICFkZWZhdWx0O1xyXG4iXX0= */"

/***/ }),

/***/ "./src/app/componentes/ta-te-ti/ta-te-ti.component.ts":
/*!************************************************************!*\
  !*** ./src/app/componentes/ta-te-ti/ta-te-ti.component.ts ***!
  \************************************************************/
/*! exports provided: TaTeTiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaTeTiComponent", function() { return TaTeTiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/servicios/Usuario.service */ "./src/app/servicios/Usuario.service.ts");
/* harmony import */ var src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/servicios/DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let TaTeTiComponent = class TaTeTiComponent {
    constructor(uService, router, dataApi) {
        this.uService = uService;
        this.router = router;
        this.dataApi = dataApi;
        this.nombre = "";
        this.imagenUser = "";
    }
    ngOnInit() {
        this.nombre = "Anónimo";
        this.imagenUser = "assets/imagenes/default-user.png";
        if (this.uService.usuario.Nombre != "") {
            this.nombre = this.uService.usuario.Nombre;
            this.imagenUser = this.uService.usuario.ImagenUrl;
        }
        this.PLAYER_COMPUTER = { name: 'La Máquina', symbol: 'o' };
        this.PLAYER_HUMAN = { name: this.nombre, symbol: 'x' };
        this.DRAW = { name: 'Empate' };
        this.currentPlayer = this.PLAYER_HUMAN;
        this.newGame();
    }
    square_click(square) {
        if (square.value === '' && !this.gameOver) {
            square.value = this.PLAYER_HUMAN.symbol;
            this.completeMove(this.PLAYER_HUMAN);
        }
    }
    computerMove(firstMove = false) {
        this.boardLocked = true;
        setTimeout(() => {
            let square = firstMove ? this.board[4] : this.getRandomAvailableSquare();
            square.value = this.PLAYER_COMPUTER.symbol;
            this.completeMove(this.PLAYER_COMPUTER);
            this.boardLocked = false;
        }, 600);
    }
    completeMove(player) {
        if (this.isWinner(player.symbol))
            this.showGameOver(player);
        else if (!this.availableSquaresExist())
            this.showGameOver(this.DRAW);
        else {
            this.currentPlayer = (this.currentPlayer == this.PLAYER_COMPUTER ? this.PLAYER_HUMAN : this.PLAYER_COMPUTER);
            if (this.currentPlayer == this.PLAYER_COMPUTER)
                this.computerMove();
        }
    }
    availableSquaresExist() {
        return this.board.filter(s => s.value == '').length > 0;
    }
    getRandomAvailableSquare() {
        let availableSquares = this.board.filter(s => s.value === '');
        var squareIndex = this.getRndInteger(0, availableSquares.length - 1);
        return availableSquares[squareIndex];
    }
    showGameOver(winner) {
        this.gameOver = true;
        this.lastWinner = winner;
        if (winner !== this.DRAW) {
            this.currentPlayer = winner;
            if (winner.symbol == "x") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: "Ganaste!",
                    type: "success"
                });
                this.guardarResultados();
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'PERDISTE!',
                    animation: false,
                    type: 'error',
                    customClass: {
                        popup: 'animated tada'
                    }
                });
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: "Empate!",
                type: "info"
            });
        }
    }
    get winningIndexes() {
        return [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6] //second diagonal
        ];
    }
    isWinner(symbol) {
        for (let pattern of this.winningIndexes) {
            const foundWinner = this.board[pattern[0]].value == symbol
                && this.board[pattern[1]].value == symbol
                && this.board[pattern[2]].value == symbol;
            if (foundWinner) {
                for (let index of pattern) {
                    this.board[index].winner = true;
                }
                return true;
            }
        }
        return false;
    }
    newGame() {
        this.board = [
            { value: '' }, { value: '' }, { value: '' },
            { value: '' }, { value: '' }, { value: '' },
            { value: '' }, { value: '' }, { value: '' }
        ];
        this.gameOver = false;
        this.boardLocked = false;
        if (this.currentPlayer == this.PLAYER_COMPUTER) {
            this.boardLocked = true;
            this.computerMove(true);
        }
    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    salir() {
        this.router.navigate(['/juegos']);
    }
    guardarResultados() {
        let puntos = {
            ImagenUrl: this.imagenUser,
            Jugador: this.nombre,
            Juego: "Ta-Te-Ti",
            Puntuacion: "Le ganó a la máquina!"
        };
        this.dataApi.AgregarUno(puntos, "puntuacion");
    }
};
TaTeTiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ta-te-ti',
        template: __webpack_require__(/*! raw-loader!./ta-te-ti.component.html */ "./node_modules/raw-loader/index.js!./src/app/componentes/ta-te-ti/ta-te-ti.component.html"),
        styles: [__webpack_require__(/*! ./ta-te-ti.component.scss */ "./src/app/componentes/ta-te-ti/ta-te-ti.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_servicios_Usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_servicios_DataApi_service__WEBPACK_IMPORTED_MODULE_4__["DataApiService"]])
], TaTeTiComponent);



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]
        ],
        providers: [
            { provide: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DATE_LOCALE"], useValue: 'es-ve' }
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/servicios/DataApi.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/DataApi.service.ts ***!
  \**********************************************/
/*! exports provided: DataApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataApiService", function() { return DataApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let DataApiService = class DataApiService {
    constructor(afs) {
        this.afs = afs;
        this.selectedObjeto = {
            id: null
        };
    }
    TraerTodos(dataNombre) {
        this.objetosCollection = this.afs.collection(dataNombre);
        return this.objetos = this.objetosCollection.snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(changes => {
            return changes.map(action => {
                const data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
    }
    // getAllBooksOffers(dataNombre: string) {
    //     this.objetosCollection = this.afs.collection(dataNombre, ref => ref.where('Perfil', '==', 'Administrador'));
    //     return this.objetos = this.objetosCollection.snapshotChanges()
    //         .pipe(map(changes => {
    //             return changes.map(action => {
    //                 const data = action.payload.doc.data() as any;
    //                 data.id = action.payload.doc.id;
    //                 return data;
    //             });
    //         }));
    // }
    TraerUno(id, dataNombre) {
        this.objetoDoc = this.afs.doc(`${dataNombre}/${id}`);
        return this.objeto = this.objetoDoc.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(action => {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                const data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
    }
    AgregarUno(objeto, dataNombre) {
        // this.objetosCollection.add(objeto);
        this.afs.collection(dataNombre).add(objeto);
        // .doc().set(objeto);
    }
    ModificarUno(objeto, dataNombre) {
        let id = objeto.id;
        this.objetoDoc = this.afs.doc(`${dataNombre}/${id}`);
        this.objetoDoc.update(objeto);
    }
    BorrarUno(id, dataNombre) {
        this.objetoDoc = this.afs.doc(`${dataNombre}/${id}`);
        this.objetoDoc.delete();
    }
};
DataApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
], DataApiService);



/***/ }),

/***/ "./src/app/servicios/Usuario.service.ts":
/*!**********************************************!*\
  !*** ./src/app/servicios/Usuario.service.ts ***!
  \**********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _DataApi_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DataApi.service */ "./src/app/servicios/DataApi.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let UsuarioService = class UsuarioService {
    constructor(afsAuth, db, router, dataApi) {
        this.afsAuth = afsAuth;
        this.db = db;
        this.router = router;
        this.dataApi = dataApi;
        this.redirectUrl = '/';
        this.loginUrl = '/logearse';
        this.incioUrl = '';
        this.usuario = this.UsuarioVacio();
    }
    RegistrarUsuario(usuario) {
        return new Promise(() => {
            this.afsAuth.auth.createUserWithEmailAndPassword(usuario.Email, usuario.Password)
                .then((userData) => {
                return userData.user.updateProfile({
                    displayName: usuario.Nombre,
                    photoURL: usuario.ImagenUrl
                });
            }, (err) => {
                console.log(err);
                this.UsuarioVacio();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    title: "Error al registrarse",
                    text: "Sucedió un error al registrarse, intente nuevamente.",
                    type: "error"
                });
            })
                .then(() => {
                this.EstaLogeado().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe((userData) => {
                    if (userData) {
                        usuario.Password = '';
                        usuario.Uid = userData.uid;
                        usuario.Email = userData.email;
                        usuario.ImagenUrl = userData.photoURL;
                        usuario.Nombre = userData.displayName;
                        this.router.navigate(['']);
                        this.db.collection('usuarios').doc(userData.uid).set(usuario);
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            position: 'top-end',
                            type: 'success',
                            title: 'Registro exitoso!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    else {
                        this.UsuarioVacio();
                    }
                }, (err) => {
                    console.log(err);
                    this.UsuarioVacio();
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        title: "Error inesperado",
                        text: "Sucedió un error inesperado.",
                        type: "error"
                    });
                    // this.ns.error("Error inesperado", "Sucedió un error inesperado.");
                });
            });
        });
    }
    LogearUsuario(email, password) {
        return new Promise(() => {
            this.afsAuth.auth.signInWithEmailAndPassword(email, password)
                .then((userData) => {
                if (userData) {
                    this.dataApi.TraerUno(userData.user.uid, 'usuarios').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(userx => {
                        this.usuario.Uid = userx.Uid;
                        this.usuario.Email = userx.Email;
                        this.usuario.ImagenUrl = userx.ImagenUrl;
                        this.usuario.Nombre = userx.Nombre;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            position: 'top-end',
                            type: 'success',
                            title: 'Logeo exitoso!',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        this.router.navigate(['']);
                    });
                }
                else {
                    this.usuario = this.UsuarioVacio();
                }
            }, (err) => {
                console.log(err);
                this.usuario = this.UsuarioVacio();
                sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    title: "Error al logearse",
                    text: "La cuenta es inexistente, o las credenciales son incorrectas.",
                    type: "error"
                });
            });
        });
    }
    DeslogearUsuario() {
        this.usuario = this.UsuarioVacio();
        this.afsAuth.auth.signOut();
    }
    EstaLogeado() {
        return this.afsAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(auth => auth));
    }
    UsuarioVacio() {
        return {
            Uid: '',
            Nombre: '',
            Email: '',
            Password: '',
            ImagenUrl: ""
        };
    }
    isUserLoggedIn() {
        return this.estaLogeado;
    }
    setRedirectUrl(url) {
        this.redirectUrl = url;
    }
    getLoginUrl() {
        return this.loginUrl;
    }
    getInicioUrl() {
        return this.incioUrl;
    }
    EstadoLogeo() {
        this.afsAuth.auth.onAuthStateChanged((user) => {
            if (user) {
                this.dataApi.TraerUno(user.uid, 'usuarios').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(userx => {
                    this.usuario = userx;
                });
                this.estaLogeado = true;
            }
            else
                this.estaLogeado = false;
        }, () => {
            this.estaLogeado = false;
        });
    }
};
UsuarioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _DataApi_service__WEBPACK_IMPORTED_MODULE_6__["DataApiService"]])
], UsuarioService);



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
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyAKm2lkM_4Yn0a4oEy5I6xM5VQMgbvx2hw",
        authDomain: "sala-de-juegos-546f1.firebaseapp.com",
        databaseURL: "https://sala-de-juegos-546f1.firebaseio.com",
        projectId: "sala-de-juegos-546f1",
        storageBucket: "sala-de-juegos-546f1.appspot.com",
        messagingSenderId: "204378112591",
        appId: "1:204378112591:web:03fce0298d9fcb42"
    }
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Carpetas Usuario\Escritorio\Working\TP-Sala-de-Juegos-ANGULAR-\Sala-de-Juegos-v2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map