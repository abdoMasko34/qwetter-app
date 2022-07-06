<template>
  <q-item clickable v-ripple style="background-color: #fff;"
         class="flex items-start" active-class="tweet-item">
          <q-item-section avatar>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">
              <strong style="text-transform: capitalize;">
              anna trisa</strong>
              <span class="q-ml-sm">@Anna_Trisa</span>
            </q-item-label>
            <q-item-label>
              {{qweet.content}}
            </q-item-label>
            <div class="row justify-between q-mt-sm">
              <q-btn icon="fa-regular fa-comment" color="grey-6" round flat size="sm"
              class="comment-btn"/>
              <q-btn icon="fa-solid fa-repeat" color="grey-6" round flat size="sm"
               class="repeat-btn"/>
              <q-btn :icon="likeIcon" color="grey-6" round flat size="sm"
              class="like-btn" @click="likeQweet"/>
              <q-btn icon="fa-solid fa-trash" color="grey-6" round flat size="sm"
              class="delete-btn" @click="deleteQweetById(id)"/>
            </div>
          </q-item-section>
          <q-item-section side top>
            {{ realativeDate}}
          </q-item-section>
        </q-item>
</template>

<script>
import { mapActions } from 'vuex';
import { formatDistance } from 'date-fns';

export default {
  props: ['qweet', 'id'],
  data() {
    return {
      date: Date.now(),
      error: null,
      qweetIsLiked: false,
    };
  },
  computed: {
    realativeDate() {
      return formatDistance(this.date, new Date());
    },
    likeIcon() {
      return this.qweetIsLiked ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    },
  },
  methods: {
    ...mapActions('home', ['deleteQweet', 'loadQweets']),
    async deleteQweetById(id) {
      try {
        await this.deleteQweet(id);
        this.$q.notify({
          color: 'red-7',
          message: 'deleted',
          icon: 'delete',
          position: 'top',
        });
      } catch (err) {
        this.error = err.message || 'falid to delete';
        this.$emit('deleteError', this.error);
      } finally {
        this.loadQweets();
      }
    },
    likeQweet() {
      this.qweetIsLiked = !this.qweetIsLiked;
    },
  },
};
</script>

<style>

</style>
