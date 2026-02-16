export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-dancing text-center mb-8">
        About PrigleMora
      </h1>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <img
          src="../src/assets/logo.png"
          alt="About PrigleMora"
          className="rounded-xl"
        />

        <div className="space-y-2 text-gray-700 leading-relaxed">
          <p>
            <span className="font-semibold text-pink-600 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
              PrigleMora
            </span>{" "}
            is a modern fashion brand built for individuals who value elegance,
            comfort, and confidence.
          </p>
          <p>
            Our designs are inspired by global trends while staying rooted in
            timeless craftsmanship. Every piece is curated to make you feel bold
            and authentic.
          </p>
          <p>
            From everyday wear to statement outfits, PrigleMora is where style
            meets purpose.
          </p>
        </div>
      </div>
      <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-dancing text-center mb-4">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-12">
          We’d love to hear from you
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Email:</strong> support@priglemora.com
            </p>
            <p>
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p>
              <strong>Address:</strong> Bareilly, Uttar Pradesh, India
            </p>
            <p className="text-sm text-gray-500">
              Our team usually responds within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:border-primary"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:border-primary"
            />
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full px-4 py-3 border rounded-lg outline-none focus:border-primary"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </section>
  );
}
