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
//--------------Selet menu code end---------------------------------------------
/*

Project MAP:

1- Hide the selection part after selection of day
2- Go pass the day which we got to the menuGetter
3- animate the cards via jQuery
4- give option to select another date => proceed to reload the page

*/
function day(day, bf, lu, sn, dn){
    this.day= day;
    this.bf= bf;
    this.lu= lu;
    this.sn= sn;
    this.dn= dn;
}
day.prototype.displayDetails = function(){
    console.log(this.day);
    console.log(this.bf);
    console.log(this.lu);
    console.log(this.sn);
    console.log(this.dn);
    $(".box").textcontent = this.bf[0] + "\n" + this.bf[2];
}
function action(day){
    $(".selectorthing").hide();
    $(".cardsbg").show( 600);
    day.displayDetails();
}
/////DAY and FOOD
    var mon= new day("mon",
                ["Aloo Parantha/ Omlette and toast","Tea/Milk" ],
                [ "Capsicum Chilli, Raita, Rajma","Rice, Chapati"],
                ["Poha","Tea/Milk" ],
                ["Egg Curry/ Malai Kofta, Kheer","Chapati" ],
    );
    var tue= new day("tue",
                ["Stuffed Parantha/ Omlette and toast","Butter,Tea/Milk" ],
                [ "Kadi-Pakora, Hari Subzi","Rice, Chapati"],
                ["Macroni","Tea/Milk" ],
                ["Shai Paneer, Custard, Chole","Chapati, Pulao" ],
    );
    var wed= new day("wed",
                ["Aloo Parantha/ Omlette and toast","Tea/Milk" ],
                [ "Capsicum Chilli, Raita, Rajma","Rice, Chapati"],
                ["Poha","Tea/Milk" ],
                ["Egg Curry/ Malai Kofta, Kheer","Chapati" ],
    );
    var thu= new day("thu",
                ["Aloo Parantha/ Omlette and toast","Tea/Milk" ],
                [ "Capsicum Chilli, Raita, Rajma","Rice, Chapati"],
                ["Poha","Tea/Milk" ],
                ["Egg Curry/ Malai Kofta, Kheer","Chapati" ],
    );
    var fri= new day("fri",
                ["Aloo Parantha/ Omlette and toast","Tea/Milk" ],
                [ "Capsicum Chilli, Raita, Rajma","Rice, Chapati"],
                ["Poha","Tea/Milk" ],
                ["Egg Curry/ Malai Kofta, Kheer","Chapati" ],
    );
    var sat= new day("sat",
                ["Aloo Parantha/ Omlette and toast","Tea/Milk" ],
                [ "Capsicum Chilli, Raita, Rajma","Rice, Chapati"],
                ["Poha","Tea/Milk" ],
                ["Egg Curry/ Malai Kofta, Kheer","Chapati" ],
    );
    var sun= new day("sun",
                ["Aloo Parantha/ Omlette and toast","Tea/Milk" ],
                [ "Capsicum Chilli, Raita, Rajma","Rice, Chapati"],
                ["Poha","Tea/Milk" ],
                ["Egg Curry/ Malai Kofta, Kheer","Chapati" ],
    );
///////////DAY and FOOD END