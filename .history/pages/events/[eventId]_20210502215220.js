import { useRouter } from 'next/router'
const EventPage = () => {
    const router = useRouter();
    const eventId = router.query.eventId;
    return (
        <div>
            <h1>The Event Page</h1>
        </div>
    )
}

export default EventPage