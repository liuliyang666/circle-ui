<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>
<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
    background: white;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    margin-right: 16px;
    margin-left: 16px;
    margin-bottom: 24px;
    flex-grow: 1;
    padding: 16px;
    background: rgb(245, 245, 245);
    border-radius: 8px;
  }
}
aside {
  background: rgb(250, 216, 222);
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  z-index: $aside-index;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        background: white;
      }
    }
  }
}
main {
  overflow: auto;
}
</style>
