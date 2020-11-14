var height;
var weight;
$(document).ready(function () {
    var myRules =
        {
            height:
                {
                    required: true,
                    min: 59,
                    max: 79,
                    digits: true
                },
            weight:
                {
                    required: true,
                    min: 88,
                    max: 353,
                    digits: true
                }
        };
    var myMessages =
        {
            height:
                {
                    required: "Please provide your height.",
                    min: "Too low",
                    max: "Too high",
                    digits: "Please use a valid height (59in to 79in)."
                },
            weight:
                {
                    required: "Please provide your grade",
                    min: "Too low",
                    max: "Too high",
                    digits: "Please use a valid weight (88lbs to 353)."
                }
        };
    $("form").validate(
        {
            submitHandler: calculateBMI,
            rules: myRules,
            messages: myMessages
        }
    );

    function calculateBMI() {
        height = $("#height").val();
        weight = $("#weight").val();

        var bmi = (weight / (height * height)) * 703;
        var bmiRounded = Math.round(bmi * 10) / 10;
        //Underweight (BMI 18.3) at 100 pounds
        //Healthy (BMI 22.9) at 125 pounds
        //Overweight (BMI 27.4) at 150 pounds
        //Obese (BMI 32.0) at 175 pounds

        if (bmi < 18.5)
        {
            $("#results").text(`You are underweight. BMI = ${bmiRounded.toFixed(1)}`);
        }
        else if (bmi < 25)
        {
            $("#results").text(`You are healthy. BMI = ${bmiRounded.toFixed(1)}`);
        }
        else if (bmi < 30)
        {
            $("#results").text(`You are overweight. BMI = ${bmiRounded.toFixed(1)}`);
        }
        else
        {
            $("#results").text(`You are obese. BMI = ${bmiRounded.toFixed(1)}`);
        }
    }
});