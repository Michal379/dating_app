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

  #profiles

  10.times do
  user = User.all.sample # Assuming you have a User model with associated profiles
  profile = user.profile
  profile&.destroy if profile # Remove existing profile if it exists

  user.create_profile!(
    about_me: Faker::Lorem.paragraph,
    interests: Faker::Lorem.words(number: 5).join(", "),
    occupation: Faker::Job.title,
    education: Faker::Educator.degree,
    height: Faker::Number.decimal(l_digits: 2),
    body_type: Faker::Lorem.word,
    religion: Faker::Lorem.word,
    smoking: Faker::Boolean.boolean,
    drinking: Faker::Boolean.boolean
  )
end

  