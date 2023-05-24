import { IsMongoId } from 'class-validator';

export class findParam {
  @IsMongoId()
  readonly id: string;
}
