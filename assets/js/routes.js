// Fuente de consulta o diccionario para el Router, basicamente va a ser un json que va a contener las direcciones que se van a cargar

const PATHS = {
    home: {
        path: '/',
        template: `
        
        <!-- Seccion Acerca de  -->
        <!--Abreviación emmet: .container>.row>.col^.row>.col-6*2 -->
        <!-- (^) Este simbolo sirve para irse un elemento atras -->
        <div class="container mt-4">
            <div class="row">
                <div class="col">
                    <h1>Karen Valier</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6">
                    <h2>Desarrolladora Java Full Stack</h2>
                </div>
                <div class="col-12 col-md-6">
                    <h2>Artista digital</h2>
                </div>
            </div>
        </div>

        <!-- Seccion Carrousel -->
        <!--Abreviacion emmet: .container-fluid>.row>.col-9+.col-3 -->
        <!-- (+) sirve para agregar un elemento hermano -->
        <div class="container my-4 text-center">
            <div class="row justify-content-center">
                <div class="col-9 mb-4">
                    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active " data-bs-interval="3000">
                                <img src="./assets/img/pexels-debasish-vishal-4124167.jpg" class="d-block w-100 rounded"
                                    alt="storm">
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src="./assets/img/pexels-faith-8574399.jpg" class="d-block w-100 rounded"
                                    alt="pinky sunset">
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src="./assets/img/pexels-engin-akyurt-7085607.jpg" class="d-block w-100 rounded"
                                    alt="blue sky">
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src="./assets/img/pexels-tom-fisk-10069109.jpg" class="d-block w-100 rounded"
                                    alt="orange sunset">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <!-- descripcion carousel -->
                <div class="col-12 col-lg-3 ">
                    <!-- Descripcion -->
                    <div class="row">
                        <div class="col">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, laudantium! Voluptas
                                tenetur
                                rem minus eligendi id quos vel dicta inventore?</p>
                        </div>
                    </div>
                    <!-- Boton Linkedin -->
                    <div class="row">
                        <div class="col">
                            <a href="https://www.linkedin.com/in/karen-valier-1463ba24a/" target="_blank"
                                rel="noopener noreferrer">
                                <button type="button" class="btn btn-dark"><i class="bi bi-linkedin"></i>
                                    Contáctame</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Cards -->
        <div class="container text-center">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 my-2">
                    <div class="card" style="width: 300px; height: 650px;">
                        <img src="./assets/img/css.png" class="card-img-top" alt="logo css">
                        <div class="card-body">
                            <h5 class="card-title">CSS</h5>
                            <p class="card-text">CSS (Cascading Style Sheets) es un lenguaje utilizado para describir el
                                estilo visual y la presentación de documentos HTML y XML. Se utiliza para controlar la
                                apariencia de los elementos de una página web, incluyendo el color de fondo, la
                                tipografía,
                                el diseño, el tamaño y la posición de los elementos.</p>
                            <a href="https://developer.mozilla.org/es/docs/Web/CSS" class="btn btn-dark"
                                target="_blank">Conoce más</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12 my-2">
                    <div class="card" style="width: 300px; height: 650px;">
                        <img src="./assets/img/html.png" class="card-img-top" alt="logo html">
                        <div class="card-body">
                            <h5 class="card-title">HTML</h5>
                            <p class="card-text">HTML (HyperText Markup Language) es un lenguaje de marcado utilizado
                                para
                                crear y estructurar el contenido de las páginas web. HTML se utiliza para crear la
                                estructura básica de una página web, como encabezados, párrafos, listas, enlaces,
                                imágenes y
                                otros elementos.</p>
                            <a href="https://developer.mozilla.org/es/docs/Web/HTML" class="btn btn-dark"
                                target="_blank">Conoce más</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12 my-2">
                    <div class="card" style="width: 300px; height: 650px;">
                        <img src="./assets/img/js.png" class="card-img-top" alt="logo js">
                        <div class="card-body">
                            <h5 class="card-title">Javascript</h5>
                            <p class="card-text">JS (JavaScript) es un lenguaje de programación interpretado utilizado
                                para
                                crear aplicaciones web dinámicas e interactivas. Es un lenguaje de programación de alto
                                nivel y orientado a objetos que se utiliza tanto en el lado del cliente (navegador) como
                                en
                                el lado del servidor.</p>
                            <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" class="btn btn-dark"
                                target="_blank">Conoce más</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Acceso a DOM -->
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-12 text-center my-2">
                    <h2>Cambia el color del texto</h2>
                    <p id="name">Mi nombre</p>
                </div>
            </div>
            <!-- Botones que cambia el color -->
            <div class="row justify-content-center">
                <div class="col-4">
                    <button type="button" class="btn btn-danger btn-lg" onclick="changeColorToRed('red')">Rojo</button>
                </div>
                <div class="col-4">
                    <button type="button" class="btn btn-primary btn-lg"
                        onclick="changeColorToRed('blue')">Azul</button>
                </div>
                <div class="col-4">
                    <button type="button" class="btn btn-success btn-lg"
                        onclick="changeColorToRed('green')">Verde</button>
                </div>
            </div>
        </div>

        <div class="container my-4 text-center">
            <div class="row">
                <div class="col-12 justify-content-center">
                    <h2>Cambiar texto de color</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-3">
                    <p class="text-color" onclick="changeColorParagraph(this, '#9c2aff')">Me cambiaré a Morado</p>
                </div>
                <div class="col-3">
                    <p class="text-color" onclick="changeColorParagraph(this,'#ff33e0')">Me cambiaré a Rosado</p>
                </div>
                <div class="col-3">
                    <p class="text-color" onclick="changeColorParagraph(this,'blue')">Me cambiaré a Azul</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <button onclick="resetColor()" type="button" class="btn btn-dark">Resetear los textos</button>
                </div>
            </div>
        </div>

        <!-- Ondas -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#212529" fill-opacity="1"
                d="M0,96L40,112C80,128,160,160,240,192C320,224,400,256,480,245.3C560,235,640,181,720,160C800,139,880,149,960,149.3C1040,149,1120,139,1200,117.3C1280,96,1360,64,1400,48L1440,32L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
            </path>
        </svg>
        `
    },
    myname: {
        path: '/myname',
        template: `
        <div class="container text-center my-4">
            <div class="row my-4">
                <div class="col-12">
                    <h1 id="nombre">Hola amig@</h1>
                </div>
            </div>
            <div class="row my-4">
                <div class="col-12">
                    <button type="button" class="btn btn-dark" onclick="changeName()">Cambiar nombre</button>
                </div>
            </div>
        </div>
        `
    }
}