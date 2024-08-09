import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const OtherCards = () => {
  return (
    <section className="bg-transparent text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-5xl font-timmana">Kickstart your marketing</h2>
          <p className="mt-4 text-black font-normal font-ubuntu">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus
            nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-red-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <i className="fas fa-video fa-2x text-pink-500"></i>
            <h2 className="mt-4 text-xl font-bold text-black font-ubuntu">Marketing Videos</h2>
            <p className="mt-1 text-sm text-black">
              Create and distribute engaging marketing videos for your products.
            </p>
          </a>

          <a
            className="block rounded-xl border border-red-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <i className="fas fa-search fa-2x text-pink-500"></i>
            <h2 className="mt-4 text-xl font-bold text-black font-ubuntu">SEO Optimization</h2>
            <p className="mt-1 text-sm text-black">
              Improve your website's visibility on search engines with our SEO tools.
            </p>
          </a>

          <a
            className="block rounded-xl border border-red-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <i className="fas fa-palette fa-2x text-pink-500"></i>
            <h2 className="mt-4 text-xl font-bold text-black font-ubuntu">Branding</h2>
            <p className="mt-1 text-sm text-black">
              Develop a strong brand identity for your online store.
            </p>
          </a>

          <a
            className="block rounded-xl border border-red-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <i className="fas fa-headset fa-2x text-pink-500"></i>
            <h2 className="mt-4 text-xl font-bold text-black font-ubuntu">Customer Support</h2>
            <p className="mt-1 text-sm text-black">
              Provide excellent customer support with our integrated tools.
            </p>
          </a>

          <a
            className="block rounded-xl border border-red-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <i className="fas fa-camera fa-2x text-pink-500"></i>
            <h2 className="mt-4 text-xl font-bold text-black font-ubuntu">Product Photography</h2>
            <p className="mt-1 text-sm text-black">
              Capture high-quality photos of your products to attract customers.
            </p>
          </a>

          <a
            className="block rounded-xl border border-red-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
            href="#"
          >
            <i className="fas fa-chart-line fa-2x text-pink-500"></i>
            <h2 className="mt-4 text-xl font-bold text-black font-ubuntu">Analytics</h2>
            <p className="mt-1 text-sm text-black">
              Track and analyze your store's performance with our analytics tools.
            </p>
          </a>
        </div>
        <div className="mt-12 text-center">
         
<a class="group relative inline-block focus:outline-none focus:ring" href="#">
  <span
    class="absolute inset-0 translate-x-0 translate-y-0 bg-pink-500 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"
  ></span>

  <span
    class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest"
  >
    Mas informacion
  </span>
</a>
        </div>
      </div>
    </section>
  );
};

export default OtherCards;
