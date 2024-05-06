<template>
    <v-container>
      <v-row no-gutters align="start" class="custom-font">
      <v-col class="d-flex flex-row justify-center title-margin">
          <font size="30">連絡先</font>
      </v-col>
    </v-row>
    </v-container>
    <v-divider class="divider-margin"></v-divider>
    <v-container>
      <v-col no-gutters align="start" class="custom-font">
      <v-row class="d-flex flex-row justify-center title-margin">
        <font size="5">Youtube: <a href="https://youtube.com/@inagi_saki?si=xuCUvp219f-99YK_">@inagi_saki</a></font>
      </v-row>
      <v-row class="d-flex flex-row justify-center title-margin">
        <font size="5">Twitter(旧X): <a href="https://twitter.com/Riku_2004">@Riku_2004</a></font>
      </v-row>
      <v-row class="d-flex flex-row justify-center title-margin">
        <font size="5">Misskey.io: <a href="https://misskey.io/@inagi_saki">@inagi_saki</a></font>
      </v-row>
      <v-row class="d-flex flex-row justify-center title-margin">
        <font size="5">bsky.app: </font>
        <font size="5"><a href="https://bsky.app/profile/inagi-saki.bsky.social">@inagi-saki.bsky.social</a></font>
      </v-row>
      <v-row class="d-flex flex-row justify-center title-margin">
        <font size="5">github: <a href="https://github.com/creeper-0910">creeper-0910</a></font>
      </v-row>
      <v-row class="d-flex flex-row justify-center title-margin">
        <font size="5">メールアドレス: 非公開</font>
      </v-row>
    </v-col>
    </v-container>
</template>

<script setup lang="ts">
//
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
.contact-margin {
  margin-left: 10px;
}
a {
  text-decoration:none;
}
</style>
