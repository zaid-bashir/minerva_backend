const http = require('http');

// || 3000 is not neccessary now because we are going to deploy it on Real Server
// ==============================================================================

const port = process.env.PORT || 3000;
const app = require('./app');
const server = http.createServer(app);
server.listen(port,()=>{
    console.log("Minerva Playlist RestApi Is Working...\nPlease Visit http://localhost:3000/ to access Rest API");
});