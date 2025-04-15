import { PartialType } from '@nestjs/mapped-types';
import { CreateMarmitHubDto } from './create-marmit-hub.dto';

export class UpdateMarmitHubDto extends PartialType(CreateMarmitHubDto) {}
