import { z } from "zod";

export const categoryFormSchema = z.object({
  name: z.string().min(1, "Category is requred"),
  image: z.union([
    z.instanceof(File),
    z.string().url('Image is required')
  ]),
});

export type categoryFormSchemaType = z.infer<typeof categoryFormSchema>;

export default categoryFormSchema;