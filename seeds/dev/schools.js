
exports.seed = function(knex, Promise) {

  return Promise.join(
    // Deletes ALL existing entries
    //knex('schools').del(), 

    // Inserts seed entries
    
			knex('schools').insert({
				schoolName: 'Brown University',
				address: '',
				address2: 'RI',
				userId: null,
				createdAt: new Date()
			}),
   				knex('schools').insert({
				schoolName: 'University of Texas',
				address: 'Austin',
				address2: 'TX',
				userId: null,
				createdAt: new Date()
			}),
   				knex('schools').insert({
				schoolName: 'Rice University',
				address: 'Houston',
				address2: 'TX',
				userId: null,
				createdAt: new Date()
			}),
   				knex('schools').insert({
				schoolName: 'Southern Methodist University',
				address: 'Dallas',
				address2: 'TX',
				userId: null,
				createdAt: new Date()
			}),
   				knex('schools').insert({
				schoolName: 'Miami University',
				address: 'Miami',
				address2: 'FL',
				userId: null,
				createdAt: new Date()
			})
  );
};
