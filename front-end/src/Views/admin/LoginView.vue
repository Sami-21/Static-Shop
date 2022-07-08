<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <v-form v-model="valid" @submit.prevent="login">
      <v-card elevation="6" min-width="450px" class="p-8">
        <v-container>
          <v-card-title>
            <span class="text-h5">Admin Dashboard</span>
            <v-spacer></v-spacer>
            <v-icon>mdi-account</v-icon>
          </v-card-title>

          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail here"
                required
                hint="admin@example.com"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="password"
                :rules="passwordRules"
                type="password"
                label="password here"
                required
                hint="password123"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-btn elevation="7" type="submit" class="mx-auto"> Log in </v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-form>
  </div>
</template>
<script>
export default {
  data: () => ({
    valid: false,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  methods: {
    login() {
      console.log(this.email, this.password);
      if (
        this.email === "admin@example.com" &&
        this.password === "password123"
      ) {
        console.log("test1");
        this.$router.push("dashboard");
        console.log("test2");
      }
    },
  },
};
</script>

<style></style>
