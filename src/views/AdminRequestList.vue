<template>
  <div id="request">
    <h2>Список заявок</h2>
    <v-data-table
      :headers="headers"
      :items="events"
      :items-per-page="10"
      class="elevation-1"
      @click:row="openRequest"
    >
      <template v-slot:item.state="{ item }" >
        <v-chip v-if="item .state==='новая'"
          color="red"
          dark
        >
          {{ item.state }}
        </v-chip>
        <v-chip v-else
                color="transparent"
        >
          {{ item.state }}
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: 'AdminRequestList',
  data () {
    return {
      headers: [
        { text: '№ Заявки', align: 'start', value: 'idRequest' },
        { text: 'Название мероприятия', value: 'event' },
        { text: 'Дата', value: 'data' },
        { text: 'Организация', value: 'organization' },
        { text: 'Статус', value: 'state' }
      ],
      events: [
        {
          idRequest: '1',
          data: '05.01.2022',
          event: 'Новогодний праздник для детей таджикской воскресной школы «Нур»',
          organization: 'Самарская региональная общественная организация таджикистанцев«ПАЙВАНД-ЕДИНСТВО»',
          state: 'забронирована'
        },
        {
          idRequest: '2',
          data: '19.01.2022',
          event: 'Вадохрышча (Праздник Крещения)',
          organization: 'Самарская областная общественная организация «Русско-Белорусское Братство 2000»',
          state: 'отклонена'
        },
        {
          idRequest: '5',
          data: '07.04.2022',
          event: 'Мероприятие, посвященное дню материнства и красоты',
          organization: 'Самарская региональная Армянская национально-культурная автономия «НАИРИ»',
          state: 'принята'
        },
        {
          idRequest: '6',
          data: '15.04.2022',
          event: 'День азербайджанской культуры',
          organization: 'Самарская областная общественная организация «Лига азербайджанцев Самарской области»',
          state: 'принята'
        },
        {
          idRequest: '3',
          data: '13.02.2022',
          event: 'Армянский праздник Терендез',
          organization: 'Самарская региональная общественная организация «Армянская Община»',
          state: 'забронирована'
        },
        {
          idRequest: '7',
          data: '07.04.2022',
          event: 'Мероприятие, посвященное празднику Вардавар',
          organization: 'Самарская региональная общественная организация «Армянская Община»',
          state: 'забронирована'
        },
        {
          idRequest: '4',
          data: '12.03.2022',
          event: 'Поэтический вечер, посвященный творчеству Паруйра Севака',
          organization: 'Самарская региональная общественная организация «Армянская Община»',
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
