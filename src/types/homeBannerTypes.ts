import { bannerFormSchemaType } from "@/service/form-schema/banner.schema";
import {
  Control,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetError,
  UseFormSetValue,
} from "react-hook-form";

export type bannerItemType = {
  _id: string;
  image: string;
  productId: string;
  isActive: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
};

export type bannerModalPropsType = {
  openMarketModal: boolean;
  handleToggle: (isOpen: boolean, setFileList?: React.Dispatch<any>) => void;
  isLoading: boolean;
  control: Control<
    {
      productId?: string | undefined;
      image: string | File;
    },
    any,
    {
      productId?: string | undefined;
      image: string | File;
    }
  >;
  register: UseFormRegister<{
    image: string | File;
    productId?: string | undefined;
  }>;
  handleSubmit: UseFormHandleSubmit<
    {
      productId?: string | undefined;
      image: string | File;
    },
    {
      productId?: string | undefined;
      image: string | File;
    }
  >;
  onSubmit: (
    data: bannerFormSchemaType,
    setFileList: React.Dispatch<any>
  ) => void;
  errors: FieldErrors<{
    productId?: string | undefined;
    image: string | File;
  }>;
  item?: bannerItemType | null;
  setValue: UseFormSetValue<{
    productId?: string | undefined;
    image: string | File;
  }>;
  setError: UseFormSetError<{
    image: string | File;
    productId?: string | undefined;
  }>;
};
