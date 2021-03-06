import Link from 'next/link'
const EventItem = (props) => {
    const { title, image, date, location, id } = props;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const formattedAddress = location.replace(', ', '\n');
    return (
        <li>
            <img src={'/' + image} alt={title} />
            <div>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <Link href='/'>Explore Event</Link>
            </div>
        </li>
    )
}

export default EventItem
