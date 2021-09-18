<template>
  <div class="home">
    <HelloWorld/>
    <Button/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Button from '@/components/Button.vue';

@Options({
  components: {
    HelloWorld,
    Button,
  },
})
export default class Home extends Vue {}
</script>
