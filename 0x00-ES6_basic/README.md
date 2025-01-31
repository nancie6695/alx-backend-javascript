
# 0x00. ES6 Basics  
---
`JavaScript` `ES6`  

## Concepts  
*For this project, look at these concepts:*  

- [Modern JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  
- [Software Linter](https://eslint.org/)  

---
## Resources  
### Read or watch:  
- [ECMAScript 6 - ECMAScript 2015](https://www.ecma-international.org/ecma-262/6.0/)  
- [Statements and declarations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements)  
- [Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)  
- [Default parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters)  
- [Rest parameter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)  
- [JavaScript ES6 - Iterables and Iterators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)  

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


 

✅ Bye!