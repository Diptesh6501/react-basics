import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
function MeetupItem(props) {
    const favCtx = useContext(FavoritesContext);
    const isItemFavorite = favCtx.itemIsFavorite(props.id);

    function toogleFavStatusHandler() {
        if (isItemFavorite) {
            favCtx.removeFavorite(props.id);
        } else {
            favCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.addrss
            })
        }
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title}></img>
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.title}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions} >
                    <button onClick={toogleFavStatusHandler}>{isItemFavorite ? 'Remove From Favorites' : 'To Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;