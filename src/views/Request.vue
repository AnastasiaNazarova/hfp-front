<template>
  <div id="request">
    <h2>Список заявок</h2>
    <v-btn :to="'/request/create'">Подать новую заявку</v-btn>
    <v-data-table
      :headers="headers"
      :items="events"
      :items-per-page="5"
      class="elevation-1"
      @click:row="openRequest"
    >
      <template v-slot:item.action="{ item }" >
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
      </template>
      <v-dialog v-model="dialogDelete" max-width="600px">
        <v-card>
          <v-card-title class="headline">Вы уверены что хотите удалить эту строку?</v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <template v-slot:item.actions="{ item }">
       <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
         mdi-pencil
       </v-icon>
       <v-icon
         small
         @click="deleteItem(item)"
       >
        mdi-delete
       </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'Request',
  data () {
    return {
      headers: [
        {
          text: 'Мероприятие',
          align: 'start',
          value: 'event'
        },
        { text: 'Дата', value: 'data' },
        { text: 'Статус', value: 'state' },
        { value: 'action' }
      ],
      events: [
        {
          data: '07.04.2022',
          event: 'Мероприятие, посвященное празднику Вардавар',
          state: 'забронирована'
        },
        {
          data: '12.03.2022',
          event: 'Поэтический вечер, посвященный творчеству Паруйра Севака',
          state: 'забронирована'
        },
        {
          data: '13.02.2022',
          event: 'Армянский праздник Терендез',
          state: 'забронирована'
        }
      ]
    }
  },
  methods: {
    // Открыть информацию по заявке. Страница перехода выбирается в зависимости от статуса заявки
    openRequest (index) {
      if (index.state === 'забронирована') this.$router.push({ name: 'RequestFullInform' })
      else this.$router.push({ name: 'RequestInform' })
    }
  }
}
</script>

<style>
#request{
  margin-top: 1%;
}
</style>
