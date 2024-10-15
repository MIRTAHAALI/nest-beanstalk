import { MigrationInterface, QueryRunner } from "typeorm";

export class Customer11728045602322 implements MigrationInterface {
    name = 'Customer11728045602322'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "otpSignIn" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "otpSignIn"`);
    }

}
