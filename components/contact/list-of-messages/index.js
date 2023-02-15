import { useEffect, useState } from "react"

export default function ListOfMessages() {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        getMessages();
    }, []);

    const getMessages = async () => {
        const response = await fetch(`/api/contact-messages`);
        const data = await response.json();

        const { messages } = data;
        
        setMessages(messages);
    }

    return(
        <div className="w-full grid grid-cols-3 gap-4">
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