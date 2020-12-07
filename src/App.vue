<template inherit-attrs="true">
   BU DA VIERONE.VUE DOSYASIDIR
   <VieroneComponent
      @update="$log($event)"
      @close="testFunction($event)"
      @noArgument="$log($event)"
      @hi="$log($event)"
      :msg="'bruh'"
   >
      MERHABALAR BU VERİ SANA GELDİ BU DA A: {{ a }}
      <button @click="setA('sleamlar güzellik')">Set A</button>
      <template #header>
         hepsiburada rezaleti
      </template>

      <template #footer>yazar: vierone 1saat önce</template>
   </VieroneComponent>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue';
import VieroneComponent, { a, setA } from '@/components/Vierone.vue';

const msg = ref('Bu vierone componentinden bir değerdir.');
function testFunction<T>(e: T) {
   console.log(e);
}
const instance = getCurrentInstance()!;
console.log(instance.appContext.config.globalProperties.$log);
</script>

<style lang="scss" scoped></style>
