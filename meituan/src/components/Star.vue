<template>
  <div>
    <ul class="star-container">
      <li
        v-for="i in 5"
        :key="i"
        :class="{
          'active': i <= num,
          'half-active': ((i - num) > 0) && ((i - num) < 1),
          'unactive': i > Math.ceil(num),
        }"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      default: 5,
    },
  },
};
</script>

<style lang="scss" scoped>
.star-container {
  display: inline-block;
  ul {
    display: flex;
  }
  li {
      height: 12px;
      width: 12px;
      background-size: 12px 12px;
      float: left;
    }
    .active {
        background-image: url(./images/star-active.png);
    }
    .half-active {
        background-image: url(./images/star-half.png);
    }
    .unactive {
         background-image: url(./images/star.png);
    }
}
</style>