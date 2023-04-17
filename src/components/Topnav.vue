<template>
  <div class="topnav">
    <div class="logo">
      <router-link to="/">
        <svg class="icon">
          <use xlink:href="#icon-zuanshi"></use>
        </svg>
      </router-link>
    </div>
    <div class="menu">
      <ul>
        <li>
          <router-link to="/doc">文档</router-link>
        </li>
      </ul>
    </div>

    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-liebiao"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); //get
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #e66d8b;
.topnav {
  color: #f35a80;
  height: 3rem;
  display: flex;
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid white;

  > .logo,
  .icon {
    margin-left: 1rem;
    cursor: pointer;
    width: 32px;
    height: 32px;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > ul {
      display: flex;
      > li {
        margin: 0 2rem;
      }
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 1);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
