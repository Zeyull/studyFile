/**
 * Question 2
 */
 var name = 'window'

 function Person (name) {
   this.name = name;
   this.show1 = function () {
     console.log(this.name)
   }
   this.show2 = () => console.log(this.name)
   this.show3 = function () {
     return function () {
       console.log(this.name)
     }
   }
   this.show4 = function () {
     return () => console.log(this.name)
   }
 }
 
 var personA = new Person('personA')
 var personB = new Person('personB')
 
 personA.show1() // A
 personA.show1.call(personB) // B
 
 personA.show2() // A 
 personA.show2.call(personB) // A
 
 personA.show3()() // window
 personA.show3().call(personB) // B
 personA.show3.call(personB)() // window
 
 personA.show4()() // A 
 personA.show4().call(personB) // A
 personA.show4.call(personB)() // B