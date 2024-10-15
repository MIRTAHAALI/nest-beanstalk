import { IsIn, IsOptional } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export enum Gender {
  MALE = 'm',
  FEMALE = 'f',
}

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    nullable: true, // Allow this column to be null
  })
  email: string;

  @Column({
    nullable: true, // Allow this column to be null
  })
  postalAddress: string;

  @Column({
    nullable: true, // Allow this column to be null
  })
  password: string;

  @Column({
    nullable: true, // Allow this column to be null
  })
  firstName: string;

  @Column({
    nullable: true, // Allow this column to be null
  })
  lastName: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: string;

  @Column({
    unique: true,
  })
  phoneNumber: string;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: string;

  @Column({
    default: false,
  })
  status: boolean;

  @Column({
    default: false,
  })
  otpVerified: boolean;

  @Column({
    nullable: true, // Allow this column to be null
  })
  city: string;

  @Column({
    nullable: true, // Allow this column to be null
  })
  address: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true, // Allow this column to be null
  })
  @IsOptional()
  @IsIn(['male', 'female'], { message: 'Gender must be either male or female' })
  gender: Gender;

  @Column({
    nullable: true,
    type: 'timestamp',
  })
  dob: string;

  @Column({
    nullable: true,
    type: 'timestamp',
  })
  lastLogin: string;

  @Column({
    default: true,
  })
  isDonor: boolean;

  @Column({
    default: false,
  })
  isBeneficiary: boolean;

  @Column({
    default: false,
  })
  isCommunityLeader: boolean;
}
