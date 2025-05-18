const LandingSection = () => {
  return (
    <section className="min-h-screen relative bg-center bg-cover bg-no-repeat bg-[url('/src/images/main.jpeg')]">
      <div className="absolute inset-0 bg-gradient-to-b from-primaryBlue-400/70 to-black/70">
        <div className="h-full w-full flex items-center justify-center text-white">
          <div className="space-y-4 text-center">
            <h1 className="text-5xl font-semibold">Continue Exploring</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              fuga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
