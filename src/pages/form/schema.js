import { z } from "zod";

export const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(3, "Name must be at least 3 characters"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),

  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters"),
});