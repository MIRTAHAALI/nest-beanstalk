import { MigrationInterface, QueryRunner } from 'typeorm';

export class Postaladdress1728895476687 implements MigrationInterface {
  name = 'Postaladdress1728895476687';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "customer" ADD "postalAddress" character varying`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "postalAddress"`);
  }
}
