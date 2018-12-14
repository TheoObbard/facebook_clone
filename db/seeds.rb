# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create(
  email: 'jim@dundermifflin.com', 
  name: 'Jim Halpert', 
  password: 'password', 
  birthday: Date.new(2018, 12, 02), 
  gender: 'Male', 
  job: 'paper sales', 
  relationship_stat: 'it\'s complicated', 
  location: 'Scranton, PA', 
)

User.create(
  email: 'pam@dundermifflin.com', 
  name: 'Pam Beasley', 
  password: 'password', 
  birthday: Date.new(2018, 12, 02), 
  gender: 'Female', 
  job: 'receptionist', 
  relationship_stat: 'it\'s complicated', 
  location: 'Scranton, PA', 
)
