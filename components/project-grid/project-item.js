export default function ProjectItem({ name, url}) {
    return(
        <div className="bg-yellow-100 p-4">
            <p>
                {name}
            </p>
            <a href={`${url}`} target="_blank">Link to the website</a>
        </div>
    )
}