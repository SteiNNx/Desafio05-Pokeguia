<template>
  <div class="container-detais">
    <img :src="detallePokemon.imagen" alt="imagen pokemon" />
    <h1>Habilidades</h1>
    <section class="container-habilidades">
      <div v-for="(habilidad, index) in detallePokemon.habilidades" :key="index">
        <p>{{ habilidad.ability.name }}</p>
      </div>
    </section>
    <h1>Movimientos</h1>
    <section class="container-movimientos">
      <div v-for="(movimientos, index) in detallePokemon.movimientos" :key="index">
        <p>{{ movimientos.move.name }}</p>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "PokeDetails",
  props: {
    detallePokemon: {},
  },
};
</script>
<style scoped>
.container-detais {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  height: 20rem;
  width: 20rem;
  object-fit: cover;
}

.container-habilidades {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

p {
  margin: 0.2rem;
  padding: 0.2rem;
  background-color: brown;
  color: white;
  font-weight: 600;
}

.container-movimientos {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}
</style>
