import '../style/AboutUs.css'; 

export default function AboutUs() {
  return (
    <section className="about-us-section text-center mt-5">
      <div className="section-content">
        <h3 className="section-subtitle">Our mission</h3>
        <p className="section-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sed, odio vel quisquam temporibus eligendi aut voluptas quaerat iusto aperiam rerum, natus distinctio, eveniet ipsum. Quidem pariatur adipisci soluta nesciunt!
        </p>
      </div>

      <div className="section-content">
        <h3 className="section-subtitle">Our history</h3>
        <p className="section-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, iure doloribus eveniet minima dignissimos nisi repudiandae qui soluta ratione dolores accusamus error hic fugiat alias nesciunt ducimus eligendi illum maiores!
        </p>
      </div>

      <div className="section-content">
        <h3 className="section-subtitle">Our team</h3>
        <div className="team-images">
  <div className="team-member">
    <img src="/src/assets/images/image2.jpg" alt="Team Member 1" className="team-image" />
    <p className="team-name">John Doe</p>
    <p className="team-designation">Software Engineer</p> 
  </div>
  <div className="team-member">
    <img src="/src/assets/images/image.jpg" alt="Team Member 2" className="team-image" />
    <p className="team-name">Jane Smith</p>
    <p className="team-designation">Product Manager</p> 
  </div>
  <div className="team-member">
    <img src="/src/assets/images/images3.jpg" alt="Team Member 3" className="team-image" />
    <p className="team-name">Alice Johnson</p>
    <p className="team-designation">UX/UI Designer</p> 
  </div>
</div>
</div>
    </section>
  );
}
