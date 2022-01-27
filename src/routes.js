import AddQuestion from './components/AddQuestion.vue'
import AddQuestionForm from './components/AddQuestionForm.vue'
import AnswerQuestionForm from './components/AnswerQuestionForm.vue'
import AnswerQuestion from './components/AnswerQuestion.vue'
import Home from './components/Home.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/addQuestions',
        component: AddQuestion
    },
    {
        path: '/answerQuestions',
        component: AnswerQuestion
    },
    {
        path: '/answerQuestions/:subject',
        component: AnswerQuestionForm
    },
    {
        path: '/addQuestions/:subject',
        component: AddQuestionForm
    }
]

export default routes
