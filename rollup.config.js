import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/index.ts',
    external: [],
    output: [
      {
        file: 'dist/mytslibrary.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/mytslibrary.umd.js',
        format: 'umd',
        name: 'MyTslibrary',
        sourcemap: true,
        globals: {},
      },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  },
  {
    input: 'src/math/index.ts',
    external: ['@nexys/math-ts'],
    output: [
      {
        file: 'dist/mytslibrary-math.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/mytslibrary-math.umd.js',
        format: 'umd',
        name: 'mytslibraryMath',
        sourcemap: true,
        globals: {
          '@nexys/math-ts': 'MathTs'
        },
      },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  },
  {
    input: 'src/text/index.ts',
    external: ['string-kit'],
    output: [
      {
        file: 'dist/mytslibrary-text.esm.js',
        format: 'es',
        sourcemap: true,
      },
      {
        file: 'dist/mytslibrary-text.umd.js',
        format: 'umd',
        name: 'mytslibraryText',
        sourcemap: true,
        globals: {
          'string-kit': 'StringKit'
        },
      },
    ],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  }
];
