import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1753643805044 implements MigrationInterface {
    name = 'InitMigration1753643805044'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visit" DROP COLUMN "patient_id"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visit" ADD "patient_id" integer NOT NULL`);
    }

}
