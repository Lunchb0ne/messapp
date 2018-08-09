console.clear();
//---------------code for the amazing select menu-------------------------------
var el = {};
$(".cardsbg").hide();
$('.placeholder').on('click', function (ev) {
    $('.placeholder').css('opacity', '0');
    $('.list__ul').toggle(300);
});

$('.list__ul a').on('click', function (ev) {
    //ev.preventDefault();
    var index = $(this).parent().index();
    
    $('.placeholder').text( $(this).text() ).css('opacity', '1');
    
    //console.log($('.list__ul').find('li').eq(index).html());
    
    $('.list__ul').find('li').eq(index).prependTo('.list__ul');
    $('.list__ul').toggle();
});


$('select').on('change', function (e) {
    // Set text on placeholder hidden element
    $('.placeholder').text(this.value);
    
    // Animate select width as placeholder
    $(this).animate({width: $('.placeholder').width() + 'px' });
});


//--------------Select menu code end---------------------------------------------
/*

Project MAP:

1- Hide the selection part after selection of day
2- Go pass the day which we got to the menuGetter
3- animate the cards via jQuery
4- give option to select another date => proceed to reload the page

*/


/////DAY and FOOD
var mon= new day("mon",
["Aloo Parantha/ Omlette and Toast","Tea/Milk" ],
["Capsicum Chilli, Raita, Rajma","Rice, Chapati"],
["Poha","Tea/Milk" ],
["Egg Curry/ Malai Kofta, Kheer","Chapati" ],
);
var tue= new day("tue",
["Stuffed Parantha/ Omlette and Toast","Butter,Tea/Milk" ],
["Kadi-Pakora, Hari Subzi","Rice, Chapati"],
["Macroni","Tea/Milk" ],
["Shai Paneer, Custard, Chole","Chapati, Pulao" ],
);
var wed= new day("wed",
["Parantha/ Omlette and Toast","Tea/Milk" ],
["Seasonal Subzi, Dal","Rice, Chapati"],
["Pastry","Tea/Milk" ],
["Chiclken-Curry/ Khadai-Paneer, Halwa","Chapati, Pulao" ],
);
var thu= new day("thu",
["Parantha/ Omlette and Toast","Tea/Milk" ],
["Dal Makhni, Seasonl Subzi","Rice, Chapati"],
["Bread Pakora","Tea/Milk" ],
["Mix Veg/ Aloo, Dal, Gulab Jamum","Chapati, Rice" ],
);
var fri= new day("fri",
["Dosa-Sambhar/ Omlette and toast","Tea/Milk" ],
["Seasonal Subzi, Rajma","Rice, Chapati"],
["N/A","N/A" ],
["N/A","N/A" ],
);
var sat= new day("sat",
["Stuffed Parantha/ Omlette and toast","Tea/Milk" ],
["Seasonal Subzi, Dal","Rice, Chapati"],
["Sandwitch","Tea/Milk" ],
["Aloo-Matar/ Chole, Kheer","Rice, Chapati" ],
);
var sun= new day("sun",
["Aloo Puri/ Omlette and toast","Tea/Milk" ],
["Paneer, Dal","Rice, Chapati"],
["Samosa","Tea/Milk" ],
["Mix Veg, Chole","Rice,Chapati" ],
);
///////////DAY and FOOD END

function day(day, bf, lu, sn, dn){
    this.day= day;
    this.bf= bf;
    this.lu= lu;
    this.sn= sn;
    this.dn= dn;
}
day.prototype.displayDetails = function(){
    /*
    console.log(this.day);
    console.log(this.bf);
    console.log(this.lu);
    console.log(this.sn);
    console.log(this.dn);
    */
    $("#head-1").text("Breakfast");
    $("#head-2").text("Lunch");
    $("#head-3").text("Snack");
    $("#head-4").text("Dinner");
    $("#body-1").html("•"+this.bf[0]+"<br><div>"+"•"+this.bf[1]+"</br></div>");
    $("#body-2").html("•"+this.lu[0]+"<br><div>"+"•"+this.lu[1]+"</br></div>");
    $("#body-3").html("•"+this.sn[0]+"<br><div>"+"•"+this.sn[1]+"</br></div>");
    $("#body-4").html("•"+this.dn[0]+"<br><div>"+"•"+this.dn[1]+"</br></div>");
}
function action(day, mess){
    $(".selectorthing").fadeOut(400);
    $(".cardsbg").fadeIn(1200);
    //$(".cardsbg").show(1200)
    day.displayDetails();
}
