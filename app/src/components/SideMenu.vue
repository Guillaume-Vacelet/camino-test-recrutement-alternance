<template lang="en">
  <div class="side-menu">
    <div class="logo">
      <p>logo</p>
    </div>
    <h3>Dashboard</h3>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
  // components: {
  //   ,
  // },
};
</script>

<style lang="scss">
.side-menu {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  background: #1e1e2d;
  box-sizing: border-box;
  .logo {
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background: #4c4e6f;
    p {
      color: #707490;
    }
  }
  h3 {
    color: #4c4e6f;
  }
}

@media screen and (min-width: 1224px) {
  .bm-burger-button {
    display: none;
  }
  .side-menu {
    width: 200px;
  }
}
</style>
