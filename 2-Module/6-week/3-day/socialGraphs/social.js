// Implement the SocialNetwork class here
class SocialNetwork {
    constructor() {
        this.users = {};
        this.follows = {};
        this.currentID = 0;
    }

    addUser(name) {
        this.currentID++;

        const newUser = {
            id: this.currentID,
            name,
        };

        const whoNewUserFollows = new Set();

        this.users[this.currentID] = newUser;
        this.follows[this.currentID] = whoNewUserFollows;

        return this.currentID;
    }

    getUser(userID) {
        const user = this.users[userID];

        return user || null;
    }

    follow(userID1, userID2) {
        const userCheck = this.users[userID1] && this.users[userID2];

        if (!userCheck) return false;

        this.follows[userID1].add(userID2);
        return true;
    }

    getFollows(userID) {
        return this.follows[userID];
    }

    getFollowers(userID) {
        const followsTheUser = new Set();

        for (const id in this.follows) {
            const currFollowers = this.getFollows(id);

            if (currFollowers.has(userID)) {
                followsTheUser.add(Number(id));
            }
        }

        return followsTheUser;
    }

    //!
    // getFollowers(userID) {
    //     const followers = new Set();
    //     for (let currUser in this.users) {
    //         if (this.follows[currUser].has(userID)) {
    //             // followers.add(Number(currUser))
    //             followers.add(+currUser);
    //         }
    //     }
    //     return followers;
    // }

    //!
    // getFollowers(userID) {
    //     let followers = new Set();

    //     for (const key in this.follows) {
    //         if (this.follows[key].has(userID)) {
    //             followers.add(Number(key));
    //         }
    //     }
    //     return followers;

    //     //1: {2, 3}
    //     //2: {1, 3}
    //     //3: {1, 2}
    // }

    getRecommendedFollows(userID, degrees) {
        const queue = [[userID]];
        const visited = new Set([userID]);
        const recFollows = [];

        while (queue.length) {
            const path = queue.shift();
            const currId = path.at(-1);

            // Every path begins with userID, so we must skip that
            // The second value of every path is someone I already follow
            // SO, we need to ignore the first TWO users in each path

            if (path.length > degrees + 2) return recFollows;
            if (path.length > 2) recFollows.push(currId);

            const nextFollowers = this.getFollows(currId);

            nextFollowers.forEach((id) => {
                if (!visited.has(id)) {
                    visited.add(id);
                    queue.push([...path, id]);
                }
            });
        }

        return recFollows;
    }
}

module.exports = SocialNetwork;
