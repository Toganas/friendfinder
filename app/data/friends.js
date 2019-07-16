// require ajax
const ajax = require("ajax");
// array to have information pushed into
let friendsArray = [{}];
// exporting array
module.exports = friendsArray;

// capturing inputs
$("#submit").on("click", (event) => {
    event.preventDefault();

    // Validating Form
    validation = () => {
        let goodForm = true;
        $(".chosen-select").each(() => {
            if (this.val() === "") {
                goodForm = false;
            }
        })
        return goodForm;
    }
    // if validation is true, capture all the data
    if (validation()) {
        let data = {
            name: $("#name").val().trim(),
            picture: $("#picture").val().trim(),
            answers: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val(),
            ]
        };
        // $.post("/api/friends", data, (res) => {

        //     $()
        // })
    }
    else {
        alert("You need to fill out all forms before submitting!")
    }
})


