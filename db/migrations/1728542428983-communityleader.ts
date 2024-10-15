import { MigrationInterface, QueryRunner } from "typeorm";

export class Communityleader1728542428983 implements MigrationInterface {
    name = 'Communityleader1728542428983'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" ADD "isCommunityLeader" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer" DROP COLUMN "isCommunityLeader"`);
    }

}
