import { MigrationInterface, QueryRunner } from "typeorm";

export class AdminUpdate1727952848419 implements MigrationInterface {
    name = 'AdminUpdate1727952848419'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."admin_user_adtype_enum" AS ENUM('admin', 'super_admin')`);
        await queryRunner.query(`CREATE TABLE "admin_user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "adType" "public"."admin_user_adtype_enum" NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "type" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "phoneNumber" character varying NOT NULL, "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_840ac5cd67be99efa5cd989bf9f" UNIQUE ("email"), CONSTRAINT "PK_a28028ba709cd7e5053a86857b4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "admin_user"`);
        await queryRunner.query(`DROP TYPE "public"."admin_user_adtype_enum"`);
    }

}
