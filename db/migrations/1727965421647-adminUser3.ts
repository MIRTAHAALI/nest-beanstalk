import { MigrationInterface, QueryRunner } from "typeorm";

export class AdminUser31727965421647 implements MigrationInterface {
    name = 'AdminUser31727965421647'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" RENAME COLUMN "type" TO "status"`);
        await queryRunner.query(`ALTER TABLE "admin_user" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "admin_user" ADD "status" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "admin_user" ADD "status" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "admin_user" RENAME COLUMN "status" TO "type"`);
    }

}
