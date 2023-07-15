# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#users
require 'faker'

10.times do
    User.create!(
      name: Faker::Name.name,
      email: Faker::Internet.email,
      password: Faker::Internet.password,
      age: Faker::Number.between(from: 18, to: 65),
      gender: Faker::Gender.binary_type,
      location: Faker::Address.city,
      bio: Faker::Lorem.paragraph,
      profile_picture: Faker::Avatar.image,
      preferences: Faker::Lorem.words(number: 3).join(", "),
      activity: Faker::Lorem.words(number: 2).join(", ")
    )
  end