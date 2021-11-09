const path = require('path')

const { ESLint } = require('eslint')

test('eslint javascript config', async () => {
  const eslint = new ESLint({
    extensions: ['js', 'jsx'],
    overrideConfigFile: path.resolve(__dirname, '../index.js'),
    useEslintrc: false,
  })

  const config = await eslint.calculateConfigForFile('./mock.js')

  expect(config).toMatchSnapshot({
    parser: expect.stringMatching(/@babel\/eslint-parser/),
  })
})

test('eslint typescript config', async () => {
  const eslint = new ESLint({
    extensions: ['ts', 'tsx'],
    overrideConfigFile: path.resolve(__dirname, '../index.js'),
    useEslintrc: false,
  })

  const config = await eslint.calculateConfigForFile('./mock.tsx')

  expect(config).toMatchSnapshot({
    parser: expect.stringMatching(/@typescript-eslint/),
  })
})

test('eslint frontend config', async () => {
  const eslint = new ESLint({
    extensions: ['ts', 'tsx'],
    overrideConfigFile: path.resolve(__dirname, '../frontend.js'),
    useEslintrc: false,
  })

  const config = await eslint.calculateConfigForFile('./mock.tsx')

  expect(config).toMatchSnapshot()
})
