import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "../../firebase.config";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  const getDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    const tempQuestion = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    // console.log(tempQuestion)
    setQuestions(tempQuestion);
  };

  useEffect(() => {
    getDataFromFirestore();
  }, []);
  // console.log(questions)

  return (
    <>
      <div className="widget-container">
      

        {questions.map((question) => {
          return (
            <div className="widget">
              <div className="question-form">
 
                <div key={questions.id}>
                      <h3>{question.client_name}:</h3>
                      <h3>{question.client_message}</h3>
                      <h2>・.・゜・。.・・.・゜・。.・</h2>
                      <h3>Angelware:</h3>
                      <h3>{question.my_answer}</h3>


                      </div>
              </div>

            </div>
          );
        })}
     
      </div>
    </>
  );
};

export default Questions;
