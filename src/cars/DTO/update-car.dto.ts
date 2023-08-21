import { IsString, IsOptional, IsUUID } from "class-validator";

export class UpdateCarDto{
    @IsString({message: 'El campo id debe ser de tipo string'})
    @IsOptional()
    @IsUUID()
    readonly id?: string;

    @IsString({message: 'El campo brand debe ser de tipo string'})
    @IsOptional()
    readonly brand?: string;

    @IsString({message: 'El campo model debe ser de tipo string'})
    @IsOptional()
    readonly model?: string;
}