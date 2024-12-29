import { defineCollection, z } from "astro:content";

const products = defineCollection({
    schema: z.object({
        title: z.string(),
        price: z.string(),
        date: z.boolean(),
        rating: z.string(),
        img: z.string(),
    })
});

export const collections = { products };