import Link from 'next/link'
const EventItem = (props) => {
    return (
        <li>
            <img src='' alt='' />
            <div>
                <div>
                    <h2>
                        TITLE
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
