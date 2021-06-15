const { exec } = require('child_process');

// TODO: need to parameterize inputs to create the terminal commands

// exec runs a node child_process, which will run command line in a terminal
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
// gcloud variables
let clusterName = 'klustr-jefftest';
let gcloudRegion = 'us-west2';
let numNodes = '2';
let gcloudUserEmail = 'contact.jeffchen@gmail.com';
// kubctl variables
let imageFile = 'docker.io/klustr/watchr'
// imageFile only for watchr purposes
let deploymentName = 'klustr-deployment'
let namespace = 'kiosk';
let configFile = '/yamlConfigs/account.yaml';
let podName = 'klustr-deployment-786bd87dd4-pvrk6';
let userName = 'john';
let portIn = '80';
let portOut = '8080';
let space = 'johns-space';

const gcloud = {
  // necessary to create a cluster if it doesn't already exist; be aware of regional resource availability
  create: `gcloud container clusters create ${clusterName} --num-nodes=${numNodes} --region=${gcloudRegion}`,
  // 'gcloud container clusters get-credentials <insert name>:<optional tag> 
  getCredentials: `gcloud container clusters get-credentials ${clusterName} --region=${gcloudRegion}`, // add <name>
  // 'gcloud config set account <accountemailaddress>'
  switchAccount: `gcloud config set account ${gcloudUserEmail}`
}
  
// kubectl terminal commands || cheatsheet for reference: https://kubernetes.io/docs/reference/kubectl/cheatsheet/
const kubectl = {
  // get description of pods w/in your container; add namespace as a flag -n or --namespace
  getPods: `kubectl get pods -n ${namespace}`,
  // kubectl logs <pod name> - outputs logs of the specified pod
  logs: `kubectl logs ${podName}`,
  // get additional detail on pods
  describe: `kubectl describe pods -n ${namespace}`,
  // inspect and get services running with deployment; good to see if you have cluster/external ips
  inspect: `kubectl get service ${deploymentName}`,
  // Run this as cluster admin to create a new user using the configuratio yaml
  // these are typically run if they already have kiosk
  createUser: `kubectl apply -f ${configFile}`,
  // Alternative: ServiceAccount as Account User (see explanation for account-sa.yaml below)
  createServiceAccount: 'kubectl apply -f klustr.dev/yamlConfigs/serviceAccount.yaml',
  // set Role Based Access Control (RBAC) 
  setRBAC: 'kubectl apply -f /yamlConfigs/rbac-creator.yaml',
  // create a virtual space from the space.yaml configuration with the flag as to impersonate user john
  createSpace: `kubectl apply -f /yamlConfigs/space.yaml --as=${userName}`,
  // kubectl create deployment <insert name> --image=<insert image file/link>
  deployImage: `kubectl create deployment ${deploymentName} --image=${imageFile}`,
  // deploy the pod in a specific namespace with the image configuration yalm
  deploy: `kubectl apply -n ${space} --as=${userName} -f /yamlConfigs/deployImage.yaml`,
  // deploy the pod in a using the watchr image link rather than config yaml
  // deploy: 'kubectl create deployment klustr-deployment --image=docker.io/klustr/watchr',
  // expose the deployment pod for kubernetes
  expose: `kubectl expose deployment ${deploymentName} --type LoadBalancer --port=${portIn} --target-port=${portOut}`,
}
  
  // function -> sign-in user (to ohana app)
  // log in user
  // console login status i.e. login success or login failed
  
  // check if the following output yes to confirm if you have admin access
  // kubectl auth can-i "*" "*" --all-namespaces
  // kubectl auth can-i "*" namespace
  // kubectl auth can-i "*" clusterrole
  // kubectl auth can-i "*" crd

let vClusterName = 'vcluster-1';
let hostNamespace = 'host-namespace-1';
const vCluster = {
  // creates a new virtual cluster; specify name and the namespace 
  create: `vcluster create ${vClusterName} -n ${hostNamespace}`,
  // connects and port forwards the vcluster and uses the original kubeconfig to mimic original cluster configs
  connect: `vcluster connect ${vClusterName} -n ${hostNamespace} \ export KUBECONFIG=./kubeconfig.yaml`,
  // deletes the vcluster
  delete: `vcluster delete ${vClusterName} -n ${hostNamespace}`,
  }

  runTerminalCommand(gcloud.getCredentials);

  module.exports = {
    gcloud,
    kubectl,
    vCluster,
  }