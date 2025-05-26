// productApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ProductResponse } from './Product';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: 'https://dummyjson.com/',
    // Add some debugging
    prepareHeaders: (headers) => {
      console.log('Making API request to DummyJSON');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductResponse, void>({
      query: () => {
        console.log('Fetching products with limit 10');
        return 'products?limit=10';
      },
      // Add error transformation for better debugging
      transformErrorResponse: (response, meta) => {
        console.error('API Error Response:', response);
        console.error('API Error Meta:', meta);
        return response;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;