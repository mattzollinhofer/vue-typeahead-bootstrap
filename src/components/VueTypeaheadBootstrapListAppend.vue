<template>
  <a
    tabindex="0"
    href="#"
    :class="textClasses"
    @click.prevent="$emit('hitListAppend', query)"
  >
    <div aria-hidden="true">
      <slot v-bind="{ query }" />
    </div>
  </a>
</template>

<script>
export default {
  name: 'VueTypeaheadBootstrapListAppend',

  props: {
    query: {
      type: String
    },
    backgroundVariant: {
      type: String
    },
    textVariant: {
      type: String
    }
  },

  computed: {
    textClasses() {
      const classes = ['vbst-item', 'list-group-item', 'list-group-item-action']
      
      if (this.backgroundVariant) classes.push(`bg-${this.backgroundVariant}`)
      if (this.textVariant) classes.push(`text-${this.textVariant}`)

      return classes.join(' ')
    }
  }
}
</script>

<style scoped>
  a {
    cursor: pointer;
  }
</style>
