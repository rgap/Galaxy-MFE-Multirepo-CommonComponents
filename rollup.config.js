import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: [
    { file: "dist/index.js", format: "cjs", exports: "named", sourcemap: true },
    {
      file: "dist/index.esm.js",
      format: "esm",
      exports: "named",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: [".js", ".jsx"],
    }),
    peerDepsExternal(),
    postcss({
      extract: false, // Don't extract to separate file, inject inline
      inject: true, // Inject styles into JS bundle
      use: [
        [
          "sass",
          {
            includePaths: ["node_modules"],
          },
        ],
      ],
    }),
    commonjs(),
    babel({
      babelHelpers: "bundled",
      extensions: [".js", ".jsx"],
      presets: ["@babel/preset-react"],
    }),
  ],
};
