import { createTask } from '@/app/lib/actions';

export default function Page() {
   return (
      <form action={createTask}>
         <table>
            <tbody>
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
            </tbody>
         </table>

         <div>
            <button type='submit'>Create Task</button>
         </div>
      </form>
   );
}
