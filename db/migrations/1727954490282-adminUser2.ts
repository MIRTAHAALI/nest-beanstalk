import { MigrationInterface, QueryRunner } from "typeorm";

export class AdminUser21727954490282 implements MigrationInterface {
    name = 'AdminUser21727954490282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin_user" RENAME COLUMN "adType" TO "adminType"`);
        await queryRunner.query(`ALTER TYPE "public"."admin_user_adtype_enum" RENAME TO "admin_user_admintype_enum"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."admin_user_admintype_enum" RENAME TO "admin_user_adtype_enum"`);
        await queryRunner.query(`ALTER TABLE "admin_user" RENAME COLUMN "adminType" TO "adType"`);
    }

}
