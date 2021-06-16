```"Tresnétes is a full-stack management tool that abstracts self-service K8s workflow for engineering/DevOps teams by giving developers the freedom to create namespace/virtual clusters on-demand achieving strong multi-tenancy in a cluster through RBAC."```

REQUIREMENTS:
- Node.js version 12.18.3+

INSTALL:
- With NPM:

npm install --save klustrdev

TO GET STARTED:
- run ```npm install``` , we need to do this because our npm dependencies 
Stage 1: successfully initialize node, git repo, webpack and running express backend server.
  - webpack: 
    - current loaders: preset-react, preset-env
    - npm run build and npm start scripts work
  - server/express
    - production server listening on 3000
  - backend database
    - not yet implemented


 - Assumes you already have a cluster that is currently running on GKE
 - Assumes you have admin privileges for said cluster (Admin)
  -- the Admin would then grant you rights to the namespace, which would allow you to create a vcluster

Commands used to get started:
1) ```npm init -y```                                  ---> creates package.json file
2) ```touch README.md```                              ---> creates a blank README file
3) ```git init```                                     ---> initialize git local repository
4) ```git remote add origin <github repo link>```     ---> link a remote repository from github to local repo
5) ```git checkout -b master```                       ---> creates a master branch and checkouts at same time
6) ```npm install webpack webpack-cli --save-dev```   ---> install webpack locally and install webpack-cli (tool used to run webpack on command line)
7) ```touch index.html```                             ---> creates an index.html file
8) ```npm install -D babel-loader @babel/core @babel/preset-env @babel/preset-react webpack``` ---> install babel-loader NodeJS module, as well as presets which are just loaders which transpile code to something that can be understood by browser, e.g. ES6/7/8 -> ES5, React JSX -> JS/HTML
https://webpack.js.org/loaders/babel-loader/
https://stackoverflow.com/questions/47721169/babel-vs-babel-core-vs-babel-loader-vs-babel-preset-2015-vs-babel-preset-react-v
9) ```npm install --save-dev react```                     ---> install react nodeJS module
10)```npm install --save-dev react-dom```                 ---> install react-dom nodeJS module
11)```npm install --save-dev express```                   ---> install express nodeJS module


Stage 2: get webpack dev server running
  - installed nodemon to run server and re-compile upon saves
  - installed cross-env and concurrently to allow for npm run dev script to open 8080 and reroute server requests to 3000
  - installed webpack-dev-server
  - in script 'dev' and 'build', we set the NODE_ENV to be 'development' and 'production' respectively
  - in webpack.config.js, we add a devServer property which allows us to set up config for development mode, set port to 8080, set proxy to localhost/3000
  - in webpack.config.js, we set 'mode' to process.env.NODE_ENV, to dynamically use the correct configurations depending on environment (production vs. development)
1) ```npm install -g nodemon``` or  ```npm install --save-dev nodemon```          ---> install nodemon nodeJS package
2) ```npm install --global cross-env``` or ```npm install --save-dev cross-env``` ---> install cross-env nodeJS package
3) ```npm install -g concurrently``` or ```npm install -save-dev concurrently```  ---> install concurrently nodeJS package
4) ```npm install --save-dev webpack-dev-server```                                ---> install webpack-dev-server, allows


Stage 3: fixing bug with serving bundle.js in production environment
  - Apparently you need to use app.use to catch the request sent in index.html for /bundle/build.js
  - need to investigate why app.get('/bundle/build) does not work.