import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
const EventPage = () => {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById(eventId);
    if (!event) {
        return <p>No event</p>
    }
    return (
        <div>
            <h1>The Event Page</h1>
        </div>
    )
}

export default EventPage
