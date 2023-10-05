import React, { useState } from 'react';

const data = [
    'item 1', 'item 2', 'item 3', 'item 4', 'item 5', 'item 6', 'item 7', 'item 8', 'item 9', 'item 10'
]
const itemPerPage = 4;

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    const currentData = data.slice(startIndex, endIndex);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    return (
        <div
        style={{display:'flex',flexDirection:'column'}}
        >
            <h1>Pagination Component</h1>
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
            style={{display:'flex',justifyContent:'space-around',marginTop:'50px'}}
            >
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >Previous</button>
                <span>page {currentPage}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={endIndex >= data.length}
                >Next</button>
            </div>
        </div>
    )
}
