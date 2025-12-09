// src/LandingPage.jsx
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-4 py-12 md:py-16 lg:py-20 bg-brand-orange">
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
          <div className="w-full max-w-[335px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/444dd036eb3d2814d09e3428e63ff0852bea1c44?width=670"
              alt="G-win Penguin Mascot"
              className="w-full h-auto"
            />
          </div>

          {/* Hero Content */}
          <div className="w-full max-w-[335px] flex flex-col items-center gap-6">
            <div className="flex flex-col gap-11">
              <h1 className="text-white text-center text-[28px] leading-[100%] font-bold">
                Master your money.
                <br />
                G-win at business.
                <br />
                It&apos;s free, it&apos;s fun.
              </h1>

              <p className="text-white text-center text-[13px] leading-[125%] font-normal">
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

            <button
              type="button"
              className="bg-white rounded-[25px] px-4 py-2.5 min-w-[153px]"
            >
              <span className="text-black text-center text-[15px] leading-[125%] font-normal">
                Join the pilot
              </span>
            </button>
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
              src="https://api.builder.io/api/v1/image/assets/TEMP/e7ed016b35f1c708a855d25968f39b5c327f179a?width=194"
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
              src="https://api.builder.io/api/v1/image/assets/TEMP/fb3f6ed94e11da0382653b348532d94d12de1728?width=214"
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

      {/* How it works Section */}
      <section className="px-4 py-12 md:py-16 bg-brand-orange">
        <div className="max-w-md mx-auto">
          <h1 className="text-white text-center text-2xl font-semibold leading-normal mb-12">
            How it works
          </h1>

          <div className="flex flex-col gap-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-white text-center text-[14px] font-semibold leading-normal">
                1.Apply for the Pilot
              </h2>
              <p className="text-white text-center text-[11px] font-medium leading-normal max-w-[300px]">
                Fill in the short form. We&apos;re selecting 50 serious entrepreneurs.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-white text-center text-[14px] font-semibold leading-normal">
                2.Receive your exclusive invitation
              </h2>
              <p className="text-white text-center text-[11px] font-medium leading-normal max-w-[300px]">
                If you&apos;re selected, we&apos;ll send you the app link and add you to
                the WhatsApp pilot group.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-white text-center text-[14px] font-semibold leading-normal">
                3.Learn in 5 minutes a day
              </h2>
              <p className="text-white text-center text-[11px] font-medium leading-normal max-w-[300px]">
                Complete 1 short lesson per day. We&apos;ll send daily reminders and
                keep you on track.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center gap-4">
              <h2 className="text-white text-center text-[14px] font-semibold leading-normal">
                4.Finish and win
              </h2>
              <p className="text-white text-center text-[11px] font-medium leading-normal max-w-[300px]">
                Complete all lessons and stand a chance to win rewards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is this for you? Section */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="max-w-md mx-auto">
          <h2 className="text-black text-center text-2xl font-semibold leading-normal mb-8">
            Is this for you?
          </h2>

          <div className="max-w-[300px] mx-auto">
            <p className="text-black text-[11px] font-medium leading-normal tracking-[0.11px]">
              This pilot is for you if:
            </p>
            <br />
            <ul className="text-black text-[11px] font-medium leading-normal tracking-[0.11px] list-disc pl-4 space-y-1">
              <li>You&apos;re aged 18–45 in South Africa</li>
              <li>You have a business or want to start one</li>
              <li>You want to master business finances</li>
              <li>You can commit to 5 minutes a day in building your future</li>
              <li>You&apos;re open to giving honest feedback to help us improve the app</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
