//Прототип
// const pivnaya_brigada = {
//     name: 'Daniil',
//     age: 19,
//     getinfo: function(){
//         return (`Name: ${this.name}, age:${this.age}`);
//     }
// };

// this, bind, call, apply

// function hello() {
//     console.log('Hello', this);
// }

// const person = {
//     name: 'Daniil',
//     age: 19,
//     sayHello: hello,
//     sayHelloDocument: hello.bind(document),
//     getInfo: function(job, phone){
//         console.group(`${this.name} info:`);
//         console.log(`Name is ${this.name}`);
//         console.log(`Age is ${this.age}`);
//         console.log(`Job is ${job}`);
//         console.log(`Phone is ${phone}`);
//         console.groupEnd();
//     }
// };

// const Lena = {
//     name: 'Lena',
//     age: 19
// }
// person.getInfo.bind(Lena, 'Frontend', '8-900-553-35-55')();
// person.getInfo.call(Lena, 'Frontend', '8-900-553-35-55');
// person.getInfo.apply(Lena, ['Frontend', '8-900-553-35-55'])

// const arr = [1,2,3,4,5];
// Array.prototype.multBy = function(n){
//     return this.map(function(i){
//         return i*n;
//     })
// }
// console.log(arr.multBy(52))

//Promise

// console.log('Request Data')

// const p = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('Preparing Data...')
//         const backendData = {
//             server: 'aws',
//             port: 5000,
//             status: 'processing'
//         }
//         resolve(backendData)
//     },2000)
// })
// p.then(data=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             data.modified = true;
//             resolve(data)
//         },2000)
//     })
// }).then(cliendata=>{
//     console.log('Client Data', cliendata);
//     cliendata.fromPromise = true;
//     return cliendata;
// }).then(data=>{
//     console.log('Modified', data);
// }).catch(err => console.error('Error', err))
// .finally(()=> console.log('Finally Done'))

// const sleep = ms => {
// return new Promise(resolve => setTimeout(()=> resolve(), ms));
// }
// sleep(2000).then(()=>console.log('After 2 sec'))
// sleep(3000).then(()=>console.log('After 3 sec'))

// Promise.all([sleep(2000), sleep(5000)]).then(()=>{
//     console.log('All promises resolved')
// })

// Promise.race([sleep(2000), sleep(5000)]).then(()=>{
//     console.log('Race promises resolved')
// })

//Объект

// const person = Object.create({
//     sayHello: function(){
//         console.log('Hello', this.name);
//     }
// }, {
//     name: {
//         value: 'Daniil',
//         enumerable: true,  //для цикла
//         writable: true, //для изменений значений в объекте
//         configurable: true, //для изменения ключей объекта
//     },
//     birthYear: {
//         value: 2006,
//         enumerable: true,
//     },
//     age: {
//         get(){
//             return new Date().getFullYear() - this.birthYear
//         },
//         set(value){
//             document.body.style.background = value;
            
//         }
//     }
// })

// for(key in person){
//     if(person.hasOwnProperty(key)){
//         console.log('Key', key, person[key]);
//     }
// }

//Классы
// class Animal {
//   static type = 'Animal';
//   constructor(options){
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTail = options.hasTail;
//   }
//   voice(){
//     console.log(`${this.name} makes a sound.`);
//   }
// }
// const animal = new Animal({
//   name: "Cat",
//   age: 3,
//   hasTail: true
// });
// class Cat extends Animal {
//   static type = 'Cat';
//   constructor(options){
//     super(options);
//     this.color = options.color;
//   }
//   voice(){
//     super.voice(); // Call parent method
//     console.log(`${this.name} meows with color ${this.color}.`);
//   }
//   get ageInfo(){
//     return `Cat's age is ${this.age * 7}.`;
//   }
//   set ageInfo(newAge){
//     return this.age = newAge;
//   }
// };

// const cat = new Cat({
//   name: "Tom",
//   age: 5,
//   hasTail: true,
//   color: 'Nigga'
// })

// class Component {
//   constructor(selector){
//     this.$el = document.querySelector(selector);
//   }

//   hide(){
//     this.$el.style.display = 'none';
//   }
//   show(){
//     this.$el.style.display = 'block';
//   }
// }

// class Box extends Component {
//   constructor(options){
//     super(options.selector);

//     this.$el.style.width = this.$el.style.height = options.size + 'px'; 
//     this.$el.style.background = options.color;
//   }
// }

// const box = new Box({
//   selector: '#box',
//   size: 100,
//   color: 'blue'
// });

// class Circle extends Box {
//   constructor(options){
//     super(options);
//     this.$el.style.borderRadius = '50%';
//   }
// }

// const circle = new Circle({
//   selector: '#circle',
//   size: 90,
//   color:'red'
// })

