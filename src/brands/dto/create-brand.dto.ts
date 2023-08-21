import { IsString,  MinLength } from "class-validator";

export class CreateBrandDto {
    @IsString({message: 'El campo name debe ser de tipo string'})
    @MinLength(1)
    name: string;
}
