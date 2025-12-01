import { CalendarClock, Calendar, Mail, MapPin, Phone, Plane, Radio, User, Users, Star, Coffee, Wifi, Utensils } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const backendUrl = 'http://localhost:4000'

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(backendUrl + '/api/reservations/create', formData)
            toast.success("You have successfully reserved your Fly Emirates Business Class Lounge")

            setFormData({name:"", email:"", phone:"", destination:"", airline:"", airport:"", date:"", time:"", guests:"1",})
        } catch (error) {
            console.log("Error making reservation")
            
        }
    }


    // The time to pick when booking logic
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
    <div className='min-h-screen bg-white'>
      {/* Hero Section */}
      <div className='relative h-96 bg-red-600'>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white z-10'>
          <h1 className='text-6xl font-bold mb-4 tracking-wide'>Emirates</h1>
          <p className='text-2xl font-light mb-2'>Business Class Lounge</p>
          <p className='text-lg opacity-90'>Experience luxury before you fly</p>
        </div>
        
      </div>

      {/* What the Business lounge Offers Section nb:it does not work its just for design*/}
      <div className='max-w-7xl mx-auto px-4 py-16'>
        <h2 className='text-4xl font-bold text-center text-gray-800 mb-12'>Lounge Amenities</h2>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mb-16'>
          <div className='text-center p-6 hover:shadow-lg transition-shadow rounded-lg'>
            <div className='bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Utensils className='w-10 h-10 text-red-600'/>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Gourmet Dining</h3>
            <p className='text-gray-600'>International cuisine and fine wines</p>
          </div>
          <div className='text-center p-6 hover:shadow-lg transition-shadow rounded-lg'>
            <div className='bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Wifi className='w-10 h-10 text-red-600'/>
            </div>
            <h3 className='text-xl font-semibold mb-2'>High-Speed WiFi</h3>
            <p className='text-gray-600'>Stay connected with complimentary internet</p>
          </div>
          <div className='text-center p-6 hover:shadow-lg transition-shadow rounded-lg'>
            <div className='bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Coffee className='w-10 h-10 text-red-600'/>
            </div>
            <h3 className='text-xl font-semibold mb-2'>Premium Bar</h3>
            <p className='text-gray-600'>Signature cocktails and refreshments</p>
          </div>
          <div className='text-center p-6 hover:shadow-lg transition-shadow rounded-lg'>
            <div className='bg-red-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Star className='w-10 h-10 text-red-600'/>
            </div>
            <h3 className='text-xl font-semibold mb-2'>VIP Service</h3>
            <p className='text-gray-600'>Dedicated staff and concierge</p>
          </div>
        </div>

        {/* This is Reservation Form Section */}
        <div className='bg--gray-50 py-16 px-4 rounded-3xl'>
          <h2 className='text-4xl font-bold text-center text-gray-800 mb-4'>Reserve Your Experience</h2>
          <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>Book your spot in our exclusive business lounge and enjoy world-class amenities before your flight</p>
          
          <div className='flex justify-center items-center'>
            <div className='bg-white p-8 rounded-2xl shadow-2xl w-full max-w-2xl border-t-4 border-red-600'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {/* The Name */}
                <div className='relative'>
                  <User className='w-5 h-5 absolute left-3 top-3.5 text-red-600'/>
                  <input name='name' value={formData.name} onChange={handleChanges} type="text" placeholder='Full Name' className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors' required />
                </div>
                {/* The email */}
                <div className='relative'>
                  <Mail className='w-5 h-5 absolute left-3 top-3.5 text-red-600'/>
                  <input name='email' value={formData.email} onChange={handleChanges} type="email" placeholder='Email Address' className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors' required />
                </div>
                {/* the number */}
                <div className='relative'>
                  <Phone className='w-5 h-5 absolute left-3 top-3.5 text-red-600'/>
                  <input name='phone' value={formData.phone} onChange={handleChanges} type="tel" placeholder='Phone Number' className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors' required/>
                </div>
                {/* the destination */}
                <div className='relative'>
                  <MapPin className='w-5 h-5 absolute left-3 top-3.5 text-red-600'/>
                  <input name='destination' value={formData.destination} onChange={handleChanges} type="text" placeholder='Destination' className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors' required />
                </div>
                {/* the airline */}
                <div className='relative'>
                  <Plane className='w-5 h-5 absolute left-3 top-3.5 text-red-600'/>
                  <input name='airline' value={formData.airline} onChange={handleChanges} type="text" placeholder='Airline' className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors' required/>
                </div>
                {/* the airport */}
                <div className='relative'>
                  <Radio className='w-5 h-5 absolute left-3 top-3.5 text-red-600'/>
                  <input name='airport' value={formData.airport} onChange={handleChanges} type="text" placeholder='Airport' className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors' required />
                </div>
                {/* the calender */}
                <div className='relative'>
                  <Calendar className='w-5 h-5 absolute left-3 top-3.5 text-red-600'/>
                  <input name='date' value={formData.date} onChange={handleChanges} type="date" className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors' required />
                </div>
                {/* the time */}
                <div className='relative'>
                  <CalendarClock className='w-5 h-5 absolute left-3 top-3.5 text-red-600'/>
                  <select name='time' value={formData.time} onChange={handleChanges} className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors appearance-none bg-white' required>
                    <option value="">Select Time</option>
                    {generateTimeSlot().map((slot, index)=> (
                      <option key={index}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div className='relative md:col-span-2'>
                  <Users className='w-5 h-5 absolute left-3 top-3.5 text-red-600'/>
                  <select name='guests' value={formData.guests} onChange={handleChanges} className='w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none transition-colors appearance-none bg-white' required>
                    {[...Array(10).keys()].map(i => (
                      <option key={i + 1} value={i + 1}>{i + 1} Guest(s)</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* The submit button */}
              <button onClick={handleSubmit} className='w-full mt-8 bg-red-600 text-white py-4 px-6 rounded-lg hover:bg-red-700 font-semibold text-lg shadow-lg transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5'>
                Reserve Your Lounge Access
              </button>
              <p className='text-center text-xs text-gray-500 mt-6'>By booking, you agree to Emirates terms and conditions</p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default ReservationForm