<template>
  <div>
    导航栏 | <router-link to="/">Lily</router-link> |
    <router-link to="/xxx">Lily2</router-link>
  </div>
  <hr />
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
