<template>
<div>
  <h2>{{ recepten[selected].naam }}</h2>
  <ul>
    <li v-for="n in recepten[selected].ingredienten" :key=n><p>{{ n }}</p></li>
  </ul>
  <p>Kooktijd: {{ recepten[selected].kooktijd }} minuten</p>
  <p>{{ recepten[selected].opmerkingen }}</p>

</div></template>

<script lang="js">
import axios from 'axios';

export default {
  name: 'Recept',
  data() {
    const result = { recepten: [{ naam: '' }], selected: 0 };
    return result;
  },
  methods: {
    getMessage() {
      return axios
        .get('/recepten')
        .then((res) => {
          this.recepten = res.data;
        })
        .catch((error) => {
          document.write(error);
        });
    },
    update_selected() {
      console.log('update activated');
      this.selected += 1;
    },
  },
  mounted() {
    this.getMessage();
  },

};
</script>

<style lang="scss">
p {
  color: grey;
}
ul{
  list-style-type: none;
}

</style>
