const navbarContent = `
    <div class="container-fluid navbarCont">
        <a class="navbar-brand d-sm-block logo" href="https://ceicaal0.webnode.page/" target="blank">
            <img src="/images/Logotipo-CEICAAL-HD.png" class="img-fluid img">
        </a>
            
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav menu" data-animation="center">
                <li class="nav-item ">
                    <a class="nav-link" href="https://ceicaal0.webnode.page/" id="inicio" target="blank">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://ceicaal0.webnode.page/sobre-nosotros/" id="nosotros" target="blank">Nosotros</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://ceicaal0.webnode.page/proyectos/" id="investigacionYProyectos" target="blank">Investigación y Proyectos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://ceicaal0.webnode.page/noticias/" id="articulos" target="blank">Artículos</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://ceicaal0.webnode.page/contacto/" id="contacto">Contacto</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://ceicaal0.webnode.page/fotogaleria/" id="fotogaleria" target="blank">Fotogaleria</a>
                </li>
            </ul>
        </div>
    </div>

`;

const navbarContainer = document.querySelector('.navbar');
navbarContainer.innerHTML = navbarContent;
