<template>
  <div id="Results">
    <h3 class="text-success">Finished</h3>
    <h3 class="text-info">
      Total {{ numberOfCorrectAnswers }} correct answers from
      {{ questions.length }}
    </h3>
    <b-list-group>
      <b-list-group-item
        v-for="(questionObj, idx) in questions"
        :key="idx"
        class="mb-5 text-primary"
      >
        <h4 class="text-secondary">Question:</h4>
        <p>{{ questionObj.question }}</p>
        <hr />
        <h4 class="text-secondary">Your answer:</h4>
        <p>{{ questionObj.answers[userResults[questionObj._id]] }}</p>
        <hr />
        <h4 class="text-secondary">Correct answer:</h4>
        <p>{{ questionObj.answers[questionObj.correct] }}</p>
        <hr />
        <div v-if="userResults[questionObj._id] === questionObj.correct">
          <h3 class="text-success">CORRECT!</h3>
        </div>
        <div v-else>
          <h3 class="text-danger">NOT CORRECT!</h3>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "Results",
  props: {
    questions: [],
    userResults: {},
  },
  computed: {
    numberOfCorrectAnswers() {
      return this.questions.reduce(
        (n, q) => (this.userResults[q._id] === q.correct ? ++n : n),
        0
      );
    },
  },
};
</script>

<style>
</style>