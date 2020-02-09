# Async JS

Async JS is the term to handle function which takes a lot of time or unknown time. In that case we use async Js. Async codes in Js handle by Browser, when js encounter this kind of actions it transfer it to web apis handler of browser and after broswer solve or get response from it send its callback function to call stack of JS(technically firstly to callbacks queue)

In order to give the function to browser to handle the response after did his job with requesting, we can give it the callback. But after several requesting which depends of each-other, this way syntactically get out of hand with many callbacks inside of each-other. That is why we avoid to use this and replace it with th promise syntax. Promise is the term that, we have promissed that we will get the response, even if error occur.

When we come to promises, there are 2 important things about promises, first one is how to create promise or how to create function which return promise and second how to consume it.
When we create promise, it will has the property called PromiseStatus: and if there is not refect and result it, value of PromiseStatus will be pending.

When we create promise we pass two funct as a parametrs, resolve function and reject function. And based on condition we other pass our data to resolve or reject.

But consuming promises are much more popular. We mainly consume promise when we make http request, there are there main way of making http request, XMLHttpRequests, fecth and using third party lib axios. Axios just makes our life easier.

###### fetch

Let's start with fetch, unfortunately fetch is not supported in IE.
We can use fetch to request url. when we use fecth to fetch data from url we get response data in reponse.body which is in readstream format not in json, but we can use response.json() method to convert it to js object. this method is also async that is why it returns promise. we can chain it to absorb what we want. when we use fetch, if we want function to return promise we can return promise manually by use method:

```
return Promise.resolve()
```

###### Axios

Axios is third party lib to allow us to fetch data easily. In this method we don't have to use reponse.json, the data which we get will be converted JS-friendly format. So with axios we don't have to use other chains to to convert to json.

###### Async await function

This way is just syntactic sugar to async function. if the operation is asynchrone we can put await keyword in front of it and the next code won't work before getting response. we can only use await word in front of async word.

- if our requests don't depend on each-other, we don't have to wait all of them one by one. we can fetch them at once not one by one.

```
async function getAll(){
   const promise1 = axios.get('url');
   const promise2 = axios.get('url');
   const response1 = await promise;
   const response2 = await promise;
}
```

Although it may look almost the same with awaiting directly, but they are actually different. In this case, we wait for promises.We can also do the same thing with Promise.all() function. This is the function accept promises and return the reponse in array.
The same code with this method below:

```
async function getAll(){
   const promise1 = axios.get('url');
   const promise2 = axios.get('url');
   const [response1,response2] = await Promise.all([promise1,promise2]);
```
