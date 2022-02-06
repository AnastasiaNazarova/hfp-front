<template>
  <div>
    <h1>Полная информация по заявке</h1>
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
    <v-btn :to="'/request'">Вернуться к списку заявок</v-btn>
    <v-btn >Сохранить</v-btn>
  </div>
</template>

<script>
export default {
  name: 'RequestFullInform',
  data () {
    return {
      inform: [
        {
          property: 'Заявка №',
          value: '7'
        },
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
        },
        {
          property: 'Столы:',
          value: '2'
        },
        {
          property: 'Стулья:',
          value: '20'
        },
        {
          property: 'Микрофоны:',
          value: '5'
        },
        {
          property: 'Стойки:',
          value: '5'
        },
        {
          property: 'Микшерный пульт:',
          value: '+'
        },
        {
          property: 'Проектор:',
          value: '-'
        },
        {
          property: 'Экран:',
          value: '+'
        },
        {
          property: 'Ноутбук:',
          value: '-'
        },
        {
          property: 'Комментарий:',
          value: ''
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
