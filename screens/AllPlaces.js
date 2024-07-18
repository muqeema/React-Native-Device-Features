import { useIsFocused } from "@react-navigation/native";
import PlacesList from "../components/Places/PlacesList";
import { useEffect, useState } from "react";

function AllPlaces({route}) {
    const [loadedPlaces, setLoadedPlaces] = useState([]);

    const isFocused = useIsFocused();
    
    useEffect(() => {
        if (isFocused && route.params) {
            console.log('route.params.place: ', route.params.place);
            setLoadedPlaces(curPlaces => [...curPlaces, route.params.place]);
        }
    }, [isFocused]);

    return <PlacesList places={loadedPlaces} />
}

export default AllPlaces;