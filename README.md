// Setup Docker in React 

-> Create Dockerfile name file in folder Structure (  you can more conig file like ts.config)
-> .dockerignore for ignore modules
-> add --host 0.0.0.0 after vite in package.json in script -> dev 
	Example -: - "dev": "vite --host 0.0.0.0"
-> docoker build -t react-app:dev .
-> parallely docker Desktop is runnng 
-> docker run -p 5173:3000 react-app:dev



// Push Docker Image  to Arcon

Acron to push Docker image 
For installation We need to install Scoop 
for Scoop Installation  in Powershell

> Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
> Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression

scoop install acorn

-> GO to dcoker desktop -> container stop your app

-> restart VSCode once again 

-> Create File called AcornFile 

-> Delete node_modules and run  command :  acorn run -i -n app . (-i -> dev mode )
	for the dev mode you neww to run server in local if not removve -i
	This will push to acorn and run realtime application until we terminate