import axios from "axios"

//Logica interna de la consulta
const consultarPokemon = async(nombre)=>{
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}`;
    const respuesta= await axios.get(url).then(r=>r.data);
    return respuesta;
}
// Fachada para ver desde vue
export const consultarPokemonFachada=async(nombre)=>{
    return await consultarPokemon(nombre);
}