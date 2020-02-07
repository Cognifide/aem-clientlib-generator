# AEM ClientLib Generator Webpack Plugin

---

## Description

Plugin which integrates [aem-clientlib-generator](https://github.com/wcm-io-frontend/aem-clientlib-generator) into your webpack setup.

[Aem-clientlib-generator](https://github.com/wcm-io-frontend/aem-clientlib-generator) makes it possible to work in a single source code directory with a single frontend setup to create multiple AEM Client Libraries.
Using configuration file you can control any property of Client Libraries (*dependencies, embeds* etc).

## Installation

Use npm:

```
npm install aem-clientlib-generator-webpack-plugin
```

or yarn:

```
yarn add aem-clientlib-generator-webpack-plugin
```

## Usage

Import the plugin in your webpack configuration file:

```
const AemClientlibGeneratorPlugin = require('aem-clientlib-generator-webpack-plugin');
```

And use within `plugins` property of the webpack configuration:

```
...
plugins: [
    ...,
    new AemClientlibGeneratorPlugin(),
],
...
```

AemClientlibGeneratorPlugin takes the same options as [aem-clientlib-generator](https://github.com/wcm-io-frontend/aem-clientlib-generator) library,
please refer to it's documentation.

If no options are provided within webpack configuration, plugin will look for a `clientlib.config.js` file.