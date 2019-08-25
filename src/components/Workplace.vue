<template>
  <div class="container">
    <div class="row offset-sm-2 col-sm-8">
      <div
        class="workplace"
      >
        <h1 id="maintitle">
          {{ $t('workplace.draft') }}
        </h1>
    
        <hr>
        <div class="form-group blue-border-focus">
          <label
            class="instructions"
            for="textarea1"
          >{{ $t('workplace.context') }}</label>
          <textarea
            id="textarea1"
            ref="myTextArea"
            v-model="currentCommit.text"
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
                {{ $t("workplace.back") }}
              </b-button>
              <b-button
                :class="{disabled: isCommitValid}"
                variant="success"
                @click="addCommit"
              >
                {{ $t("workplace.commit") }}
              </b-button>
              <b-button
                :class="{disabled: myForwards.length==0}"
                variant="info"
                @click="forwardCommit "
              >
                {{ $t("workplace.forward") }}
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
                {{ $t("workplace.reset") }}
              </b-button>
              <b-button
                variant="danger"
                @click="clearAll"
              >
                {{ $t("workplace.clear") }}
              </b-button>
            </b-button-group>
          </div>
        </div>
      </div>
      <div class="badges col-12">
        <span
          v-for="commit in reversedAllCommits"
          :key="commit.id"
          class="badge badge-primary"
        >{{ commit.text }} </span> 
        <span
          v-if="isCurrentBadgeAvailable"
          class="badge badge-success"
        > {{ allCommits[0].text }}</span>
        <span
          v-for="commit in myForwards"
          :key="commit.id"
          class="badge badge-primary"
        >{{ commit.text }} </span> 
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                currentCommit: {text: "", timestamp: ""},
                allCommits: [],
                myForwards: [],
                dates: [],
            };
        },
        computed: { 
            isCommitValid() {
                if(this.currentCommit.text.length>0){
                    if(this.allCommits.length>0){
                        if(this.currentCommit.text==this.allCommits[0].text){
                            return true;
                        }
                        else{
                            return false;
                        }
                    }
                    else{
                        return false;
                    }
                }
                else{
                    return true;
                }
            },
            reversedAllCommits(){
                return this.allCommits.slice(1).reverse(); //slice "0" for vue/no-side-effects-in-computed-properties
            },
            isCurrentBadgeAvailable(){
                try{
                    if(this.allCommits[0].text==true){
                        return true;
                    }
                    return true;
                }
                catch(err){
                    return false
                }
            },
        },
        methods: {
            addCommit() {
                let commitTime = new Date().getTime().toString();
                this.currentCommit.timestamp = commitTime;
                let commitCopy = Object.assign({}, this.currentCommit);
                this.allCommits.unshift(commitCopy);
                this.$refs.myTextArea.focus();
            },
            clearAll() { //done
                this.allCommits = [];
                this.currentCommit = {text: "", timestamp: ""};
                this.myForwards = [];
                this.$refs.myTextArea.focus();
            },
            backCommit() {
                this.myForwards.unshift(this.allCommits[0]);
                this.allCommits.shift();
                this.currentCommit.text=this.allCommits[0].text;
                this.$refs.myTextArea.focus();
            },
            forwardCommit() {
                this.allCommits.unshift(this.myForwards[0]);
                this.currentCommit.text = this.allCommits[0].text;
                this.myForwards.shift();
                this.$refs.myTextArea.focus();
            },
            resetLastCommit() {
                this.currentCommit = this.allCommits[0];
                this.$refs.myTextArea.focus();
            }        
        },
    };
</script>

<style scoped>
textarea {
  resize: none;
}
.workplace {
  text-align: center;
  margin-left:1em;
  margin-right:1em;
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
.instructions {
  text-align: left;
}
.badges{
  margin-top: 100px;
  margin-bottom: 100px;
}
.badge{
  margin: 1px;
}
</style>
