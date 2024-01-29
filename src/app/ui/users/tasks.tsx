import prisma from '@/app/lib/data';
import Link from 'next/link';

function createUserLink(id: number) {
   return `/users/${id}`;
}

export async function UserTableLoading() {
   return <h3>Loading User Table...</h3>;
}

export default async function TasksTable({ query }: { query?: string }) {
   var condition = {};
   if (query) {
      condition = {
         where: {
            OR: [{ name: { contains: query } }, { email: { contains: query } }],
         },
      };
   }
   const tasks = await prisma.task.findMany(condition);
   console.log('Fetching Tasks data...');

   return (
      <table>
         <caption>List of Tasks</caption>
         <tbody>
            <tr>
               <th>Id</th>
               <th>Name</th>
            </tr>
            {tasks.map((task) => {
               return (
                  <tr key={task.id}>
                     <td>
                        <Link href={createUserLink(task.id)}>{task.id}</Link>
                     </td>
                     <td>{task.name}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
}
