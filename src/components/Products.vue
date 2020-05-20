<template>
  <section class="products">
    <div class="tile is-ancestor">
      <div
        class="tile is-6 is-vertical is-parent"
        v-for="(chunk, index) in productChunk"
        :key="index"
      >
        <a
          class="tile is-child box products__tile"
          v-for="product in chunk"
          :key="product.Id"
          @click.prevent="onProductSelect(product)"
        >
          <p class="title">{{ product.Name | title }}</p>
          <p class="subtitle">{{ product.Description }}</p>
          <strong class="subtitle">{{ product.SalePrice | pound }}</strong>
        </a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { State, Getter, Mutation, Action } from "vuex-class";
import { Product } from "@/models/Product/Product";
import chunk from "lodash/chunk";

@Component
export default class Products extends Vue {
  @Getter public products: Product[];
  @Action public fetchProduct;
  @Action public addToList;
  @Prop() private msg!: string;

  get productChunk() {
    return chunk(this.products, 3);
  }

  public created() {
    this.fetchProduct();
  }

  public onProductSelect(product) {
    this.addToList(product);
  }
}
</script>

<style scoped lang="scss">
$epos-blue: #00b4f9;
.products {
  &__tile {
    background-color: $epos-blue;
    transition: background-color ease-in-out 300ms, box-shadow ease-in-out 300ms;

    &:hover {
      background-color: lighten($epos-blue, 20%);
      box-shadow: none;
    }
  }
}
</style>
