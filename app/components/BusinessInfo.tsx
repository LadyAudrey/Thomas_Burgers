import Image from "next/image";

export default function BusinessInfo() {
  return (
    <div className="hero p-20 bg-darkBrown text-offWhite">
      <div className="info">
        <h2 className="text-3xl">Thomas Burger</h2>
        <p>Location: 12125 Navy St LA CA 90066</p>
      </div>
      <div className="info">
        <div>
          <p>Mon - Friday 8:00 AM - 10:00 PM</p>
          <p>Sat - Sunday 8:00 AM - 10:00 PM</p>
        </div>
        <div className="flex flex-row justify">
          <button>Get In Touch</button>
          <div>
            <h4>Social Media Links</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
