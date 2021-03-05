<template>
  <div id="app">
    <div class="content">
      <div class="list-container storage" v-if="storageItems">
        <div class="cards-wrapper">
          <div class="card" v-for="(item, index) in storageItems" :key="index">
            <product-card :item="item" />
          </div>
        </div>
      </div>
      <div class="list-container favourite"></div>
    </div>
  </div>
</template>

<script>
import ProductCard from "./components/ProductCard.vue";
import jsonData from "../data.json";
export default {
  name: "App",
  components: {
    ProductCard,
  },
  data() {
    return {
      storageItems: jsonData.storageItems,
    };
  },
};
</script>

<style lang="scss" scoped>
@import url("~@/styles/normalize.scss");
* {
  font-family: "Roboto", sans-serif;
}
.content {
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
.list-container {
  border-radius: 16px;
  border: 1px solid $blue-grey-dark;
  width: 50%;
  height: 100%;
  background: white;
  box-shadow: 0 0 10px $blue-grey-dark;
  padding: 32px;
  box-sizing: border-box;
  .cards-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card {
    width: calc(50% - 24px);
    &:not(:nth-child(2n)){
      margin-right: 20px;
    }
    margin-bottom: 20px;
  }
}
.storage {
  margin-right: 24px;
}
</style>
