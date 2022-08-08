import VehicleDTO from "../../dtos/VehicleDTO";

export default interface VehicleRESTfulController {

    getByPlate(plate: string);

    addNewVehicle(vehicle: VehicleDTO);
    
}