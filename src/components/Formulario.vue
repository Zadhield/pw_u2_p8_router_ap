<template>
  <div class="container">
    <div v-show="mostrar">
      <h1>Formulario</h1>
    </div>
    <label for="id_nombre">Nombre de la Mascota</label>
    <input v-model="nuevoNombre" id="id_nombre" type="text" />

    <label for="id_tipo">Tipo</label>
    <input v-model="nuevoTipo" id="id_tipo" type="text" />

    <label for="id_edad">Edad</label>
    <input v-model="nuevaEdad" id="id_edad" type="number" />

    <label for="id_dueno">Dueño</label>
    <input v-model="nuevoDueno" id="id_dueno" type="text" />

    <label for="id_telefono">Telefono</label>
    <input v-model="nuevoTelefono" id="id_telefono" type="number" />

    <button v-on:click="agregarMascota()">Agregar</button>

    <table border="1">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Edad</th>
          <th>Dueño</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ nombre, tipo, edad, dueno, tel } in lista" :key="nombre">
          <td>{{ nombre }}</td>
          <td>{{ tipo }}</td>
          <td>{{ edad }}</td>
          <td>{{ dueno }}</td>
          <td>{{ tel }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nuevoNombre: "",
      nuevoTipo: "",
      nuevaEdad: "",
      nuevoDueno: "",
      nuevoTelefono: "",

      lista: [
        {
          nombre: "Alice",
          tipo: "Gato",
          edad: "1",
          dueno: "Valentina",
          tel: "0978617847",
        },
      ],
    };
  },

  methods: {
    agregarMascota() {
      if (
        this.nuevoNombre &&
        this.nuevoTipo &&
        this.nuevaEdad !== "" &&
        Number(this.nuevaEdad) >= 0 &&
        this.nuevoDueno &&
        this.nuevoTelefono
      ) {
        const nuevo = {
          nombre: this.nuevoNombre,
          tipo: this.nuevoTipo,
          edad: this.nuevaEdad,
          dueno: this.nuevoDueno,
          tel: this.nuevoTelefono,
        };
        this.lista.unshift(nuevo);

        // Limpiar campos
        this.nuevoNombre = "";
        this.nuevoTipo = "";
        this.nuevaEdad = "";
        this.nuevoDueno = "";
        this.nuevoTelefono = "";
      } else {
        alert("Por favor completa todos los campos.");
      }
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 10px;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border-radius: 5px;
}

h1 {
  text-align: center;
  color: #333;
}

label {
  display: block;
  margin-top: 10px;
  font-weight: bold;
  text-align: left;
}

input {
  width: 100%;
  padding: 6px;
  margin-top: 4px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  box-sizing: border-box;
}

button {
  padding: 8px 16px;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #1976d2;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-size: 14px;
}

th,
td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #2196f3;
  color: white;
}
</style>