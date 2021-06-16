const { exec } = require('child_process');
//const { GkeHubMembershipServiceClient } = require('@google-cloud/gke-hub');

// TODO: need to parameterize inputs to create the terminal commands

const runTerminalCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.log(error)
        return;
      }
      console.log(`stdout: ${stdout}`)
      console.log(`stderr: ${stderr}`)
    })
  })
}

// gcloud variables
let clusterName = 'klustr-jefftest';
let gcloudRegion = 'us-west1';
let numNodes = '2';
let gcloudUserEmail = 'contact.jeffchen@gmail.com';
// kubctl variables
let imageFile = 'docker.io/klustr/watchr'
// imageFile only for watchr purposes
let deploymentName = 'klustr-deployment'
// changed to hostNameSpace instead of namespace
let hostNamespace = 'kiosk';
let configFile = '/yamlConfigs/account.yaml';
let podName = 'klustr-deployment-786bd87dd4-pvrk6';
let userName = 'john';
let portIn = '80';
let portOut = '8080';
let space = 'johns-space';
let vClusterName = 'testing';

// gcloud terminal commands
const gcloud = {
  // necessary to create a cluster if it doesn't already exist; be aware of regional resource availability
  create: `gcloud container clusters create ${clusterName} --num-nodes=${numNodes} --region=${gcloudRegion}`,
  // 'gcloud container clusters get-credentials <insert name>:<optional tag> 
  getCredentials: `gcloud container clusters get-credentials ${clusterName} --region=us-west1`, // add <name>
  // 'gcloud config set account <accountemailaddress>'
  switchAccount: `gcloud config set account ${gcloudUserEmail}`
}

// kubectl terminal commands || cheatsheet for reference: https://kubernetes.io/docs/reference/kubectl/cheatsheet/
const kubectl = {
  // get description of pods w/in your namespace
  getPods: 'kubectl get pods',
  // kubectl logs <pod name> - outputs logs of the specified pod
  logs: `kubectl logs ${podName}`,
  // get additional detail on pods
  describe: `kubectl describe pods -n ${hostNamespace}`,
  // create namespace (must specify name) i.e. terminal command: 'kubectl create namespace <insert namespace here>'
  createNamespace: `kubectl create namespace ${hostNamespace}`,
  // kubectl create deployment <insert name> --image=<insert image file/link>
  deployImage: `kubectl create deployment ${deploymentName} --image=${imageFile}`,
  // expose the deployment for kubernetes 
  expose: `kubectl expose deployment ${deploymentName} --type LoadBalancer --port=${portIn} --target-port=${portOut}`,
  // creates a user john which is specified in the account.yaml configuration
  createUser: `kubectl apply -f ${configFile}`,
  // Alternative: ServiceAccount as Account User (see explanation for account-sa.yaml below)
  createServiceAccount: `kubectl apply -f klustr.dev/yamlConfigs/serviceAccount.yaml`,
  // set Role Based Access Control (RBAC) 
  setRBAC: `kubectl apply -f /yamlConfigs/rbac-creator.yaml`,
  // create a virtual space from the space.yaml configuration with the flag as to impersonate user john
  createSpace: `kubectl apply -f /yamlConfigs/space.yaml --as=${userName}`,
  // deploy the pod in a specific namespace with the image configuration
  deploy: `kubectl apply -n ${space} --as=${userName} -f /yamlConfigs/deployImage.yaml`,
}

// function -> sign-in user (to ohana app)
// log in user
// console login status i.e. login success or login failed

// kiosk used to create accounts that will grant access to users creating specific namespaces and specific resourcing
// kiosk provides CRDs for Account, AccountQuota, AccountQuotaSet, Template, TemplateInstance

// function -> create vCluster
// may need to account for installing vCluster

const vCluster = {};
//   // creates a new virtual cluster; specify name and the namespace 
//   create: `vcluster create ${vClusterName} -n ${hostNamespace}`,
//   // connects and port forwards the vcluster and uses the original kubeconfig to mimic original cluster configs
//   connect: `vcluster connect ${vClusterName} -n ${hostNamespace} \ export KUBECONFIG=./kubeconfig.yaml`,
//   // deletes the vcluster
//   delete: `vcluster delete ${vClusterName} -n ${hostNamespace}`,
// }

vCluster.create = (vClusterName, hostNamespace) => `vcluster create ${vClusterName} -n ${hostNamespace}`;
vCluster.connect = (vClusterName, hostNamespace) => `vcluster connect ${vClusterName} -n ${hostNamespace}`;


module.exports = {
  gcloud,
  kubectl,
  vCluster,
  runTerminalCommand,
}
