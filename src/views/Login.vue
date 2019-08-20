<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 offset-sm-4">
          <form>
            <h1 class="text-center page-title">
              {{ $t('login') }}
            </h1>
            <div class="form-group">
              <label>{{ $t('username') }}</label>
              <input
                v-model="userLogin.id"
                type="text"
                class="login-from-input"
              >
            </div>
            <div class="form-group">
              <div>
                <label>{{ $t('password') }}</label>
              </div>
              <input
                v-model="userLogin.password"
                type="password"
                class="login-from-input password-input"
              >
            </div>
            <div class="form-group">
              <input
                type="submit"
                class="login-btn"
                :value=" $t('submit') "
              >
            </div>
            <div class="form-group form-footer">
              <p>
                {{ $t('dontHaveAccount') }}
                <router-link
                  to="/signup"
                  tag="a"
                >
                  {{ $t('createAccount') }}
                </router-link>
              </p>
              <p>
                <router-link
                  to="/forget"
                  tag="a"
                >
                  {{ $t('forgotPassword') }}
                </router-link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                userLogin: {
                    id: "",
                    password: ""
                }
            }
        },
        
    }
</script>

<style scoped>
#login {
    margin-top: 30px;
  --primary-color: #2C3E50;
  --secondary-color: rgb(63, 98, 133);
}
.container{
    text-align: center;
}
a{
  color: #1976D2;
}
.form-footer {
  text-align: center;
}

.form-footer a {
  text-decoration: underline;
}

.login-from-input {
  width: 100%;
  border: 2px solid #ccc;
  font-size: 18px;
  padding: 7px 10px;
  border-radius: 3px;
}

.login-from-input:hover {
  border-color: #aaa;
}

.login-from-input:focus {
  border: 2px solid var(--primary-color);
}

.form-group label {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 400;
}

.page-title {
  color: var(--primary-color);
  margin-bottom: 30px;
}

input:focus,
textarea:focus,
keygen:focus,
select:focus {
  outline-offset: 0px;
}

:focus {
  outline: none;
}

.login-btn {
  width: 100%;
  padding: 10px;
  color: #fff;
  background-color: var(--primary-color);
  border: none;
  border-radius: 3px;
}

.login-btn:hover {
  background-color: var(--secondary-color);
}
</style>