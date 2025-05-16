<template>
  <div class="curso-main-container pb-3">
    <BannerInterno></BannerInterno>
    <div class="container tarjeta tarjeta--blanca p-4 p-md-5 mb-5">
      <div class="titulo-principal color-acento-contenido" data-aos="flip-up">
        <div class="titulo-principal__numero"><span>4</span></div>
        <h1>Gestión del conocimiento</h1>
      </div>
      <div
        class="bloque-texto-g color-secundario p-3 p-sm-4 p-md-5"
        data-aos="flip-up"
        data-aos-duration="1000"
      >
        <div
          class="bloque-texto-g__img"
          :style="{
            'background-image': `url(${require('@/assets/curso/tema4/1.png')})`,
          }"
        ></div>
        <div class="bloque-texto-g__texto p-4">
          <p class="mb-0">
            La gestión del conocimiento en el contexto de datos masivos
            representa un desafío que va más allá del simple almacenamiento de
            información. Implica la creación de un ecosistema que facilite la
            captura, organización, distribución y evolución del conocimiento
            organizacional relacionado con datos y análisis. Este capítulo
            explora las estrategias y mejores prácticas para gestionar
            efectivamente el conocimiento en proyectos de analítica avanzada.
          </p>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo">
        <h2 id="t_4_1">4.1 Organización de la información</h2>
      </div>
      <p>
        La organización efectiva de la información constituye la base de una
        gestión del conocimiento exitosa. Un sistema bien estructurado permite
        no solo almacenar información, sino también facilitar su descubrimiento
        y utilización cuando se necesita. La arquitectura de información debe
        considerar tanto las necesidades actuales como la escalabilidad futura.
      </p>
      <p>
        Para comprender mejor las diferentes dimensiones de la organización de
        información en proyectos de datos masivos, consideremos la siguiente
        taxonomía de activos de conocimiento:
      </p>
      <div class="titulo-sexto color-acento-contenido">
        <p class="mb-0">
          <b>Tabla 3.</b> Taxonomía sugerida sobre activos de conocimiento
        </p>
      </div>
      <div class="tabla-a color-primario mb-4">
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
              <th>Tipo de activo</th>
              <th>Contenido principal</th>
              <th>Método de organización</th>
              <th>Frecuencia de actualización</th>
              <th>Herramientas recomendadas</th>
            </tr>
          </thead>
          <tbody class="text-center">
            <tr class="bg-white">
              <td>Documentación técnica</td>
              <td>Especificaciones, arquitectura, código</td>
              <td>Sistema jerárquico por componentes</td>
              <td>Alta - con cada cambio</td>
              <td>Git, Confluence, Sphinx</td>
            </tr>
            <tr class="bg-white">
              <td>Conocimiento procedimental</td>
              <td>Flujos de trabajo, procedimientos, guías</td>
              <td>Organización por procesos</td>
              <td>Media - cambios en procesos</td>
              <td>Wiki, Notion, Sharepoint</td>
            </tr>
            <tr class="bg-white">
              <td>Metadatos</td>
              <td>Diccionarios de datos, linaje</td>
              <td>Estructura relacional</td>
              <td>Alta - cambios en datos</td>
              <td>Data catalogs, neo4j</td>
            </tr>
            <tr class="bg-white">
              <td>Mejores prácticas</td>
              <td>Guías, estándares, lecciones aprendidas</td>
              <td>Categorización temática</td>
              <td>Baja - revisión periódica</td>
              <td>Confluence, gitbook</td>
            </tr>
            <tr class="bg-white">
              <td>Artefactos de modelo</td>
              <td>Modelos, pipelines, configuraciones</td>
              <td>Versionamiento semántico</td>
              <td>Alta - iteración continua</td>
              <td>MLflow, DVC, Git LFS</td>
            </tr>
            <tr class="bg-white">
              <td>Conocimiento contextual</td>
              <td>Decisiones, razonamiento, contexto</td>
              <td>Organización temporal y por proyecto</td>
              <td>Media - eventos significativos</td>
              <td>Confluence, Jira</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row justify-content-center mb-2">
        <div class="col-lg-10">
          <div class="fondo-color-sistema-j p-2">
            <div class="row align-items-center">
              <div class="col-md-auto">
                <figure class="mb-4 mb-md-0">
                  <img
                    class="mx-auto"
                    src="@/assets/curso/tema4/2.svg"
                    style="max-width: 90px;"
                  />
                </figure>
              </div>
              <div class="col">
                <p class="mb-0">
                  Esta taxonomía proporciona un marco de referencia para
                  organizar sistemáticamente los diferentes tipos de
                  conocimiento generados en proyectos de analítica, facilitando
                  su gestión y acceso efectivo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_2">4.2 Control de versiones</h2>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-sm-12 col-lg-7">
          <p class="mb-3">
            El control de versiones en la gestión del conocimiento trasciende la
            mera gestión de cambios en documentos. Implica mantener un registro
            coherente de la evolución del conocimiento organizacional,
            incluyendo el contexto y razonamiento detrás de cada modificación.
          </p>
          <p class="mb-0">
            El proceso de control de versiones en la gestión del conocimiento
            sigue un flujo complejo que integra múltiples aspectos y
            consideraciones. La siguiente infografía ilustra la interrelación
            entre los diferentes elementos del sistema de control de versiones y
            su impacto en la gestión del conocimiento organizacional:
          </p>
        </div>
        <div class="col-sm-12 col-lg-5 d-none d-lg-block">
          <img src="@/assets/curso/tema4/3.png" />
        </div>
      </div>
      <div class="row justify-content-center mb-4 bgcolor-1 p-4">
        <div class="col-sm-12 col-lg-7">
          <div class="titulo-sexto color-acento-contenido">
            <p class="mb-0">
              <b>Figura 2.</b> Ecosistema de control de versiones en gestión del
              conocimiento
            </p>
          </div>
          <figure class="mb-2">
            <img
              src="@/assets/curso/tema4/5.svg"
              alt="La Figura 2 se denomina « Ecosistema de control de versiones en gestión del conocimiento» y muestra un sistema integral que enlaza distintos elementos de la gestión del conocimiento, desde su captura inicial hasta su distribución y actualización en la organización."
            />
          </figure>
          <figcaption class="fw-normal">
            <em><b>Fuente</b>: OIT, 2024.</em>
          </figcaption>
        </div>
      </div>
      <div class="row align-items-center mb-4">
        <div class="col-sm-12 col-lg-7">
          <p class="mb-4">
            Como se observa en el diagrama, el control de versiones actúa como
            un sistema integrado que conecta diferentes aspectos de la gestión
            del conocimiento, desde la captura inicial hasta la distribución y
            actualización del conocimiento organizacional. Elementos clave en el
            control de versiones incluyen:
          </p>
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">Políticas de versionamiento claramente definidas</p>
          </div>
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">Sistemas de nomenclatura estandarizados</p>
          </div>
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">Procesos de revisión y aprobación</p>
          </div>
          <div class="fondo-color-sistema-f py-3 px-4">
            <p class="mb-0">Mecanismos de trazabilidad</p>
          </div>
        </div>
        <div class="col-sm-12 col-lg-5 d-none d-lg-block">
          <figure class="mb-4 mb-lg-0">
            <img src="@/assets/curso/tema4/4.svg" />
          </figure>
        </div>
      </div>
      <Separador></Separador>
      <div class="titulo-segundo" data-aos="flip-up">
        <h2 id="t_4_3">4.3 Mejores prácticas de mantenimiento</h2>
      </div>
      <p class="mb-5">
        El mantenimiento efectivo del conocimiento organizacional requiere un
        enfoque sistemático y proactivo. Las mejores prácticas de mantenimiento
        aseguran que el conocimiento permanezca relevante, accesible y útil a lo
        largo del tiempo. La revisión periódica del conocimiento almacenado
        resulta esencial para mantener su validez y utilidad. Este proceso debe
        incluir la identificación de contenido obsoleto, la actualización de
        información desactualizada y la incorporación de nuevo conocimiento
        relevante.
      </p>
      <div class="row align-items-center mb-4">
        <div class="col-sm-12 col-lg-7">
          <p class="mb-4">
            El mantenimiento del conocimiento debe considerar múltiples
            dimensiones:
          </p>
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">
              <b>Dimensión tecnológica:</b> asegurar que la infraestructura y
              herramientas de gestión del conocimiento funcionen eficientemente
              y se mantengan actualizadas.
            </p>
          </div>
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">
              <b>Dimensión organizacional:</b> establecer roles y
              responsabilidades claras para el mantenimiento del conocimiento,
              incluyendo la designación de expertos en dominios específicos.
            </p>
          </div>
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">
              <b>Dimensión cultural:</b> fomentar una cultura de compartir y
              mantener el conocimiento, donde la documentación y actualización
              de información se consideren parte integral del trabajo.
            </p>
          </div>
        </div>
        <div class="col-sm-12 col-lg-5 d-none d-lg-block">
          <figure class="mb-4 mb-lg-0">
            <img src="@/assets/curso/tema4/6.png" />
          </figure>
        </div>
      </div>
      <div class="row justify-content-center mb-5">
        <div class="col-sm-12 col-lg-5 d-none d-lg-block">
          <img src="@/assets/curso/tema4/7.png" />
        </div>
        <div class="col-sm-12 col-lg-7">
          <p class="mb-4">
            La automatización juega un papel cada vez más importante en el
            mantenimiento del conocimiento. Las herramientas modernas pueden
            ayudar a identificar contenido desactualizado, verificar enlaces
            rotos y sugerir actualizaciones basadas en cambios en sistemas
            relacionados.
          </p>
          <p class="mb-4">
            La gestión de dependencias entre diferentes elementos de
            conocimiento requiere especial atención. Cuando se actualiza un
            componente, es necesario evaluar y actualizar todos los elementos
            relacionados para mantener la coherencia del sistema de
            conocimiento.
          </p>
          <p class="mb-0">
            El monitoreo continuo de la utilización y efectividad del
            conocimiento proporciona insights valiosos para el mantenimiento.
            Las métricas de uso, feedback de usuarios y patrones de acceso
            pueden ayudar a identificar áreas que requieren atención o mejora.
          </p>
        </div>
      </div>
      <p class="mb-5">
        La documentación del proceso de mantenimiento en sí mismo resulta
        fundamental. Esto incluye:
      </p>
      <div class="row align-items-center mb-4">
        <div class="col-sm-12 col-lg-7">
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">Registro de decisiones de mantenimiento.</p>
          </div>
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">Documentación de procedimientos de actualización</p>
          </div>
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">Historiales de cambios y sus motivaciones</p>
          </div>
          <div class="fondo-color-sistema-f py-3 px-4 mb-4">
            <p class="mb-0">Lecciones aprendidas durante el proceso</p>
          </div>
          <p class="mb-0">
            La sostenibilidad a largo plazo del sistema de gestión del
            conocimiento depende de la capacidad para adaptarse a cambios en las
            necesidades organizacionales, tecnologías emergentes y prácticas
            evolutivas en el campo de la analítica de datos.
          </p>
        </div>
        <div class="col-sm-12 col-lg-5 d-none d-lg-block">
          <figure class="mb-4 mb-lg-0">
            <img src="@/assets/curso/tema4/8.png" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tema4',
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
