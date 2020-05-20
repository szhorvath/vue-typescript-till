<template>
  <div class="columns">
    <div class="column is-half">
      <h1 class="title">Products</h1>
      <products></products>
    </div>
    <div class="column">
      <h1 class="title">List</h1>
      <list></list>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Products from "@/components/Products.vue";
import List from "@/components/List.vue";

@Component({
  components: {
    Products,
    List,
  },
})
export default class Till extends Vue {}
</script>
