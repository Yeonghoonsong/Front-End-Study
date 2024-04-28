function validUserNames(usernames) {
    // your code here
    return usernames.filter(str => {
        return str.length < 10;
    })
}

// function validUserNames(usernames) {
//     // your code here
//     usernames.filter(str => {
//         return str.length < 10;
//     })
// }
// 처음에 이렇게 썼음, 근데 return을 빼먹음..


