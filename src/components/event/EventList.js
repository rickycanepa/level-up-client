import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { getEvents } from "../../managers/EventManager"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

    return (
        <article className="events">
            <button className="btn btn-2 icon-create"
                onClick={() => {
                    navigate({ pathname: "/events/new" })
                }}
            >Register New Event</button>
            {
                events.map(event => {
                    return <section key={`event--${event.id}`} className="event">
                        <div className="event__date">Date of Event: {event.date_of_event }</div>
                        <div className="event__startTime">Start Time: {event.start_time}</div>
                        <div className="event__location">Location: {event.location}</div>
                    </section>
                })
            }
        </article>
    )
}