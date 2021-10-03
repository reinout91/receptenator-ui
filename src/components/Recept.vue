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

<script lang='js'>
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
          label: 'naam',
        },
      ],
    };
    return result;
  },
  methods: {
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
    update_selected() {
      this.selected = this.getMessage();
    },

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
