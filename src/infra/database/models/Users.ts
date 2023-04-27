import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'users',
})
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  uuid?: string;

  @Column()
  name: string;

  @Column()
  email: string;
}
