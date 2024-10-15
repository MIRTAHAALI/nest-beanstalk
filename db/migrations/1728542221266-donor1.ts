import { MigrationInterface, QueryRunner } from "typeorm";

export class Donor11728542221266 implements MigrationInterface {
    name = 'Donor11728542221266'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "isBeneficiary" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "isBeneficiary" SET DEFAULT true`);
    }

}
