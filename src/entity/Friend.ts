/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { MinLength, IsNotEmpty, IsEmail } from "class-validator";

@Entity("my_friend")
export class Friend {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @MinLength(6)
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  gender: string;

  @Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;
}
