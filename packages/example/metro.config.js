const { getDefaultConfig } = require('expo/metro-config')
const { mergeConfig } = require('metro-config')
const { resolve } = require('node:path')

const projectRoot = __dirname
const workspaceRoot = resolve(projectRoot, '../..')

const baseConfig = getDefaultConfig(projectRoot)

const config = mergeConfig(baseConfig, {
  watchFolders: [workspaceRoot],
  resolver: {
    nodeModulesPaths: [
      resolve(projectRoot, 'node_modules'),
      resolve(workspaceRoot, 'node_modules'),
    ],
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
})

module.exports = config
