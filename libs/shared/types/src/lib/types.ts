export interface RideEntity {
  id: number;
  ride: RideInfo;
}

export interface RideInfo {
  created_at: Date;
  total: string;
  pickup: string;
  dropoff: string;
  map: string;
}

export interface RatingEntity {
  id: number;
  rate: number;
  message: string;
}

export interface PaginatedEntitiesRequestPayload {
	page?: number;
  limit?: number;
}

export type PaginatedEntitiesResponsePayload<T> = {
  currentPage: number;
  limit: number;
  entities: Array<T>,
}

export const ENTITY_LIMIT_PER_PAGE = 10;
