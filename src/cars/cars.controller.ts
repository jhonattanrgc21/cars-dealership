import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    private cars: string[] = ['Toyota', 'Honda', 'Jeep'];
    constructor(private readonly _carService: CarsService){

    }

    @Get()
    getAllCars() {
        return this._carService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', ParseIntPipe) id: number) {
        return this._carService.findById(id);
    }

    @Post('create')
    createCar(@Body() json: any){
        return json;
    }

    @Put(':id')
    updateCar(@Body() json: any, @Param('id', ParseIntPipe) id: number){
        return json;
    }

    @Delete(':id')
    deleteCar(@Param('id', ParseIntPipe) id: number){
        return {
            method: "Delete",
            id
        }
    }
}
