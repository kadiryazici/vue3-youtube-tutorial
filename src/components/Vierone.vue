<template>
   <div class="card">
      <div class="card-element card-header">
         <h3 class="m-0 p-0">
            <slot name="header" />
         </h3>
      </div>
      <div class="card-element card-body">
         <slot />
      </div>
      <div class="card-element card-footer">
         <small>
            <slot name="footer" />
            <button @click="emitEvent">Emit Event</button>
         </small>
      </div>
   </div>
</template>

<script lang="ts" setup>
import {
   ref,
   useContext,
   defineProps,
   toRefs,
   defineEmit,
   watchEffect,
   getCurrentInstance,
} from 'vue';

const msg = ref('hi');

const props = defineProps<{
   msg: 'hi' | 'bruh';
}>();
console.log(props.msg);

const emit = defineEmit({
   update: (msg: string) => msg,
   close: ({ msg }: { msg: string }) => {
      return msg;
   },
   noArgument: (param: boolean): boolean => {
      if (param) {
         return true;
      } else {
         return false;
      }
   },
   hi: null,
});

const emitEvent = () => {
   emit('close', { msg: 'yo mom' });
   emit('update', 'update');
   emit('noArgument', true);
   emit('hi', 'hello');
};

console.log(getCurrentInstance());
</script>

<script lang="ts">
export const a = ref('hi');
watchEffect(() => {
   console.log('a: ' + a.value);
});
export const setA = (v: string) => {
   a.value = v;
};
</script>

<style lang="scss" scoped>
.card {
   border: 1px solid rgb(177, 177, 177);
   box-shadow: 0px 0px 6px 1px rgb(182, 182, 182);
   border-radius: 20px;
   font-family: 'Arial';
   max-width: 500px;
   margin: 0 auto;
   .card-element {
      padding: 5px;
   }

   .card-header {
      text-align: center;
      border-bottom: 1px solid rgb(199, 199, 199);
      padding: 0px 10px;
   }

   .card-body,
   .card-footer {
      padding: 15px;
   }

   .card-footer {
      border-top: 1px solid rgb(199, 199, 199);
   }
}
</style>
