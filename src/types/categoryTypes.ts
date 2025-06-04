import { categoryFormSchemaType } from "@/service/form-schema/category.schema";
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

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
};

export type categoryPayloadType = {
  page?: number;
  limit?: number;
};

export type subCategoryPayloadType = {
  page?: number;
  limit?: number;
  categoryId?: string
};

export type CategoriestModalPropsType = {
  openCategories: boolean;
  handleCategories: (setFileList: React.Dispatch<any>) => void;
  control: Control<
    {
      name: string;
      image: string | File;
    },
    any,
    {
      name: string;
      image: string | File;
    }
  >;
  register: UseFormRegister<{
    image: string | File;
    name: string;
  }>;
  handleSubmit: UseFormHandleSubmit<
    {
      name: string;
      image: string | File;
    },
    {
      name: string;
      image: string | File;
    }
  >;
  onSubmit: (
    data: categoryFormSchemaType,
    setFileList: React.Dispatch<any>
  ) => void;
  errors: FieldErrors<{
    name: string;
    image: string | File;
  }>;
  item?: categoryListType | null;
  setValue: UseFormSetValue<{
    name: string;
    image: string | File;
  }>;
};

export type SubCategoriestModalPropsType = {
  control?: Control<
    {
      name: string;
      // image: string | File;
    },
    any,
    {
      name: string;
      // image: string | File;
    }
  >;
  register: UseFormRegister<{
    // image: string | File;
    name: string;
  }>;
  handleSubmit: UseFormHandleSubmit<
    {
      name: string;
      // image: string | File;
    },
    {
      name: string;
      // image: string | File;
    }
  >;
  onSubmit: (
    data: categoryFormSchemaType,
    setFileList: React.Dispatch<any>
  ) => void;
  errors: FieldErrors<{
    name: string;
    // image: string | File;
  }>;
  item?: categoryListType | null;
  setValue: UseFormSetValue<{
    name: string;
    // image: string | File;
  }>;
};