<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Estudiante Guardado</h1>
    </div>
    <label for="id_nombre"> Nombre:</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text"/>

    <label for="id_apellido"> Apellido:</label>
    <input v-model="nuevoApellido" id="id_apellido" type="text"/>

    <label for="id_edad">Edad:</label>
    <input v-model="nuevaEdad" id="id_edad" type="number" />

    <label for="id_carrera">Carrera:</label>
    <input v-model="nuevaCarrera" id="id_carrera" type="text" />

    <label for="id_correo">Correo:</label>
    <input v-model="nuevoCorreo" id="id_correo" type="email"/>

    <button v-on:click="agregarEstudiante()">Agregar</button>

    <table border="1">
      <thead>
        <tr> 
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Edad</th>
          <th>Carrera</th>
          <th>Correo</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{nombre, apellido, edad, carrera, correo} in lista" :key="nombre">
          <td>{{ nombre }}</td>
          <td>{{ apellido }}</td>
          <td>{{ edad }}</td>
          <td>{{ carrera }}</td>
          <td>{{ correo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      nuevoNombre1: "",
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
      mostrar:false,
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
      this.mostrar=true;
      setTimeout(() =>{this.mostrar=false;
      },3000);
    },
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
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  cursor: pointer;
  width: 100px;
}
table {
  width: 100%;
  margin-top: 50px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
}

th, td {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #045fe8;
  color: white;
  font-weight: 600;
}

tr:hover {
  background-color: #f1f1f1;
}

td {
  color: #333;
}
</style>