const PopDateField = {
  props: ['modelValue', 'label'],
  emits: ['update:modelValue'],

  computed: {
    date: {
      get() {
        return this.modelValue;
      },
      set(value) {
        if (value === '') {
          this.$emit('update:modelValue', null);
        } else {
          this.$emit('update:modelValue', this.formatDate(value));
        }
      }
    }
  },

  methods: {
    formatDate(date) {
      return date ? dayjs(date).format('YYYY-MM-DDTHH:mm') : '';
    }
  },

  template: `
    <v-date-input class="flex-fill" :label="label" :rules="[$root.rules.dateValidation]" variant="outlined" hide-actions v-model="date" @click:clear="$emit('update:modelValue', null)" clearable></v-date-input>
  `
};
