<template>
  <div class="container">
    <input v-model="nombrePokemon" placeholder="Escribe un pokemon" />
    <button @click="buscarPokemon">Buscar</button>
    <div v-if="datosPokemon">
      <h2>{{ datosPokemon.name }}</h2>
      <img :src="datosPokemon.sprites.front_default" alt="pokemon" />
      <h3>Habilidades:</h3>
      <ul>
        <li v-for="(hab, index) in datosPokemon.abilities" :key="index">
          {{ hab.ability.name }}
        </li>
      </ul>
      <p>
        <strong>Tipo:</strong>
        <span v-for="(tipo, index) in datosPokemon.types" :key="index">
          {{ tipo.type.name
          }}<span v-if="index < datosPokemon.types.length - 1">, </span>
        </span>
      </p>

      <p><strong>Altura:</strong> {{ datosPokemon.height }} cm</p>

      <h3>Estadísticas:</h3>
      <ul>
        <li v-for="(stat, index) in datosPokemon.stats" :key="index">
          {{ stat.stat.name }}: {{ stat.base_stat }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { consultarPokemonFachada } from "@/clients/Cliente.js";
export default {
  data() {
    return {
      nombrePokemon: "",
      datosPokemon: null,
    };
  },
  methods: {
    async buscarPokemon() {
      try {
        const respuesta = await consultarPokemonFachada(
          this.nombrePokemon.toLowerCase()
        );
        console.log(respuesta); // ✅ Aquí ves la respuesta en consola
        this.datosPokemon = respuesta;
      } catch (error) {
        console.error("❌ Error al consultar el Pokémon:", error);
      }
    },
  },
};
</script>

<style scoped >
.container {
  padding: 20px;
  background-color: #6a5acd;
  color: white;
  text-align: center;
  font-family: Arial, sans-serif;
}

input,
button {
  padding: 5px;
  font-size: 16px;
}

h2 {
  text-transform: capitalize;
}

img {
  width: 150px;
  margin: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

strong {
  color: #ffdd57;
}
</style>