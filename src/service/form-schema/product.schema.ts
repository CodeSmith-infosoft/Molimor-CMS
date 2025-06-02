import { z } from "zod";

const SingleProductSchema = z
  .object({
    // Category section
    productCategory: z.string().min(1, "Product category is required"),
    productSubCategory: z.string().min(1, "Product sub category is required"),

    // Active product toggle
    isActiveProduct: z.boolean(),

    // Inventory section
    sku: z.string().min(1, "SKU is required"),
    quantity: z
      .string()
      .min(1, "Quantity is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
        message: "Quantity must be a valid positive number",
      }),
    stock: z
      .string()
      .min(1, "Stock is required")
      .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
        message: "Stock must be a valid positive number",
      }),
    hsnNumber: z.string().min(1, "HSN Number is required"),
    gstPercentage: z
      .string()
      .min(1, "GST% is required")
      .refine(
        (val) => !isNaN(Number(val)) && Number(val) >= 0 && Number(val) <= 100,
        {
          message: "GST must be a valid percentage between 0 and 100",
        }
      ),

    // General Information section
    productName: z.string().min(1, "Product name is required"),
    description: z.string().min(1, "Product description is required"),
    features: z
      .array(z.string().min(1, "Feature cannot be empty"))
      .min(1, "At least one feature is required"),
    benefits: z.string().min(1, "Product benefits are required"),

    // Weight section - supporting multiple weight variants
    weightVariants: z
      .array(
        z
          .object({
            weightUnit: z.enum(["GM", "KG", "Liter"], {
              required_error: "Weight unit is required",
            }),
            weightValue: z
              .string()
              .min(1, "Weight value is required")
              .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
                message: "Weight value must be a valid positive number",
              }),
            price: z
              .string()
              .min(1, "Regular price is required")
              .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
                message: "Regular price must be a valid positive number",
              }),
            mrp: z
              .string()
              .min(1, "MRP price is required")
              .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
                message: "MRP price must be a valid positive number",
              }),
            discountPrice: z
              .string()
              .refine((val) => !isNaN(Number(val)) && Number(val) >= 0, {
                message: "Discount price must be a valid non-negative number",
              }),
            startSaleOn: z.union([z.null(), z.date()]),
            endSaleOn: z.union([z.null(), z.date()]),
            saleStatus: z.boolean(),
          })
          .refine(
            (variant) => {
              const price = Number(variant.price);
              const mrp = Number(variant.mrp);

              return price < mrp;
            },
            {
              message: "Price must be less than MRP",
              path: ["price"],
            }
          )
          .refine(
            (variant) => {
              const price = Number(variant.price);
              const discount = Number(variant.discountPrice);
              if (discount > 0) {
                return discount < price;
              }
              return true;
            },
            {
              message: "Discount price must be less than regular price",
              path: ["discountPrice"],
            }
          )
          .refine(
            (variant) => {
              if (
                variant.startSaleOn instanceof Date &&
                variant.endSaleOn instanceof Date
              ) {
                return variant.startSaleOn < variant.endSaleOn;
              }
              return true;
            },
            {
              message: "End date must be after start date",
              path: ["endSaleOn"],
            }
          )
      )
      .min(1, "At least one weight variant is required"),

    // Media section
    images: z
      .array(z.union([z.instanceof(File), z.string().url("Invalid image URL")]))
      .min(1, "At least one product image is required"),
  })
  .refine(
    (val) => {
      const stock = Number(val.stock);
      const quantity = Number(val.quantity);

      return quantity <= stock;
    },
    {
      message: "Quantity must be less or equal to stock",
      path: ["quantity"],
    }
  );

export type SingleProductFormData = z.infer<typeof SingleProductSchema>;

export default SingleProductSchema;
