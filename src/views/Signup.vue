<template>
  <div id="signup">
    <div class="container">
      <h1>{{ $t('signup.signup') }}</h1>
      <hr>
      <div class="row">
        <div class="col-sm-12 col col-lg-6 offset-lg-3 ">
          <form>
            <div class="form-group">
              <input
                :placeholder="$t('signup.fullName')"
                type="text"
                class="signup-from-input"
              >
            </div>
          </form>
        </div>
        <div class="col-sm-12 col col-lg-6 offset-lg-3 ">
          <form>
            <div class="form-group">
              <input
                :placeholder="$t('signup.lastname')"
                type="text"
                class="signup-from-input"
              >
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        
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
</style>