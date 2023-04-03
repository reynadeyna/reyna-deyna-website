import { useState, useEffect } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { isValidElement, createElement } from 'react';
import db from '../../firebase.config';


const Questions = () => {
  const [questions, setQuestions] = useState([]);

  const getDataFromFirestore = async () => {
    const querySnapshot = await getDocs(collection(db, "contacts"));
    const tempQuestion = querySnapshot.docs.map((doc) => (
      {
        id: doc.id,
        ...doc.data()
      }));
    // console.log(tempQuestion)
    setQuestions(tempQuestion)
  }

  useEffect(() => {
    getDataFromFirestore()
  }, [])
  console.log(questions)


  return (
    <>
      <div className='questions-container'>

        {questions.map(question => {
          return (

            <div key={questions.id}>
              <ul>
                <li>
                  Question
                  <p>By {question.client_name}</p>
                  <p>{question.client_message}</p>
                </li>
                <li>
                  Answer
                </li>
              </ul>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Questions