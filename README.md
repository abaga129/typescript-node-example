# typescript-node-example

If you want to try this example out you must first install the dependencies and install gulp globaly, then use gulp to build and run the project.
```bash
npm install
npm install -g gulp
gulp run
```

## About
`gulp` is used to pipe all of the typescript files in the `lib` directory through `tsc`.  Then gulp calls node on the generated index.js file that is located in the `dist` directory.