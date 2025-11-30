// src/LandingPage.jsx  (or src/WaitlistLandingPage.jsx)
const WAITLIST_FORM_URL = "https://forms.gle/your-real-form-id-here"; // 🔁 change this

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="px-4 py-12 md:py-16 lg:py-20"
        style={{ backgroundColor: "#FF914D" }}
      >
        <div className="max-w-md mx-auto flex flex-col items-center gap-8">
          {/* Penguin Mascot */}
          <div className="w-full max-w-[335px]">
            <img
              src="https://tknzgegeniiojzsascfl.supabase.co/storage/v1/object/public/pictures/Wyn.png?width=400"
              alt="G-win Penguin Mascot"
              className="w-full h-auto"
            />
          </div>

          {/* Hero Content */}
          <div className="w-full max-w-[335px] flex flex-col items-center gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="text-white text-center text-[28px] leading-[100%] font-bold">
                Master your money.
                <br />
                G-win at business.
                <br />
                It&apos;s free, it&apos;s fun.
              </h1>

              <p className="text-white text-center text-[13px] leading-[125%] font-normal">
                We&apos;re sorry, our pilot is full.
                <br />
                <br />
                Join the Priority Waitlist for the next launch of the
                game-changing business finance learning app made for South
                African entrepreneurs who want to grow with confidence.
              </p>
            </div>

            {/* TOP CTA – Priority Waitlist */}
            <a
              href={"https://docs.google.com/forms/d/e/1FAIpQLSfAy76fgtD2b58TgZCRhb4PfcyHndVBIT_1PjlEIJdLs3cu3A/viewform?usp=dialog"}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-[25px] px-4 py-2.5 min-w-[153px] inline-flex items-center justify-center text-center"
            >
              <span className="text-black text-[15px] leading-[125%] font-normal">
                Join the Priority
                <br />
                Waitlist
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Feature Section 1: Bite sized lessons */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto flex flex-col items-center gap-6">
          <h2 className="text-black text-center text-[14px] font-semibold leading-normal">
            Bite sized lessons, Serious Gains
          </h2>

          <div className="w-24 h-24">
            <img
              src="https://tknzgegeniiojzsascfl.supabase.co/storage/v1/object/public/pictures/ScenarioQuiz/quest1/subquest1/level2/Concept4%20Test_Business%20Partner.png?width=194"
              alt="Trophy"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-black text-center text-[11px] font-medium leading-normal max-w-[300px]">
            With quick, bite sized lessons, you&apos;ll earn points and rewards while
            mastering the game of business finance — making your money grow and
            your business succeed.
          </p>
        </div>
      </section>

      {/* Feature Section 2: Built for Real Hustlers */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto flex flex-col items-center gap-6">
          <h2 className="text-black text-center text-[14px] font-semibold leading-normal">
            Built for Real Hustlers
          </h2>

          <div className="w-28 h-24">
            <img
              src="https://tknzgegeniiojzsascfl.supabase.co/storage/v1/object/public/pictures/ScenarioQuiz/quest1/subquest1/level2/Concept3%20Test_A.png?width=194"
              alt="Trophy"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-black text-center text-[11px] font-medium leading-normal max-w-[300px]">
            Content designed for real South African businesses - existing
            businesses, startups, freelancers, side hustles and more.
          </p>
        </div>
      </section>

      {/* Feature Section 3: Rewards for Taking Action */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto flex flex-col items-center gap-6">
          <h2 className="text-black text-center text-[14px] font-semibold leading-normal">
            Rewards for Taking Action
          </h2>

          <div className="w-28 h-24">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/4bca52a19d4df09302bf949bdc66136d2d1d046a?width=212"
              alt="Trophy"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-black text-center text-[11px] font-medium leading-normal max-w-[300px]">
            The top 5 users who complete all lessons will receive Takealot
            vouchers as a thank-you for your time and effort.
          </p>
        </div>
      </section>

      {/* Is this for you? Section */}
      <section
        className="px-4 py-12 md:py-16"
        style={{ backgroundColor: "#FF914D" }}
      >
        <div className="max-w-md mx-auto">
          <h2 className="text-white text-center text-2xl font-semibold leading-normal mb-8">
            Is this for you?
          </h2>

          <div className="max-w-[300px] mx-auto">
            <p className="text-white text-[11px] font-medium leading-normal tracking-[0.11px]">
              This pilot is for you if:
            </p>
            <br />
            <p className="text-white text-[11px] font-medium leading-normal tracking-[0.11px]">
              You&apos;re aged 18–45 in South Africa
              <br />
              You have a business or want to start one
              <br />
              You want to master business finances
              <br />
              You can commit to 5 minutes a day in building your future
              <br />
              You&apos;re open to giving honest feedback to help us improve the app
            </p>
          </div>

          {/* Bottom CTA */}
          <div className="flex justify-center mt-12">
            <a
              href={"https://docs.google.com/forms/d/e/1FAIpQLSfAy76fgtD2b58TgZCRhb4PfcyHndVBIT_1PjlEIJdLs3cu3A/viewform?usp=dialog"}
              target="_blank"
              rel="noreferrer"
              className="bg-white rounded-[25px] px-4 py-2.5 min-w-[153px] inline-flex items-center justify-center text-center"
            >
              <span className="text-black text-[15px] leading-[125%] font-normal">
                Join the Priority
                <br />
                Waitlist
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
