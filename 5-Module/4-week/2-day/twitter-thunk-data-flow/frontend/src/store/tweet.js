// constant to avoid debugging typos
const GET_ALL_TWEETS = "tweet/getAllTweets";

const ADD_TWEET = "tweet/addTweet";

//regular action creator
const loadTweets = (tweets) => {
    return {
        type: GET_ALL_TWEETS,
        tweets,
    };
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
    const response = await fetch("/api/tweets");

    if (response.ok) {
        const data = await response.json();

        dispatch(loadTweets(data));
        return data;
    }
};

const addTweet = (tweet) => {
    console.log(
        "--------------------------------------------------------------------"
    );
    console.log(
        `Step #${tweet.stepNumber}: Now in the addTweet action creator! \nTime to dispatch to send this data to our reducer...`
    );

    tweet.stepNumber += 1;

    return {
        type: ADD_TWEET,
        tweet,
    };
};

export const createTweetThunk = (message, stepNumber) => async (dispatch) => {
    console.log(
        "--------------------------------------------------------------------"
    );
    console.log(
        `Step #${stepNumber}: Made it to the thunk! \nSending this tweet to the backend...`
    );
    console.log(
        "--------------------------------------------------------------------"
    );
    console.log("(That means you need to go look at your backend terminal!)");

    message.stepNumber = stepNumber + 1;

    const response = await fetch(`/api/tweets`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message),
    });

    if (response.ok) {
        const tweet = await response.json();

        console.log(
            "--------------------------------------------------------------------"
        );
        console.log(
            `Step #${tweet.stepNumber}: Made it back to the thunk! \nTime to run the action creator...`
        );

        tweet.stepNumber += 1;
        dispatch(addTweet(tweet));
        return tweet;
    }
};

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TWEETS: {
            const newState = {};
            action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
            return newState;
        }

        case ADD_TWEET: {
            console.log(
                "--------------------------------------------------------------------"
            );
            console.log(
                `Step #${action.tweet.stepNumber}: Finally in the reducer! \nTime to update our redux state...`
            );

            action.tweet.stepNumber += 1;

            const newState = { ...state };
            newState[action.tweet.id] = action.tweet;
            return newState;
        }

        default:
            return state;
    }
};

export default tweetsReducer;
