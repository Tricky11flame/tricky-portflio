# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

## COMPONENTS I M GONNA YANKKS
Layer 1: 
Avatar
Badge
Progress
Seperator
Skeleton

switch tabs button-group button text-area tooltip open-dialog hover-card item

Layer 2:
toggle-group radio-group card carousel context-menu dropdown-menu

Layer3:
field input-group resizable scroll-area sidebar typography

## LAYOUT
``` txt
Big Page Designer Opening
> then scroll for more ->

pg2 
  .Short Intro
    . ...
    Hey I am Kartikay.
    I m a full stack developer and 
  .Education <Hard Skills> <Academics>
    .
  .Clubs <Soft Skills> 
  .Experience : Backend Development <Soft Skills> <Hard Skills>
  .Software Developement Skills <Hard Skills>
    with a specialisation T-shaped Learning : Python- smaller Projects, React.js-main , Node.js-main
  .Electronics and Communication Engineering <Hard Skills>

  // Books I have Read
  // Manga's I am Reading
  // pokemon team on pokeshowdown

<>

<>


Bottom : <avatar/> <seprator/> <badge/> <seprator/> <badge/> 
Card : if? <CONTENT/> : <Skeleton/>
Top : <Switch/> or <Tabs/>
Top : Switch  for modes : Dark ? White 

Body : is under ScollArea 

Contact Me :
  your email 
  write : text-area


  Short Intro : INTRO ITEM
    . ...
    Hey I am Kartikay.
    I m a full stack developer 

  .Education : EDUCATION ITEM
  .Clubs <Soft Skills> 
  .Experience : Backend Development <Soft Skills> <Hard Skills>
  .Software Developement Skills <Hard Skills>
    with a specialisation T-shaped Learning : Python- smaller Projects, React.js-main , Node.js-main
  .Electronics and Communication Engineering <Hard Skills>

  // Books I have Read
  // Manga's I am Reading
  // pokemon team on pokeshowdown


```