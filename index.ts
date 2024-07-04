import inquirer from "inquirer";

class Student{
     name: string
     constructor(n:string){
     this.name=n
}

}

class Person{
     students:Student[]=[];

     addStudent(obj:Student){
          this.students.push(obj);
     }
}

const persons = new Person()

const programStart = async(persons:Person)=>{
     let continueLoop = true;

do{
     console.log("Welcome guest");

     const ans = await inquirer.prompt({
          type: "list",
          message: "App kis se bat kerna pasand kren gy... ",
          name: "select",
          choices: ["khud se:Self", "student", "Exit"],

     });

     if(ans.select == "khud se:Self"){
          console.log("hello me khud se bat ker raha hun")
          console.log("aj ka din acha hy!..")
     } 
     if(ans.select == "student"){
          const ans = await inquirer.prompt({
               type: "input",
               message: "ap ko kis student se bat krni hai?",
               name: "student",
     });
const student = persons.students.find(val => val.name == ans.student);

     if(!student){
          const name = new Student(ans.student)
          persons.addStudent(name);

          console.log(`hello i am ${name.name}, ar me apni favourite hun`);
          console.log(persons.students);
     }else{
          console.log(`Hello i am ${student.name}, or me thek hun......`);
          console.log(persons.students);
     }
     }else if (ans.select == "Exit"){
          console.log("Exiting the program...");
          continueLoop = false; //set the flag
     }
} while (continueLoop );

};

programStart(persons);