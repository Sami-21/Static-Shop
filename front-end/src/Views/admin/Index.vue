<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-app>
    <v-card>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant.sync="mini"
        permanent
        fixed
      >
        <v-list-item class="px-2">
          <v-list-item-avatar> </v-list-item-avatar>

          <v-list-item-title>Admin</v-list-item-title>

          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-card>
    <div class="w-11/12 h-full ml-16 my-12">
      <router-view />
    </div>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        {
          title: "Dashboard",
          icon: "mdi-view-dashboard",
          path: "/dashboard",
        },
        // {
        //   title: "Categories",
        //   icon: "mdi-shape",
        //   path: "/dashboard/categories",
        // },
        {
          title: "Products",
          icon: "mdi-shopping",
          path: "/dashboard/products",
        },
      ],
      mini: true,
    };
  },
};
</script>
<style></style>
