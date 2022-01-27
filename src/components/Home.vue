<template>
  <div id="Home">
    <h1>Tuit Finals</h1>
    <b-button variant="outline-info" class="w-75" to="/addQuestions">
      Add questions
    </b-button>
    <br />
    <br />
    <b-button variant="outline-info" class="w-75" to="/answerQuestions">
      Answer questions
    </b-button>
  </div>
</template>

<script>
export default { name: "Home" };
</script>