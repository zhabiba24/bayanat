const MixI = Vue.defineComponent({
  props: {
    title: String,
    modelValue: Object,
    i18n: Object,
  },
    emits: ['update:modelValue'],
  data: function () {
    return {
      mix: {},
    };
  },

  watch: {
    modelValue: {
      handler(val) {
        if (val) {
            this.mix = val;
        }
      },
      immediate: true,
      deep: true,
    },
    mix: {
      handler: 'refresh',
      deep: true,
    },
  },

  mounted: function () {},

  methods: {
    refresh() {
      this.$emit('update:modelValue', this.mix);
    },
  },
  template: `
<v-card :title="title" class="pa-3">
     

      <v-card-text>
      <div>
      <v-radio-group v-model="mix.opts"  >
      <v-radio value="Yes" :label="i18n.yes_"></v-radio>
      <v-radio value="No" :label="i18n.no_"></v-radio>
      <v-radio value="Unknown" :label="i18n.unknown_"></v-radio>
      
        </v-radio-group>
        </div>
      <div class="flex-grow-1 ml-2">
      <v-textarea rows="1" :label="i18n.details_" v-model="mix.details" > </v-textarea>
      
        </div>
      
        </v-card-text>
        
    </v-card>

    `,
});
