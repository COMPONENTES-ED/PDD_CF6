<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>1</span></div>
        <h1>Documentación técnica</h1>
      </div>
      <div
        class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5 mb-2"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/tema1/3.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            La documentación técnica representa un elemento fundamental en la
            gestión de datos masivos y analítica. Más allá de un simple registro
            de procedimientos, constituye la memoria institucional de los
            procesos de datos, facilitando la reproducibilidad, el mantenimiento
            y la transferencia de conocimiento. Este capítulo explora los
            diferentes tipos de documentación, estándares actuales y
            herramientas que facilitan esta labor esencial.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_1"
        class="titulo-segundo color-acento-contenido"
        data-aos="flip-up"
      >
        <h2>1.1 Tipos de documentación</h2>
      </div>
      <p class="mb-4" data-aos="fade-right">
        La documentación técnica en el contexto de datos masivos abarca diversos
        niveles y propósitos. Los documentos de arquitectura proporcionan una
        visión general de la estructura y flujo de datos, mientras que la
        documentación de procesos detalla los pasos específicos en las
        transformaciones y análisis. Los manuales de usuario y las guías de
        mantenimiento completan el espectro, asegurando que todos los
        <em>stakeholders</em> puedan interactuar efectivamente con los sistemas
        de datos.
      </p>
      <p class="mb-5" data-aos="fade-up">
        Para comprender mejor los diferentes tipos de documentación y sus
        características específicas, consideremos la siguiente clasificación
        detallada:
      </p>
      <div class="titulo-sexto color-acento-contenido" data-aos="fade-up">
        <p class="mb-0">
          <b>Tabla 1.</b> Tipos de documentación y características
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
              <th>Tipo de documentación</th>
              <th>Audiencia principal</th>
              <th>Contenido clave</th>
              <th>Frecuencia de actualización</th>
              <th>Nivel de detalle</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr class="bg-white">
              <td>Arquitectura de datos</td>
              <td>Arquitectos, Ingenieros</td>
              <td>Diagramas de flujo, modelos de datos, dependencias</td>
              <td>Baja - en cambios mayores</td>
              <td>Alto nivel, enfoque en relaciones</td>
            </tr>
            <tr class="bg-white">
              <td>Procesos ETL</td>
              <td>Desarrolladores, Analistas</td>
              <td>Transformaciones, reglas de negocio, validaciones</td>
              <td>Media - con cada modificación</td>
              <td>Detallado, paso a paso</td>
            </tr>
            <tr class="bg-white">
              <td>APIs e interfaces</td>
              <td>Desarrolladores externos e internos</td>
              <td><em>Endpoints</em>, parámetros, ejemplos de uso</td>
              <td>Alta - con cada cambio de API</td>
              <td>Técnico y específico</td>
            </tr>
            <tr class="bg-white">
              <td>Calidad de datos</td>
              <td>Analistas, Gestores de datos</td>
              <td>Métricas, umbrales, procedimientos de validación</td>
              <td>Alta - seguimiento continuo</td>
              <td>Medio, énfasis en métricas</td>
            </tr>
            <tr class="bg-white">
              <td>Seguridad y acceso</td>
              <td>Administradores, Auditores</td>
              <td>Políticas, permisos, protocolos</td>
              <td>Media - cambios en políticas</td>
              <td>Exhaustivo en procedimientos</td>
            </tr>
            <tr class="bg-white">
              <td>Guías de usuario</td>
              <td>Usuarios finales</td>
              <td>
                Instrucciones de uso, casos comunes, solución de problemas
              </td>
              <td>Media - nuevas funcionalidades</td>
              <td>Básico, enfoque práctico</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row justify-content-center mb-2" data-aos="zoom-in-out">
        <div class="col-lg-10">
          <div class="fondo-color-sistema-j p-4 px-lg-5">
            <p class="mb-0">
              Esta clasificación permite alinear cada tipo de documentación con
              sus objetivos específicos y audiencia prevista, facilitando la
              creación y mantenimiento de una estructura documental coherente y
              efectiva.
            </p>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_2"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade-left"
      >
        <h2>1.2 Estándares y mejores prácticas</h2>
      </div>
      <div class="row mb-4">
        <div class="col-lg-7">
          <p class="mb-4" data-aos="fade-left">
            Los estándares de documentación técnica han evolucionado
            significativamente con la expansión de los sistemas de datos
            masivos. La adopción de formatos estandarizados como Markdown o
            AsciiDoc facilita la creación y mantenimiento de documentación que
            puede versionarse junto con el código. La documentación como código
            (<em>Documentation as Code</em>) ha emergido como un paradigma que
            permite tratar los documentos técnicos con el mismo rigor y
            herramientas que el código fuente.
          </p>
          <p class="mb-0" data-aos="fade-right">
            Las mejores prácticas actuales enfatizan la importancia de la
            documentación viva, que evoluciona junto con los sistemas que
            describe. Esto implica integrar la documentación en el ciclo de
            desarrollo, estableciendo procesos de revisión y actualización
            regulares. La automatización juega un papel importante, permitiendo
            generar parte de la documentación directamente desde el código y los
            metadatos del sistema.
          </p>
        </div>
        <div class="col-lg-5 order-first order-lg-last" data-aos="fade">
          <figure class="mb-4 mb-lg-0">
            <img
              class="mx-auto"
              src="@/assets/curso/tema1/4.png"
              style="max-width: 505px;"
            />
          </figure>
        </div>
      </div>
      <div class="row justify-content-center mb-2" data-aos="flip-up">
        <div class="col-lg-10">
          <div class="fondo-color-sistema-j p-4">
            <p class="mb-0">
              La consistencia en el estilo y formato resulta esencial para la
              usabilidad de la documentación. El uso de plantillas predefinidas
              y guías de estilo ayuda a mantener la coherencia a través de
              diferentes equipos y proyectos. La documentación debe ser concisa
              pero completa, evitando tanto la sobrecarga de información como
              las omisiones significativas.
            </p>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div
        id="t_1_3"
        class="titulo-segundo color-acento-contenido"
        data-aos="fade"
      >
        <h2>1.3 Herramientas de documentación</h2>
      </div>
      <p class="mb-4" data-aos="fade-right">
        El ecosistema de herramientas para documentación técnica se ha expandido
        considerablemente en los últimos años. Los sistemas modernos de
        documentación combinan capacidades de edición colaborativa, control de
        versiones y publicación automatizada. Herramientas como Sphinx, MkDocs y
        Confluence han establecido nuevos estándares en la creación y
        mantenimiento de documentación técnica.
      </p>
      <div class="row">
        <div class="col-lg-5" data-aos="fade-right">
          <figure class="mb-4 mb-lg-0">
            <img
              class="mx-auto"
              src="@/assets/curso/tema1/5.svg"
              style="max-width: 505px;"
            />
          </figure>
        </div>
        <div class="col-lg-7">
          <p class="mb-4" data-aos="fade-right">
            La integración con sistemas de control de versiones como Git permite
            mantener la documentación sincronizada con el código y los procesos
            que describe. Los sistemas de integración continua pueden
            automatizar la validación y publicación de documentación, asegurando
            que los cambios en el código se reflejen adecuadamente en la
            documentación correspondiente.
          </p>
          <div class="fondo-color-sistema-k p-4 mb-4" data-aos="flip-up">
            <div class="row">
              <div class="col-md-auto">
                <figure class="mb-4 mb-md-0">
                  <img
                    class="mx-auto"
                    src="@/assets/curso/tema1/6.svg"
                    style="max-width: 85px;"
                  />
                </figure>
              </div>
              <div class="col">
                <p class="mb-0">
                  Las herramientas de documentación API, como Swagger o OpenAPI,
                  facilitan la creación y mantenimiento de documentación
                  específica para interfaces de programación. Estas herramientas
                  pueden generar automáticamente documentación actualizada a
                  partir de las definiciones de API, reduciendo el riesgo de
                  discrepancias entre la implementación y la documentación.
                </p>
              </div>
            </div>
          </div>
          <p class="mb-0" data-aos="fade">
            La selección de herramientas debe considerar factores como la
            escalabilidad, la facilidad de uso para los contribuyentes, las
            capacidades de búsqueda y la integración con flujos de trabajo
            existentes. La adopción de herramientas que soportan formatos
            estándar y exportación a múltiples formatos aumenta la flexibilidad
            y longevidad de la documentación.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema1',
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
