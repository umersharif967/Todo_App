// import React from 'react'

// const TodoTable = (props) => {
//   return (
//     <>
//         <div className="container mt-5">
//         {props.todo.length > 0 && (
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Title: </th>
//                 <th>Edit </th>
//                 <th>Delete </th>
//               </tr>
//             </thead>
//             <tbody>
//               {props.todo.map((elem, index) => (
//                 <tr key={index}>
//                   <th>{index + 1}</th>
//                   <td>{elem.title}</td>
//                   <td>
//                     <button
//                       onClick={() => props.editOnClick(index)}
//                       className="border-0"
//                     >
//                       <i className="bi bi-pencil-square"></i>
//                     </button>
//                   </td>
//                   <td>
//                     <button
//                       onClick={() => props.deleteOnClick(index)}
//                       className="border-0"
//                     >
//                       <i className="bi bi-x-square"></i>
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </>
//   )
// }

// export default TodoTable
