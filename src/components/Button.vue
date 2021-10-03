<template>
  <div id="example-1">
    <o-button @click="$emit('selected')">Receptenator generator</o-button>
  </div>
</template>

<script>
// export default{'example-1', {
//   data: function () {

//   }
// }}
// import axios from 'axios';

export default {
  name: 'B_Recepten',
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style lang="scss">
</style>
