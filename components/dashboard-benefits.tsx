import { motion } from "framer-motion";
import { LineChart, Users, Zap } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Know Your Investors",
    features: [
      "See wallet size and activity at a glance",
      "Understand investment preferences",
      "Track engagement levels"
    ]
  },
  {
    icon: LineChart,
    title: "Make Smarter Decisions",
    features: [
      "Focus on high-value prospects",
      "Identify ready-to-convert leads",
      "Save time on lead qualification"
    ]
  },
  {
    icon: Zap,
    title: "Take Action Fast",
    features: [
      "Export qualified leads instantly",
      "Connect with the right investors",
      "Track your outreach success"
    ]
  }
];

export function DashboardBenefits() {
  return (
    <section className="w-full max-w-[1400px] px-4 py-12 sm:py-16 md:py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center text-center">
        <span className="inline-block rounded-full bg-[#F7FF9B]/10 px-4 py-1 text-sm font-medium text-[#F7FF9B] mb-6">
          Leads Benefits
        </span>
        
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl max-w-3xl">
          Everything You Need to Convert Leads
        </h2>
        
        <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl">
          Turn complex wallet data into actionable insights with our intuitive dashboard
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 hover:border-[#F7FF9B]/20 transition-all duration-300"
            >
              <div className="mb-6 inline-block rounded-full bg-[#F7FF9B]/10 p-4">
                <Icon className="h-6 w-6 text-[#F7FF9B]" />
              </div>

              <h3 className="mb-4 text-xl font-medium text-zinc-100">
                {benefit.title}
              </h3>

              <ul className="space-y-3">
                {benefit.features.map((feature, i) => (
                  <li 
                    key={i}
                    className="flex items-center text-sm text-zinc-400"
                  >
                    <span className="mr-2 text-[#F7FF9B]">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
} 