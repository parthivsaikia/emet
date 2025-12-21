import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"], // Build for commonjs and esm users
  dts: true, // Generate .d.ts files
  splitting: false,
  sourcemap: true,
  clean: true, // Clean dist folder before build
});
