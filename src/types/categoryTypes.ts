export type subCategoryType = {
  categoryName: string;
  categoryId: string;
  subCategories: subCategoryDataType[];
};

export type subCategoryDataType = {
  name: string;
  _id: string;
};

export type categoryListType = {
  name: string;
  createdAt: string;
  image: string;
  isActive: boolean;
  _id: string;
}
