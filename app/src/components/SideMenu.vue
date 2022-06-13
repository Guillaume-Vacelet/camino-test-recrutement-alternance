<template lang="en">
  <div class="side-menu">
    <div class="logo">
      <p>logo</p>
    </div>
    <nav>
      <ul>
        <li><h3><router-link to="/dashboard">Dashboard</router-link></h3></li>
        <li><h3><router-link to="/product">Product</router-link></h3></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SideMenu",
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
  a {
    color: #4c4e6f;
    text-decoration: none;
  }
  a:hover {
    color: blue;
  }
  .router-link-active {
    color: blue;
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
