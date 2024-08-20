import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupsList from "../components/meetups/MeetupList";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>You have no favorite meetups yet. Start adding some!</p>
    } else {
        content = <MeetupsList meetups={favoritesCtx.favorites} />
    }
    return <section>
            <h1>My Favorite Meetups</h1>
            {content}
        </section>
}

export default FavoritesPage;