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

    //Future for loop to shorten checkHistory code above by creating an array
    /*  for ( var i = 1; i < localStorage.length + 1; i++ ) {
         $( `#text-entry${ i }` ).val( localStorage.getItem( `text-entry${ i }` ) );
     } */
};
checkHistory()

//GLOBAL VARIABLES
var cTime = moment();
var eCounter = 1;
var tCounter = 8;

/*COLOR CODE THE TIME OF DAY (PAST, PRESENT, FUTURE)*/
for ( i = 8; i < 18; i++ ) {
    var tEntry = '#text-entry' + eCounter;
    var hour = cTime.hour();
    if ( i < hour ) {
        $( tEntry ).addClass( 'past' );
    } else if ( i > hour ) {
        $( tEntry ).addClass( 'future' );
    } else {
        $( tEntry ).addClass( 'present' );
    }
    eCounter++;
}

/*DISPLAY THE CURRENT DAY AT THE TOP OF THE CALENDAR*/
$( '#currentDay' ).text(
    cTime.format( 'dddd' ) + ', ' + cTime.format( 'MMM Do YYYY' )
);

/* STORE TEXT ENTRY WHEN SAVE BUTTON IS SELECTED*/
$( 'button' ).click( function createTasks() {
    var timeTask = $( this ).siblings( 'textarea' ).val();
    var timeSlot = $( this ).siblings( 'textarea' ).attr( 'id' );
    localStorage.setItem( timeSlot, timeTask );
} );