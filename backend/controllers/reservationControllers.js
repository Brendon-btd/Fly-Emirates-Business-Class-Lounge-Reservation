import Reservation from '../models/reservation.js'


const createReservation = async (req,res) => {
    try{
        const{name, email, phone, destination, airline, airport, date, time, guests} = req.body

        if(!name || !email || !phone || !destination || !airline || !airport || !date || !time || !guests){
            return res.json({error: "All fields are required"})
        }

        const newReservation = new Reservation ({name, email, phone, destination, airline, airport, date, time, guests});
        await newReservation.save()

        res.json({message: "Your Fly Emirates Business Class Lounge has been successfully made", reservation: newReservation})
    } catch (error) {
        res.json({error: "Error creating your Fly Emirates Business Class Lounge reservation"})

    }

}

const getAllReservation = async (req,res)=> {
    try {
        const reservations = await Reservation.find()
        res.json(reservations)
    } catch (error) {
        res.json({error:"Error fetching lounge reservations"})
    }
    

}

const deleteReservation = async (req,res)=> {
     try {
        const { id } = req.params;
        await Reservation.findByIdAndDelete(id);
        res.json({success:true, message: "Your Fly Emirates Business Class Lounge reservation has been Deleted"})
     } catch (error) {
        res.json({error:"Error Deleting The Lounge Reservation "})
     }

}

export {createReservation, getAllReservation, deleteReservation}