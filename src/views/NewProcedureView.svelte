<script>
    // create an empty array for future procedure fields
    let field_arr = [];

    let submitted = false;
</script>
    <ion-card >
        <ion-card-content>
        <ion-card-title class="ion-padding">New Procedure</ion-card-title>
            <ion-list>
                <ion-item class="">
                    <ion-label position="floating">Title of the Procedure</ion-label>
                    <ion-input autocapitalize="words" required="true" spellcheck="true"></ion-input>
                </ion-item>
                <ion-item class="">
                    <ion-label position="stacked">Description of the Procedure</ion-label>
                    <ion-textarea rows="6" cols="20"></ion-textarea>
                </ion-item>
            </ion-list>
        </ion-card-content>
    </ion-card>

    <ion-card>
        <ion-card-content>
        <ion-card-title class="ion-padding">Add Steps</ion-card-title>
            <ion-list>
                <ion-item class="">
                    <ion-label position="floating">Title of the Procedure</ion-label>
                    <ion-input autocapitalize="words" required="true" spellcheck="true"></ion-input>
                </ion-item>
            </ion-list>
        <ion-button color="light">Add Field</ion-button>
        </ion-card-content>
    </ion-card>

    <ion-card>
        <ion-card-content>
        <ion-card-title class="ion-padding">Current steps</ion-card-title>
            <ion-list>
                <ion-item class="">
                    <ion-label position="floating">Title of the Procedure</ion-label>
                    <ion-input autocapitalize="words" required="true" spellcheck="true"></ion-input>
                </ion-item>
            </ion-list>
        <ion-button color="light">Add Field</ion-button>
        </ion-card-content>
    </ion-card>
<ion-button color="light">Submit</ion-button>
