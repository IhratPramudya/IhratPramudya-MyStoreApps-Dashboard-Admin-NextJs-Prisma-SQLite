"use client"

import { deleteUser } from "@/actions/userActions";
import { DeleteIcon, EditIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import DeleteConfirmationModal from "@/components/ui/DeleteConfirmationModal";
import Link from "next/link";
import { useState } from "react";


export default function UsersScreen({users}) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
    const [selectedId, setSelectedId] = useState()

    const handleDelete = async () => {
        await deleteUser(selectedId)
        setIsDeleteModalOpen(false)
        setSelectedId(null)
    }
    
    return (
        <div>
            <div className="flex justify-between">
                    <h1 className="font-semibold text-2xl p-2">User Management</h1>
                    <button>
                        <Link
                            href='/users/add'
                            className="custom-primary-btn"
                        >
                            Add User
                        </Link>
                    </button>
            </div>

            <hr className="my-5" />

            <div className="mt-20">
                <table className="custom-table">
                    <thead className="border-y-2 border-gray-400">
                        <tr>
                            <th className=""> Sr. No.</th>
                            <th className="">User Name</th>
                            <th className="">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 font-medium text-lg text-center">
                        {
                            users.map((user, key) => (
                                <tr key={user.id}>
                                    <td>{key+1}</td>
                                    <td>{user.userName}</td>
                                    <td className="flex items-center gap-x-3">
                                        <Link 
                                        href={`/users/edit/${user.id}`}
                                        className="w-fit"
                                        >
                                            <EditIcon/>
                                        </Link>
                                        <Button 
                                            className="bg-transparent p-0 px-2 border-none text-red-500"
                                            onClick={() => {
                                                setIsDeleteModalOpen(true)
                                                setSelectedId(user.id)
                                            }}
                                            >
                                            <DeleteIcon/>
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                {
                    isDeleteModalOpen && 
                    <DeleteConfirmationModal
                        setIsOpen = {setIsDeleteModalOpen}
                        onCancel={()=>setIsDeleteModalOpen(false)}
                        handleConfirm={handleDelete}
                    />
                }
                
            </div>
        </div>
    )
}