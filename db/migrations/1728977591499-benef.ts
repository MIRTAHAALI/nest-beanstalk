import { MigrationInterface, QueryRunner } from "typeorm";

export class Benef1728977591499 implements MigrationInterface {
    name = 'Benef1728977591499'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "beneficiary_entity" ("id" SERIAL NOT NULL, "userId" integer NOT NULL, "data" json NOT NULL, CONSTRAINT "PK_0f322c81b97dd75707c9ecd97b4" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "beneficiary_entity"`);
    }

}
