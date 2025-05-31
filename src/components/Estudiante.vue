<template>
  <div class="container">
    <label for="id_nombre"> Nombre:</label>
    <input
      v-model="nuevoNombre"
      id="id_nombre"
      type="text"
      placeholder="Nombre"
    />

    <label for="id_apellido"> Apellido:</label>
    <input
      v-model="nuevoApellido"
      id="id_apellido"
      type="text"
      placeholder="Apellido"
    />

    <label for="id_edad">Edad:</label>
    <input v-model="nuevaEdad" id="id_edad" type="number" placeholder="Edad" />

    <label for="id_carrera">Carrera:</label>
    <input
      v-model="nuevaCarrera"
      id="id_carrera"
      type="text"
      placeholder="Carrera"
    />

    <label for="id_correo">Correo:</label>
    <input
      v-model="nuevoCorreo"
      id="id_correo"
      type="email"
      placeholder="correo"
    />

    <button v-on:click="agregarEstudiante()">Agregar</button>
    <button v-on:click="obtenerPathVariable()">PathVariable</button>
    <ul>
      <li
        v-for="{ nombre, apellido, edad, carrera, correo } in lista"
        :key="nombre"
      >
        <strong>Nombre:</strong>{{ nombre }}- <strong>Apellido:</strong
        >{{ apellido }}- <strong> Edad:</strong>{{ edad }}-
        <strong>Carrera:</strong> {{ carrera }} <strong>-Correo:</strong
        >{{ correo }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "",
      nuevoApellido: "",
      nuevaEdad: "",
      nuevaCarrera: "",
      nuevoCorreo: "",
      lista: [
        {
          nombre: "Angelo",
          apellido: "Pujota",
          edad: 22,
          carrera: "Ingeniería",
          correo: "angelo@example.com",
        },
        {
          nombre: "Pedro",
          apellido: "Guaycha",
          edad: 23,
          carrera: "Administración",
          correo: "pedro.guaycha@example.com",
        },
        {
          nombre: "Juan",
          apellido: "Teran",
          edad: 21,
          carrera: "Psicología",
          correo: "juan.teran@example.com",
        },
        {
          nombre: "Marco",
          apellido: "Andrade",
          edad: 24,
          carrera: "Medicina",
          correo: "marco.andrade@example.com",
        },
        {
          nombre: "Andrea",
          apellido: "Castillo",
          edad: 20,
          carrera: "Derecho",
          correo: "andrea.castillo@example.com",
        },
        {
          nombre: "Marcelo",
          apellido: "Lopez",
          edad: 25,
          carrera: "Arquitectura",
          correo: "marcelo.lopez@example.com",
        },
        {
          nombre: "Alejandra",
          apellido: "Pineda",
          edad: 22,
          carrera: "Diseño Gráfico",
          correo: "alejandra.pineda@example.com",
        },
      ],
    };
  },
  methods: {
    agregarEstudiante() {
      const nuevo = {
        nombre: this.nuevoNombre,
        apellido: this.nuevoApellido,
        edad: this.nuevaEdad,
        carrera: this.nuevaCarrera,
        correo: this.nuevoCorreo,
      };
      this.lista.unshift(nuevo);
    },

    obtenerPathVariable() {
      const cedula = this.$route.params.cedula;
      console.log(cedula);
      const anio = this.$route.query.anio;
      console.log(anio);
      const mes = this.$route.query.mes;
      console.log(mes);
    },
  },
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
      const cedula = this.$route.params.cedula;
      console.log(cedula);
      const anio = this.$route.query.anio;
      console.log(anio);
      const mes = this.$route.query.mes;
      console.log(mes);
    console.log("mounted");
  },
  beforeUpdate() {
 console.log("beforeUpdate");
  },
  updated(){
 console.log("updated");
  },
  beforeUnmount(){
    console.log("beforeUnmount");
  },
  unmounted(){
    console.log("unmounted");
  },
};
</script>

<style scoped>
.container {
  background: #fff;
  border: 1px solid;
  border-radius: 12px;
  max-width: 900px;
  margin: 50px auto;
  padding: 30px;
}

label {
  display: block;
  color: #333;
  text-align: left;
}

input {
  background: #4e91f9;
  color: #fff;
  width: 90%;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  padding: 10px 15px;
}

button {
  background: #045fe8;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  width: 200px;
  margin-left: 50px;
}
ul {
  list-style: none;
  margin-top: 20px;
  display: block;
  color: #333;
  text-align: left;
}
li {
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 15px;
  color: #333;
  font-size: 15px;
}
</style>