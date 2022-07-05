<template>
  <form
    @submit.prevent="submitRecipeData"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
  >
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-first-name"
        >
          Name of Recipe
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          id="grid-first-name"
          type="text"
          v-model="name"
          placeholder="Name of Recipe"
        />
      </div>
      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Time to cook
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-last-name"
          v-model="timeToCook"
          type="text"
          placeholder="2 hour"
        />
      </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-full px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-password"
        >
          Total serve
        </label>
        <input
          class="block appearance-none w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
          id="grid-password"
          type="text"
          v-model="totalServe"
          placeholder="3 people"
        />
      </div>
    </div>
    <div class="-mx-3 md:flex mb-2">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-city"
        >
          Method
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-city"
          type="textarea"
          v-model="method"
          placeholder="descriptioon"
        />
      </div>

      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        >
          Status
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-zip"
          type="text"
          v-model="status"
          placeholder="(UnPublish/Publish)"
        />
      </div>
    </div>
    <div class="-mx-3 md:flex mb-2">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-city"
        >
          Ingredients with measurement
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-city"
          type="textarea"
          v-model="ingredientsWithMeasurement"
          placeholder="water ml 200"
        />
      </div>

      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        >
          Chef
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-zip"
          type="text"
          v-model="chef"
          placeholder="name of cook"
        />
      </div>
    </div>
    <button
      type="submit"
      class="bg-black my-5 px-4 py-2 text-lg font-semibold tracking-wider text-white rounded hover:bg-green-600 w-4/12"
    >
      Sbumit
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      name:'',
      timeToCook: '',
      totalServe: '',
      method: '',
      status: '',
      ingredientsWithMeasurement: '',
      chef: '',
    }
  },

  methods: {
    submitRecipeData() {
      const recipe = {
        name: this.name,
        timeToCook: this.timeToCook,
        totalServe: this.totalServe,
        method: this.method,
        status: this.status,
        ingredientsWithMeasurement: this.ingredientsWithMeasurement,
        chef: this.chef,
      }
      if (
        this.name != '' &&
        this.timeToCook != '' &&
        this.totalServe != '' &&
        this.method != '' &&
        this.status != '' &&
        this.ingredientsWithMeasurement != '' &&
        this.chef != ''
      ) {
        this.$store.commit('addRecipe', recipe)
        this.name != '' 
        this.timeToCook != '' 
        this.totalServe != '' 
        this.method != '' 
        this.status != '' 
        this.ingredientsWithMeasurement != '' 
        this.chef != ''
        this.$router.push({ path: '/recipe-list' })
      } else alert('Please fillup all the input box')
    },
  },
}
</script>

<style></style>
