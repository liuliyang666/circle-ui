<template>
  <button
    class="circle-button"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <span v-if="loading" class="circle-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts" setup="props">
import { computed } from "vue";
const props = defineProps<{
  theme?: "button" | "text" | "link";
  size?: "normal" | "big" | "small";
  level?: "normal" | "main" | "danger";
  disabled?: boolean;
  loading?: boolean;
}>();
const { theme = "button", size, level } = props;
defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();
const classes = computed(() => {
  return {
    [`circle-theme-${theme}`]: theme,
    [`circle-size-${size}`]: size,
    [`circle-level-${level}`]: level,
  };
});
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #088efc;
$radius: 4px;
$red: red;
$grey: grey;

button.circle-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  margin: 8px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: 250ms;
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.circle-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,
    &:focus {
      color: lighten($blue, 10%);
    }
  }
  &.circle-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.circle-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.circle-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }
  &.circle-theme-button {
    &.circle-level-main {
      background: $blue;
      color: white;
      border-color: $blue;
      &:hover,
      &:focus {
        background: darken($blue, 10%);
        border-color: darken($blue, 10%);
      }
    }
    &.circle-level-danger {
      background: $red;
      border-color: $red;
      color: white;
      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }
  }
  &.circle-theme-link {
    &.circle-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.circle-theme-text {
    &.circle-level-main {
      color: $blue;
      &:hover,
      &:focus {
        color: darken($blue, 10%);
      }
    }
    &.circle-level-danger {
      color: $red;
      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
  }
  &.circle-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
      &:hover {
        border-color: $grey;
      }
    }
  }
  &.circle-theme-link,
  &.circle-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $grey;
    }
  }
  > .circle-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: circle-spin 1s infinite linear;
  }
}
@keyframes circle-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
