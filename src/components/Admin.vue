<template>
  <div style="margin-top: 9rem" class="allAdmin d-flex justify-content-center">
    <div class="judul-admin"><h2>Selamat Datang Admin Jualjual</h2></div>
    <table style="border: 1px solid black; max-width: 20cm; width: 20cm">
      <tr style="border: 1px solid black; background-color: #198754">
        <th>No</th>
        <th class="text-center">Email</th>
        <th class="text-center">Password</th>
        <th class="text-center">Delete</th>
      </tr>
      <tr style="border: 1px solid black" v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td class="text-center">{{ user.email }}</td>
        <td class="text-center">{{ user.password }}</td>
        <td class="text-center">
          <a href="#" @click="del(user)">Hapus Akun</a>
        </td>
      </tr>
    </table>
    <br />
    <div class="button-admin" style="border-radius: 15px">
      <a href="/" class="btn btn-success">Kembali ke home</a>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        id: "",
        email: "",
        password: "",
      },
      users: [],
      updateSubmit: false,
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      axios
        .get("http://localhost:3000/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    del(user) {
      axios.delete("http://localhost:3000/users/" + user.id).then((res) => {
        this.load();
        let index = this.users.indexOf(form.name);
        this.users.splice(index, 1);
      });
    },
  },
};
</script>

<style scoped>
.button-admin {
  position: absolute;
  margin-top: 6rem;
}

.btn {
  transition: 0.5s;
}

.button-admin:hover .btn {
  transform: rotate(7deg) scale(1.2);
}

.judul-admin {
  position: absolute;
  margin-top: -3rem;
}
</style>
