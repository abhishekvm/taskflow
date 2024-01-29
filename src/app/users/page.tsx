import UsersTable, { UserTableLoading } from '@/app/ui/users/users';
import UserSearch from '@/app/ui/users/search';
import { Suspense } from 'react';

export default async function Page({
   searchParams,
}: {
   searchParams?: { q: string };
}) {
   console.log(searchParams?.q);
   return (
      <>
         <UserSearch placeholder='Search User...' />

         <Suspense fallback={<UserTableLoading />}>
            <UsersTable query={searchParams?.q} />
         </Suspense>
      </>
   );
}
