import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
// 打包过程能正确加载文件
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.ts',
  output: {
    file: `./umd/umd.js`,
    name: 'color',
    format: 'umd'
  },
  plugins: [
    nodeResolve(),
    babel({ babelHelpers: 'bundled' }),
    typescript({ compilerOptions: { module: 'esnext' } })
  ]
};
