const ActivitySearchBox = Vue.defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    i18n: {
      type: Object,
    },
  },

  mixins: [globalMixin],

  emits: ['update:modelValue', 'search'],

  data: () => {
    return {
      translations: window.translations,
      q: {},
    };
  },
  watch: {
    q: {
      handler(newVal) {
        this.$emit('update:modelValue', newVal);
      },
      deep: true,
    },

    modelValue: function (newVal, oldVal) {
      if (newVal !== oldVal) {
        this.q = newVal;
      }
    },
  },
  created() {
    this.q = this.modelValue;
  },

  template: `
    <v-sheet>
      <v-card class="pa-8">
        <v-card-title>
          {{ i18n.searchActivities_ }}
          <v-btn icon="mdi-close" variant="plain" class="float-right" @click="$emit('close')"></v-btn>
        </v-card-title>
        
        <v-card-text>
        <span class="caption">{{i18n.user_}}</span>

            <v-chip-group
                                column
                                v-model="q.user"
                                
                        >
                            <v-chip :value="user.id" small label v-for="user in $root.users" filter
                                    >{{user.name}}</v-chip>
                        </v-chip-group>
        </v-card-text>
        <v-card-text>
        
          <span class="caption">{{ i18n.selType_ }}</span>

          <v-chip-group active-class="primary--text" column v-model="q.model">
            <v-chip small v-for="item in $root.models" :value="item" filter>{{item}}</v-chip>
          </v-chip-group>
        </v-card-text>

        <v-card-text>


          <span class="caption">{{ i18n.selAction_ }}</span>

          <v-chip-group active-class="primary--text" column v-model="q.action">
            <v-chip small class="ma-1" v-for="action in $root.actionTypes"  :value="action" filter> {{ action }}</v-chip>
          </v-chip-group>


        </v-card-text>
        
        <v-card-text class="pt-4">
          
          <pop-date-range-field
              :i18n="i18n"               
                                :label="i18n.activityDate_"
                                v-model="q.created"
          ></pop-date-range-field>
          
        </v-card-text>


      </v-card>
      <v-card tile class="text-center  search-toolbar" elevation="10" color="grey lighten-5">
        <v-card-text>
          <v-spacer></v-spacer>
          <v-btn @click="q={}" text>{{ i18n.clearSearch_ }}</v-btn>

          <v-btn @click="$emit('search',q)" color="primary">{{ i18n.search_ }}</v-btn>
          <v-spacer></v-spacer>
        </v-card-text>

      </v-card>

    </v-sheet>
  `,
});
