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

test.each(['frontend', 'node'])(
  'babel 파서를 사용하더라도 타입스크립트 파일은 타입스크립트 파서를 사용합니다. %s',
  async (type) => {
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
  },
)

test.each([
  ['frontend', '.js'],
  ['frontend', '.jsx'],
  ['frontend', '.ts'],
  ['frontend', '.tsx'],
  ['node', '.js'],
  ['node', '.jsx'],
  ['node', '.ts'],
  ['node', '.tsx'],
])(
  'import/resolver가 js, jsx, ts, tsx 모듈 임포트를 처리할 수 있어야 합니다. %s, %s',
  async (type, extension) => {
    const overrideConfig = createConfig({
      type,
      enableTypeCheck: false,
      hasBabel: false,
    })
    const eslint = new ESLint({
      extensions: ['js', 'jsx', 'ts', 'tsx'],
      overrideConfig,
      useEslintrc: false,
    })

    const {
      settings: {
        'import/resolver': {
          node: { extensions },
        },
      },
    } = await eslint.calculateConfigForFile(`./foo${extension}`)

    expect(extensions).toEqual(
      expect.arrayContaining(['.js', '.jsx', '.ts', '.tsx']),
    )
  },
)
