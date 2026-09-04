import { motion } from 'motion/react';

export default function GithubGraph() {
  return (
    <section id="github" className="py-24 bg-cream">
      <div className="container mx-auto max-w-5xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="bg-card-bg border-2 border-main rounded-3xl p-6 md:p-10 hard-shadow"
        >
          <div className="flex flex-wrap items-end justify-between gap-4 mb-6">
            <div>
              <p className="font-body text-light uppercase tracking-widest text-sm">Open source activity</p>
              <h2 className="font-heading text-4xl text-main">GitHub Contributions</h2>
            </div>
            <a
              href="https://github.com/knxxy205"
              target="_blank"
              rel="noreferrer"
              className="font-body font-bold text-main underline underline-offset-4"
            >
              github.com/knxxy205
            </a>
          </div>
          <div className="overflow-x-auto">
            <img
              src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=knxxy205&theme=default"
              alt="GitHub contribution graph for knxxy205"
              className="min-w-[720px] w-full"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
