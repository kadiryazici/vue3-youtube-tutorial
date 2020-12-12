<template>
   <span class="material-icons">
      {{ name }}
   </span>
</template>

<script lang="ts">
type Tabs = 'home' | 'album' | 'whatshot';
</script>
<script lang="ts" setup>
import { defineProps, PropType } from 'vue';
const props = defineProps({
   name: {
      type: String as () => Tabs,
      required: true,
   },
});
</script>
