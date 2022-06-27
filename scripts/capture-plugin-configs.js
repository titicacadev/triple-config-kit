const { writeFile } = require('fs/promises')
const { resolve } = require('path')

const { ESLint } = require("eslint")

const plugins = require('./plugins.json')


  ;

(async () => {
  await Promise.all(
    plugins.map(async ({ name, config: configName }) => {
      const { parser, ...config } = await captureEslintConfig(configName, name.includes('typescript') ? "ts" : "js")

      await writeFile(resolve(__dirname, "../plugin-configs", `${name}.json`), JSON.stringify(config, null, 2))
    })
  )
})()

async function captureEslintConfig(configName, extension = 'js') {
  const eslint = new ESLint({
    useEslintrc: false,
    overrideConfig: {
      extends: [configName],
    }
  })

  const config = await eslint.calculateConfigForFile(`./mock.${extension}`)

  return removeMeaninglessValues(config)
}

function removeMeaninglessValues(obj) {
  if (typeof obj !== 'object') {
    return obj
  }

  if (Array.isArray(obj) === true) {
    return obj.map(removeMeaninglessValues)
  }

  return Object.entries(obj).reduce((normalizedObj, [key, value]) => isMeaninglessValue(value) ? normalizedObj : { ...normalizedObj, [key]: removeMeaninglessValues(value) }, {})
}

function isMeaninglessValue(value) {
  return value === null || value === undefined || (typeof value === 'object' && Object.values(value).length === 0)
}
