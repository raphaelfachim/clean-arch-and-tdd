export default class FullCapacityException extends Error {

    constructor(){
        super("Parking lot reached full capacity");
    }
    
}