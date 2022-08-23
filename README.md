![Talentify-Logo-Dark](.github/logo-light.svg#gh-dark-mode-only)
![Talentify-Logo-Light](.github/logo.svg#gh-light-mode-only)

Bem vindo ao repositório do time de Front-end da Talentify!

# Conteúdos

- [Objetivos](#objetivos-do-guia)
- [Problemas conhecidos](./docs/troubleshooting.md)

# Objetivos do Guia

Este guia de desenvolvimento tem o objetivo de melhorar significativamente a qualidade do código do projeto.

## Clean Code

[https://github.com/ryanmcdermott/clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)

## Previsibilidade

Uma boa convenção permite com que tanto a escrita quanto a leitura do código possa ser previsível, reduzindo tempo de raciocínio.

## Automatização

Integrar regras do guia em linters como Eslint e Prettier para automatizar a correção para que estas regras se tornem uma vantagem, e não um atraso.

# Composição de código

## Indentação

Por fins de padronização, deve-se utilizar sempre espaçamento com 2 espaços para todo tipo de linguagem. Nunca utilize tabs ou espaços simples para identar o código.

Isso se aplica para JS, CSS, HTML, JSON etc.

```scss
.example {
  color: blue;
}
```

```html
<ul>
  <li>Fantastic</li>
  <li>Great</li>
</ul>
```

## Nomenclatura

### PascalCase

- Nome de componentes
- Nome de classes;
- Nome de tipos;

### camelCase

- Variáveis;

```tsx
const isVisible = true;
```

- Funções;

```tsx
function sayHello() {}
```

- Elementos BEM;
- Modificadores BEM;

### kebab-case

- Atributos de elementos;

### SNAKE_CASE

- Constantes globais;

## BEM - Convenção de nomes de classes

### Bloco

Pode ser o nome do componente ou o bloco da estrutura.

Deve ser escrito em PascalCase.

```html
<div class="Feed">...</div>
<nav class="FooterMenu">...</nav>
```

### Elementos

Deve ser escrito em camelCase.

```html
<div class="Feed__wrapper">...</div>
<div class="Feed__list">...</div>
<div class="Feed__item">...</div>
```

### Modificadores

Deve ser escrito em camelCase.

```html
<div class="MenuItem MenuItem--isLast">...</div>
<div class="Menu__item Menu__item--isLast">...</div>
```

## Independência de herança

Blocos e elementos devem ser sempre independentes de seus parentes, isso serve para simplificar a manutenção e permitir uma herança. Por ex, um elemento `__container` ou `__wrapper` deve ser independente de um `__list` ou `__item`.

# JavaScript e TypeScript

## Declaração explicita

## Variáveis, Constantes e Getters

```tsx
// bad
const userName;
```

- Quando retornar boolean, sempre utilizar a **forma interrogativa** para compor nomes.

```tsx
// bad
let visible: boolean = true;

get visible(): boolean {
	// ...
}

get headerExists(): boolean {
	// ...
}

// good
let isVisible: boolean = true;

get isVisible(): boolean {
	// ...
}

get hasHeader(): boolean {
	// ...
}
```

## Funções e Métodos

Escrita sempre deve ser em forma imperativa.

```tsx
// bad
function isHeaderVisible(): boolean {
  // ...
}

function userName(user: User): boolean {
  // ...
}

// good
function verifyIfHeaderIsVisible(): boolean {
  // ...
}

function getUserName(user: User): boolean {
  // ...
}
```

## Constantes Globais

Quando for necessário adicionar algum valor personalizado, sempre criar constantes globais especificando o nome e tipo do valor. Evitando “valores mágicos”.

O ideal é que estas constantes sempre fiquem no topo do arquivo, após as importações.

Esse tipo de abordagem é ideal para adicionar configurações, como IDs de

```tsx
// bad
setTimeout(() => {}, 300000);

// good
const FIVE_MINUTES_IN_MILLISECONDS: number = 300000;

setTimeout(() => {}, FIVE_MINUTES_IN_MILLISECONDS);
```

# Vue e arquivos SFC

- Sempre adicionar elementos de texto dentro de um `<span>`;

```html
<!-- errado -->
<button>{{ buttonText }}</button>

<!-- correto -->
<button>
  <span>{{ buttonText }}</span>
</button>
```

- Para Vue 2, utilizar abordagem do `vue-class-component` utilizando a dependência `nuxt-class-decorators`;
- Utilizar SCSS para styles;

## Ordenação de atributos em Templates

Os atributos de elementos e componentes devem ser distribuídos em ordem alfabética e agrupados na seguinte ordem:

- Definições: `v-is`;
- Listagem: `v-for`;
- Condicional: `v-if`, `v-else`;
- Modificadores de renderização: `v-once`, `v-pre`;
- Global: `id`;
- Identificadores: `ref`, `key`;
- Slot: `v-slot`, `slot`;
- Modelo: `v-model`;
- Diretivas: `v-other-directive`;
- Outros atributos;
- Eventos: `@click`, `v-on`;
- Conteúdo: `v-text`, `v-html`;

> Utilizar a regra `vue/attributes-order` no Eslint para automatizar a ordenação;

## Eventos e Handlers

Por convenção, sempre utilizar o prefixo `on` em handlers para tratar eventos. É importante sempre criar um handler para tratar cada evento em elementos ou componentes (`v-on` ou `@`) ao invés de fazer a chamada da função principal diretamente no atributo de evento. A composição do nome do handler deve ser a seguinte: `on<nome do elemento><nome do evento>` .

Em um cenário onde existe um elemento chamado RegisterUserButton e com um evento de click, o nome do handler fica da seguinte forma: `onRegisterUserButtonClick` .

> Por que? Enquanto componentes se tornam mais complexos, fica difícil dar manutenção em todos os locais do componente onde alguma função é chamada. Por isso, é sempre melhor ter handlers dedicados para eventos que vão chamar essa função.

```html
<!-- bad -->
<button class="RegisterUserButton" @click="registerUser" />

<!-- good -->
<button class="RegisterUserButton" @click="onRegisterUserButtonClick" />
```

Exemplo de handler:

```tsx
onRegisterUserButtonClick() {
	this.registerUser();
}

registerUser() {
	// ...
}
```

# CSS e SCSS

- Caso utilize declaração `@apply` do Tailwind, separar por tipo (ex: flex, grid, layout, texto, transição etc) ao invés de deixar todos estilos em uma só linha;

```scss
.selector {
  @apply flex justify-center;
  @apply absolute w-full;
}
```

- Sempre priorize a utilização unidades relativas, como `REM`, `%`, `vh`, vw, etc. Utilize unidades absolutas apenas para situações pontuais estéticas que não alterem a acessibilidade ou responsividade;

```scss
// errado
.selector {
  border-radius: 100px;
  font-size: 16px;
  height: 96px;
  width: 600px;
}

// correto
.selector {
  border-radius: 100px;
  font-size: 1rem;
  height: 6rem;
  width: 100%;
}
```

- Sempre utilize cores em hexadecimal, utilizando os 6 dígitos e em lower case;

```scss
// errado
.selector {
  background-color: #fafafa;
  color: #eee;
}

// correto
.selector {
  background-color: #fafafa;
  color: #eeeeee;
}
```

-

## Indentação e organização de código

### Espaçamento

### Ordenação de propriedades

Para ter mais consistência, é altamente recomendado [manter ordem alfabética nas propriedades, pois previne duplicidade, melhora a organização e torna mais simples a visibilidade das propriedades pois facilita encontrar onde vão estar as propriedade](https://jerrylowm.medium.com/alphabetize-your-css-properties-for-crying-out-loud-780eb1852153). Para facilitar esse processo, é recomendado utilizar extensões do VS Code ou o próprio Prettier.

## Nesting

Para estilo de componentes, sempre utilizar o nome do componente no topo do documento:

```scss
.Feed {
  &__wrapper {
    //...
  }

  &__list {
    //...
  }

  &__item {
    //...
  }
}
```

### Limites de Nesting

NUNCA utilize mais que 3 níveis aninhados! Se chegar nesse nível, provavelmente você deveria repensar a estrutura de classes, pois muitos níveis pode criar uma dependência muito forte com o HTML.

```scss
.Page {
  .content {
    .profile {
      // PARE!
    }
  }
}
```

# HTML

- Separar com espaço os blocos com mais de uma linha.

> Por que? Para facilitar a leitura de templates.

```html
<!-- errado -->
<div class="CodeBlock">
  <p>Great</p>
</div>
<div class="CodeBlock">
  <p>Fantastic</p>
  <p>
    <a href="#">Magic</a>
  </p>
</div>

<!-- correto -->
<div class="CodeBlock">
  <p>Fantastic</p>
</div>

<div class="CodeBlock">
  <p>Fantastic</p>

  <p>
    <a href="#">Magic</a>
  </p>
</div>
```

# Arquitetura

## Diretório de features

## Diretório de componentes

# Referências

[https://github.com/ryanmcdermott/clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript)

[vue/attributes-order | eslint-plugin-vue](https://eslint.vuejs.org/rules/attributes-order.html)

[Alphabetize your CSS properties, for crying out loud](https://jerrylowm.medium.com/alphabetize-your-css-properties-for-crying-out-loud-780eb1852153)
