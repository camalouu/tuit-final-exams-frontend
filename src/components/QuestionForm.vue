<template>
  <div id="QuestionForm">
    <form @submit.prevent="onSubmit">
      <p>Please add question and answers for {{ subject }}</p>

      Question:<br />
      <textarea  rows="5" cols="50" v-model="question" /> <br />

      A: <input v-model="answers[0]" />
      <input type="radio" id="a" value="0" v-model.number="correct" />
      <label>{{ correct == 0 ? "correct" : "" }}</label>

      <br />

      B: <input v-model="answers[1]" />
      <input type="radio" id="b" value="1" v-model.number="correct" />
      <label>{{ correct == 1 ? "correct" : "" }}</label>

      <br />

      C: <input v-model="answers[2]" />
      <input type="radio" id="c" value="2" v-model.number="correct" />
      <label>{{ correct == 2 ? "correct" : "" }}</label>

      <br />

      D: <input v-model="answers[3]" />
      <input type="radio" id="d" value="3" v-model.number="correct" />
      <label>{{ correct == 3 ? "correct" : "" }}</label>

      <br />

      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import api from "../services";

export default {
  name: "QuestionForm",
  data() {
    return {
      subject: this.$route.params.subject,
      question: "",
      answers: new Array(4),
      correct: 0,
    };
  },
  methods: {
    async onSubmit() {
      await api.addQuestion(this.subject, {
        question: this.question,
        answers: this.answers,
        correct: this.correct,
      });

      this.question = "";
      this.answers.fill("");
    },
  },
};
</script>

<style>
input {
  margin: 1em;
  
}
button {
  width: 20em;
}
</style>