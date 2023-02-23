export default function HeaderRestaurants( {restaurant} ) {
    return(
        <div className="w-full">
            <h1 className="text-3xl font-semibold">
                {restaurant.name}
            </h1>
        </div>
    )
}