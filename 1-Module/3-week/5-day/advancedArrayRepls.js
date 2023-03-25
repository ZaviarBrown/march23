const friends = [
    {
        name: "Albert",
        yearsOfFriendship: 3
    },
    {
        name: "Angela",
        yearsOfFriendship: 2
    },
    {
        name: "Freddy",
        yearsOfFriendship: 8
    },
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];
//
function friendshipPrinter({name, yearsOfFriendship}){
  console.log(name + ":", yearsOfFriendship, "years")
}
//                  ele, i, arr
friends.forEach(friendshipPrinter)

// let agatha = {
//         name: "Agatha",
//         yearsOfFriendship: 6
//     }
// friendshipPrinter(agatha)

friends["forEach"]((ele)=>console["log"](ele.name+":",ele["yearsOfFriendship"],  "years"))

/*
Should print:
Albert: 3 years
Angela: 2 years
Freddy: 8 years
Agatha: 6 years
*/

const goodFriendsOrNot = friends.map(friend => friend.yearsOfFriendship > 5);
// const goodFriendsOrNot = [];
// friends.forEach(friend => {
// 	if (friend.yearsOfFriendship > 5){
//     	goodFriendsOrNot.push(true)
//     } else {
//     	goodFriendsOrNot.push(false)
//     }
// })

console.log(goodFriendsOrNot);          // [false, false, true, true];

const filteredResult = friends.filter(friend => friend.name[0] === "A" && friend.yearsOfFriendship > 5)

console.log(filteredResult);
/*
Should print:
[
    {
        name: "Agatha",
        yearsOfFriendship: 6
    }
];
*/

const threeVowelFriend = friends.find(friend => {
    // Write your solution here.
    let vowels = "aeiou";
    let vowelCount = 0;
    console.log(friend);
    // return true;
    let {name} = friend;
    console.log(name)
    for (let i = 0 ; i < name.length; i++){
    	let char = name[i];
        console.log(char)
        if (vowels.includes(char.toLowerCase())){
        	console.log(char, "is a vowel!!");
      		vowelCount++;
        }
    }
    if (vowelCount >= 3) return true;
    return false;
});
console.log(threeVowelFriend.name);   

const totalYears = friends.reduce((acc, friend) => {
    // Write your solution here.
  return acc + friend.yearsOfFriendship;
}, 0);
console.log(totalYears); 