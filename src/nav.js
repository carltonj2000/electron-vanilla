const Nav = {
  template: `
  <nav class="navbar is-expanded" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="logo-512.png" height="28">
    </a>

    <a role="button"
      style="-webkit-app-region: no-drag"
      class="navbar-burger"
      :class="{ 'is-active': openNav }"
      aria-label="menu"
      aria-expanded="false"
      @click="expand"
      >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" :class="{ 'is-active': openNav }">
    <div class="navbar-end">
      <div class="navbar-item">
          <span class="icon" @click="min" style="-webkit-app-region: no-drag">
            <i class="fas fa-minus"></i>
          </span>
          <span class="icon" @click="max" style="-webkit-app-region: no-drag">
            <i class="fas fa-square"></i>
          </span>
          <span class="icon" @click="close" style="-webkit-app-region: no-drag">
            <i class="fas fa-times"></i>
          </span>
      </div>
    </div>
  </div>
</nav>
`,
  data() {
    return { openNav: false };
  },
  methods: {
    min() {
      window.ipcRenderer.send("min");
    },
    max() {
      window.ipcRenderer.send("max");
    },
    close() {
      window.ipcRenderer.send("close");
    },
    expand() {
      this.openNav = !this.openNav;
    },
  },
};
