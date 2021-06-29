```"Ohana is a full-stack management tool that abstracts self-service K8s workflow for engineering/DevOps teams by giving developers the freedom to create namespace/virtual clusters on-demand achieving strong multi-tenancy in a cluster through RBAC."```

REQUIREMENTS:
- Node.js version 12.18.3+
- Google Cloud SDK
- vClusters
- Helm
- 

INSTALL:gi
- With NPM:

TO GET STARTED:
- Run ```npm install``` , we need to do this because our npm dependencies 
- Run ```ohana-*** with the "nix", "mac", "win", "m1" ``` flags depending on your operating system or command line interface
- Please note that if you are using WSL and Windows, please install using the ```ohana-nix``` flag; if you are using powershell, please install using the ```ohana-win``` flag
- Google cloud may need to be installed locally for macOS: ```https://cloud.google.com/sdk/docs/quickstart#mac```

FOR ADMINS TO CONNECT:
- utilize gcloud init to set up a configuration; regions are currently locked to ```us-west1``` or ```us-west1-a```. functionality to choose or create will come in a later update; 
- Run ```gcloud config set account <account-email-address>``` to change accounts if managing more than one cluster; functionality in UI to be included later
- Connect to the cluster with your google cloud account using ```gcloud auth login```; you may be asked to verify in a browser

FOR ADMINS TO MANAGE TEAMS:
- Use an admin account and log in with your credentials. You will be taken to the admin panel where you can create teams, users, and have a view of the existing teams and users
- Create users within the UI; functionality to use a .yaml configuration for RBAC configuration
- Once users have their own account, they'll be able to log in

FOR USERS:
- Once you have your account and can log in, the UI is intuitive to connect and create
- Input the necessary fields in the vCluster page: 
- ```Cluster``` : Original Cluster name to connect to
- ```vCluster```: the vCluster name you want
- ```Host Namespace```: 


// necessary to create a cluster if it doesn't already exist; be aware of regional resource availability
gcloud.create = (clusterName, numNodes, gcloudRegion) => `gcloud container clusters create ${clusterName} --num-nodes=${numNodes} --region=${gcloudRegion}`
// 'gcloud container clusters get-credentials <insert name>:<optional tag> 
gcloud.getCredentials = (clusterName) => `gcloud container clusters get-credentials ${clusterName} --region=us-west1`
// 'gcloud config set account <accountemailaddress>'
gcloud.switchAccount = (gcloudUserEmail) => `gcloud config set account ${gcloudUserEmail}`



const kubectl = {};

kubectl.createNamespace = (hostNamespace) => `kubectl create namespace ${hostNamespace}`
// can create spaces, accounts, configurations, namespaces etc based on the config file passed in
kubectl.createFromConfig = (configFile) => `kubectl apply -f ${configFile}`
// can create spaces, accounts, configurations, namespaces, roles, etc based on the config file passed in impersonating a user; admin only
kubectl.createFromConfigAs = (configFile, userName) => `kubectl apply -f /yamlConfigs/${configFile}.yaml --as=${userName}`
// get additional detail on pods
kubectl.describe = (hostNamespace) => `kubectl describe pods -n ${hostNamespace}`
// kubectl create deployment <insert name> --image=<insert image file/link>
kubectl.deployImage = (deploymentName, hostNamespace, imageFile) => `kubectl create deployment ${deploymentName} -n ${hostNamespace} --image=${imageFile}`
// expose the deployment for kubernetes 
kubectl.expose = (deploymentName, hostNamespace) => `kubectl expose deployment ${deploymentName} -n ${hostNamespace} --type LoadBalancer --port=80 --target-port=8080`
// deploy the pod in a specific namespace with the image configuration
kubectl.deploy = (hostNamespace, configFile) => `kubectl apply -n ${hostNamespace} -f /Users/fenris/Desktop/Codesmith/klustr.dev/yamlConfigs/${configFile}.yaml`
// deploy the pod in a specific namespace with the image configuration impersonating a user; admin only
kubectl.deployAs = (hostNamespace, configFile, userName) => `kubectl apply -n ${hostNamespace} -f /yamlConfigs/${configFile}.yaml --as=${userName}`


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