<template>
  <div class="home">
    <o-button @click="update">Receptenator generator</o-button>
    <HelloWorld/>
    <Recept ref = "myRecept"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Recept from '@/components/Recept.vue';

@Options({
  components: {
    HelloWorld,
    Recept,
  },
  methods: {
    update() {
      this.$refs.myRecept.getMessage();
    },

  },
})
export default class Home extends Vue {

}
</script>
