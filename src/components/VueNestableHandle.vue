<template>
  <div
    draggable="true"
    class="nestable-handle"
    @dragstart.prevent="dragstart"
    @touchstart.prevent="dragstart"
    @touchend.prevent="touchend"
    @touchmove.prevent="touchmove"
  >
    <slot />
  </div>
</template>

<script type="text/babel">
  import groupsObserver from '../mixins/groups-observer.js'

  export default {
    name: 'VueNestableHandle',

    mixins: [groupsObserver],

    props: {
      item: {
        type: Object,
        required: false,
        default: () => ({})
      }
    },

    inject: ['group', 'onDragEnd'],

    methods: {
      isEmpty(obj) {
        if (obj == null) return true;

        if (obj.length > 0) return false;
        if (obj.length === 0) return true;

        for (var key in obj) {
          if (hasOwnProperty.call(obj, key)) return false;
        }

        return true;
      },
      dragstart(event) {
        const item = this.isEmpty(this.item) ? this.$parent.item : this.item
        this.notifyDragStart(this.group, event, item)
      },
      touchend(event) {
        console.log(event);
        this.onDragEnd(event)
      },
      touchmove(event) {
        console.log(event);
        this.notifyMouseMove(this.group, event)
      }
    }
  }
</script>