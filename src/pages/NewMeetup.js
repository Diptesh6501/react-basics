import { useHistory } from 'react-router-dom';
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage(){
    const history = useHistory();

    function addMeetupHandler(meetupData){
       fetch(
           'https://react-started-d6b3d-default-rtdb.firebaseio.com/meetups.json',
           {
               method: 'POST',
               body: JSON.stringify(meetupData),
               header: {
                   'Content-Type': 'application/json'
               }
           }
           ).then(() => {
               history.replace('/');
           })
    }
    return (
        <div>
        <div>New Meet up Page</div>
        <NewMeetupForm addMeetup={addMeetupHandler}/>
        </div>
    )
}

export default NewMeetupPage;