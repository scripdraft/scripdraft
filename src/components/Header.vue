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
        {{ $t('header.draftProject') }}
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
            <i class="fas fa-user-friends" /> {{ $t('header.team') }}
          </router-link>
          <router-link
            to="/technologies"
            tag="b-nav-item"
          >
            <i class="fas fa-user-friends" /> {{ $t('header.technologies') }}
          </router-link>
          <router-link
            to="/contribute"
            tag="b-nav-item"
          >
            <i class="fas fa-user-friends" /> {{ $t('header.contribute') }}
          </router-link>
          <b-nav-item
            href="https://github.com/draftteam/draft"
            target="_blank"
          >
            <i class="fab fa-github" /> {{ $t('header.github') }}
          </b-nav-item>
          <div>
            <b-dropdown
              v-if="true"
              slot="append"
              right
              :text="$t('header.menu')"
              variant="outline-secondary"
            >
              <router-link
                tag="b-dropdown-item"
                to="/login"
              >
                <i class="fas fa-sign-in-alt" />
                {{ $t('header.login') }}
              </router-link>
              <router-link
                tag="b-dropdown-item"
                to="/signup"
              >
                <i class="fas fa-user-plus" />
                {{ $t('header.signup') }}
              </router-link>
           
              <hr>
              <b-dropdown-item @click="$i18n.locale='en'">
                <img
                  src="../assets/us.svg"
                  alt="US"
                  width="20px"
                > {{ $t('header.english') }}
              </b-dropdown-item>
              <b-dropdown-item @click="$i18n.locale='tr'">
                <img
                  src="../assets/tr.svg"
                  alt="TR"
                  width="20px"
                > {{ $t('header.turkish') }}
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