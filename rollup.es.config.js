import sourcemaps from 'rollup-plugin-sourcemaps';
import license from 'rollup-plugin-license';

const path = require('path');

export default {
    output: {
        format: 'es',
        sourcemap: true
    },
    plugins: [
        {
          name: 'replace moment imports',
          transform: code =>
            ({
              code: code.replace(/import\s*\*\s*as\s*moment/g, 'import moment'),
              map: { mappings: '' }
            })
        },
        sourcemaps(),
        license({
            sourceMap: true,

            banner: {
                file: path.join(__dirname, 'license-banner.txt'),
                encoding: 'utf-8',
            }
        })
    ],
    onwarn: () => { return }
}
