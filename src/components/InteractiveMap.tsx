import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api'
import { RootState, AppDispatch } from '../store'
import { selectTruck } from '../store/foodTrucksSlice'

const InteractiveMap: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    const { filteredFoodTrucks, selectedTruckId } = useSelector((state: RootState) => state.foodTrucks)

    const mapContainerStyle = {
        width: '100%',
        height: '400px'
    }

    const center = {
        lat: 37.7749,
        lng: -122.4194
    }

    const onLoad = (map: google.maps.Map) => {
        console.log(map)
    }

    const onMarkerClick = (truckId: string) => {
        dispatch(selectTruck(truckId))
    }

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY,
        libraries: ['drawing', 'places'],
    })

    if (!isLoaded) {
        return <div>Loading map</div>
    }

    return (
        <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={12}
            onLoad={onLoad}
        >
            {filteredFoodTrucks.map((truck) => (
                <MarkerF
                    key={truck.objectid}
                    position={{ lat: parseFloat(truck.latitude), lng: parseFloat(truck.longitude) }}
                    onClick={() => onMarkerClick(truck.objectid)}
                    icon={truck.objectid === selectedTruckId ? {
                        url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                    } : undefined}
                />
            ))}
        </GoogleMap>
    )
}

export default InteractiveMap
