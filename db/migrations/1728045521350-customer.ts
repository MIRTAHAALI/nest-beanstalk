import { MigrationInterface, QueryRunner } from "typeorm";

export class Customer1728045521350 implements MigrationInterface {
    name = 'Customer1728045521350'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer" ("id" SERIAL NOT NULL, "email" character varying, "password" character varying NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "phoneNumber" character varying NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "status" boolean NOT NULL DEFAULT false, "otp" character varying, "otpVerified" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_fdb2f3ad8115da4c7718109a6eb" UNIQUE ("email"), CONSTRAINT "UQ_2e64383bae8871598afb8b73f0d" UNIQUE ("phoneNumber"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "admin_user" ADD CONSTRAINT "UQ_4b5e364e611b6787ec3ea0f99ce" UNIQUE ("phoneNumber")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" DROP CONSTRAINT "UQ_4b5e364e611b6787ec3ea0f99ce"`);
        await queryRunner.query(`DROP TABLE "customer"`);
    }

}
