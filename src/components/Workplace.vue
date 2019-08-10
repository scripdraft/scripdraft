<template>
  <div
    id="workplace"
    class="col col-12 col-sm-4"
  >
    <h1 id="maintitle">
      {{ $t('draft') }}
    </h1>

    <hr>
    <div class="form-group blue-border-focus">
      <label for="textarea1">{{ $t('draftText') }}</label>
      <textarea
        id="textarea1"
        ref="myTextArea"
        v-model="currentCommit"
        autofocus
        class="form-control"
        rows="7"
        @keydown.ctrl.enter.prevent="addCommit"
      />
    </div>
    <!--  Buttons start -->
    <div id="buttons">
      <div class="mt-3">
        <b-button-group>
          <b-button
            variant="info"
            :class="{disabled: allCommits.length<2}"
            @click="backCommit"
          >
            {{ $t("back") }}
          </b-button>
          <b-button
            :class="{disabled: currentCommit.length==0 || currentCommit== allCommits[0]}"
            variant="success"
            @click="addCommit"
          >
            {{ $t("commit") }}
          </b-button>
          <b-button
            :class="{disabled: myForwards.length==0}"
            variant="info"
            @click="forwardCommit "
          >
            {{ $t("forward") }}
          </b-button>
        </b-button-group>
      </div>
      <div class="mt-1">
        <b-button-group>
          <b-button
            :class="{disabled: allCommits.length==0}"
            variant="warning"
            @click="resetLastCommit"
          >
            {{ $t("reset") }}
          </b-button>
          <b-button
            variant="danger"
            @click="clearAll"
          >
            {{ $t("clear") }}
          </b-button>
        </b-button-group>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                currentCommit: "",
                allCommits: [],
                myForwards: [],
                dates: [],
            };
        },
        methods: {
            addCommit() {
                this.allCommits.unshift(this.currentCommit);
                var currentdate = new Date(); 
                var datetime =currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
                this.dates.unshift(datetime);
                this.$emit("customevent");  //When I call addCommit, I think I need to send an emit? And listen it from Content.vue?
                /* console.log(this.dates); */  //Date check - Ignore it
                this.$refs.myTextArea.focus();
            },
            clearAll() {
                this.allCommits = [];
                this.currentCommit = "";
                this.myForwards = [];
                this.$refs.myTextArea.focus();
            },
            backCommit() {
                this.myForwards.unshift(this.allCommits[0]);
                this.allCommits.shift();
                this.currentCommit=this.allCommits[0];
                this.$refs.myTextArea.focus();
            },
            forwardCommit() {
                this.allCommits.unshift(this.myForwards[0]);
                this.currentCommit = this.allCommits[0];
                this.myForwards.shift();
                this.$refs.myTextArea.focus();
            },
            resetLastCommit() {
                this.currentCommit = this.allCommits[0];
                this.$refs.myTextArea.focus();
            }
        }
    };
</script>

<style scoped>
textarea {
  resize: none;
}
#workplace {
  text-align: left;
}
#maintitle {
  margin-top: 20px;
}
.blue-border-focus .form-control:focus {
  border: 1px solid #4aa1c3;
  box-shadow: 0 0 0 0.2rem rgba(74, 102, 195, 0.25);
}
#buttons {
  align-content: center;
  text-align: center;
  padding-bottom: 10px;
}
.disabled {
  cursor: not-allowed !important;
  pointer-events: none !important;
  background-color: lightgrey;
  border: lightgray solid 1px;
}
</style>