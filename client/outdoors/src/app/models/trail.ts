export interface Trail {
    id: number;
    name: string;
    country: string;
    diffculty: number;
    distance?: number;
    ratingId?: number;
    popularityId?: number;
    imageTitle: string;
}