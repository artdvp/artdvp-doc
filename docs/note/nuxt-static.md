# Note : Static Site Generators: Nuxt.js

from : [source](https://medium.com/a-man-with-no-server/static-site-generators-nuxt-js-2fa9782d27c8)

ติดตั้ง nuxt

```
$ vue init nuxt-community/starter-template <project-name>
$ cd <project-name>
$ npm install
$ npm run dev
```

Feature

- รับข้อมูล List of users with REST
- แสดงข้อมูลใน Page
- สามารถเปิดข้อมูล user ในหน้าใหม่

ติดตั้ง axios

```
yarn add axios
# or
npm install --save axios
```

ใช้งาน Vuex จัดการ state ของ application

inside `/store` create `users.js`

```js
import axios from "axios";

export const state = () => ({
  list: [],
  fetched: false
});

export const mutations = {
  set(state, todos) {
    state.list = todos;
    state.fetched = true;
  }
};

export const actions = {
  async fetchUsers({ commit }) {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    commit("set", data);
  }
};

export const getters = {
  userById: state => id => {
    return state.list.find(user => user.id == id);
  },
  isFetched: state => {
    return !!state.fetched;
  }
};
```

go to `pages/index.vue`

```html
<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        users!
      </h1>
      <h2 class="subtitle">
        A Web Application to see users
      </h2>
    </div>
     <div class="">
        <h2>Users</h2>
        <ul class="users">
          <li v-for="user in users" :key="user.id">
            <nuxt-link :to="'/users/'+user.id">{{ user.name }}</nuxt-link>
          </li>
        </ul>
      </div>
  </section>
</template>

<script>
import axios from "axios";
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  computed: {
    users() {
      return this.$store.state.users.list;
    }
  },
  async fetch({ store }) {
    return store.dispatch("users/fetchUsers");
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.users {
  list-style-type: none;
}

.users li a {
  display: inline-block;
  width: 200px;
  border: 1px #ddd solid;
  padding: 10px;
  text-align: left;
  color: #222;
  text-decoration: none;
}

.users li a:hover {
  color: orange;
}
</style>
```

ดูที่ fetch โดย nuxt จะพร้อมรับ data มาที่ page โดยรอ data จาก server ก่อนจะ render ทุกอย่าง

ซึ่ง Page จะ render รายการ user มาจาก Vux Store

ใน folder `pages` สร้าง folder `users` และสร้าง file `_id.vue`

```html
<template>
    <div class="user">
        <h3>{{ user.name }}</h3>
        <h4>@{{ user.username }}</h4>
        <p>Email : {{ user.email }}</p>
        <p><nuxt-link to="/">List of Users</nuxt-link></p>
    </div>
</template>

<script>
import axios from "axios";

export default {
  computed: {
    user() {
      const userById = this.$store.getters["users/userById"];
      return userById(this.$route.params.id);
    }
  },
  async fetch({ store }) {
    if (!store.getters["users/isFetched"]) {
      return store.dispatch("users/fetchUsers");
    }
  }
};
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
```

สั่ง run

```
yarn dev
```

จะได้หน้าเว็บ ... เสร็จแล้ว สั่ง build

```
npx nuxt generate
```

โดยจะได้ folder `dist` และมี file index.html แต่ข้อมูล dynamic route ผ่าน \_id จะไม่ถูก สร้างมาด้วย ดังนั้นจึงต้องตั้งค่าที่ file `nuxt.config.js`

```js
// add this ...
const axios = require("axios");

module.exports = {
  //....//
  build: {
    //....
  },
  // add this ...
  generate: {
    routes: () => {
      return axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          return res.data.map(user => {
            return {
              route: "/users/" + user.id,
              payload: user
            };
          });
        });
    }
  }
  // ...
};
```

และ run อีกครั้ง

```sh
npx nuxt generate
```

จะได้ file ตามข้อมูล json users
