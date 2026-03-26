import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "../data/siteConfig";
import { buildWhatsAppUrl } from "../utils/whatsapp";

export default function ContactCTA() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.open(buildWhatsAppUrl(formData), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-[#F5F1EB] relative deferred-section">
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(199,91,18,0.45) 2px, transparent 2px)",
            backgroundSize: "40px 40px",
          }}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="section-subtitle">Get In Touch</h2>
          <h2 className="section-title !mb-4 text-deepMaroon">Contact Us</h2>

          <p className="text-luxeGray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Got a question or want to order? Message us directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-14">
          <a
            href={siteConfig.emailHref}
            className="bg-white border border-black/5 hover:border-saffronGold/30 rounded-[18px] p-6 text-center transition-all duration-300 hover:shadow-lg"
          >
            <Mail className="w-8 h-8 text-saffronGold mx-auto mb-3" />
            <h4 className="font-medium text-deepMaroon mb-2 tracking-[0.06em]">
              Email
            </h4>
            <p className="text-sm text-luxeGray hover:text-saffronGold transition">
              {siteConfig.email}
            </p>
          </a>
          <a
            href={siteConfig.phoneHref}
            className="bg-white border border-black/5 hover:border-saffronGold/30 rounded-[18px] p-6 text-center transition-all duration-300 hover:shadow-lg"
          >
            <Phone className="w-8 h-8 text-saffronGold mx-auto mb-3" />
            <h4 className="font-medium text-deepMaroon mb-2 tracking-[0.06em]">
              Phone
            </h4>
            <p className="text-sm text-luxeGray hover:text-saffronGold transition">
              {siteConfig.phoneDisplay}
            </p>
          </a>
          <a
            href={siteConfig.locationUrl}
            target="_blank"
            rel="noreferrer"
            className="bg-white border border-black/5 hover:border-saffronGold/30 rounded-[18px] p-6 text-center transition-all duration-300 hover:shadow-lg"
          >
            <MapPin className="w-8 h-8 text-saffronGold mx-auto mb-3" />
            <h4 className="font-medium text-deepMaroon mb-2 tracking-[0.06em]">
              Location
            </h4>
            <p className="text-sm text-luxeGray hover:text-saffronGold transition">
              {siteConfig.locationLabel}
            </p>
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5 bg-white p-6 sm:p-8 rounded-[22px] border border-black/5 shadow-[0_20px_40px_rgba(15,15,15,0.08)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="border border-black/10 px-5 py-3 rounded-[10px] text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/20 focus:border-saffronGold transition text-base bg-white hover:border-saffronGold/30"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="border border-black/10 px-5 py-3 rounded-[10px] text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/20 focus:border-saffronGold transition text-base bg-white hover:border-saffronGold/30"
            />
          </div>

          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-black/10 px-5 py-3 rounded-[10px] text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/20 focus:border-saffronGold transition text-base bg-white hover:border-saffronGold/30"
          />

          <textarea
            rows="4"
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-black/10 px-5 py-3 rounded-[10px] text-deepMaroon placeholder-luxeGray focus:outline-none focus:ring-2 focus:ring-saffronGold/20 focus:border-saffronGold transition resize-none text-base bg-white hover:border-saffronGold/30"
          />

          <button
            type="submit"
            className="bg-[#C75B12] hover:bg-[#A8480D] text-white font-medium py-3 px-8 rounded-[10px] w-full sm:w-auto transition-all duration-300 shadow-[0_18px_34px_rgba(199,91,18,0.22)] hover:scale-[1.02] active:scale-95"
          >
            Send Message
          </button>

          {submitted && (
            <div className="rounded-[10px] border border-saffronGold/20 bg-[#F8F2EA] px-4 py-3 text-sm text-deepMaroon">
              WhatsApp opened with your message pre-filled. Just tap send.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
