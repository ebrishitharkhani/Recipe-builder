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
    <!-- <label for="default-toggle" class="inline-flex relative items-center cursor-pointer">
  <input type="checkbox" value="" id="default-toggle" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Toggle me</span>
</label> -->
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
    <div class="-mx-3 md:flex mb-2" v-for="(input,k) in inputs" :key="k">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-city"
        >
          Ingredients Name
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-city"
          type="textarea"
          v-model="input.ingredientsName"
          placeholder="Ingredients Name"
        />
      </div>

      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        >
          unit(ml/grams/spoon/tspoon/pices)
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-zip"
          type="text"
          v-model="input.unit"
          placeholder="unit(ml/grams/spoon/tspoon/pices)"
        />
      </div>
      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        >
          Number of unit
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-zip"
          type="text"
          v-model="input.numberOfunit"
          placeholder="Number of unit"
        />
      </div>
    
       <span>
      <i class="fas fa-minus-circle " @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">Remove</i>
      <i class="fas fa-plus-circle" @click="add(k)" v-show="k == inputs.length-1">Add fields</i>
    </span>
      
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
      inputs:[{
        ingredientsName:'',
        unit:'',
        numberOfunit:''
      }],
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
    add () {
      this.inputs.push({
        ingredientsName:'',
        unit:'',
        numberOfunit:''
      })
      console.log("sdfgh",this.inputs)
    },

    remove (index) {
      this.inputs.splice(index, 1)
    },
    submitRecipeData() {
      const recipe = {
        name: this.name,
        timeToCook: this.timeToCook,
        totalServe: this.totalServe,
        method: this.method,
        status: this.status,
        ingredientsWithMeasurement: this.ingredientsWithMeasurement,
        chef: this.chef,
        inputs:this.inputs,
      }
      if (
        this.name != '' &&
        this.timeToCook != '' &&
        this.totalServe != '' &&
        this.method != '' &&
        this.status != '' &&
        this.ingredientsWithMeasurement != '' &&
        this.chef != '' &&
        this.inputs !=''
      ) {
        this.$store.commit('addRecipe', recipe)
        this.name != '' 
        this.timeToCook != '' 
        this.totalServe != '' 
        this.method != '' 
        this.status != '' 
        this.ingredientsWithMeasurement != '' 
        this.chef != ''
        this.inputs != ''
        this.$router.push({ path: '/recipe-list' })
      } else alert('Please fillup all the input box')
    },
  },
}
</script>

<style scoped>
.add-more-btn{
  background: #000;
  color: #fff;
  padding: 4px 4px;
  height: 35px;
  margin-top: 30px;
}
</style>
