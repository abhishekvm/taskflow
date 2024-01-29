import { z } from 'zod';

const CreateTaskSchema = z.object({
   id: z.string(),
   name: z.string(),
   userId: z.optional(z.coerce.number()),
});

export const CreateTask = CreateTaskSchema.omit({ id: true });
