<template>
  <div class="ui-tag-demo">
    <div>
      <p class="mb-1">Single tag no close button</p>
      <ui-tag
      label="Tag component"
      ></ui-tag>
    </div>
    <div class="mt-3">
      <p class="mb-1">Single tag</p>
      <ui-tag
      label="Tag component"
      bgColor="orange"
      :close="true"
      ></ui-tag>
    </div>
    <div class="mt-3">
      <p class="mb-1">Single tag outlined</p>
      <ui-tag
      label="Tag component"
      :textColor="'orange'"
      :outlined="true"
      :close="true"
      ></ui-tag>
    </div>
    <div class="mt-3">
      <p class="mb-1">Single tag pill</p>
      <ui-tag
      label="Tag component"
      :textColor="'orange'"
      :outlined="true"
      :pill="true"
      :close="true"
      ></ui-tag>
    </div>
    <div class="mt-3">
      <p class="mb-1">Single tag with filter icon</p>
      <ui-tag
      label="Tag component"
      :bgColor="'primary'"
      :textColor="'white'"
      :filterIcon="filterIcon"
      :close="true"
      ></ui-tag>
    </div>
    <div class="mt-3">
      <p class="mb-1">Tag list</p>
      <ui-tag
      v-for="(tag, index) in chips"
      :key="index"
      :cClass="'mr-1 mb-1'"
      :label="`${tag.label} ${index + 1}`"
      :bgColor="tag.bgColor"
      :textColor="tag.textColor"
      :close="true"
      ></ui-tag>
    </div>
  </div>
</template>

<script>
import UiTag from '../../ui-tag'
export default {
    name: 'ui-tag-demo',
    components: {
        UiTag
    },
    data() {
      return {
        chips: [
          {
            label: 'Tag',
            bgColor: 'primary',
            textColor: 'white'
          },
          {
            label: 'Tag',
            bgColor: 'danger',
            textColor: 'white'
          },
          {
            label: 'Tag',
            bgColor: 'info'
          },
          {
            label: 'Tag',
            bgColor: 'success'
          }
        ],
        filterIcon: {
          icon: 'twitter',
          type: 'brands'
        }
      }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-tag';

$base: ();
$tag-modifiers : (
  'background-color': (
    'grey': var(--dark-super-light),
    'orange': var(--orange), 
    'primary': var(--primary-blue),
    'danger': var(--danger),
    'info': var(--warning),
    'success': var(--success)
  ),
  'text-color': (
    'dark': var(--dark),
    'white': var(--white),
    'orange': var(--orange), 
  )
);

.ui-tag {
    @include tag($base, $tag-modifiers);
}
</style>