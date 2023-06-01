// Implement the SocialNetwork class here
class SocialNetwork {
    constructor() {
        this.users = {};
        this.follows = {};
        this.currentID = 0;
    }

    addUser(name) {
        this.currentID++;

        const newUser = { id: this.currentID, name };
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
        // Look through all follows
        // If they follow me, add to set
        const peopleWhoFollowMe = new Set();

        for (const id in this.follows) {
            if (Number(id) !== userID) {
                const currFollowers = this.getFollows(id);

                if (currFollowers.has(Number(userID))) {
                    peopleWhoFollowMe.add(Number(id));
                }
            }
        }

        return peopleWhoFollowMe;
    }

    //! Not monstrous, just good!
    // getFollowers(userID) {
    //     let followers = new Set();

    //     for (const user in this.follows) {
    //         if (this.follows[user].has(userID)) {
    //             followers.add(Number(user));
    //         }
    //     }

    //     return followers;
    // }

    //! Also good!
    // getFollowers(userID) {
    //     let followers = new Set();
    //     for (let val in this.follows) {
    //         if (this.follows[val].has(userID)) {
    //             followers.add(Number(val));
    //         }
    //     }
    //     return followers;
    // }

    getRecommendedFollows(userID, degrees) {
        // We start with me
        // Look at every user I follow
        // Every user that THEY follow, I should be recommended to follow
        const queue = [[userID]];
        const visited = new Set();
        const recToFollow = [];
        visited.add(userID);

        while (queue.length) {
            const path = queue.shift();
            const currentID = path.at(-1);

            // The first value in each path is me, so should be ignored
            // The second value in each path is someone I follow, so should be ignored
            if (path.length > degrees + 2) return recToFollow;
            if (path.length > 2) recToFollow.push(currentID);

            const neighbors = this.follows[currentID];

            neighbors.forEach((newID) => {
                if (!visited.has(newID)) {
                    visited.add(newID);
                    queue.push([...path, newID]);
                }
            });
        }

        return recToFollow;
    }
}

module.exports = SocialNetwork;
