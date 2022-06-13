<template lang="en">
  <div class="card-list">
    <CardItem 
      v-for="item in items"
      :key="item.id"
      :data="item"
      v-model:title="item.title"
      v-model:display="item.display"
    />
  </div>
</template>

<script>
import CardItem from "@/components/CardItem";

export default {
  name: "CardList",
  components: {
    CardItem,
  },
  props: {
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .card-item {
    margin: 0 0 25px 0;
  }
}

@media screen and (min-width: 750px) {
  .card-list {
    display: grid;
    grid-template-columns: 320px 320px;
    grid-gap: 25px;
    .card-item {
      margin: 0;
    }
  }
}

@media screen and (min-width: 1024px) {
  .card-list {
    grid-template-columns: 450px 450px;
    grid-gap: 45px;
  }
}

@media screen and (min-width: 1425px) {
  .card-list {
    grid-template-columns: 550px 550px;
    grid-gap: 45px;
  }
}
</style>
