<template>
    <div class="product-list">
        <b-table :data="list" :mobile-cards="true">
            <template slot-scope="props">
                <b-table-column field="Qty" label="Qty" width="80" centered>
                    <a
                        class="product-list__icon product-list__icon--plus"
                        @click.prevent="addToList(props.row.product)"
                    >
                        <fa icon="plus-square" />
                    </a>
                        {{ props.row.quantity }}
                    <a
                        class="product-list__icon product-list__icon--minus"
                        @click="props.row.quantity === 1? removeFromList(props.row): decreaseQty(props.row.product)"
                    >
                        <fa icon="minus-square" />
                    </a>
                </b-table-column>
                <b-table-column field="Name" label="Name">
                    {{ props.row.product.Name }}
                </b-table-column>
                <b-table-column field="Description" label="Description">
                    {{ props.row.product.Description }}
                </b-table-column>
                <b-table-column field="Price" label="Price" numeric>
                    {{ props.row.product.SalePrice | pound }}
                </b-table-column>
                <b-table-column field="Total" label="Total" numeric>
                    {{ props.row.quantity * props.row.product.SalePrice | pound }}
                </b-table-column>
                <b-table-column field="Clear" label="Clear" numeric>
                    <button @click="removeFromList(props.row)" type="button" class="button is-small is-danger"><fa icon="trash-alt" /></button>
                </b-table-column>
            </template>
            <template slot="footer">
                <div class="has-text-right">
                    Total: {{ total | pound }}
                </div>
            </template>
        </b-table>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";

@Component
export default class List extends Vue {
  @Getter public list;
  @Getter public total;
  @Action public addToList;
  @Action public removeFromList;
  @Action public decreaseQty;
}
</script>
<style lang="scss" scoped>
.product-list {
  &__icon {
    &--plus {
      color: #23d160;
    }

    &--minus {
      color: #ffdd57;
    }
  }
}
</style>


