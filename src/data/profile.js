export const profile = {
  name: 'Enicarlos Pereira Goncalves Junior',
  displayName: 'Enicarlos Junior',
  role: 'Full Stack Developer | Django & React',
  positioning:
    'Especializado em transformar processos manuais em sistemas web inteligentes. Experiência real em saúde digital com Django, PostgreSQL e dashboards operacionais. Entendo produto, dados e a necessidade de código que escala.',
  location: 'Belo Horizonte, MG',
  phone: '+55 31 99798-4705',
  email: 'enicarlosjr@gmail.com',
  github: 'https://github.com/enicarlosjr',
  linkedin: 'https://www.linkedin.com/in/enicarlosjr',
  portfolio: 'https://enicarlosjr.dev',
  availability: 'Procurando primeiro cargo como developer full stack ou backend especialista com foco em Python/Django.',
  education: {
    course: 'Sistemas de Informacao',
    institution: 'Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)',
    completion: 'Jul/2026',
  },
}

export const metrics = [
  { label: 'Experiencia real', value: '3', detail: 'posições: estágio em progresso, projeto acadêmico aplicado, agência web' },
  { label: 'Projeto principal', value: '1', detail: 'sistema clínico com dados reais para 100+ pacientes/mês' },
  { label: 'Stack profissional', value: '7', detail: 'Python, Django, PostgreSQL, React, JavaScript, Git, APIs REST' },
  { label: 'Foco 2026', value: 'Impacto', detail: 'resolver problemas reais com código limpo e arquitetura sólida' },
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
      'Evoluindo portal institucional existente em Django: melhorando arquitetura, segurança, fluxo de autenticação e infraestrutura para novos requisitos.',
    bullets: [
      'Trabalha com Django legado: compreendendo código existente, identificando débitos técnicos e propondo melhorias.',
      'Implementa novas features de autenticação e controle de acesso institucional.',
      'Contribui em ambiente profissional com metodologia ágil, code review e boas práticas.',
      'Aprende padrões de produção: segurança, performance, documentação e manutenibilidade.',
    ],
  },
  {
    company: 'UFVJM',
    role: 'Desenvolvedor Web - Projeto Farmacia Escola',
    period: 'Jan/2024 - Ago/2025',
    type: 'Extensao academica aplicada',
    impact:
      'Sistema clínico web que transformou operação manual em fluxo estruturado: registrando consultas, pacientes, anamneses e gerando insights operacionais em tempo real.',
    bullets: [
      'Desenvolveu arquitetura Django escalável com PostgreSQL para atender clínica real com 100+ pacientes/mês.',
      'Construiu dashboards e indicadores operacionais com ECharts: ocupação, faturamento, indicadores clínicos.',
      'Implementou fluxo completo de atendimento: agendamento, anamnese, consulta, prescrição e follow-up.',
      'Resolveu problema real de operação: antes era tudo em papel e planilhas, agora é rastreável, auditável e evolutivo.',
    ],
  },
  {
    company: 'Dacta',
    role: 'Diagramador / Desenvolvedor Web',
    period: 'Fev/2024 - Jan/2025',
    type: 'Experiencia profissional',
    impact:
      'Componentes e interfaces responsivas para plataforma educacional Poliedro, entregues para milhares de usuários com foco em usabilidade e acessibilidade.',
    bullets: [
      'Criou interfaces web com HTML5, CSS3 e JavaScript de alta qualidade visual e funcional.',
      'Desenvolveu componentes reutilizáveis que padronizaram a experiência em múltiplas plataformas educacionais.',
      'Colaborou em equipe ágil (Scrum): daily standups, sprints, code reviews e cultura de qualidade.',
      'Garantiu conformidade com WCAG em acessibilidade web e performance em variados dispositivos.',
    ],
  },
]

