import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('live')
export class Live {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}
