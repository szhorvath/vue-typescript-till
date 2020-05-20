import Vue from "vue";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import {
  faPlusSquare,
  faMinusSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPlusSquare, faMinusSquare, faTrashAlt);

Vue.component("fa", FontAwesomeIcon);

dom.watch();
