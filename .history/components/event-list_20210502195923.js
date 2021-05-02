const EventList = (props) => {
    const { items } = props;
    return (
        { items.map(event => <EventItem />) }
    )
}

export default EventList
