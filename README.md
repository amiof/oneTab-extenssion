<h1 align="center">🚀 oneTab-extension</h1>
<p align="center">it is a tab manager extenssion based web-extension-starter </p>
<div align="center">
  <a href="https://travis-ci.com/abhijithvijayan/web-extension-starter">
    <img src="https://travis-ci.com/abhijithvijayan/web-extension-starter.svg?branch=react-typescript" alt="Travis Build" />
  </a>
  </a>
  <a href="https://david-dm.org/abhijithvijayan/web-extension-starter">
    <img src="https://img.shields.io/david/abhijithvijayan/web-extension-starter.svg?colorB=orange" alt="DEPENDENCIES" />
  </a>
  <a href="https://github.com/abhijithvijayan/web-extension-starter/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/abhijithvijayan/web-extension-starter.svg" alt="LICENSE" />
  </a>
</div>
<hr />


🧙‍♂️ **React + TypeScript** = [This](https://github.com/abhijithvijayan/web-extension-starter/tree/react-typescript) branch

😨 **React + JavaScript** = Checkout [react-javascript](https://github.com/abhijithvijayan/web-extension-starter/tree/react-javascript) branch

👶🏼 **HTML + JavaScript** = Checkout [master](https://github.com/abhijithvijayan/web-extension-starter/tree/master) branch

## Features

- Cross Browser Support (Web-Extensions API)
- Browser Tailored Manifest generation
- Automatic build on code changes
- Auto packs browser specific build files
- SASS styling
- TypeScript by default
- ES6 modules support
- React UI Library by default
- Smart reload

## Browser Support

| [![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png)](/) | [![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png)](/) | [![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png)](/) | [![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png)](/) | [![Yandex](https://raw.github.com/alrra/browser-logos/master/src/yandex/yandex_48x48.png)](/) | [![Brave](https://raw.github.com/alrra/browser-logos/master/src/brave/brave_48x48.png)](/) | [![vivaldi](https://raw.github.com/alrra/browser-logos/master/src/vivaldi/vivaldi_48x48.png)](/) |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| 49 & later ✔                                                                                  | 52 & later ✔                                                                                     | 36 & later ✔                                                                               | 79 & later ✔                                                                            | Latest ✔                                                                                      | Latest ✔                                                                                   | Latest ✔                                                                                         |

## Used by extensions in production that has over 100,000+ users.

- [daily.dev](https://daily.dev) in [daily.dev extension](https://r.daily.dev/get)
- [Jiffy Reader](https://chrome.google.com/webstore/detail/jiffy-reader/lljedihjnnjjefafchaljkhbpfhfkdic) in [ansh/jiffyreader.com](https://github.com/ansh/jiffyreader.com)
- [kutt-extension](https://chrome.google.com/webstore/detail/kutt/pklakpjfiegjacoppcodencchehlfnpd) in [abhijithvijayan/kutt-extension](https://github.com/abhijithvijayan/kutt-extension)
- [doubanIMDb](https://chrome.google.com/webstore/detail/doubanimdb/nfibbjnhkbjlgjaojglmmibdjicidini) in [lisongx/doubanIMDb](https://github.com/lisongx/doubanIMDb)
- [Mooc Assistant](https://chrome.google.com/webstore/detail/mooc-assistant/oebggekgendmoeedkkdkdcdbmfbfeldc) in [unbyte/mooc-assistant](https://github.com/unbyte/mooc-assistant)
- ArtiPub in [crawlab-team/artipub](https://github.com/crawlab-team/artipub/tree/master/extensions)

and many more...

## Use this template

Create a new directory and run

```
curl -fsSL https://github.com/abhijithvijayan/web-extension-starter/archive/react-typescript.tar.gz | tar -xz --strip-components=1
```

## 🚀 Quick Start

Ensure you have

- [Node.js](https://nodejs.org) 10 or later installed
- [Yarn](https://yarnpkg.com) v1 or v2 installed

Then run the following:

- `yarn install` to install dependencies.
- `yarn run dev:chrome` to start the development server for chrome extension
- `yarn run dev:firefox` to start the development server for firefox addon
- `yarn run dev:opera` to start the development server for opera extension
- `yarn run build:chrome` to build chrome extension
- `yarn run build:firefox` to build firefox addon
- `yarn run build:opera` to build opera extension
- `yarn run build` builds and packs extensions all at once to extension/ directory

### Development

- `yarn install` to install dependencies.
- To watch file changes in development

  - Chrome
    - `yarn run dev:chrome`
  - Firefox
    - `yarn run dev:firefox`
  - Opera
    - `yarn run dev:opera`

- **Load extension in browser**

- ### Chrome

  - Go to the browser address bar and type `chrome://extensions`
  - Check the `Developer Mode` button to enable it.
  - Click on the `Load Unpacked Extension…` button.
  - Select your browsers folder in `extension/`.

- ### Firefox

  - Load the Add-on via `about:debugging` as temporary Add-on.
  - Choose the `manifest.json` file in the extracted directory

- ### Opera

  - Load the extension via `opera:extensions`
  - Check the `Developer Mode` and load as unpacked from extension’s extracted directory.

### Production

- `yarn run build` builds the extension for all the browsers to `extension/BROWSER` directory respectively.

Note: By default the `manifest.json` is set with version `0.0.0`. The webpack loader will update the version in the build with that of the `package.json` version. In order to release a new version, update version in `package.json` and run script.

If you don't want to use `package.json` version, you can disable the option [here](https://github.com/abhijithvijayan/web-extension-starter/blob/e10158c4a49948dea9fdca06592876d9ca04e028/webpack.config.js#L79).

### Generating browser specific manifest.json

Update `source/manifest.json` file with browser vendor prefixed manifest keys

```js
{
  "__chrome__name": "SuperChrome",
  "__firefox__name": "SuperFox",
  "__edge__name": "SuperEdge",
  "__opera__name": "SuperOpera"
}
```

if the vendor is `chrome` this compiles to:

```js
{
  "name": "SuperChrome",
}
```

---

Add keys to multiple vendors by separating them with | in the prefix

```
{
  __chrome|opera__name: "SuperBlink"
}
```

if the vendor is `chrome` or `opera`, this compiles to:

```
{
  "name": "SuperBlink"
}
```





