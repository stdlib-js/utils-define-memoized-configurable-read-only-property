<!--

@license Apache-2.0

Copyright (c) 2019 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Configurable Memoized Read-Only

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> [Define][mdn-define-property] a configurable memoized **read-only** object property.

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-define-memoized-configurable-read-only-property
```

</section>

<section class="usage">

## Usage

<!-- eslint-disable id-length -->

```javascript
var setMemoizedConfigurableReadOnly = require( '@stdlib/utils-define-memoized-configurable-read-only-property' );
```

#### setMemoizedConfigurableReadOnly( obj, prop, fcn )

[Defines][mdn-define-property] a configurable memoized **read-only** object property.

<!-- eslint-disable id-length -->

```javascript
var obj = {};

function foo() {
    return 'bar';
}

setMemoizedConfigurableReadOnly( obj, 'foo', foo );

var v = obj.foo;
// returns 'bar'
```

The last argument should be a synchronous function whose return value will be memoized and set as the property value.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   A configurable **read-only** property is **enumerable**.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

<!-- eslint-disable id-length -->

```javascript
var fibonacci = require( '@stdlib/math-base-special-fibonacci' );
var setMemoizedConfigurableReadOnly = require( '@stdlib/utils-define-memoized-configurable-read-only-property' );

function Foo() {
    var self;
    if ( !(this instanceof Foo) ) {
        return new Foo();
    }
    self = this;
    this.count = 0;
    setMemoizedConfigurableReadOnly( this, 'fibo', fibo );
    return this;

    function fibo() {
        self.count += 1;
        return fibonacci( 73 );
    }
}

var foo = new Foo();

var i;
for ( i = 0; i < 10; i++ ) {
    console.log( 'F: %d. Count: %d.', foo.fibo, foo.count );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-define-memoized-configurable-read-only-property.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-define-memoized-configurable-read-only-property

[test-image]: https://github.com/stdlib-js/utils-define-memoized-configurable-read-only-property/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-define-memoized-configurable-read-only-property/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-define-memoized-configurable-read-only-property/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-define-memoized-configurable-read-only-property?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-define-memoized-configurable-read-only-property
[dependencies-url]: https://david-dm.org/stdlib-js/utils-define-memoized-configurable-read-only-property/main

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-define-memoized-configurable-read-only-property/main/LICENSE

[mdn-define-property]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty

</section>

<!-- /.links -->
