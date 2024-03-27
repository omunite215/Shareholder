import { z } from "zod";

export const UploadSignedFormSchema = z.object({
  signedNNC1: z
    .any()
    .refine(
      (file: { size: number }[]) => file[0]?.size <= 3000000,
      `Max file size is 3MB.`
    ),
});

export const UploadESignSchema = z.object({
  eSign: z
    .any()
    .refine(
      (file: { size: number }[]) => file[0]?.size <= 3000000,
      `Max file size is 3MB.`
    ),
});
