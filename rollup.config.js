import resolve from 'rollup-plugin-node-resolve';
import sourcemaps from 'rollup-plugin-sourcemaps';
import commonjs from 'rollup-plugin-commonjs';
/**
 * Add here external dependencies that actually you use.
 *
 * Angular dependencies
 * - '@angular/animations' => 'ng.animations'
 * - '@angular/animations/browser': 'ng.animations.browser'
 * - '@angular/common' => 'ng.common'
 * - '@angular/compiler' => 'ng.compiler'
 * - '@angular/core' => 'ng.core'
 * - '@angular/forms' => 'ng.forms'
 * - '@angular/common/http' => 'ng.common.http'
 * - '@angular/platform-browser-dynamic' => 'ng.platformBrowserDynamic'
 * - '@angular/platform-browser' => 'ng.platformBrowser'
 * - '@angular/platform-browser/animations' => 'ng.platformBrowser.animations'
 * - '@angular/platform-server' => 'ng.platformServer'
 * - '@angular/router' => 'ng.router'
 *
 * RxJS dependencies
 * Each RxJS functionality that you use in the library must be added as external dependency.
 * - For main classes use 'Rx':
 *      e.g. import { Observable } from 'rxjs/Observable'; => 'rxjs/Observable': 'Rx'
 * - For observable methods use 'Rx.Observable':
 *      e.g. import 'rxjs/add/observable/merge'; => 'rxjs/add/observable/merge': 'Rx.Observable'
 *      or for lettable operators:
 *      e.g. import { merge } from 'rxjs/observable/merge'; => 'rxjs/observable/merge': 'Rx.Observable'
 * - For operators use 'Rx.Observable.prototype':
 *      e.g. import 'rxjs/add/operator/map'; => 'rxjs/add/operator/map': 'Rx.Observable.prototype'
 *      or for lettable operators:
 *      e.g. import { map } from 'rxjs/operators'; => 'rxjs/operators': 'Rx.Observable.prototype'
 *
 * Other dependencies
 * - Angular libraries: refer to their global namespace
 * - TypeScript/JavaScript libraries:
 *      e.g. lodash: 'lodash' => 'lodash'
 *
 * Also, if the dependency uses CommonJS modules, such as lodash,
 * you should also use a plugin like rollup-plugin-commonjs,
 * to explicitly specify unresolvable "named exports".
 *
 */
const globals = {
    '@angular/core': 'ng.core',
    '@angular/common': 'ng.common',
    '@angular/material': 'ng.material',
    'rxjs/Observable': 'Rx',
    'rxjs/Observer': 'Rx',
    'rxjs/Subject' : 'Rx',
    'rxjs/Subscription' : 'Rx',
    // rxjs/observable
    'rxjs/observable/of': 'Rx.Observable',
    'rxjs/observable/throw': 'Rx.Observable',
    'rxjs/observable/defer': 'Rx.Observable',
    'rxjs/observable/merge': 'Rx.Observable',
    'rxjs/observable/forkJoin': 'Rx.Observable',
    'rxjs/observable/fromEvent': 'Rx.Observable',
    'rxjs/observable/fromPromise': 'Rx.Observable',
    'rxjs/observable/combineLatest': 'Rx.Observable',
    'rxjs/observable/fromEventPattern': 'Rx.Observable',
    // rxjs/operator
    'rxjs/operator/map': 'Rx.Observable.prototype',
    'rxjs/operators/map': 'Rx.Observable.prototype',
    'rxjs/operator/filter': 'Rx.Observable.prototype',
    'rxjs/operator/concatMap': 'Rx.Observable.prototype',
    // rxjs/operators
    'rxjs/operators/tap': 'Rx.Observable.prototype',
    'rxjs/operators/take': 'Rx.Observable.prototype',
    'rxjs/operators/share': 'Rx.Observable.prototype',
    'rxjs/operators/filter': 'Rx.Observable.prototype',
    'rxjs/operators/finalize': 'Rx.Observable.prototype',
    'rxjs/operators/auditTime': 'Rx.Observable.prototype',
    'rxjs/operators/startWith': 'Rx.Observable.prototype',
    'rxjs/operators/takeUntil': 'Rx.Observable.prototype',
    'rxjs/operators/catchError': 'Rx.Observable.prototype',
    'rxjs/operators/debounceTime': 'Rx.Observable.prototype'
  };

export default {
    external: Object.keys(globals),
    plugins: [
      resolve(),
      sourcemaps(),
      commonjs()
    ],
    onwarn: () => { return },
    output: {
        format: 'umd',
        name: 'ng.integrityAngular',
        globals: globals,
        sourcemap: true,
        exports: 'named',
        amd: { id: 'integrity-angular' }
    }
}
