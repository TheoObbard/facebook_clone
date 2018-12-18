# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(
  email: 'theo', 
  name: 'Theo Obbard', 
  password: 'password', 
  birthday: Date.new(1995, 01, 29), 
  gender: 'Male', 
  job: 'Software Engineer', 
  relationship_stat: 'In a relationship', 
  location: 'Hillsborough, CA', 
)

User.create(
  email: 'pat', 
  name: 'Pat Xu', 
  password: 'password', 
  birthday: Date.new(1995, 8, 2), 
  gender: 'Male', 
  job: 'Software Engineer', 
  relationship_stat: 'In a relationship', 
  location: 'SF Bay Area', 
)

User.create(
  email: 'drew', 
  name: 'Drew Waterman', 
  password: 'password', 
  birthday: Date.new(1996, 3, 11), 
  gender: 'Female', 
  job: 'Software Engineer', 
  relationship_stat: 'In a relationship', 
  location: 'SF Bay Area', 
)

User.create(
  email: 'tim', 
  name: 'Tim Tregubov', 
  password: 'password', 
  birthday: Date.new(1948, 9, 11), 
  gender: 'Male', 
  job: 'Technical Director', 
  relationship_stat: 'In a relationship', 
  location: 'Hanover, NH', 
)

User.create(
  email: 'rikey', 
  name: 'Rikey Chen', 
  password: 'password', 
  birthday: Date.new(1994, 1, 1), 
  gender: 'Male', 
  job: 'Student', 
  relationship_stat: 'Ill never tell', 
  location: 'Oakland, CA', 
)

User.create(
  email: 'joseph', 
  name: 'Joseph Kung', 
  password: 'password', 
  birthday: Date.new(1994, 5, 6), 
  gender: 'Male', 
  job: 'Student', 
  relationship_stat: 'It\'s complicated', 
  location: 'SF, CA', 
)

User.create(
  email: 'ryan', 
  name: 'Ryan Mapa', 
  password: 'password', 
  birthday: Date.new(1980, 7, 9), 
  gender: 'Male', 
  job: 'TA at App Academy', 
  location: 'SF, CA', 
)

User.create(
  email: 'jason', 
  name: 'Jason Feng', 
  password: 'password', 
  birthday: Date.new(1993, 9, 10), 
  gender: 'Male', 
  job: 'Software Engineer', 
  location: 'SF, CA', 
)

User.create(
  email: 'steven', 
  name: 'Steven Le', 
  password: 'password', 
  birthday: Date.new(1993, 4, 2), 
  gender: 'Male', 
  job: 'Student', 
  location: 'SF, CA', 
)
