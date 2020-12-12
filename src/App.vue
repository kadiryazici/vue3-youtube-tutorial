<template>
   <div>
      app vue
      <IconVue :name="'home'" />
   </div>
</template>
<script lang="ts" setup>
import { defineAsyncComponent } from 'vue';
import IconVue from './components/Icon.vue';

const maPromise = () =>
   new Promise<void>((resolve) => {
      setTimeout(() => {
         resolve();
      }, 3000);
   });

// const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
// const json = await res.json();
await maPromise();
console.log('component did mount');
</script>

<style lang="scss">
@import url('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
</style>
