import { useState } from "react"

function CarList() {
    const [cars, setCars] = useState([]);
    const [carMake, setCarMake] = useState(""); 
    const [carYear, setCarYear] = useState(new Date().getFullYear());

    function handleMakeChange(e) {
        setCarMake(e.target.value)
    }

    function handleYearChange(e) {
        setCarYear(e.target.value)
    }

    function addCar() {
        const newCar = {make: carMake, year: carYear};
        setCars(c => [...c, newCar]);
        setCarMake("");
        setCarYear(new Date().getFullYear());
    }

    function removeItem(index) {
        setCars(c => c.filter((car, i) => i !== index))
    }

    return( <div>
                <h1>List of cars</h1>
                <input type="text" value={carMake} placeholder="Enter a make" onChange={handleMakeChange} /><br/>
                <input type="number" value={carYear} placeholder="Enter a year" onChange={handleYearChange}/><br/>
                <button onClick={addCar}>Add car</button>
                <ul>
                    {cars.map((car, index) => <li key={index} onClick={() => removeItem(index)}>{car.year}, {car.make}</li>)}
                </ul>
            </div>)
}

export default CarList