import { MigrationInterface, QueryRunner } from "typeorm";

export class PersonalDetails11728386573038 implements MigrationInterface {
    name = 'PersonalDetails11728386573038'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TYPE "public"."customer_gender_enum" RENAME TO "customer_gender_enum_old"`);
        await queryRunner.query(`CREATE TYPE "public"."customer_gender_enum" AS ENUM('m', 'f')`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "gender" TYPE "public"."customer_gender_enum" USING "gender"::"text"::"public"."customer_gender_enum"`);
        await queryRunner.query(`DROP TYPE "public"."customer_gender_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."customer_gender_enum_old" AS ENUM('male', 'female')`);
        await queryRunner.query(`ALTER TABLE "customer" ALTER COLUMN "gender" TYPE "public"."customer_gender_enum_old" USING "gender"::"text"::"public"."customer_gender_enum_old"`);
        await queryRunner.query(`DROP TYPE "public"."customer_gender_enum"`);
        await queryRunner.query(`ALTER TYPE "public"."customer_gender_enum_old" RENAME TO "customer_gender_enum"`);
    }

}
