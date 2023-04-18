<demo>
 常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="isVisible"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:content>
        <strong>你好</strong>
        <div>你真好看！</div>
      </template>
      <template v-slot:title>
        <strong>提示</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import { Button } from "../lib/index";
import { ref } from "vue";

export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const isVisible = ref(false);
    const toggle = () => {
      isVisible.value = !isVisible.value;
    };
    const f1 = () => {
      return true;
    };
    const f2 = () => {};
    return {
      isVisible,
      toggle,
      f1,
      f2,
    };
  },
};
</script>
