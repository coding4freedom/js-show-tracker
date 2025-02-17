
const genreGroup = document.querySelector('.modal-genre-group');
import "../components/GenreList.css"


const GenreList = ({genres, id}) => {

    const selectedGenres = genres.find(genre => genre.id === id)?.genres || [];
    return (
        <>
            {selectedGenres.map((genreName) => (
                <li key={genreName}>
                    <button className="genre-btn" onClick={something}>{genreName}</button>
                </li>
            ))}
        </>
    )
}

export default GenreList;