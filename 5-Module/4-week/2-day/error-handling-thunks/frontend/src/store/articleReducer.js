const LOAD_ARTICLES = "article/loadArticles";
const ADD_ARTICLE = "article/addArticle";

export const loadArticles = (articles) => {
    return {
        type: LOAD_ARTICLES,
        articles,
    };
};

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        article,
    };
};

export const fetchArticlesThunk = () => async (dispatch) => {
    const data = await fetch("/api/articles").then((res) => res.json());

    dispatch(loadArticles(data));
};

export const writeArticleThunk = (payload) => async (dispatch) => {
    const data = await fetch("/api/articles", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    }).then((res) => res.json());

    if (!data.errors) {
        dispatch(addArticle(data));
        return data;
    } else {
        return data;
    }
};

// export const writeArticleThunk = (payload) => async (dispatch) => {
//     const response = await fetch("/api/articles", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(payload),
//     });

//     if (response.ok) {
//         const data = await response.json();
//         dispatch(addArticle(data));
//         return data;
//     } else {
//         const error = await response.json();
//         return error;
//     }
// };

const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            const newEntries = {};

            action.articles.forEach((el) => (newEntries[el.id] = el));

            return { ...state, entries: newEntries };
        case ADD_ARTICLE:
            return {
                ...state,
                entries: {
                    ...state.entries,
                    [action.article.id]: action.article,
                },
            };
        default:
            return state;
    }
};

export default articleReducer;
