import React from 'react'
import { HashLoader } from 'react-spinners'

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px] w-full">
      <HashLoader color="#d6482b" size={130} speedMultiplier={1.2} />
    </div>
  )
}

export default Spinner