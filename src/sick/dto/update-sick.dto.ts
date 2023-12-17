import { PartialType } from '@nestjs/mapped-types';
import { CreateSickDto } from './create-sick.dto';

export class UpdateSickDto extends PartialType(CreateSickDto) {}
