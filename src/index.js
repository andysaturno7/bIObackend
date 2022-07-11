"use strict";

const {sequelize} = require('./db/index');
const { APPServer } = require('./server');

var server;

async function initApp(){
    await sequelize.sync();
    console.log('db synced...');
    server = new APPServer(3000);
    server.startServer();
    console.log("Escuchando puerto: " + server.port);
}

initApp();