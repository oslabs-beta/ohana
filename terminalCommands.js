const { exec } = require('child_process');
const { hostname } = require('os');

const runTerminalCommand = (command) => {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      resolve(stdout ? stdout : stderr);
    })
  })
}

// can delete this
// // gcloud variables
// let clusterName = 'klustr-jefftest';
// let gcloudRegion = 'us-west1';
// let numNodes = '2';
// let gcloudUserEmail = 'contact.jeffchen@gmail.com';
// // kubctl variables
// let imageFile = 'docker.io/klustr/watchr'
// // imageFile only for watchr purposes
// let deploymentName = 'klustr-deployment'
// // changed to hostNameSpace instead of namespace
// let hostNamespace = 'kiosk';
// let configFile = '/yamlConfigs/account.yaml';
// let userConfigFile = '/yamlConfigs/userAccount.yaml';
// let podName = 'klustr-deployment-786bd87dd4-pvrk6';
// let userName = 'john';
// let portIn = '80';
// let portOut = '8080';
// let space = 'johns-space';
// let vClusterName = 'testing';

// gcloud terminal commands
const gcloud = {}
// necessary to create a cluster if it doesn't already exist; be aware of regional resource availability
gcloud.create = (clusterName, numNodes, gcloudRegion) => `gcloud container clusters create ${clusterName} --num-nodes=${numNodes} --region=${gcloudRegion}`
// 'gcloud container clusters get-credentials <insert name>:<optional tag> 
gcloud.getCredentials = (clusterName) => `gcloud container clusters get-credentials ${clusterName} --region=us-west1-a`
// 'gcloud config set account <accountemailaddress>'
gcloud.switchAccount = (gcloudUserEmail) => `gcloud config set account ${gcloudUserEmail}`

const kubectl = {};

kubectl.currentContext = () => `kubectl config current-context`
// executes command to get the current context
kubectl.createNamespace = (hostNamespace) => `kubectl create namespace ${hostNamespace}`
// can create spaces, accounts, configurations, namespaces etc based on the config file passed in
kubectl.createFromConfig = (configFile) => `kubectl apply -f ${configFile}`
// can create spaces, accounts, configurations, namespaces, roles, etc based on the config file passed in impersonating a user; admin only
kubectl.createFromConfigAs = (configFile, email) => `kubectl apply -f /Users/fenris/Desktop/Codesmith/klustr.dev/yamlConfigs/userAccount.yaml --as=dev-account`
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

const vCluster = {}

vCluster.create = (vClusterName, hostNamespace) => `vcluster create ${vClusterName} -n ${hostNamespace}`;
vCluster.connect = (vClusterName, hostNamespace) => `vcluster connect ${vClusterName} -n ${hostNamespace} \export KUBECONFIG=./kubeconfig.yaml`;
vCluster.delete = (vClusterName, hostNamespace) => `vcluster delete ${vClusterName} -n ${hostNamespace}`;



// can delete this
// const serviceAccount = {}
// serviceAccount.user = (email) => `USER_NAME="${email}" \ kubectl -n kiosk create serviceaccount "${email}"`

//fs write file?

// serviceAccount.userConfig = (email) => { 
// `USER_NAME="${email}" KUBECONFIG_PATH="$HOME/.kube/config-kiosk" && 
// kubectl config view --minify --raw > "$HOME/.kube/config-kiosk" &&
// export KUBECONFIG="$HOME/.kube/config-kiosk"`
// CURRENT_CONTEXT=$(kubectl config current-context) \
// kubectl config rename-context $CURRENT_CONTEXT kiosk-admin \
// CLUSTER_NAME=$(kubectl config view -o jsonpath="{.clusters[].name}") \
// ADMIN_USER=$(kubectl config view -o jsonpath="{.users[].name}") \
// SA_NAME=$(kubectl -n kiosk get serviceaccount ${email} -o jsonpath="{.secrets[0].name}") \
// SA_TOKEN=$(kubectl -n kiosk get secret $SA_NAME -o jsonpath="{.data.token}" | base64 -d) \
// kubectl config set-credentials ${email} --token=$SA_TOKEN \
// kubectl config set-context kiosk-user --cluster=$CLUSTER_NAME --user=${email} \
// kubectl config use-context kiosk-user
// }

// removed serviceAccount
module.exports = {
  kubectl,
  gcloud,
  vCluster,
  runTerminalCommand,
}
