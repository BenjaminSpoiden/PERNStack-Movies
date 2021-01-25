import { BaseEntity, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Genre } from "./Genre";
import { Movie } from "./Movie";

@Entity()
export class MovieGenre extends BaseEntity {

    @PrimaryColumn()
    movie_id: number

    @PrimaryColumn()
    genre_id: number

    @ManyToOne(() => Movie, movie => movie.genreConnection, {primary: true})
    @JoinColumn({name: "movie_id"})
    movie: Promise<Movie>

    @ManyToOne(() => Genre, genre => genre.movieConnection, {primary: true})
    @JoinColumn({name: "genre_id"})
    genre: Promise<Genre>
}