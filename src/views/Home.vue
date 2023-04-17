<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav />
      <div class="banner">
        <h1>Circle UI</h1>
        <h2>一个不一般的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue3</h3>
          <p>骄傲地使用了 Vue3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写 （非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-lights"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
export default {
  components: { Topnav },
};
</script>
<style lang="scss" scoped>
$green: #f35a80;
$border-radius: 4px;
$color: #e66d8b;

.topnavAndBanner {
  background: rgb(250, 216, 222);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features {
  margin: 32px auto;
  padding: 0 16px;

  @media (min-width: 800px) {
    width: 800px;

    > ul {
      > li {
        width: 50%;
      }
    }
  }

  @media (min-width: 1200px) {
    width: 1200px;

    > ul {
      > li {
        width: 33.3333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    > li {
      margin: 32px 0;
      display: flex;
      width: 300px;
      padding: 0 40px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      > svg {
        //grid-area: icon;
        width: 82px;
        height: 82px;
      }
      > h3 {
        font-size: 24px;
      }
      > p {
        text-align: center;
        font-size: 16px;
      }
    }
  }
}
.banner {
  color: $color;
  padding: 124px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
