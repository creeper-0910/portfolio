<template>
    <div>
    <v-container>
      <v-row no-gutters align="start" class="custom-font">
      <v-col cols="12" class="d-flex flex-row justify-center title-margin">
          <font size="30">イラスト</font>
      </v-col>
      <v-col class="d-flex flex-row justify-center title-margin">
        <font size="2">※並びは仕様上ランダムです</font>
      </v-col>
    </v-row>
    </v-container>
    <v-divider class="divider-margin"></v-divider>
    <v-container>
      <v-row>
          <v-col cols="6" v-for="illusts in illust_url" :key="illusts.key">
            <v-img :src="illusts"/>
          </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
const illust_url = ref()
onMounted(async () => {
  try {
        const response = await fetch('https://raw.githubusercontent.com/creeper-0910/illust/main/data.txt');
        const text = await response.text();
        const lines = text.split('\n');
        illust_url.value = lines.map(item => "https://raw.githubusercontent.com/creeper-0910/illust/main" + item);
      } catch (error) {
        console.error('テキストファイルの取得やパース中にエラーが発生しました:', error);
      }
});
</script>

<style>
.custom-font {
  font-family: 'APJT';
  font-size: 100%;
}
.title-margin {
  margin-top: 5px;
}
.divider-margin {
  margin-left: 20px;
  margin-right:20px;
}
</style>
