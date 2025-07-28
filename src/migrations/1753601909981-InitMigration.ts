import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1753601909981 implements MigrationInterface {
  name = "InitMigration1753601909981";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "patient" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "dob" character varying NOT NULL, "doctorId" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8dfa510bb29ad31ab2139fbfb99" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "patient"`);
  }
}
