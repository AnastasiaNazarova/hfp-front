<template>
<div>
  <h1>Информация по заявке</h1>
  <v-simple-table id="requestInformTable">
    <template v-slot:default>
      <tbody>
      <tr
        v-for="item in inform"
        :key="item.name"
      >
        <td>{{ item.property }}</td>
        <td>{{ item.value }}</td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
  <v-btn :to="'/request/add_inform'">Заполнить дополнительную информацию</v-btn>
  <v-btn :to="'/request'">Вернуться к списку заявок</v-btn>
</div>
</template>

<script>
export default {
  name: 'RequestInform',
  data () {
    return {
      inform: [
        {
          property: 'ФИО:',
          value: 'Грачя Хансанамян Вагинакович '
        },
        {
          property: 'Организация:',
          value: 'Самарская региональная общественная организация «Армянская Община»'
        },
        {
          property: 'Номер телефона:',
          value: '880055050'
        },
        {
          property: 'E-mail:',
          value: 'arm_community@mail.ru'
        },
        {
          property: 'Мероприятие:',
          value: 'Мероприятие, посвященное празднику Вардавар'
        },
        {
          property: 'Дата:',
          value: '07.04.2022'
        },
        {
          property: 'Время:',
          value: '19-00'
        },
        {
          property: 'Помещения:',
          value: '104, 201'
        }
      ]
    }
  }
}
</script>

<style>
#requestInformTable{
  margin-bottom: 4%;
}
</style>
