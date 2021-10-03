<template>
  <div>
    <h2>{{ recepten[selected].naam }}</h2>
    <ul>
      <li v-for='n in recepten[selected].ingredienten' :key='n'>
        <p>{{ n.naam }}</p>
      </li>
    </ul>
    <p>Kooktijd: {{ recepten[selected].kooktijd }} minuten</p>
    <p>{{ recepten[selected].opmerkingen }}</p>
  </div>
</template>

<script lang='js'>
import axios from 'axios';

export default {
  name: 'Recept',
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    const result = {
      recepten: [
        {
          id: 0,
          naam: 'patat',
          ingredienten: [{ id: 1, naam: 'aap' },
            { id: 2, naam: 'noot' },
            { id: 3, naam: 'mies' }],
        }],
      selected: 0,
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
        .get('/recepten')
        .then((res) => {
          this.recepten = res.data;
          this.selected = this.randomize_recipe();
        })
        .catch((error) => {
          document.write(error);
        });
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    randomize_recipe() {
      return Math.floor(Math.random() * this.recepten.length);
    },
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    update_selected() {
      this.selected = this.randomize_recipe();
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
