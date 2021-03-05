<template>
  <div class="product-card" v-if="item">
    <div class="text name"><b>Наименование:</b>{{item.name}}</div>
    <div class="text count"><b>Кол-во на складе:</b>{{item.count}}</div>
    <div class="text price"><b>Стоимость, шт.:</b>{{card.price}}₽</div>
  </div>
</template>

<script>
export default {
  name: 'product-card',
  props: ['item'],
}
</script>


<style lang="scss" scoped>
.product-card{
  box-shadow: 0 4px 25px 0 rgb(0 0 0 / 10%);
  width: 25%;
  border-radius: 8px;
  background: white;
  transition: all .3s ease;
  padding: 8px;
  &:hover{
    box-shadow: 0 0px 5px 0 rgb(0 0 0 / 10%);
  }
  .text{
    user-select: none;
  }
}
</style> 