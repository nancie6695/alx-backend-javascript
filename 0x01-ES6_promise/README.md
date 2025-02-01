# 0x01. ES6 Promises
---
`JavaScript` `ES6`  

---
## Resources  
### Read or watch:  
- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 
- [JavaScript Promise: An introduction](https://web.dev/articles/promises)  
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)  
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)  
- [Throw/Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)    

---
## Learning Objectives
- `Promises` (how, why, and what)
- How to use the `then`, `resolve`, `catch` methods
- How to use every method of the `Promise` object
- `Throw `/ `Try`
- The `await` operator
- How to use an `async` function
---

## General Requirements  
- Files executed on **Ubuntu 18.04 LTS** using **NodeJS 12.11.x**  
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`  
- Mandatory `README.md` file  
- Code should use the `.js` extension  
- Code tested using the [Jest Testing Framework](https://jestjs.io/) and command:  
  ```bash
  npm run test
  ```
- Code analyzed using the linter **[ESLint](https://eslint.org/)** along with specific rules provided  
- All functions must be exported  
- All test and lint need to be passed and verified by running:  
  ```bash
  npm run full-test
  ```

---

## Setup  

### Install NodeJS 12.11.x  
*(in your home directory)*  

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

Check installation:  
```bash
$ nodejs -v
v12.11.1
$ npm -v
6.11.3
```

---

## Install Jest, Babel, and ESLint  
*(In your project directory):*  

- Install Jest using:  
  ```bash
  npm install --save-dev jest
  ```
- Install Babel using:  
  ```bash
  npm install --save-dev babel-jest @babel/core @babel/preset-env
  ```
- Install ESLint using:  
  ```bash
  npm install --save-dev eslint
  ```

---


 

✅ Thank You