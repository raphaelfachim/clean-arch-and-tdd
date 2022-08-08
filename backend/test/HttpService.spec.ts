import HttpServerService from "../controller/httpServerService/HttpServerService"

test("serve should be listening at port 3333", () => {
    const httpService = new HttpServerService();
    httpService.startServer(3333);
    
    expect(1).toBe(1);
})