<template>
  <div class="curso-main-container pb-3">
    <BannerInterno icono="fas fa-sitemap" titulo="Síntesis"></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5">
      <p class="mb-4" data-aos="fade">
        El diagrama representa la estructura integral del componente formativo
        sobre sistematización y documentación de datos masivos mediante métodos
        de analítica. Partiendo del concepto central de sistematización y
        documentación, se ramifica en cuatro áreas esenciales: documentación,
        informes técnicos avanzados, técnicas de comunicación y gestión del
        conocimiento. Cada área incorpora subtemas específicos que constituyen
        los elementos fundamentales para una gestión efectiva del conocimiento
        en proyectos de análisis de datos.
      </p>
      <p class="mb-4" data-aos="fade">
        Esta organización ilustra el flujo natural del proceso de documentación
        y gestión del conocimiento, desde la creación inicial de documentación
        técnica hasta la implementación de sistemas integrales de gestión del
        conocimiento. La interrelación entre las diferentes áreas muestra cómo
        cada aspecto se complementa con los demás, creando un ecosistema
        cohesivo que asegura la captura, organización y transmisión efectiva del
        conocimiento técnico.
      </p>
      <p class="mb-5" data-aos="fade">
        El diagrama funciona como una hoja de ruta visual para comprender la
        estructura y alcance del componente, permitiendo al aprendiz visualizar
        rápidamente la progresión del aprendizaje y las conexiones entre los
        diferentes aspectos de la documentación técnica. Se sugiere utilizarlo
        como referencia para organizar el estudio y comprender la integración de
        los diversos elementos que componen un sistema efectivo de documentación
        y gestión del conocimiento en proyectos de datos masivos.
      </p>
      <div class="fondo-color-sistema-l mb-2">
        <div class="row justify-content-center p-4 p-lg-5">
          <div class="col-lg-10 mb-5">
            <figure data-aos="zoom-in-up" data-aos-duration="950">
              <img
                src="@/assets/curso/sintesis.svg"
                alt="La sísntesis menciona los principales temas tratados sobre sistematización y documentación de datos masivos como la documentación y los informes técnicos, la gestión del conocimiento y las técnicas de comunicación y algunos subtemas que los integran."
              />
            </figure>
          </div>
          <div class="col-auto">
            <a
              class="anexo mb-5"
              :href="obtenerLink('/downloads/Sintesis.pdf')"
              target="_blank"
            >
              <div class="anexo__icono">
                <img src="@/assets/bullets/icono-pdf.svg" />
              </div>
              <div class="anexo__texto">
                <p>Anexo. Síntesis</p>
              </div></a
            >
          </div>
        </div>
      </div>
      <figcaption class="fw-normal">
        <em><b>Fuente</b>: OIT, 2024.</em>
      </figcaption>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
