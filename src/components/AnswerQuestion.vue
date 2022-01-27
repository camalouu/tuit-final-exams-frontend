<template>
  <div id="Subjects">
    <h1>Answer Questions</h1>
    <b-list-group>
      <b-list-group-item
        :to="/answerQuestions/ + subject"
        v-for="(subject, idx) in subjects"
        :key="idx"
        class="p-3"
      >
        {{ subject }}
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: "AnswerQuestion",
  props: {
    subjects: Array,
  },
};
</script>