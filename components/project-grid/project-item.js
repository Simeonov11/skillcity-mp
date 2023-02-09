import { useState } from "react"

export default function ProjectItem({ name, url, imgUrl}) {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    const handleIncrementLike = () => {
        let newValue = likes + 1;
        setLikes(newValue);
    }

    const handleDecrementLike = () => {
        let newValue = dislikes + 1;
        setDislikes(newValue);
    }
    

    return(
        <div className="bg-yellow-100 p-4">
            <img src={`${imgUrl}`} className="rounded-lg" w-24></img>
            <p>
                {name}
            </p>
            <a href={`${url}`} target="_blank">Link to the website</a>
            <div className="w-full flex flex-row">
                <div className="p-2">
                    <p className="text-red-600">
                        {likes} likes
                    </p>
                    <button className="bg-red-700 text-white px-3 py-1 rounded-lg"
                    onClick={handleIncrementLike}
                    >
                        Like
                    </button>
                </div>
                <div className="p-2">
                    <p className="text-blue-600">
                        {dislikes} dislikes
                    </p>
                    <button className="bg-blue-700 text-white px-3 py-1 rounded-lg"
                    onClick={handleDecrementLike}
                    >
                        Dislike
                    </button>
                </div>
            </div>
            

        </div>
    )
}