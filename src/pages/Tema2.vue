<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>2</span></div>
        <h1>Informes técnicos avanzados</h1>
      </div>
      <div
        class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5 mb-2"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/tema2/1.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            Los informes técnicos avanzados constituyen una herramienta
            fundamental para comunicar resultados, metodologías y hallazgos en
            proyectos de analítica de datos. La capacidad de transmitir
            información técnica compleja de manera clara y estructurada
            determina en gran medida el impacto y la utilidad de los análisis
            realizados. Este capítulo explora las metodologías y mejores
            prácticas para la creación y gestión de informes técnicos efectivos.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_2_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-right"
      >
        <h2>2.1 Estructura y organización</h2>
      </div>
      <div class="row align-items-center mb-4">
        <div class="col-lg-7" data-aos="fade-right">
          <p class="mb-4">
            La estructuración efectiva de un informe técnico requiere un balance
            entre rigor metodológico y claridad expositiva. La organización
            jerárquica de la información permite a los lectores navegar el
            contenido según sus necesidades específicas, desde resúmenes
            ejecutivos hasta detalles técnicos profundos.
          </p>
          <p class="mb-0">
            Para comprender mejor los elementos constitutivos de un informe
            técnico avanzado y su propósito, consideremos la siguiente
            estructura estándar y sus componentes:
          </p>
        </div>
        <div class="col-lg-5 order-first order-lg-last" data-aos="fade-left">
          <figure class="mb-4 mb-lg-0">
            <img
              class="mx-auto"
              src="@/assets/curso/tema2/2.png"
              style="max-width: 505px;"
            />
          </figure>
        </div>
      </div>
      <div class="titulo-sexto color-acento-contenido" data-aos="fade-right">
        <p class="mb-0">
          <b>Tabla 2.</b> Elementos que integran un informe técnico avanzado
        </p>
      </div>
      <div class="tabla-a color-primario mb-4" data-aos="fade-up">
        <table>
          <caption class="fw-normal">
            <strong>Fuente.</strong>
            OIT, 2024.
          </caption>
          <thead>
            <tr
              class="text-white text-center"
              style="background-color:#03A9F4;"
            >
              <th>Sección</th>
              <th>Contenido principal</th>
              <th>Audiencia objetivo</th>
              <th>Nivel de detalle técnico</th>
              <th>Extensión recomendada</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr class="bg-white">
              <td>Resumen ejecutivo</td>
              <td>Hallazgos clave y recomendaciones</td>
              <td>Gerencia y tomadores de decisiones</td>
              <td>Bajo - enfoque en impacto</td>
              <td>1-2 páginas</td>
            </tr>
            <tr class="bg-white">
              <td>Introducción</td>
              <td>Contexto, objetivos y alcance</td>
              <td>Todos los <em>stakeholders</em></td>
              <td>Medio - marco general</td>
              <td>2-3 páginas</td>
            </tr>
            <tr class="bg-white">
              <td>Metodología</td>
              <td>Técnicas y herramientas utilizadas</td>
              <td>Equipo técnico y analistas</td>
              <td>Alto - detalles específicos</td>
              <td>3-5 páginas</td>
            </tr>
            <tr class="bg-white">
              <td>Análisis de datos</td>
              <td>Procesamiento y resultados</td>
              <td>Analistas y expertos del dominio</td>
              <td>Alto - análisis detallado</td>
              <td>5-10 páginas</td>
            </tr>
            <tr class="bg-white">
              <td>Visualizaciones</td>
              <td>Gráficos y <em>dashboards</em></td>
              <td>Todos los <em>stakeholders</em></td>
              <td>Medio - interpretación clara</td>
              <td>3-5 páginas</td>
            </tr>
            <tr class="bg-white">
              <td>Conclusiones</td>
              <td>Interpretaciones y recomendaciones</td>
              <td>Gerencia y equipo técnico</td>
              <td>Medio - síntesis técnica</td>
              <td>2-3 páginas</td>
            </tr>
            <tr class="bg-white">
              <td>Anexos técnicos</td>
              <td>Código, <em>logs</em> y documentación adicional</td>
              <td>Equipo técnico</td>
              <td>Muy alto - detalles completos</td>
              <td>Sin límite</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row justify-content-center mb-2" data-aos="flip-up">
        <div class="col-lg-10">
          <div class="fondo-color-sistema-j p-2">
            <div class="row align-items-center">
              <div class="col-md-auto">
                <figure class="mb-4 mb-md-0">
                  <img
                    class="mx-auto"
                    src="@/assets/curso/tema2/3.svg"
                    style="max-width: 90px;"
                  />
                </figure>
              </div>
              <div class="col">
                <p class="mb-0">
                  Esta estructura proporciona un marco de referencia que puede
                  adaptarse según las necesidades específicas del proyecto y la
                  organización, manteniendo siempre un flujo lógico y coherente
                  de información.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_2_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-left"
      >
        <h2>2.2 Metodologías de documentación</h2>
      </div>
      <p class="mb-4" data-aos="fade-right">
        Las metodologías de documentación para informes técnicos avanzados han
        evolucionado para adaptarse a las necesidades de proyectos de datos cada
        vez más complejos. El enfoque modular permite desarrollar secciones
        independientes que luego se integran en un documento cohesivo,
        facilitando la colaboración entre diferentes equipos y especialistas.
      </p>
      <p class="mb-5" data-aos="fade-left">
        La creación de informes técnicos sigue un proceso iterativo que
        involucra múltiples etapas y participantes. La siguiente infografía
        ilustra el flujo de trabajo típico en la generación de informes técnicos
        avanzados, desde la recopilación inicial de información hasta la
        publicación final.
      </p>
      <div class="row justify-content-center mb-4" data-aos="fade">
        <div class="col-lg-6">
          <div class="titulo-sexto color-acento-contenido">
            <p class="mb-0">
              <b>Figura 1.</b> Ciclo de vida del informe técnico
            </p>
          </div>
          <figure class="mb-2">
            <img
              class="mx-auto"
              src="@/assets/curso/tema2/4.svg"
              style="max-width: 505px;"
              alt="La Figura 1 se denomina «Ciclo de vida del informe técnico» y presenta los diferentes momentos asociados a este proceso continuo, desde la planificación inicial y la recopilación de datos, hasta la publicación final y el control de versiones."
            />
          </figure>
          <figcaption class="fw-normal">
            <em><b>Fuente</b>: OIT, 2024.</em>
          </figcaption>
        </div>
      </div>
      <div class="row justify-content-center mb-3" data-aos="flip-up">
        <div class="col-lg-10">
          <div class="fondo-color-sistema-j p-2">
            <div class="row align-items-center">
              <div class="col-md-auto">
                <figure class="mb-4 mb-md-0">
                  <img
                    class="mx-auto"
                    src="@/assets/curso/tema2/5.svg"
                    style="max-width: 90px;"
                  />
                </figure>
              </div>
              <div class="col">
                <p class="mb-0">
                  El diagrama representa las etapas interconectadas del proceso
                  de documentación, destacando los puntos de revisión,
                  validación y retroalimentación. Esta visualización ayuda a
                  comprender cómo cada fase contribuye a la calidad final del
                  informe, donde los diferentes roles interactúan durante el
                  proceso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_2_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="flip-up"
      >
        <h2>2.3 Gestión de versiones</h2>
      </div>
      <p class="mb-4" data-aos="fade-up">
        La gestión de versiones en informes técnicos trasciende el simple
        control de cambios. Implica mantener un registro detallado de la
        evolución del documento, las decisiones tomadas y las modificaciones
        realizadas. Esta práctica resulta especialmente importante en entornos
        colaborativos donde múltiples autores contribuyen al documento.
      </p>
      <div class="row align-items-center">
        <div class="col-lg-7" data-aos="fade-right">
          <p class="mb-4">
            Los sistemas modernos de control de versiones permiten mantener un
            historial completo de cambios, facilitando la trazabilidad y la
            capacidad de revertir modificaciones cuando sea necesario. La
            integración con sistemas de gestión de código permite vincular
            versiones específicas del informe con los conjuntos de datos y
            análisis correspondientes.
          </p>
          <div class="fondo-color-sistema-k p-4 mb-4">
            <p class="mb-0">
              El versionado semántico (<em>Semantic Versioning</em>) ha emergido
              como un estándar efectivo para la numeración de versiones de
              informes técnicos. Este sistema utiliza tres números (MAYOR.
              MENOR. PARCHE) para indicar la naturaleza de los cambios
              realizados, facilitando la comprensión rápida del impacto de cada
              actualización.
            </p>
          </div>
          <p class="mb-0">
            La documentación de cambios entre versiones debe incluir no solo qué
            se modificó, sino también por qué se realizaron los cambios. Esta
            información contextual resulta invaluable para comprender la
            evolución del análisis y las decisiones tomadas en diferentes
            momentos del proyecto.
          </p>
        </div>
        <div class="col-lg-5 order-first order-lg-last" data-aos="fade-left">
          <figure class="mb-4 mb-lg-0">
            <img
              class="mx-auto"
              src="@/assets/curso/tema2/6.svg"
              style="max-width: 393px;"
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema2',
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
