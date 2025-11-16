// Problem 1
function formatValue(value: string | number | boolean) {

  if (typeof value === "string") {
    return value.toUpperCase();
  };

  if(typeof value === "number"){
    return value * 10;
  };

  if(typeof value === "boolean"){
    return !value;
  };
}

console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));

// Problem 2

function getLength (value:string | any[]){
  if(typeof value === "string"){
    return value.length
  };
  if(Array.isArray (value)){
    return value.length
  };
}

console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));

// Problem 3

class Person {
  name:string;
  age:number;

  constructor (name:string, age:number){
    this.name = name;
    this.age = age;
  }


  getDetails(){
    return `name: ${this.name} age:${this.age}`;
  }
}

const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());


// Problem 4

interface Item {
    title: string;
    rating: number;
}
function filterByRating(items: Item[]) {
    const filter = items.filter(item => item.rating >= 4);
    return filter;
}

const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));

// Problem 5

interface User{
  id: number;
  name:string;
  email: string;
  isActive:boolean;
}

function filterActiveUsers (users: User[]){
  const filterUser = users.filter(users => users.isActive === true)
  return filterUser;
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));

// Problem 6

interface Book {
  title:string;
  author:string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails (book: Book){
  const Available = book.isAvailable ? "Yes" : "No"
  console.log(`title:${book.title} author:${book.author} publishedYear:${book.publishedYear} isAvailable:${Available}`);
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);

// Problem 7

function getUniqueValues <T>(arr1: T[], arr2: T[]){

  const result: T[] = [];

  function exists (array:T[], value:T){
    for(let i = 0; i < array.length; i++){
      if(array[i] === value){
        return true;
      }
    }
    return false;
  }

  for(let i = 0; i < arr1.length; i ++){
    if(!exists(result,arr1[i])){
      result.push(arr1[i]);
    }
  }
  for(let i = 0; i < arr2.length; i++){
    if(!exists(result, arr2[i])){
      result.push(arr2[i]);
    }
  }
  return result;
};

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));

// Problem 8

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice (products: Product[]){
  return products.map(product =>{

    const total = product.price * product.quantity;

    const discount = product.discount ? (total * product.discount) / 100 : 0;

    return total - discount;
  })
  .reduce((acc, curr) => acc + curr, 0);
};

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
