import { MigrationInterface, QueryRunner } from "typeorm";

export class PersonalDetails1728384648459 implements MigrationInterface {
    name = 'PersonalDetails1728384648459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "otp"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "otpSignIn"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "city" character varying`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "address" character varying`);
        await queryRunner.query(`CREATE TYPE "public"."customer_gender_enum" AS ENUM('male', 'female')`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "gender" "public"."customer_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "dob" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "dob"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "gender"`);
        await queryRunner.query(`DROP TYPE "public"."customer_gender_enum"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "address"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "otpSignIn" character varying`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "otp" character varying`);
    }

}
