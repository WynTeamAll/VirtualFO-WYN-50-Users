// src/LandingPage.jsx
const FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSckNkcOSUVfVMkefZP8bq7DfhXGF-MXRRr4nt-gg7Em6HWCZw/viewform?usp=dialog";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Hero Section */}
      <section
        className="px-4 py-12 md:py-16 lg:py-20"
        style={{ backgroundColor: "#E9652D" }}
      >
        <div className="max-w-md mx-auto flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center justify-center px-5 pt-2 pb-2">
            <img
              src="https://tknzgegeniiojzsascfl.supabase.co/storage/v1/object/public/pictures/Icon2.png"
              alt="Start logo"
              className="h-[60px] w-auto object-contain drop-shadow-sm select-none"
              loading="eager"
              decoding="async"
              draggable="false"
            />
          </div>

          {/* Penguin Mascot */}
          <div className="w-full max-w-[302px]">
            <img
              src="https://tknzgegeniiojzsascfl.supabase.co/storage/v1/object/public/pictures/Wyn.png?width=400"
              alt="G-win Penguin Mascot"
              className="w-full h-auto"
            />
          </div>

          {/* Hero Content */}
          <div className="w-full max-w-[335px] flex flex-col items-center gap-6">
            <div className="flex flex-col gap-6">
              <h1 className="text-white text-center text-3xl leading-tight font-bold md:text-4xl">
                Master your money.
                <br />
                G-win at business.
                <br />
                It&apos;s free, it&apos;s fun.
              </h1>

              <p className="text-white/95 text-center text-lg leading-relaxed md:text-xl">
                Join the exclusive pilot of the game-changing business finance
                learning app made for South African entrepreneurs who want to
                grow with confidence.
                <br />
                <br />
                There are only 50 spots available.
                <br />
                Top 5 finishers get rewards.
              </p>
            </div>

            {/* TOP CTA BUTTON → Google Form  */}
            <a
              href={FORM_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center bg-white text-black rounded-full px-6 py-2.5 text-lg font-medium shadow-sm hover:bg-neutral-100 transition"
            >
              Join the pilot
            </a>
          </div>
        </div>
      </section>

      {/* Feature Section 1: Bite sized lessons */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto flex flex-col items-center gap-6">
          <h2 className="text-base md:text-lg font-semibold text-center">
            Bite sized lessons, Serious Gains
          </h2>

          <div className="w-24 h-24">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e7ed016b35f1c708a855d25968f39b5c327f179a?width=194"
              alt="Trophy"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-base md:text-lg font-medium leading-relaxed text-center max-w-[300px] text-black/80">
            With quick, bite sized lessons, you&apos;ll earn points and rewards
            while mastering the game of business finance — making your money
            grow and your business succeed.
          </p>
        </div>
      </section>

      {/* Feature Section 2: Built for Real Hustlers */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto flex flex-col items-center gap-6">
          <h2 className="text-base md:text-lg font-semibold text-center">
            Built for Real Hustlers
          </h2>

          <div className="w-28 h-24">
            <img
              src="https://tknzgegeniiojzsascfl.supabase.co/storage/v1/object/public/pictures/ScenarioQuiz/quest1/subquest1/level2/Concept4%20Test_Business%20Partner.png?width=194"
              alt="Trophy"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-base md:text-lg font-medium leading-relaxed text-center max-w-[300px] text-black/80">
            Content designed for real South African businesses – existing
            businesses, startups, freelancers, side hustles and more.
          </p>
        </div>
      </section>

      {/* Feature Section 3: Rewards for Taking Action */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto flex flex-col items-center gap-6">
          <h2 className="text-base md:text-lg font-semibold text-center">
            Rewards for Taking Action
          </h2>

          <div className="w-28 h-24">
            <img
              src="https://tknzgegeniiojzsascfl.supabase.co/storage/v1/object/public/pictures/ScenarioQuiz/quest1/subquest1/level2/Concept3%20Test_A.png?width=194"
              alt="Trophy"
              className="w-full h-full object-contain"
            />
          </div>

          <p className="text-base md:text-lg font-medium leading-relaxed text-center max-w-[300px] text-black/80">
            The top 5 users who complete all lessons will receive Takealot
            vouchers as a thank-you for your time and effort.
          </p>
        </div>
      </section>

      {/* How it works Section */}
      <section
        className="px-4 py-12 md:py-16"
        style={{ backgroundColor: "#E9652D" }}
      >
        <div className="max-w-md mx-auto">
          <h1 className="text-white text-center text-2xl md:text-3xl font-semibold leading-snug mb-10">
            How it works
          </h1>

          <div className="flex flex-col gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-white text-base md:text-lg font-semibold text-center">
                1.Apply for the Pilot
              </h2>
              <p className="text-white/95 text-base md:text-lg font-medium leading-relaxed text-center max-w-[300px]">
                Fill in the short form. We&apos;re selecting 50 serious
                entrepreneurs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-white text-base md:text-lg font-semibold text-center">
                2.Receive your exclusive invitation
              </h2>
              <p className="text-white/95 text-base md:text-lg font-medium leading-relaxed text-center max-w-[300px]">
                If you&apos;re selected, we&apos;ll send you the app link and add you to
                the WhatsApp pilot group.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-white text-base md:text-lg font-semibold text-center">
                3.Learn in 5 minutes a day
              </h2>
              <p className="text-white/95 text-base md:text-lg font-medium leading-relaxed text-center max-w-[300px]">
                Complete 1 short lesson per day. We&apos;ll send daily reminders
                and keep you on track.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-3">
              <h2 className="text-white text-base md:text-lg font-semibold text-center">
                4.Finish and win
              </h2>
              <p className="text-white/95 text-base md:text-lg font-medium leading-relaxed text-center max-w-[300px]">
                Complete all lessons and stand a chance to win rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is this for you? Section */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="max-w-md mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-semibold leading-snug mb-6">
            Is this for you?
          </h2>

          <div className="max-w-[300px] mx-auto text-left">
            <p className="text-base md:text-lg font-medium leading-relaxed tracking-[0.03em]">
              This pilot is for you if:
            </p>
            <ul className="mt-3 space-y-1 text-base md:text-lg font-medium leading-relaxed tracking-[0.03em] list-disc pl-4">
              <li>You&apos;re aged 18–45 in South Africa</li>
              <li>You have a business or want to start one</li>
              <li>You want to master business finances</li>
              <li>You can commit to 5 minutes a day in building your future</li>
              <li>
                You&apos;re open to giving honest feedback to help us improve
                the app
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BUTTON → Google Form */}
      <section className="bg-white px-4 pb-16">
        <div className="max-w-md mx-auto flex justify-center">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center bg-[#E9652D] text-white rounded-full px-8 py-3 text-lg font-semibold shadow-md hover:bg-[#cf5624] transition"
          >
            Join the pilot
          </a>
        </div>
      </section>
    </div>
  );
}
