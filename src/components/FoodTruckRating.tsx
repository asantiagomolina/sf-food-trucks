import React, { useState, useEffect } from 'react'
import { FoodTruckRatingProps } from '../types'

const FoodTruckRating: React.FC<FoodTruckRatingProps> = ({ name, latitude, longitude }) => {
    const [rating, setRating] = useState<google.maps.places.Place["rating"]>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        findRatings()
    }, [name, latitude, longitude])

    const findRatings = async () => {
        setIsLoading(true)
        try {
            const { Place } = await google.maps.importLibrary("places") as google.maps.PlacesLibrary;
            const request = {
                textQuery: name,
                fields: ['rating'],
                includedType: 'restaurant',
                locationBias: { lat: Number(latitude), lng: Number(longitude) },
                language: 'en-US',
                maxResultCount: 1,
                region: 'us',
                useStrictTypeFiltering: false,
            };

            const { places } = await Place.searchByText(request);

            if (places.length > 0) {
                const place = places[0]
                setRating(place.rating)
            }

            setIsLoading(false)
        } catch (err) {
            setError('Error fetching rating information')
            console.error(err)
        }
    }

    if (isLoading) return <div>Loading rating information...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            <div>
                <p>Rating: {rating} / 5</p>
            </div>
        </div>
    )
}

export default FoodTruckRating
