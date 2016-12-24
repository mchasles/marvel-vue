# marvel-vue

This is a small project done in order to play with Vue.js.
It requests Marvel API to display a list of 22 characters with previous/next buttons.

It's very simple and have only 4 components :
- App: the root component which bootstraps the app requesting the list of marvel characters
- Loader: displayed while requesting the characters
- MarvelCharactersList: display the list of characters
- Pagination: buttons to load previous/next characters

## Scaffolding
This project was scaffolded using [vue-cli](https://github.com/vuejs/vue-cli) and its [webpack templates](https://github.com/vuejs-templates/webpack).

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

The project follows the [standard JS coding style](http://standardjs.com/).

The only dependencies I added are vue-router and axios.

## Setup

### Install dependencies
After cloning the project, run:
``` bash
npm install
```

### Start the application
To launch the application in development with hot reload, run
```
npm run dev
```

To build the application for production with minification, run
```
npm run build
```

To launch unit testing, run
```
npm run unit test
```
