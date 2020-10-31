//Get local app storage
var checkHistory = function () {
    $( "#text-entry1" ).val( localStorage.getItem( "text-entry1" ) );
    $( "#text-entry2" ).val( localStorage.getItem( "text-entry2" ) );
    $( "#text-entry3" ).val( localStorage.getItem( "text-entry3" ) );
    $( "#text-entry4" ).val( localStorage.getItem( "text-entry4" ) );
    $( "#text-entry5" ).val( localStorage.getItem( "text-entry5" ) );
    $( "#text-entry6" ).val( localStorage.getItem( "text-entry6" ) );
    $( "#text-entry7" ).val( localStorage.getItem( "text-entry7" ) );
    $( "#text-entry8" ).val( localStorage.getItem( "text-entry8" ) );
    $( "#text-entry9" ).val( localStorage.getItem( "text-entry9" ) );
    $( "#text-entry10" ).val( localStorage.getItem( "text-entry10" ) );
};
checkHistory()

//GLOBAL VARIABLES
var cTime = moment();
var eCounter = 1;
var tCounter = 8;
var wDay = {
    '8 AM': '',
    '9 AM': '',
    '10 AM': '',
    '11 AM': '',
    '12 PM': '',
    '1 PM': '',
    '2 PM': '',
    '3 PM': '',
    '4 PM': '',
    '5 PM': ''
};

/*DISPLAY THE CURRENT DAY AT THE TOP OF THE CALENDAR*/
$( '#currentDay' ).text(
    cTime.format( 'dddd' ) + ', ' + cTime.format( 'MMM Do YYYY' )
);

/*COLOR CODE THE TIME OF DAY (PAST, PRESENT, FUTURE)*/
for ( var property in wDay ) {
    var tEntry = '#text-entry' + eCounter;
    var hour = cTime.hour();
    if ( tCounter < hour ) {
        $( tEntry ).addClass( 'past' );
    } else if ( tCounter > hour ) {
        $( tEntry ).addClass( 'future' );
    } else {
        $( tEntry ).addClass( 'present' );
    }
    tCounter++;
    eCounter++;
}

/* STORE TEXT ENTRY WHEN SAVE BUTTON IS SELECTED*/
$( 'button' ).click( function createTasks() {
    var timeTask = $( this ).siblings( 'textarea' ).val();
    var timeSlot = $( this ).siblings( 'textarea' ).attr( 'id' );
    localStorage.setItem( timeSlot, timeTask );
} );