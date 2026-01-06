# @se-oss/deep-freeze

[![CI](https://github.com/shahradelahi/ts-deep-freeze/actions/workflows/ci.yml/badge.svg?branch=main&event=push)](https://github.com/shahradelahi/ts-deep-freeze/actions/workflows/ci.yml)
[![NPM Version](https://img.shields.io/npm/v/@se-oss/deep-freeze.svg)](https://www.npmjs.com/package/@se-oss/deep-freeze)
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](/LICENSE)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@se-oss/deep-freeze)
[![Install Size](https://packagephobia.com/badge?p=@se-oss/deep-freeze)](https://packagephobia.com/result?p=@se-oss/deep-freeze)

_@se-oss/deep-freeze_ is a utility for deep-freezing objects.

---

- [Installation](#-installation)
- [Usage](#-usage)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#license)

## 📦 Installation

```bash
npm install @se-oss/deep-freeze
```

<details>
<summary>Install using your favorite package manager</summary>

**pnpm**

```bash
pnpm install @se-oss/deep-freeze
```

**yarn**

```bash
yarn add @se-oss/deep-freeze
```

</details>

## 📖 Usage

```typescript
import { deepFreeze } from '@se-oss/deep-freeze';

const obj = {
  a: 1,
  b: { c: 2 },
  d: [1, 2],
};

deepFreeze(obj);

// obj is now immutable:
// obj.a = 2; // Error
// obj.b.c = 3; // Error
// obj.d.push(3); // Error
```

## 📚 Documentation

For all configuration options, please see [the API docs](https://www.jsdocs.io/package/@se-oss/deep-freeze).

## 🤝 Contributing

Want to contribute? Awesome! To show your support is to star the project, or to raise issues on [GitHub](https://github.com/shahradelahi/ts-deep-freeze).

Thanks again for your support, it is much appreciated! 🙏

## License

[MIT](/LICENSE) © [Shahrad Elahi](https://github.com/shahradelahi) and [contributors](https://github.com/shahradelahi/ts-deep-freeze/graphs/contributors).
