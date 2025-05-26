// Product.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  // Add optional fields that might come from the API
  description?: string;
  category?: string;
  brand?: string;
  rating?: number;
  stock?: number;
  tags?: string[];
  sku?: string;
  weight?: number;
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: string;
  reviews?: Array<{
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }>;
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images?: string[];
}

export interface ProductResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}