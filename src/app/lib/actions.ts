'use server';

import prisma from '@/app/lib/data';
import { CreateTask } from '@/app/lib/schema';
import { redirect } from 'next/navigation';

export async function createTask(formData: FormData) {
   console.log(formData);
   const parsedData = CreateTask.parse({ name: formData.get('name') });

   const task = await prisma.task.create({ data: parsedData });
   console.log(`Task ${parsedData.name} created!`);
   redirect('/tasks');
}
