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
    })

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
        <>Episode</>
    )
}

export default EpisodeForm;