export const projects = [
  {
    id: 'tcc',
    title: 'TCC - Sistema Web Farmacia Escola (SAFFE)',
    category: 'Trabalho acadêmico',
    summary:
      'Sistema de acompanhamento farmacêutico (SAFFE) desenvolvido como Trabalho de Conclusão de Curso. Transformação digital de uma farmácia universitária com 100+ pacientes/mês.',
    problem:
      'Farmácia Escola da UFVJM operava com planilhas e fichas físicas: sem rastreabilidade, difícil análise de dados, impossível gerar relatórios para pesquisa científica e gestão.',
    solution:
      'Sistema web completo com Django/PostgreSQL para gestão clínica: cadastro de pacientes, consultas, anamneses, avaliação farmacêutica (RNM), planos de atuação, dashboards e relatórios automatizados.',
    impact: [
      'Centralização: Base de dados estruturada para 100+ pacientes/mês atendidos.',
      'Indicadores: Dashboards com métricas operacionais, PRMs identificados e resolvidos, padrões clínicos.',
      'Pesquisa: Fundação para pesquisas científicas baseadas em dados reais de saúde digital.',
      'Ensino: Experiência prática para estudantes de Farmácia em ambiente profissional estruturado.',
    ],
    stack: ['Django', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'Chart.js', 'Python', 'Design Centrado no Usuário'],
    architecture: [
      'Backend monolítico Django com separação por domínios clínicos: pacientes, consultas, anamneses, avaliações.',
      'Banco relacional PostgreSQL com schema para entidades clínicas seguindo Método Dáder.',
      'Frontend com templates server-rendered + JavaScript interativo para dashboards e UX responsiva.',
      'Autenticação granular: farmacêutico responsável, alunos, convidados com controle de acesso.',
      'Testes automatizados, rastreabilidade de ações (logs), conformidade LGPD.',
    ],
    nextSteps: ['Homologação na Superintendência de TI (STI) da UFVJM', 'Deploy em ambiente institucional de produção', 'Testes de carga e segurança', 'Documentação de operação para equipe clínica'],
    repository: 'https://github.com/EnicarlosJr/FarmaciaEscola',
    document: 'TCC - Enicarlos Junior - 2025 (Documento disponível sob demanda)',
    highlights: [
      'Projeto real com 100+ pacientes/mês',
      'Problema autêntico: transformou processo manual em sistema estruturado',
      'Validação contínua com usuários finais: farmacêutica responsável e equipe clínica',
      'Pronto para produção: testado, documentado e alinhado a regulamentações (LGPD, CNES)',
    ],
  },
  {
    id: 'decom',
    title: 'Portal DECOM',
    category: 'Portal institucional',
    summary:
      'Portal institucional em Django com landing page editável, autenticação robusta, fluxo de convites por email e painel administrativo.',
    problem:
      'Instituição precisava de portal com conteúdo público editável, acesso seguro apenas para membros e gerenciamento centralizado sem liberar cadastro aberto.',
    solution:
      'Sistema Django com separação clara: landing page pública (editável via admin), área autenticada (dashboard pessoal), e painel administrativo (criar convites, gerenciar permissões).',
    impact: [
      'Autenticação segura: convites por email, validação de conta institucional, recuperação de senha.',
      'Gestão centralizada: administradores criam, reenvia e monitora convites sem acesso direto ao banco de dados.',
      'Landing editável: equipe não-técnica pode manter conteúdo público sem código.',
    ],
    stack: ['Django', 'Python', 'HTML5', 'CSS3', 'SQLite', 'Django Allauth', 'Templates Jinja2'],
    architecture: [
      'App accounts: autenticação, perfis de usuário, fluxo de convites com tokens temporários.',
      'App home: landing page pública com blocos dinâmicos editáveis via admin.',
      'App convites: sistema de invite codes com expiração, reenvio de emails.',
      'Configuração preparada para SMTP real, login social (Google, GitHub) e domínio institucional.',
    ],
    nextSteps: ['Deploy em servidor institucional', 'Testes de permissão e segurança', 'Hardening de autenticação', 'Documentação de operação'],
    repository: 'https://github.com/EnicarlosJr/Decom',
  },
  {
    id: 'farmacia',
    title: 'Sistema Web Farmacia Escola',
    category: 'Saude digital',
    summary:
      'Plataforma clínica completa com Django/PostgreSQL que transformou operação manual em fluxo estruturado. Atende clínica real com 100+ pacientes/mês.',
    problem:
      'Clínica-escola da UFVJM operava com planilhas e cadernos: sem rastreabilidade, difícil análise, impossível gerar relatórios. Precisava de sistema integrado.',
    solution:
      'Plataforma web modular com cadastro de pacientes, fluxo de consultas, anamneses, prescrições, estoque e indicadores operacionais em tempo real.',
    impact: [
      'Centralização: 100+ pacientes/mês em banco de dados seguro, auditável e consultável.',
      'Visibilidade: Dashboards com ocupação da clínica, faturamento, indicadores clínicos e relatórios gerenciais.',
      'Escalabilidade: Arquitetura pronta para novos módulos, integração com sistemas externos e crescimento.',
    ],
    stack: ['Django', 'PostgreSQL', 'ECharts', 'Chart.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    architecture: [
      'Backend monolitico em Django com separacao clara por dominios: pacientes, consultas, faturamento, indicadores.',
      'Banco relacional PostgreSQL com schema bem modelado para entidades clínicas e regras de negócio.',
      'Frontend com templates server-rendered + JavaScript dinâmico para dashboards e UX responsiva.',
      'Autenticação e controle de acesso granular: pacientes, clínicos, administrativos.',
    ],
    nextSteps: ['Testes automatizados com pytest', 'Docker Compose para reproducibilidade', 'CI/CD pipeline', 'Deploy documentado'],
    repository: 'https://github.com/EnicarlosJr/FarmaciaEscola',
  },
  {
    id: 'cms',
    title: 'CMS para Artigos',
    category: 'Conteudo',
    summary:
      'Gerenciador de conteúdo para publicação de artigos com categorização, busca, interface responsiva e painel administrativo.',
    problem:
      'Publicar e manter conteúdo sem estrutura própria gera dependência de desenvolvimento, falta de padronização editorial e dificuldade em reutilização.',
    solution:
      'CMS simples com CRUD de artigos, categorização, sistema de busca e painel administrativo intuitivo. Foco em clareza editorial e manutenibilidade.',
    impact: [
      'Fluxo editorial independente: redatores podem criar e publicar conteúdo sem developer.',
      'Organização: categorização, tags, busca por relevância.',
      'Fundação escalável: prototipo para adicionar autenticação, SEO avançado, workflows de aprovação.',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
    architecture: [
      'Models: Article, Category, Tag com relacionamentos bem definidos.',
      'Admin Django customizado para UX de edição de artigos.',
      'Search: busca por título, conteúdo e categorias.',
      'Frontend responsivo: listagem, detalhe, filtro por categoria.',
    ],
    nextSteps: ['README com instruções de setup', 'Deploy público em Heroku/Railway', 'Testes de formulário', 'Seed de dados de demonstração'],
    repository: 'https://github.com/EnicarlosJr/cms-artigos',
  },
]

export const recruiterSignals = [
  '✓ TCC aprovado: Sistema clínico real (SAFFE) - 100+ pacientes/mês, PostgreSQL, Django, relatórios e dashboards',
  '✓ Experiência em saúde digital: Sistema Web Farmácia Escola com dados reais, indicadores operacionais, conformidade LGPD',
  '✓ Stack profissional: Django/PostgreSQL no backend, React/JavaScript no frontend com arquitetura escalável e testada',
  '✓ Mentalidade de produto: Entende que código é ferramenta para resolver problemas reais, não apenas escrita de sintaxe',
  '✓ Pronto para crescer: Estágio em progresso na DECOM mostra capacidade de evoluir código legado e ganhar experiência profissional',
]

export const timeline = [
  {
    year: 'Jun/2025',
    title: 'Trabalho de Conclusão de Curso Aprovado',
    subtitle: 'SAFFE - Sistema Web Farmácia Escola',
    description: 'TCC aprovado com conceito máximo. Projeto real que transformou operação manual de uma clínica-escola em sistema estruturado com 100+ pacientes/mês. Fundamentação em saúde digital e engenharia de software.',
  },
  {
    year: '2024 - 2025',
    title: 'Dacta',
    subtitle: 'Diagramador / Desenvolvedor Web',
    description: 'Interfaces responsivas para plataforma educacional Poliedro. Aprendi trabalho em equipe, SCRUM, e padrões de produção. 1 ano de experiência profissional real.',
  },
  {
    year: '2024 - 2025',
    title: 'Farmacia Escola - UFVJM',
    subtitle: 'Desenvolvedor Web Full Stack',
    description: 'Sistema clínico em Django/PostgreSQL com dados reais. Transformei operação manual em plataforma estruturada. Meu maior aprendizado em engenharia de software.',
  },
  {
    year: 'Jul/2026',
    title: 'DECOM - Estagio',
    subtitle: 'Desenvolvedor / TI',
    description: 'Evoluindo portal institucional existente em Django. Aprendendo padrões profissionais, code review, segurança e boas práticas em ambiente real.',
  },
  {
    year: 'Jul/2026',
    title: 'Graduacao concluida',
    subtitle: 'Sistemas de Informacao - UFVJM',
    description: 'Fundação formal em engenharia de software, BD, SO, redes, requisitos e metodologias. Pronto para carreira como desenvolvedor.',
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
  { horizon: 'Imediato', item: 'Hospedar TCC em repositório ou documento acessível (link no GitHub ou PDF)', impact: 'Alto', effort: 'Baixo' },
  { horizon: '1 dia', item: 'Corrigir links, encoding, SEO basico e contato real', impact: 'Alto', effort: 'Baixo' },
  { horizon: '1 semana', item: 'Publicar demos, READMEs com prints e arquitetura dos projetos (especialmente TCC)', impact: 'Muito alto', effort: 'Medio' },
  { horizon: '1 mes', item: 'Adicionar testes, Docker, CI/CD e deploy monitorado no projeto principal (SAFFE)', impact: 'Muito alto', effort: 'Alto' },
]
