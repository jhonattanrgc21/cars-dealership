import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto } from './DTO/create-car.dto';
import { UpdateCarDto } from './DTO/update-car.dto';

@Injectable()
export class CarsService {
    private _cars: Car[] = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        },
    ]

    get cars(){
        return this._cars;
    }

    findAll(){
        return this.cars;
    }

    findById(id: string){
        const car = this.cars.find(car => car.id == id)
        if(!car) throw new NotFoundException(`No se encontro el carro con el id: ${id}`)
        return car;
    }

    createCar(carDto: CreateCarDto){
        const car: Car = {
            id: uuid(),
            ...carDto
        }
        this.cars.push(car);
        return car;
    }

    updateCar(carDto: UpdateCarDto, id: string){
        let carDB: Car = this.findById(id)
        this._cars = this.cars.map(car => {
            if(car.id == id){
                carDB = {...carDB, ...carDto, id}
                return carDB;
            }
            return car;
        })
    }

    deleteCar(id: string){
        let car = this.findById(id);
        this._cars = this.cars.filter(car => car.id !== id);
    }
}
