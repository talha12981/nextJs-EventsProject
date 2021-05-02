const EventList = (props) => {
    const { items } = props;
    return (
        <ul>
            { items.map(event => <li><EventItem /></li>)}
        </ul>
    )
}

export default EventList
