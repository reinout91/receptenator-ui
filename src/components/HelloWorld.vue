<template><div><p>{{ msg }}</p></div></template>

<script>
import axios from 'axios';

export default {
  name: 'Ping',
  data() {
    return { msg: '' };
  },
  methods: {
    getMessage() {
      axios
        .get('/')
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          document.write(error);
        });
    },
  },
  created() {
    this.getMessage();
  },
};
</script>
