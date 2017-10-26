export default function( server ) {

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */

  server.createList('rentals', 3);
  server.createList('bookings', 2);
}
