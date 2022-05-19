// instantiate http
const http = new libraryHTTP;

// Get Posts
http.get('https://jsonplaceholder.typicode.com/posts', 
function(err, posts) {
    if(err) {
        console.log(err)
    } else {
        console.log(posts);
    }
});


// Get single post

// http.get('https://jsonplaceholder.typicode.com/posts/1', 
// function(err, post) {
//     if(err) {
//     console.log(err);
//     } else {
//     console.log(post);
//     }

// });

//Create Data
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//             console.log(err);
//             } else {
//             console.log(post);
//             }
// });

// Update post
// http.put('https://jsonplaceholder.typicode.com/posts/5',
// data, function(err, post) {
//     if(err) {
//     console.log(err);
//     } else {
//     console.log(post);
//     }
// });

// Delete Posts
// http.delete('https://jsonplaceholder.typicode.com/posts/1', // the url comes from the API documentation
// function(err, response) {
//     if(err) {
//     console.log(err);
//     } else {
//     console.log(response);
//     }

// });