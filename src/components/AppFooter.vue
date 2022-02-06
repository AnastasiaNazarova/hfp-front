<template>
  <div>
    <v-footer color="#303F9F">
      <v-row id="footer">
        <v-col cols="7">
          <h3>&copy;  {{ new Date().getFullYear() }} «ВСЕ МЫ - РОССИЯ!»</h3>
          <p class="text--secondary">Информационный портал о дружбе народов</p>
        </v-col>
        <v-col >
          <p>443009, обл. Самарская, г.о. Самара, ул. Воронежская, д. 9</p>
          <p> +7 (846) 995-35-78</p>
          <p> samddn@samddn.ru</p>
          <p>445021, обл. Самарская, г.о. Тольятти, б-р Ленина, д.1,</p>
          <p>ДК «Тольятти» им. Н.В. Абрамова.</p>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style >
#footer{
  margin-top: 1%;
}
#footer p{
  line-height: 10%;
}
</style>
