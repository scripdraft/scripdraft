import {mount, createLocalVue} from '@vue/test-utils';
import Workplace from "@/components/Workplace.vue";
import i18n from '@/i18n'
import router from "@/router";
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.config.productionTip = false;
localVue.use(BootstrapVue)

describe('display', () => {

    it('mounts without error', () => {
        expect(() =>{ 
            const wrapper = mount(Workplace, {
                localVue,
                i18n,
                router
            })
        }).not.toThrow()
    })

    it('mounts without error', () => {
        expect(() =>{ 
            const wrapper = mount(Workplace, {
                localVue,
                i18n,
                router
            })
        }).not.toThrow()
    })

    it('displays the mainTextInput', () => {
        const workplace = mount(Workplace, {
            localVue,
            i18n,
            router
        });
        expect(workplace.contains("[data-testid='mainTextInput']")).toBe(true);
    });
    it('displays the commitBack button', () => {
        const workplace = mount(Workplace, {
            localVue,
            i18n,
            router
        });
        expect(workplace.contains("[data-testid='commitBack']")).toBe(true);
    });
    it('displays the commitForward button', () => {
        const workplace = mount(Workplace, {
            localVue,
            i18n,
            router
        });
        expect(workplace.contains("[data-testid='commitForward']")).toBe(true);
    });
    it('displays the doCommit button', () => {
        const workplace = mount(Workplace, {
            localVue,
            i18n,
            router
        });
        expect(workplace.contains("[data-testid='doCommit']")).toBe(true);
    });
    it('displays the resetToLastCommit button', () => {
        const workplace = mount(Workplace, {
            localVue,
            i18n,
            router
        });
        expect(workplace.contains("[data-testid='resetToLastCommit']")).toBe(true);
    });
    it('displays the clearAllCommits button', () => {
        const workplace = mount(Workplace, {
            localVue,
            i18n,
            router
        });
        expect(workplace.contains("[data-testid='clearAllCommits']")).toBe(true);
    });

    describe("alter text in the main text area", () =>{
        const firstSentence = "One test sentence."
        let textInput;
        let workplace;
        let commitButton;
        let resetToLastCommitButton;

        beforeEach(()=> {
            workplace = mount(Workplace, {
                localVue,
                i18n,
                router
            });
            textInput = workplace.find("[data-testid='mainTextInput']");
            textInput.setValue(firstSentence);
        })


        describe("click the commit button", ()=> {

            beforeEach(()=> {
                commitButton = workplace.find("[data-testid='doCommit']")
                commitButton.trigger("click");
            })

            describe("add more text to textarea", () => {
                const secondSentence = "One test sentence. Another test sentence";

                beforeEach(() => {
                    textInput.setValue(secondSentence);
                });


                describe("click the resetTolastCommit button", () => {
    
                    beforeEach(() => {
                        resetToLastCommitButton = workplace.find("[data-testid='resetToLastCommit']");
                        resetToLastCommitButton.trigger("click");
                    });

                    it('reverts text back to previous commit value', () => {
                        expect(textInput.element.value).toBe(firstSentence)
                    });
    
                })

                describe("click commit again", () => {
                    let backButton;
                    let forwardButton;
                    beforeEach(() => {
                        commitButton.trigger("click");
                        backButton = workplace.find("[data-testid='commitBack']");
                    });

                    describe("click back button", () => {
                        beforeEach(()=>{
                            backButton.trigger("click")
                        })
                        it("textarea value is the value from previous commit", () => {
                            expect(textInput.element.value).toBe(firstSentence)
                        });

                        describe("click forward button", () => {
                            beforeEach(()=>{
                                forwardButton = workplace.find("[data-testid='commitForward']");
                                forwardButton.trigger("click")
                            })
                            it("is back to most recent commit", () => {
                                expect(textInput.element.value).toBe(secondSentence)
                            });
                        })
                    })

                    

                })
    
            })
    
            it('does not change the value of the textarea', () => {
                expect(textInput.element.value).toBe(firstSentence)
            });
        });
    })
  
  })