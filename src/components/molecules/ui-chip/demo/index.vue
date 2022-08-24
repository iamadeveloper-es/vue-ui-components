<template>
  <div class="ui-chip-demo">
    <div>
      <p class="mb-1">Single chip no close button</p>
      <ui-chip
      label="Chip component"
      ></ui-chip>
    </div>
    <div class="mt-3">
      <p class="mb-1">Single chip</p>
      <ui-chip
      label="Chip component"
      bgColor="orange"
      :close="true"
      ></ui-chip>
    </div>
    <div class="mt-3">
      <p class="mb-1">Single chip outlined</p>
      <ui-chip
      label="Chip component"
      :textColor="'orange'"
      :outlined="true"
      :close="true"
      ></ui-chip>
    </div>
    <div class="mt-3">
      <p class="mb-1">Single chip pill</p>
      <ui-chip
      label="Chip component"
      :textColor="'orange'"
      :outlined="true"
      :pill="true"
      :close="true"
      ></ui-chip>
    </div>
    <div class="mt-3">
      <p class="mb-1">Chip list</p>
      <ui-chip
      v-for="(chip, index) in chips"
      :key="index"
      :cClass="'mr-1 mb-1'"
      :label="`${chip.label} ${index + 1}`"
      :bgColor="chip.bgColor"
      :textColor="chip.textColor"
      :close="true"
      ></ui-chip>
    </div>
  </div>
</template>

<script>
import UiChip from '../../ui-chip'
export default {
    name: 'ui-chip-demo',
    components: {
        UiChip
    },
    data() {
      return {
        chips: [
          {
            label: 'Chip',
            bgColor: 'primary',
            textColor: 'white'
          },
          {
            label: 'Chip',
            bgColor: 'danger',
            textColor: 'white'
          },
          {
            label: 'Chip',
            bgColor: 'info'
          },
          {
            label: 'Chip',
            bgColor: 'success'
          }
        ]
      }
    }
}
</script>

<style lang="scss">
@import '../mixins/ui-chip';

$base: ();
$chip-modifiers : (
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

.ui-chip {
    @include chip($base, $chip-modifiers);
}
</style>