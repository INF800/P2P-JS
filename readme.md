- `brew install npm`
- `npm init` (contiously press enter. creates package.json)
- `npm install simple-peer --save` (saves simple-peer to package.json)
- `npm instal budo --save` (to package.json)
- in bash: `budo index.js:bundle.js` (creates bundle.js in main dir)
- now use `<script src="bundle.js"></script>` in html (`index.js` not needed)
- add to `package.json`
    ```
    "scripts": {
        "start": "budo index.js:bundle.js",
    ...
    "devDependencies": {
        "budo": "^4.1.0"
    },
    ```
    to automate it using `npm start`. 
    **You have to Run `npm start` everytime index.js is updated!**
- host using vscode live/simply using file

### How to use

- run `npm install` to install from `package.json`
- run `npm start` (if you want, see what `start` does in package.json)
- now, as `bundle.js` is created, you can use client side! host using simple server or use file:///
    - `budo` uses it's own server. goto mentioned host:port