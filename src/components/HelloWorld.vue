<template>
<div>
  <p>{{ msg }}</p>
</div></template>

<script lang="ts">
import axios from 'axios';

export default {
  name: 'Ping',
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
