// src/LandingPage.jsx
export default function LandingPage() {
  const SIGNUP_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSckNkcOSUVfVMkefZP8bq7DfhXGF-MXRRr4nt-gg7Em6HWCZw/viewform?usp=sharing&ouid=108340782551691965931";

  const SIGNUP_FORM_EMBED_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSckNkcOSUVfVMkefZP8bq7DfhXGF-MXRRr4nt-gg7Em6HWCZw/viewform?embedded=true";

  const LOGO_URL = "https://www.gwin.co.za/assets/logo-header.svg";
  const PENGUIN_URL = "https://www.gwin.co.za/assets/gwin-penguin-standing.svg";

  return (
    <div className="min-h-screen bg-white text-[#14110f]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-[min(100%-40px,1180px)] items-center justify-between gap-4 md:h-20">
          <a href="https://www.gwin.co.za/" aria-label="Gwin home" className="inline-flex items-center">
            <img
              src={LOGO_URL}
              alt="Gwin logo"
              className="h-auto w-32 md:w-40"
              loading="eager"
              decoding="async"
            />
          </a>

          <a
            href={SIGNUP_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[#f79256] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-12px_rgba(247,146,86,.95)] transition hover:bg-[#ef7f3d]"
          >
            Open form
          </a>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-[#f4f3f1] px-5 py-14 md:py-20">
          <div className="absolute -left-32 top-12 hidden w-[360px] rotate-[58deg] opacity-90 md:block lg:w-[430px]">
            <img src={PENGUIN_URL} alt="" aria-hidden="true" className="h-auto w-full" loading="lazy" decoding="async" />
          </div>

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#14110f]/70">
              Gwin sign-up
            </p>

            <h1 className="mx-auto mt-4 max-w-3xl text-[clamp(2.1rem,6vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-.055em]">
              Join the Gwin sign-up list.
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#14110f]/75 md:text-lg">
              You’re almost there. Add your details below and we’ll use this list to share access and launch updates.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm font-bold leading-6 text-[#f79256]">
              Sign-ups are open and are not limited to 50 users.
            </p>
          </div>
        </section>

        <section className="relative bg-white px-5 py-10 md:py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <aside className="rounded-[2rem] border border-[#14110f]/10 bg-[#f4f3f1] p-6 md:p-8 lg:sticky lg:top-28">
              <p className="text-xs font-extrabold uppercase tracking-[.18em] text-[#14110f]/70">
                Next step
              </p>

              <h2 className="mt-4 text-[clamp(1.7rem,3vw,2.4rem)] font-extrabold leading-tight tracking-[-.04em]">
                Complete the short form.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#14110f]/70">
                This page is only for capturing sign-ups, so we’ve kept it simple and removed the repeated landing-page information.
              </p>

              <div className="mt-7 grid gap-3 text-sm leading-6 text-[#14110f]/75">
                <div className="rounded-2xl bg-white p-4">
                  <strong className="block text-[#14110f]">1. Fill in your details</strong>
                  <span>The form is connected to the Gwin sign-up list.</span>
                </div>

                <div className="rounded-2xl bg-white p-4">
                  <strong className="block text-[#14110f]">2. Submit the form</strong>
                  <span>We’ll use the list for access and launch updates.</span>
                </div>
              </div>

              <a
                href={SIGNUP_FORM_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#f79256] px-6 py-3.5 text-base font-bold text-white shadow-[0_16px_40px_-20px_rgba(247,146,86,1)] transition hover:bg-[#ef7f3d]"
              >
                Open form in new tab
              </a>
            </aside>

            <div className="overflow-hidden rounded-[2rem] border border-[#14110f]/10 bg-white shadow-[0_28px_80px_-55px_rgba(20,17,15,.65)]">
              <iframe
                src={SIGNUP_FORM_EMBED_URL}
                title="Gwin sign-up form"
                className="h-[820px] w-full border-0 md:h-[900px]"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>

        <section className="bg-[#14110f] px-5 py-8 text-center text-white">
          <p className="text-sm text-white/70">
            Already know what Gwin does? Complete the form above, or go back to the full landing page.
          </p>

          <a
            href="https://www.gwin.co.za/"
            className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
          >
            Back to Gwin
          </a>
        </section>
      </main>
    </div>
  );
}
