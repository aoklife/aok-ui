AOK UI
======

> Note: This is a work in progress.

This repository contains the components used in AOK UI front-end development.

Development in Ember (Stylus)
=============================

- Run `npm start`
- Run `bower link` on this directory.
- On your ember project, run `bower link aok-ui && bower install aok-ui`
- Include it in your `ember-cli-build.js`

```js
const app = new EmberApp(defaults, {
  stylusOptions: {
    includePaths: [
      'bower_components/aok-ui/src',
    ],
    use: [nib()],
  },
})
```

Development in React (Stylus)
=============================

- Run `npm start`
- Run `npm link` on this directory.
- On your react project, run `npm link aok-ui && npm install aok-ui`
- Include it in your `webpack.config.js`

```js
{
  import: ['~nib/lib/nib/index.styl'],
  includePaths: ['~aok-ui/src/app.styl'],
  use: [require('nib')()],
}
```
