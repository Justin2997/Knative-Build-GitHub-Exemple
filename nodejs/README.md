# NodeJs Sample
This is a sample for using BuildPack of Knative with JavaScript

# How to make it
You can make a function by doing :
 1 - `npm init`
 2 - `npm install`

Be sure to have `npm start` working. You will maybe have to add `"start": "node index.js"` to you package.json.

# How to use
1 - You have to install Knative with Build : https://github.com/knative/docs/tree/master/install. 
2 - Install the Build Template in configuration folder : `kuberclt apply -f template.yaml`
3 - You have to set `BASE64_USERNAME` and `BASE64_PASSWORD` in docker-secret.yaml in configuration folder. This is your docker hub login in base64 format. You can run `kubectl apply -f docker-secret.yaml`
4 - After run : `kubectl apply -f build-nodejs-buildpack.yaml` and your function will be and deploy ! 

Have fun !