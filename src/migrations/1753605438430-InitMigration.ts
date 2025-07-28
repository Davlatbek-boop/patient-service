import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1753605438430 implements MigrationInterface {
    name = 'InitMigration1753605438430'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "visit" ("id" SERIAL NOT NULL, "patient_id" integer NOT NULL, "visit_date" TIMESTAMP NOT NULL, "patientId" integer, CONSTRAINT "PK_c9919ef5a07627657c535d8eb88" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "visit_id" integer NOT NULL, "text" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "visit" ADD CONSTRAINT "FK_0f994812406b1deb208e79c0b30" FOREIGN KEY ("patientId") REFERENCES "patient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "visit" DROP CONSTRAINT "FK_0f994812406b1deb208e79c0b30"`);
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TABLE "visit"`);
    }

}
