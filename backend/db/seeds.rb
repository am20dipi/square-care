# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

squares = Square.create([
    {
        color: "red",
        height: 1,
        width: 1,
        user_id: 1
    },
    {
        color: "orange",
        height: 1,
        width: 1,
        user_id: 1
    },
    {
        color: "green",
        height: 1,
        width: 1,
        user_id: 1
    }
])

users = User.create([
    {
        name: "adriana dipietro",
        email: "fake@gmail.com",
        password: "passwordpassword"
    }
])