# Therapist Platform Prototype

POC front-end navegavel importada do Figma Make para evolucao de produto. Projeto atual representa telas e fluxos demo para landing pages publicas, area do terapeuta, area do paciente e console admin somente leitura.

Figma original:
https://www.figma.com/design/OAODXIyEL2bU1ImRBJzDAk/Therapist-platform-prototype

## Estado atual

- App atual e uma SPA com rotas cliente e dados mockados em memoria.
- Estrutura real do repositorio ainda nao segue arquitetura `src/features`, `src/i18n`, `src/config` ou `supabase`.
- Base atual e boa para exploracao visual e refinamento de UX, mas ainda nao e fundacao de producao.

## Stack real do projeto

- Build e dev server: `vite@6.3.5`
- Front-end: `react@18.3.1`, `react-dom@18.3.1`
- Roteamento: `react-router@7` com `createBrowserRouter`
- Estilizacao: `tailwindcss@4`, `@tailwindcss/vite`, CSS global em `src/styles/*`
- UI primitives: Radix UI + componentes estilo shadcn em `src/app/components/ui`
- Icones e motion: `lucide-react`, `motion`
- Origem do bundle: exportado do Figma Make, com `figma-asset-resolver` em `vite.config.ts`
- Linguagem: arquivos `.ts` e `.tsx`

## Estrutura atual

- `src/app/pages`: paginas por rota
- `src/app/layouts`: layout publico e layout interno
- `src/app/components`: navbar, footer, badge e primitives reutilizaveis
- `src/styles`: imports globais, tema e Tailwind
- `convex/`: pasta presente, mas vazia e sem uso

## Rotas disponiveis

Publicas:

- `/`
- `/terapeutas`
- `/pacientes`

Internas:

- `/app/terapeuta/agenda`
- `/app/terapeuta/cobrancas`
- `/app/paciente/consultas`
- `/app/paciente/pagamentos`
- `/app/admin`
- `/app/admin/terapeutas`
- `/app/admin/pacientes`
- `/app/admin/terapeutas/:id`
- `/app/admin/pacientes/:id`

## O que ja existe

- Navegacao publica com glass navbar
- Landing pages para terapeutas e pacientes
- Demo interna de agenda e cobrancas do terapeuta
- Demo interna de consultas e pagamentos do paciente
- Demo admin com overview, listas e detalhes
- Copy principal em pt-BR nas telas
- Estados visuais como `confirmado`, `pendente`, `cancelado`, `pago`, `em_analise`

## Verificacao tecnica

### Internacionalizacao

Nao existe i18n estruturado no estado atual.

- Nao existe pasta `src/i18n`
- Nao existem dicionarios, chaves tipadas ou provider de locale
- Nao existem constantes centralizadas para slugs/rotas localizadas
- Textos estao hardcoded nos componentes e paginas
- Uso de `pt-BR` aparece hoje apenas em formatacao de datas com `toLocaleDateString("pt-BR")`

Conclusao: app esta localizado em pt-BR por conteudo, mas nao internacionalizado.

### SEO

SEO estruturado ainda nao existe.

- `index.html` esta com `lang="en"`
- Titulo atual e generico: `Therapist platform prototype`
- Nao existe metadata por pagina
- Nao existe Open Graph
- Nao existe Twitter Card
- Nao existe canonical
- Nao existe `robots.txt` ou `sitemap`
- Nao existe estrategia de `noindex` para rotas internas

Conclusao: paginas publicas existem, mas SEO ainda nao foi implementado.

### Dados e backend

Hoje nao existe integracao real de backend.

- Nao existe Supabase no codigo atual
- Nao existe consumo de API
- Nao existem repositories, use cases ou camada de dominio
- Dados mockados ficam declarados dentro das paginas
- Nao existe persistencia real para agenda, pagamentos ou comprovantes

### Qualidade e DX

- Nao existe `tsconfig.json`
- Nao existe script de `typecheck`
- Nao existe ESLint configurado no repositorio
- Nao existe Prettier ou Biome configurado
- Nao existem testes unitarios ou e2e
- Nao existe Vitest, Jest, Playwright ou Cypress

### Integracoes e aderencia ao contexto do produto

- UI atual referencia `Google Calendar` e `Google Meet`
- Ainda nao existe adaptador para Microsoft Graph
- Ainda nao existe Stripe, Supabase Storage ou upload real de comprovante
- `@mui/*` esta instalado, mas nao aparece em uso nas telas atuais

## Build e ambiente

Validacao feita neste ambiente:

- `node`: `v16.20.2`
- `npm`: `8.19.4`
- `bun`: `1.3.10`

Resultado:

- `npm run build` falha
- `bun run build` falha

Erro observado:

```text
TypeError: crypto$2.getRandomValues is not a function
```

Motivo confirmado no pacote instalado:

- `vite@6.3.5` declara `node: ^18.0.0 || ^20.0.0 || >=22.0.0`

Conclusao: para build local, usar Node 18+.

## Como rodar

Com Node 18+:

```bash
npm install
npm run dev
```

Se preferir Bun:

```bash
bun install
bun run dev
```

## Proximos passos sugeridos

- Criar base de i18n com `pt-BR` ativo e textos centralizados
- Corrigir metadata global e metadata por rota publica
- Separar mocks de UI em camada de dados/demo
- Introduzir `tsconfig`, `typecheck`, lint e testes basicos
- Definir backend real inicial, provavelmente Supabase
