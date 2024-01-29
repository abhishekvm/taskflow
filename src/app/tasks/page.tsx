import Link from 'next/link';

export default function Page() {
   return (
      <>
         <ul>
            <li>
               <Link href='/tasks/create'>Create Task</Link>
            </li>
         </ul>
         <h2>List of Tasks</h2>
      </>
   );
}
