import { z } from "zod";

export const bannerFormSchema = z.object({
  productId: z.string().optional(),
  image: z.union([
    z.instanceof(File),
    z.string().url('Image is required')
  ]),
});

export type bannerFormSchemaType = z.infer<typeof bannerFormSchema>;

export default bannerFormSchema;