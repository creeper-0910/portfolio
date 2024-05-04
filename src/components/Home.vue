<template>
    <div>
    <v-container>
      <v-row no-gutters align="start" class="custom-font">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="2" md="2" lg="2" xl="2" class="d-flex flex-row justify-center avater-margin">
        <v-avatar image="@/assets/avater.png" size="180"></v-avatar>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="3.5" md="4" lg="4" xl="4">
        <v-col>
          <v-row><font size="30">稲凪 咲</font></v-row>
          <v-row><font size="6">・好きな事</font></v-row>
          <v-row><font size="5">　プログラミング</font></v-row>
          <v-row><font size="5">　音楽</font></v-row>
          <v-row><font size="5">　読書</font></v-row>
          <v-row><font size="5">　ゲーム</font></v-row>
          <v-row><font size="5">　お絵かき</font></v-row>
        </v-col>
      </v-col>
      <v-col cols="12" sm="3.5" md="4" lg="4" xl="4">
        <v-col class="description-margin">
          <v-row><font size="6">・出来る事</font></v-row>
          <v-row><font size="5">　プログラミング</font></v-row>
          <v-row><font size="5">　お絵かき</font></v-row>
          <v-row><font size="5">　会話</font></v-row>
        </v-col>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    </v-container>
    <v-divider class="divider-margin"></v-divider>


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
.description-margin {
  margin-top: 70px;
}
.divider-margin {
  margin-left: 20px;
  margin-right:20px;
}
</style>
