<template lang="en">
  <div class="card-item">
    <div class="card-body">
      <div class="titles">
        <h3 class="title" v-if="data.title != ''">{{ data.title }}</h3>
        <h3 class="title" v-else>Item {{ data.id }}</h3>
        <p class="subtitle">Boîte de gestion</p>
      </div>
      <div class="title-input">
        <label for="title">Titre de l'élément {{ data.id }}</label>
        <input
          type="text"
          class="title"
          :value="title"
          @input="$emit('update:title', $event.target.value)"
        >
      </div>
      <div class="display-toggle">
        <p>Afficher l'élément {{data.id}}</p>
        <Toggle v-model="display" class="toggle-blue" @change="editVisibility"/>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@vueform/toggle";
// import ItemService from "@/services/ItemService";

export default {
  name: "CardItem",
  components: {
    Toggle,
  },
  props: {
    data: Object,
    title: String,
    display: Boolean,
  },
  emits: ["update:title", "update:display"],
  methods: {
    async editTitle(str) {
      str;
      // const res = await ItemService.editTitle(this.data.id, str);
      // console.log(res.data);
    },
    async editVisibility() {
      // console.log(typeof this.data.id);
      // const res = await ItemService.getItem(this.data.id);
      // // const res = await ItemService.editVisibility(this.data.id);
      // console.log(res.data);
    },
  },
};
</script>

<style lang="scss">
@import "@vueform/toggle/themes/default.css";

.card-item {
  min-width: 320px;
  height: 175px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-sizing: border-box;
  font-size: 1rem;
  border-radius: 10px;
  padding: 15px;
  background: white;
  .card-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .titles {
      width: 100%;
      display: flex;
      flex-direction: column;
      .title {
        font-size: 1em;
        margin: 0 0 0 0;
      }
      .subtitle {
        font-size: 0.75em;
        margin: 0;
        color: #95979b;
      }
    }
    .title-input {
      width: 100%;
      display: flex;
      flex-direction: column;
      label {
        color: #95979b;
      }
      input {
        display: block;
        padding: 6px;
        border: none;
        border-bottom: 1px solid #ccc;
      }
    }
    .display-toggle {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        margin: 0;
      }
      .toggle-blue {
        --toggle-bg-on: blue;
        --toggle-border-on: blue;
        z-index: 0;
      }
    }
  }
}

@media screen and (min-width: 750px) {
  .card-item {
    min-width: 320px;
    height: 200px;
    display: flex;
    font-size: 1rem;
    border-radius: 10px;
    padding: 25px 15px 25px 15px;
    .card-body {
      .titles {
        .title {
          font-size: 1em;
          margin: 0 0 0 0;
        }
        .subtitle {
          font-size: 0.75em;
          margin: 0;
        }
      }
      .title-input {
        label {
          color: #95979b;
        }
        input {
          padding: 6px;
        }
      }
      .display-toggle {
        p {
          margin: 0;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .card-item {
    min-width: 450px;
    height: 200px;
    display: flex;
    font-size: 1rem;
    border-radius: 10px;
    padding: 25px 15px 25px 15px;
    .card-body {
      .titles {
        .title {
          font-size: 1em;
          margin: 0 0 0 0;
        }
        .subtitle {
          font-size: 0.75em;
          margin: 0;
        }
      }
      .title-input {
        label {
          color: #95979b;
        }
        input {
          padding: 6px;
        }
      }
      .display-toggle {
        p {
          margin: 0;
        }
      }
    }
  }
}

@media screen and (min-width: 1425px) {
  .card-item {
    min-width: 550px;
    height: 250px;
    display: flex;
    font-size: 1rem;
    border-radius: 10px;
    padding: 25px 15px 25px 15px;
    .card-body {
      .titles {
        .title {
          font-size: 1em;
          margin: 0 0 0 0;
        }
        .subtitle {
          font-size: 0.75em;
          margin: 0;
        }
      }
      .title-input {
        label {
          color: #95979b;
        }
        input {
          padding: 6px;
        }
      }
      .display-toggle {
        p {
          margin: 0;
        }
      }
    }
  }
}
</style>
