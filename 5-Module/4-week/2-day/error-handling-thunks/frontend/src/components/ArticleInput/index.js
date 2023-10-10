import { useState } from "react";
import { useDispatch } from "react-redux";
import { writeArticleThunk } from "../../store/articleReducer";
import "./ArticleInput.css";

const ArticleInput = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [errors, setErrors] = useState([]);

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newArticle = {
            title,
            body,
            imageUrl,
        };

        const res = await dispatch(writeArticleThunk(newArticle));

        if (res.errors) {
            setErrors(res.errors);
        } else {
            reset();
            setErrors([]);
        }
    };

    const reset = () => {
        setTitle("");
        setImageUrl("");
        setBody("");
    };

    return (
        <div className="inputBox">
            <h1>Create Article</h1>
            <form onSubmit={handleSubmit}>
                {errors.map((el) => (
                    <div style={{ color: "red" }}>{el}</div>
                ))}
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                    name="title"
                />
                <input
                    type="text"
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                    placeholder="Image URL"
                    name="imageUrl"
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    name="body"
                    placeholder="Add your entry"
                    rows="10"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ArticleInput;
