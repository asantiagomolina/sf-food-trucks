export interface FoodTruck {
    objectid: string;
    applicant: string;
    facilitytype: string;
    locationdescription: string;
    address: string;
    fooditems: string;
    latitude: string;
    longitude: string;
    schedule: string;
    status: string;
}

export interface FoodTrucksState {
    foodTrucks: FoodTruck[];
    filteredFoodTrucks: FoodTruck[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
    selectedTruckId: string | null;
    searchTerm: string;
    foodType: string;
}

export interface FoodTruckCardProps {
    truck: FoodTruck
}

export interface FoodTruckRatingProps {
    name: string,
    latitude: string,
    longitude: string,
}
