# Vue Jump Start

This template should help get you started developing with Vue 3 in Vite.

![Screenshot](/public/screenshot.png)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
pnpm test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

## Using npm Instead of pnpm

If you prefer to use `npm` instead of `pnpm`, follow these steps:

1. **Install Dependencies**:
   Replace `pnpm install` with:

   ```sh
   npm install
   ```

2. **Run Scripts**:
   Replace `pnpm <script>` with:

   ```sh
   npm run <script>
   ```

   For example:

   - To start the development server: `npm run dev`
   - To build the project: `npm run build`

3. **Fix Potential Issues**:

   - If you encounter issues related to `node_modules`, delete the `node_modules` folder and the `pnpm-lock.yaml` file, then run:
     ```sh
     npm install
     ```
   - If the project uses `pnpm`-specific features (e.g., workspace support), you may need to adjust the configuration to work with `npm`.

4. **Update Lock File**:
   If you switch to `npm`, the `pnpm-lock.yaml` file will no longer be used. Instead, `npm` will generate a `package-lock.json` file.

By following these steps, you can seamlessly use `npm` instead of `pnpm` for this project.
