FactoryGirl.define do
  factory :rental do
    name { Faker::Name.name }
    daily_rate { (100..200).to_a.shuffle.first }

    trait :change_name do
      name {'Change Name'}
    end

    trait :invalid do
      name { nil }
    end
  end
end