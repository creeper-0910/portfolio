<template>
    <div>
    <v-container>
      <v-row no-gutters align="start" class="custom-font">
      <v-spacer></v-spacer>
      <v-col cols="12" sm="2" md="2" lg="2" xl="2" class="d-flex flex-row justify-center avater-margin">
        <v-avatar image="@/assets/avater.webp" size="180"></v-avatar>
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
    <v-container>
      <v-row no-gutters align="start" class="custom-font">
      <v-spacer class="spacer-wide"></v-spacer>
      <v-col cols="12" sm="3.5" md="4" lg="4" xl="4" class="d-flex flex-row justify-center">
        <v-col>
          <v-row><font size="30">経歴</font></v-row>
          <v-row><font size="5">2017年7月: Youtube開設</font></v-row>
          <v-row><font size="5">2018年4月: Twitter開設</font></v-row>
          <v-row><font size="5">2019年10月: github開設</font></v-row>
          <v-row><font size="5">2021年9月: Ablaze参加</font></v-row>
          <v-row><font size="5">2023年2月: Misskey開設</font></v-row>
          <v-row><font size="5">2024年1月: BlueSky開設</font></v-row>
        </v-col>
      </v-col>
      <v-col cols="12" sm="3.5" md="4" lg="4" xl="4">
        <v-col class="description-margin">
          <v-row><font size="5">(以下所属履歴)</font></v-row>
          <v-row><font size="5">Miranham</font></v-row>
          <v-row><font size="5">Milai</font></v-row>
          <v-row><font size="5">古明地ソフト</font></v-row>
          <v-row><font size="5">VCBorn</font></v-row>
          <v-row><font size="5">Senrai</font></v-row>
        </v-col>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
    </v-container>
    <v-spacer class="spacer-tall"></v-spacer>
  </div>
</template>

<script setup lang="ts">

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
.spacer-wide {
  margin-left: 255px;
}
.spacer-tall {
  margin-top: 255px;
}
</style>
