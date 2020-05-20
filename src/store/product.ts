import { Product } from "@/models/Product/Product";
import axios from "axios";
import { GetterTree, MutationTree, ActionTree } from "vuex";
import { ProductState } from "@/models/States/ProductState";
import { ProductListItem } from "@/models/Product/ProductListItem";

type ProductGetter = GetterTree<ProductState, any>;

export const state: ProductState = {
  products: [],
  list: [],
  total: 0,
};

export const getters: ProductGetter = {
  products: (state) => state.products,
  list: (state) => state.list,
  total: (state) => state.total,
};

export const mutations: MutationTree<ProductState> = {
  setProducts(state, products: Product[]) {
    state.products = products;
  },

  addToList(state, product: Product) {
    const existing = state.list.find((item) => {
      return item.product.Id === product.Id;
    });

    if (existing) {
      existing.quantity++;
    } else {
      state.list.push({
        product,
        quantity: 1,
      });
    }
  },

  removeFromList(state, item: ProductListItem) {
    const index = state.list.indexOf(item);
    state.list.splice(index, 1);
  },

  decreaseQty(state, product: Product) {
    const existing = state.list.find((item) => {
      return item.product.Id === product.Id;
    });

    if (existing && existing.quantity > 1) {
      existing.quantity--;
    }
  },

  calculateTotal(state) {
    let total = 0;

    state.list.map((item) => {
      const totalLine = item.product.SalePrice * item.quantity;
      total += totalLine;
    });
    state.total = total.toFixed(2);
  },
};

export const actions: ActionTree<ProductState, any> = {
  async fetchProduct({ commit }) {
    const { data } = await axios.get(
      "https://api.testeposnowhq.com/api/v4/Product"
    );

    commit("setProducts", data);
  },

  addToList({ commit }, product: Product) {
    commit("addToList", product);
    commit("calculateTotal");
  },

  removeFromList({ commit }, item: ProductListItem) {
    commit("removeFromList", item);
    commit("calculateTotal");
  },

  decreaseQty({ commit }, product: Product) {
    commit("decreaseQty", product);
    commit("calculateTotal");
  },
};

export const products = {
  state,
  getters,
  mutations,
  actions,
};
