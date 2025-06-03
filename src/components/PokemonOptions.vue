<template>
<div class="options-container">
    <ul>
        <li>Pokemon1</li>
        <li>Pokemon2</li>
        <li>Pokemon3</li>
        <li>Pokemon4</li>
    </ul>
</div>
</template>

<script>
export default {

}
</script>

<style>
ul{
    list-style-type: none;
}
li{
    background: white;
    border-radius: 5px;
    border: 1px solid rgba(0, 0,0,0.2);
    cursor: pointer;
    margin-bottom: 10px;
    width: 250px; 
}
.options-container{
    display: flex;
    justify-content: center;
}
li:hover{
    background: rgba(0, 0,0,0.01);;
}

</style>