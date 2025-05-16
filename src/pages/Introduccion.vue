<template>
  <div class="curso-main-container introduccion">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero">
          <span><i class="fas fa-info"></i></span>
        </div>
        <h1>Introducción</h1>
      </div>
      <div class="row mb-4">
        <div class="col-lg-9" data-aos="fade-right">
          <div class="fondo-color-sistema-i p-4">
            <p class="mb-4">
              En la era de los datos masivos, la sistematización y documentación
              efectiva del conocimiento se ha convertido en un elemento
              diferenciador para las organizaciones. La capacidad de capturar,
              organizar y comunicar el conocimiento técnico determina no solo la
              eficiencia operativa actual, sino también la capacidad de
              evolución y mejora continua de los sistemas analíticos.
            </p>
            <p class="mb-0">
              Este componente formativo aborda los aspectos fundamentales de la
              documentación y sistematización de datos masivos, proporcionando
              un marco integral para la gestión del conocimiento técnico. Desde
              la creación de documentación robusta hasta la implementación de
              sistemas de gestión del conocimiento, cada tema se explora con un
              enfoque práctico y orientado a resultados.
            </p>
          </div>
        </div>
        <div class="col-lg-3 order-first order-lg-last" data-aos="fade-left">
          <figure class="mb-4 mb-lg-0">
            <img
              class="mx-auto"
              src="@/assets/curso/tema1/1.png"
              style="max-width: 295px;"
            />
          </figure>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-5" data-aos="fade-right">
          <figure class="mb-4 mb-lg-0">
            <img
              class="mx-auto"
              src="@/assets/curso/tema1/2.png"
              style="max-width: 528px;"
            />
          </figure>
        </div>
        <div class="col-lg-7">
          <p class="mb-4" data-aos="fade">
            La documentación técnica moderna trasciende la simple recopilación
            de información, convirtiéndose en un activo estratégico que facilita
            la colaboración, el mantenimiento y la evolución de los sistemas de
            datos. Las metodologías y herramientas presentadas reflejan las
            mejores prácticas actuales en la industria, adaptadas a las
            necesidades específicas de proyectos de datos masivos.
          </p>
          <p class="mb-4">
            Como suele decirse en el campo de la gestión del conocimiento: "La
            información solo se convierte en conocimiento cuando está
            documentada, accesible y puede ser aplicada". Este principio guiará
            nuestra exploración de las técnicas y metodologías presentadas en
            este componente.
          </p>
          <div class="fondo-color-sistema-j p-2 px-3 text-center">
            <p class="mb-0" data-aos="fade">
              ¡Bienvenido al mundo de la sistematización y documentación
              efectiva de datos masivos!
            </p>
          </div>
        </div>
      </div>
      <figure>
        <div class="video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/J-0_yJkn_7s?si=dIlrNLXqtHUp81xV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="allowfullscreen"
          ></iframe>
        </div>
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
