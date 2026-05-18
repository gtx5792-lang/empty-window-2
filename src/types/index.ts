export interface MenuItem {
  id: string;
  nameAr: string;
  descriptionAr: string;
  price: number;
  image: string;
  category: "popular" | "offer" | "menu";
  badge?: string;
  isPopular?: boolean;
  isOffer?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Testimonial {
  id: string;
  nameAr: string;
  quoteAr: string;
  rating: number;
  avatar: string;
}
