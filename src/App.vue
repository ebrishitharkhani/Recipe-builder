<template>
  <div class="flex p-10 items-center flex-col divide-y divide-black-500">

    <div class="sm:w-11/12 md:w-7/12 py-5">
      <menu-bar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menu from './components/Menu.vue'
import AddContact from './components/AddRecipe.vue'
import ContactList from './components/RecipeList.vue'
export default {
  components: {
    'menu-bar': menu,
    'add-recipe': AddContact,
    'recipe-list': ContactList,
  },
}
</script>

<style>
body {
  background: #f3f4f6;
}
</style>
