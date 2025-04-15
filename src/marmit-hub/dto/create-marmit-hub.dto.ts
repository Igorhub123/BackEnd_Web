import { IsString, IsDate, IsBoolean, IsNumber } from 'class-validator';

export class CreateMarmitHubDto {
    @IsString()
    descricao: string;
    @IsDate()
    data_food: Date;
    @IsBoolean()
    disp_ped: boolean;
    @IsString()
    cod_tamanho: string;
    @IsNumber()
    valor_tamanho: number;
}
