<demo>
支持显示加载中
</demo>

<template>
  <div>
    <Button loading>Loading</Button>
    <Button>加载成功</Button>
  </div>
</template>
<script lang="ts">
import { Button } from "../lib/index";
export default {
  components: {
    Button,
  },
};
</script>
