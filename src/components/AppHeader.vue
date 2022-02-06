<template>
  <div id="header">
    <v-app-bar height="234"
               dark
               src="@/assets/flag.jpg"
               >
          <v-toolbar-title id="toolbar-title">
            <!--v-row justify="center"-->
              <!--v-col-->
            <v-row>
              <v-col >
                  <v-img src="@/assets/logo.png"></v-img>
              </v-col>
              <v-col  >
                  <h3>Информационный портал о дружбе народов</h3>
                  <h2 >ВСЕ МЫ - РОССИЯ!</h2>
              </v-col>
              <v-col > <p id="kostul">0000000000000000000000000000000000000000000000000000000000000 </p>  </v-col >
              <v-col >
                <v-text-field
                  v-model="eventName"
                  label="e-mail"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="eventName"
                  label="пароль"
                  required
                ></v-text-field>
                <v-btn color="blue darken-1" >Вход</v-btn>
                <!--
                <p>arm_community@mail.ru</p>
                <v-btn class="red">Выход</v-btn>-->
              </v-col>
            </v-row>
            <!--/v-col-->
              <!--v-col-->
              <!--/v-col-->
              <!--v-col   class="d-flex justify-end mb-6"-->
              <!--/v-col-->
            <!--/v-row-->
          </v-toolbar-title>
    </v-app-bar>
    <v-toolbar>
      <v-toolbar-items id="toolbar-items">
        <v-btn id="btnHeader"  v-for="(item,i) in menuItems" :key="`menuitem${i}`" :to="item.route">
          {{ item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  computed: {
    menuItems () {
      return [
        {
          title: 'Новости',
          route: '/'
        },
        {
          title: 'Дом дружбы народов',
          route: '/'
        },
        {
          title: 'Этнокультурная карта',
          route: '/'
        },
        {
          title: 'Видео',
          route: '/'
        },
        {
          title: 'Контактная информация',
          route: '/'
        },
        {
          title: 'Заявка на мероприятие',
          route: '/request'
        }
      ]
    }
  }
}
</script>

<style>
#header{
}
#btnHeader{
  padding: 10px;
}
#toolbar-items{
  margin-left: 5%;
}
#kostul{
  color: transparent;
}
#login{
  flex-direction: column;
  justify-content: end;
}
#toolbar-title{
  justify-content: center;
}
</style>
