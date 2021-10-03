<template>
  <div>
    <h2>{{ recept.naam }}</h2>
    <ul>
      <li v-for='n in recept.ingredienten' :key='n'>
        <p>{{ n.naam }}</p>
      </li>
    </ul>

    <p>Kooktijd: {{ recept.kooktijd }} minuten</p>
    <p>{{ recept.opmerkingen }}</p>
  </div>
</template>

<script lang='ts'>
import axios from 'axios';

export default {
  name: 'Recept',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    const result = {
      recept:
        {
          id: 0,
          naam: 'patat',
          opmerkingen: 'blah',
          kooktijd: 10,
          ingredienten: [
            { id: 1, naam: 'aap' },
            { id: 2, naam: 'noot' },
            { id: 3, naam: 'mies' }],
        },
      columns: [
        {
          field: 'id',
          label: 'Id',
          width: '20',
          numeric: true,
        },
        {
          field: 'naam',
          label: 'Naam',
        },
      ],
    };
    return result;
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    getMessage() {
      return axios
        .get('/randomrecept')
        .then((res) => {
          this.recept = res.data;
        })
        .catch((error) => {
          document.write(error);
        });
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
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
