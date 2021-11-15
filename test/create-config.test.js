const { ESLint } = require('eslint')

const createConfig = require('../create-config')

test('eslint createConfig javascript', async () => {
  const overrideConfig = createConfig({
    type: 'node',
    allowedNames: ['_triple_mock_value'],
  })
  const eslint = new ESLint({
    extensions: ['js', 'jsx'],
    overrideConfig,
    useEslintrc: false,
  })

  const config = await eslint.calculateConfigForFile('./mock.js')

  expect(config).toMatchSnapshot({
    parser: expect.stringMatching(/@babel\/eslint-parser/),
  })
})

test('eslint createConfig typescript', async () => {
  const overrideConfig = createConfig({
    type: 'node',
    allowedNames: ['_triple_mock_value'],
    project: './tsconfig.json',
    tsconfigRootDir: '~/mock-dir-name',
    enableTypeCheck: true,
  })
  const eslint = new ESLint({
    extensions: ['ts', 'tsx'],
    overrideConfig,
    useEslintrc: false,
  })

  const config = await eslint.calculateConfigForFile('./mock.ts')

  expect(config).toMatchSnapshot({
    parser: expect.stringMatching(/@typescript-eslint/),
  })
})
