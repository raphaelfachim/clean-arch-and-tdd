import ParkingLot from "../entity/ParkingLot";

export default interface ParkingLotRepository {
    getByCode(code: string): ParkingLot;
}