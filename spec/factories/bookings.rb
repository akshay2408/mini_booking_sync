FactoryGirl.define do
  factory :booking do
    start_at { Date.today }
    end_at { Date.today + 2.day }
    client_email { Faker::Internet.email }
    rental_id { nil }
   
    trait :change_email do
      client_email {'change@email.com'}
    end

    trait :invalid do
      client_email { nil }
    end
  end
end