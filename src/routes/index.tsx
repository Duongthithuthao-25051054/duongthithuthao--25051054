import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio Kỹ thuật số cá nhân — Nhập môn CNS & AI" },
      {
        name: "description",
        content:
          "Portfolio cá nhân trình bày 6 dự án học tập, minh chứng, kỹ năng và bộ nguyên tắc sử dụng AI có trách nhiệm.",
      },
    ],
  }),
});

/* ============================================================
 *  DỮ LIỆU DỰ ÁN — dễ chỉnh sửa, mở rộng
 * ============================================================ */
const TASKS = [
  {
    id: "task-1",
    tag: "Bài 1",
    icon: "📁",
    title: "Thao tác cơ bản với tệp tin và thư mục",
    short: "Xây dựng cấu trúc thư mục khoa học và quy tắc đặt tên nhất quán cho toàn bộ tài liệu học tập.",
    progress: 100,
    skills: ["Quản lý dữ liệu", "Đặt tên file", "Cloud Drive"],
  },
  {
    id: "task-2",
    tag: "Bài 2",
    icon: "🔎",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    short: "Vận dụng hơn 6 toán tử tìm kiếm nâng cao và bảng đánh giá độ tin cậy đa nguồn.",
    progress: 100,
    skills: ["Search operators", "Đánh giá nguồn", "Google Scholar"],
  },
  {
    id: "task-3",
    tag: "Bài 3",
    icon: "💬",
    title: "Viết Prompt hiệu quả cho tác vụ học tập",
    short: "So sánh prompt sơ khai và prompt cải tiến theo khung Vai trò – Bối cảnh – Yêu cầu – Định dạng.",
    progress: 100,
    skills: ["Prompt engineering", "Tư duy phản biện", "ChatGPT/Gemini"],
  },
  {
    id: "task-4",
    tag: "Bài 4",
    icon: "🤝",
    title: "Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    short: "Bảng Kanban giả định trên Trello/Notion với phân công, hạn chót, trạng thái và ghi chú phản hồi.",
    progress: 95,
    skills: ["Trello/Notion", "Teamwork", "Kanban"],
  },
  {
    id: "task-5",
    tag: "Bài 5",
    icon: "🎬",
    title: "Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    short: "Quy trình 6 bước sản xuất một video giải thích ngắn kết hợp AI viết kịch bản, tạo ảnh và giọng đọc.",
    progress: 90,
    skills: ["Canva", "CapCut", "DALL·E", "AI voice"],
  },
  {
    id: "task-6",
    tag: "Bài 6",
    icon: "🛡️",
    title: "Sử dụng AI có trách nhiệm trong học tập & nghiên cứu",
    short: "Bộ 7 nguyên tắc cá nhân và phân tích 6 vấn đề đạo đức AI kèm giải pháp cụ thể.",
    progress: 100,
    skills: ["AI Ethics", "Đạo đức học thuật", "Tự phản biện"],
  },
];

const SKILLS = [
  { name: "Quản lý tệp & dữ liệu số", level: 92, use: "Sắp xếp tài liệu học, dự án nhóm, sao lưu Cloud." },
  { name: "Tìm kiếm thông tin học thuật", level: 88, use: "Tra cứu tài liệu tham khảo cho tiểu luận, seminar." },
  { name: "Đánh giá độ tin cậy nguồn", level: 85, use: "Sàng lọc thông tin trước khi trích dẫn." },
  { name: "Viết prompt hiệu quả", level: 90, use: "Khai thác AI hỗ trợ học tập, tổng hợp, dịch." },
  { name: "Hợp tác trực tuyến", level: 87, use: "Chia việc, theo dõi tiến độ nhóm bằng Trello/Notion." },
  { name: "Sáng tạo nội dung số bằng AI", level: 82, use: "Làm video, infographic, poster minh họa bài học." },
  { name: "Sử dụng AI có trách nhiệm", level: 95, use: "Tuân thủ đạo đức học thuật khi dùng AI." },
  { name: "Tự đánh giá & cải thiện", level: 88, use: "Rà soát, phản tư và cải tiến sản phẩm cá nhân." },
];

const PRINCIPLES = [
  "Không dùng AI để gian lận hoặc làm thay toàn bộ bài tập.",
  "Luôn kiểm chứng thông tin do AI cung cấp qua ít nhất hai nguồn khác.",
  "Ghi chú minh bạch khi có sử dụng AI trong quá trình học tập.",
  "Không nhập dữ liệu cá nhân, thông tin nhạy cảm vào công cụ AI.",
  "Không sao chép nguyên văn nội dung AI khi chưa đọc, hiểu và chỉnh sửa.",
  "Sử dụng AI để hỗ trợ tư duy — không thay thế tư duy của bản thân.",
  "Chịu trách nhiệm cuối cùng với mọi sản phẩm học tập của mình.",
];

/* ============================================================
 *  HOOK: reveal on scroll
 * ============================================================ */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ============================================================
 *  PAGE
 * ============================================================ */
