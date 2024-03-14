class RailWayForm{
    submit() {
        alert(this.name + " : Your form is submitted for train number " + this.trainno);
    }
    cancel(){
        alert(this.name + " : This form is cancelled for train number " + this.trainno);
    }
    fill(givenname, trainno){
        this.name = givenname
        this.trainno = trainno
    }
}

// create a form for vicky 
let vickyForm = new RailWayForm()
// fill the form with details 
vickyForm.fill("Vicky", 12345)

// create a form for rohan
let rohanForm1 = new RailWayForm()
let rohanForm2 = new RailWayForm()
// fill the form with details 
rohanForm1.fill("Rohan", 34876)
rohanForm2.fill("Rohan", 98420)

vickyForm.submit()
rohanForm1.submit()
rohanForm2.submit()
rohanForm1.cancel()
