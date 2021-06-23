import AlbumComponent from "../components/Album.component";
import CoverComponent from "../components/Cover.component";
import Navigation from "../components/Navigation.component";

function Home() {
    return (
        <div>
            <Navigation/>
            <CoverComponent/>
            <AlbumComponent/>
        </div>
    );
}

export default Home;
