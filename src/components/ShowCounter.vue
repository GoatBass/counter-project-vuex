<template>
    <h2>El valor del contador es {{getCounterValue}}</h2>
</template>

<script>
export default {
    computed: {
        getCounterValue(){
            return this.$store.getters.getCounterValue
        }
    }
}
</script>