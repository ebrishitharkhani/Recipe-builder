import { createRouter, createWebHashHistory } from 'vue-router'

import AddRecipe from './components/AddRecipe.vue'
import RecipeList from './components/RecipeList.vue'

const routes = [
  {
    path: '/',
    redirect: '/recipe-list',
  },

  {
    path: '/recipe-list',
    component: RecipeList,
    name: RecipeList,
  },

  {
    path: '/add-recipe',
    component: AddRecipe,
    name: AddRecipe,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
