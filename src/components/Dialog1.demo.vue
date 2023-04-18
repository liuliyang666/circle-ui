<demo>
 常规使用
</demo>
<template>
  <div>
    <Button @click="toggle">toggle</Button>
    <Dialog
      v-model:visible="x"
      :closeOnClickOverlay="false"
      :ok="f1"
      :cancel="f2"
    >
      <template v-slot:content>
        <strong>hi</strong>
        <div>hi2</div>
      </template>
      <template v-slot:title>
        <strong>加粗的标题</strong>
      </template>
    </Dialog>
  </div>
</template>

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import { Button } from "../lib/index";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";

export default {
  components: {
    Button,
    Dialog,
  },
  setup() {
    const x = ref(false); //x 的参考值为false
    const toggle = () => {
      x.value = !x.value; //x 的值等于 x 的值取相反值
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    return {
      x,
      toggle,
      f1,
      f2,
    };
  },
};
</script>
