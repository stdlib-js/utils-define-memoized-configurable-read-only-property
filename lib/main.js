/**
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isObject = require( '@stdlib/assert-is-object' );
var isFunction = require( '@stdlib/assert-is-function' );
var defineMemoizedProperty = require( '@stdlib/utils-define-memoized-property' );
var format = require( '@stdlib/string-format' );


// MAIN //

/**
* Defines a configurable memoized read-only object property.
*
* ## Notes
*
* -   Configurable read-only properties are **enumerable**.
*
* @param {Object} obj - object on which to define the property
* @param {(string|symbol)} prop - property name
* @param {Function} fcn - function whose return value will be memoized and set as the property value
* @throws {TypeError} first argument must be an object
* @throws {TypeError} third argument must be a function
*
* @example
* var obj = {};
*
* function foo() {
*     return 'bar';
* }
*
* setMemoizedConfigurableReadOnly( obj, 'foo', foo );
*
* var v = obj.foo;
* // returns 'bar'
*/
function setMemoizedConfigurableReadOnly( obj, prop, fcn ) { // eslint-disable-line id-length
	if ( !isObject( obj ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be an object. Value: `%s`.', obj ) );
	}
	if ( !isFunction( fcn ) ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a function. Value: `%s`.', fcn ) );
	}
	defineMemoizedProperty( obj, prop, {
		'configurable': true,
		'enumerable': true,
		'writable': false,
		'value': fcn
	});
}


// EXPORTS //

module.exports = setMemoizedConfigurableReadOnly;
