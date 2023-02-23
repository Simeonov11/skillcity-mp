import Details from "@/components/restaurant/details";
import HeaderRestaurants from "@/components/restaurant/header-restaurants";
import restaurant from "/temp/restaurant.json";

export default function Restaurant() {
    //console.log(restaurant);

    return(
        <div className="w-full flex flex-col">
            <HeaderRestaurants
                restaurant={restaurant}
            />

            <Details
                details={restaurant}
            />
        </div>
    )    
}