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

// gcloud terminal commands
const gcloud = {}
// necessary to create a cluster if it doesn't already exist; be aware of regional resource availability
gcloud.create = (clusterName, numNodes, gcloudRegion) => `gcloud container clusters create ${clusterName} --num-nodes=${numNodes} --region=${gcloudRegion}`
// 'gcloud container clusters get-credentials <insert name>:<optional tag> 
gcloud.getCredentials = (clusterName) => `gcloud container clusters get-credentials ${clusterName} --region=us-west1`
// 'gcloud config set account <accountemailaddress>'
gcloud.switchAccount = (gcloudUserEmail) => `gcloud config set account ${gcloudUserEmail}`

const kubectl = {};

kubectl.currentContext = () => `kubectl config current-context`
// executes command to get the current context
kubectl.createNamespace = (hostNamespace) => `kubectl create namespace ${hostNamespace}`
// can create spaces, accounts, configurations, namespaces etc based on the config file passed in
kubectl.createFromConfig = (configFile) => `kubectl apply -f ${configFile}`
// can create spaces, accounts, configurations, namespaces, roles, etc based on the config file passed in impersonating a user; admin only
kubectl.createFromConfigAs = (configFile, email) => `kubectl apply -f /yamlConfigs/${configFile}.yaml --as=${email}`
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


const serviceAccount = {}

serviceAccount.user = (email) => `USER_NAME=${email} \ kubectl -n kiosk create serviceaccount $USER_NAME`
serviceAccount.userConfig = (email) => { `USER_NAME=${email} \ KUBECONFIG_PATH="$HOME/.kube/config-kiosk" \ kubectl config view --minify --raw >$KUBECONFIG_PATH
export KUBECONFIG=$KUBECONFIG_PATH \ 
CURRENT_CONTEXT=$(kubectl config current-context) \
kubectl config rename-context $CURRENT_CONTEXT kiosk-admin \
CLUSTER_NAME=$(kubectl config view -o jsonpath="{.clusters[].name}") \
ADMIN_USER=$(kubectl config view -o jsonpath="{.users[].name}") \
SA_NAME=$(kubectl -n kiosk get serviceaccount ${email} -o jsonpath="{.secrets[0].name}") \
SA_TOKEN=$(kubectl -n kiosk get secret $SA_NAME -o jsonpath="{.data.token}" | base64 -d) \
kubectl config set-credentials ${email} --token=$SA_TOKEN \
kubectl config set-context kiosk-user --cluster=$CLUSTER_NAME --user=${email} \
kubectl config use-context kiosk-user`
}
// set cluster name = to cluster id or team id?
// admin user??
// SA token = JWT or we are using dex?


module.exports = {
  kubectl,
  gcloud,
  vCluster,
  serviceAccount,
  runTerminalCommand,
}
