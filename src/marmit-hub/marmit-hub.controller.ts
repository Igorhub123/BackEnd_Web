import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MarmitHubService } from './marmit-hub.service';
import { CreateMarmitHubDto } from './dto/create-marmit-hub.dto';
import { UpdateMarmitHubDto } from './dto/update-marmit-hub.dto';

@Controller('marmit-hub')
export class MarmitHubController {
  constructor(private readonly marmitHubService: MarmitHubService) { }

  @Post()
  create(@Body() createMarmitHubDto: CreateMarmitHubDto) {
    return this.marmitHubService.create(createMarmitHubDto);
  }

  @Get()
  findAll() {
    return this.marmitHubService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marmitHubService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMarmitHubDto: UpdateMarmitHubDto) {
    return this.marmitHubService.update(+id, updateMarmitHubDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marmitHubService.remove(+id);
  }
}
