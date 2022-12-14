function Cat() {
    this.saySomething = () => {
       alert("mew");
    };
  }
  
  function Person(name, lastName, age) {
    this.name = name,
    this.lastName = lastName,
    this.age = age,
    this.friends = [];
    this.getFullName = () => {
      return this.name + " " + this.lastName
    };
  }
  
  const person1 = new Person("Joe", "Jaspers", 55);
  const person2 = new Person("Mike", "Jackson", 66);
  
  const cat1 = new Cat();
  
  cat1.saySomething();