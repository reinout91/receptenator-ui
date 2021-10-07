<template>
  <div>
    <h2>{{ naam }}</h2>
    <ul>
      <li v-for='n in ingredienten' :key='n'>
        <p>{{ n.naam }}</p>
      </li>
    </ul>

    <p>Kooktijd: {{ kooktijd }} minuten</p>
    <p>{{ opmerkingen }}</p>
  </div>
</template>

<script lang='ts'>
import axios from 'axios';

declare interface Ingredient {
  id : number,
  naam: string
}

declare interface Recept {
  id: number,
  naam: string,
  opmerkingen: string,
  kooktijd: number,
  ingredienten: Ingredient [];
}

export default {
  name: 'Recept',
  data() :Recept {
    const recept = {
      id: 0,
      naam: '',
      opmerkingen: '',
      kooktijd: 0,
      ingredienten: [],
    };
    return recept;
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getMessage() :Recept {
      return axios
        .get('/randomrecept')
        .then((res) => {
          this.id = res.data.id;
          this.naam = res.data.naam;
          this.opmerkingen = res.data.opmerkingen;
          this.kooktijd = res.data.kooktijd;
          this.ingredienten = res.data.ingredienten;
        })
        .catch((error) => {
          document.write(error);
        });
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

  },

  mounted() :void {
    this.getMessage();
  },

};
</script>

<style lang='scss'>
p {
  color: grey;
}
ul {
  list-style-type: none;
}
</style>
