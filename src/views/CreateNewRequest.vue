<template>
  <form>
    <v-text-field
      v-model="eventName"
      :error-messages="txtFieldErrors"
      :counter="200"
      label="Название мероприятия"
      required
      @input="$v.eventName.$touch()"
      @blur="$v.eventName.$touch()"
    ></v-text-field>
    <v-select
      v-model="select"
      multiple
      :items="items"
      :error-messages="selectErrors"
      label="Помещение"
      required
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
    ></v-select>
    <v-flex xs12 sm6 md4>
      <v-menu
        ref="dataMenu"
        v-model="dataMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Дата мероприятия"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker :first-day-of-week="1"
                       locale="ru"
          v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dataMenu = false">Отмена</v-btn>
          <v-btn flat color="primary" @click="$refs.dataMenu.save(date)">ОК</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs11 sm5>
      <v-menu
        ref="timeMenu"
        v-model="timeMenu2"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="time"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
            label="Время мероприятия"
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-time-picker
          v-if="timeMenu2"
          v-model="time"
          full-width
          @click:minute="$refs.timeMenu.save(time)"
        ></v-time-picker>
      </v-menu>
    </v-flex>
    <v-btn
      @click="submit"
    >
      Отправить
    </v-btn>
    <v-btn @click="cansel">
      Отмена
    </v-btn>
  </form>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    eventName: { required, maxLength: maxLength(50) },
    email: { required, email },
    select: { required }
  },
  data: () => ({
    eventName: '',
    email: '',
    select: null,
    items: [
      'Кабинет 104',
      'Кабинет 105',
      'Кабинет 201',
      'Кабинет 204',
      'Кабинет 317'
    ],
    date: new Date().toISOString().substr(0, 10),
    dataMenu: false,
    dataMenu2: false,
    timeMenu: false,
    timeMenu2: false,
    time: null
  }),
  computed: {
    selectErrors () {
      const errors = []
      if (!this.$v.select.$dirty) return errors
      !this.$v.select.required && errors.push('Item is required')
      return errors
    },
    txtFieldErrors () {
      const errors = []
      if (!this.$v.eventName.$dirty) return errors
      !this.$v.eventName.maxLength && errors.push('Название не должно превышать 200 символов')
      !this.$v.eventName.required && errors.push('Необходимо написать название')
      return errors
    }
  },
  methods: {
    submit () {
      this.$v.$touch()
    },
    cansel () {
      this.$router.push({ name: 'Request' })
    }
  }
}
</script>

<codepen-resources lang="json">
{
"js": [
"https://cdn.jsdelivr.net/npm/vuelidate/dist/vuelidate.min.js",
"https://cdn.jsdelivr.net/npm/vuelidate/dist/validators.min.js"
]
}
</codepen-resources>

<codepen-additional>
const { required, maxLength, email } = validators
const validationMixin = vuelidate.validationMixin

Vue.use(vuelidate.default)
</codepen-additional>
