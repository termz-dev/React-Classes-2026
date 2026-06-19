import { useState } from "react"

function SearchCars() {
  const [search, setSearch] = useState("")
  const [cars, setCars] = useState([])

  const handleSearch = async () => {
    const res = await fetch(`/api/v1/cars?search=${encodeURIComponent(search)}`)
    const data = await res.json()
    setCars(data.cars)
  }

  return (
    <>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search cars"
      />
      <button onClick={handleSearch}>Search</button>

      {cars.map((car) => (
        <p key={car._id}>{car.title}</p>
      ))}
    </>
  )
}
export default SearchCars