<template>
  <div
    class="product-card"
    :class="{ ends: item.count <= 3 && type !== 'basket' }"
  >
    <table class="info">
      <tr>
        <th class="title">Наименование:</th>
        <td class="text">{{ item.name }}</td>
      </tr>
      <tr>
        <th class="title">
          Кол-во {{ type !== "basket" ? "на складе" : null }}:
        </th>
        <td class="text">{{ item.count }}</td>
      </tr>
      <tr>
        <th class="title">Стоимость, шт.:</th>
        <td class="text">{{ item.price }} ₽</td>
      </tr>
      <tr v-if="type === 'basket'">
        <th class="title">Сумма:</th>
        <td class="text">{{ item.price * item.count }} ₽</td>
      </tr>
    </table>
    <!-- Кнопка Добавить в корзину -->
    <button
      class="buy-btn btn"
      v-if="type !== 'basket'"
      @click="$emit('buy', item.id)"
    >
      <mdicon name="basket-plus" size="24" />
    </button>
    <!-- кнопки + - -->
    <div class="action-btns" v-else>
      <button class="btn minus" @click="$emit('remove', item.id)">
        <mdicon name="minus" size="24" />
      </button>
      <button class="btn plus" @click="$emit('buy', item.id)">
        <mdicon name="plus" size="24" />
      </button>
    </div>
    <!-- удалить полностью из корзины -->
    <button v-if="type == 'basket'" class="btn delete" @click="$emit('delete', item.id)">
      <mdicon name="delete" size="24" />
    </button>
  </div>
</template>

<script>
export default {
  name: "product-card",
  props: ["item", "type"],
};
</script>


<style lang="scss" scoped>
.product-card {
  box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
  border-radius: 8px;
  background: white;
  transition: all 0.3s ease;
  padding: 8px;
  width: 100%;
  height: 100%;
  min-height: 100px;
  box-sizing: border-box;
  color: $blue-grey-dark;
  position: relative;
  &.ends {
    background: $red-lighten;
  }
  &:hover {
    box-shadow: 0 0px 5px 0 rgb(0 0 0 / 10%);
  }
  .text {
    user-select: none;
    font-size: 18px;
    font-weight: 400;
  }
  .title {
    font-size: 18px;
    font-weight: 700;
    text-align: left;
    padding-right: 8px;
  }
  .btn {
    background: $red;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    outline: none;
    box-shadow: inset 0 -3px 0 0 rgb(0 0 0 / 20%);
    transition: all 0.3s ease;
    padding: 2px 8px;
    &:active {
      box-shadow: none;
      transform: translateY(3px);
    }
  }
  .buy-btn {
    position: absolute;
    bottom: 8px;
    right: 16px;
  }
  .action-btns {
    position: absolute;
    bottom: 8px;
    right: 16px;
    display: flex;
    flex-direction: row;
    .minus {
      margin-right: 4px;
    }
  }
  .delete{
    position: absolute;
    top: 8px;
    right: 16px;
    background: $blue-grey-dark;
    color: white;
    box-shadow: inset 0 -3px 0 0 rgb(255 255 255 / 20%);
  }
}
</style> 