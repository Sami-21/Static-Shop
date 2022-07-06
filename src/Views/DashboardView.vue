<template>
  <v-container>
    <div class="cardsContainer">
      <md-card
        md-with-hover
        v-for="(item, index) in Statistics.headerStats"
        :key="index"
        :style="`background-color:${item.color}`"
      >
        <md-ripple>
          <md-card-header>
            <div class="md-title">{{ item.title }}</div>
            <v-icon>{{ item.icon }}</v-icon>
          </md-card-header>

          <md-card-content> {{ item.count }} </md-card-content>
        </md-ripple>
      </md-card>
    </div>
  </v-container>
</template>

<script>
// import axios from "axios";

export default {
  data: () => ({
    Statistics: {
      headerStats: [
        {
          title: "Clients",
          icon: "mdi-account-group",
          color: "#6CCFC1",
          count: 0,
        },
        {
          title: "Providers",
          icon: "mdi-account-wrench",
          color: "#F17374",
          count: 0,
        },
        {
          title: "Products",
          icon: "mdi-package-variant-closed",
          color: "#68ACFA",
          count: 0,
        },
        {
          title: "Transactions",
          icon: "mdi-cash-multiple",
          color: "#F7A83A",
          count: 0,
        },
      ],

      topTransactionsClients: {
        name: "Top 5 Clients (Transactions)",
        data: [],
      },

      topSpendingClients: {
        name: "Top 5 Clients ",
        data: [],
      },

      topSellingProducts: {
        name: "Top 5 Products",
        data: [],
      },

      topTransactions: {
        name: "Top 5 Transactions",
        data: [],
      },
    },
  }),

  created() {
    // this.getStats();
  },

  methods: {
    // async getStats() {
    //   new Promise((resolve, reject) => {
    //     axios
    //       .get("dashboard")
    //       .then((res) => {
    //         //Getting How many categories we have and how many products we have
    //         resolve(res);
    //       })
    //       .catch((err) => {
    //         //Handling Errors
    //         reject(err);
    //       });
    //   });
    // },
  },
};
</script>

<style lang="scss" scoped>
.cardsContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  color: "#fff";
}

.md-card {
  width: 100%;
  height: 150px;
  vertical-align: top;
}

.md-card-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.md-card-content {
  font-size: 42px;
  font-weight: bold;
}

.md-list {
  width: 50%;
  vertical-align: top;
  border: 1px solid rgba(#000, 0.12);
}
</style>
