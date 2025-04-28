import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const EpisodeForm = () => {
    const location = useLocation()
    const navigate = useNavigate();

    const { category, genre } = location.state || {};

    if (!category || !genre) {
        return (
            <div>
                Error: Category and genre information missing. Please select a category.
            </div>
        );
    }

    const baseSchema = yup.object().shape({
        title: yup.string().required("Title is required."),
        genre: yup.string().required("Genre is required."),
        stars: yup
            .number()
            .typeError("Stars must be a number.")
            .min(0, "Minimum stars is 0.")
            .max(5, "Maximum stars is 5."),
        notes: yup.string(),
    });

    let validationSchema;
    if (category === "tv" || category === "anime") {
        validationSchema = baseSchema.shape({
            platform: yup.string(),
            lastEpisode: yup
                .number()
                .typeError("Last Episode must be a number.")
                .required("Last Episode is required.")
                .min(1, "Episode number must be at least 1.")
        });
    } else if ( category === "movie" || category === "movies") {
        validationSchema = baseSchema.shape({
            status: yup.string().required("Status is required."),
            timestamp: yup.string().when("status", {
                is: (value) => value === "partial",
                then: yup.string().required("Timestamp is required for partial status."),
                otherwise: yup.string().notRequired(),
            }),
        });
    } else {
        validationSchema = baseSchema;
    }

    const defaultValues = {
        title: "",
        genre: genre,
        stars: 0,
        notes: "",
        platform: "",
        lastEpisode: "",
        status: "",
        timestamp: "",
    };

    const {
        register, 
        handleSubmit,
        watch,
        formState: { errors },        
    } = useForm({
        defaultValues,
        resolver: yupResolver(validationSchema),
    });

    const selectedStatus = watch("status");

    const onSubmit = (data) => {
        console.log("Submitted data: ", data);
        navigate("/success", {state: data });
    }

    const titleLabel = 
        category === "movie" || category === "movies" 
        ? "Movie Title"
        : category === "anime"
        ? "Anime Title"
        : "Show title";
        
    return (
        <div className="episode-form-container">
            <h2>Add {titleLabel} Detail</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="episode-form">
                <div className="form-group">
                    <label htmlFor="name">{titleLabel}:</label>
                    <input 
                        id="name"
                        type="text"
                        placeholder={`Enter ${titleLabel}`}
                        {...register("name")} 
                    />
                    {errors.name && <p className="error">{errors.genre.message}</p>}
                </div>

                <div className="form-group">
                    <label htmlFor="notes">Notes:</label>
                    <textarea 
                        id="notes"
                        placeholder="Enter your notes here"
                        {...register("notes")}
                    />
                    {errors.notes && <p className="error">{errors.notes.message}</p> }
                </div>

                {(category === "tv" || category === "anime") && (
                    <>
                        <div className="form-group">
                            <label htmlFor="platform">Platform:</label>
                            <input 
                                id="platform"
                                type="text"
                                placeholder="Enter platform" 
                                {...register("platform")}
                            />
                            {errors.lastEpisode && <p className="error">{errors.lastEpisode.message}</p> }                            
                        </div>
                    </>
                )}

                {(category === "movie" || category === "movies") && (
                    <>
                        <div className="form-group">
                            <label>Status:</label>
                            <div className="radio-group">
                                <label>
                                    <input type="radio" value="will watch" {...register("status")} />
                                    Will Watch
                                </label>
                                <label>
                                    <input type="radio" value="watched" {...register("status")} />
                                    Watched
                                </label>
                                <label>
                                    <input type="radio" value="partial" {...register("status")} />
                                    Partial
                                </label>
                            </div>
                            {errors.status && <p className="error">{errors.status.message}</p>}
                        </div>
                        {selectedStatus === "partial" && (
                            <div className="form-group">
                                <label htmlFor="timestamp">Timestamp:</label>
                                <input 
                                    id="timestamp"
                                    type="text"
                                    placeholder="Enter timestamp (e.g., 01:45:30)"
                                    {...register('timestamp')}
                                />
                                {errors.timestamp && <p className="error">{errors.timestamp.message}</p> }
                            </div>
                        )}
                    </>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EpisodeForm;