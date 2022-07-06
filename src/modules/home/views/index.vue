<template>
  <q-dialog :model-value="!!error">
      <q-card style="width:400px;height:200px">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">An Error Accurred</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>
        <q-card-section>
          {{error}}
        </q-card-section>
      </q-card>
    </q-dialog>
  <q-page >
      <div class="row q-py-lg q-px-md q-col-gutter-sm items-end">
        <div class="col">
              <q-input bottom-slots v-model="newQweet" counter maxlength="280" dense
                bordered
                placeholder="What's happing"
                autogrow
                unevaluated>
                <template v-slot:before>
                  <q-avatar size="xl">
                    <img src="https://cdn.quasar.dev/img/avatar5.jpg">
                  </q-avatar>
                </template>
              </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn rounded  label="Qweet" color="primary" size="16px"
        class="q-mb-lg"  no-caps :disabled="newQweet.length == 0" @click="addNewTweet"/>
        </div>
      </div>
      <q-separator class="separator"/>
       <qweet-list v-for="qweet in qweets"
       :key="qweet.key"
       :id="qweet.id"
       :qweet="qweet"
       @delete-error="ErrorOnDelete"
        ></qweet-list>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import qweetList from '../components/qweet-list.vue';

export default {
  name: 'home-page',
  components: {
    qweetList,
  },
  data() {
    return {
      newQweet: '',
      active: true,
      error: null,
    };
  },
  computed: {
    ...mapGetters('home', ['qweets']),
  },
  methods: {
    ...mapActions('home', ['addTweet', 'loadQweets']),
    addNewTweet() {
      this.addTweet({
        content: this.newQweet,
        date: '53456554',
      });
      this.newQweet = '';
      this.$q.notify({
        color: 'green-7',
        message: 'added successfully',
        icon: 'check',
        position: 'top',
      });
    },
    ErrorOnDelete(val) {
      this.error = val;
    },
  },
  created() {
    this.loadQweets();
  },
  updated() {
    this.loadQweets();
  },
};
</script>

<style lang="scss" scoped>
.separator  {
  height: 8px;
  background-color: rgba(0, 0, 0, 0.02)
}
</style>
