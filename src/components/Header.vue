<template>
  <div
    id="profile-header"
    class="shadow"
  >
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="primary"
      class="bg-primary"
    >
      <router-link
        
        to="/"
        tag="b-navbar-brand"
        active-class="brand"
      >
        {{ $t('draftProject') }}
      </router-link>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="ml-auto">
          <router-link
            to="/team"
            tag="b-nav-item"
          >
            <i class="fas fa-user-friends" /> {{ $t('team') }}
          </router-link>
          <router-link
            to="/technologies"
            tag="b-nav-item"
          >
            <i class="fas fa-user-friends" /> {{ $t('technologies') }}
          </router-link>
          <router-link
            to="/contribute"
            tag="b-nav-item"
          >
            <i class="fas fa-user-friends" /> {{ $t('contribute') }}
          </router-link>
          <b-nav-item
            href="https://github.com/draftteam/draft"
            target="_blank"
          >
            <i class="fab fa-github" /> {{ $t('github') }}
          </b-nav-item>
          <div>
            <b-dropdown
              v-if="$i18n.locale=='en'"
              slot="append"
              right
              text="Language"
              variant="outline-secondary"
            >
              <b-dropdown-item @click="$i18n.locale='en'">
                <img
                  src="../assets/us.svg"
                  alt="US"
                  width="20px"
                > {{ $t('english') }}
              </b-dropdown-item>
              <b-dropdown-item @click="$i18n.locale='tr'">
                <img
                  src="../assets/tr.svg"
                  alt="TR"
                  width="20px"
                > {{ $t('turkish') }}
              </b-dropdown-item>
            </b-dropdown>
            <b-dropdown
              v-else
              slot="append"
              right
              text="Dil"
              variant="outline-secondary"
            >
              <b-dropdown-item @click="$i18n.locale='en'">
                <img
                  src="../assets/us.svg"
                  alt="US"
                  width="20px"
                > {{ $t('english') }}
              </b-dropdown-item>
              <b-dropdown-item @click="$i18n.locale='tr'">
                <img
                  src="../assets/tr.svg"
                  alt="TR"
                  width="20px"
                > {{ $t('turkish') }}
              </b-dropdown-item>
            </b-dropdown>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
    export default {
        methods: {
            changeLocale(locale) {
                i18n.locale = locale;
            }
        }
    }
</script>



<style scoped>

.brand{
  cursor: pointer;
  font-size: 22px;
  padding-bottom: 0px;
}

</style>