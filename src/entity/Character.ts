/**
 * @author Francisco Roa <franroav@webkonce.cl>
 */
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

import { MinLength, IsNotEmpty, IsEmail } from "class-validator";

@Entity("character")
export class Character {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  @MinLength(6)
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  gender: string;

  @Column()
  @IsNotEmpty()
  status: string;

  @Column()
  @IsNotEmpty()
  species: string;

  @Column()
  type: string;

  @Column()
  @IsNotEmpty()
  origin: string;

  @Column()
  location: string;

  @Column()
  @IsNotEmpty()
  image: string;

  @Column()
  episode: string;

  @Column()
  @IsNotEmpty()
  url: string;

  @Column()
  @IsNotEmpty()
  created: string;

  /*@Column()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @UpdateDateColumn()
  updateAt: Date;*/
}
