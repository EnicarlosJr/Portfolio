export const profile = {
  name: 'Enicarlos Pereira Goncalves Junior',
  displayName: 'Enicarlos Junior',
  role: 'Desenvolvedor Full Stack Junior',
  positioning:
    'Python/Django, React e sistemas web para produtos com foco em saude digital, dados e interfaces operacionais.',
  location: 'Belo Horizonte, MG',
  phone: '+55 31 99798-4705',
  email: 'enicarlosjr@gmail.com',
  github: 'https://github.com/enicarlosjr',
  linkedin: 'https://www.linkedin.com/in/enicarlosjr',
  portfolio: 'https://enicarlosjr.dev',
  availability: 'Aberto a vagas junior/remotas em desenvolvimento web, suporte tecnico e seguranca aplicada.',
  education: {
    course: 'Sistemas de Informacao',
    institution: 'Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)',
    completion: 'Jul/2026',
  },
}

export const metrics = [
  { label: 'Experiencia real', value: '3', detail: 'atuacoes profissionais e academicas' },
  { label: 'Projeto Django', value: '2', detail: 'portal institucional e sistema clinico' },
  { label: 'Stack alvo', value: '8+', detail: 'Python, Django, React, SQL, Git e dados' },
  { label: 'Mercado', value: '2026', detail: 'portfolio orientado a recrutamento' },
]

export const stackGroups = [
  {
    title: 'Backend',
    skills: ['Python', 'Django', 'Django REST Framework', 'Node.js', 'JWT', 'APIs REST'],
  },
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Figma'],
  },
  {
    title: 'Dados',
    skills: ['PostgreSQL', 'SQLite', 'Modelagem de dados', 'Pandas', 'Plotly', 'ECharts'],
  },
  {
    title: 'Entrega',
    skills: ['Git', 'GitHub', 'Scrum', 'Kanban', 'Acessibilidade', 'Testes manuais'],
  },
]

export const experiences = [
  {
    company: 'DECOM',
    role: 'Estagiario em Desenvolvimento / TI',
    period: 'Inicio em Jul/2026',
    type: 'Estagio',
    impact:
      'Desenvolvimento e evolucao de portal institucional em Django, com autenticacao, fluxo de primeiro acesso por convite e area administrativa.',
    bullets: [
      'Implementa landing page publica editavel e area autenticada para usuarios e administradores.',
      'Trabalha com Django, templates server-rendered, SQLite e organizacao por apps.',
      'Desenvolve fluxo de convites para primeiro acesso institucional.',
      'Documenta rotas, configuracao, validacao e arquitetura do sistema.',
    ],
  },
  {
    company: 'UFVJM',
    role: 'Desenvolvedor Web - Projeto Farmacia Escola',
    period: 'Jan/2024 - Ago/2025',
    type: 'Extensao academica aplicada',
    impact:
      'Plataforma clinica para apoiar atendimento, controle de pacientes, anamneses, consultas, relatorios e indicadores operacionais.',
    bullets: [
      'Desenvolveu backend com Django e PostgreSQL para fluxos clinicos e educacionais.',
      'Construiu relatorios e indicadores interativos com ECharts e Chart.js.',
      'Integrau modulos de pacientes, anamneses e consultas em ambiente web.',
      'Transformou um problema real de operacao em sistema utilizavel por equipe academica.',
    ],
  },
  {
    company: 'Dacta',
    role: 'Diagramador / Desenvolvedor Web',
    period: 'Fev/2024 - Jan/2025',
    type: 'Experiencia profissional',
    impact:
      'Interfaces responsivas e componentes reutilizaveis para materiais digitais em larga escala na plataforma Poliedro.',
    bullets: [
      'Criou interfaces web com HTML5, CSS3 e JavaScript.',
      'Colaborou em equipe multidisciplinar com rotina Scrum.',
      'Entregou componentes com foco em usabilidade e acessibilidade.',
      'Apoiou entregas digitais consumidas por milhares de usuarios.',
    ],
  },
]

