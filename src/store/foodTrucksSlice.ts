import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { FoodTruck, FoodTrucksState } from '../types'

const initialState: FoodTrucksState = {
  foodTrucks: [],
  filteredFoodTrucks: [],
  status: 'idle',
  error: null,
  selectedTruckId: null,
  searchTerm: '',
  foodType: '',
}

export const fetchFoodTrucks = createAsyncThunk('foodTrucks/fetchFoodTrucks', async () => {
  const response = await fetch(import.meta.env.VITE_FOOD_TRUCKS_API_ENDPOINT)
  if (!response.ok) {
    throw new Error('Failed to fetch food trucks')
  }
  return response.json()
})

const foodTrucksSlice = createSlice({
  name: 'foodTrucks',
  initialState,
  reducers: {
    selectTruck: (state, action: PayloadAction<string | null>) => {
      state.selectedTruckId = action.payload
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
      state.filteredFoodTrucks = filterTrucks(state)
    },
    setFoodType: (state, action: PayloadAction<string>) => {
      state.foodType = action.payload
      state.filteredFoodTrucks = filterTrucks(state)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodTrucks.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchFoodTrucks.fulfilled, (state, action: PayloadAction<FoodTruck[]>) => {
        state.status = 'succeeded'
        state.foodTrucks = action.payload.filter(trucks => trucks.status === "APPROVED")
        state.filteredFoodTrucks = state.foodTrucks
      })
      .addCase(fetchFoodTrucks.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch food trucks'
      })
  },
})

const filterTrucks = (state: FoodTrucksState) => {
  return state.foodTrucks.filter((truck) => {
    const matchesSearch = truck.applicant.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      truck.fooditems.toLowerCase().includes(state.searchTerm.toLowerCase())
    const matchesType = state.foodType === '' || truck.fooditems.toLowerCase().includes(state.foodType.toLowerCase())
    return matchesSearch && matchesType
  })
}

export const { selectTruck, setSearchTerm, setFoodType } = foodTrucksSlice.actions

export default foodTrucksSlice.reducer
