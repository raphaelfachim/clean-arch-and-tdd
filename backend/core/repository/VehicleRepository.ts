import Vehicle from "../entity/Vehicle";

export default interface VehicleRepository {
    getByPlate(plate: string): Promise<Vehicle>;
}