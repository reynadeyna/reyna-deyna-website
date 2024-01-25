import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../firebase.config";

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      alert("All fields must be filled out.");
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
    <div className="text-white">
      <div>
        <h1>Ask me anything</h1>
        <h6>
          Your email remains confidential and visible solely to authorized
          Angelware
        </h6>
      </div>

      <form
        onSubmit={handleSubmit}
        className="question-form flex flex-col items-center mt-7"
      >
        <input
          className="border rounded-full border-f1f5f8 py-2 shadow-drop placeholder-font2 text-center text-font2 hover:border-bafff9aa hover:shadow-00ffeaaa mb-4"
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border rounded-full border-f1f5f8 py-2 shadow-drop placeholder-font2 text-center text-font2 hover:border-bafff9aa hover:shadow-00ffeaaa mb-4"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border rounded-full border-f1f5f8 py-2 shadow-drop placeholder-font2 text-center text-font2 hover:border-bafff9aa hover:shadow-00ffeaaa mb-8"
          type="text"
          value={message}
          placeholder="Message"
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="rounded-md border border-transparent p-3 text-base cursor-crosshair transition duration-250 shadow-drop hover:border-00ffea13 hover:shadow-00ffeaaa"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contacts;
