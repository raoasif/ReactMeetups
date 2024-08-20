import { useState, useEffect} from 'react';

import MeetupsList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-meetups-e3e7b-default-rtdb.firebaseio.com/meetups.json'
        )
        .then(response => {
            return response.json();
        })
        .then(data => {
            const meetups = [];

            for(const key in data) { 
                const meetup = {
                    id: key,
                    ...data[key] // distribute (identical map) the data on the array index
                };

                meetups.push(meetup);
            }

            setIsLoading(false);
            setLoadedMeetups(meetups);
        });

    }, []);    

    if(isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return <section>
        <h1>All Meetups</h1>
        <MeetupsList meetups={loadedMeetups} />
    </section>
}

export default AllMeetupsPage;