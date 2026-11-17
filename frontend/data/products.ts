
export type Product = {
    name: string;
    slug: string;
    category: string;
    tagline: string;
    description: string;
    image: string;
    appImage: string;
    status: string;
    audience: string;
    features: {
      title: string;
      description: string;
    }[];
    steps: {
      number: string;
      title: string;
      description: string;
    }[];
    benefitsTitle: string;
    benefitsDescription: string;
    benefits: string[];
    playStoreUrl?: string;
    appStoreUrl?: string;
  };
  
  export const products: Product[] = [
    {
      name: "Foodvito",
      slug: "foodvito",
      category: "FOOD DELIVERY PLATFORM",
      tagline: "Good Food. Better Opportunities.",
      description:
        "Discover great restaurants, explore delicious food and enjoy convenient doorstep delivery. Foodvito connects customers, restaurants and delivery partners through one platform.",
      image: "/images/foodvito.png",
      appImage: "/images/foodvito-app.png",
      status: "Coming Soon",
      audience: "Customers, restaurants and delivery partners",
  
      features: [
        {
          title: "Explore Restaurants",
          description:
            "Discover restaurants, browse menus and explore food options around you.",
        },
        {
          title: "Easy Food Ordering",
          description:
            "Enjoy a simple ordering experience with convenient checkout.",
        },
        {
          title: "Live Order Tracking",
          description:
            "Follow your order journey and stay updated on delivery progress.",
        },
        {
          title: "Restaurant Partnerships",
          description:
            "A restaurant-friendly model designed around lower commissions.",
        },
        {
          title: "Delivery Partner Network",
          description:
            "Connect restaurants and customers through delivery partners.",
        },
        {
          title: "Convenient Payments",
          description:
            "A streamlined payment experience for food orders.",
        },
      ],
  
      steps: [
        {
          number: "01",
          title: "Explore",
          description:
            "Browse nearby restaurants and discover your favourite dishes.",
        },
        {
          number: "02",
          title: "Order",
          description:
            "Select your food, add it to your cart and place your order.",
        },
        {
          number: "03",
          title: "Enjoy",
          description:
            "Get your food delivered to your doorstep.",
        },
      ],
  
      benefitsTitle: "A better opportunity for restaurants.",
      benefitsDescription:
        "Foodvito aims to support restaurant partners with a lower-commission approach, helping local food businesses grow while reaching more customers.",
  
      benefits: [
        "Lower commission model",
        "More opportunities to reach customers",
        "Digital restaurant presence",
        "Integrated delivery ecosystem",
      ],
    },
  
    {
      name: "Ravito",
      slug: "ravito",
      category: "MOBILITY & TRANSPORTATION",
      tagline: "Move Smarter. Travel Better.",
      description:
        "Your everyday mobility companion. Ravito aims to connect passengers with drivers for convenient rides, transparent booking and better earning opportunities.",
      image: "/images/ravito.png",
      appImage: "/images/ravito-app.png",
      status: "Coming Soon",
      audience: "Passengers and driver partners",
  
      features: [
        {
          title: "Easy Ride Booking",
          description:
            "Book rides through a convenient digital experience.",
        },
        {
          title: "Multiple Ride Options",
          description:
            "Explore available transportation options according to your needs.",
        },
        {
          title: "Live Ride Tracking",
          description:
            "Stay informed about your ride and driver location.",
        },
        {
          title: "Driver Partnerships",
          description:
            "A driver-friendly platform designed to support better earning opportunities.",
        },
        {
          title: "Fare Information",
          description:
            "View ride fare information before confirming your booking.",
        },
        {
          title: "Ride Management",
          description:
            "Manage bookings and ride details from one place.",
        },
      ],
  
      steps: [
        {
          number: "01",
          title: "Book",
          description:
            "Choose your ride and enter your destination.",
        },
        {
          number: "02",
          title: "Connect",
          description:
            "Get connected with an available driver.",
        },
        {
          number: "03",
          title: "Travel",
          description:
            "Track your ride and reach your destination.",
        },
      ],
  
      benefitsTitle: "Better opportunities for drivers.",
      benefitsDescription:
        "Ravito is designed around a lower-commission approach that aims to create a more driver-friendly mobility ecosystem.",
  
      benefits: [
        "Lower commission approach",
        "More earning opportunities",
        "Digital ride management",
        "Convenient passenger connectivity",
      ],
    },
  
    {
      name: "VitoMart",
      slug: "vitomart",
      category: "LOCAL SHOPPING & QUICK COMMERCE",
      tagline: "Your Local Shops. Just a Click Away.",
      description:
        "Everything you need, closer to home. VitoMart connects customers with nearby shops and pharmacies, making everyday shopping more convenient through local delivery.",
      image: "/images/vitomart.png",
      appImage: "/images/vitomart-app.png",
      status: "Coming Soon",
      audience: "Customers, local shops and pharmacies",
  
      features: [
        {
          title: "Discover Local Shops",
          description:
            "Explore nearby stores and discover products available around you.",
        },
        {
          title: "Everyday Essentials",
          description:
            "Find groceries and daily-use products from local businesses.",
        },
        {
          title: "Pharmacy Access",
          description:
            "Discover participating pharmacies and their available products.",
        },
        {
          title: "Convenient Ordering",
          description:
            "Place orders from local shops through one digital platform.",
        },
        {
          title: "Local Delivery",
          description:
            "Connect orders with delivery partners through the shared ecosystem.",
        },
        {
          title: "Shopkeeper Platform",
          description:
            "Give local businesses an opportunity to reach digital customers.",
        },
      ],
  
      steps: [
        {
          number: "01",
          title: "Discover",
          description:
            "Find local shops and products in your area.",
        },
        {
          number: "02",
          title: "Shop",
          description:
            "Choose your essentials and place your order.",
        },
        {
          number: "03",
          title: "Receive",
          description:
            "Get your selected products delivered conveniently.",
        },
      ],
  
      benefitsTitle: "Digital growth for local businesses.",
      benefitsDescription:
        "VitoMart is designed to connect neighbourhood businesses with digital customers without charging shops a percentage commission on each order.",
  
      benefits: [
        "No percentage-based shop commission model",
        "Subscription-based shop participation",
        "More local customer reach",
        "Access to shared delivery infrastructure",
      ],
    },
  
    {
      name: "Dravito",
      slug: "dravito",
      category: "UNIFIED RIDER & DELIVERY PLATFORM",
      tagline: "One Platform. More Opportunities.",
      description:
        "One rider application connecting multiple services. Dravito is designed to bring Foodvito, Ravito and VitoMart together, helping delivery partners manage opportunities across the ecosystem.",
      image: "/images/dravito.png",
      appImage: "/images/dravito-app.png",
      status: "Coming Soon",
      audience: "Bike, auto and car delivery partners",
  
      features: [
        {
          title: "One Unified Application",
          description:
            "Access delivery opportunities from multiple connected platforms.",
        },
        {
          title: "Multi-Service Orders",
          description:
            "Manage eligible orders from Foodvito, Ravito and VitoMart.",
        },
        {
          title: "Earnings Management",
          description:
            "Keep track of delivery activity and earnings information.",
        },
        {
          title: "Rider Subscriptions",
          description:
            "A subscription-based participation model for delivery partners.",
        },
        {
          title: "Order Management",
          description:
            "Manage accepted deliveries and update order progress.",
        },
        {
          title: "Rider Experience",
          description:
            "A centralized experience designed for delivery partners.",
        },
      ],
  
      steps: [
        {
          number: "01",
          title: "Register",
          description:
            "Create your rider account and complete the required verification.",
        },
        {
          number: "02",
          title: "Connect",
          description:
            "Access eligible opportunities from connected services.",
        },
        {
          number: "03",
          title: "Deliver",
          description:
            "Manage deliveries and track your activity through one application.",
        },
      ],
  
      benefitsTitle: "More services. More earning opportunities.",
      benefitsDescription:
        "Dravito aims to simplify delivery partner operations by connecting three business platforms through one rider ecosystem.",
  
      benefits: [
        "One application for multiple services",
        "Subscription-based rider model",
        "Centralized order management",
        "More delivery opportunities",
      ],
    },
  ];
  