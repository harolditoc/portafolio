<template>
    <Header></Header>
    <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
    </transition>
</template>

<script setup>
    import Header from './Header.vue';
    import Inicio from './Inicio.vue';
</script>