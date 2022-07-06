<template>
  <v-dialog v-model="dialogView" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Product Info</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <h1 class="text-black my-2">
              <v-icon>mdi-package-variant</v-icon>
            <span class="header">name</span> : {{item.name}}
            </h1>
          </v-row>

          <v-row>
            <h1 class="text-black my-2">
              <v-icon>mdi-currency-usd</v-icon>
            <span class="header">price</span> : {{item.price}}
            </h1>
          </v-row>

          <v-row>
            <h1 class="text-black my-2">
              <v-icon>mdi-cart</v-icon>
            <span class="header">quantity</span> : {{item.quantity}}
            </h1>
          </v-row>

          <v-row>
            <h1 class="text-black my-2">
              <v-icon>mdi-newspaper-variant-multiple</v-icon>
            <span class="header">description</span> :<br/> <br/>  {{item.description}}
            </h1>
          </v-row>

          <v-card-actions class="btn-container">
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close">close</v-btn>
          </v-card-actions>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import axios from "axios";

export default {
  props: {
    dialogView: Boolean,
    item: Object,
    close: { type: Function }
  }
};
</script>

<style scoped>
.header{
  font-weight:900;
}
.btn-container {
  position: relative;
  top: 25px;
}
</style>