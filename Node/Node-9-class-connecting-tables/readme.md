# Node boiler plate

## steps

1. init git, github
2. npm init -y
3. npm i express morgan dotenv cors mongodb
4. .gitignore failas jame node_module .env
5. npm i [eslint](https://www.npmjs.com/package/eslint) --save-dev
6. npm init @eslint/config
7. src/server.js - aprasyti express [aplikacija](https://www.npmjs.com/package/express)
8. .env - port
9. package.json - surasom scripts: start, lintFix :
   package json - surasom scripts :

"scripts": {
"start": "nodemon src/server.js",
"lint": " eslint src/",
"lintfix": "eslint src/ --fix"
},

eslint :

"rules": {
"no-console": "off",
"linebreak-style": ["off", "windows"]
}

10. http.rest - routes
11. src/api/ - sukurti resurso faila pvz usersRoutes.js
12. src/api/usersRoutes.js - sukuriam router express.Router() isexportuojam su module.exports default exportu
13. Create and export mongo client
