import React from 'react'

export default function Child({handleShowContent}) {
  return (
    <div>
            <button onClick={handleShowContent}>show</button>

    </div>
  )
}
