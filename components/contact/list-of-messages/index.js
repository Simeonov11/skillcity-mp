import { useEffect, useState } from "react"

export default function ListOfMessages( { isLoading, messages }) {


    if (isLoading) {
        return(
            <div className="w-full grid grid-cols-3 gap-4 p-2 mt-3">
                <div className="bg-gray-200 py-3 px-6 rounded h-28 animate-pulse" />
                <div className="bg-gray-200 py-3 px-6 rounded h-28 animate-pulse" />
                <div className="bg-gray-200 py-3 px-6 rounded h-28 animate-pulse" />
            </div>
            
        )
    }
    
    return(
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 mt-3">
            {messages.map((message, index) => (
                <div key={index} className="bg-gray-200 py-3 px-6 rounded">
                    <p className="font-medium text-xl">{message.name}</p>
                    <p>
                        {message.email ? message.email : (
                            <span className="italic text-red-500">No email provided</span>
                        )}</p>
                    <p>{message.message}</p>
                </div>
            ))}
        </div>
    )
}