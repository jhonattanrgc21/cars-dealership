import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARD_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {

  constructor(private carsService: CarsService, private brandsService: BrandsService) {

  }

  populateDB() {
    this.carsService.fillCarsWithSeed(CARD_SEED)
    this.brandsService.fillCarsWithSeed(BRANDS_SEED)
    return `This action returns all seed`;
  }
}
