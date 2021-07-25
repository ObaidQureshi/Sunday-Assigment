console.log("Answer no 1")
var itemsArray = [
    {name:"juice",price:"50", quantity:"3"},
    {name:"cookie",price:"30", quantity:"9"},
    {name:"shirt",price:"880", quantity:"1"},
    {name:"pen",price:"100", quantity:"2"}];

    let a = itemsArray[0].price * itemsArray[0].quantity
    let b = itemsArray[1].price * itemsArray[1].quantity
    let c = itemsArray[2].price * itemsArray[2].quantity
    let d = itemsArray[3].price * itemsArray[3].quantity
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(d)
    console.log("Total price")
    console.log(a+b+c+d)

    //Qustion No 2
   
   console.log("answer no 2")
    let personalInfo = {
    name : "obaid",
    email : "abcde@gmail.com",
    password : "12345678",
    age : "22",
    gender : "male",
    city : "karachi",
    country : "pakistan",
   }
   console.log(personalInfo.hasOwnProperty("age"))
   console.log(personalInfo.hasOwnProperty("country"))
   console.log(personalInfo.hasOwnProperty("firstName"))
   console.log(personalInfo.hasOwnProperty("lastName"))

   //Question No 3
   
   
   function Person(first, last, age, eye) {
    this.firstName = obaid;
    this.lastName = qureshi;
    this.age = 22;
    this.eyeColor = black;
  }
  console.log(Person)

  //Question No 4
  
  function Checkpopulation(name,gender,address,education,profession){
this.name = name;
this.gender = gender;
this.address = address;
this.education = education;
this.profession = profession;
  }
  const Peoples = new Checkpopulation(
    "obaid qureshi",
    "male",
    "khudadad colony",
    "intermediate",
    "nothing",
      );
      console.log(Peoples);