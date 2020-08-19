import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

function App() {
  const [appMember, setAppMember] = useState([
      { 
            name: "Sushi", 
            email: "doggo@doggo.com", 
            role: "Dog", 
           
        },
      { 
          name: "Floof Poof", 
          email: "floofpoof@", 
          role: "Doggo Dad", 
          
        },
      { 
          name: "Meow", 
          email: "meow@meow.com", 
          role: "Cat", 
      }
    ]);

  

  return (
    <div className="App">
        {console.log("Meow App: ", appMember)}
        <Form appMember={appMember} setAppMember={setAppMember} />
      
    </div>
  );
}

export default App;