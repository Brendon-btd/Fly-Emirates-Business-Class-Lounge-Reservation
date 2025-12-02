import React from 'react'
import ReservationForm from './components/ReservationForm'
import {ToastContainer} from 'react-toastify'

export const backendUrl = 'https://fly-emirates-business-class-lounge.onrender.com'

function App() {
  return (
    <div>
      <ToastContainer />
      <ReservationForm/>
    </div>
  )
}

export default App