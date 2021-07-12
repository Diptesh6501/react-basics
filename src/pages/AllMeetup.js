import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';
function AllMeetupPage() {
  const [isLoading, setLoading] = useState(true);
  const [loadedMeetUps, setLoadedMeetups] = useState([]);


  useEffect(() => {
    fetch('https://react-started-d6b3d-default-rtdb.firebaseio.com/meetups.json').then((res) => {
      return res.json()
    }).then((data) => {
      const meetups = [];
      for(const key in data){
         const meetup = {
           id: key,
           ...data[key]
         }
         meetups.push(meetup)
      }
      setLoading(false);
      setLoadedMeetups(meetups);
    })
  }, []);

  if (isLoading) {
    return (
      <p>Loading</p>
    )
  }
  return (
    <section>
      <h1>All Meet ups</h1>
      <MeetupList meetups={loadedMeetUps} />
    </section>

  )
}

export default AllMeetupPage;