import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
const EventPage = () => {
    const router = useRouter();
    const eventId = router.query.eventId;
    const event = getEventById();
    return (
        <div>
            <h1>The Event Page</h1>
        </div>
    )
}

export default EventPage
