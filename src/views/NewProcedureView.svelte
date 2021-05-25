<script>
    //Imports 
    import NewField from './NewField.svelte'

    //Normal Variables
    let field_arr = []; // create an empty array for future procedure fields
    let InputTitle;

    //Reactive Variables
    $: field_arr
    $: InputTitle

    

    function onClickAddField(input) {
        let inputTitle = document.getElementById('inputField')
        if (InputTitle.length > 0) return;

        else if (field_arr.includes(InputTitle)) return;
        if (InputTitle) {
                field_arr.push(InputTitle);
                }
            }
</script>
    <ion-card >
        <ion-card-content>
        <ion-card-title class="ion-padding">New Procedure</ion-card-title>
            <ion-list>
                <ion-item class="">
                    <ion-label position="stacked">Title</ion-label>
                    <ion-input placeholder="Grocery List Creation" 
                               autocapitalize="words" 
                               required="true" 
                               spellcheck="true"
                            />
                </ion-item>
                <ion-item class="">
                    <ion-textarea placeholder="Description of the Procedure" 
                                  rows="6" cols="20"
                            />
                </ion-item>
            </ion-list>
        </ion-card-content>

        <ion-card-content>
        <ion-card-title class="ion-padding">Add Steps</ion-card-title>
            <ion-list>
                <ion-item class="">
                    <ion-label position="stacked">Instruction</ion-label>
                    <NewField /> 
                </ion-item>
               
                    {#each field_arr as fields}
                        <NewField title={InputTitle}/>
                    {/each}
            </ion-list>
        <ion-button class="ion-padding" color="light"  on:click={onClickAddField(onClickAddField)}>Add Field</ion-button>

        </ion-card-content>

        <ion-card-content>
            <ion-card-title class="ion-padding">Steps</ion-card-title>
                <ion-list>
                </ion-list>
            <ion-button slot="start" color="light">Add Section</ion-button>
            <ion-button slot="end" color="light">Submit</ion-button>
            </ion-card-content>
    </ion-card>

<style>

ion-card {
    --ion-background-color: white;
    margin: 8px 8px 0 8px;
}

</style>
