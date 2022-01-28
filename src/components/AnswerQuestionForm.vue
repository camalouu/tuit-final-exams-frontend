<template>
  <div id="AnswerQuestionForm">
    <br />
    <p class="text-secondary">Subject: {{ subject }}</p>
    <div v-if="finished">
      <Results :questions="questions" :userResults="answersToBackend" />
    </div>
    <div v-else>
      <h3 class="text-danger">
        {{ questions[currentQuestionIndex].question }}
      </h3>
      <hr />
      <b-list-group>
        <b-list-group-item
          v-for="(answer, idx) in questions[currentQuestionIndex].answers"
          :key="idx"
          button
          :pressed="false"
          variant="primary"
          class="p-3"
          @click="addToAnswers(questions[currentQuestionIndex], idx)"
        >
          {{ answer }}
        </b-list-group-item>
      </b-list-group>
      <b-button class="mt-3 w-50" @click="currentQuestionIndex++">
        Next
      </b-button>
    </div>
  </div>
</template>

<script>
import api from "../services";
import Results from "./Results.vue";
export default {
  name: "AnswerQuestionForm",
  components: {
    Results,
  },
  data() {
    return {
      subject: this.$route.params.subject,
      questions: [],
      currentQuestionIndex: 0,
      answersToBackend: {},
    };
  },
  methods: {
    addToAnswers(question, answerIndex) {
      this.answersToBackend[question._id] = answerIndex;
    },
  },
  computed: {
    finished() {
      return this.currentQuestionIndex === this.questions.length;
    },
  },
  async mounted() {
    this.questions = await api.getQuestions(this.subject, 25);
  },
};
</script>