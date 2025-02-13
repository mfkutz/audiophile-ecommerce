import { z } from "zod"

/* Auth & Users */
export const authSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    phoneNumber: z.string(),
    address: z.string(),
    zipCode: z.string(),
    city: z.string(),
    country: z.string(),
    eMoneyNumber: z.string(),
    eMoneyPin: z.string()
})


type Auth = z.infer<typeof authSchema>
export type UserRegistrationForm = Pick<Auth, "name" | "email" | "phoneNumber" | "address" | "zipCode" | "city" | "country" | "eMoneyNumber" | "eMoneyPin">


/** TODO Products*/
const imageSchema = z.object({
    mobile: z.string(),
    tablet: z.string(),
    desktop: z.string(),
    _id: z.string()
});

const includesItemSchema = z.object({
    quantity: z.number(),
    item: z.string(),
    _id: z.string()
});

const relatedProductSchema = z.object({
    slug: z.string(),
    name: z.string(),
    image: imageSchema,
    _id: z.string()
});

export const productSchema = z.array(
    z.object({
        _id: z.string(),
        slug: z.string(),
        name: z.string(),
        image: imageSchema,
        category: z.string(),
        categoryImage: imageSchema,
        new: z.boolean(),
        price: z.number().min(0),
        description: z.string(),
        features: z.string(),
        includes: z.array(includesItemSchema),
        gallery: z.object({
            first: imageSchema,
            second: imageSchema,
            third: imageSchema,
            _id: z.string()
        }),
        others: z.array(relatedProductSchema)
    })
);

export type Product = z.infer<typeof productSchema>[number]

export type ProductData = Pick<Product, "_id" | "slug" | "name" | "image" | "category" | "categoryImage" | "new" | "price" | "description" | "features" | "includes" | "gallery" | "others">