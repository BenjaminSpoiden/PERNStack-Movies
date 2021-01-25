import {MigrationInterface, QueryRunner} from "typeorm";

export class DropGenresColumn1611519487789 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            ALTER TABLE movie
            DROP COLUMN genres;
        `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
