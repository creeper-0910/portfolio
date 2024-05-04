<script setup lang="ts">
import { ref } from "vue";
let now_y = new Date().getFullYear().toString();
const year = ref("2024");
if(now_y != "2024") {
  year.value = "2024-" + now_y + " inagi saki";
}
</script>

<template>
  <v-divider class="divider-margin"></v-divider>
  <div class="footer-font footer-margin">
    {{ year }} inagi saki
    </div>
</template>

<style>
.footer-font {
  font-family: 'APJT';
  font-size: 120%;
}
.footer-margin {
  margin-left: 10px;
}
.divider-margin {
  margin-left: 20px;
  margin-right:20px;
}
</style>

