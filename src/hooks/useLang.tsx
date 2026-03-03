import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ar";

interface LangContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<string, Record<Lang, string>> = {
  // Navbar
  "nav.program": { en: "Program", ar: "البرنامج" },
  "nav.speakers": { en: "Speakers", ar: "المتحدثون" },
  "nav.experience": { en: "Experience", ar: "التجربة" },
  "nav.pricing": { en: "Pricing", ar: "الاستثمار" },
  "nav.faq": { en: "FAQ", ar: "الأسئلة" },
  "nav.cta": { en: "Secure Your Seat", ar: "احجز مقعدك" },

  // Hero
  "hero.date": { en: "March 21–23 · Dubai, UAE", ar: "٢١–٢٣ مارس · دبي، الإمارات" },
  "hero.line1": { en: "Dubai's Most", ar: "أكثر" },
  "hero.line2": { en: "Exclusive Private", ar: "ماستر مايند خاص" },
  "hero.line3": { en: "Business Mastermind", ar: "وحصري في دبي" },
  "hero.subtitle": { en: "3 Days. Luxury Villa. Private Yacht. Curated Elite Circle.", ar: "٣ أيام. فيلا فاخرة. يخت خاص. دائرة نخبوية مختارة." },
  "hero.founder": { en: "Led by Nadir Doulfakkar — Founder & Visionary", ar: "بقيادة نادر دولفكار — المؤسس وصاحب الرؤية" },
  "hero.cta1": { en: "Secure Your Seat", ar: "احجز مقعدك" },
  "hero.cta2": { en: "View Program", ar: "عرض البرنامج" },

  // Speakers
  "speakers.overline": { en: "The Circle", ar: "الدائرة" },
  "speakers.title1": { en: "Founder-Led.", ar: "بقيادة المؤسس." },
  "speakers.title2": { en: "Power-Curated.", ar: "اختيار نخبوي." },
  "speakers.subtitle": { en: "The room is defined by who leads it — and who sits in it.", ar: "الغرفة تُعرّف بمن يقودها — ومن يجلس فيها." },
  "speakers.founder_role": { en: "Founder & Lead Strategist", ar: "المؤسس والاستراتيجي الرئيسي" },
  "speakers.founder_bio": { en: "Architect of high-performance business ecosystems. Builder of elite networks. The mind behind Cashflow Dubai's curated mastermind model — where proximity to the right operators creates exponential outcomes.", ar: "مهندس أنظمة الأعمال عالية الأداء. بانٍ لشبكات النخبة. العقل المدبر وراء نموذج ماستر مايند كاشفلو دبي — حيث القرب من المشغلين المناسبين يخلق نتائج استثنائية." },
  "speakers.mystery_label": { en: "Guest Speakers — Revealed Soon", ar: "المتحدثون الضيوف — يُكشف عنهم قريباً" },
  "speakers.revealed": { en: "Revealed Soon", ar: "قريباً" },
  "speakers.tag_strategy": { en: "Business Strategy", ar: "استراتيجية الأعمال" },
  "speakers.tag_networks": { en: "Elite Networks", ar: "شبكات النخبة" },
  "speakers.tag_scaling": { en: "Scaling Systems", ar: "أنظمة التوسع" },
  "speakers.industry1": { en: "E-Commerce & DTC Scaling", ar: "التجارة الإلكترونية والتوسع المباشر" },
  "speakers.industry2": { en: "Digital Assets & Web3", ar: "الأصول الرقمية و Web3" },
  "speakers.industry3": { en: "High-Ticket Sales Systems", ar: "أنظمة المبيعات عالية القيمة" },
  "speakers.industry4": { en: "Content & Personal Branding", ar: "المحتوى والعلامة الشخصية" },

