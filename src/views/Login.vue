<template>
  <div id="login">
    <div class="container">
      <div class="row">
        <div class="col-sm-4 offset-sm-4">
          <form>
            <h1 class="text-center page-title">
              {{ $t('login.login') }}
            </h1>
            <div class="form-group">
              <label>{{ $t('login.username') }}</label>
              <input
                v-model="userLogin.id"
                type="text"
                class="login-from-input"
              >
            </div>
            <div class="form-group">
              <div>
                <label>{{ $t('login.password') }}</label>
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
                :value=" $t('login.submit') "
              >
            </div>
            
            {{ $t('login.or') }}

            <div
              class="form-group google-btn"
            >
              <img
                src="https://image.flaticon.com/icons/svg/281/281764.svg"
                alt="Search"
                class="replaced-svg"
              >{{ $t('login.google') }}
            </div>
            <div class="form-group form-footer">
              <p>
                {{ $t('login.dontHaveAccount') }}
                <router-link
                  to="/signup"
                  tag="a"
                >
                  {{ $t('login.createAccount') }}
                </router-link>
              </p>
              <p>
                <router-link
                  to="/forget"
                  tag="a"
                >
                  {{ $t('login.forgotPassword') }}
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
  transition: 0.5s;
}
.google-btn {
  width: 100%;
  padding: 10px;
  margin-top: 20px;
  color: #fff;
  background-color:rgb(252, 150, 150);
  border: none;
  border-radius: 3px;
  transition: 0.5s;
  cursor: pointer;
}
.google-btn:hover{
    background-color: rgb(255, 189, 189);
}


.replaced-svg {
    display: inline-block;
    border-radius: 1px;
    vertical-align: middle;
    width: 24px;
    height: 24px;
    margin-right: 12px;
}

.login-btn:hover {
  background-color: var(--secondary-color);
}
</style>