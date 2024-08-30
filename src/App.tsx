import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from './store'
import { fetchFoodTrucks } from './store/foodTrucksSlice'
import InteractiveMap from './components/InteractiveMap'
import FoodTruckList from './components/FoodTruckList'
import SearchAndFilter from './components/SearchAndFilter'
import Loading from './components/Loading'
import { faHotdog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { status, error } = useSelector((state: RootState) => state.foodTrucks)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchFoodTrucks())
    }
  }, [status, dispatch])

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <div className="app">
      <header className='bg-ffred text-ffwhite p-4'>
        <h1 className='font-extrabold text-3xl'><FontAwesomeIcon icon={faHotdog} /> San Francisco Food Truck Explorer</h1>
      </header>
      <main>
        <div className="search-filter">
          <SearchAndFilter />
        </div>
        <div className="content">
          <div className="map-container">
            <InteractiveMap />
          </div>
          <div className="list-container bg-ffaltyellow">
            <FoodTruckList />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
