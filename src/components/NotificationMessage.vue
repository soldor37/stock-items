<template>
  <div class="notification">
    <div class="text">На складе больше нет этого товара</div>
    <div class="close-btn"><mdicon name="close" size="24" /></div>
  </div>
</template>

<script>
export default {
  props: ["show"],
};
</script>

<style lang="scss" scoped>
.notification{
    background: $blue-grey-dark;
    border-radius: 8px;
    position: fixed;
    bottom: 0;
}
.close-btn{
    background: transparent;
    color: $blue-grey-light;
}
</style>