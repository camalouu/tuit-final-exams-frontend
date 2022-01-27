<template>
  <div id="AnswerQuestionForm">
    {{ route }}
  </div>
</template>

<script>
export default {
  name: "AnswerQuestionForm",
  data() {
    return {
      route: this.$route.params.subject,
    };
  },
};
</script>