/* Practice Assignment 9:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

////////////////////////
// NOTE: Use the API endpoints available at
// https://jsonplaceholder.typicode.com/
// to get the data required in these exercises.
// HINT: Read the documented Resources and Routes.
// Also the guide:
// https://jsonplaceholder.typicode.com/guide/
///////////////////////

// 1) Create a function named "getAllPosts".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
async function getAllPosts(){
    const posts = await
    fetch("https://jsonplaceholder.typicode.com/posts");
        return await posts.json();
}
// 2) Create a function named "getAllUsers".
// Use Fetch with Async/Await to request
// all the posts. The function should
// return all the posts as JSON data.
async function getAllUsers(){
    const users = await fetch(`<https://jsonplaceholder.typicode.com/posts>users?id=${userID}`)
    return await users.json();
}
// 3) Create a function named "getComments".
// This function needs to accept a "postID"
// parameter.
// Use Fetch with Async/Await to request
// all the comments for the postID that
// is passed in as a parameter.
// The function should return all the
// comments for the requested postID
// as JSON data.
async function getComments(postID) {
    const comments = await fetch(`<https://jsonplaceholder.typicode.com/posts>comments?postId=${postID}`);
}
// 4) Create a function named "getUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// the data for the requested user.
// The function should return JSON data.
async function getUser(id) {
    const response = await fetch(`<https://jsonplaceholder.typicode.com>users?id=${userID}`);
    const user = await response.json();
    console.log(user);
    return user;
  }
// 5) Create a function named "getTodosForUser".
// This function needs to accept a "userID"
// parameter.
// Use Fetch with Async/Await to request
// all of the todos for the requested user.
// The function should return JSON data.
const getTodosForUser = async (userId) => {
	const resp = await fetch(`<https://jsonplaceholder.typicode.com>todos?userId=${userID}`);
	const data = await resp.json();
	return data;
};