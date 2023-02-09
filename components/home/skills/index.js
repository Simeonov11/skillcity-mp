import skills from "./skills"

export default function Skills(){
    return(
        <div className="w-full m-5">
            <h1 className="font-mediium text-4xl">
                Skills
            </h1>
        
            <div>
                <ul className="list-disc ml-10">
                    {skills.map((skill, index) => {
                        return <li key={index}>{skill}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}