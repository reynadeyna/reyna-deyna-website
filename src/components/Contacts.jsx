import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase.config";
import { InputBase } from "@mui/material";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // console.log(name, email, message)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("empty fields");
      return;
    }
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        client_name: name,
        client_email: email,
        client_message: message,
        created: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.log(error);
    }

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
        <div>
            <h2>Ask me anything</h2>
        </div>

      <form onSubmit={handleSubmit}>
        <InputBase
          justifyContent="center"
          type="text"
          value={name}
          placeholder="Enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <InputBase
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputBase
          type="text"
          value={message}
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="question-form">
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default Contacts;
