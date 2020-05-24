<template>
  <div class="list-group shadow" ref="suggestionList">
    <div class="vbst-item list-group-item list-group-item-action" v-if="matchedItems.length == 0">{{ noResultsInfo }}</div>
    <vue-typeahead-bootstrap-list-item
      v-else-if="matchedItems.length > 0"
      v-for="(item, id) in matchedItems" :key="id"
      :active="isListItemActive(id)"
      :data="item.data"
      :html-text="highlight(item.text)"
      :background-variant="backgroundVariant"
      :text-variant="textVariant"
      @click.native="handleHit(item, $event)"
      v-on="$listeners"
    >
      <template v-if="$scopedSlots.suggestion" slot="suggestion" slot-scope="{ data, htmlText }">
        <slot name="suggestion" v-bind="{ data, htmlText }" />
      </template>
    </vue-typeahead-bootstrap-list-item>
  </div>
</template>

<script>
import VueTypeaheadBootstrapListItem from './VueTypeaheadBootstrapListItem.vue'

function sanitize(text) {
  return text.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export default {
  name: 'VueTypeaheadBootstrapList',

  components: {
    VueTypeaheadBootstrapListItem
  },

  props: {
    data: {
      type: Array,
      required: true,
      validator: d => d instanceof Array
    },
    query: {
      type: String,
      default: ''
    },
    backgroundVariant: {
      type: String
    },
    disableSort: {
      type: Boolean
    },
    textVariant: {
      type: String
    },
    maxMatches: {
      type: Number,
      default: 10
    },
    minMatchingChars: {
      type: Number,
      default: 2
    },
    noResultsText: {
      type: String,
      default: "No results found."
    },
    showOnFocus: {
      type: Boolean,
      default: false
    },
    showAllResults: {
      type: Boolean,
      default: false
    },
    highlightClass: {
      type: String,
      default: 'vbt-matched-text'
    }
  },

  created() {
    this.$parent.$on('input', this.resetActiveListItem)
    this.$parent.$on('keyup.down', this.selectNextListItem)
    this.$parent.$on('keyup.up', this.selectPreviousListItem)
    this.$parent.$on('keyup.enter', this.hitActiveListItem)
  },
  data() {
    return {
      activeListItem: -1
    }
  },

  computed: {
    noResultsInfo() {
      return "Searched for: " +this.query+ ". " + this.noResultsText
    },
    highlight() {
      return text => {
        text = sanitize(text)
        if (this.query.length === 0) {
          return text
        }
        const re = new RegExp(this.escapedQuery, 'gi')
        return text.replace(re, `<span class='${this.highlightClass}'>$&</span>`)
      }
    },

    escapedQuery() {
      return escapeRegExp(sanitize(this.query))
    },

    matchedItems() {
      if (!this.showOnFocus && (this.query.length === 0 || this.query.length < this.minMatchingChars)) {
        return []
      }

      const re = new RegExp(this.showAllResults ? '' : this.escapedQuery, 'gi')

      // Filter, sort, and concat
      return this.data
        .filter(i => i.text.match(re) !== null)
        .sort((a, b) => {
          if (this.disableSort) return 0

          const aIndex = a.text.indexOf(a.text.match(re)[0])
          const bIndex = b.text.indexOf(b.text.match(re)[0])

          if (aIndex < bIndex) { return -1 }
          if (aIndex > bIndex) { return 1 }
          return 0
        }).slice(0, this.maxMatches)
    }
  },

  methods: {
    handleHit(item, evt) {
      this.$emit('hit', item)
      evt.preventDefault()
    },
    hitActiveListItem() {
      if (this.activeListItem >= 0) {
        this.$emit('hit', this.matchedItems[this.activeListItem])
      }
    },
    isListItemActive(id) {
      return this.activeListItem === id
    },
    resetActiveListItem() {
      this.activeListItem = -1
    },
    selectNextListItem() {
      if (this.activeListItem < this.matchedItems.length - 1) {
        this.activeListItem++
      } else {
        this.activeListItem = 0
      }
    },
    selectPreviousListItem() {
      if (this.activeListItem <= 0) {
        this.activeListItem = this.matchedItems.length - 1
      } else {
        this.activeListItem--
      }
    }
  },
  watch: {
    activeListItem(newValue, oldValue) {
      if (!this.$parent.autoClose && this.$parent.isFocused === false) {
        this.$parent.isFocused = true
      }
      if (newValue >= 0) {
        const scrollContainer = this.$refs.suggestionList
        const listItem = scrollContainer.children[this.activeListItem]
        const scrollContainerlHeight = scrollContainer.clientHeight
        const listItemHeight = listItem.clientHeight
        const visibleItems = Math.floor(
          scrollContainerlHeight / (listItemHeight + 20)
        )
        if (newValue >= visibleItems) {
          scrollContainer.scrollTop = listItemHeight * this.activeListItem
        } else {
          scrollContainer.scrollTop = 0
        }
        listItem.focus()
      }
    }
  }
}
</script>
