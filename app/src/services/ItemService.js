import api from "@/services/Api";

export default {
  getAllItems() {
    api()
      .get("/items")
      .then((res) => {
        console.log(res);
        return res;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  getItem(itemId) {
    return api().get("/item", {
      params: {
        id: itemId,
      },
    });
  },
  editTitle(itemId, title) {
    return api()
      .post("/item/edit-title", {
        params: {
          id: itemId,
          title: title,
        },
      })
      .catch((error) => {
        console.log(error);
        if (!error.response) {
          console.log("Error: Network Error");
        } else {
          console.log(error.response.data.message);
        }
      });
  },
  editVisibility(itemId) {
    return api().post("/item/edit-visibility", {
      params: {
        id: itemId,
      },
    });
  },
};
