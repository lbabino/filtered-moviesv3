export type Genre = {
	id: number;
	name: string;
};

export type Selectable = {
	selected: boolean;
};

export type MovieSchema = {
	adult: boolean;
	backdrop_path: string;
	genre_ids: number[];
	id: number;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
};

export type MovieDetailsSchema = {
	adult: boolean;
	backdrop_path: string;
	belongs_to_collection: object;
	budget: number;
	genres: number[];
	homepage: string;
	id: number;
	imdb_id: string;
	original_language: string;
	original_title: string;
	overview: string;
	popularity: number;
	poster_path: string;
	release_date: string;
	revenue: number;
	runtime: number;
	status: string;
	tagline: string;
	title: string;
	video: boolean;
	vote_average: number;
	vote_count: number;
    
};

export type SelectableGenre = Genre & Selectable;
