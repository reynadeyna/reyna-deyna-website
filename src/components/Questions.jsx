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
    <div class="flex justify-center pb-40 px-5">
      <div class="w-full md:w-4/5 lg:w-3/4 xl:w-2/3">
        <div class="flex flex-col items-center justify-center text-center mt-12 gap-16">
          {questions.map((question) => {
            return (
              <div className="widget">
                <div className="question-form">
                  <div key={questions.id}>
                    <h3>{question.client_name}:</h3>
                    <h3>{question.client_message}</h3>
                    <h2>・.・゜・。.・・.・゜・。.・</h2>
                    <h3>Reya Proxy:</h3>
                    <h3>{question.my_answer}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Questions;
