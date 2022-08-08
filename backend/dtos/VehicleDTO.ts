export default class VehicleDTO {
    public plate: string;
    public code: string;
    public dateIn?: string;
    public dateOut?: string;

    constructor(
        plate?: string,
        code?: string,
        dateIn?: string,
        dateOut?: string,
    ){
        this.plate = plate;
        this.code = code;
        this.dateIn = dateIn;
        this.dateOut = dateOut;
    }
}