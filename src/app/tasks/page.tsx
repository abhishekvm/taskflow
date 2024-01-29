import Link from 'next/link';
import TasksTable from '@/app/ui/users/tasks';

export const revalidate = 300;

export default function Page() {
   return (
      <>
         <ul>
            <li>
               <Link href='/tasks/create'>Create Task</Link>
            </li>
         </ul>
         <TasksTable />
      </>
   );
}
