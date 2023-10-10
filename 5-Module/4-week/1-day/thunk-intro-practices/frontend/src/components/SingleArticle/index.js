import { useParams } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = ({ articles }) => {
    const { id } = useParams();
    // const singleArticle = articles.find((article) => article.id === Number(id));
    const singleArticle = articles[id];

    if (!singleArticle) return <h1>Loading...</h1>;

    return (
        <div className="singleArticle">
            <h1>{singleArticle.title}</h1>
            <img src={singleArticle.imageUrl} alt={singleArticle.title} />
            <p>{singleArticle.body}</p>
        </div>
    );
};

export default SingleArticle;
