# acme-widgets
ACME Widgets

### Technology and Terminology

node / nodejs /node.js \[[github](https://github.com/joyent/node)\] \[[website](https://nodejs.org/)\]
- server side javascript
- made by joyent
- written in a combination of C, C++, and JS
- runs on V8, JS engine made for Chrome
- asynchronous i/o based on "callbacks"
- callbacks in your app are provided to [higher-order functions](http://en.wikipedia.org/wiki/Higher-order_function) in node
- such a function will do some work, and asynchronously run the callback provided when it's done (or fails)

npm \[[github](https://github.com/npm/npm)\] \[[website](https://www.npmjs.com)\]
- node package manager
- package.json sits in the root of project
- describes a project and its dependencies
- manage versions of everything
- installs libraries to node_modules

iojs / io.js \[[github](https://github.com/iojs/io.js)\] \[[website](https://iojs.org)\]
- fork of node with many improvements and features
- mostly backwards compatible with node
- when we say "node", we're really using iojs

react \[[github](https://github.com/facebook/react)\] \[[website](https://facebook.github.io/react/)\]
- JS library made by Facebook
- used on Facebook and Instagram
- only deals with the view
- uses JSX to interpolate declarative HTML structure with JS
- can render on the client or the server ("isomorphic")
- a react component can be thought of as a pure math function (it's deterministic over its inputs)

koa \[[github](https://github.com/koajs/koa)\] \[[website](http://koajs.com)\]
- web server that runs on node
- based on "middleware", which are just async functions ("generators")
- a request comes in and passes through multiple middleware
- middleware incrementally craft a response to send to the client

bluebird \[[github](https://github.com/petkaantonov/bluebird)\]
- fast, full-featured "Promise" library
- promises are an abstraction of callbacks to make them easier to code
- promises do something async and then are resolved on success or rejected on failure

webpack \[[github](https://github.com/webpack/webpack)\] \[[website](http://webpack.github.io/)\]
- client side build tool primarily for JS
- takes your JS files and combines them
- dev server enables hot code reloading

stylus \[[github](https://github.com/stylus/stylus)\] \[[website](https://learnboost.github.io/stylus/)\]
- CSS preprocessor
- functions, loops, variables, etc. to make CSS easier to code
- .styl files compile -> .css
