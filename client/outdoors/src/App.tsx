import React, { useEffect, useState } from "react";
import "./App.css";
import LoginForm from "./features/users/LoginForm";
import axios from 'axios';
import { Header, List } from "semantic-ui-react";

function App() {
  const [trails, setTrail] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/outdoors').then(response => {
      console.log(response);     
      setTrail(response.data);
    })
  }, []);
  return (
    <div className="App">
      <Header as='h2' icon='tree' content='Outdoors' />
      <List>
        {trails.map( (trail: any) => (
          <List.Item key={trail.id}>
            {trail.name}
          </List.Item>
        ))}
      </List>
    </div>
  );
    
  
}

export default App;
