import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1753730129826 implements MigrationInterface {
    name = 'InitMigration1753730129826'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" ADD "visitId" integer`);
        await queryRunner.query(`ALTER TABLE "note" ADD CONSTRAINT "FK_89125bdbfb713ab1531433a0951" FOREIGN KEY ("visitId") REFERENCES "visit"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "note" DROP CONSTRAINT "FK_89125bdbfb713ab1531433a0951"`);
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "visitId"`);
    }

}
