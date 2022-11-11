# Coderbyte Project FE

## Main Libraries

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)
- [Storybook](https://storybook.js.org/)
- [Prettier](https://prettier.io/) for code formatting
- [ESLint](https://eslint.org/) for linting
- [Webpack](https://webpack.js.org/) for bundling
- [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/react) for testing

## Installation

1. Clone/download repo
2. `npm install`

## Commands

| Command                   | Description                                                                    |
| ------------------------- | ------------------------------------------------------------------------------ |
| `npm start`               | Build app in development mode and serve at `http://localhost:8080`             |
| `npm run build`           | Build app to `dist/` in production mode                                        |
| `npm run build:analyze`   | Build app to `dist/` in production mode and run Webpack Bundle Analyzer server |
| `npm test`                | Run Jest                                                                       |
| `npm run test:watch`      | Run Jest in watch mode                                                         |
| `npm run lint`            | Run ESLint                                                                     |
| `npm run lint:fix`        | Run ESLint and automatically fix problems                                      |
| `npm run format`          | Format files with Prettier                                                     |
| `npm run format:check`    | Check formatting of files with Prettier but don't format anything              |
| `npm run typecheck`       | Check for TypeScript errors without emitting output                            |
| `npm run storybook`       | Build Storybook in development mode and serve at `http://localhost:9000`       |
| `npm run build:storybook` | Build Storybook to `storybook-static/` in production mode                      |
