<template>
  <Transition name="fade">
    <div
      v-if="showing"
      class="modal-mask overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
      @click.self="close"
    >
      <div class="relative w-6/12 bg-green-100 shadow-lg rounded-md p-5">
        <button
          aria-label="close"
          class="absolute top-0 right-0 text-4xl text-gray-500 my-2 mx-4"
          @click.prevent="close"
        >
          ×
        </button>{{editRecipeId.inputs}}
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
                :value="editRecipeId.name"
                ref="name"
                placeholder="Jane"
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
                :value="editRecipeId.timeToCook"
                type="text"
                ref="timeToCook"
                placeholder="3 hour"
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
                :value="editRecipeId.totalServe"
                type="text"
                ref="totalServe"
                placeholder="4 people"
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
                type="textarea"
                :value="editRecipeId.method"
                ref="method"
                placeholder="Description"
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
                type="text"
                :value="editRecipeId.status"
                ref="status"
                placeholder="(UnPublish/Publish)"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-2">
            

            <div class="md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
              >
                Chef
              </label>
              <input
                class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
                type="text"
                :value="editRecipeId.chef"
                ref="chef"
                placeholder="(UnPublish/Publish)"
              />
            </div>
          </div>
          <div class="-mx-3 md:flex mb-2" v-for="item in editInputs" :key="item.index">
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
        
          :value="item.ingredientsName"
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
          
          :value="item.unit"
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
          
          :value="item.numberOfunit"
          placeholder="Number of unit"
        />
      </div>
    
       <span>
         </span>
      
    </div>
          <button
            type="submit"
            class="bg-black my-5 px-4 py-2 text-lg font-semibold tracking-wider text-white rounded hover:bg-green-600 w-4/12"
          >
            Sbumit
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean,
    },
    editRecipeId: {},
    editInputs:{},
  },
  data() {
    return {
    // item:[
    //   {
    //       ingredientsName: '',
    //   unit: '',
    //   numberOfunit:'',
    //   }
    // ],
      
    }
    
  },
  methods: {
    close() {
      this.$emit('close')
    },
    submitRecipeData() {
      if (
        this.$refs.name.value != '' &&
        this.$refs.timeToCook.value != '' &&
        this.$refs.totalServe.value != '' &&
        this.$refs.method.value != '' &&
        this.$refs.status.value != '' &&
        this.$refs.chef.value != '' && 
        this.$set.unit.value != ''
      
      ) {
        const recipe = {
          id: this.editRecipeId.id,
          // inputs: this.editInputs.editRecipeId,
          name: this.$refs.name.value,
          timeToCook: this.$refs.timeToCook.value,
          totalServe: this.$refs.totalServe.value,
          method: this.$refs.method.value,
          status: this.$refs.status.value,
          chef: this.$refs.chef.value,
          // inputs: this.item
          unit:this.$set.unit.vale,

        }
          console.log("thissss",recipe);

        this.$store.commit('editRecipe', recipe)
        this.$emit('close')
      } else alert('Empty Input not allowed')
    },
  },
}
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal-mask {
  z-index: 9998;
  background-color: rgba(19, 15, 15, 0.5);
  transition: opacity 0.3s ease;
}
</style>
