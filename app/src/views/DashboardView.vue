<template>
  <div id="home">
    <div class="left">
      <SideMenu />
    </div>
    <div class="right">
      <div class="header">
        <Slide class="burger-menu" width="250">
          <SideMenu />
        </Slide>
        <h2 class="home-title">Panneau de contrôle</h2>
      </div>
      <div class="home-body">
        <CardList :items="items" />
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import CardList from "@/components/CardList";
import { Slide } from "vue3-burger-menu";
// import ItemService from "@/services/ItemService";

export default {
  name: "HomeView",
  components: {
    SideMenu,
    CardList,
    Slide,
  },
  // async created() {
  //   this.items = await this.getData();
  // },
  // methods: {
  //   async getData() {
  //     return ItemService.getAllItems();
  //   },
  // },
  data() {
    return {
      items: [
        { id: 1, title: "first", display: true },
        { id: 2, title: "", display: false },
        { id: 3, title: "", display: false },
      ],
    };
  },
};
</script>

<style lang="scss">
#home {
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 1rem;
  box-sizing: border-box;
  .left {
    display: none;
  }
  .right {
    width: 100%;
    height: 100%;
    .header {
      position: fixed;
      width: 100%;
      height: 75px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 10px 0 20px;
      background: white;
      box-sizing: border-box;
      .home-title {
        font-size: 1.375em;
      }
      .bm-menu {
        justify-content: flex-start;
        align-items: flex-start;
        padding: 60px 0 0 0;
        background: #1e1e2d;
        .bm-item-list {
          margin: 0;
        }
      }
      .bm-burger-button {
        position: relative;
        top: 0;
        left: 0;
        width: 24px;
        height: 18px;
        margin-right: 20px;
      }
    }
    .home-body {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      background: #e3e6e8;
      padding: 95px 0 20px 0;
      box-sizing: border-box;
    }
  }
}

@media screen and (min-width: 750px) {
  #home {
    .home-body {
      flex-direction: row;
    }
  }
}

@media screen and (min-width: 1224px) {
  #home {
    flex-direction: row;
    .left {
      display: flex;
    }
    .right {
      width: 100%;
      .header {
        .burger-menu {
          display: none;
        }
      }
      .home-body {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 95px 40px 0 40px;
      }
    }
  }
}
</style>
