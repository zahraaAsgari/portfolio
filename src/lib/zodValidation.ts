import { ZodError, z } from 'zod';


// Define a schema for form validation using Zod
export const contactFormSchema = z.object({
    name: z.string().min(3, 'Name is required'),
    email: z.string().email('Invalid email address'),
    message: z.string().min(10, 'Message is required')
  });
  