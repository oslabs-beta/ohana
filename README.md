Run the following command to install the necessary dependencies: ```npm install ```

When the dependencies are finished installing, run the following to concurrently bundle the application's assets and start the Express server in a ```development``` environment:

Ensure helm has been installed. You can do so with these commands:
```helm version``` to check your version. Please reference [helm](https://helm.sh/docs/intro/install/) for further instructions based on your OS

Ensure vCluster has been installed:
```vcluster -v``` to check your version. Please reference the following to download for your respective OS or visit [vCluster](https://www.vcluster.com/):

**Intel Mac**
```
curl -s -L "https://github.com/loft-sh/vcluster/releases/latest" | sed -nE 's!.*"([^"]*vcluster-darwin-amd64)".*!https://github.com\1!p' | xargs -n 1 curl -L -o vcluster && chmod +x vcluster;

sudo mv vcluster /usr/local/bin;
```
**Silicon Mac**
```
curl -s -L "https://github.com/loft-sh/vcluster/releases/latest" | sed -nE 's!.*"([^"]*vcluster-darwin-arm64)".*!https://github.com\1!p' | xargs -n 1 curl -L -o vcluster && chmod +x vcluster;
sudo mv vcluster /usr/local/bin;
```
**Windows**
```
md -Force "$Env:APPDATA\vcluster"; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]'Tls,Tls11,Tls12';

Invoke-WebRequest -UseBasicParsing ((Invoke-WebRequest -URI "https://github.com/loft-sh/vcluster/releases/latest" -UseBasicParsing).Content -replace "(?ms).*`"([^`"]*vcluster-windows-amd64.exe)`".*","https://github.com/`$1") -o $Env:APPDATA\vcluster\vcluster.exe;

$env:Path += ";" + $Env:APPDATA + "\vcluster";

[Environment]::SetEnvironmentVariable("Path", $env:Path, [System.EnvironmentVariableTarget]::User);
```
**Linux AMD**
```
curl -s -L "https://github.com/loft-sh/vcluster/releases/latest" | sed -nE 's!.*"([^"]*vcluster-linux-amd64)".*!https://github.com\1!p' | xargs -n 1 curl -L -o vcluster && chmod +x vcluster;

sudo mv vcluster /usr/local/bin;
```
**Linux ARM**
```
curl -s -L "https://github.com/loft-sh/vcluster/releases/latest" | sed -nE 's!.*"([^"]*vcluster-linux-arm64)".*!https://github.com\1!p' | xargs -n 1 curl -L -o vcluster && chmod +x vcluster;

sudo mv vcluster /usr/local/bin;
```
To run the application, execute ```npm run dev```

After the application finishes compiling, you should be served the Ohana user interface on ```localhost:8080```, with the server listening on ```localhost:3000```. You should
see a login screen rendered to your browser.
