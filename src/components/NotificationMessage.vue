<template>
  <div class="notification" :class="{ hidden: !show }">
    <div class="snack">
      <div class="text">На складе больше нет этого товара</div>
      <div class="close-btn" @click="$emit('close')">
        <mdicon name="close" size="24" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["show"],
  watch: {
    show: function () {
      if (this.show) {
        setTimeout(() => {
          this.$emit("close");
        }, 3000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.notification {
  position: fixed;
  bottom: 16px;
  left: 0;
  width: 100%;
  display: flex;
  visibility: visible;
  justify-content: center;
  transition: all 0.3s ease;
  &.hidden {
    opacity: 0;
    visibility: hidden;
  }
}
.snack {
  background: $error;
  border-radius: 8px;
  color: white;
  min-width: 350px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  box-sizing: border-box;
  padding: 8px 16px;
}
.close-btn {
  background: transparent;
  color: white;
  cursor: pointer;
}
</style>