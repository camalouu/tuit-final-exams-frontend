<template>
  <div id="QuestionForm">
    <b-form @submit.prevent="onSubmit">
      <h3 class="text-secondary">
        Please add question and answers for
        <span class="text-primary">{{ subject }}</span> <br />
      </h3>
      <b-textarea v-model="question" placeholder="Question"/>
      <b-input-group
        v-for="(option, idx) in options"
        :key="idx"
        :prepend="option.text"
        class="mt-2"
      >
        <b-input v-model="answers[idx]" />
      </b-input-group>
      <b-form-radio-group
        v-model.number="correct"
        :options="options"
        buttons
        button-variant="success"
        class="mt-2"
      ></b-form-radio-group>
      <b-button class="m-3 w-75" variant="primary" type="submit">Add</b-button>
    </b-form>
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
      options: [
        { text: "A", value: 0 },
        { text: "B", value: 1 },
        { text: "C", value: 2 },
        { text: "D", value: 3 },
      ],
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