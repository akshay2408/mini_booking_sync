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
        { id:12, name: 'test', daily_rate:100},
      ]
  });

  this.get('/bookings', () => {
    return [
      {
        client_email:"test@test.com",
        start_at:"2017-11-21",
        end_at:"2017-11-23",
        id:1,
        price:"200.0",
        rental:{id: 1, name: "test", daily_rate: "100.0"},
        rental_id:1
      },
      {
        client_email:"test2@test.com",
        start_at:"2017-11-24",
        end_at:"2017-11-26",
        id:2,
        price:"200.0",
        rental:{id: 1, name: "test", daily_rate: "100.0"},
        rental_id:1
      }
    ]
  });
  this.get('/bookings/:id', () => {
    return [
      {
        client_email:"test2@test.com",
        start_at:"2017-11-24",
        end_at:"2017-11-26",
        price:"200.0",
        rental_id:1
      }
    ]
  });
    this.put('/bookings/:id', () => {
      return [
        { id:1, name: 'test', daily_rate:100},
      ]
    });
  this.post('/bookings', () => {
    return [
        {
          client_email:"test@test.com",
          start_at:"2017-11-21",
          end_at:"2017-11-23",
          id:20,
          price:"200.0",
          rental:{id: 1, name: "test", daily_rate: "100.0"},
          rental_id:1
        }
    ]
  });

  this.del('/bookings/:id');
}
