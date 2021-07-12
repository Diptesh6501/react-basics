import MeetupItem from './MeetupItem';
import classes from './MeetupItemList.module.css';
function MeetupList(props){
  return (
      <ul className={classes.list}>
          {props.meetups.map((meetup) =>
               <MeetupItem key={meetup.id}
                  id={meetup.id}
                  item={meetup}
                  image={meetup.imgUrl}
                  title={meetup.title}
                  address={meetup.address}
                  description={meetup.description} />
          )}
      </ul>
  )
}

export default MeetupList;