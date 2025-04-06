import z from "zod";
import errorMessages from "./errorMessages";

export const contactUsSchema = z.object({
  name: z
    .string({ required_error: errorMessages.name.required })
    .min(2, errorMessages.name.min)
    .max(64, errorMessages.name.max),
  email: z
    .string({ required_error: errorMessages.email.required })
    .email(errorMessages.email.invalid),
  message: z
    .string({ required_error: errorMessages.message.required })
    .min(2, errorMessages.message.min)
    .max(200, errorMessages.message.max),
});

export type ContactUsSchema = z.infer<typeof contactUsSchema>;
