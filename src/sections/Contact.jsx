import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Let’s Connect"
          sub="💬 Have questions or ideas? Let’s talk! 🚀"
        />
        <div className="grid-12-cols mt-16">
          {/* Left Section - SuitAryan Image */}
          <div className="xl:col-span-5 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full rounded-3xl overflow-hidden flex items-center justify-center">
              <img
                src="/images/SuitAryan.png"
                alt="Aryan Patel"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Section - Polished Let's Connect Button */}
          <div className="xl:col-span-7 flex items-center justify-center">
            <a
              href="https://www.linkedin.com/in/aryan-patel-b33a61278/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-400 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl"
            >
              <span className="mr-3">Let’s Connect!</span>
              <img
                src="/images/arrow-down.svg"
                alt="arrow"
                className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
              />
              <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
