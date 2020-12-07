export {};
declare module 'vue' {
   interface ComponentCustomProperties {
      $log: typeof console.log;
   }
}
