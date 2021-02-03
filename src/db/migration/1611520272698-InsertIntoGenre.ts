import {MigrationInterface, QueryRunner} from "typeorm";

export class InsertIntoGenre1611520272698 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            INSERT INTO genre (name) values 
                ('Adventure'), 
                ('Animation'), 
                ('Comedy'), 
                ('Crime'), 
                ('Documentary'), 
                ('Drama'), 
                ('Family'), 
                ('Fantasy'), 
                ('History'), 
                ('Horror'), 
                ('Music'), 
                ('Mystery'), 
                ('Romance'), 
                ('Science-Fiction'), 
                ('TV Movies'), 
                ('Thriller'), 
                ('War'), 
                ('Western'); 
        `)
    }

    public async down(_: QueryRunner): Promise<void> {
    }

}
