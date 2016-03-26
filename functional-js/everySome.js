// Return a function that takes a list of valid users, and returns a function that returns true if all of the supplied users exist in the original list of users.
// You only need to check that the ids match.

const checkUsersValid = (goodUsers) => {
  return allUsersValid = (submittedUsers) => {
    // take each submitted User in turn and make sure all return true
    return submittedUsers.every((submittedUser)=>{
// take each goodUser in turn and return true as soon as match is made
      return goodUsers.some((goodUser)=>submittedUser.id === goodUser.id)
    })
  }
}

module.exports = checkUsersValid


// var goodUsers = [
//    { id: 1 },
//    { id: 2 },
//    { id: 3 }
//  ]
//
//  testAllValid([
//    { id: 2 },
//    { id: 1 }
//  ])
