<template>
  <div class="sidebar">
    <v-navigation-drawer
      app
      v-model="drawerStatus"      
      fixed      
      color="sidebarColor"
      dark
      inset
      @transitionend="transitionend"
    >
      <v-app-bar dark color="toolbarColor" class="elevation-12">
        <v-toolbar-title class="text-uppercase">
          <span class="align-center">Dash</span>
          <span class="font-weight-black">JS</span>
        </v-toolbar-title>
      </v-app-bar>
      <v-list>
        <div v-for="(item,index) in getMainMenu" v-bind:key="index">
          <v-list-item v-if="!isNested(item.id)" @click="route(item.id)">
            <v-list-item-icon>
              <v-icon class="white--text text-justify">{{item.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-title class="white--text caption text-justify">{{item.name}}</v-list-item-title>
          </v-list-item>
          <v-list-group v-if="isNested(item.id)" color="white">
            <template v-slot:activator>
              <v-icon class="white--text text-justify">{{item.icon}}</v-icon>
              <v-list-item-title class="text-center white--text caption">{{item.name}}</v-list-item-title>
            </template>

            <v-list-item
              v-for="(crud, i) in getSubMenu(item.id)"
              :key="i"
              @click="route(crud.id)"
              class="ma-2"
            >
              <v-list-item-action>
                <v-icon class="white--text">{{crud.icon}}</v-icon>
              </v-list-item-action>
              <v-list-item-title class="white--text text-justify caption">{{crud.name}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: {
    drawerStatus: {
      required: true,
      type: Boolean
    }
  },
  data: () => ({
    menu: [
      {
        id: 1,
        parentMenuId: 0,
        name: "Dashboard",
        icon: "fa fa-tachometer-alt",
        route: "/"
      },
      {
        id: 2,
        parentMenuId: 0,
        name: "Widgets",
        icon: "fa fa-th-large",
        route: "/Widgets"
      },
      {
        id: 3,
        parentMenuId: 0,
        name: "Elements",
        icon: "fa fa-atom",
        route: "/Elements"
      },
      {
        id: 4,
        parentMenuId: 3,
        name: "Button",
        icon: "fa fa-mouse",
        route: "/Buttons"
      },
      {
        id: 5,
        parentMenuId: 3,
        name: "Notification",
        icon: "fa fa-comment-dots",
        route: "/Notification"
      },
      {
        id: 6,
        parentMenuId: 3,
        name: "Carousel",
        icon: "fa fa-hand-point-up",
        route: "/Carousel"
      },
      {
        id: 7,
        parentMenuId: 3,
        name: "Spinner",
        icon: "fa fa-spinner",
        route: "/Spinner"
      },
      {
        id: 8,
        parentMenuId: 3,
        name: "Drop Down",
        icon: "fa fa-chevron-circle-down",
        route: "/DropDown"
      },
      {
        id: 9,
        parentMenuId: 3,
        name: "Tree",
        icon: "fas fa-stream",
        route: "/Tree"
      },
      {
        id: 10,
        parentMenuId: 3,
        name: "Cards",
        icon: "fas fa-id-card-alt",
        route: "/Cards"
      },
      {
        id: 11,
        parentMenuId: 0,
        name: "Forms",
        icon: "fab fa-wpforms",
        route: "/Forms"
      },
      {
        id: 12,
        parentMenuId: 11,
        name: "Standart",
        icon: "fa fa-font",
        route: "/Forms"
      },
      {
        id: 13,
        parentMenuId: 11,
        name: "Wizard",
        icon: "fa fa-magic",
        route: "/WizardForms"
      },
      {
        id: 14,
        parentMenuId: 0,
        name: "Charts",
        icon: "fas fa-chart-pie",
        route: "/Charts"
      },
      {
        id: 15,
        parentMenuId: 14,
        name: "Flot",
        icon: "fas fa-chart-pie",
        route: "/ChartsFlot"
      },
      {
        id: 16,
        parentMenuId: 14,
        name: "Radial",
        icon: "fas fa-chart-pie",
        route: "/ChartsRadial"
      },
      {
        id: 17,
        parentMenuId: 0,
        name: "Table",
        icon: "fa fa-table",
        route: "/Table"
      },
      {
          id:18,
          parentMenuId:0,
          name:'Pages',
          icon:'fas fa-folder',
          route:'/Pages'
      },
      {
          id:19,
          parentMenuId:18,
          name:'Login',
          icon:'fas fa-sign-in-alt',
          route:'/Login'
      },
      {
          id:20,
          parentMenuId:18,
          name:'Register',
          icon:'fas fa-user-plus',
          route:'/register'
      },
      {
          id:21,
          parentMenuId:18,
          name:'Recover Password',
          icon:'fa fa-unlock-alt',
          route:'/RecoverPassword'
      },
       {
          id:22,
          parentMenuId:18,
          name:'Lock',
          icon:'fa fa-lock',
          route:'/Lock'
      },
      {
          id:23,
          parentMenuId:18,
          name:'Not Found',
          icon:'fas fa-exclamation-triangle',
          route:'*'
      },
      {
          id:24,
          parentMenuId:18,
          name:'Error 500',
          icon:'fas fa-bug',
          route:'/500'
      },
      {
        id:25,
        parentMenuId:0,
        name:'Extras',
        icon:'fa fa-mug-hot',
        route:'/Extras'
      },{
        id:26,
        parentMenuId:25,
        name:'Bug Tracker',
        icon:'fa fa-bug',
        route:'/BugTracker'
      },
      {
        id:27,
        parentMenuId:25,
        name:'FAQ',
        icon:'fa fa-headset',
        route:'/faq'
      },
      {
        id:28,
        parentMenuId:25,
        name:'File Manager',
        icon:'fa fa-hdd',
        route:'/FileManager'
      },
      {
        id:29,
        parentMenuId:25,
        name:'Plans',
        icon:'fa fa-file-invoice-dollar',
        route:'/Plans'
      },
      {
        id:30,
        parentMenuId:25,
        name:'Timeline',
        icon:'fa fa-stopwatch',
        route:'/Timeline'
      },
      {
        id:31,
        parentMenuId:25,
        name:'Calendar',
        icon:'fa fa-calendar-alt',
        route:'/Calendar'
      }
    ]
  }),
  computed: {
    getMainMenu() {
      return this.menu.filter(x => x.parentMenuId === 0);
    }
  },
  methods: {
    transitionend() {
      if (!this.drawerStatus) {
        this.$emit("transtionend");
      }
    },
    isNested(menuId) {
      const arr = this.menu.filter(x => x.parentMenuId === menuId);
      return arr.length > 0 ? true : false;
    },
    getSubMenu(menuId) {
      return this.menu.filter(x => x.parentMenuId === menuId);
    },
    route(menuId) {
      const menu = this.menu.filter(x => x.id === menuId);
      if (menu.length > 0) {
        this.$router.push({ path: menu[0].route });
      }
    }
  }
};
</script>