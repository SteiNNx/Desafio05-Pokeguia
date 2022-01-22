<template>
  <div id="app">
    <img class="poke_logo" src="@/assets/pokemon_logo.png" alt="pokemon logo" />
    <form>
      <label for="txt_nombre">Nombre: </label>
      <input type="text" name="txt_nombre" id="txt_nombre" v-model="nombrePokemon" />
      <button type="submit" @click.prevent="searchPokemon">Buscar</button>
    </form>
    <PokeDetails :detallePokemon="detallePokemon" />
  </div>
</template>

<script>
import PokeDetails from "@/components/PokeDetails";
import { getPokemonDetailByName } from "@/api/FetchPokeApi";
export default {
  name: "App",
  components: {
    PokeDetails,
  },
  data() {
    return {
      nombrePokemon: "",
      detallePokemon: {},
    };
  },
  methods: {
    async searchPokemon() {
      const { nombrePokemon } = this;
      this.detallePokemon = await getPokemonDetailByName(nombrePokemon);
    },
  },
  async created() {
    this.detallePokemon = await getPokemonDetailByName("pikachu");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.poke_logo {
  width: 25%;
  -o-object-fit: cover;
  object-fit: cover;
  height: 25%;
}
</style>