  // Promise
  "promise.overline": { en: "The Commitment", ar: "الالتزام" },
  "promise.title": { en: "The", ar: "الـ" },
  "promise.title2": { en: "Promise", ar: "وعد" },
  "promise.headline1": { en: "In 3 Days in Dubai, You Launch Your Online Business —", ar: "في ٣ أيام في دبي، تطلق مشروعك الإلكتروني —" },
  "promise.headline2": { en: "Or You Don't Pay.", ar: "أو لا تدفع." },
  "promise.desc": { en: "This is not a seminar. It's a guided, outcome-driven launch environment built around one objective: leave with a real business launched, positioned, and monetized.", ar: "هذا ليس مؤتمراً. إنه بيئة إطلاق مدفوعة بالنتائج، مبنية حول هدف واحد: المغادرة بمشروع حقيقي تم إطلاقه وتمويله." },
  "promise.day1_title": { en: "Day 1 — Clarity & Selection", ar: "اليوم ١ — الوضوح والاختيار" },
  "promise.day1_copy": { en: "Choose the model that fits you. Lock your direction. Leave Day 1 with a decision.", ar: "اختر النموذج المناسب لك. ثبّت اتجاهك. غادر اليوم الأول بقرار." },
  "promise.day2_title": { en: "Day 2 — Build & Position", ar: "اليوم ٢ — البناء والتمركز" },
  "promise.day2_copy": { en: "Create your asset. Build authority. Position your offer so the market understands it fast.", ar: "ابنِ أصولك. أنشئ سلطتك. ضع عرضك بحيث يفهمه السوق بسرعة." },
  "promise.day3_title": { en: "Day 3 — Launch & Monetize", ar: "اليوم ٣ — الإطلاق والتمويل" },
  "promise.day3_copy": { en: "Execute the launch. Activate outreach and conversion. Build momentum and accountability.", ar: "نفّذ الإطلاق. فعّل التواصل والتحويل. ابنِ الزخم والمسؤولية." },
  "promise.precision": { en: "3 Days. 3 Hours Each. One Outcome.", ar: "٣ أيام. ٣ ساعات لكل يوم. نتيجة واحدة." },
  "promise.5k": { en: "Designed to help you reach your first consistent 5K/month with a clear 30-day execution path.", ar: "مصمم لمساعدتك في الوصول إلى أول ٥ آلاف شهرياً مع خطة تنفيذ واضحة لـ ٣٠ يوماً." },

  // Program
  "program.overline": { en: "The Program", ar: "البرنامج" },
  "program.title1": { en: "Precision Designed.", ar: "مصمم بدقة." },
  "program.title2": { en: "Maximum Leverage.", ar: "أقصى نفوذ." },

  // Before/After
  "ba.overline": { en: "The Shift", ar: "التحول" },
  "ba.title": { en: "Before vs After", ar: "قبل مقابل بعد" },
  "ba.title2": { en: "the Room", ar: "الغرفة" },
  "ba.before": { en: "Before the Event", ar: "قبل الحدث" },
  "ba.after": { en: "After the Event", ar: "بعد الحدث" },
  "ba.b1": { en: "You keep \"preparing\" but nothing is live.", ar: "تستمر في \"التحضير\" لكن لا شيء يعمل." },
  "ba.b2": { en: "You watch content but don't monetize it.", ar: "تشاهد المحتوى لكن لا تحقق منه دخلاً." },
  "ba.b3": { en: "You overthink the model and delay the decision.", ar: "تفرط في التفكير وتؤجل القرار." },
  "ba.b4": { en: "You network randomly and call it progress.", ar: "تتواصل عشوائياً وتسميه تقدماً." },
  "ba.b5": { en: "You stay invisible because your offer isn't positioned.", ar: "تبقى غير مرئي لأن عرضك غير متموضع." },
  "ba.a1": { en: "You leave with one selected model and a clear direction.", ar: "تغادر بنموذج واحد مختار واتجاه واضح." },
  "ba.a2": { en: "You build your asset and positioning with feedback in the room.", ar: "تبني أصولك وتمركزك مع ملاحظات في الغرفة." },
  "ba.a3": { en: "You execute a launch plan built for action, not theory.", ar: "تنفذ خطة إطلاق مبنية للعمل، وليس النظرية." },
  "ba.a4": { en: "You enter a higher-signal network and accountability structure.", ar: "تدخل شبكة أعلى جودة وهيكل مساءلة." },
  "ba.a5": { en: "You stop consuming and start converting.", ar: "تتوقف عن الاستهلاك وتبدأ بالتحويل." },

