<template>
    <div class="ui-table-demo">
        <div>
          <p>Table overflow x and sortable</p>
          <ui-table
          :tableData="tableData1"
          :sortable="true"
          >
          </ui-table>
          <div class="mt-6">
              <div class="mt-3 mb-3" v-if="actionOutput.actionType">
              Action type: <br />
                <p class="mt-1">{{actionOutput.actionType}}</p>
              </div>
              <div class="mt-1" v-if="actionOutput.actionDescription">
              Element on which it acts: <br />
                <p>{{actionOutput.actionDescription}}</p>
              </div>
          </div>
        </div>
        <div>
          <p>Table responsive and sortable</p>
          <ui-table
          :tableData="tableData2"
          :responsive="true"
          :sortable="true"
          @tableAction="doAction($event)"
          >
          </ui-table>
          <div class="mt-6">
              <div class="mt-3 mb-3" v-if="actionOutput.actionType">
              Action type: <br />
                <p class="mt-1">{{actionOutput.actionType}}</p>
              </div>
              <div class="mt-1" v-if="actionOutput.actionDescription">
              Element on which it acts: <br />
                <p>{{actionOutput.actionDescription}}</p>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
import UiTable from "../../ui-table";
export default {
  components: { UiTable },
  name: "ui-table-demo",
  data() {
    return {
      tableData1: {
        caption: "NBA Stats",
        headers: [
          "Id",
          "Name",
          "Last Name",
          "seasons",
          "Team",
          "Points",
          "Rebounds",
          "Steals",
          "Assistances",
          "Rings",
          "Birthday"
        ],
        rows: [
          {
            id: 21,
            name: "Larry",
            lastName: "Bird",
            seassons: "78/89",
            team: "Boston Celtics",
            points: 27,
            rebounds: 7.5,
            steals: 4,
            assistances: 4,
            rings: 3,
            birthday: 'January 15, 2019'
          },
          {
            id: 54,
            name: "Michael",
            lastName: "Jordan",
            seassons: "85/97",
            team: "Chicago Bulls",
            points: 32.4,
            rebounds: 6.9,
            steals: 6.4,
            assistances: 7,
            rings: 6,
            birthday: 'January 15, 2017'
          },
          {
            id: 14,
            name: "Magic",
            lastName: "Jonshon",
            seassons: "79/89",
            team: "L.A Lakers",
            points: 18,
            rebounds: 4.2,
            steals: 6.4,
            assistances: 14,
            rings: 3,
            birthday: 'January 15, 1985'
          },
        ],
      },
      tableData2: {
        caption: "NBA Stats",
        headers: [
          "Id",
          "Name",
          "Last Name",
          "seasons",
          "Team",
          "Points",
          "Rebounds",
          "Steals",
          "Assistances",
          "Rings",
          "Birthday"
        ],
        rows: [
          {
            id: 21,
            name: "Larry",
            lastName: "Bird",
            seassons: "78/89",
            team: "Boston Celtics",
            points: 27,
            rebounds: 7.5,
            steals: 4,
            assistances: 4,
            rings: 3,
            birthday: 'January 15, 2019'
          },
          {
            id: 54,
            name: "Michael",
            lastName: "Jordan",
            seassons: "85/97",
            team: "Chicago Bulls",
            points: 32.4,
            rebounds: 6.9,
            steals: 6.4,
            assistances: 7,
            rings: 6,
            birthday: 'January 15, 2017'
          },
          {
            id: 14,
            name: "Magic",
            lastName: "Jonshon",
            seassons: "79/89",
            team: "L.A Lakers",
            points: 18,
            rebounds: 4.2,
            steals: 6.4,
            assistances: 14,
            rings: 3,
            birthday: 'January 15, 1985'
          },
        ],
        actions: [
          {
            actionType: 'delete',
            label: "Delete",
          },
          {
            actionType: 'add',
            label: "Add",
          },
        ],
      },
      actionOutput: {
        actionType: "",
        actionDescription: "",
      },
    };
  },
  methods: {
    doAction(ev) {
      const index = this.tableData2.rows.map(x => {
        return x.id;
      }).indexOf(ev.id);

      if(ev.actionType === 'delete'){
        this.deleteItem(index)
      }

    },
    deleteItem(index){
      this.tableData2.rows.splice(index, 1);
      this.actionOutput.actionType = "Delete element";
      this.actionOutput.actionDescription = JSON.stringify(index);
    }
  },
};

</script>

<style lang="scss">
@import '../mixins/ui-table';

$base: ();

.ui-table{
  @include table($base);
}
</style>