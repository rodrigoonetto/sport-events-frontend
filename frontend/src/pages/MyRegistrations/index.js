import React, {useState, useEffect} from 'react'
import moment from 'moment'
import api from '../../services/api'

export default function MyRegistrations(){
    const[myEvents, setMyEvents] = useState([])
    const user = localStorage.getItem('user')

    useEffect(()=>{
        getMyEvents()

    },[])
    const getMyEvents = async ()=>{

        try {
            const response = await api.get('/registration', {headers:{user}})
            console.log(response.data)
            setMyEvents(response.data)
            
        } catch (error) {
            
        }

    }

    return(
           <ul className="events">
               {myEvents.map(event =>(
                   <li key={event._id}>
                       <div>Title: {event.eventTitle}</div>
                       <div className="event-details">
                            <span>Event Date: {moment(event.eventDate).format('l')}</span>
                           <span>Event Price: ${parseFloat(event.eventPrice).toFixed(2)}</span>
                           <span>User Email: {event.userEmail}</span>
                           <span>Status: {event.approved}</span>
                       </div>
                   </li>
               ))}

           </ul>
        )
}
