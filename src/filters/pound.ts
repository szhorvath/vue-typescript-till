import Vue from "vue";

Vue.filter("pound", (value: string) => {
  return "£" + parseFloat(value).toFixed(2);
});
