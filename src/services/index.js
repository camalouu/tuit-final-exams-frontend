import axios from "axios"

const baseUrl = 'http://localhost:5555'

const getSubjecNames = async () => {
    const url = `${baseUrl}/subjects`
    const { data: subjects } = await axios.get(url)

   // console.log("SUBJECT NAMES:", subjects);
    return subjects
}

const addQuestion = async (subject, questionFields) => {
    const url = `${baseUrl}/questions/${subject}`
    const { data: addedQuestion } = await axios.post(url, questionFields)

   // console.log("ADDED QUESTION:", addedQuestion)

    return addedQuestion
}

const getQuestions = async (subject, number) => {
    const url = `${baseUrl}/questions/${subject}?number=${number}`
    const { data: questions } = await axios.get(url)

    //console.log("RANDOM QUESTIONS: ", questions)

    return questions
}

const getCheckedAnswers = async (subject, answers) => {
    const url = `${baseUrl}/answers/${subject}`
    const { data: checkedAnswers } = await axios.post(url, { answers })

    //console.log("CHECKED ANSWERS: ", checkedAnswers)

    return checkedAnswers.checked
}

export default {
    getSubjecNames,
    addQuestion,
    getQuestions,
    getCheckedAnswers
}
