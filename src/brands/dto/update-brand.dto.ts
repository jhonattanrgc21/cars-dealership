/*import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}*/

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto {
    @IsString({message: 'El campo name debe ser de tipo string'})
    @MinLength(1)
    name: string;
}
