# Seeding Render.com


root package.json uses render-build then 
cd to server and npm run seed. then seed does the seed and then starts the server. Works. 

start actually runs seeds first from dist and then does node dist/server.js
root:
````
    "render-build": "npm install && npm run build",
    "start": "cd server && npm run seed",

````
server:
```
   "seed": "node dist/seeds/seed.js && node dist/server.js",
   ```