import { ParkingLotMock } from "../core/data-access/ParkingLotMock";

test("get parking lot from mock. it should be ok", () => {
    const parkingLotMock = new ParkingLotMock();
    let parkingLot = parkingLotMock.getByCode("pl1");

    expect(parkingLot.capacity).toBe(10);

})