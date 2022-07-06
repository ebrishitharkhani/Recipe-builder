<template>
  <form
    @submit.prevent="submitRecipeData"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
  >
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-grey-darker text-xs
            font-bold
            mb-2
          "
          for="grid-first-name"
        >
          Name of Recipe
        </label>
        <input
          class="
            appearance-none
            block
            w-full
            bg-grey-lighter
            text-grey-darker
            border border-red
            rounded
            py-3
            px-4
            mb-3
          "
          id="grid-first-name"
          type="text"
          v-model="name"
          placeholder="Name of Recipe"
        />
      </div>
      <div class="md:w-1/2 px-3">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-grey-darker text-xs
            font-bold
            mb-2
          "
          for="grid-last-name"
        >
          Time to cook
        </label>
        <input
          class="
            appearance-none
            block
            w-full
            bg-grey-lighter
            text-grey-darker
            border border-grey-lighter
            rounded
            py-3
            px-4
          "
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
          class="
            block
            uppercase
            tracking-wide
            text-grey-darker text-xs
            font-bold
            mb-2
          "
          for="grid-password"
        >
          Total serve
        </label>
        <input
          class="
            block
            appearance-none
            w-full
            bg-grey-lighter
            text-grey-darker
            border border-grey-lighter
            rounded
            py-3
            px-4
            mb-3
          "
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
          class="
            block
            uppercase
            tracking-wide
            text-grey-darker text-xs
            font-bold
            mb-2
          "
          for="grid-city"
        >
          Method
        </label>
        <input
          class="
            appearance-none
            block
            w-full
            bg-grey-lighter
            text-grey-darker
            border border-grey-lighter
            rounded
            py-3
            px-4
          "
          id="grid-city"
          type="textarea"
          v-model="method"
          placeholder="descriptioon"
        />
      </div>

      <div class="md:w-1/2 px-3">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-grey-darker text-xs
            font-bold
            mb-2
          "
        >
          Status
        </label>

        
        <span class="toggle__switch"><input
          type="checkbox"
          id="toggle_button"
          true-value="Publish"
          false-value="UnPublish"
          v-model="status"
        /></span>
      </div>
    </div>
    <div class="-mx-3 md:flex mb-2">
      

      <div class="md:w-1/2 px-3">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-grey-darker text-xs
            font-bold
            mb-2
          "
        >
          Chef
        </label>
        <input
          class="
            appearance-none
            block
            w-full
            bg-grey-lighter
            text-grey-darker
            border border-grey-lighter
            rounded
            py-3
            px-4
          "
          id="grid-zip"
          type="text"
          v-model="chef"
          placeholder="name of cook"
        />
      </div>
    </div>
    <div class="-mx-3 md:flex mb-2" v-for="(input, k) in inputs" :key="k">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-grey-darker text-xs
            font-bold
            mb-2
          "
          for="grid-city"
        >
          Ingredients Name
        </label>
        <input
          class="
            appearance-none
            block
            w-full
            bg-grey-lighter
            text-grey-darker
            border border-grey-lighter
            rounded
            py-3
            px-4
          "
          id="grid-city"
          type="textarea"
          v-model="input.ingredientsName"
          placeholder="Ingredients Name"
        />
      </div>

      <div class="md:w-1/2 px-3">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-grey-darker text-xs
            font-bold
            mb-2
          "
        >
          unit(ml/grams/spoon/tspoon/pices)
        </label>
        
        
  <select name="unit" v-model="input.unit" id="unit">
    <option>select</option>
    <option value="ml">ml</option>
    <option value="grams">grams</option>
    <option value="spoon">spoon</option>
    <option value="tspoon">tspoon</option>
    <option value="pices">pices</option>
  </select>
      </div>
      <div class="md:w-1/2 px-3">
        <label
          class="
            block
            uppercase
            tracking-wide
            text-grey-darker text-xs
            font-bold
            mb-2
          "
        >
          Number of unit
        </label>
        <input
          class="
            appearance-none
            block
            w-full
            bg-grey-lighter
            text-grey-darker
            border border-grey-lighter
            rounded
            py-3
            px-4
          "
          id="grid-zip"
          type="text"
          v-model="input.numberOfunit"
          placeholder="Number of unit"
        />
      </div>

      <span>
        <i
          class="fas fa-minus-circle"
          @click="remove(k)"
          v-show="k || (!k && inputs.length > 1)"
          >Remove</i
        >
        <i
          class="fas fa-plus-circle"
          @click="add(k)"
          v-show="k == inputs.length - 1"
          >Add fields</i
        >
      </span>
    </div>
    <button
      type="submit"
      class="
        bg-black
        my-5
        px-4
        py-2
        text-lg
        font-semibold
        tracking-wider
        text-white
        rounded
        hover:bg-green-600
        w-4/12
      "
    >
      Sbumit
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      inputs: [
        {
          ingredientsName: "",
          unit: "",
          numberOfunit: "",
        },
      ],
      name: "",
      timeToCook: "",
      totalServe: "",
      method: "",
      status: "Unpublish",
      chef: "",
    };
  },
  computed: {
    isActive() {
      return this.status;
    },

    checkedValue: {
      get() {
        return this.defaultState;
      },
      set(newValue) {
        this.status = newValue;
      },
    },
  },
  methods: {
    add() {
      this.inputs.push({
        ingredientsName: "",
        unit: "",
        numberOfunit: "",
      });
      console.log("sdfgh", this.inputs);
    },

    remove(index) {
      this.inputs.splice(index, 1);
    },
    submitRecipeData() {
      const recipe = {
        name: this.name,
        timeToCook: this.timeToCook + " " + "Hours",
        totalServe: this.totalServe + " " + "People",
        method: this.method,
        status: this.status,
        chef: this.chef,
        inputs: this.inputs,
      };
      if (
        this.name != "" &&
        this.timeToCook != "" &&
        this.totalServe != "" &&
        this.method != "" &&
        this.status != "" &&
        this.chef != "" &&
        this.inputs != ""
      ) {
        this.$store.commit("addRecipe", recipe);
        this.name != "";
        this.timeToCook != "";
        this.totalServe != "";
        this.method != "";
        this.status != "";
        this.chef != "";
        this.inputs != "";
        this.$router.push({ path: "/recipe-list" });
      } else alert("Please fillup all the input box");
    },
  },
};
</script>

<style scoped>
.add-more-btn {
  background: #000;
  color: #fff;
  padding: 4px 4px;
  height: 35px;
  margin-top: 30px;
}
.toggle__button {
  vertical-align: middle;
  user-select: none;
  cursor: pointer;
}
.toggle__button input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  width: 1px;
  height: 1px;
}
.toggle__button .toggle__switch {
  display: inline-block;
  height: 12px;
  border-radius: 6px;
  width: 40px;
  background: #bfcbd9;
  box-shadow: inset 0 0 1px #bfcbd9;
  position: relative;
  margin-left: 10px;
  transition: all 0.25s;
}

.toggle__button .toggle__switch::after,
.toggle__button .toggle__switch::before {
  content: "";
  position: absolute;
  display: block;
  height: 18px;
  width: 18px;
  border-radius: 50%;
  left: 0;
  top: -3px;
  transform: translateX(0);
  transition: all 0.25s cubic-bezier(0.5, -0.6, 0.5, 1.6);
}

.toggle__button .toggle__switch::after {
  background: #4d4d4d;
  box-shadow: 0 0 1px #666;
}
.toggle__button .toggle__switch::before {
  background: #4d4d4d;
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.1);
  opacity: 0;
}
</style>