  // Value Stack
  "value.title1": { en: "Your Access,", ar: "وصولك،" },
  "value.title2": { en: "Made Physical", ar: "ملموس" },
  "value.subtitle": { en: "Not just attendance. Identity, entry, and private-circle access.", ar: "ليس مجرد حضور. هوية، دخول، ووصول للدائرة الخاصة." },
  "value.entry": { en: "ENTRY", ar: "الدخول" },
  "value.entry_title": { en: "Electronic Ticket + Verified Access", ar: "تذكرة إلكترونية + دخول موثق" },
  "value.entry_desc": { en: "Your entry is personal, verified, and built for premium control.", ar: "دخولك شخصي، موثق، ومبني للتحكم المتميز." },
  "value.tribe": { en: "TRIBE", ar: "القبيلة" },
  "value.tribe_title": { en: "Community Uniform", ar: "زي المجتمع" },
  "value.tribe_desc": { en: "A simple signal that changes how you're perceived inside the room.", ar: "إشارة بسيطة تغير كيف يُنظر إليك داخل الغرفة." },
  "value.status": { en: "STATUS", ar: "المكانة" },
  "value.status_title": { en: "Private Club Member Card", ar: "بطاقة عضوية النادي الخاص" },
  "value.status_desc": { en: "A status object — built to represent access and private network entry.", ar: "رمز مكانة — مبني لتمثيل الوصول ودخول الشبكة الخاصة." },

  // Pricing
  "pricing.overline": { en: "Investment", ar: "الاستثمار" },
  "pricing.title1": { en: "Secure Your", ar: "احجز" },
  "pricing.title2": { en: "Seat", ar: "مقعدك" },
  "pricing.subtitle": { en: "One price. Full access. No upsells inside the room.", ar: "سعر واحد. وصول كامل. لا عروض إضافية داخل الغرفة." },
  "pricing.badge": { en: "All-Access Pass", ar: "تصريح الدخول الكامل" },
  "pricing.onetime": { en: "One-time payment — No recurring fees", ar: "دفعة واحدة — بدون رسوم متكررة" },
  "pricing.cta": { en: "Pay 3,000 AED — Secure Your Seat", ar: "ادفع ٣,٠٠٠ درهم — احجز مقعدك" },
  "pricing.stripe": { en: "Secure checkout powered by Stripe", ar: "دفع آمن عبر Stripe" },
  "pricing.limited": { en: "Limited to 30 seats. Once filled, registration closes.", ar: "محدود بـ ٣٠ مقعداً. عند الامتلاء، يُغلق التسجيل." },

  // Trophies
  "trophy.overline": { en: "Recognition", ar: "التقدير" },
  "trophy.title1": { en: "Earn Your", ar: "احصل على" },
  "trophy.title2": { en: "Trophy", ar: "جائزتك" },
  "trophy.subtitle": { en: "Proof you performed. Recognition you can display.", ar: "دليل أدائك. تقدير يمكنك عرضه." },
  "trophy.cta": { en: "Secure Your Seat — 3,000 AED", ar: "احجز مقعدك — ٣,٠٠٠ درهم" },

