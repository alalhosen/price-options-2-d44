import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Plan",
      price: 25,
      features: [
        "Access to gym floor and basic equipment",
        "Locker room access",
        "Free fitness assessment",
        "Open 6 AM - 10 PM",
      ],
    },
    {
      id: 2,
      name: "Standard Plan",
      price: 45,
      features: [
        "Access to all gym equipment",
        "Unlimited group classes",
        "1 personal training session per month",
        "Sauna and steam room access",
        "Free fitness tracking app",
      ],
    },
    {
      id: 3,
      name: "Premium Plan",
      price: 65,
      features: [
        "All Standard Plan benefits",
        "4 personal training sessions per month",
        "Diet and nutrition consultation",
        "24/7 gym access",
        "VIP locker room",
      ],
    },
    {
      id: 4,
      name: "Couple Plan",
      price: 100,
      features: [
        "2 Premium memberships",
        "Joint training sessions",
        "Customized couple fitness plan",
        "Access to all group classes",
        "Priority booking for trainers",
      ],
    },
    {
      id: 5,
      name: "Student Plan",
      price: 20,
      features: [
        "Access during off-peak hours",
        "Free orientation session",
        "Discounted protein shakes",
        "Student ID required for signup",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-5xl">Best Price in the town.</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
