import React, { useState } from 'react';

const data = [
    'Apple','Banana','Cherry','Date','Grape','Lemon','Lime','Orange',
    'item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'
]
const itemPerPage = 4;
export default function SearchComponent() {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchItem, setSearchItem] = useState('');

    const filterData = data.filter(item =>
        item.toLowerCase().includes(searchItem.toLowerCase())
    )

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentData = filterData.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    const handleSearchItem = (event) => {
        setCurrentPage(1)
        setSearchItem(event.target.value)
    }

    return (
        <div>SearchComponent
            <div
                style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
            >
                <input style={{ width: '400px', margin: '15px', padding: '5px' }} type='text' placeholder='type here to search' value={searchItem} onChange={handleSearchItem} />
                <div>
                    {currentData.map((item, id) => {
                        return (
                            <ul key={id}>
                                <li>{item}</li>
                            </ul>
                        )
                    })}
                </div>
                <div
                    style={{ display: 'flex', justifyContent: 'space-around', marginTop: '50px' }}
                >
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >Previous</button>
                    <span>page {currentPage}</span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={endIndex >= filterData.length}
                    >Next</button>
                </div>
            </div>
        </div>
    )
}
