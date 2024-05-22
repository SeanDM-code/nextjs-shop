export type Product = {
    id: string;
    name: string;
    category: string;
    imageSrc: string;
    data: {
      [key: string]: any
    };
  };