function PortfolioPage() {
  useReveal();
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Overview />
      <Projects />
      
      <Skills />
      <Conclusion />
      <Footer />

      {/* Nút quay lại đầu trang */}
      <button
        aria-label="Quay lại đầu trang"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-gradient-brand text-white shadow-glow transition-all duration-300 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        } hover:scale-110`}
      >
        <span className="text-lg">↑</span>
      </button>
    </div>
  );
}

/* ============================================================
 *  NAV
 * ============================================================ */
const NAV_LINKS = [
  { href: "#gioi-thieu", label: "Giới thiệu" },
  { href: "#tong-quan", label: "Tổng quan" },
  { href: "#du-an", label: "Dự án" },
  
  { href: "#ky-nang", label: "Kỹ năng" },
  { href: "#tong-ket", label: "Tổng kết" },
];

function Nav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white shadow-soft">
            <span className="font-display text-lg">P</span>
          </span>
          <span className="font-display text-lg font-semibold">Portfolio · NMCNS-AI</span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden rounded-lg border border-border p-2"
          aria-label="Mở menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          <span className="mt-1 block h-0.5 w-5 bg-foreground" />
        </button>
      </div>
      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-background/95 px-6 py-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

/* ============================================================
 *  HERO
 * ============================================================ */
function Hero() {
  const sidebar = [
    { icon: "🏠", label: "Tổng quan", active: true },
    { icon: "📁", label: "Dự án" },
    { icon: "📄", label: "Minh chứng" },
    { icon: "⭐", label: "Kỹ năng" },
    { icon: "📊", label: "Tổng kết" },
    { icon: "⚙️", label: "Cài đặt" },
  ];
  const tiles = [
    { icon: "📁", label: "Dự án", bg: "from-amber-100 to-amber-50", ring: "ring-amber-200" },
    { icon: "🔎", label: "Tìm kiếm", bg: "from-fuchsia-100 to-pink-50", ring: "ring-fuchsia-200" },
    { icon: "💬", label: "Ghi chú", bg: "from-violet-100 to-purple-50", ring: "ring-violet-200" },
    { icon: "💡", label: "Ý tưởng", bg: "from-yellow-100 to-amber-50", ring: "ring-yellow-200" },
    { icon: "🎬", label: "Sản phẩm", bg: "from-indigo-100 to-violet-50", ring: "ring-indigo-200" },
    { icon: "🛡️", label: "Bảo mật", bg: "from-sky-100 to-blue-50", ring: "ring-sky-200" },
  ];
  const stats = [
    { n: "6", l: "Dự án cuối kỳ", sub: "Hoàn thành đầy đủ các dự án học tập", icon: "📁", color: "text-plum", bg: "bg-violet-100" },
    { n: "8", l: "Kỹ năng số", sub: "Rèn luyện và phát triển năng lực số toàn diện", icon: "⭐", color: "text-pink-500", bg: "bg-pink-100" },
    { n: "7", l: "Nguyên tắc AI", sub: "Ứng dụng AI có trách nhiệm và hiệu quả", icon: "✅", color: "text-sky-500", bg: "bg-sky-100" },
    { n: "100%", l: "Tiến độ tổng thể", sub: "Hoàn thành xuất sắc nhiệm vụ học tập", icon: "🏅", color: "text-emerald-500", bg: "bg-emerald-100" },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Nền pastel */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero opacity-70" />
      <div className="absolute -top-24 -left-24 -z-10 h-96 w-96 rounded-full bg-blush blur-3xl opacity-40 float-slow" />
      <div className="absolute top-32 -right-24 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky blur-3xl opacity-40 float-slow" />
      <div className="absolute bottom-0 left-1/3 -z-10 h-72 w-72 rounded-full bg-lilac blur-3xl opacity-40" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[0.95fr_1.05fr]">
        {/* LEFT */}
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium text-plum backdrop-blur">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-brand text-[10px] text-white">🎓</span>
            Học kỳ · Nhập môn CNS & Ứng dụng AI
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.15] md:text-6xl lg:text-7xl">
            Portfolio{" "}
            <span className="text-gradient-brand italic inline-block pr-2 pb-2 leading-[1.2]">Kỹ thuật số</span>{" "}
            cá nhân
          </h1>
          <div className="mt-6 h-1 w-32 rounded-full bg-gradient-brand" />
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Hành trình học tập môn <strong className="text-foreground">Nhập môn Công nghệ số</strong> và{" "}
            <strong className="text-foreground">Ứng dụng Trí tuệ nhân tạo</strong> — nơi em lưu trữ, trình bày và tự đánh giá quá trình rèn luyện năng lực số qua sáu sản phẩm học tập hoàn chỉnh.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#gioi-thieu" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-brand px-5 py-3 text-sm font-semibold text-white shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5">
              📖 Giới thiệu
            </a>
            <a href="#du-an" className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white/80 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white">
              📁 Dự án học tập
            </a>
            <a href="#minh-chung" className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white/80 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white">
              ✅ Minh chứng
            </a>
            <a href="#tong-ket" className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white/80 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white">
              📈 Tổng kết
            </a>
          </div>
        </div>

        {/* RIGHT — dashboard mockup */}
        <div className="reveal relative">
          <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-brand opacity-20 blur-3xl" />
          <div className="rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-glow backdrop-blur-xl md:p-5">
            {/* window bar */}
            <div className="flex items-center gap-2 px-2 pb-3">
              <span className="h-3 w-3 rounded-full bg-red-300" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-300" />
              <span className="ml-auto font-mono text-xs text-plum">portfolio.ai</span>
            </div>

            <div className="grid grid-cols-[130px_1fr] gap-4">
              {/* sidebar */}
              <div className="flex flex-col gap-1 rounded-2xl bg-white/60 p-2">
                {sidebar.map((s) => (
                  <div
                    key={s.label}
                    className={`flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition ${
                      s.active
                        ? "bg-gradient-to-r from-violet-100 to-pink-100 text-plum shadow-soft"
                        : "text-muted-foreground hover:bg-secondary/60"
                    }`}
                  >
                    <span>{s.icon}</span>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* content */}
              <div className="flex flex-col gap-3">
                <div className="grid grid-cols-3 gap-3">
                  {tiles.map((t) => (
                    <div
                      key={t.label}
                      className={`flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-gradient-to-br ${t.bg} ring-1 ${t.ring} shadow-soft transition-transform hover:-translate-y-1`}
                    >
                      <span className="text-3xl">{t.icon}</span>
                      <span className="text-[11px] font-medium text-plum">{t.label}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-gradient-brand p-4 text-white shadow-soft">
                  <div className="text-xs opacity-90">Hoàn thành</div>
                  <div className="mt-1 flex items-end justify-between">
                    <span className="font-display text-3xl md:text-4xl">100%</span>
                    <span className="inline-flex items-center gap-1 text-xs opacity-95">6/6 nhiệm vụ ✔</span>
                  </div>
                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/25">
                    <div className="h-full w-full rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="mx-auto mt-12 max-w-6xl px-6">
        <div className="reveal grid gap-4 rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-soft backdrop-blur-xl md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.l} className="flex items-start gap-4">
              <div className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${s.bg} text-2xl`}>{s.icon}</div>
              <div>
                <div className={`font-display text-3xl ${s.color}`}>{s.n}</div>
                <div className="text-sm font-semibold text-foreground">{s.l}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
 *  ABOUT
 * ============================================================ */
