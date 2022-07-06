<template>
  <v-dialog v-model="dialogEdit" max-width="500px">
    <v-form @submit.prevent="confirmEdit" id="UpdateClientForm">
      <v-card>
        <v-card-title>
          <span class="text-h5">Edit Client</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newProducts.name"
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
                  v-model="newProducts.price"
                  name="price"
                  label="price"
                  v-validate="{ required: true, regex:/^(?!0*[.,]0*$|[.,]0*$|0*$)\d+[,.]?\d{0,2}$/}"
                ></v-text-field>
                <span class="validation-error">{{ errors.first('price') }}</span>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="newProducts.quantity"
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
                  v-model="newProducts.description"
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
          <v-btn type="submit" color="green darken-1" text form="UpdateClientForm">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>
<script>
import axios from "axios";

export default {
  props: {
    dialogEdit: Boolean,
    current: Object,
    close: { type: Function }
  },

  data() {
    return {
      newProducts: {}
    };
  },

  mounted() {
    this.setNewProduct();
  },

  methods: {
    setNewProduct() {
      this.newProducts = Object.assign({}, this.newProducts, this.current);
    },

    async confirmEdit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          new Promise((resolve, reject) => {
            axios
              .put(`products/${this.current.id}`, this.newProducts)
              .then(res => {
                this.$bus.emit("edit", this.client);
                this.close();
                resolve(res);
              })
              .catch(err => {
                console.log(err);
                this.close();
                reject(err);
              });
          });
        }
      });
    }
  }
};
</script>
<style scoped>
.validation-error {
  color: #f00;
}
</style>