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

  expect(config).toMatchSnapshot()
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

test('eslint createConfig frontend type', async () => {
  const overrideConfig = createConfig({
    type: 'frontend',
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

test('babel 파서를 사용하더라도 타입스크립트 파일은 타입스크립트 파서를 사용합니다.', async () => {
  const runTest = async (type) => {
    const overrideConfig = createConfig({
      type,
      enableTypeCheck: false,
      hasBabel: true,
    })
    const eslint = new ESLint({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      overrideConfig,
      useEslintrc: false,
    })

    const { parser } = await eslint.calculateConfigForFile('./foo.ts')

    expect(parser).toEqual(expect.stringMatching(/@typescript-eslint\//))
  }

  await runTest('node')
  await runTest('frontend')
})