function About() {
  return (
    <Section id="gioi-thieu" eyebrow="About me" title="Giới thiệu bản thân">
      <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
        {/* Card cá nhân */}
        <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-soft">
          <div className="relative mx-auto grid h-32 w-32 place-items-center overflow-hidden rounded-full bg-gradient-brand text-white shadow-glow">
            <span className="font-display text-5xl">SV</span>
          </div>
          <h3 className="mt-6 text-center font-display text-2xl">[Điền tên của bạn]</h3>
          <p className="mt-1 text-center text-sm text-muted-foreground">Sinh viên · [Điền ngành học]</p>

          <dl className="mt-6 space-y-3 text-sm">
            <Row k="Trường / Lớp" v="[Điền trường / lớp]" />
            <Row k="Môn học" v="Nhập môn Công nghệ số & Ứng dụng AI" />
            <Row k="Năm học" v="2025 – 2026" />
            <Row k="Email" v="[email@example.com]" />
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {["Học công nghệ số", "Khám phá AI", "Sáng tạo nội dung", "Dữ liệu", "Làm việc nhóm"].map((s) => (
              <span
                key={s}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Mục tiêu Portfolio */}
        <div className="reveal space-y-4">
          <h3 className="font-display text-3xl">Mục tiêu của Portfolio</h3>
          <p className="text-muted-foreground leading-relaxed">
            Portfolio này là <strong className="text-foreground">tài liệu tự sự về quá trình học tập</strong> của em — không chỉ
            trưng bày sản phẩm, mà còn ghi lại cách em suy nghĩ, làm việc, mắc lỗi và tiến bộ khi tiếp cận công nghệ số và AI.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { i: "🗂️", t: "Hệ thống hóa", d: "Tập trung toàn bộ bài tập cuối kỳ trong một không gian số duy nhất." },
              { i: "🤖", t: "Chứng minh năng lực", d: "Thể hiện khả năng sử dụng công cụ số và AI trong học tập." },
              { i: "🔗", t: "Lưu trữ & chia sẻ", d: "Dễ dàng truy cập, chia sẻ và tiếp tục phát triển trong tương lai." },
              { i: "🧠", t: "Phản tư bản thân", d: "Rèn luyện kỹ năng phân tích, phản biện và tự đánh giá." },
            ].map((g) => (
              <div
                key={g.t}
                className="group rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="text-2xl">{g.i}</div>
                <div className="mt-2 font-semibold">{g.t}</div>
                <p className="mt-1 text-sm text-muted-foreground">{g.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/60 pb-2">
      <dt className="text-muted-foreground">{k}</dt>
      <dd className="text-right font-medium">{v}</dd>
    </div>
  );
}

/* ============================================================
 *  OVERVIEW — timeline 6 nhiệm vụ
 * ============================================================ */
function Overview() {
  const META = [
    { level: "Cơ bản",    duration: "1–2 giờ", color: "#ec4899", bgIcon: "bg-pink-100",    textIcon: "text-pink-500" },
    { level: "Cơ bản",    duration: "2–3 giờ", color: "#8b5cf6", bgIcon: "bg-violet-100",  textIcon: "text-violet-500" },
    { level: "Trung bình",duration: "2–3 giờ", color: "#3b82f6", bgIcon: "bg-blue-100",    textIcon: "text-blue-500" },
    { level: "Trung bình",duration: "2–3 giờ", color: "#f59e0b", bgIcon: "bg-amber-100",   textIcon: "text-amber-500" },
    { level: "Nâng cao",  duration: "3–4 giờ", color: "#22c55e", bgIcon: "bg-green-100",   textIcon: "text-green-500" },
    { level: "Nâng cao",  duration: "2–3 giờ", color: "#14b8a6", bgIcon: "bg-teal-100",    textIcon: "text-teal-500" },
  ];

  const completed = TASKS.filter((t) => t.progress === 100).length;
  const avg = Math.round(TASKS.reduce((s, t) => s + t.progress, 0) / TASKS.length);

  return (
    <Section id="tong-quan" eyebrow="Learning Journey" title="Tổng quan 6 nhiệm vụ">
      <div className="reveal mt-10 grid gap-10 lg:grid-cols-[280px_1fr]">
        {/* Left title panel */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="text-4xl font-display font-bold tracking-tight text-foreground">
            TỔNG QUAN
          </div>
          <div className="mt-1 text-4xl font-display font-black text-gradient-brand">
            6 NHIỆM VỤ
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span className="h-1 w-8 rounded-full bg-pink-400" />
            <span className="h-1 w-3 rounded-full bg-violet-400" />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground max-w-xs">
            Sáu nhiệm vụ được tổ chức theo trình tự phát triển kỹ năng: từ nền tảng
            quản lý dữ liệu, tìm kiếm và đánh giá thông tin, cho đến khai thác AI,
            hợp tác trực tuyến và sử dụng AI có trách nhiệm.
          </p>
          <div className="mt-8 hidden lg:block text-6xl">💻📋</div>
        </aside>

        {/* Right timeline */}
        <ol className="relative space-y-6">
          {TASKS.map((t, i) => {
            const m = META[i];
            return (
              <li
                key={t.id}
                className="reveal group relative flex items-start gap-4 rounded-2xl border border-border/50 bg-card/60 p-4 backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-soft md:gap-6 md:p-5"
              >
                {/* Step number */}
                <div className="flex shrink-0 flex-col items-center">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white shadow-soft"
                    style={{ backgroundColor: m.color }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < TASKS.length - 1 && (
                    <span
                      className="mt-2 h-10 w-0.5 rounded-full opacity-40"
                      style={{ backgroundColor: m.color }}
                    />
                  )}
                </div>

                {/* Icon */}
                <div
                  className={`hidden sm:grid h-16 w-16 shrink-0 place-items-center rounded-full text-3xl ${m.bgIcon} ${m.textIcon}`}
                >
                  {t.icon}
                </div>

                {/* Body */}
                <div className="min-w-0 flex-1 grid gap-3 md:grid-cols-[1fr_220px] md:items-center">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.short}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${t.progress}%`,
                            backgroundColor: m.color,
                          }}
                        />
                      </div>
                      <span
                        className="text-sm font-bold tabular-nums"
                        style={{ color: m.color }}
                      >
                        {t.progress}%
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        📊 <span>Mức độ: <b className="text-foreground/80">{m.level}</b></span>
                      </span>
                      <span className="inline-flex items-center gap-1">
                        ⏱ <span>Thời lượng: <b className="text-foreground/80">{m.duration}</b></span>
                      </span>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* Bottom stats strip */}
      <div className="reveal mt-10 grid grid-cols-2 gap-4 rounded-2xl border border-border/60 bg-card/70 p-5 backdrop-blur md:grid-cols-4">
        {[
          { icon: "⏱", label: "Tổng thời lượng ước tính", value: "12 – 18 giờ", color: "text-violet-500" },
          { icon: "📈", label: "Tiến độ trung bình", value: `${avg}%`, color: "text-pink-500" },
          { icon: "🎯", label: "Nhiệm vụ đã hoàn thành", value: `${completed} / ${TASKS.length}`, color: "text-blue-500" },
          { icon: "🏅", label: "Mức độ kỹ năng", value: "Từ cơ bản đến nâng cao", color: "text-violet-600" },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-3">
            <span className={`text-3xl ${s.color}`}>{s.icon}</span>
            <div className="min-w-0">
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className={`font-display text-lg font-bold ${s.color}`}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 *  PROJECTS — 6 dự án chi tiết
 * ============================================================ */
function Projects() {
  return (
    <Section id="du-an" eyebrow="Projects" title="Sáu dự án học tập">
      <div className="space-y-16">
        <Project1 />
        <Project2 />
        <Project3 />
        <Project4 />
        <Project5 />
        <Project6 />
      </div>
    </Section>
  );
}

/* ---------- Khung chung 1 dự án ---------- */
function ProjectShell({
  id,
  tag,
  icon,
  title,
  objective,
  process,
  tools,
  evidence,
  analysis,
  lesson,
  skills,
  children,
}: {
  id: string;
  tag: string;
  icon: string;
  title: string;
  objective: string;
  process: React.ReactNode;
  tools: string[];
  evidence: React.ReactNode;
  analysis: React.ReactNode;
  lesson: string[];
  skills: string[];
  children?: React.ReactNode;
}) {
  return (
    <article
      id={id}
      className="reveal scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card shadow-soft"
    >
      <header className="relative overflow-hidden bg-gradient-hero p-8 md:p-10">
        <div className="absolute -top-16 -right-16 h-48 w-48 rounded-full bg-lilac/60 blur-3xl" />
        <div className="relative flex flex-wrap items-center gap-3">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-3xl shadow-soft">
            {icon}
          </span>
          <div>
            <div className="text-xs font-medium text-plum">{tag}</div>
            <h3 className="font-display text-2xl md:text-3xl">{title}</h3>
          </div>
        </div>
        <div className="relative mt-4 flex flex-wrap gap-2">
          {skills.map((s) => (
            <span key={s} className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur">
              #{s}
            </span>
          ))}
        </div>
      </header>

      <div className="grid gap-8 p-8 md:grid-cols-2 md:p-10">
        <div>
          <Block title="🎯 Mục tiêu">{objective}</Block>
          <Block title="⚙️ Quá trình thực hiện">{process}</Block>
          <Block title="🧰 Công cụ sử dụng">
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span
                  key={t}
                  className="rounded-lg border border-border bg-secondary px-3 py-1 text-xs font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </Block>
        </div>

        <div>
          <Block title="🖼️ Sản phẩm / Minh chứng">{evidence}</Block>
          <Block title="🔍 Phân tích kết quả">{analysis}</Block>
          <Block title="💡 Bài học rút ra">
            <ul className="space-y-1.5 text-sm text-muted-foreground">
              {lesson.map((l, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-1 text-plum">◆</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>

      {children}
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6 last:mb-0">
      <h4 className="mb-2 text-sm font-semibold tracking-wide text-plum uppercase">{title}</h4>
      <div className="text-sm leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

function EvidencePlaceholder({ label }: { label: string }) {
  return (
    <div className="grid aspect-video place-items-center rounded-xl border-2 border-dashed border-primary/40 bg-gradient-to-br from-secondary/50 to-accent/40 p-4 text-center text-xs text-muted-foreground">
      <div>
        <div className="text-2xl">🖼️</div>
        <div className="mt-1 font-medium text-foreground">{label}</div>
        <div className="mt-1">Thay bằng minh chứng thật</div>
      </div>
    </div>
  );
}

/* ---------- Dự án 1 ---------- */
function Project1() {
  return (
    <ProjectShell
      id="task-1"
      tag="Bài tập 1 · Mục 1.4"
      icon="📁"
      title="Thao tác cơ bản với tệp tin và thư mục"
      skills={["Quản lý dữ liệu", "Cloud Drive", "Đặt tên nhất quán"]}
      objective="Biết tạo thư mục, lưu trữ tài liệu học tập một cách khoa học và đặt tên tệp nhất quán để quản lý dữ liệu lâu dài."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Tạo thư mục gốc riêng cho môn học: <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">NMCNS-AI_2026</code>.</li>
          <li>Chia thành 4 thư mục con: <em>Bài tập</em>, <em>Tài liệu tham khảo</em>, <em>Minh chứng</em>, <em>Sản phẩm cuối kỳ</em>.</li>
          <li>Đồng bộ lên Google Drive/OneDrive để sao lưu và truy cập nhiều thiết bị.</li>
          <li>Áp dụng quy tắc đặt tên nhất quán cho từng phiên bản.</li>
        </ol>
      }
      tools={["File Explorer", "Google Drive", "OneDrive"]}
      evidence={
        <div className="space-y-3">
          <EvidencePlaceholder label="Ảnh cấu trúc thư mục môn học" />
          <div className="rounded-xl bg-muted/60 p-4 font-mono text-xs leading-relaxed">
            <div>📂 NMCNS-AI_2026/</div>
            <div className="pl-4">📂 01_BaiTap/</div>
            <div className="pl-8">📄 NMCNS_Bai01_QuanLyTep_2026-10-05_v1.docx</div>
            <div className="pl-8">📄 NMCNS_Bai01_QuanLyTep_2026-10-08_v2.docx</div>
            <div className="pl-4">📂 02_TaiLieuThamKhao/</div>
            <div className="pl-4">📂 03_MinhChung/</div>
            <div className="pl-4">📂 04_SanPhamCuoiKy/</div>
          </div>
        </div>
      }
      analysis={
        <div className="space-y-2">
          <p>
            Quy tắc đặt tên <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">MonHoc_Bai_TenBaiTap_NgayThucHien_PhienBan</code>
            giúp phân biệt phiên bản cũ – mới, hỗ trợ tìm kiếm bằng từ khóa và tránh nhầm lẫn khi làm việc nhóm.
          </p>
          <p>
            Cấu trúc 4 nhánh khoa học vì tách rõ <strong>sản phẩm học tập</strong>, <strong>nguyên liệu đầu vào</strong> và <strong>minh chứng đầu ra</strong>,
            phản ánh đúng vòng đời của một dự án học tập.
          </p>
        </div>
      }
      lesson={[
        "Quản lý dữ liệu khoa học là kỹ năng nền tảng của công dân số.",
        "Một cấu trúc thư mục tốt tiết kiệm thời gian tìm kiếm và giảm rủi ro mất dữ liệu.",
        "Đồng bộ Cloud giúp làm việc liên tục ngay cả khi đổi thiết bị.",
      ]}
    />
  );
}

/* ---------- Dự án 2 ---------- */
function Project2() {
  const operators = [
    { op: "site:", ex: "site:edu.vn AI trong giáo dục", why: "Giới hạn tìm kiếm ở tên miền học thuật" },
    { op: "filetype:", ex: "filetype:pdf trí tuệ nhân tạo", why: "Chỉ tìm tài liệu PDF chính thống" },
    { op: "intitle:", ex: "intitle:\"prompt engineering\"", why: "Từ khóa xuất hiện ở tiêu đề trang" },
    { op: "\"...\"", ex: "\"generative AI ethics\"", why: "Cụm từ chính xác, tránh kết quả rời rạc" },
    { op: "OR", ex: "ChatGPT OR Gemini học tập", why: "Mở rộng kết quả sang công cụ thay thế" },
    { op: "-", ex: "AI giáo dục -quảng cáo", why: "Loại bỏ từ khóa gây nhiễu" },
    { op: "after:", ex: "AI education after:2023", why: "Chỉ lấy tài liệu cập nhật" },
  ];
  const sources = [
    { name: "UNESCO — Guidance on Generative AI in Education", org: "UNESCO", year: 2023, trust: "Rất cao", why: "Tổ chức quốc tế, quy trình biên tập chặt.", limit: "Khái quát, chưa đi sâu bối cảnh Việt Nam." },
    { name: "Bài giảng NMCNS-AI của trường", org: "Đại học · Khoa CNTT", year: 2026, trust: "Cao", why: "Chính thống, sát chương trình học.", limit: "Chỉ áp dụng trong phạm vi môn." },
    { name: "Bài báo Scholar về Prompt Engineering", org: "IEEE / ACM", year: 2024, trust: "Cao", why: "Peer-reviewed, có DOI.", limit: "Yêu cầu nền tảng kỹ thuật để đọc." },
    { name: "Blog cá nhân về ChatGPT", org: "Tác giả ẩn danh", year: "n/a", trust: "Trung bình – Thấp", why: "Chỉ dùng tham khảo ý tưởng.", limit: "Không rõ tác giả, không nguồn dẫn." },
  ];
  return (
    <ProjectShell
      id="task-2"
      tag="Bài tập 2 · Mục 2.4"
      icon="🔎"
      title="Tìm kiếm và đánh giá thông tin học thuật"
      skills={["Search operators", "Đánh giá nguồn", "Tư duy phản biện"]}
      objective="Sử dụng toán tử tìm kiếm nâng cao và xây dựng bảng đánh giá đa tiêu chí để chọn nguồn thông tin đáng tin cậy."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Chọn chủ đề học thuật: <em>“Ứng dụng AI tạo sinh trong giáo dục đại học”</em>.</li>
          <li>Áp dụng &gt; 6 toán tử tìm kiếm nâng cao trên Google & Google Scholar.</li>
          <li>Thu thập 8 nguồn, sau đó sàng lọc còn 4 nguồn có giá trị.</li>
          <li>Đánh giá theo 5 tiêu chí: tác giả, năm, độ tin cậy, lý do chọn, hạn chế.</li>
        </ol>
      }
      tools={["Google Search", "Google Scholar", "Website .edu / .gov", "Zotero"]}
      evidence={
        <div className="space-y-3">
          <EvidencePlaceholder label="Ảnh chụp kết quả tìm kiếm với operator" />
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead className="bg-secondary text-secondary-foreground">
                <tr>
                  <th className="px-3 py-2 text-left">Toán tử</th>
                  <th className="px-3 py-2 text-left">Ví dụ</th>
                  <th className="px-3 py-2 text-left">Mục đích</th>
                </tr>
              </thead>
              <tbody>
                {operators.map((o) => (
                  <tr key={o.op} className="border-t border-border">
                    <td className="px-3 py-2 font-mono text-plum">{o.op}</td>
                    <td className="px-3 py-2 font-mono">{o.ex}</td>
                    <td className="px-3 py-2 text-muted-foreground">{o.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
      analysis={
        <div className="space-y-3">
          <p>
            Chiến lược tìm kiếm được xây dựng theo tầng: <strong>khoanh vùng miền</strong> (<code className="rounded bg-muted px-1 font-mono text-xs">site:</code>,
            <code className="rounded bg-muted px-1 font-mono text-xs">filetype:</code>) → <strong>khớp chính xác</strong> (<code className="rounded bg-muted px-1 font-mono text-xs">"..."</code>, <code className="rounded bg-muted px-1 font-mono text-xs">intitle:</code>)
            → <strong>lọc nhiễu</strong> (<code className="rounded bg-muted px-1 font-mono text-xs">-</code>, <code className="rounded bg-muted px-1 font-mono text-xs">after:</code>).
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-2 py-2 text-left">Nguồn</th>
                  <th className="px-2 py-2 text-left">Tác giả</th>
                  <th className="px-2 py-2 text-left">Năm</th>
                  <th className="px-2 py-2 text-left">Tin cậy</th>
                  <th className="px-2 py-2 text-left">Hạn chế</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((s) => (
                  <tr key={s.name} className="border-t border-border align-top">
                    <td className="px-2 py-2 font-medium">{s.name}</td>
                    <td className="px-2 py-2 text-muted-foreground">{s.org}</td>
                    <td className="px-2 py-2">{s.year}</td>
                    <td className="px-2 py-2 text-plum">{s.trust}</td>
                    <td className="px-2 py-2 text-muted-foreground">{s.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
      lesson={[
        "Tìm kiếm là một chiến lược, không phải một cú click.",
        "Nguồn học thuật, cơ quan chính thống và tài liệu peer-reviewed thường đáng tin hơn.",
        "Luôn kiểm chứng bằng ≥ 2 nguồn độc lập trước khi trích dẫn.",
      ]}
    />
  );
}

/* ---------- Dự án 3 ---------- */
function Project3() {
  const compare = [
    { c: "Vai trò", a: "Không nêu", b: "“Bạn là gia sư đại học môn Lịch sử Việt Nam”" },
    { c: "Bối cảnh", a: "Không có", b: "Sinh viên năm nhất, cần tóm tắt để ôn thi cuối kỳ" },
    { c: "Yêu cầu đầu ra", a: "“Tóm tắt bài này”", b: "Tóm tắt 5 ý chính, ≤ 200 từ, ngôn ngữ dễ hiểu, gạch đầu dòng" },
    { c: "Tiêu chí đánh giá", a: "Không đề cập", b: "Chính xác, không thêm sự kiện, giữ được mốc thời gian" },
    { c: "Định dạng", a: "Đoạn văn chung", b: "Markdown với heading & bullet" },
    { c: "Khả năng kiểm soát", a: "Thấp — kết quả lan man", b: "Cao — dễ so sánh và chấm điểm" },
  ];
  return (
    <ProjectShell
      id="task-3"
      tag="Bài tập 3 · Mục 3.4"
      icon="💬"
      title="Viết Prompt hiệu quả cho các tác vụ học tập"
      skills={["Prompt engineering", "Framework R-C-T-F", "So sánh phiên bản"]}
      objective="Biết viết prompt rõ ràng theo khung Vai trò – Bối cảnh – Yêu cầu – Định dạng để AI trả lời đúng mục tiêu học tập hơn."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Chọn tác vụ: <em>tóm tắt bài học lịch sử phục vụ ôn thi</em>.</li>
          <li>Viết prompt phiên bản 1 (sơ khai, ngắn gọn).</li>
          <li>Áp dụng khung R-C-T-F để nâng cấp thành prompt phiên bản 2.</li>
          <li>Chạy trên 2 mô hình khác nhau và so sánh kết quả.</li>
        </ol>
      }
      tools={["ChatGPT", "Gemini", "Claude"]}
      evidence={
        <div className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-blush/20 p-4">
              <div className="text-xs font-semibold text-plum">PROMPT V1 (sơ khai)</div>
              <p className="mt-1 font-mono text-xs leading-relaxed">
                “Tóm tắt bài Chiến dịch Điện Biên Phủ giúp mình.”
              </p>
            </div>
            <div className="rounded-xl bg-sky/25 p-4">
              <div className="text-xs font-semibold text-plum">PROMPT V2 (cải tiến)</div>
              <p className="mt-1 font-mono text-xs leading-relaxed">
                “Bạn là gia sư đại học môn Lịch sử. Hãy tóm tắt Chiến dịch Điện Biên Phủ cho sinh viên năm 1 dưới dạng markdown,
                gồm 5 ý chính (bối cảnh, diễn biến, kết quả, ý nghĩa, bài học), ≤ 200 từ, giữ nguyên mốc thời gian, không thêm sự kiện.”
              </p>
            </div>
          </div>
          <EvidencePlaceholder label="Ảnh chụp phản hồi của AI cho 2 prompt" />
        </div>
      }
      analysis={
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead className="bg-secondary">
              <tr>
                <th className="px-3 py-2 text-left">Tiêu chí</th>
                <th className="px-3 py-2 text-left">Prompt V1</th>
                <th className="px-3 py-2 text-left">Prompt V2</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.c} className="border-t border-border align-top">
                  <td className="px-3 py-2 font-medium text-plum">{r.c}</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.a}</td>
                  <td className="px-3 py-2">{r.b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      lesson={[
        "Muốn AI trả lời tốt — cần đặt câu hỏi tốt.",
        "Prompt hiệu quả có Vai trò, Bối cảnh, Yêu cầu, Tiêu chí và Định dạng đầu ra.",
        "AI phản hồi dựa trên ngữ cảnh: càng cụ thể thì càng ít suy đoán, ít sai lệch.",
      ]}
    />
  );
}

/* ---------- Dự án 4 ---------- */
function Project4() {
  const board = [
    { m: "An", task: "Nghiên cứu tài liệu tham khảo", due: "10/11", state: "Hoàn thành", note: "Đã tổng hợp 6 nguồn" },
    { m: "Bình", task: "Viết kịch bản video", due: "13/11", state: "Đang làm", note: "Đang chờ AI review" },
    { m: "Chi", task: "Thiết kế slide & poster", due: "15/11", state: "Chưa làm", note: "Chờ nhận content" },
    { m: "Duy", task: "Dựng video & lồng tiếng", due: "18/11", state: "Đang làm", note: "Đã có draft 1" },
    { m: "Em", task: "Tổng hợp Portfolio & báo cáo", due: "20/11", state: "Cần chỉnh sửa", note: "Đợi feedback nhóm" },
  ];
  const stateColor: Record<string, string> = {
    "Hoàn thành": "bg-emerald-100 text-emerald-700",
    "Đang làm": "bg-sky/40 text-plum",
    "Chưa làm": "bg-muted text-muted-foreground",
    "Cần chỉnh sửa": "bg-blush/40 text-plum",
  };
  return (
    <ProjectShell
      id="task-4"
      tag="Bài tập 3 · Mục 4.4"
      icon="🤝"
      title="Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm"
      skills={["Kanban", "Trello / Notion", "Phân công", "Theo dõi tiến độ"]}
      objective="Lập kế hoạch, phân công công việc, theo dõi tiến độ và tối ưu quy trình làm việc nhóm bằng công cụ số."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Chia dự án thành 5 đầu việc lớn theo vòng đời sản phẩm.</li>
          <li>Tạo bảng Kanban trên Trello/Notion với 4 cột trạng thái.</li>
          <li>Phân công theo thế mạnh của mỗi thành viên, gắn hạn hoàn thành.</li>
          <li>Họp nhanh 15 phút/tuần để cập nhật, gỡ khó và nhắc hạn.</li>
        </ol>
      }
      tools={["Trello", "Notion", "Google Sheets", "Microsoft Planner"]}
      evidence={
        <div className="space-y-3">
          <EvidencePlaceholder label="Ảnh bảng Kanban thực tế của nhóm" />
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-2 py-2 text-left">Thành viên</th>
                  <th className="px-2 py-2 text-left">Nhiệm vụ</th>
                  <th className="px-2 py-2 text-left">Hạn</th>
                  <th className="px-2 py-2 text-left">Trạng thái</th>
                  <th className="px-2 py-2 text-left">Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                {board.map((r) => (
                  <tr key={r.m} className="border-t border-border">
                    <td className="px-2 py-2 font-medium">{r.m}</td>
                    <td className="px-2 py-2">{r.task}</td>
                    <td className="px-2 py-2 text-muted-foreground">{r.due}</td>
                    <td className="px-2 py-2">
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${stateColor[r.state]}`}>
                        {r.state}
                      </span>
                    </td>
                    <td className="px-2 py-2 text-muted-foreground">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
      analysis={
        <div className="space-y-2">
          <p>
            Công cụ trực tuyến giúp nhóm <strong>minh bạch hóa tiến độ</strong>, tránh trùng lặp và bỏ sót đầu việc.
            Mỗi thành viên đều thấy công việc của người khác, tạo áp lực đồng đội tích cực.
          </p>
          <p>
            Việc chia nhỏ trạng thái “Cần chỉnh sửa” giúp phát hiện vấn đề sớm và trả bài đúng chất lượng, thay vì đợi đến deadline mới sửa.
          </p>
        </div>
      }
      lesson={[
        "Làm việc nhóm hiệu quả cần kế hoạch rõ ràng và cột mốc cụ thể.",
        "Công cụ số nâng cao tính trách nhiệm cá nhân trong nhóm.",
        "Feedback thường xuyên tốt hơn feedback cuối kỳ.",
      ]}
    />
  );
}

/* ---------- Dự án 5 ---------- */
function Project5() {
  const steps = [
    { t: "1. Lên ý tưởng", ai: "Gợi ý outline & góc nhìn", me: "Chốt thông điệp phù hợp môn học" },
    { t: "2. Viết kịch bản", ai: "Draft lời thoại", me: "Chỉnh giọng văn, thêm ví dụ Việt Nam" },
    { t: "3. Tạo hình ảnh", ai: "DALL·E vẽ minh họa", me: "Chọn ảnh, chỉnh bố cục Canva" },
    { t: "4. Lồng giọng", ai: "AI voice đọc tiếng Việt", me: "Cắt nhịp, thêm nhạc nền phù hợp" },
    { t: "5. Dựng video", ai: "CapCut auto-cut", me: "Timeline, phụ đề, thương hiệu cá nhân" },
    { t: "6. Kiểm tra", ai: "AI gợi ý sửa", me: "Rà soát chính xác học thuật, xuất bản" },
  ];
  return (
    <ProjectShell
      id="task-5"
      tag="Bài tập 2 · Mục 5.4"
      icon="🎬"
      title="Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung"
      skills={["Video AI", "Kịch bản", "Canva", "CapCut", "DALL·E"]}
      objective="Sản xuất một video giải thích khái niệm học tập ≤ 5 phút với sự hỗ trợ của AI tạo sinh, giữ nguyên vai trò biên tập của con người."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Chọn khái niệm: <em>“Prompt Engineering trong học tập”</em>.</li>
          <li>Thực hiện quy trình 6 bước AI – Con người song song.</li>
          <li>Xuất bản video, ảnh minh họa và infographic bổ trợ.</li>
        </ol>
      }
      tools={["ChatGPT", "Gemini", "DALL·E", "Canva", "CapCut", "AI voice"]}
      evidence={
        <div className="space-y-3">
          <EvidencePlaceholder label="Video / Infographic sản phẩm AI" />
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-4 py-2 text-xs font-semibold text-white shadow-soft"
          >
            ▶ Xem sản phẩm (thay bằng link thật)
          </a>
        </div>
      }
      analysis={
        <div className="space-y-3">
          <p>
            Quy trình chia rõ <strong>“AI làm gì – Con người làm gì”</strong> ở từng bước, đảm bảo sản phẩm cuối cùng
            luôn có dấu ấn biên tập cá nhân.
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-3 py-2 text-left">Bước</th>
                  <th className="px-3 py-2 text-left">Vai trò AI</th>
                  <th className="px-3 py-2 text-left">Vai trò của em</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((s) => (
                  <tr key={s.t} className="border-t border-border">
                    <td className="px-3 py-2 font-medium text-plum">{s.t}</td>
                    <td className="px-3 py-2 text-muted-foreground">{s.ai}</td>
                    <td className="px-3 py-2">{s.me}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
      lesson={[
        "AI là công cụ tăng tốc, không phải máy làm hộ.",
        "Sản phẩm tốt luôn có bước con người biên tập và kiểm chứng.",
        "Cần ghi nguồn/công cụ AI đã dùng để minh bạch với người xem.",
      ]}
    />
  );
}

/* ---------- Dự án 6 ---------- */
function Project6() {
  const issues = [
    { i: "Đạo văn / gian lận học thuật", s: "Tự viết lại bằng ngôn ngữ cá nhân, kiểm tra qua Turnitin." },
    { i: "Phụ thuộc AI, thui chột tư duy", s: "Dùng AI ở bước brainstorm, không ở bước ra quyết định." },
    { i: "Sai lệch / thông tin ảo (hallucination)", s: "Đối chiếu với ≥ 2 nguồn chính thống." },
    { i: "Quyền riêng tư & dữ liệu cá nhân", s: "Không nhập họ tên đầy đủ, mã sinh viên, dữ liệu nhạy cảm vào AI." },
    { i: "Thiên kiến thuật toán (bias)", s: "Nhận diện góc nhìn thiếu, chủ động bổ sung nguồn đa dạng." },
    { i: "Vi phạm bản quyền", s: "Chỉ dùng hình ảnh, giọng đọc AI được cấp phép cho mục đích học tập." },
  ];
  return (
    <ProjectShell
      id="task-6"
      tag="Bài tập 4 · Mục 6.4"
      icon="🛡️"
      title="Sử dụng AI có trách nhiệm trong học tập và nghiên cứu"
      skills={["AI Ethics", "Đạo đức học thuật", "Tự phản biện"]}
      objective="Hiểu các vấn đề đạo đức khi sử dụng AI và xây dựng bộ nguyên tắc cá nhân để sử dụng AI có trách nhiệm."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Đọc chính sách sử dụng AI của nhà trường & tài liệu học thuật quốc tế.</li>
          <li>Phân tích 6 vấn đề đạo đức AI phổ biến trong môi trường đại học.</li>
          <li>Đề xuất giải pháp cụ thể cho từng vấn đề.</li>
          <li>Tổng hợp thành bộ 7 nguyên tắc cá nhân, cam kết áp dụng.</li>
        </ol>
      }
      tools={["Chính sách nhà trường", "UNESCO AI Guidance", "Học liệu Coursera"]}
      evidence={
        <div className="space-y-3">
          <div className="rounded-2xl bg-gradient-hero p-5">
            <div className="mb-3 text-sm font-semibold text-plum">7 Nguyên tắc cá nhân sử dụng AI</div>
            <ol className="space-y-2 text-sm">
              {PRINCIPLES.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white text-xs font-semibold text-plum shadow-soft">
                    {i + 1}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      }
      analysis={
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead className="bg-secondary">
              <tr>
                <th className="px-3 py-2 text-left">Vấn đề đạo đức</th>
                <th className="px-3 py-2 text-left">Giải pháp cá nhân</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((r) => (
                <tr key={r.i} className="border-t border-border">
                  <td className="px-3 py-2 font-medium text-plum">{r.i}</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.s}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      lesson={[
        "AI đem lại cơ hội nhưng cũng kèm rủi ro đạo đức học thuật.",
        "Trách nhiệm số là kỹ năng thiết yếu trong thời đại AI.",
        "Sử dụng AI đúng cách bảo vệ tính trung thực và sáng tạo của người học.",
      ]}
    />
  );
}

/* ============================================================
 *  EVIDENCE GALLERY
 * ============================================================ */
function Evidence() {
  const items = [
    { t: "Cấu trúc thư mục", d: "Sơ đồ và ảnh chụp cây thư mục môn học.", tag: "Bài 1", href: "#task-1" },
    { t: "Kết quả tìm kiếm học thuật", d: "Ảnh chụp Google Scholar với operator.", tag: "Bài 2", href: "#task-2" },
    { t: "So sánh Prompt V1 vs V2", d: "Ảnh chụp phản hồi từ ChatGPT/Gemini.", tag: "Bài 3", href: "#task-3" },
    { t: "Bảng quản lý công việc nhóm", d: "Ảnh chụp Trello / Notion Kanban.", tag: "Bài 4", href: "#task-4" },
    { t: "Video sản phẩm AI", d: "Video ngắn ≤ 5 phút giải thích khái niệm.", tag: "Bài 5", href: "#task-5" },
    { t: "Bộ nguyên tắc AI có trách nhiệm", d: "Poster 7 điều nguyên tắc cá nhân.", tag: "Bài 6", href: "#task-6" },
  ];
  return (
    <Section id="minh-chung" eyebrow="Evidence Gallery" title="Thư viện minh chứng">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.t}
            className="reveal group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-soft"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-gradient-hero">
              <div className="absolute inset-0 grid place-items-center text-5xl opacity-40 transition-transform group-hover:scale-110">
                🖼️
              </div>
              <span className="absolute top-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold text-plum backdrop-blur">
                {it.tag}
              </span>
            </div>
            <div className="p-5">
              <h4 className="font-display text-lg">{it.t}</h4>
              <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
              <a
                href={it.href}
                className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-plum transition-colors hover:text-primary"
              >
                Xem chi tiết →
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 *  SKILLS
 * ============================================================ */
function Skills() {
  return (
    <Section id="ky-nang" eyebrow="Skills Matrix" title="Bảng tổng hợp kỹ năng đạt được">
      <div className="grid gap-5 md:grid-cols-2">
        {SKILLS.map((s) => (
          <div
            key={s.name}
            className="reveal rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:shadow-soft"
          >
            <div className="flex items-center justify-between gap-4">
              <h4 className="font-display text-lg">{s.name}</h4>
              <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-plum">
                {s.level}%
              </span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-gradient-brand transition-all"
                style={{ width: `${s.level}%` }}
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Ứng dụng: </span>
              {s.use}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 *  CONCLUSION
 * ============================================================ */
function Conclusion() {
  const difficulties = [
    { d: "Khó sắp xếp nội dung sao cho khoa học.", f: "Lập outline & wireframe trước khi bắt tay xây dựng." },
    { d: "Khó đánh giá độ tin cậy của thông tin.", f: "Xây dựng bảng đánh giá 5 tiêu chí, kiểm chứng đa nguồn." },
    { d: "Khó viết prompt đủ rõ ràng.", f: "Áp dụng khung R-C-T-F và so sánh nhiều phiên bản." },
    { d: "Khó cân bằng giữa AI và tư duy cá nhân.", f: "Chia rõ vai trò AI – Con người ở từng bước sản phẩm." },
  ];
  return (
    <Section id="tong-ket" eyebrow="Conclusion" title="Tổng kết & Phản tư">
      <div className="reveal rounded-3xl bg-gradient-hero p-8 md:p-12 shadow-soft">
        <p className="font-display text-2xl leading-snug md:text-3xl">
          “Portfolio giúp em nhìn lại toàn bộ quá trình rèn luyện kỹ năng công nghệ số, tư duy phản biện
          và khả năng sử dụng AI có trách nhiệm.”
        </p>
        <p className="mt-6 max-w-3xl text-muted-foreground leading-relaxed">
          Thông qua quá trình xây dựng Portfolio kỹ thuật số cá nhân, em không chỉ lưu trữ các sản phẩm học tập
          mà còn nhìn lại toàn bộ hành trình học tập. Portfolio giúp em hiểu rằng trong môi trường học tập hiện đại,
          công nghệ không chỉ là công cụ hỗ trợ mà còn là phương tiện để người học thể hiện năng lực, sự sáng tạo
          và thái độ học tập nghiêm túc. Những kỹ năng như quản lý dữ liệu, tìm kiếm học thuật, viết prompt,
          làm việc nhóm trực tuyến và đánh giá đạo đức AI sẽ tiếp tục có giá trị trong học tập, nghiên cứu và công việc tương lai.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="reveal rounded-2xl border border-border bg-card p-6">
          <h4 className="font-display text-xl text-plum">Điều tâm đắc nhất</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>◆ Học được cách <strong className="text-foreground">tư duy có hệ thống</strong> khi đối diện thông tin trên mạng.</li>
            <li>◆ Xây dựng được <strong className="text-foreground">bộ nguyên tắc cá nhân dùng AI</strong> để tự bảo vệ mình.</li>
            <li>◆ Biết cách <strong className="text-foreground">phối hợp AI – Con người</strong> mà vẫn giữ được bản sắc học tập.</li>
          </ul>
        </div>
        <div className="reveal rounded-2xl border border-border bg-card p-6">
          <h4 className="font-display text-xl text-plum">Khó khăn & Cách khắc phục</h4>
          <ul className="mt-3 space-y-3 text-sm">
            {difficulties.map((x) => (
              <li key={x.d} className="rounded-xl bg-secondary/60 p-3">
                <div className="font-medium">⚠️ {x.d}</div>
                <div className="mt-1 text-muted-foreground">→ {x.f}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="reveal mt-10 rounded-2xl border border-border bg-card p-6">
        <h4 className="font-display text-xl text-plum">Định hướng áp dụng trong tương lai</h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {[
            { i: "📌", t: "Duy trì Portfolio", d: "Tiếp tục cập nhật sản phẩm học tập & dự án cá nhân." },
            { i: "🎓", t: "Học tập & nghiên cứu", d: "Ứng dụng kỹ năng số vào tiểu luận, khóa luận, seminar." },
            { i: "💼", t: "Công việc", d: "Sử dụng AI có trách nhiệm như một cộng sự nghề nghiệp." },
          ].map((g) => (
            <div key={g.t} className="rounded-xl bg-gradient-hero p-4">
              <div className="text-2xl">{g.i}</div>
              <div className="mt-1 font-semibold">{g.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{g.d}</div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ============================================================
 *  FOOTER
 * ============================================================ */
function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-white/60 backdrop-blur">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white shadow-soft">
              <span className="font-display">P</span>
            </span>
            <span className="font-display text-lg font-semibold">Portfolio Kỹ thuật số</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Portfolio được xây dựng nhằm phục vụ mục đích học tập và tự đánh giá năng lực số.
          </p>
        </div>
        <div className="text-sm">
          <div className="mb-2 font-semibold text-plum">Thông tin</div>
          <ul className="space-y-1.5 text-muted-foreground">
            <li>Sinh viên: <span className="text-foreground">[Điền tên của bạn]</span></li>
            <li>Ngành: <span className="text-foreground">[Điền ngành học]</span></li>
            <li>Môn: Nhập môn Công nghệ số & Ứng dụng AI</li>
            <li>Năm học: 2025 – 2026</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="mb-2 font-semibold text-plum">Liên hệ</div>
          <ul className="space-y-1.5 text-muted-foreground">
            <li>Email: <span className="text-foreground">[email@example.com]</span></li>
            <li>GitHub: <span className="text-foreground">github.com/[username]</span></li>
            <li>LinkedIn: <span className="text-foreground">linkedin.com/in/[username]</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-6 py-5 text-center text-xs text-muted-foreground">
        © 2026 · Portfolio cá nhân môn NMCNS-AI · Made with 💜 & AI có trách nhiệm.
      </div>
    </footer>
  );
}

/* ============================================================
 *  SECTION helper
 * ============================================================ */
function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="reveal mb-10">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-plum">{eyebrow}</div>
          <h2 className="mt-2 font-display text-4xl md:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
