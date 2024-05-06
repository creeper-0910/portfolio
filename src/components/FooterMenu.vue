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
    <v-col>
      <v-row>
        相互リンク
      </v-row>
      <v-row>
        <a href="https://nullnyat.nca10.moe/"><img alt="nullnyat_banner" src="https://nullnyat.nca10.moe/nullnyat-banner.png"/></a>
        <a href="https://miriel.net"><img alt="miriel_banner" src="https://miriel.net/images/mirielnet.png"/></a>
        <!-- 今後はここに追加 -->
      </v-row>
      <v-row>
        相互リンク募集しています。
        連絡先のいずれかへご連絡ください。
      </v-row>
      <v-row>
        <img alt="inagi_banner" src="https://inagi-saki.work/banner.png"/>
      </v-row>
    </v-col>
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

