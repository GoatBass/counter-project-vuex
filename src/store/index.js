import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    getCounterValue(state) {
      return state.counter;
    },
    getCounterColor(_, getters) {
      let finalColor = "grey";
      let currentCounterValue = getters.getCounterValue;
      if (currentCounterValue > 0) {
        finalColor = "green";
      } else if (currentCounterValue < 0) {
        finalColor = "red";
      }

      return finalColor;
    },
  },
  mutations: {
    updateCounter(state, payload) {
      //payload es el argumento que le pasamos a la mutacion y nos sirve para modificar el estado de dicho valor
      state.counter += payload;
    },
  },
});
