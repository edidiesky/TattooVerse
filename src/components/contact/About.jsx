const About = () => {
  return (
    <div className="w-full flex items-center justify-center relative min-h-[40vh] py-32">
      <div className="max-w-custom w-[93%] mx-auto grid md:grid-cols-custom_2 gap-16">
        <div className="w-full md:w-[500px] pink_background flex">
          <div className="w-full px-12 py-20 flex flex-col gap-8">
            <h3 className="family2 text-3xl text-dark">Get in touch</h3>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col pb-4 border-dotted border-b">
                <span className="flex flex-col gap-2">
                  <span className="block text-base underline md:text-base family1 text-dark">
                    Address
                  </span>
                  <span className="block text-sm md:text-sm family3 text-dark">
                    12 Main Street, Queens, NY 11435
                  </span>
                </span>
              </div>
              <div className="flex flex-col pb-4 border-dotted border-b">
                <span className="flex flex-col gap-2">
                  <span className="block text-base underline md:text-base family1 text-dark">
                    Phone
                  </span>
                  <span className="block text-sm md:text-sm family3 text-dark">
                    For Appointments Call ••{" "}
                    <span className="family3"> (800) 555 5555</span>
                  </span>
                </span>
              </div>
              <div className="flex flex-col pb-4 border-dotted border-b">
                <span className="flex flex-col gap-2">
                  <span className="block text-base underline md:text-base family1 text-dark">
                    Email
                  </span>
                  <span className="block text-sm md:text-sm family3 text-dark">
                    contact@TattooVerse-company.com
                  </span>
                </span>
              </div>
              <div className="flex flex-col pb-4 border-dotted border-b">
                <span className="flex flex-col gap-2">
                  <span className="block text-base underline md:text-base family1 text-dark">
                    We Are Open
                  </span>
                  <span className="block text-sm md:text-sm family3 text-dark">
                    Monday To Saturday •• 09:30 to 18:00
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 md:gap-8">
          <h2 className="family2 text-5xl text-dark">
            Do You Have A Tattoo In Mind? Bring your vision to life with us
          </h2>
          <span className="block text-base md:text-lg family3 text-dark">
            Visit us or send a message to consult with our artists for a tattoo.
          </span>

          <div className="w-full pt-8 grid sm:grid-cols-2 gap-12">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
            />
            <input
              type="text"
              placeholder="Email"
              className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
            />
            <input
              type="text"
              placeholder="Phone Address"
              className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
            />
          </div>
          <textarea
            type="text"
            placeholder="Address"
            className="w-full border-b family3 pb-4 px-4 border-[rgba(0,0,0,.5)] text-lg outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

