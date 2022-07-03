<h1 align="center">Welcome to Node.Js JWT Token Verify 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/infysumanta/jwt-token-verify-from-public-key" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
  <a href="https://twitter.com/infysumanta" target="_blank">
    <img alt="Twitter: infysumanta" src="https://img.shields.io/twitter/follow/infysumanta.svg?style=social" />
  </a>
</p>

> A project for Verify JWT Token from Public Key

### 🏠 [Homepage](https://github.com/infysumanta/jwt-token-verify-from-public-key)

### ✨ [Demo](https://github.com/infysumanta/jwt-token-verify-from-public-key)

## Install

```sh
npm install
```

## Usage

### Copy the Environment File

```sh
cp .env.example .env
```

### Copy the Environment File

Enter Value for TOKEN in .env file to check

### Verify the Result

```sh
npm run verify
```

## Expected result

### If Successfully Verified

```json
{
  "aud": "5",
  "jti": "47c64d9b23274bd2c41c7dd7e616fbaa5808012482452f44e35ef7e72b059f2c02f52f5205b4c942",
  "iat": 1627215099.690928,
  "nbf": 1627215099.690932,
  "exp": 1658751099.688696,
  "sub": "5",
  "scopes": []
}
```

```sh
Token Successfully Verified
```

### If Token Mismatched

```sh
Token Not Verified, Mismatch or Wrong Token
```

## Author

👤 **SUMANTA KABIRAJ**

- Website: https://sumantakabiraj.com
- Twitter: [@infysumanta](https://twitter.com/infysumanta)
- Github: [@infysumanta](https://github.com/infysumanta)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/infysumanta/jwt-token-verify-from-public-key/issues).

## Show your support

Give a ⭐️ if this project helped you!
