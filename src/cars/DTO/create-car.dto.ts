import { IsString } from "class-validator";

export class CreateCarDto{
    @IsString({message: 'El campo brand debe ser de tipo string'})
    readonly brand: string;

    @IsString({message: 'El campo model debe ser de tipo string'})
    readonly model: string;
}