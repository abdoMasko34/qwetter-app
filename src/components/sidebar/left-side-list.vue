<template>
  <q-item
    clickable
    tag="a"
    target="_self"
    :to="to"
    class="text-black q-my-md"
      active-class="active"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" size="32px" color="primary"/>
    </q-item-section>

    <q-item-section>
      <q-item-label style="font-size: 1.2rem;"
      class="text-h6 text-weight-bold">{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      default: '#',
    },

    icon: {
      type: String,
      default: '',
    },
  },
});
</script>
