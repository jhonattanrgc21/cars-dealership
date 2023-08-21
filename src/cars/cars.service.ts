import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private _cars = [
        {
            id: 1,
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: 2,
            brand: 'Honda',
            model: 'Civic'
        },
        {
            id: 3,
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

    findById(id: number){
        const car = this.cars.find(car => car.id == id)
        if(!car) throw new NotFoundException(`No se encontro el carro con el id: ${id}`)
        return car;
    }
}
