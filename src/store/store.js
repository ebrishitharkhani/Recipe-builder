import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      recipeList: [
        {
          id: 1,
          name: 'rishit',
          timeToCook: '2hr',
          totalServe: '3people',
          method: 'Tech Company',
          status: 'Publish',
          chef: 'mohit',
          inputs:[
            {
              ingredientsName: 'water',
              unit: 'ml',
              numberOfunit: '500'
            },
            {
              ingredientsName: 'besan',
              unit: 'gm',
              numberOfunit: '500'
            },
          ]
        },
        {
            id: 2,
            name: 'meet',
            timeToCook: '2hr',
            totalServe: '3people',
            method: 'Tech Company',
            status: 'UnPublish',
            ingredientsWithMeasurement: 'water ml  200',
            chef: 'mohit'
        },
        {
            id: 3,
            name: 'raj',
            timeToCook: '2hr',
            totalServe: '3people',
            method: 'Tech Company',
            status: 'Publish',
            ingredientsWithMeasurement: 'water ml  200',
            chef: 'mohit'
        },
        {
            id: 4,
            name: 'jay',
            timeToCook: '2hr',
            totalServe: '3people',
            method: 'Tech Company',
            status: 'UnPublish',
            chef: 'mohit'
        },
      ],
    }
  },
  getters: {
    recipeList: (state) => {
      return state.recipeList
    },
  },
  mutations: {
    deleteRecipe(state, id) {
      const index = state.recipeList
        .map((x) => {
          return x.id
        })
        .indexOf(id)
      state.recipeList.splice(index, 1)
    },
    addRecipe(state, obj) {
      const recipe = {
        id: Date.now(),
        ...obj,
      }
      state.recipeList.push(recipe)
    },

    editRecipe(state, item) {
      const items = state.recipeList
      var foundIndex = items.findIndex((x) => x.id == item.id)
      items[foundIndex] = item
    },
  },
})

export default store
