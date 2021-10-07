<template>
<div>
  <h1>{{ msg }}</h1>
</div></template>

<script lang='ts'>
import axios from 'axios';

declare interface Messenger {
  msg: string;
}

export default {
  data() :Messenger {
    return { msg: '' } as Messenger;
  },
  methods: {
    getMessage(): Promise<void> {
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
  mounted() :Promise<void> {
    this.getMessage();
  },
};
</script>

<style lang="scss">
p {
  color: red;
}

</style>
