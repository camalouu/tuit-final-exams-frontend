import axios from "axios"

const baseUrl = 'http://localhost:5555'

const getSubjecNames = async () => {
    const url = `${baseUrl}/subjects`
    const { data: subjects } = await axios.get(url)

    console.log(subjects);
    return subjects
}

const addQuestion = async (subject, questionFields) => {
    const url = `${baseUrl}/questions/${subject}`
    const { data: addedQuestion } = await axios.post(url, questionFields)
    
    console.log(addedQuestion)

    return addedQuestion
}

export default {
    getSubjecNames,
    addQuestion
}
