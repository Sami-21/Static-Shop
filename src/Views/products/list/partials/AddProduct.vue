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
                  v-model="addedProduct.name"
                  name="name"
                  label="name"
                  v-validate="{required :true , regex:/^[A-Za-z0-9\d\-_\s]+$/i}"
                ></v-text-field>
                <span class="validation-error">{{ errors.first('name') }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="addedProduct.price"
                  name="price"
                  type="number"
                  label="price"
                  v-validate="{ required: true, regex:/^(?!0*[.,]0*$|[.,]0*$|0*$)\d+[,.]?\d{0,2}$/}"
                ></v-text-field>
                <span class="validation-error">{{ errors.first('price') }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="addedProduct.quantity"
                  v-validate="{ required: true, regex:/^([0-9]+)$/ }"
                  name="quantity"
                  label="quantity"
                ></v-text-field>
                <span class="validation-error">{{ errors.first('quantity') }}</span>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="addedProduct.description"
                  name="description"
                  label="description"
                ></v-textarea>
                <span class="validation-error">{{ errors.first('description') }}</span>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
          <v-btn type="submit" color="green darken-1" text form="AddProductForm">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    dialogAdd: false,
    
    addedProduct: {
      name: "",
      price: "",
      quantity: "",
      description: ""
    }
  }),

  methods: {
    async save() {
      this.$validator.validateAll().then(result => {
        if (result) {
          new Promise((resolve, reject) => {
            axios
              .post("products", this.addedProduct)
              .then(res => {
                this.close();
                this.addedProduct={};
                this.$bus.emit("add", this.addedProduct);
                resolve(res);
              })
              .catch(err => {
                console.log(err.response);
                reject(err);
              });
          });
        }
      });
    },

    close() {
      this.dialogAdd = false;
    }
  }
};
</script>

<style scoped>
.validation-error {
  color: #f00;
}
</style>