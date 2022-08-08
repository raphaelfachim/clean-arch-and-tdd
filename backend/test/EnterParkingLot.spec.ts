import ParkingLotMock from "../core/data-access/ParkingLotMock";
import VehicleMock from "../core/data-access/VehicleMock";
import ParkingLot from "../core/entity/ParkingLot"
import Vehicle from "../core/entity/Vehicle";
import VehicleInUseCase from "../core/use-cases/VehicleInUseCase";
import ClosedParkingLotException from "../error/ClosedParkingLotException";

test("car must enter the parking lot", () => {
    const parkingLotData: ParkingLotMock = new ParkingLotMock();
    const parkingLot: ParkingLot = parkingLotData.getByCode("pl1");

    const vehicleData: VehicleMock = new VehicleMock();
    const vehicle: Vehicle = vehicleData.getByPlate("MRK-1415");

    const vehicleInUseCase = new VehicleInUseCase(parkingLot, vehicle);
    vehicleInUseCase.execute();

    expect(parkingLot.occupiedLots).toBe(1);
})

test("car must NOT enter the parking lot => parking lot is closed", () => {
    const parkingLotData: ParkingLotMock = new ParkingLotMock();
    const parkingLot: ParkingLot = parkingLotData.getByCode("pl5");

    const vehicleData: VehicleMock = new VehicleMock();
    const vehicle: Vehicle = vehicleData.getByPlate("MRK-1415");

    const vehicleInUseCase = new VehicleInUseCase(parkingLot, vehicle);
    
    function vehicleIn(){
        vehicleInUseCase.execute();
    }

    expect(vehicleIn).toThrowError(/closed/);
})