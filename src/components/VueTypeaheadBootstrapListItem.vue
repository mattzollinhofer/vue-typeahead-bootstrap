<template>
  <a
    @keydown.tab="$emit('listItemBlur')"
    @keydown.esc.stop.prevent="$emit('listItemBlur')"
    @keydown.down.prevent
    @keydown.up.prevent
    @keyup.down="$parent.selectNextListItem($event)"
    @keyup.up="$parent.selectPreviousListItem($event)"
    tabindex="0"
    href="#"
    :class="textClasses"
  >
    <slot name="suggestion" v-bind="{ data: data, htmlText: htmlText }">
      <span v-html="htmlText"></span>
    </slot>
  </a>
</template>

<script>
export default {
  name: 'VueTypeaheadBootstrapListItem',

  props: {
    active: {
      type: Boolean
    },
    data: {},
    htmlText: {
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
