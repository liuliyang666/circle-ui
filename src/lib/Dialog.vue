<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="circle-dialog-overlay" @click="onClickOverlay"></div>
      <div class="circle-dialog-wrapper">
        <div class="circle-dialog">
          <header>
            <slot name="title" />
            <span @click="close" class="circle-dialog-close"></span>
          </header>
          <main>
            <slot name="content" /> 
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import Button from "./Button.vue";
export default {
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    }, //是否要做到遮盖层关闭，默认是true
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
      //如果开启这个功能就调用这个close，否则什么都不做
    };
    const ok = () => {
      if (props.ok && props.ok !== false) {
        close();
      }
      //如果ok 存在，且props.ok执行之后的返回值不等于false，就close
    };
    const cancel = () => {
      props.cancel && props.cancel();
      close();
    };

    return {
      close,
      onClickOverlay,
      ok,
      cancel,
    };
  },
};
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.circle-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(black, 0.5);
  min-width: 15em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade-out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 6px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: "";
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
