import { MigrationInterface, QueryRunner } from "typeorm";

export class Donor1728541586204 implements MigrationInterface {
    name = 'Donor1728541586204'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "lastLogin" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "isDonor" boolean NOT NULL DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "customer" ADD "isBeneficiary" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "isBeneficiary"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "isDonor"`);
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "lastLogin"`);
    }

}
