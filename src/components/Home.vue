<template>
    <div>
    <v-container>
      <v-row no-gutters align="start" class="custom-font">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="2" md="2" lg="2" xl="2" class="d-flex flex-row justify-center avater-margin">
        <v-avatar image="@/assets/avater.png" size="180"></v-avatar>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="7" md="8" lg="8" xl="8">
        <v-col>
          <v-row><font size="30">稲凪 咲</font></v-row>
          <v-row><font size="6">・好きなこと</font></v-row>
          <v-row><font size="5">　読書</font></v-row>
          <v-row><font size="5">　ゲーム</font></v-row>
          <v-row><font size="5">　お絵かき</font></v-row>
        </v-col>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
//
</script>

<style>
.custom-font {
  font-family: 'APJT';
  font-size: 100%;
}
.avater-margin {
  margin-top: 20px;
}
</style>
