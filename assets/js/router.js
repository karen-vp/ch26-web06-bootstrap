class Router {

    /** 
    * Metodo inicial (constructor que toma un objeto de rutas como parámetro)
    * @param {Object} paths Ejemplo: home: {
        path: '/',
        template: `<h1>Home</h1>`
         },
    *
    * @return {void} no retorna nada.
    */

    constructor(paths) {
        //se guarda el objeto de rutas en la propiedad "paths" de la instancia de Router
        this.paths = paths;
        //se llama al método "initializeRouter" para configurar el enrutador
        this.initializeRouter();
    }

    /**
     * Método para inicializar el enrutador
     * @return {void}. no retorna nada.
     */
    initializeRouter() {
        //se obtiene la URL actual del navegador desde el objeto "location" de la ventana del navegador
        const { location: { pathname = '/' } } = window;
        //se establece la ruta actual basada en la URL actual, si la URL es "/" entonces la ruta actual es "home"
        const URI = (pathname === '/') ? 'home' : pathname.replace('/', '');
        //se carga la vista correspondiente a la ruta actual
        this.load(URI);
    }

    /**
     * Método para cargar la vista correspondiente a una ruta determinada
     * @param {String} page Ejemplo: 'home'
     * @return {void}. no retorna nada.
     */
    load(page = 'home') {
        //se obtiene el objeto de rutas desde la propiedad "paths" de la instancia de Router
        const { paths } = this;
        //se busca la ruta correspondiente a la página actual, si no se encuentra, se usa la ruta de error
        const { path, template } = paths[page] || paths.error;
        //se obtiene el contenedor de la vista
        const $CONTAINER = document.querySelector('#content');
        //se establece la plantilla HTML de la vista como contenido del contenedor
        $CONTAINER.innerHTML = template;
        //se actualiza la URL actual del navegador para que coincida con la ruta actual utilizando la API de historial del navegador
        window.history.pushState({}, 'done', path);
    }
}
