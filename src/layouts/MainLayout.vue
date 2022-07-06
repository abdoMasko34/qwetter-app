<template>
  <q-layout view="lHr LpR fFf">

    <q-header  class="bg-white text-black q-py-xs">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" color="primary"/>

        <q-toolbar-title class="text-weight-bold gt-sm">
          {{ current_route_name }}
        </q-toolbar-title>
        <q-icon name="fa-solid fa-crow" size="md" color="primary"
        class="q-pa-md lt-md header-icon"/>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered :width="270">
      <!-- drawer content -->
      <q-icon name="fa-solid fa-crow" size="md" color="primary" class="q-pa-md"/>
      <left-side-list v-for="link in essentialLinks"
      :key="link"
      :title="link.title"
      :icon="link.icon"
      :to="link.to"
      ></left-side-list>
      <!--  -->
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
      <!-- drawer content -->
      <q-input label="search" color="primary"  rounded  outlined dense
      bg-color="grey-1" class="q-px-sm">
         <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <!-- list -->
      <right-side-list v-for="list in 5" :key="list" class="q-mt-md"></right-side-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import leftSideList from 'src/components/sidebar/left-side-list.vue';
import rightSideList from 'src/components/sidebar/right-side-list.vue';

export default {
  components: {
    leftSideList,
    rightSideList,
  },
  data() {
    return {
      left: false,
      right: false,
      routeName: '',
      essentialLinks: [
        {
          title: 'Home', icon: 'home', to: '/home',
        },
        {
          title: 'Explore', icon: 'tag', to: '/explore',
        },
        {
          title: 'Notification', icon: 'notifications', to: '/notification',
        },
        {
          title: 'More', icon: 'more', to: '/more',
        },
        { title: 'about', icon: 'help', to: '/about' },
      ],
    };
  },
  computed: {
    current_route_name() {
      return this.routeName.substring('1');
    },
  },
  created() {
    this.routeName = this.$route.path;
  },
  updated() {
    this.routeName = this.$route.path;
  },
};
</script>
<style lang="scss" scoped>
.header-icon {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%)
}
</style>
