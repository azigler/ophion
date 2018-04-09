<template>
  <div class="bold purple modal-build">
    <section class="tile is-parent is-3 is-inline-block panel-build">
      <menu-item
        v-for='(item, index) in structureList'
        :key='index'
        v-bind='structureList[index]'
      />
    </section>
    <section class="tile is-pulled-right is-vertical">
      <panel-resources
        class="is-12 panel-resources is-hidden"
      />
      <panel-structures
        class="is-12 panel-structures is-hidden"
      />
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PanelResources from '@/components/PanelResources'
import PanelStructures from '@/components/PanelStructures'
import ModalBuildItem from '@/components/ModalBuildItem'
import structureList from '@/assets/structures'

export default {
  name: 'ModalBuild',
  computed: mapState([
    'regionName', 'resources'
  ]),
  data () {
    return { structureList }
  },
  components: {
    'panel-resources': PanelResources,
    'panel-structures': PanelStructures,
    'menu-item': ModalBuildItem
  }
}
</script>

<style lang="scss" scoped>
.modal-build {
  min-height: 260px;
}

@media screen and (min-width: 768px) {
  .panel-resources, .panel-structures {
    display: inline-block!important;
  }
}

.panel-build {
  min-width: 50%;
}
</style>
