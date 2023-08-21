import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './DTO/create-car.dto';
import { UpdateCarDto } from './DTO/update-car.dto';

@Controller('cars')
@UsePipes(ValidationPipe)
export class CarsController {

    private cars: string[] = ['Toyota', 'Honda', 'Jeep'];
    constructor(private readonly _carService: CarsService){

    }

    @Get()
    getAllCars() {
        return this._carService.findAll();
    }

    @Get(':id')
    getCarById(@Param('id', new ParseUUIDPipe({version: '4'})) id: string) {
        return this._carService.findById(id);
    }

    @Post('create')
    createCar(@Body() createCarDto: CreateCarDto){
        return this._carService.createCar(createCarDto);
    }

    @Put(':id')
    updateCar(@Body() updateCarDto: UpdateCarDto, @Param('id', ParseIntPipe) id: string){
        return this._carService.updateCar(updateCarDto, id);
    }

    @Delete(':id')
    deleteCar(@Param('id', new ParseUUIDPipe({version: '4'})) id: string){
        return  this._carService.deleteCar(id);
    }
}
