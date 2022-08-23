# Troubleshooting

## Definition for rule '@typescript-eslint/padding-line-between-statements' was not found

Provavelmente um problema na versão do plugin `@typescript-eslint/eslint-plugin`, pode ser resolvido adicionando a seguinte resolution no package.json:

```
"resolutions": {
  "@typescript-eslint/eslint-plugin": "4.33.0"
}
```
