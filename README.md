# typescript-library-starter

Typescript Library Starter Template

## Features

- Declare one main module and two submodules ('math' and 'text')
- Generation of umd, esm bundles, typings and docs
- Example use of external modules ('@nexys/math-ts' and 'string-kit')
- Tests with jest

## Usage

You have to clone this repo and adapt it to your requirements: set library name, change dependencies... in package.json and rollup.config.js

- yarn build
- yarn test
- yarn docs
- npm publish: to publish the package to NPM

Later on, you can either import it as a Module or directly use it in the browser via script tag. Remember to change 'typescript-library-starter' and 'mytslibrary' with your module name.

### Module

```js module
import { sayHello } from 'typescript-library-starter';
import { cube, factorial } from 'typescript-library-starter/math';
import { ucase, escapeHtml } from 'typescript-library-starter/text';

console.log(sayHello('Peter'));
console.log(cube(5));
console.log(factorial(5));
console.log(sayHello('Peter'));
console.log(ucase('this is a short phrase'));
console.log(escapeHtml('<h1>The title</h1>'));
```

### Directly in the browser

Add these script tags:
```js
<script src="https://unpkg.com/typescript-library-starter@latest/dist/mytslibrary.umd.min.js"></script>
<script src="https://unpkg.com/typescript-library-starter@latest/dist/mytslibrary-math.umd.min.js"></script>
<script src="https://unpkg.com/typescript-library-starter@latest/dist/mytslibrary-text.umd.min.js"></script>
```
