import team1 from "../assets/téléchargement.jpg";
import team2 from "../assets/téléchargement.jpg";
import team3 from "../assets/téléchargement.jpg";

const team = [team1, team2, team3];

export default function AboutUs() {
  return (
    <div
      style={{
        padding: "5rem 3rem",
        backgroundColor: "#f5f5f5",
        fontFamily: "lato",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h2 style={{ color: "#061f4a", fontSize: "2.5rem", marginBottom: "1rem" }}>
          About Us
        </h2>
        <p
          style={{
            color: "gray",
            fontSize: "1.125rem",
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          We are a professional real estate company committed to helping our
          clients find their dream homes. Our team of experienced agents
          provides the best service and guidance every step of the way.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {team.map((member, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "white",
              width: "18rem",
              padding: "1.5rem",
              borderRadius: "0.75rem",
              textAlign: "center",
              boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={member}
              alt="Team Member"
              style={{
                width: "8rem",
                height: "8rem",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "1rem",
              }}
            />
            <h3 style={{ color: "#061f4a", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
              Agent Name
            </h3>
            <p style={{ color: "gray", fontSize: "1rem" }}>
              Experienced real estate agent helping clients find the perfect
              property.
            </p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "3rem" }}>
        <p
          style={{
            color: "gray",
            fontSize: "1.125rem",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          Our mission is to make property buying and selling simple,
          transparent, and stress-free.
        </p>
      </div>
    </div>
  );
}