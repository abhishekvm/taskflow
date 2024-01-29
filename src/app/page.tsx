import Link from 'next/link';

export default function Home() {
   return (
      <div>
         <section>
            <nav>
               <Link href='/users'>Users</Link>
            </nav>
            <nav>
               <Link href='/tasks'>Tasks</Link>
            </nav>
         </section>
      </div>
   );
}
