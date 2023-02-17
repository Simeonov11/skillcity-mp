import Input from "@/components/forms/input";
import LocationItem from "@/components/search/locations-item";
import Footer from "@/components/shared/footer/footer";
import Header from "@/components/shared/header";
import Content from "@/components/shared/header/content";
import { useEffect, useState } from "react";

export default function Search() {
    const [locations, setLocation] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        getLocations();
    }, []);

    const getLocations = async () => {
        const response = await fetch('/api/locations', {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await response.json();
        
        setLocation(data);
    }

    const getFilteredLocations = async () => {
        if (!input) {
            getLocations();
            return;
        }


        const response = await fetch(`/api/locations?search=${input}`,{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        });

        const data = await response.json();

        setLocation(data);
    }

    return(
        <div className="w-full bg-green-100 max-w-6xl mx-auto px-4">
            <Header name="Search"/>

            <Content>
                <div className="w-full md:w-6/12 lg:w-4/12 flex flex-row space-x-2">
                    <Input 
                        value={input}
                        onChange={value => setInput(value)}
                    />
                    <button
                        className="bg-blue-500 text-white px-6 py-2 rounded-md"
                        type="button"
                        onClick={getFilteredLocations}
                    >
                        Search
                    </button>
                </div>

                <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
                    {locations.map((location) => (
                        <LocationItem key={location.id} location={location} />
                    ))}
                    
                    
                </div>
            </Content>

            <Footer href="/" title="Home"/>
        </div>
    )
}