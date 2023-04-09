import path from 'path';

import { babel } from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';

// 获取要打包的文件
const entry = Object.fromEntries(
  glob
    .sync('src/**/*.{ts,tsx}')
    .map((file) => [
      path.relative('src', file.slice(0, file.length - path.extname(file).length)),
      file
    ])
);

// 配置每个文件单独打包
const arrConfig = Object.keys(entry).map((key) => {
  return {
    input: entry[key],
    output: [
      {
        file: `./es/${key}.js`,
        format: 'es'
      },
      {
        file: `./cjs/${key}.js`,
        format: 'cjs'
      }
    ],
    plugins: [typescript({ compilerOptions: { module: 'CommonJS' } }), babel()]
  };
});

export default arrConfig;