  // FAQ
  "faq.overline": { en: "Questions", ar: "أسئلة" },
  "faq.title1": { en: "Frequently", ar: "الأسئلة" },
  "faq.title2": { en: "Asked", ar: "الشائعة" },
  "faq.q1": { en: "Who is this mastermind designed for?", ar: "لمن صُمم هذا الماستر مايند؟" },
  "faq.a1": { en: "Serious entrepreneurs, agency owners, e-commerce operators, and high-level builders doing $5K–$100K+/month who want to scale through proximity, strategy, and execution — not theory.", ar: "رواد أعمال جادون، أصحاب وكالات، مشغلو تجارة إلكترونية، وبناؤون على مستوى عالٍ يحققون ٥ آلاف - ١٠٠ ألف+ دولار شهرياً ويريدون التوسع عبر القرب والاستراتيجية والتنفيذ — وليس النظرية." },
  "faq.q2": { en: "What exactly is included in the 3,000 AED investment?", ar: "ما الذي يشمله استثمار ٣,٠٠٠ درهم بالتحديد؟" },
  "faq.a2": { en: "Full 3-day access to the luxury villa and private yacht, all strategy sessions, guest expert panels, structured networking, private member card, exclusive merchandise, trophy eligibility, and post-event network access.", ar: "وصول كامل لـ ٣ أيام في الفيلا الفاخرة واليخت الخاص، جميع الجلسات الاستراتيجية، لجان الخبراء الضيوف، شبكات منظمة، بطاقة عضوية خاصة، بضائع حصرية، أهلية الجوائز، ووصول لشبكة ما بعد الحدث." },
  "faq.q3": { en: "Is there a refund policy?", ar: "هل توجد سياسة استرداد؟" },
  "faq.a3": { en: "Due to the curated nature and limited capacity of this event, all confirmed seats are non-refundable. Transfers may be considered on a case-by-case basis with advance notice.", ar: "نظراً للطبيعة المختارة والسعة المحدودة لهذا الحدث، جميع المقاعد المؤكدة غير قابلة للاسترداد. قد يُنظر في التحويلات على أساس كل حالة مع إشعار مسبق." },
  "faq.q4": { en: "Where exactly does the event take place?", ar: "أين يقام الحدث بالضبط؟" },
  "faq.a4": { en: "Days 1 and 2 are hosted at a private luxury villa in Dubai. Day 3 is an exclusive session aboard a private yacht. Exact locations are shared upon confirmed booking.", ar: "اليومان ١ و٢ في فيلا فاخرة خاصة في دبي. اليوم ٣ جلسة حصرية على يخت خاص. المواقع الدقيقة تُشارك عند تأكيد الحجز." },
  "faq.q5": { en: "What happens after the event?", ar: "ماذا يحدث بعد الحدث؟" },
  "faq.a5": { en: "Selected members gain continued access to the Cashflow Dubai private network, including future events, exclusive content, and direct lines to the community.", ar: "يحصل الأعضاء المختارون على وصول مستمر لشبكة كاشفلو دبي الخاصة، بما في ذلك الأحداث المستقبلية والمحتوى الحصري وخطوط مباشرة للمجتمع." },

  // Footer
  "footer.location": { en: "Dubai, United Arab Emirates", ar: "دبي، الإمارات العربية المتحدة" },
  "footer.event": { en: "March 21–23 · Private Mastermind Experience", ar: "٢١–٢٣ مارس · تجربة ماستر مايند خاصة" },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة" },
  "footer.contact": { en: "Contact", ar: "تواصل" },

  // CTA universal
  "cta.secure": { en: "Secure Your Seat — 3,000 AED", ar: "احجز مقعدك — ٣,٠٠٠ درهم" },

  // Inclusions
  "inc.1": { en: "Full 3-Day Mastermind Access", ar: "وصول كامل لماستر مايند ٣ أيام" },
  "inc.2": { en: "Luxury Private Villa Experience", ar: "تجربة فيلا فاخرة خاصة" },
  "inc.3": { en: "Private Yacht Mastermind Session", ar: "جلسة ماستر مايند على يخت خاص" },
  "inc.4": { en: "5 High-Level Guest Speakers", ar: "٥ متحدثين ضيوف على مستوى عالٍ" },
  "inc.5": { en: "Structured Networking Architecture", ar: "هيكل شبكات منظم" },
  "inc.6": { en: "Private Member Card (NFC)", ar: "بطاقة عضوية خاصة (NFC)" },
  "inc.7": { en: "Exclusive Merchandise Kit", ar: "طقم بضائع حصرية" },
  "inc.8": { en: "Electronic Ticket + QR Code", ar: "تذكرة إلكترونية + رمز QR" },
  "inc.9": { en: "Post-Event Network Access", ar: "وصول لشبكة ما بعد الحدث" },
};

const LangContext = createContext<LangContextType | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t, dir: lang === "ar" ? "rtl" : "ltr" }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