export const projects = [
  {
    id: 'decom',
    title: 'Portal DECOM',
    category: 'Portal institucional',
    summary:
      'Portal institucional em Django com landing page editavel, autenticacao, primeiro acesso por convite e painel autenticado.',
    problem:
      'Um portal institucional precisa separar conteudo publico, acesso autenticado e operacao administrativa sem liberar cadastro aberto.',
    solution:
      'Sistema Django organizado em apps para autenticacao, convites, perfis, painel autenticado e gerenciamento controlado da landing page.',
    impact: [
      'Cadastro inicial protegido por convite e validacao de conta institucional.',
      'Administradores podem criar, reenviar e acompanhar convites.',
      'Conteudo publico pode ser mantido por staff ou usuarios com permissao especifica.',
    ],
    stack: ['Django', 'Python', 'HTML', 'SQLite', 'Django Allauth', 'Templates'],
    architecture: [
      'App accounts para login, perfis, convites, codigos temporarios e painel autenticado.',
      'App home para landing page publica, conteudo editavel e blocos dinamicos.',
      'Templates server-rendered para interface publica e area autenticada.',
      'Configuracao preparada para SMTP, login social e dominio institucional.',
    ],
    nextSteps: ['Deploy institucional', 'Testes de permissao', 'Hardening de seguranca', 'Documentacao de operacao'],
    repository: 'https://github.com/EnicarlosJr/Decom',
  },
  {
    id: 'farmacia',
    title: 'Sistema Web Farmacia Escola',
    category: 'Saude digital',
    summary:
      'Sistema clinico com Django e PostgreSQL para gestao de pacientes, anamneses, consultas, relatorios e indicadores.',
    problem:
      'Processos clinicos e academicos dependiam de controle manual, baixa rastreabilidade e pouca visibilidade gerencial.',
    solution:
      'Aplicacao web modular com cadastro de pacientes, registro de atendimentos, relatorios e indicadores para apoio operacional.',
    impact: [
      'Centralizacao de dados clinicos e administrativos.',
      'Melhor visibilidade sobre atendimentos, estoque e indicadores.',
      'Base tecnica reaproveitavel para novos modulos da Farmacia Escola.',
    ],
    stack: ['Django', 'PostgreSQL', 'ECharts', 'Chart.js', 'JavaScript', 'HTML5', 'CSS3'],
    architecture: [
      'Backend monolitico em Django com separacao por dominios.',
      'Banco relacional PostgreSQL para entidades clinicas.',
      'Templates e componentes orientados a formularios, relatorios e fluxos administrativos.',
      'Autenticacao e controle de acesso como requisito central.',
    ],
    nextSteps: ['Testes automatizados', 'Docker Compose', 'CI/CD', 'Deploy documentado'],
  },
  {
    id: 'cms',
    title: 'CMS para Artigos',
    category: 'Conteudo',
    summary:
      'Gerenciador de conteudo para publicacao de artigos com organizacao por categorias e interface responsiva.',
    problem:
      'Publicar e manter conteudo sem uma estrutura propria gera dependencia operacional e pouca padronizacao.',
    solution:
      'CMS simples para criacao, edicao, organizacao e busca de artigos, priorizando manutencao e clareza editorial.',
    impact: [
      'Fluxo de publicacao mais organizado.',
      'Base para evoluir autenticacao, painel administrativo e SEO.',
      'Projeto bom para demonstrar CRUD, modelagem e UX de formulario.',
    ],
    stack: ['Python', 'HTML5', 'CSS3', 'JavaScript'],
    architecture: [
      'Entidades separadas para artigos, categorias e usuarios.',
      'Interface responsiva com foco em leitura.',
      'Busca e filtragem por topicos.',
    ],
    nextSteps: ['README completo', 'Deploy publico', 'Testes de formulario', 'Seeds de demonstracao'],
  },
]

export const recruiterSignals = [
  'Experiencia aplicada em projeto real de saude digital, nao apenas clones de tutorial.',
  'Stack coerente para vagas Python/Django, Full Stack Junior e suporte tecnico com desenvolvimento.',
  'Boa ponte entre produto, dados e operacao: relatorios, indicadores e fluxos administrativos.',
  'Precisa aumentar provas publicas: repositorios organizados, READMEs fortes, deploys e testes.',
]

export const timeline = [
  {
    year: '2024 - 2025',
    title: 'Dacta',
    subtitle: 'Diagramador / Desenvolvedor Web',
    description: 'Interfaces responsivas, componentes reutilizaveis e entregas digitais para ambiente educacional.',
  },
  {
    year: '2025',
    title: 'Farmacia Escola',
    subtitle: 'Desenvolvedor Web - UFVJM',
    description: 'Sistema clinico com Django, PostgreSQL, relatorios, controle de pacientes e rotinas de atendimento.',
  },
    {
    year: 'Jul/2026',
    title: 'DECOM',
    subtitle: 'Estagio em Desenvolvimento / TI',
    description: 'Portal institucional em Django com landing editavel, autenticacao, convites de acesso e painel administrativo.',
  },
  {
    year: 'Jul/2026',
    title: 'Graduacao concluida',
    subtitle: 'Sistemas de Informacao - UFVJM',
    description: 'Base formal em engenharia de software, banco de dados, programacao, requisitos e sistemas de informacao.',
  },
]


export const techMap = {
  nodes: [
    { id: 'python', label: 'Python', group: 'Backend', x: 52, y: 18 },
    { id: 'django', label: 'Django', group: 'Backend', x: 35, y: 36 },
    { id: 'postgres', label: 'PostgreSQL', group: 'Dados', x: 68, y: 38 },
    { id: 'react', label: 'React', group: 'Frontend', x: 24, y: 64 },
    { id: 'ux', label: 'UX Operacional', group: 'Produto', x: 52, y: 72 },
    { id: 'security', label: 'Seguranca', group: 'Qualidade', x: 78, y: 68 },
    { id: 'git', label: 'Git/GitHub', group: 'Entrega', x: 48, y: 48 },
  ],
  links: [
    ['python', 'django'],
    ['django', 'postgres'],
    ['django', 'security'],
    ['react', 'ux'],
    ['git', 'python'],
    ['git', 'react'],
    ['postgres', 'ux'],
  ],
}

export const improvementBacklog = [
  { horizon: '1 dia', item: 'Corrigir links, encoding, SEO basico e contato real', impact: 'Alto', effort: 'Baixo' },
  { horizon: '1 semana', item: 'Publicar demos, READMEs com prints e arquitetura dos projetos', impact: 'Muito alto', effort: 'Medio' },
  { horizon: '1 mes', item: 'Adicionar testes, Docker, CI/CD e deploy monitorado no projeto principal', impact: 'Muito alto', effort: 'Alto' },
]
