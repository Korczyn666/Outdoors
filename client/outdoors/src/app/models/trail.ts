export interface Trail {
  id: number;
  name: string;
  country: string;
  diffculty: number;
  distance?: number;
  ratingId?: number;
  popularityId?: number;
  imageTitle: string;
  description?: string;
  recomendedProducts: RecomendedProduct[];
}

export interface RecomendedProduct {
  productId: number;
  productName: string;
  productNameCut: string;
  redirect: string;
}
