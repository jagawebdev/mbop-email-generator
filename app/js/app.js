var app = angular.module('mbopApp', []);

app.controller("mbopCtrl", function($scope) {
    $scope.cars = [
        {model: "None", imgUrl: ""},
        {model: "2017 E 300 - Black", imgUrl: "https://gallery.mailchimp.com/e2a83a7c672c5eb666bd9c38c/images/cd6fd20a-0411-4979-97da-f9783ab4dec4.jpg"},
        {model: "2017 E 300 4MATIC - Red", imgUrl: "https://gallery.mailchimp.com/e2a83a7c672c5eb666bd9c38c/images/a71b5c50-1657-4629-88c9-6373b45d2eda.jpg"},
        {model: "2017 E 300 4MATIC - Grey", imgUrl: "https://gallery.mailchimp.com/e2a83a7c672c5eb666bd9c38c/images/0c860ef1-a996-4a4c-baf3-3c7c38243905.jpg"}
    ];
});

//Images information


//Hide generated code
$('#code-box').hide();

//Copy code
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}

//Number highlighter
$(".client-name").append("<span class='number'>1</span>");
$(".car-title").append("<span class='number'>2</span>");
$(".car-image").append("<span class='number'>3</span>");
$(".car-color").append("<span class='number'>4</span>");
$(".total-msrp").append("<span class='number'>5</span>");
$(".e-price").append("<span class='number'>6</span>");
$(".mbop-savings").append("<span class='number'>7</span>");
$(".net-price").append("<span class='number'>8</span>");
$(".agent-phone").append("<span class='number'>9</span>");
$(".disclaimer").append("<span class='number'>10</span>");