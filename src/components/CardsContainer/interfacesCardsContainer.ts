export interface ICardMini {
  id: number;
  name: string;
  released: string | number;
  rating: number;
  background_image?: string | null;
}

export interface CardsContainerProps {
  title: string;
  ordering: string;
  search?: string;
  pageNumber?: number;
  setPageNumber?: (value: number) => void;
}
