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
      <b-navbar-brand href="#">
        {{ $t('draftProject') }}
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse" />
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">
            <i class="fas fa-user-friends" /> {{ $t('team') }}
          </b-nav-item>
          <b-nav-item href="#">
            <i class="fas fa-atom" /> {{ $t('technologies') }}
          </b-nav-item>
          <b-nav-item href="#">
            <i class="fas fa-hand-holding-usd" /> {{ $t('contribute') }}
          </b-nav-item>
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
              <b-dropdown-item @click="$i18n.locale=&quot;en&quot;">
                <img
                  src="../assets/us.svg"
                  alt="US"
                  width="20px"
                > {{ $t('english') }}
              </b-dropdown-item>
              <b-dropdown-item @click="$i18n.locale=&quot;tr&quot;">
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
              <b-dropdown-item @click="$i18n.locale=&quot;en&quot;">
                <img
                  src="../assets/us.svg"
                  alt="US"
                  width="20px"
                > {{ $t('english') }}
              </b-dropdown-item>
              <b-dropdown-item @click="$i18n.locale=&quot;tr&quot;">
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

</style>