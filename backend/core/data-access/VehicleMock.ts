import ParkingLot from "../entity/ParkingLot";
import Vehicle from "../entity/Vehicle";
import VehicleRepository from "../repository/VehicleRepository";

export default class VehicleMock implements VehicleRepository{

    vehicles: Vehicle[] = [
        new Vehicle("", ""),
        new Vehicle("abc123", "MRK-1415"),
        new Vehicle("xyz987", "FVV-9897")
    ];

    getByPlate(plate: string): Vehicle {
        const vehicle = this.vehicles.find(v => v.plate === plate);
        if(vehicle) return vehicle;
        return null;
    }

}