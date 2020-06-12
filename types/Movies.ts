import { FlagNameValues } from "semantic-ui-react";

export interface IGenre {
    id: number;
    name: string;
}

export interface IMovie {
    id: number;
    poster_path: string;
    backdrop_path: string;
    title: string;
    release_date: string;
    vote_average: number;
    overview: string;
    original_language: FlagNameValues;
    runtime?: number;
    vote_count: number;
    genres?: IGenre[];
    tagline: string;
}
