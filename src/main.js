
import './style.less';
import Handlebars from 'handlebars';
import { datos } from './variables.js';
import deportesTemplate from './partials/deportes.hbs?raw';

const plantilla = Handlebars.compile(deportesTemplate);

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <h1>JM<span>.</span></h1>
    <p>Portafolio de Julio Mejia</p>
  </header>

  <main class="contenedor">
    <h1>Mi colección de deportes</h1>
    <p>Conoce cinco disciplinas deportivas y su clasificación.</p>

    ${plantilla(datos)}
  </main>

  <footer>
    <p>© 2026 Julio Mejia - Todos los derechos reservados.</p>
  </footer>
`;
