import MainNavigationBar from "../layout/MainNavigationBar";
import SiteFooter from "../layout/SiteFooter";
import "../../styles/TeamMembersPage.css";

export default function TeamMembersPage({
  currentUser,
  getTotalItems,
  setSelectedCategory,
}) {
  return (
    <div className="page-container">
      <MainNavigationBar
        currentUser={currentUser}
        getTotalItems={getTotalItems}
      />
      <div className="members-content">
        <h1>Our Team</h1>
        <p className="team-description">
          Meet our dedicated team of professionals who work tirelessly to bring
          you the best shopping experience. Our team combines expertise,
          creativity, and passion to deliver exceptional service and carefully
          curated products.
        </p>
        <div className="team-grid">
          <div className="team-card">
            <div className="team-avatar">AA</div>
            <h3>Abdallah Ahmed</h3>
            <p className="team-role">Leader</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">MH</div>
            <h3>Menna Hany</h3>
            <p className="team-role">Member</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">SH</div>
            <h3>Steven Hany</h3>
            <p className="team-role">Member</p>
          </div>
          <div className="team-card">
            <div className="team-avatar">LA</div>
            <h3>Laila Ayman</h3>
            <p className="team-role">Member</p>
          </div>
        </div>
      </div>
      <SiteFooter setSelectedCategory={setSelectedCategory} />
    </div>
  );
}
