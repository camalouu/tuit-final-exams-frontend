<template>
  <div id="addQuestions">
    <h1>Add questions</h1>
    <ul>
      <li v-for="subject in subjects" :key="subject">
        <router-link :to="/addQuestions/ + subject">
          {{ subject }}
        </router-link>
        <router-view />
      </li>
    </ul>
    <input type="text" v-model="newSubject" />
    <button @click="addSubject">Add new subject</button>
  </div>
</template>

<script>
import api from "../services";

export default {
  name: "addQuestions",

  data() {
    return {
      subjects: [],
      newSubject: "",
    };
  },
  methods: {
    addSubject() {
      if (this.subjects.indexOf(this.newSubject) === -1 && this.newSubject) {
        this.subjects.push(this.newSubject);
      }
      this.newSubject = "";
    },
  },
  async mounted() {
    this.subjects = await api.getSubjecNames();
  },
};
</script>


<style>
ul {
  margin: auto;
  width: 50%;
}
li {
  list-style: square;
  margin: 15px;
  height: 3em;
  border: 3px solid black;
}

li:hover {
  background: rgba(7, 196, 79, 0.466);
}
</style>