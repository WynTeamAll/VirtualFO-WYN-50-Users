// src/LandingPage.jsx
export default function LandingPage() {
  const SIGNUP_FORM_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSckNkcOSUVfVMkefZP8bq7DfhXGF-MXRRr4nt-gg7Em6HWCZw/viewform?usp=sharing&ouid=108340782551691965931";

  const SIGNUP_FORM_EMBED_URL =
    "https://docs.google.com/forms/d/e/1FAIpQLSckNkcOSUVfVMkefZP8bq7DfhXGF-MXRRr4nt-gg7Em6HWCZw/viewform?embedded=true";

  const LOGO_URL = "https://www.gwin.co.za/assets/logo-header.svg";
  const PENGUIN_URL = "https://www.gwin.co.za/assets/gwin-penguin-standing.svg";

  return (
    <div className="min-h-[100svh] overflow-x-hidden bg-white text-[#14110f]">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between gap-3 px-4 sm:px-5 md:h-20">
          <a
            href="https://www.gwin.co.za/"
            aria-label="Gwin home"
            className="inline-flex min-w-0 items-center"
          >
            <img
              src={LOGO_URL}
              alt="Gwin logo"
              className="h-auto w-28 sm:w-32 md:w-40"
              loading="eager"
              decoding="async"
            />
          </a>

          <a
            href={SIGNUP_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#f79256] px-4 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-12px_rgba(247,146,86,.95)] transition hover:bg-[#ef7f3d] sm:px-5"
          >
            Open form
          </a>
        </div>
      </header>

      <main>
        <section className="relative isolate overflow-hidden bg-[#f4f3f1] px-4 py-10 sm:px-5 sm:py-14 md:py-20">
          <div className="pointer-events-none absolute -left-36 top-8 hidden w-[clamp(320px,34vw,460px)] rotate-[58deg] opacity-90 md:block">
            <img
              src={PENGUIN_URL}
              alt=""
              aria-hidden="true"
              className="h-auto w-full"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
            <p className="text-[0.68rem] font-extrabold uppercase tracking-[.18em] text-[#14110f]/70 sm:text-xs">
              Gwin sign-up
            </p>

            <h1 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,11vw,4.2rem)] font-extrabold leading-[1.05] tracking-[-.055em]">
              Join the Gwin sign-up list.
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-7 text-[#14110f]/75 sm:text-base md:mt-6 md:text-lg md:leading-8">
              You’re almost there. Add your details below and we’ll use this list to share access and launch updates.
            </p>

            <p className="mx-auto mt-4 max-w-xl text-sm font-bold leading-6 text-[#f79256]">
              Sign-ups are open and are not limited to 50 users.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-8 sm:px-5 sm:py-10 md:py-14 lg:py-16">
          <div className="mx-auto grid w-full max-w-6xl gap-6 sm:gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <aside className="order-2 rounded-[1.75rem] border border-[#14110f]/10 bg-[#f4f3f1] p-5 sm:p-6 md:rounded-[2rem] md:p-8 lg:sticky lg:top-28 lg:order-1">
              <p className="text-[0.68rem] font-extrabold uppercase tracking-[.18em] text-[#14110f]/70 sm:text-xs">
                Next step
              </p>

              <h2 className="mt-4 text-[clamp(1.55rem,7vw,2.4rem)] font-extrabold leading-tight tracking-[-.04em]">
                Complete the short form.
              </h2>

              <p className="mt-4 text-sm leading-7 text-[#14110f]/70 sm:mt-5">
                This page is only for capturing sign-ups, so we’ve kept it simple and removed the repeated landing-page information.
              </p>

              <div className="mt-6 grid gap-3 text-sm leading-6 text-[#14110f]/75 sm:mt-7">
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
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#f79256] px-5 py-3.5 text-center text-sm font-bold text-white shadow-[0_16px_40px_-20px_rgba(247,146,86,1)] transition hover:bg-[#ef7f3d] sm:mt-7 sm:px-6 sm:text-base"
              >
                Open form in new tab
              </a>
            </aside>

            <div className="order-1 overflow-hidden rounded-[1.75rem] border border-[#14110f]/10 bg-white shadow-[0_28px_80px_-55px_rgba(20,17,15,.65)] md:rounded-[2rem] lg:order-2">
              <iframe
                src={SIGNUP_FORM_EMBED_URL}
                title="Gwin sign-up form"
                className="block h-[76svh] min-h-[620px] w-full border-0 sm:min-h-[720px] md:min-h-[820px] lg:h-[900px] lg:min-h-0"
                loading="lazy"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </section>

        <section className="bg-[#14110f] px-4 py-8 text-center text-white sm:px-5">
          <div className="mx-auto max-w-3xl">
            <p className="text-sm leading-6 text-white/70">
              Already know what Gwin does? Complete the form above, or go back to the full landing page.
            </p>

            <a
              href="https://www.gwin.co.za/"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Back to Gwin
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
