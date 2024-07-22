<template>
    <Header></Header>
        <router-view :key="$route.fullPath"></router-view>
</template>

<script setup>
    import Header from './Header.vue';
    import Inicio from './Inicio.vue';
</script>