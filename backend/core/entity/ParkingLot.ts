export default class ParkingLot{

    code: string;           // código unico do estacionamento
    capacity: number;       // capacidade de veículos
    openHour: number;       // hora de abertura
    closeHour: number;      // hora de fechamento
    occupiedLots: number;   // vagas ocupadas
    
    constructor(
        code: string,
        capacity: number,
        openHour: number,
        closeHour: number,
        occupiedLots: number
    ){
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
        this.occupiedLots = occupiedLots;
    }

    isOpen(): boolean{
        const horaAtual: number = new Date().getHours();
        return horaAtual > this.openHour && horaAtual < this.closeHour;
    }
}