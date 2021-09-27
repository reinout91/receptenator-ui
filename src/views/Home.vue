<template>
  <div class="home">
    <HelloWorld/>
    <Recept ref = "myRecept"/>
    <Button @click="update"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from '@/components/Button.vue';
import Recept from '@/components/Recept.vue';

@Options({
  components: {
    HelloWorld,
    Recept,
    Button,
  },
  methods: {
    update() {
      console.log('update blah');
      this.$refs.myRecept.update_selected();
    },

  },
})
export default class Home extends Vue {

}
</script>
