import React, { useState } from 'react'

export default function Country() {


    const countries = [
        { id: 1, name: 'USA', cities: ['New York', 'Los Angeles', 'Chicago'] },
        { id: 2, name: 'Canada', cities: ['Toronto', 'Vancouver', 'Montreal'] },
        { id: 3, name: 'UK', cities: ['London', 'Manchester', 'Birmingham'] },
    ]
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [selectedCity, setSelectedCity] = useState(null)


    const handleCountryChange = (e) => {
        // code to select country and city on dropdown change.
        const selectedCountryId = parseInt(e.target.value, 10);
        const selectedCountry = countries.find(country => country.id === selectedCountryId)
        setSelectedCountry(selectedCountry)
        setSelectedCity(null)
    }
    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setSelectedCity(selectedCity);
    }

    return (
        //     <div className='container'>
        //         <h4>Select a country :
        //             <select onChange={handleCountryChange} value={selectedCountry ? selectedCountry.id : " "}>
        //                 <option value="">Select</option>
        //                 {countries.map(country => {
        //                     <option key={country.id} value={country.id}>{country.name}</option>
        //                 })}
        //             </select>
        //         </h4>

        //         {selectedCountry && (
        //             <h4>
        //                 Select City:
        //                 <select onChange={handleCityChange} value={selectedCity || ''}>
        //                     <option value="">Select</option>
        //                     {selectedCountry.cities.map(city => (
        //                         <option key={city} value={city}>{city}</option>
        //                     ))}
        //                 </select>
        //             </h4>
        //         )}

        //         <div>
        //     {/* Display selected country and city */}
        //     {selectedCountry && <p>Selected Country: {selectedCountry.name}</p>}
        //     {selectedCity && <p>Selected City: {selectedCity}</p>}
        //   </div>
        //     </div>
        <div>
            <label>
                Select Country:
                <select onChange={handleCountryChange} value={selectedCountry ? selectedCountry.id : ''}>
                    <option value="">Select</option>
                    {countries.map(country => (
                        <option key={country.id} value={country.id}>{country.name}</option>
                    ))}
                </select>
            </label>

            {selectedCountry && (
                <label>
                    Select City:
                    <select onChange={handleCityChange} value={selectedCity || ''}>
                        <option value="">Select</option>
                        {selectedCountry.cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </label>
            )}

            <div>
                {/* Display selected country and city */}
                {selectedCountry && <p>Selected Country: {selectedCountry.name}</p>}
                {selectedCity && <p>Selected City: {selectedCity}</p>}
            </div>
        </div>

    )
}
