<template>
  <div id="app">
    <div class="content">
      <div class="list-container storage" v-if="storageItems">
        <div class="title">Склад</div>
        <div class="cards-wrapper">
          <div
            class="card"
            v-for="(item, index) in storageItems"
            :key="index + '_store'"
          >
            <product-card :item="item" @buy="buyItem($event)" />
          </div>
        </div>
      </div>
      <div class="list-container favourite">
        <div class="title">Корзина</div>
        <div class="cards-wrapper">
          <div
            class="card"
            v-for="item in basketItems"
            :key="item.id + '_basket'"
          >
            <product-card
              :type="'basket'"
              :item="item"
              @buy="buyItem($event)"
              @remove="removeItem($event)"
              @delete="deleteItem($event)"
            />
          </div>
        </div>
        <div class="sum-price" v-show="sumPrice > 0">
          <div class="sum-price__text">Добавлено товаров на сумму:</div>
          <div class="sum-price__sum">{{ sumPrice }} ₽</div>
        </div>
      </div>
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
      basketItems: [],
    };
  },
  methods: {
    // добавить 1шт в корзину
    buyItem(item_id) {
      let storageItem = this.storageItems.find((item) => {
        return item.id == item_id;
      });
      if (!storageItem) return;

      let basketItem = this.basketItems.find((item) => {
        return item.id == storageItem.id;
      });
      if (!basketItem) {
        this.basketItems.push({
          id: storageItem.id,
          name: storageItem.name,
          count: 1,
          price: storageItem.price,
        });
      } else {
        if (basketItem.count + 1 > storageItem.count) {
          console.log('error')
        } else {
          basketItem.count++;
        }
      }
    },
    // убрать из корзины 1 шт
    removeItem(item_id) {
      let basketItem = this.basketItems.find((item) => {
        return item.id == item_id;
      });
      if (!basketItem) return;
      if (basketItem.count == 1) {
        this.deleteItem(item_id);
      } else {
        basketItem.count--;
      }
    },
    // удалить товар полностью из корзины
    deleteItem(item_id) {
      let index = this.basketItems.findIndex((item) => {
        return item.id == item_id;
      });
      if (index < 0) return;
      this.basketItems.splice(index, 1);
    },
  },
  computed: {
    sumPrice() {
      let sum = 0;
      this.basketItems.forEach((item) => {
        sum += item.count * item.price;
      });
      return sum;
    },
    // basketItemsArray(){
    //  return this.basketItems.map(item=>{
    //    return
    //  })
    // }
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
  height: 100%;
  min-height: 100vh;
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
  min-height: 930px;
  background: white;
  box-shadow: 0 0 10px $blue-grey-dark;
  padding: 32px;
  box-sizing: border-box;
  position: relative;
  .title {
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 24px;
  }
  .cards-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .card {
    width: calc(50% - 24px);
    &:not(:nth-child(2n)) {
      margin-right: 20px;
    }
    margin-bottom: 20px;
  }
  .sum-price {
    padding: 8px 34px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    width: 100%;
    background: #ffd54f;
    box-shadow: inset 0 -3px 0 0 rgb(0 0 0 / 20%), 0px -4px 5px rgb(0 0 0 / 20%);
    height: 100px;
    color: $blue-grey-dark;
    font-size: 36px;
    &__text {
      font-weight: 700;
      margin-right: 20px;
    }
    &__sum {
      font-weight: 400;
    }
  }
}
.storage {
  margin-right: 24px;
}
</style>
