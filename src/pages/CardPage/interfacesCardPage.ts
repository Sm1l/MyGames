// export interface IFullCard {
//   name: string;
//   genres: {}[];
//   rating: number;
//   released: number;
//   background_image: string;
//   parent_platforms: {}[];
//   short_screenshots: {}[];
//   tags: {}[];
// }
export interface ICardFull {
  name: string;
  genres: IGenre[];
  description_raw: string;
  rating: number;
  released: string;
  background_image: string;
  parent_platforms: IPlatform[];
  tags: ITags[];
}

export interface IGenre {
  games_count: number;
  id: number;
  image_background?: string;
  name: string;
  slug: string;
  // [key: string]: string;
}

export interface IPlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface ITags {
  id: number;
  name: string;
  slug?: string;
  language?: string;
  games_count?: number;
}

export interface IScreenshot {
  id: number;
  image: string;
  width: number;
  height: number;
  is_deleted: boolean;
}
