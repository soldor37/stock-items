<template>
  <div id="app">
    <div class="content">
      <div class="list-container storage"><product-card /></div>
      <div class="list-container favourite"><product-card /></div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";

export default {
  name: "App",
  components: {
    ProductCard,
  },
};
</script>

<style lang="scss" scoped>
@import url('~@/styles/normalize.scss');
*{
  font-family: 'Roboto', sans-serif;
}
.content{
  width: 100vw;
  max-width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: $blue-grey-light;
  padding: 24px;
  box-sizing: border-box;
}
.list-container{
  border-radius: 16px;
  border: 1px solid $blue-grey-dark;
  width: 50%;
  height: 100%;
  background: white;
  box-shadow: 0 0 10px $blue-grey-dark;
  padding: 32px;
}
.storage{
  margin-right: 24px;
}
</style>
