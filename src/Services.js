import React from "react";
import s1 from './s1.jpeg';
import s2 from './s2.jpeg';
import s3 from './s3.jpeg';
import s4 from './s4.jpeg';
import s5 from './s5.jpeg';
import s6 from './s6.jpeg';

// Sample data for the service cards
const servicesData = [
  {
    title: "Social Media Strategy Development",
    description:
      "We create customized strategies aligning your goals with content that resonates with your audience.",
    icon: s1,
  },
  {
    title: "Content Creation",
    description:
      "We develop engaging content, including graphics, videos, blogs, and infographics, to attract and retain your audience.",
    icon: s2,
  },
  {
    title: "Social Media Management",
    description:
      "We manage your profiles with consistent engagement, responding to comments, and building your community.",
    icon: s3,
  },
  {
    title: "Paid Ad Campaigns",
    description:
      "Run targeted ads on social platforms, such as Facebook Ads or Instagram Ads, to reach a larger audience and drive conversions.",
    icon: s4,
  },
  {
    title: "Analytics and Reporting",
    description:
      "We analyze metrics, track comments, and evaluate strategies to optimize your social media efforts.",
    icon: s5,
  },
  {
    title: "Influencer Marketing",
    description:
      "We connect with influencers in your niche to promote your brand and engage with their followers.",
    icon: s6,
  },
];

const Services = () => {
  return (
    <section style={{ padding: "50px" }}>
      <h1
        style={{
          fontSize: "2.5em",
          fontWeight: "500",
          color: "#4B0082",
          textAlign: "center",
          marginBottom: "30px",
          fontFamily: "Poppins",
        }}
      >
        Next-Gen Social Media Marketing for Maximum Impact
      </h1>
      <h2
        style={{
          fontSize: "1.8em",
          color: "#4B0082",
          textAlign: "center",
          marginBottom: "70px",
          fontFamily: "Poppins",
        }}
      >
        What We Offer?
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {servicesData.map((service, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "20px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src={service.icon}
              alt={service.title}
              style={{
                width: "100%", // Stretch the image to full width
                height: "auto", // Maintain aspect ratio
                borderRadius: "15px 15px 0 0", // Rounded corners on the top
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontSize: "1.5em",
                color: "#4B0082",
                margin: "19px 0 7px",
                marginBottom :"30px",
                fontFamily: "Poppins",
              }}
            >
              {service.title}
            </h3>
            <p
              style={{
                fontSize: "0.9em",
                color: "#666",
                margin: "0",
                fontFamily: "Poppins",
              }}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;