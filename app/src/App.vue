<template>
  <router-view />
</template>

<style lang="scss">
@import "./styles/global.scss";
html {
  height: 100%;
  font-size: 16px;
  margin: 0;
  padding: 0;
  body {
    height: 100vh;
    margin: 0;
    padding: 0;
    #app {
      height: 100%;
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>
