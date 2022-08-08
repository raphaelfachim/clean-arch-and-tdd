import Vehicle from "../entity/Vehicle";

export default interface VehicleRepository {
    getByPlate(plate: string): Vehicle;
}