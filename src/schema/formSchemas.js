
import * as Yup from 'yup';

// TV Schema
const tvSchema = Yup.object().shape({
    id: Yup.string().oneOf(['tv'], "Invalid form type").required(),
    showTitle: Yup.string().required("Show title is requried"),
    episode: Yup.number().min(0).max(4).required("Episode number requried"),
    stars: Yup.number().min(0).max(5).optional(),
    platform: Yup.string().optional(),
    genre: Yup.string().optional(),
    notes: Yup.string().optional(),
});

// Movie Schema
const movieSchema = Yup.object().shape({
    id: Yup.string().oneOf(['movie'], "Invalid form type").required(),
    movieTitle: Yup.string().required("Movie title is required"),
    releaseDate: Yup.date().required("Release date is required"),
    stars: Yup.number().min(0).max(5).optional(),
    genre: Yup.string().optional(),
    notes: Yup.string().optional(),
});

// Anime Schema
const animeSchema = Yup.object().shape({
    id: Yup.string().oneOf(['anime'], "Invalid form type").required(),
    animeTitle: Yup.string().required("Anime title is required"),
    episode: Yup.number().min(0).max(4).required("Episode number requried"),
    stars: Yup.number().min(0).max(5).optional(),
    platform: Yup.string().optional(),
    genre: Yup.string().optional(),
    notes: Yup.string().optional(),
});

// Single Schema Object
export default formSchemas = {
    tv: tvSchema,
    movie: movieSchema,
    anime: animeSchema,
};

// export default formSchema = [
//     {
//     id: "", // Unique Identifier
//     showTitle: "", // Required field
//     episode: "", // Required field
//     stars: "", // Optional
//     plateform: "", // Optional
//     notes: "", // Optional 
// },
// ];