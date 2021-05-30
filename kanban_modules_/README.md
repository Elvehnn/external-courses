# Kanban using webpack and modules

## Description

- main directory is `src`
- entry files are `index.js` and `index.html`
- `"assets"`-directory contains image files 
- `"components"`-directory contains modules and components with its own css-files 
- `"styles"`-directory contains rest supporting styles 

## Features

-   `.js` files process by `babel` - JavaScript compiler
-   configured `webpack-dev-server`
-   `HtmlWebpackPlugin` simplifies creation of HTML files to serve your webpack bundles
-   `.svg`,`.png`, `.jpg` files processed by `file-loader`
-   `.css` files processed by `style-loader` and `css-loader`, has css modules support

## Installation

Clone project to your folder and then install dependencies:

```bash
npm install
```

How to run WebPack dev server:

```bash
npm start
```

How to build project:

```bash
npm run build
```
