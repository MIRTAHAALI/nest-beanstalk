import { MigrationInterface, QueryRunner } from "typeorm";

export class Benef1728977787468 implements MigrationInterface {
    name = 'Benef1728977787468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "beneficiary_details" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "financialData" json NOT NULL, CONSTRAINT "PK_139f4be2664f08118f162b5342b" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "beneficiary_details"`);
    }

}
