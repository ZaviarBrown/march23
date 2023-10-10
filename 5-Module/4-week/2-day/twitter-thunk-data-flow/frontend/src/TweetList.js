import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTweets } from "./store/tweet";

const TweetList = () => {
    console.log(
        "--------------------------------------------------------------------"
    );
    console.log(
        `
Our component has rerendered!
The newest tweets are being shown to the user.

However, because we're rerendering the entire component, useSelector has to run again as well.\n
useSelector runs under 2 conditions:
    1. The component is re/rendering.
    2. The redux store has been updated.

We've already triggered the rerender for condition #2, and are now seeing condition #1 in action.

So, the console.log below is duplicated, the redux store has not actually updated a 2nd time.
`
    );

    const dispatch = useDispatch();
    const tweetList = useSelector((state) => {
        const tweetArr = Object.values(state.tweet);
        const newestTweet = tweetArr.at(-1);
        if (newestTweet && newestTweet.stepNumber) {
            console.log(
                "--------------------------------------------------------------------"
            );
            console.log(
                `Step #${newestTweet.stepNumber}: Redux has updated the application's state! \nNow rerendering to update the component...`
            );
        }

        return tweetArr;
    });

    useEffect(() => {
        dispatch(getAllTweets());
    }, [dispatch]);

    return (
        <>
            <h1>Tweet List</h1>
            {tweetList?.map(({ id, message }) => (
                <p key={id}>{message}</p>
            ))}
        </>
    );
};

export default TweetList;
