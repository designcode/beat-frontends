export interface RideEntity {
  id: number;
  ride: RideInfo;
}

export interface RideInfo {
  created_at: Date,
  total: string,
  pickup: string,
  dropoff: string,
  map: string,
}

export interface RatingEntity {
  id: number;
  rate: number;
  message: string;
}
