import HttpService from "../interfaces/HttpService";
const express = require('express');

export default class ExpressServerService implements HttpService {

    startServer(port: number) {
        console.log(`Express: starting server on port ${port}`);
        
        const app = express();
        app.listen(port);
    }

}