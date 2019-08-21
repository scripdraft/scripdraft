<template>
  <div id="signup">
    <div class="container">
      <h1>{{ $t('signup.signup') }}</h1>
      <hr>
      <div class="row">
        <div class="col col-10 col col-lg-6 offset-lg-3 ">
          <form>
            <div class="form-group">
              <input
                v-model="newUser.fullname"
                :placeholder="$t('signup.fullname')"
                type="text"
                class="signup-from-input"
              > 
            </div>
          </form>
        </div>
        <div class="col-1">
          <i
            v-if="fullnameAvailable"
            class="fas fa-check-circle"
          />
          <i
           
            v-else-if="newUser.fullname.length>0"
            class="fas fa-times-circle"
          />
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-10 col col-lg-6 offset-lg-3 ">
          <form>
            <div class="form-group">
              <input
                v-model="newUser.username"
                :placeholder="$t('signup.username')"
                type="text"
                class="signup-from-input"
                @keydown.space.prevent
              >
            </div>
          </form>
        </div>
        <div class="col-1">
          <i
            v-if="usernameAvailable"
            class="fas fa-check-circle"
          />
          <i
           
            v-else-if="newUser.username.length>0"
            class="fas fa-times-circle"
          />
        </div>
      </div>
      <div class="row">
        <div class="col col-sm-10 col col-lg-6 offset-lg-3 ">
          <form>
            <div class="form-group">
              <input
                v-model="newUser.email"
                :placeholder="$t('signup.email')"
                type="email"
                class="signup-from-input"
              >
            </div>
          </form>
        </div>
        <div class="col-1">
          <i
            v-if="emailAvailable"
            class="fas fa-check-circle"
          />
          <i
           
            v-else-if="newUser.email.length>0"
            class="fas fa-times-circle"
          />
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col col-sm-10 col col-lg-6 offset-lg-3 ">
          <form>
            <div class="form-group">
              <input
                v-model="newUser.passwordFirst"
                :placeholder="$t('signup.passwordFirst')"
                type="password"
                class="signup-from-input"
                @keydown.space.prevent
              >
            </div>
          </form>
        </div>
        <div class="col-1">
          <i
            v-if="passwordAvailable"
            class="fas fa-check-circle"
          />
          <i
           
            v-else-if="newUser.passwordFirst.length>0"
            class="fas fa-times-circle"
          />
        </div>
      </div>

      <div class="row">
        <div class="col col-sm-10 col col-lg-6 offset-lg-3 ">
          <form>
            <div class="form-group">
              <input
                v-model="newUser.passwordSecond"
                :placeholder="$t('signup.passwordSecond')"
                type="password"
                class="signup-from-input"
              >
            </div>
          </form>
        </div>
        <div class="col-1">
          <i
            v-if="passwordCheck && newUser.passwordFirst.length>7"
            class="fas fa-check-circle"
          />
          <i
           
            v-else-if="newUser.passwordSecond.length>0"
            class="fas fa-times-circle"
          />
        </div>
      </div>
      
      
      <div class="row">
        <div class="col">
          <div class="custom-control custom-checkbox">
            <input
              id="defaultUnchecked"
              type="checkbox"
              class="custom-control-input"
              @click="termChange"
            >
            <label
              id="privace"
              
              class="custom-control-label"
              for="defaultUnchecked"
            >{{ $t('signup.iveRead') }} <a href="#">{{ $t('signup.privacyPolicy') }}</a> </label>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <div class="col">
          <button
            v-if="submitAvailable"
            class="btn btn-primary"
          >
            {{ $t('signup.signup') }}
          </button>
          <button
            v-else
            class="btn btn-primary disabled"
          >
            {{ $t('signup.signup') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                newUser: {
                    fullname:"",
                    username: "",
                    passwordFirst: "",
                    passwordSecond: "",
                    email: "",
                    acceptTerms: false, //a.t.
                },
                warning: {
                    fullname:"",
                    username: "",
                    password: "",
                    email: "",
                },
            }
        },
        computed: {
            passwordCheck(){ //Both password match or not
                if(this.newUser.passwordFirst==this.newUser.passwordSecond){return true;}
                return false;
            },
            submitAvailable() { //if 1-2-3-4-at-pwc true
                if(this.fullnameAvailable && this.passwordAvailable && this.usernameAvailable && this.emailAvailable &&this.passwordCheck && this.newUser.acceptTerms){
                    return true;
                } return false;
            },
            fullnameAvailable(){ //1
                if (this.newUser.fullname.length>2){
                    return true;
                } 
                return false;
            },
            passwordAvailable(){ //2
                if (this.newUser.passwordFirst.length>7 && !this.newUser.passwordFirst.includes(" ")){
                    return true;
                } return false;
            },
            usernameAvailable(){ // 3
                if(this.newUser.username.length>2 && ! this.newUser.username.includes(" ")){
                    return true
                }
                return false;
            },
            emailAvailable(){ //4
                if(this.newUser.email.length>3 && !this.newUser.email.includes(" ") && this.newUser.email.includes("@") && this.newUser.email.includes(".")) {return true}
                return false;
            },
        },
        methods: {
            termChange() {
                this.newUser.acceptTerms = !this.newUser.acceptTerms;
            }
        },
        
    }
</script>


<style scoped>
#signup {
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

.signup-from-input {
  width: 100%;
  border: 2px solid #ccc;
  font-size: 18px;
  padding: 7px 10px;
  border-radius: 3px;
}

.signup-from-input:hover {
  border-color: #aaa;
}

.signup-from-input:focus {
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

.signup-btn {
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

.signup-btn:hover {
  background-color: var(--secondary-color);
}
.disabled {
  cursor: not-allowed !important;
  pointer-events: none !important;
  background-color: lightgrey;
  border: lightgray solid 1px;
}
.fa-times-circle{
  color: rgb(184, 49, 49);
  margin-top: 12px;
}
.fa-check-circle{
  color: rgb(49, 184, 67);
  margin-top: 12px;
}
</style>