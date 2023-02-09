export default function Bio( { imgUrl, title, subtitle }) {
    return(
        <div className="bg-red-200 w-full flex flex-row space-x-2 p-4">
            <div className="w-2/12">
                <img src={imgUrl} className="rounded-lg" />
            </div>
            <div className="w-10/12 p-4">
                <h1 className="text-4xl font-bold">{title}</h1>
                <p className="text-xl text-gray-700">{subtitle}</p>
            </div>
      </div> 
    )
}