# Vuejs 3 Composition API with Pinia Storefront

Reactive State friend application using `{ref}` and Pina Storefront. No TypeScript: this project is purely JavaScript and does not utilize TypeScript's type system. TypeScript's compiler (tsc) is not needed.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) and disable Vetur. Vetur is deprecated and its support has ended. It was primarily designed for Vue 2.

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)

## Code Formatting

```bash
npm install --save-dev prettier
# or
yarn add --dev prettier
```

Use [Prettier](https://prettier.io/) to enforce a consistent code style throughout the project. It ensures that all code is formatted automatically, preventing style arguments and saving time. To ensure the exact same version of Prettier, install it as a local development dependency: Integrate with your IDE: Configure your editor (e.g., VS Code) to use Prettier as the default formatter and to run ESLint on save. By following this approach, Prettier handles all code formatting, while ESLint focuses on identifying and fixing code quality and potential bug-related issues, creating a harmonious and efficient development workflow.

- Install the Prettier Extension
  - Open VS Code.
  - Go to the Extensions view (Ctrl+Shift+X or Cmd+Shift+X)
  - Search for "Prettier - Code formatter" and install it.

- Open VS Code Settings
  - Press Ctrl+, (or Cmd+, on macOS) to open the Settings tab.

- Set Prettier as the Default Formatter
  - In the search bar within the Settings tab, type "default formatter"
  - Under "Editor: Default Formatter", select "Prettier - Code formatter" from the dropdown menu

- Enable Format On Save
  - In the search bar within the Settings tab, type "format on save"
  - Check the box next to "Editor: Format On Save

- If not Enabled Format On Save
  - If chosen not to use Prettier with Format On Save, then run `npm run format` to manually force correct formatting within the codebase as below:

```sh
npm run format
```

- Configure Prettier Settings
  - Customize Prettier's behavior by creating a .prettierrc file in the root of your project. This file allows you to define rules such as tabWidth, semi, singleQuote, etc.
  - Prettier also integrates with .editorconfig files if present in your project for example below:

```
[*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue,css,scss,sass,less,styl}]
charset = utf-8
indent_size = 2
semi = true
indent_style = space
insert_final_newline = true
trim_trailing_whitespace = true
end_of_line = lf
max_line_length = 100
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

- ESLint is a static code analysis tool (linter) that identifies and reports problematic patterns found in JavaScript code. It enforces coding standards and best practices, and can also identify potential bugs. Prettier and ESLint are both valuable tools in code development, but they serve distinct purposes and can lead to issues if not configured correctly. Follow the documentation and evaluate the files in this codebase so the two work harmoniously.

```sh
npm run lint
```
