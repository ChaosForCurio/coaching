import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import tsEslint from 'typescript-eslint';

export default tsEslint.config(
  {
    ignores: ['dist/**', '.astro/**', '.wrangler/**', 'node_modules/**', 'scratch/**'],
  },
  ...tsEslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-props': 'error',
      'jsx-a11y/aria-proptypes': 'error',
      'jsx-a11y/aria-unsupported-elements': 'error',
      'jsx-a11y/role-has-required-aria-props': 'error',
      'jsx-a11y/role-supports-aria-props': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  }
);



