# Introduction

This is the [uniorg](https://github.com/rasendubi/uniorg) package for
translating org files into an ast representation that can be consumable
by js and clojure. Currently the to markdown functionality is done
through [pandoc](https://pandoc.org/org.html) but there is more featured
libraries for html transform through the
[unified](https://github.com/unifiedjs/unified) landscape of libraries
that may be leveraged at some point.

Building the `bundle.js` file:

``` shell
make package
```

Copy the `bundle.js` to `assets/fx.uniorg` directory

``` shell
make release
```
