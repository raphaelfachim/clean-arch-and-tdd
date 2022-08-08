import VehicleDTO from "../../dtos/VehicleDTO";
import VehicleRESTfulController from "../interfaces/VehicleRESTfulController";
import ExpressAdapter from "./ExpressAdapter";

export default class VehicleHttpData implements VehicleRESTfulController{

    getByPlate(plate: string) {
        const expressAdapter = new ExpressAdapter();
        expressAdapter.getByPlate(plate);
    }
    addNewVehicle(vehicle: VehicleDTO) {
        const expressAdapter = new ExpressAdapter();
        expressAdapter.addNewVehicle(vehicle);
    }

}