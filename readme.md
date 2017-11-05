# NextJs Github
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/117dae47212e4653b44759c9cfbc2304)](https://www.codacy.com/app/andre_luis9214/nextjs-github?utm_source=github.com&utm_medium=referral&utm_content=andre-araujo/nextjs-github&utm_campaign=badger)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This project is a simple github interface using [ReactJs](https://reactjs.org/) on top of Zeit [NextJs](https://github.com/zeit/next.js)

## Running the project

* Install all project dependencies with `npm install`
* Start the development server with `npm run dev`

## Testing

* Testing without coverage `npm test`
* Testing with coverage `npm run test:coverage`
* Testing with watch `npm run test:watch`

## Linting and Conventions

* This project uses eslint with custom [airbnb config](https://www.npmjs.com/package/eslint-config-airbnb) as a lint tool, to start lint run `npm run lint`
* This project uses Commitizen git convention, to commit with right conventions run `npm run commit`
* This project uses a concise timeline, all code pushed to master should be rebased

## Building

* To build the project for production run `npm run build`