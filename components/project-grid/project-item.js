export default function ProjectItem({ name, url, imgUrl}) {
    return(
        <div className="bg-yellow-100 p-4">
            <img src={`${imgUrl}`} className="rounded-lg" w-24></img>
            <p>
                {name}
            </p>
            <a href={`${url}`} target="_blank">Link to the website</a>
        </div>
    )
}