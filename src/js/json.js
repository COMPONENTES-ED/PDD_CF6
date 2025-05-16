export default {
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Documentación técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos de documentación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estándares y mejores prácticas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Herramientas de documentación',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Informes técnicos avanzados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Estructura y organización',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Metodologías de documentación',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Gestión de versiones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Técnicas de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Presentación de resultados',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Comunicación visual',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Narrativa de datos',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión del conocimiento',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Organización de la información',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Control de versiones',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Mejores prácticas de mantenimiento',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228136_CF06_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  global: {
    Name:
      'Sistematización y documentación de datos masivos mediante métodos de analítica',
    Description:
      'Este componente aborda las metodologías y prácticas para la sistematización y documentación efectiva de datos masivos en contextos analíticos. Explora desde la creación de documentación técnica hasta la gestión del conocimiento organizacional, incluyendo técnicas de comunicación y mejores prácticas. Proporciona herramientas fundamentales para garantizar la trazabilidad y aprovechamiento del conocimiento en proyectos de datos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
}
