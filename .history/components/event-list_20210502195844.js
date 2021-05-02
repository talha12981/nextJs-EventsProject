const EventList = ({ items: [] }) => {
    return (
        { items.map(event => <EventItem />) }
    )
}

export default EventList
