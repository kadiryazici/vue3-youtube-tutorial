<template>
   <span class="material-icons">
      {{ name }}
   </span>
</template>

<script lan="ts" setup>
import { defineProps } from 'vue';
type Tabs = 'home' | 'album' | 'whatshot';
const props = defineProps({
   name: {
      type: String as () => Tabs,
      required: true
   }
})
</script>
