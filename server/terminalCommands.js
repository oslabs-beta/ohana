const { exec } = require('child_process');
const { GkeHubMembershipServiceClient } = require('@google-cloud/gke-hub');


function runTerminalCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.log(error)
      return;
    }
    console.log(`stdout: ${stdout}`)
    console.log(`stderr: ${stderr}`)
  })
}

const gcloud = {
  create: 'gcloud container clusters create klustr-jefftest --num-nodes=2 --region=us-west2',
  // 'gcloud container clusters get-credentials <insert name>:<optional tag> 
  getCredentials: 'gcloud container clusters get-credentials klustr-jefftest --region=us-west2' // add <name>
}

// kubectl terminal commands
const kubectl = {
  // get description of pods w/in your container
  get: 'kubectl get pods',
  // get additional detail on pods
  describe: 'kubectl describe pods',
  // create namespace (must specify name) i.e. terminal command: 'kubectl create namespace <insert namespace here>'
  createNamespace: 'kubectl create namespace jefftest-namespace',
  // kubectl create deployment <insert name> --image=<insert image file/link>
  deploy: 'kubectl create deployment klustr-deployment --image=docker.io/klustr/watchr',
  // expose the deployment for kubernetes 
  expose: 'kubectl expose deployment klustr-deployment --type LoadBalancer --port=80 --target-port=8080',
}


// function -> sign-in user (to ohana app)
// log in user
// console login status i.e. login success or login failed

const kiosk = {
  // 'kubectl apply -f <insert filename>.yaml'
  apply: 'kubectl apply -f'
}
// console name / hash of newly created space

// function -> create vCluster
const vCluster = {
  create: ''
}

runTerminalCommand(kubectl.expose);