import ClosedParkingLotException from "../../error/ClosedParkingLotException";
import FullCapacityException from "../../error/FullCapacityException";
import ParkingLot from "../entity/ParkingLot";
import Vehicle from "../entity/Vehicle";

export default class VehicleInUseCase {
    
    constructor(
        private parkingLot: ParkingLot,
        private vehicle: Vehicle
    ){}

    execute(){
        if(this.parkingLot.capacity === this.parkingLot.occupiedLots) throw FullCapacityException;
        if(!this.parkingLot.isOpen()) throw ClosedParkingLotException;
        this.parkingLot.occupiedLots ++;
        this.vehicle.dateIn = new Date();
    }
}