// const delay = ms =>{
//   return new Promise(resolve => setTimeout(()=>resolve(), ms));
// }

// const url = 'https://jsonplaceholder.typicode.com/todos';

// function FetchTodos(){
//   console.log('FetchTodo started...');
//   return delay(2000).then(()=>{
//     return fetch(url);
//   }).then(response=>response.json());
// }
// FetchTodos().then(data => {console.log('FetchTodo', data)}).catch(err => {console.error(err)});

// async function FetchTodo(){
//   try {
//     console.log('FetchTodo started...')
//     await delay(2000)
//     const response = await fetch(url)
//     const data = await response.json()
//     console.log('Data: ', data)
//   }catch(error){
//     console.error(error);
//   }
// }
// FetchTodo();

//Proxy
// const Person = {
//     name: 'Daniil',
//     age: 19,
//     Job: 'Frontend'
//   }
//   const op = new Proxy(Person, {
//     get(target,prop){
//       if(!(prop in target)){
//         return prop.split('_').map(p=>target[p]).join(' ')
//       }
//       return target[prop];
//     },
//     set(target, prop, value){
//       if(prop in target){
//         target[prop] = value;
//       } else{
//         throw new Error(`No such property ${prop}`);
//       }
//     },
//     has(target,prop){
//       return ['name', 'age', 'Job'].includes(prop);
//     },
//     deleteProperty(target, prop){
//       console.log('Deleting...', prop);
//       return delete target[prop];
//     }  
//   });
  
  // const log = text => `Log: ${text}`;
  
  // const fp = new Proxy(log, {
  //   apply(target, thisArg, args){
  //     console.log('Calling fn');
  //     return target.apply(thisArg, args).toUpperCase();
  //   }
  // });
  
  // class Person1 {
  //   constructor(name, age){
  //     this.name = name;
  //     this.age = age;
  //   }
  // }
  // const PersonProxy = new Proxy(Person1,{
  //   construct(target,args){
  //     console.log('Construct...');
  //     return new Proxy(new target(...args),{
  //       get(t,prop){
  //         console.log(`Getting prop ${prop}`);
  //         return t[prop];
  //       }
  //     })
  //   }
  // })
  
  // const p = new PersonProxy('person', 52);

//Примеры Proxy

//wrapper
// const WithDefaultValue = (target, defaulValue = 0) =>{
//   return new Proxy(target, {
//     get: (obj, prop) => (prop in obj ? obj[prop] : defaulValue)
//   })
// }

// const position = WithDefaultValue(
//   {
//     x: 52,
//     y: 25
//   },
//   0
// )

//Hidden properies
// const withHiddenProps = (target, prefix = '_') =>{
//   return new Proxy(target,{
//     has: (obj, prop) => (prop in obj) && (!prop.startsWith(prefix)),
//     ownKeys: obj=> Reflect.ownKeys(obj).filter(p => !p.startsWith(prefix)),
//     get: (obj, prop, receiver) => (prop in receiver) ? obj[prop] : void 0 
//   })
// }

// const data = withHiddenProps({
//   name: 'Daniil',
//   age: 19,
//   _secret: '12345'
// })

//Optimization

// const IndexedArray = new Proxy(Array, {
//   construct(target, [args]) {
//     const index = {};
//     args.forEach(item => (index[item.id] = item))
//     return new Proxy(new target(...args),{
//       get(arr,prop){
//         switch(prop){
//           case 'push' : return item =>{
//             index[item.id] = item
//             arr[prop].call(arr, item)
//           }
//           case 'findById': return id=>index[id]
//           default: return arr[prop]
//         }
//       }
//     })
//   }
// });

// const users = new IndexedArray([
//   { id: 1, name: 'Daniil', age: 19, job: 'Frontend' },
//   { id: 2, name: 'Vladimir', age: 25, job: 'Backend' },
//   { id: 3, name: 'Natalia', age: 30, job: 'Designer' }
// ]);

// console.log(users);

//Генераторы
// function* strGenerator(){
//   yield 'Hello';
//   yield 'World';
// }

// const strIterator = strGenerator();

// function* numGenerator(n=10){
//   for(let i=0; i<n;i++){
//     yield i
//   }
// }

// const numIterator = numGenerator(7);

// const iterator= {
//   [Symbol.iterator](n=10){
//     let i =0;
//     return{
//       next(){
//         if(i<n){
//           return {value: ++i, done: false}
//         } else {
//           return {value: undefined,done: true}
//         }
//       }
//     }
//   }
// }

// for(let num of iterator){
//   console.log(num);
// }

// function* iter(num=10){
//   for(let i=0; i<num;i++){
//     yield i
//   }
// }
// for(let num of iter(6)){
//   console.log(num)
// }

