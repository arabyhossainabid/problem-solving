// Problem 1

function formatValue(value: string | number | boolean): string | number | boolean {

  if (typeof value === "string") {
    return value.toUpperCase();
  };

  if(typeof value === "number"){
    return value * 10;
  };

  if(typeof value === "boolean"){
    return !value;
  };
  return value;
};


// Problem 2

function getLength (value:string | number[]){

  if(typeof value === "string"){

    return value.length;
  };
  if(Array.isArray (value)){

    return value.length;
  };
};


// Problem 3

class Person {
  name:string;
  age:number;

  constructor (name:string, age:number){
    this.name = name;
    this.age = age;
  }

  getDetails(){
    return `'name: ${this.name} age:${this.age}'`;
  }
}



// Problem 4

interface Item {
    title: string;
    rating: number;
}
function filterByRating(items: Item[]) {
    const filter = items.filter(item => item.rating >= 4);
    return filter;
}


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

       result[result.length] = arr1[i];
    }
  }
  for(let i = 0; i < arr2.length; i++){

    if(!exists(result, arr2[i])){

       result[result.length] = arr2[i];
    }
  }
    return result;
};


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

