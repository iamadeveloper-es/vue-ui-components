<template>
  <div
    class="ui-table"
    :class="[
      cClass,
      overflowX ? 'ui-table--overflowX' : '',
      responsive ? 'ui-table--responsive' : '',
    ]"
    :ref="'table'"
  >
    <table v-if="!responsive" class="ui-table__content" table-layout="auto">
      <caption v-if="tableData.caption">
        {{
          tableData.caption
        }}
      </caption>
      <thead>
        <tr>
          <th 
          scope="col" 
          v-for="header in formatedHeaders"
          :key="`th-${header.title}`"
          >
            <div 
            v-if="sortable"
            v-on="{ click: isSortable ? () => sortData(header) : null }"
            class="flex flex--align-center cursor-pointer">
              <span class="mr-1">{{ header.title }}</span>
              <ui-icon
              :model="header.order === 'desc' ? {icon: 'chevron-down'} : {icon: 'chevron-up'}"
              ></ui-icon>
            </div>
            <span
            v-else
            >{{header.title}}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr 
        v-for="(row, index) in formatedRows" 
        :key="index"
        :id="row.id ? row.id : index"
        >
          <td 
          v-for="(key, index) in row" 
          :key="index">
          {{key}}
          </td>
          <td
          v-if="tableData.actions"
          >
            <ui-button
            v-for="action in tableData.actions"
            :key="action.label"
            :btnText="action.label"
            :classes="['ui-button--small']"
            @clicked="buttonAction(row.id, action.actionType)"
            ></ui-button>
          </td>
        </tr>
      </tbody>
    </table>    
    <table v-else class="ui-table__content" table-layout="auto">
      <caption v-if="tableData.caption">
        {{
          tableData.caption
        }}
      </caption>
      <tbody>
        <tr v-for="(row, index) in formatedRows" :key="index">
              <td class="ui-table--no-border">
                <table class="ui-table__flex-wrapper">
                    <tr class="ui-table__flex-item">
                        <td
                        v-for="(header, index) in formatedHeaders"
                        :key="index"
                        v-on="{ click: isSortable ? () => sortData(header) : null }"
                        >
                          <div 
                          v-if="sortable"
                          class="flex flex--align-center cursor-pointer">
                            <span class="mr-1">{{ header.title }}</span>
                            <ui-icon
                            :model="header.order === 'desc' ? {icon: 'chevron-down'} : {icon: 'chevron-up'}"
                            ></ui-icon>
                          </div>
                          <span
                          v-else
                          >{{header.title}}</span>
                        </td>
                    </tr>
                    <tr 
                    :id="row.id ? row.id : index" 
                    class="ui-table__flex-item">
                        <td
                        v-for="(key, index) in row"
                        :key="index"
                        >
                            {{key}}
                        </td>
                        <td
                        v-if="tableData.actions"
                        >
                          <ui-button
                          v-for="action in tableData.actions"
                          :key="action.label"
                          :btnText="action.label"
                          :classes="['ui-button--small']"
                          @clicked="buttonAction(row.id, action.actionType)"
                          ></ui-button>
                        </td>
                    </tr>
                </table>
              </td>
            </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UiIcon from '../../atoms/ui-icon'
import UiButton from '../ui-button'
import UiMixinRandomId from "../../../mixin/randomId"
export default {
  name: "ui-table",
  components: {
    UiIcon,
    UiButton
  },
  mixins: [UiMixinRandomId],
  props: {
    cClass: {
      type: [String, Array],
    },
    tableData: {
        type: Object,
        required: true
    },
    overflowX: {
      type: Boolean,
      default: true
    },
    responsive: {
      type: Boolean,
      default: false,
    },
    sortable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
        formatedHeaders: [],
        formatedRows: [],
        sortSelected: undefined
    };
  },
  computed: {
    isSortable(){
      return this.sortable
    }
  },
  methods: {
    sortData(header){
      let firstToLower = header.title.charAt(0).toLowerCase()
      let slicedWord = header.title.slice(1).split(' ').join('')
      let formatedName = firstToLower + slicedWord
      
      if(this.sortSelected === header.title && header.order === 'desc'){
        this.sortAsc(formatedName)
      }
      else{
        this.sortDesc(formatedName)
      }

      this.sortSelected = header.title
      this.toggleOrder(header.title)
    },
    sortDesc(formatedName){
      return this.formatedRows.sort((a, b) => {

        if(typeof a[formatedName] === 'number'){
          return a[formatedName] - b[formatedName]
        }
        if(typeof a[formatedName] === 'string'){
          return a[formatedName] > b[formatedName] ? 1 : -1
        }
        return 0
      })
    },
    sortAsc(formatedName){
      return this.formatedRows.sort((a, b) => {
        if(typeof a[formatedName] === 'number'){
          return b[formatedName] - a[formatedName]
        }
        if(typeof a[formatedName] === 'string'){
          return a[formatedName] > b[formatedName] ? -1 : 1
        }
        return 0
      })
    },
    toggleOrder(header){
      return this.formatedHeaders.map(item => {
        item.title === header && item.order === 'desc' 
          ? item.order = 'asc' 
          : item.order = 'desc'
      })
    },
    buttonAction(id, actionType){
      const payload = {
        id,
        actionType
      }
      this.$emit('tableAction', payload)
    },
    formatRows(){
      const rows = this.tableData.rows.map(item => {
        item.order = 'desc'
        return item
      }) 
      this.formatedRows = rows
    },
    formatHeaders(){
      return this.tableData.headers.map(item => {
        this.formatedHeaders.push(
          {
            title: item,
            order: 'desc'
          }
        )
        
      }) 
    },
    configComponent(){
      this.formatHeaders()
      this.formatRows()
    }
  },
  mounted(){
    this.configComponent()
  }
};
</script>

<style></style>