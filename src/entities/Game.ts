import { Genre } from "./Genre";
import { Platform } from "./Platform";

export interface Game {
  id: number;
  name: string;
  image: string;
  parent_platforms: { platform: Platform }[];
  background_image: string;
  slug: string;
  metacritic: number;
  rating_top: number;
  description_raw?: string;
  genres: Genre[];
  publishers: { id: number; name: string }[];
}
