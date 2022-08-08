import express from 'express'
import VehicleDTO from '../../dtos/VehicleDTO';
import VehicleRESTfulController from '../interfaces/VehicleRESTfulController';

export default class ExpressAdapter implements VehicleRESTfulController{

    getByPlate(plate: string) {
        
    }
    
    addNewVehicle(vehicle: VehicleDTO) {
        
    }
    
}