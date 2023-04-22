// Logica de la aplicación

class Router{

    //constructor
    constructor(paths){
        this.paths = paths;
        this.initializeRouter();
    }

    //Método para iniciar el router
    initializeRouter(){
        const {location: {pathname = '/'}} = window;
        const URI = (pathname === '/') ? 'home' : pathname.replace('/', '');
        this.load(URI);
        
    }
    //Método para cargar las vistas
    load(page = 'home'){
        const {paths} = this;
        const {path, template} = paths[page] || paths.error;
        const $CONTAINER = document.querySelector('#content');
        $CONTAINER.innerHTML = template;
        window.history.pushState({}, 'done', path);
    }
}