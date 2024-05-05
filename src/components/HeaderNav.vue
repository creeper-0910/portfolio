<template>
  <v-app-bar class="title-font">
    <v-app-bar-title class="d-none d-sm-flex" style="cursor: pointer" @click="$router.push('/')" >
      稲凪 咲(いなぎ さき)のサイト
    </v-app-bar-title>
    <template v-slot:append>
      <v-btn to="/">
        ホーム
      </v-btn>
      <v-btn to="/illust">
        今までのイラスト
      </v-btn>
      <v-btn to="/contact">
        連絡先
      </v-btn>
      <v-btn
        class="theme-button-width"
        @click="changeTheme">
        <v-icon v-bind:icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'">
        </v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
import { useTheme } from 'vuetify';
  const theme = useTheme()
  const darkTheme = ref(true)
  const changeTheme = () => {
    if (theme.global.name.value == 'dark') {
      theme.global.name.value = 'light'
      darkTheme.value = false
    } else {
      theme.global.name.value = 'dark'
      darkTheme.value = true
    }
}
</script>

<style>
.title-font {
  font-family: 'APJT';
  font-size: 150%;
}
.theme-button-width {
  min-width: 30px !important;
}
</style>
