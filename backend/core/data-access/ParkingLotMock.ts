import ParkingLot from "../entity/ParkingLot";
import ParkingLotRepository from "../repository/ParkingLotRepository";

export class ParkingLotMock implements ParkingLotRepository {

    parkingLots: ParkingLot[] = [
        new ParkingLot("", 0,0,0,0),
        new ParkingLot("pl1", 10, 8, 22, 0),
        new ParkingLot("pl2", 5, 7, 21, 0),
        new ParkingLot("pl3", 15, 13, 23, 0),
        new ParkingLot("pl4", 7, 8, 22, 0),
        new ParkingLot("pl5", 4, 6, 18, 0)
    ];

    getByCode(code: string): ParkingLot {
        const parkingLot = this.parkingLots.find(pl => pl.code === code);
        if(parkingLot) return parkingLot;
        return null;
    }

}