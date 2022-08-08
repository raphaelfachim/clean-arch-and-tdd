import VehicleMock from "../core/data-access/VehicleMock";
import Vehicle from "../core/entity/Vehicle";

test("get vehicle from mock. it should be ok", () => {
    const vehicleMock = new VehicleMock();
    let vehicle: Vehicle = vehicleMock.getByPlate("MRK-1415");

    expect(vehicle.code).toEqual("abc123");

})