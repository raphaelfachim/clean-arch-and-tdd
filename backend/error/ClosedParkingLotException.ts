export default class ClosedParkingLotException extends Error {

    constructor(){
        super("Parking lot is closed");
    }
    
}