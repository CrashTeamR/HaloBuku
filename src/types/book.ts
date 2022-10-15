export type Book = {
  id: string;
  title: string;
  author: string;
  coverImageUrl: string;
  thumbnailImageUrl?: string;
  description: string;
  isAvailable: boolean;
  price: number;
  quantity: number;
  publishedYear?: number;
};

export type Books = Book[];

/**
 * Just for an example
 * Please delete if already set on the convention
 */
export type ImageExample = {
  coverImageUrl: string;
  image: {
    url: string;
    fileName: string;
  };
  images: {
    url: string;
    fileName: string;
  }[];
};
