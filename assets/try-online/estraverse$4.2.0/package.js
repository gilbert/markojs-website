$_mod.def("/estraverse$4.2.0/package", {
  "_args": [
    [
      {
        "raw": "estraverse@^4.2.0",
        "scope": null,
        "escapedName": "estraverse",
        "name": "estraverse",
        "rawSpec": "^4.2.0",
        "spec": ">=4.2.0 <5.0.0",
        "type": "range"
      },
      "/Users/mirawlings/code/marko"
    ]
  ],
  "_from": "estraverse@>=4.2.0 <5.0.0",
  "_id": "estraverse@4.2.0",
  "_inCache": true,
  "_installable": true,
  "_location": "/estraverse",
  "_nodeVersion": "0.12.9",
  "_npmOperationalInternal": {
    "host": "packages-12-west.internal.npmjs.com",
    "tmp": "tmp/estraverse-4.2.0.tgz_1457646738925_0.7118953282479197"
  },
  "_npmUser": {
    "name": "nzakas",
    "email": "nicholas@nczconsulting.com"
  },
  "_npmVersion": "2.14.9",
  "_phantomChildren": {},
  "_requested": {
    "raw": "estraverse@^4.2.0",
    "scope": null,
    "escapedName": "estraverse",
    "name": "estraverse",
    "rawSpec": "^4.2.0",
    "spec": ">=4.2.0 <5.0.0",
    "type": "range"
  },
  "_requiredBy": [
    "/",
    "/lasso-require"
  ],
  "_resolved": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz",
  "_shasum": "0dee3fed31fcd469618ce7342099fc1afa0bdb13",
  "_shrinkwrap": null,
  "_spec": "estraverse@^4.2.0",
  "_where": "/Users/mirawlings/code/marko",
  "bugs": {
    "url": "https://github.com/estools/estraverse/issues"
  },
  "dependencies": {},
  "description": "ECMAScript JS AST traversal functions",
  "devDependencies": {
    "babel-preset-es2015": "^6.3.13",
    "babel-register": "^6.3.13",
    "chai": "^2.1.1",
    "espree": "^1.11.0",
    "gulp": "^3.8.10",
    "gulp-bump": "^0.2.2",
    "gulp-filter": "^2.0.0",
    "gulp-git": "^1.0.1",
    "gulp-tag-version": "^1.2.1",
    "jshint": "^2.5.6",
    "mocha": "^2.1.0"
  },
  "directories": {},
  "dist": {
    "shasum": "0dee3fed31fcd469618ce7342099fc1afa0bdb13",
    "tarball": "https://registry.npmjs.org/estraverse/-/estraverse-4.2.0.tgz"
  },
  "engines": {
    "node": ">=0.10.0"
  },
  "gitHead": "6f6a4e99653908e859c7c10d04d9518bf4844ede",
  "homepage": "https://github.com/estools/estraverse",
  "license": "BSD-2-Clause",
  "main": "estraverse.js",
  "maintainers": [
    {
      "name": "constellation",
      "email": "utatane.tea@gmail.com"
    },
    {
      "name": "michaelficarra",
      "email": "npm@michael.ficarra.me"
    },
    {
      "name": "nzakas",
      "email": "nicholas@nczconsulting.com"
    }
  ],
  "name": "estraverse",
  "optionalDependencies": {},
  "readme": "ERROR: No README data found!",
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/estools/estraverse.git"
  },
  "scripts": {
    "lint": "jshint estraverse.js",
    "test": "npm run-script lint && npm run-script unit-test",
    "unit-test": "mocha --compilers js:babel-register"
  },
  "version": "4.2.0"
}
);