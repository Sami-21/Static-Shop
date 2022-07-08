<template>
  <v-data-table
    :headers="headers"
    :items="products"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Products</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-autocomplete
          clearable
          :items="
            products.map((item) => {
              return item.name;
            })
          "
        ></v-autocomplete>
        <v-spacer></v-spacer>

        <Add />

        <!-- <Edit
          :dialogEdit="dialogEdit"
          :close="close"
          :current="currentItem"
          v-if="dialogEdit"
        />

        <Details
          :dialogView="dialogView"
          :close="close"
          :item="currentItem"
          v-if="dialogView"
        /> -->

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDeleteDialog"
                >Cancel</v-btn
              >
              <v-btn color="red darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="AddSuccess" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Product Added Successfully</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="AddSuccess = false">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="EditSuccess" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Product Edited Successfully</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="EditSuccess = false"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="DeleteSuccess" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Product Deleted Successfully</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text @click="DeleteSuccess = false"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-1" @click="viewItem(item)">mdi-eye</v-icon>
      <v-icon small class="mr-1" @click="editItem(item)">mdi-pencil</v-icon>
      <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary">no Data available</v-btn>
    </template>
  </v-data-table>
</template>
<script>
import Add from "./partials/AddProduct.vue";
// import Edit from "./partials/EditProduct.vue";
// import Details from "./partials/ProductDetails.vue";
// import axios from "axios";

export default {
  components: {
    Add,
    // Edit,
    // Details,
  },

  data: () => ({
    dialogEdit: false,
    dialogView: false,
    dialogDelete: false,

    AddSuccess: false,
    EditSuccess: false,
    DeleteSuccess: false,

    headers: [
      {
        text: "Name",
        value: "name",
      },
      { text: "Price", value: "price" },
      { text: "Price", value: "price" },
      { text: "Actions", value: "actions", sortable: false },
    ],

    products: [],

    editedIndex: -1,
    currentItem: {},
    defaultItem: {
      name: "",
      price: "",
      tags: "",
      category: null,
      type: null,
      image: null,
      description: "",
    },
  }),

  mounted() {
    this.$bus.on("add", (product) => {
      (this.AddSuccess = true), this.products.push(product);
    });
    // this.$bus.on("edit", () => {
    //   (this.EditSuccess = true), this.getProducts();
    // });
  },

  created() {
    // this.getProducts();
  },

  methods: {
    // async getProducts() {
    //   new Promise((resolve, reject) => {
    //     axios
    //       .get("products")
    //       .then((res) => {
    //         //Getting all products
    //         resolve(res);
    //       })
    //       .catch((err) => {
    //         //Handling errors
    //         reject(err);
    //       });
    //   });
    // },

    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.currentItem = Object.assign({}, item);
      this.dialogEdit = true;
    },

    viewItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.currentItem = Object.assign({}, item);
      this.dialogView = true;
    },

    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.currentItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      // new Promise((resolve, reject) => {
      //   axios
      //     .delete(`products/${this.products[this.editedIndex].id}`)
      //     .then((res) => {
      //       this.DeleteSuccess = true;
      //       this.closeDeleteDialog();
      //       this.getProducts();
      //       resolve(res);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //       reject(err);
      //     });
      // });
    },

    close() {
      this.dialogEdit = false;
      this.dialogView = false;
      this.$nextTick(() => {
        this.currentItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDeleteDialog() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.currentItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
  },
};
</script>
