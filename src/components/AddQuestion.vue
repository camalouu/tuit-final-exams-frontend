<template>
  <div id="Subjects">
    <h1>Add questions</h1>
    <b-list-group>
      <b-list-group-item
        :to="/addQuestions/ + subject"
        v-for="(subject, idx) in subjects"
        :key="idx"
        class="p-3"
      >
        {{ subject }}
      </b-list-group-item>
    </b-list-group>
    <b-input class="mt-2 mb-2" type="text" v-model="newSubject" />
    <b-button class="w-75" variant="outline-primary" @click="addSubject">
      Add new subject
    </b-button>
  </div>
</template>

<script>
export default {
  name: "AnswerQuestion",
  props: {
    subjects: Array,
  },

  data() {
    return {
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
};
</script>