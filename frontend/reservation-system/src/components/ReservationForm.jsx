import { CalendarClock, Calendars, Mail, Map, Phone, Plane, TowerControl, UserPen, Users } from 'lucide-react'
import React, { useState } from 'react'

function ReservationForm() {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        phone:"",
        destination:"",
        airline:"",
        airport:"",
        date:"",
        time:"",
        guests:"1",
    })

    const handleChanges = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const generateTimeSlot = () => {
        const slots = [];
        for (let hour = 9; hour < 21; hour++){
            const startHour = hour % 12 === 0 ? 12 : hour % 12;
            const startPeriod = hour < 12 ? "AM" : "PM"

            const endHour = (hour + 3) % 12 === 0 ? 12 : (hour + 3)% 12;
            const endPeriod = hour + 3 < 12 ? "AM" : "PM"

            slots.push(`${startHour}:00 ${startPeriod} - ${endHour}:00 ${endPeriod} `)
        }
        return slots;
    }




  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <form className=' bg-white p-5 rounded-xl shadow-lg w-full max-w-md'>
            <h2 className='text-2xl font-semibold text-center text-gray-700 mb-6'>Book Your Business Lounge Now!!!</h2>
            <UserPen className='w-6 h-6'/><input name='name' value={formData.name} onChange={handleChanges} type="text" placeholder='Full Name' className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-red-600' required />
            <Mail className='w-6 h-6'/><input name='email' value={formData.email} onChange={handleChanges} type="text" placeholder='Email' className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-red-600' required />
            <Phone className='w-6 h-6'/><input name='phone' value={formData.phone} onChange={handleChanges} type="tel" placeholder='Phone Number' className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-red-600' required/>
            <Map className='w-6 h-6'/><input name='destination' value={formData.destination} onChange={handleChanges} type="text" placeholder='Destination' className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-red-600' required />
            <Plane className='w-6 h-6'/><input name='airline' value={formData.airline} onChange={handleChanges} type="text" placeholder='Airline' className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-red-600' required/>
            <TowerControl className='w-6 h-6'/><input name='airport' value={formData.airport} onChange={handleChanges} type="text" placeholder='Airport' className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-red-600' required />
            <Calendars className='w-6 h-6'/><input name='date' value={formData.date} onChange={handleChanges} type="date" className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-red-600' required />

            <CalendarClock className='w-6 h-6'/><select name='time' value={formData.time} onChange={handleChanges} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-red-600' required>
                <option value="">
                    Select Time
                </option>
                {
                generateTimeSlot().map((slot, index)=> (
                    <option key={index}>{slot}</option>
                ))
                }
            </select>

            <Users className='w-6 h-6'/><select name='guests' value={formData.guests} onChange={handleChanges} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-red-600' required>
                {[...Array(10).keys().map(i => (
                    <option key={i + 1} value={i + 1}>{i + 1 } Guest(s)</option>
                ))]}
            </select>

            <button type='submit' className='w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700'>Book Now</button>
        </form>
    </div>
  )
}

export default ReservationForm