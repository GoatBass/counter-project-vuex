<template>
<img @click="changeComponent" src="./assets/logo.png" alt="Vue logo">
<!-- Usando dynamic components y el atributo :is, haz que cada vez que hagamos click en el loco, se cambie el componente a mostrar -->
<component  :is="selectedComponent" />
</template>

<script>
import CounterComponent from './components/CounterComponent.vue'
import ShowCounter from './components/ShowCounter.vue'


export default {
  name: 'App',
  data(){
    return {
      selectedComponent: 'counter-component'
    }
  },
  components: {
    CounterComponent,
    ShowCounter
  },
  methods: {
    changeComponent(){
      this.selectedComponent = this.selectedComponent == 'counter-component'? 'show-counter': 'counter-component'
    }
  }
}
</script>

<style>
:root {
  --mainWhite: #f5f5f5;
  --mainGreen: #7fb800;
  --mainBlue: #0d2c54;
  --lightBlue: #00a6ed;
  --mainBlack: #333333;
}
.max-height {
  min-height: 100vh;
}
body {
  background: url("./assets/mainBcg.jpeg") center/cover fixed no-repeat;
  color: var(--mainWhite);
}
.main-container {
  border: 0.1rem solid var(--mainWhite);
  box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.9);
  border-radius: 0.2rem;
}
</style>
