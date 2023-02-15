import { useState } from "react"

export default function ProjectItem({ idApi, name, url, imgUrl, likesApi, dislikesApi}) {
    const [likes, setLikes] = useState(+likesApi);
    const [dislikes, setDislikes] = useState(+dislikesApi);

    const handleIncrementLike = async () => {
        let newLikes = likes + 1;
        setLikes(newLikes);

        const id = +idApi;
        const response = await fetch(`/api/increase-likes?id=${id}&likes=${newLikes}`);
        const dataLikes = await response.json();
    }

    const handleDecrementLike = async () => {
        let newDislikes = dislikes + 1;
        setDislikes(newDislikes);

        const id = +idApi;
        const response = await fetch(`/api/increase-dislikes?id=${id}&dislikes=${newDislikes}`);
        const dataDislikess = await response.json();
    }
    

    return(
        <div className="bg-yellow-100 p-5 mx-auto w-full">
            <img src={`${imgUrl}`} className="rounded-lg" w-24></img>
            <p>
                {name}
            </p>
            <a href={`${url}`} target="_blank">Link to the website</a>
            <div className="w-full flex flex-row justify-center">
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