# this plugin is under construction.

-------------------
# fis3-parser-dart-sass 

a fis plugin to parse sass with dart-sass.

[![npm](https://img.shields.io/npm/v/fis3-parser-dart-sass.svg?style=flat-square)](https://www.npmjs.com/package/fis3-parser-dart-sass) 
[![npm](https://img.shields.io/npm/dt/fis3-parser-dart-sass.svg?style=flat-square)](https://www.npmjs.com/package/fis3-parser-dart-sass) 
[![npm](https://img.shields.io/npm/dm/fis3-parser-dart-sass.svg?style=flat-square)](https://www.npmjs.com/package/fis3-parser-dart-sass)


## usage

    $ npm i -g fis3-parser-dart-sass

```
// fis-conf.js

var config = {
}; 

fis.match('*.{scss,sass}', {
  parser: fis.plugin('dart-sass', config);
});
```

[more options](https://github.com/sass/dart-sass)

## links
fis3: [http://fis.baidu.com/](http://fis.baidu.com/)

sass: [http://sass-lang.com/](http://sass-lang.com/)

dart-sass: [https://github.com/sass/dart-sass](https://github.com/sass/dart-sass)
