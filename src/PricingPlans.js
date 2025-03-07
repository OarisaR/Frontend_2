import React from "react";

const PricingPlans = () => {
  const plans = [
    {
      title: "Basic",
      price: "7,000 TK",
      features: [
        "1 post per day (Total 30 posts)",
        "Write caption for every post",
        "Edit reel and video (Normal)",
        "Meta Boosting",
      ],
    },
    {
      title: "Pro",
      price: "10,000 TK",
      features: [
        "2 posts per day (Total 60 posts)",
        "Write caption for every post",
        "Edit reel and video (Normal)",
        "Meta Boosting (without service charge)",
        "We will work with you for any post customization (only one project)",
      ],
    },
    {
      title: "Business",
      price: "18,000 TK",
      features: [
        "3-4 posts per day (Total 80-90 posts)",
        "Write caption for every post",
        "Edit reel and video (Normal)",
        "Meta Boosting (without service charge)",
        "We will work with you for any post customization",
      ],
    },
  ];

  return (
    <section style={{ padding: "50px", textAlign: "center" }}>
      <h1
        style={{
          fontSize: "2.5em",
          fontWeight: "bold",
          color: "#4B0082",
          marginBottom: "10px",
          fontFamily: "Poppins",
        }}
      >
        Find Your Perfect Plan
      </h1>
      <h2
        style={{
          fontSize: "1.2em",
          color: "#333",
          marginBottom: "40px",
          fontFamily: "Poppins",
        }}
      >
        Detailed price for each of our services, with no hidden fees.
      </h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              background: "linear-gradient(135deg, #6a1b9a, #ab47bc)", 
              borderRadius: "15px",
              padding: "30px",
              width: "300px",
              color: "#fff",
              textAlign: "left",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between", 
              height: "450px", 
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.8em",
                  margin: "0 0 10px",
                  fontFamily: "Poppins",
                }}
              >
                {plan.title}
              </h3>
              <p
                style={{
                  fontSize: "1.5em",
                  margin: "0 0 10px",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                }}
              >
                {plan.price}{" "}
                <span style={{ fontSize: "0.5em", fontWeight: "200" }}>
                  Per Month
                </span>
              </p>
              <div
                style={{
                  borderBottom: "2px solid #fff",
                  margin: "10px 0",
                  marginBottom: "40px",
                }}
              />
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0",
                  margin: "0 0 20px",
                }}
              >
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    style={{
                      margin: "10px 0",
                      fontFamily: "Poppins",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        marginRight: "10px",
                      }}
                    >
                      ✔️
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              style={{
                background: "#F7CFD8", 
                color: "#5A1B89",
                border: "none",
                borderRadius: "5px",
                padding: "10px 20px",
                cursor: "pointer",
                fontWeight: "bold",
                fontFamily: "Poppins",
                alignSelf: "flex-start", 
              }}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
