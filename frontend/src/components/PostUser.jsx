import axios from "axios";
import { useState } from "react";

// Component to create a new user and send it to the backend
const PostUser = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: '',
  });

  // Function to handle form submission and create a new user
  const createUser = async () => {
    await axios
      .post("http://localhost:8000/api/form", 
      user,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
      .then((response) => {
        setUser({      
          name: '',
          age: '',
          email: '',
        });
        console.log(response);
        return alert("User Created: " + `${JSON.stringify(response.data, null, 4)}`);
      })
      .catch((err) => {
        return alert(err);
      });
  };

  // Function to handle form input changes
  const onChangeForm = (e) => {
    if (e.target.name === 'name') {
      setUser({...user, name: e.target.value});
    } else if (e.target.name === 'age') {
      setUser({...user, age: e.target.value});
    } else if (e.target.name === 'email') {
      setUser({...user, email: e.target.value});
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1>Create User</h1>
          <form>
            <div>
              <div>
                <label>Name</label>
                <input 
                  type="text" 
                  value={user.name}
                  onChange={(e) => onChangeForm(e)} 
                  name="name" 
                  id="name" 
                  placeholder="Name" 
                />
              </div>
              <div>
                <label>Age</label>
                <input 
                  type="text" 
                  value={user.age}
                  onChange={(e) => onChangeForm(e)} 
                  name="age" 
                  id="age" 
                  placeholder="Age" 
                />
              </div>
            </div>
            <div>
              <div>
                <label>Email</label>
                <input 
                  type="text" 
                  value={user.email}
                  onChange={(e) => onChangeForm(e)} 
                  name="email" 
                  id="email" 
                  placeholder="Email" 
                />
              </div>
            </div>
            <button type="button" onClick={() => createUser()}>Create</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostUser;
