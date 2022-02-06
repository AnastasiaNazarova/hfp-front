<template>
  <v-app id="app">
    <AppHeader></AppHeader>
    <v-content id="content">
      <router-view/>
    </v-content>
    <AppFooter></AppFooter>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import AppFooter from '@/components/AppFooter'
export default {
  components: {
    AppFooter,
    AppHeader
  }
}
</script>

<style>
#content{
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
