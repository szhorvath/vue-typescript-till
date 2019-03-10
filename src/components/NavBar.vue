<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <a class="navbar-item" href="/">
                <img class="logo" src="../assets/logo.svg">
            </a>

            <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
                <router-link :to="{ name: 'till' }" class="navbar-item">Till</router-link>
                <router-link :to="{ name: 'about' }" class="navbar-item">Documentation</router-link>
            </div>
        </div>
    </nav>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class NavBar extends Vue {}
</script>
<style lang="scss">
.logo {
  display: block !important;
  height: 50px;

  img {
    height: 50px;
    max-height: 50px;
    display: inline;
  }
}
</style>