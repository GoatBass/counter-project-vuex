<template>
            <div class="row max-height align-items-center">
                <div
                    class="col-10 mx-auto col-md-6 text-center main-container p-5">
                    <h1 class="text-uppercase">Counter
                    </h1>
                    <h1 :style="{color: getColor}"
                        id="counter">{{ getCounterValue }}</h1>
                    <transition name="fade">
                        <h2 v-if="isPositive">El número es positivo</h2>
                        <h2 v-else-if="isNegative">El número es negativo</h2>
                        <h2 v-else>El número es zero</h2>
                    </transition>
                    <div
                        class="btn-container d-flex justify-content-around flex-wrap">
                        <button @click="updateCounter(-1)"
                            class="btn counterBtn prevBtn text-uppercase m-2">lower
                            count</button>
                        <button @click="updateCounter(1)"
                            class="btn counterBtn nextBtn text-uppercase m-2">add
                            count</button>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
   methods: {
    updateCounter(value) {
      this.$store.commit('updateCounter', value)
    },
  },

  computed: {
    isPositive() {
      return this.$store.getters.getCounterValue > 0;
    },
    isNegative() {
      return this.$store.getters.getCounterValue < 0;
    },
    getColor(){
      return this.$store.getters.getCounterColor
    },
    getCounterValue(){
      //Access to the store of variables that contains the global state of our app
      return this.$store.getters.getCounterValue
    }
  },
}
</script>

<style scoped>
#counter {
  color: var(--mainGreen);
  font-size: 10rem;
  color: var(--mainBlack);
}
.prevBtn,
.nextBtn {
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.9);
  background: var(--mainBlue);
  color: var(--mainWhite);
}
.prevBtn:hover {
  background: var(--lightBlue);
}
.nextBtn:hover {
  background: var(--lightBlue);
}

#counter.positive {
  color: green;
}

#counter.negative {
  color: red;
}
</style>