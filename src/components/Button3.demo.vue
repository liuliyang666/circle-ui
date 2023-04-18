<demo>
  支持等级
  </demo>
<template>
  <div>
    <Button level="main">Main 按钮</Button>
    <Button>Normal 按钮</Button>
    <Button level="danger">Danger 按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">MainLink 按钮</Button>
    <Button theme="link">NormalLink 按钮</Button>
    <Button theme="link" level="danger">Danger 按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">MainText 按钮</Button>
    <Button theme="text">NormalText 按钮</Button>
    <Button theme="text" level="danger">DangerText按钮</Button>
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
