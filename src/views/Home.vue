<template>
  <div class="home">
    <HelloWorld/>
    <Button/>
    <Recept/>
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
    Button,
    Recept,
  },
})
export default class Home extends Vue {}
</script>
