import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity({
  name: 'sound',
})
export class Sick {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'result',
  })
  name: string;
}
