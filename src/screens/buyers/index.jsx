// import Link from "next/link";

// const Buyers = ({buyers}) => {
//     return (
//         <div>
//         <div className="flex justify-between">
//                 <h1 className="font-semibold text-2xl p-2">Buyers</h1>
//                 <button>
//                     <Link
//                         href='/users/add'
//                         className="custom-primary-btn"
//                     >
//                         Add User
//                     </Link>
//                 </button>
//         </div>

//         <hr className="my-5" />

//         <div className="mt-20">
//             <table className="custom-table">
//                 <thead className="border-y-2 border-gray-400">
//                     <tr>
//                         <th className=""> Sr. No.</th>
//                         <th className="">User Name</th>
//                         <th className="">Action</th>
//                     </tr>
//                 </thead>
//                 <tbody className="text-gray-700 font-medium text-lg text-center">
//                     {
//                        buyers.length > 0 ? (
//                         buyers.map((buyer, key) => (
//                             <tr key={buyer.id}>
//                                 <td>{key + 1}</td>
//                                 <td>{buyer.customerName}</td>
//                                 <td>{buyer.email}</td>
//                                 <td>{buyer.address}</td>
//                                 <td>{buyer.city}</td>
//                             </tr>
//                            ))
//                        ) : (
//                             <tr>
//                                 <td colSpan={5} className="!text-center">
//                                     No Buyers Found.
//                                 </td>
//                             </tr>
//                        )
                       
//                     }
//                 </tbody>
//             </table>
//         </div>
//     </div>
//     )
// }

// export default Buyers;