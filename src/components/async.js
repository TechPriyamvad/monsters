/* const myPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('I have succeeded');
    },1000)
})

myPromise
.then(value => console.log(value))
 */

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((users) => {
    const firstUser = user[0];
    console.log(firstUser);
    return fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=" + firstUser.id
    );
  })
  .then((response) => response.json())
  .then((posts) => console.log(posts));
