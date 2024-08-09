document.addEventListener('DOMContentLoaded', function() {
    ScrollReveal().reveal('.sobremi .contenedor p, .sobremi .contenedor h2, .sobremi .contenedor h2 span, .trabajos p, .trabajos .container .caja1, .contacto p, .contacto h2', {
        duration: 2000,      // Duración de la animación (2 segundos)
        origin: 'left',      // Animación desde la izquierda
        distance: '100px',   // Distancia que el texto recorrerá al aparecer
        opacity: 0,          // Inicia con opacidad 0 y aparece
        easing: 'ease-in-out', // Animación suave
        reset: true         // La animación ocurre solo una vez, no se reinicia al hacer scroll hacia arriba
    });

    const sobremi = document.getElementById('sobremibtn');
    const sobremiSection = document.getElementById('sobremi');
    const trabajos = document.getElementById('trabajosbtn');
    const trabajosSection = document.getElementById('trabajos');
    const contacto = document.getElementById('contactobtn');
    const contactoSection = document.getElementById('contacto');

    sobremi.addEventListener('click', function() {
        sobremiSection.scrollIntoView({ behavior: 'smooth' });
    });

    trabajos.addEventListener('click', function() {
        trabajosSection.scrollIntoView({ behavior: 'smooth' });
    });

    contacto.addEventListener('click', function() {
        contactoSection.scrollIntoView({ behavior: 'smooth' });
    });
});

function direciones(element) {
    
    const url = element.getAttribute('data-url');
    
    window.open(url, '_blank');
}

function cambiarLenguaje() {
    const lenguajebtn = document.getElementById('lenguajebtn');
    const ingles = lenguajebtn.textContent === 'EN';

    if (ingles) {
        lenguajebtn.textContent = 'ES';

        document.getElementById('sobremibtn').textContent = 'ABOUT ME';
        document.getElementById('trabajosbtn').textContent = 'WORKS';
        document.getElementById('contactobtn').textContent = 'CONTACT';
        document.querySelector('.inicio h2').innerHTML = 'Efficiency and creativity <br> <span>in every line</span><br> of code';
        document.querySelector('.sobremi p').textContent = 'ABOUT ME';
        document.querySelector('.sobremi .desc').innerHTML = 'Systems Engineering student at <span>ORT</span> Uruguay (3rd semester). Previously took a course in <span>web development</span> and <span>Databases</span> (PHP - MYSQL).';
        document.getElementById('espacio').textContent = 'EXPERIENCE';
        document.querySelector('.izdadcha1').innerHTML = '<span>✮</span>  WEB <span>DEVELOPMENT</span>';
        document.querySelector('.izdadcha2').innerHTML = '<span>✮</span>  APPLICATION <span>DEVELOPMENT</span>';
        document.querySelector('.izdadcha3').innerHTML = '<span>✮</span>  Automation and logistics with <span>TAILORED</span> <span>SYSTEMS</span>';
        document.querySelector('.izdadcha4').innerHTML = '<span>✮</span>  Design of <span>MANAGEMENT</span> interfaces';
        document.querySelector('.izdadcha5').innerHTML = '<span>✮</span>  Administration and management of <span>DATABASES</span>';
        document.querySelector('.trabajos p').textContent = 'WORKS';
        document.querySelector('.caja1 .titulo').textContent = 'AUTOMOTIVE';
        document.querySelector('.caja1 .desc').innerHTML = 'In this project, a <span>Frontend</span> was designed for a car dealership, and also in <span>Backend</span> to manage <span>Employees</span> - <span>Customers</span> - <span>Purchases</span> - <span>Reservations</span> - <span>Published cars</span> (brand, color, motorization, year, and usage).';
        document.querySelector('.caja1 #desc2').innerHTML = 'It is a <span>Website</span> for selling digital services, which includes <span>Web Pages</span> - <span>Online Stores</span> - <span>Management Systems</span> (App or Web).';
        document.querySelector('.contacto p').textContent = 'CONTACT';
   
    } else {
        lenguajebtn.textContent = 'EN';

        document.getElementById('sobremibtn').textContent = 'SOBRE MI';
        document.getElementById('trabajosbtn').textContent = 'TRABAJOS';
        document.getElementById('contactobtn').textContent = 'CONTACTO';
        document.querySelector('.inicio h2').innerHTML = 'Eficiencia y creatividad <br> <span>en cada línea </span><br> de código';
        document.querySelector('.sobremi p').textContent = 'SOBRE MI';
        document.querySelector('.sobremi .desc').innerHTML = 'Estudiante de <span>Ingeneria en Sistema</span> de la <span>ORT</span> Uruguay (3er semestre). Previamente realice un curso de <span>desarrollo web</span> y <span>Bases de datos</span> (PHP - MYSQL).';
        document.getElementById('espacio').textContent = 'EXPERIENCIA';
        document.querySelector('.izdadcha1').innerHTML = '<span>✮</span>  Desarrollo <span>WEB</span>';
        document.querySelector('.izdadcha2').innerHTML = '<span>✮</span>  Desarrollo de <span>APLICACIONES</span>';
        document.querySelector('.izdadcha3').innerHTML = '<span>✮</span>  Automatizacion y logistica con <span>SISTEMAS</span> a <span>MEDIDA</span>';
        document.querySelector('.izdadcha4').innerHTML = '<span>✮</span>  Diseño de interfaces de <span>GESTION</span>';
        document.querySelector('.izdadcha5').innerHTML = '<span>✮</span>  Administracion y manejo de <span>BASE</span> de <span>DATOS</span>';
        document.querySelector('.trabajos p').textContent = 'TRABAJOS';
        document.querySelector('.caja1 .titulo').textContent = 'AUTOMOTORA';
        document.querySelector('.caja1 .desc').innerHTML = 'En este proyecto se diseño un <span>Frontend</span> para una automotora, y tambien en <span>Backend</span> para administrar <span>Empleados</span> - <span>Clientes</span> - <span>Compras</span> - <span>Reservas</span> - <span>Publicado de autos </span>(marca, color, motorizacion, año y uso).';
        document.querySelector('.caja1 #desc2').innerHTML = 'Es una <span>Pagina Web</span> de venta de servicios digitales, la cual incluye <span>Paginas WEB</span> - <span>Tiendas Online</span> - <span>Sistemas de gestion</span> (App u Web)';
        document.querySelector('.contacto p').textContent = 'CONTACTO';
    }
}

