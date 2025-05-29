<template>
<div>
   <nav>
    <router-link to="/estudiante">Estudiante</router-link> |
    <router-link to="/contador/numeros">Contador</router-link>|
    <router-link to="/cliente">cliente</router-link> |
    <router-link to="/pregunta">pregunta</router-link>|
    <router-link to="/formulario">formulario</router-link> |
    <router-link to="/estudianteTabla">estudianteTabla</router-link>
    <router-view />
  </nav>
 </div>
</template>
