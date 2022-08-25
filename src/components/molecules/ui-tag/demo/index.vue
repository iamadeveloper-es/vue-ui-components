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
      v-for="(tag, index) in tags"
      :key="index"
      :cClass="'mr-1 mb-1'"
      :label="`${tag.label} ${index + 1}`"
      :bgColor="tag.bgColor"
      :textColor="tag.textColor"
      :close="true"
      ></ui-tag>
    </div>
    <div class="mt-3">
      <p>Tag in filter list</p>
      <div class="tags mb-2">
        <ui-tag
        v-for="(tag, index) in filteredTags"
        :key="index"
        :cClass="'mr-1'"
        :label="tag.label"
        ></ui-tag>
      </div>
      <ui-input-field
      label="Search post"
      :floatingLabel="true"
      v-model="inputValue"
      ></ui-input-field>
      <div class="posts mt-3">
        <div class="post"
        v-for="(post, index) in filteredPosts"
        :key="index"
        >
          <h5>{{post.title}}</h5>
          <p class="mt-1">{{post.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiInputField from '../../ui-input-field'
import UiTag from '../../ui-tag'
export default {
    name: 'ui-tag-demo',
    components: {
      UiInputField,
        UiTag
    },
    data() {
      return {
        tags: [
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
        },
        posts: [
          {
            title: 'What is BEM',
            text: 'BEM is a front-end naming method for organizing and naming CSS classes. The Block, Element, Modifier methodology is a popular naming convention for class names in HTML and CSS. It helps to write clean CSS by following some simple rules.',
            category: 'technology'
          },
          {
            title: 'Maximilien Robespierre',
            text: 'Maximilien François Marie Isidore de Robespierre, better known as Maximilien Robespierre or Maximiliano Robespierre, was a French lawyer, writer, orator, and politician nicknamed "the Incorruptible".',
            category: 'history'
          },
          {
            title: 'VUE 3 Composition API',
            text: 'Composition API is a set of APIs that allows us to author Vue components using imported functions instead of declaring options.',
            category: 'technology'
          },
          {
            title: 'Greece hotel',
            text: 'Greece is a country in southeastern Europe with thousands of islands in the Aegean and Ionian seas. It was influential in ancient times and is often called the "cradle of Western civilization". Athens, its capital.',
            category: 'travel'
          }
        ],
        inputValue: '',
        postsTags: [
          {
            label: 'technology',
            close: true
          },
          {
            label: 'history',
            close: true
          },
          {
            label: 'travel',
            close: true
          },
        ]
      }
    },
    computed: {
      filteredPosts(){
        return (this.posts.filter(item => item.text.toLowerCase().includes(this.inputValue.toLowerCase()) || item.title.toLowerCase().includes(this.inputValue.toLowerCase())) || this.posts)
      },
      filteredTags(){
        return this.inputValue 
          ? this.postsTags.filter(item => this.selectedCategories.includes(item.label.toLowerCase()))
          : false
      },
      selectedCategories(){
        const categories = []
        this.filteredPosts.map(item => categories.push(item.category.toLowerCase()))
        return  categories
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