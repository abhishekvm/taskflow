import { createTask } from '@/app/lib/actions';

export default function Page() {
   return (
      <form action={createTask}>
         <table>
            <tr>
               <td>
                  <label>Name</label>
               </td>
               <td>
                  <input
                     id='name'
                     name='name'
                     type='text'
                     placeholder='Learn NextJS'
                  />
               </td>
            </tr>
            <tr>
               <td>
                  <label>Name</label>
               </td>
               <td>
                  <input
                     id='name'
                     name='name'
                     type='text'
                     placeholder='Learn NextJS'
                  />
               </td>
            </tr>
         </table>

         <div>
            <button type='submit'>Create Task</button>
         </div>
      </form>
   );
}
