import Vue from "vue";

Vue.filter("title", (value: string) => {
  const wordRe = /($[a-z])|[A-Z][^A-Z]+/g;
  return value.match(wordRe).join(" ");
});
