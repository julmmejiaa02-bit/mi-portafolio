
import './style.less'

document.querySelector('#app').innerHTML = `
  <header class="navbar">
    <a href="#inicio" class="logo">JM<span>.</span></a>

    <nav>
      <a href="#inicio">Inicio</a>
      <a href="#sobre-mi">Sobre mí</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#proyectos">Proyectos</a>
      <a href="#contacto">Contacto</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="inicio">
      <div class="hero-content">
        <span class="tag">INGENIERÍA EN SISTEMAS</span>

        <h1>Hola, soy <span>Julio Mejia</span></h1>

        <h2>Desarrollador en formación</h2>

        <p>
          Me apasiona la tecnología, la programación y el desarrollo
          de soluciones digitales. Me gusta aprender y crear
          proyectos que aporten valor.
        </p>

        <div class="hero-buttons">
          <a href="#proyectos" class="btn primary">Ver proyectos</a>
          <a href="#contacto" class="btn secondary">Contactarme</a>
        </div>
      </div>

      <div class="hero-image">
        <div class="profile-circle">
          <span>JM</span>
        </div>
      </div>
    </section>

    <section class="about section" id="sobre-mi">
      <span class="tag">CONÓCEME</span>
      <h2>Sobre mí</h2>

      <p>
        Soy estudiante de Ingeniería en Sistemas, interesado
        en el desarrollo web, las bases de datos y la creación
        de aplicaciones. Me considero una persona responsable,
        creativa y con muchas ganas de seguir aprendiendo.
      </p>
    </section>

    <section class="skills section" id="habilidades">
      <span class="tag">LO QUE SÉ HACER</span>
      <h2>Mis habilidades</h2>

      <div class="skills-grid">
        <article class="skill-card">
          <span>01</span>
          <h3>HTML y CSS</h3>
          <p>Creación y diseño de páginas web.</p>
        </article>

        <article class="skill-card">
          <span>02</span>
          <h3>JavaScript</h3>
          <p>Desarrollo de funcionalidades web.</p>
        </article>

        <article class="skill-card">
          <span>03</span>
          <h3>C# y C++</h3>
          <p>Programación y lógica computacional.</p>
        </article>

        <article class="skill-card">
          <span>04</span>
          <h3>Bases de datos</h3>
          <p>Diseño y gestión de bases de datos SQL.</p>
        </article>
      </div>
    </section>

    <section class="projects section" id="proyectos">
      <span class="tag">MI TRABAJO</span>
      <h2>Proyectos destacados</h2>

      <div class="projects-grid">
        <article class="project-card">
          <div class="project-number">01</div>
          <h3>Gemelos Digitales</h3>
          <p>Landing page desarrollada con tecnologías web.</p>
          <span class="project-tech">HTML · CSS · JavaScript</span>
        </article>

        <article class="project-card">
          <div class="project-number">02</div>
          <h3>Sistema de gestión</h3>
          <p>Proyecto académico enfocado en el manejo de información.</p>
          <span class="project-tech">C# · SQL</span>
        </article>

        <article class="project-card">
          <div class="project-number">03</div>
          <h3>Portafolio web</h3>
          <p>Mi espacio personal para mostrar mis conocimientos y proyectos.</p>
          <span class="project-tech">Vite · LESS · JavaScript</span>
        </article>
      </div>
    </section>

    <section class="contact section" id="contacto">
      <span class="tag">HABLEMOS</span>
      <h2>¿Trabajamos juntos?</h2>
      <p>Estoy abierto a nuevas oportunidades y proyectos.</p>
      <a href="mailto:tu-correo@ejemplo.com" class="btn primary">
        Enviar correo
      </a>
    </section>
  </main>

  <footer>
    <p>© 2026 Julio Mejia. Todos los derechos reservados.</p>
  </footer>
`
