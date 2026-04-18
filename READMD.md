# setup the project 

1) npm init -y => give package.json file => store dependency to your project 

2) tsc --init => tsconfig.json file 
    - tsconfig.json is the configuration file that tells TypeScript:
        - how to compile your code
        - which files to include/exclude
        - what JavaScript version to output
        - what strictness rules to apply

3) create src folder
    - store your app related code here 

4) npx gitignore Node
    - create gitignore file for node js

5) write scripts inside the package.json

6) install tsc-watch -D 
    - for automatically call index.js

7) initialize the git


# Basic Express Code Setup

1) npm i express

2) npm i @types/express -D
    - installs TypeScript type definitions for Express.
    - what req, res look like
    - what methods exist (app.get, app.post, etc.)
    - what types functions expect

3) npm i @types/node -D 
    - TypeScript type definitions for Node.js.
    - Provides types for the Node.js runtime
    - fs, path, http modules
    - global objects like process, __dirname, Buffer
    - Node APIs and their types
    - console.log(process.env.PORT); => Without this package, TypeScript doesn’t understand Node things: => Cannot find name 'process'

4) make one req

# Docker postgresql setup

1) download docker first 

2) create docker.compose.yml file 
    # write 
        - services // define inside container 
        - name of db service // create container using this name
        - image:postgres  // take postgres from docker hub
        - port // map the port 
        - environment variable  // used to configure application without changing code 
        - volumes : docker data is temporary. delete the container .so we map in my local file

3) Running commands 
    - docker ps => check running container 
    - docker images => show what setup carry docker
    - docker compose up => run docker file
    - docker compose up -D => detach => run in background