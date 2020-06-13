var Person = function(firstAndLast) {
  // Complete the method below and implement the others similarly
  let firstName = firstAndLast.match(/^\w+/gi)[0]
  let lastName = firstAndLast.match(/\w+$/gi)[0]
  let fullName = firstName + ' ' + lastName

  this.getFullName = function() {
    return fullName;
  };


  this.getFirstName = function() {
    return firstName
  }

  this.getLastName = function() {
    return lastName
  }

  this.setFirstName = function(name){
    firstName = name
    fullName = name + ' ' + lastName
  }

  this.setLastName = function(name){
    lastName = name
    fullName = firstName + ' ' + name
  }

  this.setFullName = function(firstAndLast){
    fullName = firstAndLast.match(/^\w+/gi)[0] + ' ' + firstAndLast.match(/\w+$/gi)[0]
    firstName = firstAndLast.match(/^\w+/gi)[0]
    lastName = firstAndLast.match(/\w+$/gi)[0]
  }

};
