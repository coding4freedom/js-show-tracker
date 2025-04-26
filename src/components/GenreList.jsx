
import { Link } from "react-router-dom";
import "../components/GenreList.css"


const GenreList = ({genres, id, toggle}) => {    

    const selectedGenres = genres.find(genre => genre.id === id)?.genres || [];
    return (
        <>
            {selectedGenres.map((genreName) => (
                <li key={genreName}>
                    <Link to="/episode" state={{ category: id, genre: genreName}}>
                        <button className="genre-btn" onClick={toggle} >
                            {genreName}
                        </button>
                    </Link>
                </li>
            ))}
        </>
    )
}

export default GenreList;