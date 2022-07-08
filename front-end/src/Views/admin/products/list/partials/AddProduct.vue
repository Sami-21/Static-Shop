<template>
  <v-dialog v-model="dialogAdd" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="green" dark class="mb-2" v-bind="attrs" v-on="on">
        <v-icon large>mdi-plus</v-icon>
      </v-btn>
    </template>
    <v-form @submit.prevent="save" id="AddProductForm">
      <v-card>
        <v-card-title>
          <span class="text-h5">New Product</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newProduct.name"
                  name="name"
                  label="name"
                  :rules="productNameRules"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              v-model="newProduct.price"
              name="price"
              type="number"
              label="price"
              :rules="productPriceRules"
            ></v-text-field>
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="newProduct.type"
                  :items="productType"
                  label="Product Type"
                  :rules="[(v) => !!v || 'Product type os required']"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-select
                  v-model="newProduct.category"
                  :items="categories"
                  label="Category"
                  :rules="[(v) => !!v || 'category is required']"
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newProduct.tags"
                  hint="seperate your tags with a comma ','"
                  name="tag"
                  type="text"
                  label="tag"
                  :rules="[(v) => !!v || 'tags are required']"
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-file-input
                  v-model="newProduct.image"
                  show-size
                  truncate-length="15"
                  label="Select your product's image"
                ></v-file-input>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12"> </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="newProduct.description"
                  name="description"
                  label="description"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn type="submit" color="green darken-1" text form="AddProductForm"
            >Save</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
// import axios from "axios";

export default {
  data: () => ({
    dialogAdd: false,
    newProduct: {
      name: "",
      price: "",
      type: null,
      category: null,
      tags: null,
      image: null,
      description: "",
    },
    productType: ["Type1", "Type2", "Type3", "Type4"],
    categories: ["category1", "category2", "category3", "category4"],
    productNameRules: [
      (v) => !!v || "Proudct name is required",
      (v) => (v && v.length > 2) || "Proudct name is too short",
    ],
    productPriceRules: [
      (v) => !!v || "Proudct price is required",
      (v) => (v && v > 0) || "product price is invalid",
    ],
  }),

  methods: {
    async save() {
      this.newProduct.tags = this.newProduct.tags.split(",");
      console.log(this.newProduct.tags);
      this.$bus.emit("add", this.newProduct);
      this.close();
      this.newProduct = {};

      // new Promise((resolve, reject) => {
      //   axios
      //     .post("products", this.newProduct)
      //     .then((res) => {
      //       this.close();
      //       this.newProduct = {};
      //       this.$bus.emit("add", this.newProduct);
      //       resolve(res);
      //     })
      //     .catch((err) => {
      //       console.log(err.response);
      //       reject(err);
      //     });
      // });
    },

    close() {
      this.dialogAdd = false;
    },
  },
};
</script>

<style scoped>
.validation-error {
  color: #f00;
}
</style>

<!--productType , category , -->
