import { Injectable } from '@nestjs/common';
import { CreateMarmitHubDto } from './dto/create-marmit-hub.dto';
import { UpdateMarmitHubDto } from './dto/update-marmit-hub.dto';
import { MarmitHub } from './entities/marmit-hub.entity';
import { PrismaService } from 'prisma/prisma.service';
import { Any } from 'typeorm';


@Injectable()
export class MarmitHubService {

  constructor(private prisma: PrismaService) { }
  private mapToEntity(marmitHub: any): MarmitHub {
    return {
      id: marmitHub.id,
      descricao: marmitHub.descricao,
      data_food: marmitHub.data_food,
      disp_ped: marmitHub.disp_ped,
      cod_tamanho: marmitHub.cod_tamanho,
      valor_tamanho: marmitHub.valor_tamanho,
    }
  }

  async create(createMarmitHubDto: CreateMarmitHubDto): Promise<MarmitHub> {
    const marmitHub = await this.prisma.marmitHub.create({
      data: createMarmitHubDto,
    });
    return this.mapToEntity(marmitHub);
  }

  async update(id: number, updateMarmitHubDto: UpdateMarmitHubDto): Promise<MarmitHub> {
    const updatedMarmitHub = await this.prisma.marmitHub.update({
      where: { id },
      data: updateMarmitHubDto,
    });
    return this.mapToEntity(updatedMarmitHub);
  }

  async findAll(): Promise<MarmitHub[]> {
    const marmitHubs = await this.prisma.marmitHub.findMany();
    return marmitHubs.map(marmitHub => this.mapToEntity(marmitHub));
  }

  async findOne(id: number): Promise<MarmitHub> {
    const marmitHub = await this.prisma.marmitHub.findUnique({
      where: { id },
    });
    if (!marmitHub) {
      throw new Error(`MarmitHub com ID ${id} não encontrado`);
    }
    return this.mapToEntity(marmitHub);
  }

  async remove(id: number): Promise<MarmitHub> {
    const deletedMarmitHub = await this.prisma.marmitHub.delete({
      where: { id },
    });
    return this.mapToEntity(deletedMarmitHub);
  }
}
