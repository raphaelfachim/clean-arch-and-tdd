export default class Vehicle {

    code: string;   // codigo correspondente ao modelo do veículo
    plate: string;  // placa do veículo
    dateIn?: Date;   // data de entrada do veículo
    dateOut?: Date;  // data de saída do veículo
    
    constructor(
        code: string,
        plate: string,
        dateIn?: Date,
        dateOut?: Date
    ){
        this.code = code;
        this.plate = plate;
        if(dateIn) this.dateIn = dateIn;
        if(dateOut) this.dateOut = dateOut;
    }
}