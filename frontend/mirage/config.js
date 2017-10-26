export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
  */
  
}

export function testConfig() {
  // test-only config, does not apply to development
  this.get('/rentals', () => {
    return [
      {id: 1, name: 'Zelda', daily_rate:100},
      {id: 2, name: 'Link', daily_rate:100},
      {id: 3, name: 'Epona', daily_rate:100},
    ]
  });

  this.get('/rentals/:id', () => {
    return [
      {id: 1, name: 'test', daily_rate:500},
    ]
  });
  this.put('/rentals/:id', () => {
    return [
      { id:1, name: 'test', daily_rate:100},
    ]
  });
  this.del('/rentals/:id');
  this.post('/rentals', () => {
    return [
        { id:10, name: 'test', daily_rate:100},
      ]
  });

  this.get('/bookings', () => {
    return [
      { id:1, client_email:"example@example.com",end_at:"2017-11-07",price:400,rental_id:2,start_at:"2017-11-03"},
      { id:2, client_email:"example2@example.com",end_at:"2017-11-10",price:200,rental_id:2,start_at:"2017-11-08"}
    ]
  });
  
  this.post('/bookings', () => {
    return [
        { id:3, client_email:'test@test.com', start_at:'2017-12-10', end_at:'2017-12-14',price:300, rental_id:1 }
    ]
  });


  /*this.get('/rentals', function(db, request) {
    console.log('db =',db)  
    return {
      data: db.rentals.all(attrs => (
        {type: 'rentals', id: attrs.id, attributes: attrs }
      ))
    };
  });

  this.post('/rentals', function(db, request) {  
    let id = request.params.id;

    return {
      data: {
        type: 'rentals',
        id: id,
        attributes: db.rentals.find(id)
      }
    };
  });*/
}