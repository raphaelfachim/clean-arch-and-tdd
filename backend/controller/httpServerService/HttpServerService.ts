import HttpService from "../interfaces/HttpService";
import ExpressServerService from "./ExpressServerService";

export default class HttpServerService implements HttpService {
    startServer(port: number) {
        const expressServerService = new ExpressServerService();
        expressServerService.startServer(port);
    }

}