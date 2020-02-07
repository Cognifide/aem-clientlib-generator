const aemClientlibGenerator = require('aem-clientlib-generator');
const chalk = require('chalk');
const path = require('path');
const fs = require('fs');

const DEFAULT_CONFIG_FILE_NAME = 'clientlib.config.js';

class AemClientlibGeneratorWebpackPlugin {
  constructor(options) {
    if (!options) {
      const configPath = path.resolve(process.cwd(), DEFAULT_CONFIG_FILE_NAME);

      if (!fs.existsSync(configPath)) {
        console.error(chalk.red(`ERROR: Could not find config file: ${DEFAULT_CONFIG_FILE_NAME}.`));
        process.exit(1);
      }

      this.options = require(configPath);
    } else {
      this.options = options;
    }

    if (this.options && !Object.keys(this.options).length) {
      console.error(chalk.red('ERROR: AemClientlibGenerator configuration is invalid.'));
      process.exit(1);
    }

    const { libs, ...config } = this.options;

    this.libs = libs;
    this.config = config;
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tap('AemClientlibGeneratorWebpackPlugin', () => {
      console.log(chalk.bold('Starting AemClientLibGenerator'));
      console.log(`Clientlibs path: ${ this.config.clientLibRoot }`);

      aemClientlibGenerator(this.libs, this.config);
    });
  }
};

module.exports = AemClientlibGeneratorWebpackPlugin;