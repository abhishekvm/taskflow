import prisma from '@/app/lib/data';
import Link from 'next/link';

function createUserLink(id: number) {
   return `/users/${id}`;
}

export async function UserTableLoading() {
   return <h3>Loading User Table...</h3>;
}

export default async function UsersTable({ query }: { query?: string }) {
   var condition = {};
   if (query) {
      condition = {
         where: {
            OR: [{ name: { contains: query } }, { email: { contains: query } }],
         },
      };
   }
   const users = await prisma.user.findMany(condition);

   console.log('Fetching Users data...');
   await new Promise((resolve) => setTimeout(resolve, 3000));

   console.log(query);

   return (
      <table>
         <caption>List of Users</caption>
         <tbody>
            <tr>
               <th>Id</th>
               <th>Name</th>
               <th>Email</th>
            </tr>
            {users.map((user) => {
               return (
                  <tr key={user.email}>
                     <td>
                        <Link href={createUserLink(user.id)}>{user.id}</Link>
                     </td>
                     <td>{user.name}</td>
                     <td>{user.email}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
}
