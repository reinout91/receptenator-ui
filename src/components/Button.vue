<template>
<div id="example-1">
  <button v-on:click="counter += 1">Receptenator generator</button>
</div></template>

<script>

// export default{'example-1', {
//   data: function () {

//   }
// }}
// import axios from 'axios';

export default {
  name: 'example-1',
  data() {
    return {
      count: 0,
    };
  },
};

</script>

<style lang="scss">
p {
  color: red;
}

</style>
