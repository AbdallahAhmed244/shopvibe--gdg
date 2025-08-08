import "../../styles/PlaceholderProfileAvatar.css";
export default function PlaceholderProfileAvatar({ name, size = "100" }) {
  const initial = name ? name.charAt(0).toUpperCase() : "U";
  return (
    <div
      className="default-profile-pic"
      style={{
        width: size + "px",
        height: size + "px",
        borderRadius: "50%",
        backgroundColor: "#007bff",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: size === "100" ? "40px" : size === "40" ? "16px" : "20px",
        fontWeight: "bold",
      }}
    >
      {initial}
    </div>
  );
}
