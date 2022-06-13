<template>
  <div id="product-view">
    <h3 class="go-back"><router-link to="/dashboard">Go back</router-link></h3>
    <div class="title-1">
      <h2>TITRE ÉLÉMENT 1</h2>
    </div>
    <div class="title-3">
      <h2>TITRE ÉLÉMENT 3</h2>
    </div>
    <div class="title-2">
      <h2>{{ title2 }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductView",
  data() {
    return {
      title2: "TITRE ÉLÉMENT 2 AVEC DU TEXTE TRÈS LONG",
    };
  },
};
</script>

<style lang="scss" scoped>
#product-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  box-sizing: border-box;
  overflow: hidden;
  background-image: url("@/assets/sneakers.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  .go-back {
    width: 100px;
    height: 30px;
    position: absolute;
    top: calc(100vh - 100px);
    left: calc(50vw - 50px);
    margin: 0;
    text-align: center;
    a {
      font-size: 1rem;
      color: white;
      text-decoration: none;
    }
    a:hover {
      color: blue;
    }
  }
  .title-1 {
    height: 75px;
    width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 0 0 40px 40px;
    h2 {
      font-size: 1.5rem;
    }
  }
  .title-3 {
    height: 75px;
    width: 260px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    border-radius: 100px;
    h2 {
      font-size: 1.5rem;
    }
  }
  .title-2 {
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    background: white;
    box-sizing: border-box;
    overflow: auto;
    padding: 10px;
    h2 {
      font-size: 1rem;
    }
  }
  /* width */
  div::-webkit-scrollbar {
    width: 5px;
    height: 10px;
  }
  /* Track */
  div::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  div::-webkit-scrollbar-thumb {
    background: #888;
  }
  /* Handle on hover */
  div::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
}
@media screen and (min-width: 750px) {
  #product-view {
    .go-back {
      width: auto;
      height: auto;
      top: 0;
      left: 20px;
      a {
        font-size: 1.5rem;
        color: white;
        text-decoration: none;
      }
      a:hover {
        color: blue;
      }
    }
    .title-1 {
      height: 100px;
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      border-radius: 0 0 40px 40px;
      h2 {
        font-size: 2rem;
      }
    }
    .title-3 {
      height: 100px;
      width: 400px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
      border-radius: 100px;
      h2 {
        font-size: 2rem;
      }
    }
    .title-2 {
      height: 100px;
      width: 100%;
    }
  }
}
@media screen and (min-width: 1024px) {
  #product-view {
    .go-back {
      position: absolute;
      top: 0;
      left: 20px;
      a {
        font-size: 2rem;
      }
    }
    .title-1 {
      height: 150px;
      width: 500px;
      border-radius: 0 0 40px 40px;
      h2 {
        font-size: 3rem;
      }
    }
    .title-3 {
      height: 150px;
      width: 500px;
      border-radius: 100px;
      h2 {
        font-size: 3rem;
      }
    }
    .title-2 {
      height: 150px;
      width: 500px;
      border-radius: 0 40px 0 0;
    }
  }
}
</style>
