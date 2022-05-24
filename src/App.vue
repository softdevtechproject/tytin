<script setup>
import { RouterLink, RouterView } from "vue-router";
import Main from "@/views/MainView.vue";
</script>

<template>
  <header>
    <nav>
      <div class="topnav">
        <RouterLink to="/" id="compname" class="nav__link">TYTIN</RouterLink>
        <RouterLink to="/" class="nav__link">Home</RouterLink>
        <RouterLink to="/menu" class="nav__link">Menu</RouterLink>
        <RouterLink to="/about" class="nav__link">About us</RouterLink>
        <RouterLink to="/contacts" class="nav__link">Contacts</RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
