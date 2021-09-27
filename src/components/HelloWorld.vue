<template>
<div>
  <h1>{{ msg }}</h1>
</div></template>

<script>
import axios from 'axios';

export default {
  name: 'Titel',
  data() {
    const result = { msg: '' };
    return result;
  },
  methods: {
    getMessage() {
      return axios
        .get('/')
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          document.write(error);
        });
    },
  },
  mounted() {
    this.getMessage();
  },
};
</script>

<style lang="scss">
p {
  color: red;
}

</style>
