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
