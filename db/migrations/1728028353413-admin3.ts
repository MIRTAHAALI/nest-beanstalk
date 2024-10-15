import { MigrationInterface, QueryRunner } from "typeorm";

export class Admin31728028353413 implements MigrationInterface {
    name = 'Admin31728028353413'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" ALTER COLUMN "phoneNumber" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" ALTER COLUMN "phoneNumber" SET NOT NULL`);
    }

}
