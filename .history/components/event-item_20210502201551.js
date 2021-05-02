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
            <img src='' alt='' />
            <div>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <div>
                        <time>DATE</time>
                    </div>
                    <div>
                        <address>ADDRESS</address>
                    </div>
                </div>
                <Link href='/'>Explore Event</Link>
            </div>
        </li>
    )
}

export default EventItem
