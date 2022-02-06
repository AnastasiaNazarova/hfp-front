<template>
  <form>
    <v-slider
      v-model="sliderTable"
      class="align-center"
      label="Количество столов"
      :max="maxTable"
      :min="minTable"
      hide-details
    >
      <template v-slot:append>
        <v-text-field
          v-model="sliderTable"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
        ></v-text-field>
      </template>
    </v-slider>
    <v-slider
      v-model="sliderChair"
      class="align-center"
      label="Количество стульев"
      :max="maxChair"
      :min="minChair"
      hide-details
    >
      <template v-slot:append>
        <v-text-field
          v-model="sliderChair"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
        ></v-text-field>
      </template>
    </v-slider>
    <v-slider
      v-model="sliderMicrophone"
      class="align-center"
      label="Количество микрофонов"
      :max="maxMicrophone"
      :min="minMicrophone"
      hide-details
    >
      <template v-slot:append>
        <v-text-field
          v-model="sliderMicrophone"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
        ></v-text-field>
      </template>
    </v-slider>
    <v-slider
      v-model="sliderStand"
      class="align-center"
      label="Количество стоек"
      :max="maxStand"
      :min="minStand"
      hide-details
    >
      <template v-slot:append>
        <v-text-field
          v-model="sliderStand"
          class="mt-0 pt-0"
          hide-details
          single-line
          type="number"
          style="width: 60px"
        ></v-text-field>
      </template>
    </v-slider>
    <v-textarea
      label="Комментарий"
      value=""
    ></v-textarea>
    <v-checkbox
      v-model="checkboxMixing"
      label="Микшерный пульт"
    ></v-checkbox>
    <v-checkbox
      v-model="projector"
      label="Проектор"
    ></v-checkbox>
    <v-checkbox
      v-model="screen"
      label="Экран"
    ></v-checkbox>
    <v-checkbox
      v-model="laptop"
      label="Ноутбук"
    ></v-checkbox>
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

<style>
#checkboxId{
  margin-bottom: 1px;
}
</style>
<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength, email } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  validations: {
    eventName: { required, maxLength: maxLength(200) },
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
    checkbox: false,
    mixingConsole: false,
    projector: false,
    screen: false,
    laptop: false,
    minTable: 0,
    maxTable: 10,
    minChair: 0,
    maxChair: 100,
    minMicrophone: 0,
    maxMicrophone: 10,
    minStand: 0,
    maxStand: 10
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
      !this.$v.eventName.maxLength && errors.push('Name must be at most 200 characters long')
      !this.$v.eventName.required && errors.push('Name is required.')
      return errors
    }
  },
  methods: {
    submit () {
      this.$router.push({ name: 'Request' })
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
