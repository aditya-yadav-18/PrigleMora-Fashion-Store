export default function HelpPage() {
  return (
    <div className="bg-gradient-to-b from-pink-50 via-white to-purple-50">
      {/* Page Header */}
      <section className="text-center py-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Help &{" "}
          <span className="text-pink-600 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]">
            Information
          </span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about shopping with PrigleMora.
        </p>
      </section>

      {/* FAQs */}
      <section id="faqs" className="max-w-6xl mx-auto px-6 py-14 scroll-mt-24">
        <h2 className="text-pink-600 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6 mt-8">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              What is PrigleMora?
            </h3>
            <p className="mt-2 text-gray-600">
              PrigleMora is a modern fashion brand focused on elegant,
              comfortable, and confidence-driven designs.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              What type of jewellery do you sell?
            </h3>
            <p className="mt-2 text-gray-600">
              We specialize in oxidised jewellery, statement earrings,
              daily-wear earrings, festive pieces, and trendy fashion jewellery
              curated with love.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              Is your jewellery anti-tarnish?
            </h3>
            <p className="mt-2 text-gray-600">
              {" "}
              Most of our pieces are high-quality oxidised and fashion
              jewellery. With proper care, they last long and retain their
              beauty.
            </p>
            <p>(Please note: fashion jewellery is not waterproof.)</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              Will the jewellery look exactly like the pictures?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes We try our best to display accurate pictures, but slight
              variations may occur due to lighting and screen differences.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              Do you offer COD (Cash on Delivery)?
            </h3>
            <p className="mt-2 text-gray-600">
              Currently, we offer prepr orders only to ensure smooth and quick
              processing.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              What are the delivery charges?
            </h3>
            <p className="mt-2 text-gray-600">
              Delivery charges are calculated at checkout and may vary based on
              location. We also run special offers and hampers where shipping is
              minimal or discounted.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              How long does shipping take?
            </h3>
            <p className="mt-2 text-gray-600">
              Orders are usually shipped within 2-3 working days. Delivery takes
              5-7 working days, depending on your location.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              Do you accept returns or exchanges?
            </h3>
            <p className="mt-2 text-gray-600">
              Due to hygiene reasons, returns and exchanges are not accepted.
              However, if you receive a damaged or incorrect product, please
              contact us within 24 hours of delivery with an unboxir deo.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              How should I take care of my jewellery?
            </h3>
            <p className="mt-2 text-gray-600">
              Avoid water, perfume, and chemicals Store in a dry, airtight box.
              Clean gently with a soft cloth Proper care ensures longer life
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              How can I place an order?
            </h3>
            <p className="mt-2 text-gray-600">
              Browse our collections, add items to your cart, and checkout
              securely using multiple payment options.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              Do you offer gift hampers or combos?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes We offer curated hampers and combo deals-perfect for gifting
              or self-love!
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              How can I contact you?
            </h3>
            <p className="mt-2 text-gray-600">
              You can reach us via Instagram DM or WhatsApp. We usually respond
              within 24 hours.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="font-semibold text-lg text-gray-900">
              Do you ship all over India?
            </h3>
            <p className="mt-2 text-gray-600">
              Yes, we deliver across India with reliable logistics partners.
            </p>
          </div>
        </div>
      </section>

      {/* Shipping Info */}
      <section id="shipping" className="bg-white py-14 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-pink-600 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]">
            Shipping Information
          </h2>

          <p className="section-text">
            Orders are processed within 24–48 hours. Delivery usually takes 3–7
            business days depending on your location.
          </p>
          <p className="section-text">
            Once shipped, tracking details will be shared via email or SMS.
          </p>
        </div>
      </section>

      {/* Returns */}
      <section id="returns" className="py-14 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-pink-600 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]">
            Returns & Exchanges
          </h2>

          <p className="section-text">
            We offer easy returns within 7 days of delivery. Items must be
            unused, unwashed, and in original packaging.
          </p>
          <p className="section-text">
            Refunds are processed within 5–7 working days after inspection.
          </p>
        </div>
      </section>

      {/* Gift Cards */}
      <section id="giftcards" className="bg-white scroll-mt-24 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-pink-600 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]">
            Gift Cards
          </h2>

          <p className="section-text">
            PrigleMora gift cards are the perfect way to surprise your loved
            ones. Available in multiple denominations.
          </p>
          <p className="section-text">
            Gift cards are valid for 12 months from the date of purchase.
          </p>
        </div>
      </section>

      {/* Blog */}
      <section id="social" className="py-14 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-pink-600 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]">
            From Social Media
          </h2>

          <p className="section-text">
            Explore fashion tips, styling guides, and behind-the-scenes stories
            from the PrigleMora design team.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
              <h3 className="font-semibold text-lg">2026 Fashion Trends</h3>
              <p className="mt-2 text-gray-600">
                Discover what’s shaping this year’s fashion world.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
              <h3 className="font-semibold text-lg">
                How to Style Minimal Outfits
              </h3>
              <p className="mt-2 text-gray-600">
                Simple styling tricks for a bold look.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-6">
              <h3 className="font-semibold text-lg">Behind the Brand</h3>
              <p className="mt-2 text-gray-600">
                The story and values behind PrigleMora.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
