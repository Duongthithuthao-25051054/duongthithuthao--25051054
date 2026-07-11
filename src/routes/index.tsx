import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import studentAvatar from "@/assets/student-avatar.jpg.asset.json";
import bai1Img21 from "@/assets/bai1/bai1-21.png.asset.json";
import bai1Img22 from "@/assets/bai1/bai1-22.png.asset.json";
import bai1Img23 from "@/assets/bai1/bai1-23.png.asset.json";
import bai1Img24 from "@/assets/bai1/bai1-24.png.asset.json";
import bai1Img25 from "@/assets/bai1/bai1-25.png.asset.json";
import bai1Img26 from "@/assets/bai1/bai1-26.png.asset.json";
import bai1Img27 from "@/assets/bai1/bai1-27.png.asset.json";
import bai1Img28 from "@/assets/bai1/bai1-28.png.asset.json";
import bai1Img29 from "@/assets/bai1/bai1-29.png.asset.json";
import bai1Img30 from "@/assets/bai1/bai1-30.png.asset.json";
import bai1Img31 from "@/assets/bai1/bai1-31.png.asset.json";
import bai1Img32 from "@/assets/bai1/bai1-32.png.asset.json";
import bai1Img33 from "@/assets/bai1/bai1-33.png.asset.json";
import bai1Img34 from "@/assets/bai1/bai1-34.png.asset.json";
import bai1Img35 from "@/assets/bai1/bai1-35.png.asset.json";
import bai1Img36 from "@/assets/bai1/bai1-36.png.asset.json";
import bai1Img37 from "@/assets/bai1/bai1-37.png.asset.json";
import bai1Doc from "@/assets/bai1/GhiChuQuanTrong.docx.asset.json";
import bai3Img39 from "@/assets/bai3/bai3-39.png.asset.json";
import bai3Img40 from "@/assets/bai3/bai3-40.png.asset.json";
import bai3Img41 from "@/assets/bai3/bai3-41.png.asset.json";
import bai3Doc from "@/assets/bai3/SoSanh_Prompt_3CapDo.docx.asset.json";
import bai4Img43 from "@/assets/bai4/bai4-43.png.asset.json";
import bai4Img44 from "@/assets/bai4/bai4-44.png.asset.json";
import bai4Img45 from "@/assets/bai4/bai4-45.png.asset.json";
import bai4Img46 from "@/assets/bai4/bai4-46.png.asset.json";
import bai4Doc from "@/assets/bai4/KichBan_Video_Nhom.docx.asset.json";
import bai5Img49 from "@/assets/bai5/bai5-49.png.asset.json";
import bai5Img50 from "@/assets/bai5/bai5-50.png.asset.json";
import bai5Img51 from "@/assets/bai5/bai5-51.png.asset.json";
import bai5Img52 from "@/assets/bai5/bai5-52.png.asset.json";
import bai5Doc from "@/assets/bai5/BaoCao_AI_TonTaiXaHoi.docx.asset.json";

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
  { name: "Quản lý tệp & dữ liệu số", level: 94, use: "Sắp xếp tài liệu học, dự án nhóm, sao lưu Cloud." },
  { name: "Tìm kiếm thông tin học thuật", level: 97, use: "Tra cứu tài liệu tham khảo cho tiểu luận, seminar." },
  { name: "Đánh giá độ tin cậy nguồn", level: 91, use: "Sàng lọc thông tin trước khi trích dẫn." },
  { name: "Viết prompt hiệu quả", level: 96, use: "Khai thác AI hỗ trợ học tập, tổng hợp, dịch." },
  { name: "Hợp tác trực tuyến", level: 93, use: "Chia việc, theo dõi tiến độ nhóm bằng Trello/Notion." },
  { name: "Sáng tạo nội dung số bằng AI", level: 90, use: "Làm video, infographic, poster minh họa bài học." },
  { name: "Sử dụng AI có trách nhiệm", level: 99, use: "Tuân thủ đạo đức học thuật khi dùng AI." },
  { name: "Tự đánh giá & cải thiện", level: 95, use: "Rà soát, phản tư và cải tiến sản phẩm cá nhân." },
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
          <span className="font-display text-lg font-semibold">Digital Portfolio</span>
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
            <a href="#ky-nang" className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white/80 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-white">
              ✅ Kỹ năng
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
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-brand shadow-glow ring-4 ring-white/60">
            <img
              src={studentAvatar.url}
              alt="Ảnh đại diện sinh viên Dương Thị Thu Thảo"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <h3 className="mt-6 text-center font-display text-2xl">Dương Thị Thu Thảo</h3>
          <p className="mt-1 text-center text-sm text-muted-foreground">Sinh viên ·&nbsp;</p>

          <dl className="mt-6 space-y-3 text-sm">
            <Row k="Trường&nbsp;" v="Trường Đại Học Kinh Tế-ĐHQGHN" />
            <Row k="Lớp" v="QH-2025-E KTQT CLC 5" />
            <Row k="MSV" v="25051054" />
            <Row k="Môn học" v="Nhập môn Công nghệ số & Ứng dụng AI" />
            <Row k="Năm học" v="2025 – 2026" />
            <Row k="Email" v="25051054@vnu.edu.vn" />
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

        {/* Cột phải: Mục tiêu học tập + Mục tiêu Portfolio */}
        <div className="space-y-8">
          {/* Mục tiêu học tập */}
          <div className="reveal rounded-3xl border border-rose-200/70 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-rose-400 to-fuchsia-500 text-xl text-white shadow-glow">
                🎯
              </div>
              <h3 className="font-display text-2xl text-foreground">Mục tiêu học tập</h3>
            </div>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-foreground/85">
              {[
                "Phát triển kỹ năng số để thích ứng với thời đại công nghệ 4.0 và nhu cầu của thị trường lao động.",
                "Chủ động tiếp cận và ứng dụng AI như ChatGPT để hỗ trợ học tập và nghiên cứu một cách có trách nhiệm.",
                "Rèn luyện tư duy phản biện, khả năng đánh giá thông tin và giải quyết vấn đề sáng tạo.",
                "Xây dựng thói quen học tập suốt đời và cập nhật kiến thức công nghệ liên tục.",
                "Đạt điểm Xuất sắc (8.1–10) trong môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.",
              ].map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/80 text-rose-500 shadow-sm">
                    💡
                  </span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mục tiêu Portfolio */}
          <div className="reveal rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-500 text-xl text-white shadow-glow">
                📖
              </div>
              <h3 className="font-display text-2xl">Mục tiêu Portfolio</h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Portfolio này được tạo ra với những mục đích sau:
            </p>
            <div className="mt-4 space-y-3">
              {[
                { i: "🧭", t: "Tổng hợp quá trình học tập", d: "Ghi lại toàn bộ hành trình học tập qua các bài tập và dự án của môn học." },
                { i: "💾", t: "Lưu trữ sản phẩm học tập", d: "Xây dựng kho lưu trữ các minh chứng và sản phẩm đã hoàn thành." },
                { i: "📈", t: "Thể hiện sự tiến bộ", d: "Minh họa rõ ràng sự phát triển và tiến bộ qua từng bài học." },
                { i: "🌸", t: "Dấu ấn cá nhân", d: "Thể hiện phong cách, sự tỉ mỉ và tinh thần trách nhiệm của riêng em." },
              ].map((g) => (
                <div
                  key={g.t}
                  className="group rounded-2xl border border-border bg-background/60 p-4 transition-all hover:-translate-y-0.5 hover:border-rose-300 hover:shadow-soft"
                >
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <span className="text-lg">{g.i}</span>
                    <span className="bg-gradient-to-r from-rose-500 to-fuchsia-500 bg-clip-text text-transparent">
                      {g.t}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{g.d}</p>
                </div>
              ))}
            </div>
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
    <Section id="du-an" eyebrow="Projects" title="6 Dự Án Học Tập">
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
  gallery,
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
  gallery?: React.ReactNode;
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

      <div className="space-y-6 p-8 md:p-10">
        <div className="grid gap-6 md:grid-cols-2">
          <Block title="🎯 Mục tiêu">{objective}</Block>
          <Block title="⚙️ Quá trình thực hiện">{process}</Block>
        </div>

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

        <Block title="🖼️ Sản phẩm / Minh chứng">{evidence}</Block>

        <div className="space-y-6">
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

      {gallery && (
        <div className="border-t border-border bg-gradient-to-b from-transparent to-secondary/30 p-8 md:p-10">
          {gallery}
        </div>
      )}
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

function EvidencePlaceholder({ label, src }: { label: string; src?: string }) {
  return (
    <figure className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {src ? (
          <img src={src} alt={label} className="absolute inset-0 h-full w-full object-contain p-1" loading="lazy" />
        ) : (
          <>
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 14px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 22px)",
              }}
            />
            <div className="absolute left-3 top-3 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-400/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
              <span className="h-2 w-2 rounded-full bg-green-400/70" />
            </div>
            <div className="absolute inset-0 grid place-items-center text-3xl opacity-70">🖼️</div>
          </>
        )}
      </div>
      <figcaption className="border-t border-border bg-secondary/40 px-3 py-2 text-xs font-medium leading-snug text-foreground">
        {label}
      </figcaption>
    </figure>
  );
}

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
    }
    return null;
  } catch {
    return null;
  }
}

function EvidenceGallery({
  title = "📸 Ảnh minh chứng thực hành",
  items,
  file,
  fileUrl,
  video,
}: {
  title?: string;
  items: (string | { label: string; src?: string })[];
  file?: string;
  fileUrl?: string;
  video?: { url: string; label?: string };
}) {
  const embedUrl = video ? getYouTubeEmbedUrl(video.url) : null;
  return (
    <div className="space-y-3">
      <div className="text-xs font-semibold uppercase tracking-wide text-plum">{title}</div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => {
          const obj = typeof it === "string" ? { label: it } : it;
          return <EvidencePlaceholder key={i} label={obj.label} src={obj.src} />;
        })}
      </div>
      {video && (
        <div className="space-y-2 pt-1">
          {video.label && (
            <div className="text-xs font-semibold text-plum">🎬 {video.label}</div>
          )}
          {embedUrl ? (
            <div className="relative w-full overflow-hidden rounded-xl border border-primary/30" style={{ paddingBottom: "56.25%" }}>
              <iframe
                src={embedUrl}
                title={video.label ?? "Video minh chứng"}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          ) : null}
          <a
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-plum transition hover:bg-primary/20"
          >
            ▶️ Xem video trên YouTube
          </a>
        </div>
      )}
      {file && (
        <div className="pt-1">
          {fileUrl ? (
            <a
              href={fileUrl}
              download={file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-plum transition hover:bg-primary/20"
            >
              📄 Tải tệp minh chứng: {file}
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-semibold text-plum">
              📄 Tải tệp minh chứng: {file}
            </span>
          )}
        </div>
      )}
    </div>
  );
}



function ReviewSection({
  good,
  improve,
  takeaway,
  aiUse,
  commit,
}: {
  good: string[];
  improve: string[];
  takeaway: string[];
  aiUse: string[];
  commit: string[];
}) {
  const Col = ({
    icon,
    title,
    tone,
    items,
  }: {
    icon: string;
    title: string;
    tone: "good" | "warn" | "info";
    items: string[];
  }) => {
    const toneCls =
      tone === "good"
        ? "border-emerald-200 bg-emerald-50"
        : tone === "warn"
          ? "border-amber-200 bg-amber-50"
          : "border-sky-200 bg-sky-50";
    const dot =
      tone === "good" ? "text-emerald-600" : tone === "warn" ? "text-amber-600" : "text-sky-600";
    return (
      <div className={`rounded-2xl border p-4 ${toneCls}`}>
        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-foreground">
          <span>{icon}</span>
          <span>{title}</span>
        </div>
        <ul className="space-y-1.5 text-xs leading-relaxed text-foreground/80">
          {items.map((t, i) => (
            <li key={i} className="flex gap-2">
              <span className={`mt-1 ${dot}`}>•</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return (
    <div className="border-t border-border bg-muted/30 p-8 md:p-10">
      <h4 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-plum">
        📊 Phân tích – Đánh giá
      </h4>
      <div className="grid gap-3 md:grid-cols-3">
        <Col icon="✅" title="Điểm tốt" tone="good" items={good} />
        <Col icon="🛠️" title="Cần cải thiện" tone="warn" items={improve} />
        <Col icon="💡" title="Bài học rút ra" tone="info" items={takeaway} />
      </div>

      <div className="mt-6 rounded-2xl border border-border bg-card p-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-plum">
          🤖 Liêm chính học thuật &amp; Sử dụng AI
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <div className="mb-1.5 text-xs font-semibold uppercase text-muted-foreground">
              Cách tôi sử dụng AI
            </div>
            <ul className="space-y-1 text-xs text-foreground/85">
              {aiUse.map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-plum">→</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-1.5 text-xs font-semibold uppercase text-muted-foreground">
              Cam kết liêm chính
            </div>
            <ul className="space-y-1 text-xs text-foreground/85">
              {commit.map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-emerald-600">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
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
      title="Thao tác cơ bản với tệp tin và thư mục trên Windows"
      skills={["File Explorer", "Quản lý dữ liệu", "Recycle Bin", "Đặt tên nhất quán"]}
      objective="Thành thạo 12 thao tác cơ bản trên File Explorer — từ tạo, đổi tên, sao chép, di chuyển đến xóa và khôi phục — để sắp xếp tài liệu học tập khoa học, an toàn."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Mở File Explorer bằng <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">Win + E</code>, truy cập ổ đĩa D:.</li>
          <li>Tạo thư mục mới <em>Thuchanh_Duongthithuthao</em> bằng chuột phải → New → Folder.</li>
          <li>Tạo tệp <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">GhiChu.txt</code> → đổi tên thành <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">GhiChuQuanTrong.txt</code>.</li>
          <li>Tạo thư mục con <em>TaiLieu</em> để phân loại tài liệu.</li>
          <li>Sao chép (Ctrl+C / Ctrl+V) và di chuyển (Ctrl+X / Ctrl+V) tệp giữa các thư mục.</li>
          <li>Xóa mềm (Delete → Recycle Bin) và xóa vĩnh viễn (Shift + Delete).</li>
          <li>Khôi phục tệp đã xóa từ Recycle Bin bằng lệnh <em>Restore</em>.</li>
        </ol>
      }
      tools={["File Explorer", "Notepad", "Recycle Bin", "OneDrive"]}
      evidence={
        <div className="space-y-4">
          <div className="rounded-xl bg-muted/60 p-4 font-mono text-xs leading-relaxed">
            <div>📂 D:\Thuchanh_Duongthithuthao\</div>
            <div className="pl-4">📄 GhiChuQuanTrong.txt</div>
            <div className="pl-4">📄 DiChuyen.txt</div>
            <div className="pl-4">📂 TaiLieu\</div>
            <div className="pl-8">📄 GhiChuQuanTrong.txt <span className="text-muted-foreground">(bản sao chép)</span></div>
          </div>
          <div className="rounded-xl border border-border p-3 text-xs">
            <span className="font-semibold text-plum">Nhật ký Recycle Bin: </span>
            GhiChuQuanTrong.txt — xóa 3/7/2026 · vị trí gốc D:\Thuchanh_Duongthithuthao · đã <em>Restore</em>.
          </div>
        </div>
      }
      analysis={
        <div className="space-y-2">
          <p>
            Phân biệt <strong>Delete</strong> (đưa vào Recycle Bin — có thể khôi phục) và <strong>Shift + Delete</strong>
            (xóa vĩnh viễn — không qua thùng rác) giúp em tránh mất dữ liệu quan trọng do thao tác nhầm.
          </p>
          <p>
            Đặt tên thư mục theo cú pháp <code className="rounded bg-muted px-1 font-mono text-xs">ThucHanh_HoTen</code>
            và tệp dạng <code className="rounded bg-muted px-1 font-mono text-xs">TenTep_NgayThang_Version</code> giúp
            tìm kiếm nhanh và không trùng lặp khi cộng tác.
          </p>
        </div>
      }
      lesson={[
        "Kỹ năng quản lý tệp – thư mục là nền tảng của mọi công việc số.",
        "Hiểu rõ Recycle Bin giúp giảm rủi ro mất dữ liệu bất ngờ.",
        "Đặt tên nhất quán và có cấu trúc là thói quen tiết kiệm thời gian lâu dài.",
      ]}
      gallery={
        <EvidenceGallery
          items={[
            { label: "Mở File Explorer từ thanh tác vụ (Win + E)", src: bai1Img31.url },
            { label: "Truy cập This PC → ổ đĩa D:", src: bai1Img32.url },
            { label: "Ổ D: trước khi tạo thư mục Thuchanh_Duongthithuthao", src: bai1Img33.url },
            { label: "Thư mục Thuchanh_Duongthithuthao vừa tạo (còn trống)", src: bai1Img34.url },
            { label: "Chuột phải → New → Text Document tạo tệp .txt", src: bai1Img35.url },
            { label: "Menu chuột phải trên tệp: Rename / Copy / Delete…", src: bai1Img36.url },
            { label: "Chuột phải → New → Folder tạo thư mục con TaiLieu", src: bai1Img37.url },
            { label: "Cấu trúc thư mục Thuchanh_Duongthithuthao trên ổ D:", src: bai1Img29.url },
            { label: "Menu chuột phải → New → Folder tạo thư mục mới", src: bai1Img30.url },
            { label: "Thư mục sau khi tạo tệp GhiChuQuanTrong.txt & TaiLieu", src: bai1Img26.url },
            { label: "Sao chép tệp (Copy — Ctrl+C) từ menu chuột phải", src: bai1Img28.url },
            { label: "Dán tệp (Paste — Ctrl+V) vào thư mục đích", src: bai1Img27.url },
            { label: "Cắt tệp (Cut — Ctrl+X) để di chuyển", src: bai1Img24.url },
            { label: "Kết quả sau khi di chuyển & sao chép hoàn tất", src: bai1Img25.url },
            { label: "Xóa mềm (Delete) tệp GhiChuQuanTrong.txt", src: bai1Img23.url },
            { label: "Xác nhận xóa vĩnh viễn thư mục (Shift+Delete)", src: bai1Img22.url },
            { label: "Khôi phục tệp từ Recycle Bin (Restore all items)", src: bai1Img21.url },
          ]}
          file="GhiChuQuanTrong.docx"
          fileUrl={bai1Doc.url}
        />
      }
    >

      <ReviewSection
        good={[
          "Thực hiện đủ 12 thao tác cơ bản với tệp tin và thư mục",
          "Chụp màn hình chi tiết từng bước làm minh chứng",
          "Tổ chức cấu trúc thư mục khoa học, dễ quản lý",
        ]}
        improve={[
          "Cần học thêm các phím tắt (Win+E, Shift+Del) để thao tác nhanh hơn",
          "Học cách sử dụng tính năng tìm kiếm nâng cao trong File Explorer",
        ]}
        takeaway={[
          "Quản lý tệp tin có tổ chức giúp tiết kiệm thời gian tìm kiếm",
          "Biết cách sử dụng Recycle Bin để khôi phục tệp tin đã xóa nhầm",
          "Shortcut giúp truy cập nhanh các thư mục thường dùng",
        ]}
        aiUse={[
          "Không sử dụng AI trong bài tập này",
          "Tự thực hành trực tiếp trên máy tính theo hướng dẫn của giảng viên",
        ]}
        commit={[
          "Tôi đã tự thực hiện tất cả các thao tác trên máy tính cá nhân",
          "Ảnh chụp màn hình là minh chứng thực tế từ quá trình thực hành",
          "Tất cả nội dung báo cáo được viết dựa trên trải nghiệm thực tế",
        ]}
      />
    </ProjectShell>
  );
}


/* ---------- Dự án 2 ---------- */
function Project2() {
  const operators = [
    { op: "site:", ex: "site:imf.org AI economy", why: "Giới hạn tìm kiếm ở tổ chức uy tín (IMF, OECD, .edu…)" },
    { op: "filetype:", ex: "filetype:pdf AI international trade", why: "Chỉ tìm tài liệu PDF chính thống, dễ trích dẫn" },
    { op: "intitle:", ex: "intitle:\"artificial intelligence\" trade", why: "Từ khóa phải nằm ở tiêu đề bài báo" },
    { op: "\"...\"", ex: "\"AI and international trade\"", why: "Khớp chính xác cụm từ nghiên cứu" },
    { op: "OR", ex: "AI OR \"machine learning\" FDI", why: "Mở rộng sang thuật ngữ đồng nghĩa" },
    { op: "-", ex: "AI economy -blog -marketing", why: "Loại bỏ nội dung quảng cáo, blog nhiễu" },
    { op: "after:", ex: "AI global trade after:2023", why: "Chỉ lấy tài liệu cập nhật 2023 trở lại" },
  ];
  const sources = [
    { name: "AI and International Trade (NBER/WITA)", org: "Goldfarb & Trefler — Univ. of Toronto", year: 2024, trust: "8/10", limit: "Có yếu tố quảng bá giải pháp của hãng." },
    { name: "IMF Blog — AI & Global Economy", org: "Kristalina Georgieva (IMF)", year: 2024, trust: "10/10", limit: "Chuẩn mực nhất về tác động vĩ mô toàn cầu." },
    { name: "Artificial Intelligence & International Economic Law", org: "Cambridge University Press", year: 2024, trust: "10/10", limit: "Uy tín học thuật cao, nền tảng pháp lý." },
    { name: "Research on AI Impact (ResearchGate)", org: "Nhóm nghiên cứu độc lập", year: 2024, trust: "7/10", limit: "Cần kiểm tra kỹ lý lịch tác giả." },
    { name: "AI's Impact on the Global Economy", org: "Cerity Partners", year: 2024, trust: "6/10", limit: "Mang tính định hướng thị trường tài chính." },
    { name: "OECD — AI and International Trade", org: "OECD Publishing, Paris", year: 2024, trust: "10/10", limit: "Nguồn thống kê đa quốc gia gốc." },
    { name: "MIT Sloan — New Look at Economics of AI", org: "MIT Sloan / Ideas Made to Matter", year: 2024, trust: "9/10", limit: "Kết hợp công nghệ và kinh tế học." },
    { name: "NBER Working Paper — AI & Global Economy", org: "National Bureau of Economic Research", year: 2024, trust: "10/10", limit: "Tiêu chuẩn vàng về kinh tế lượng." },
  ];
  return (
    <ProjectShell
      id="task-2"
      tag="Bài tập 2 · Mục 2.4"
      icon="🔎"
      title="Tìm kiếm và đánh giá thông tin học thuật — chủ đề AI & Kinh tế Quốc tế"
      skills={["Search operators", "Đánh giá nguồn 6 tiêu chí", "Trích dẫn Harvard"]}
      objective="Nghiên cứu chủ đề “Ảnh hưởng của Trí tuệ Nhân tạo đến Kinh tế Quốc tế”: khai thác toán tử tìm kiếm nâng cao, thu thập 10 nguồn và đánh giá độ tin cậy theo thang 10/10."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Xác định 4 khía cạnh phân tích: <em>thương mại, đầu tư FDI, thị trường lao động, chuỗi cung ứng</em>.</li>
          <li>Áp dụng &gt; 6 toán tử tìm kiếm trên Google Search & Google Scholar.</li>
          <li>Thu thập 10 nguồn từ IMF, OECD, NBER, Cambridge, MIT Sloan, WITA…</li>
          <li>Đánh giá theo 6 tiêu chí: tác giả, cơ quan xuất bản, phương pháp, tính cập nhật, điểm tin cậy, ghi chú.</li>
          <li>Trích dẫn tất cả 10 nguồn theo chuẩn <strong>Harvard</strong>.</li>
        </ol>
      }
      tools={["Google Search", "Google Scholar", "IMF / OECD / NBER", "Cambridge University Press", "Zotero"]}
      evidence={
        <div className="space-y-4">
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
          <div className="rounded-xl bg-muted/60 p-4 text-xs leading-relaxed">
            <div className="font-semibold text-plum mb-1">Trích dẫn Harvard (mẫu):</div>
            <p><strong>Georgieva, K.</strong> (2024) ‘AI Will Transform the Global Economy. Let’s Make Sure It Benefits Humanity’, <em>IMF Blog</em>.</p>
            <p><strong>Goldfarb, A. and Trefler, D.</strong> (2018) ‘AI and International Trade’, in <em>The Economics of Artificial Intelligence: An Agenda</em>. NBER.</p>
            <p><strong>OECD</strong> (2024) <em>Artificial Intelligence and International Trade</em>. OECD Publishing, Paris.</p>
          </div>
        </div>
      }
      analysis={
        <div className="space-y-3">
          <p>
            Bốn nguồn đạt <strong>10/10</strong> (IMF, Cambridge, OECD, NBER) đều là tổ chức toàn cầu hoặc peer-reviewed —
            được ưu tiên trích dẫn. Ba nguồn 7–9/10 (MIT Sloan, WITA, arXiv) dùng bổ trợ. Nguồn 6/10 (Cerity Partners)
            chỉ tham khảo góc nhìn thị trường.
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-2 py-2 text-left">Nguồn</th>
                  <th className="px-2 py-2 text-left">Cơ quan</th>
                  <th className="px-2 py-2 text-left">Năm</th>
                  <th className="px-2 py-2 text-left">Tin cậy</th>
                  <th className="px-2 py-2 text-left">Ghi chú</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((s) => (
                  <tr key={s.name} className="border-t border-border align-top">
                    <td className="px-2 py-2 font-medium">{s.name}</td>
                    <td className="px-2 py-2 text-muted-foreground">{s.org}</td>
                    <td className="px-2 py-2">{s.year}</td>
                    <td className="px-2 py-2 font-semibold text-plum">{s.trust}</td>
                    <td className="px-2 py-2 text-muted-foreground">{s.limit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
      lesson={[
        "Tìm kiếm là một chiến lược nhiều tầng, không chỉ là một cú click.",
        "Nguồn peer-reviewed và tổ chức quốc tế (IMF, OECD, NBER) là chuẩn vàng.",
        "Trích dẫn Harvard đúng chuẩn giúp bảo vệ tính học thuật và minh bạch.",
      ]}
      gallery={
        <EvidenceGallery
          items={[
            "Google Scholar với toán tử filetype:pdf",
            "Trang IMF Blog — bài của K. Georgieva (2024)",
            "Kết quả tìm kiếm trên OECD.org",
            "Thư mục Zotero: nhóm ‘AI & Trade’",
            "Trang trích dẫn Harvard xuất từ Zotero",
          ]}
          file="TrichDan_Harvard_AI-Trade.docx"
        />
      }
    >
      <ReviewSection
        good={[
          "Vận dụng thành thạo hơn 6 toán tử tìm kiếm nâng cao",
          "Đánh giá 10 nguồn theo 6 tiêu chí có bảng biểu rõ ràng",
          "Trích dẫn Harvard đầy đủ và đúng chuẩn học thuật",
        ]}
        improve={[
          "Bổ sung nguồn tiếng Việt để cân bằng góc nhìn địa phương",
          "Đọc kỹ hơn phần Phương pháp nghiên cứu của mỗi tài liệu",
        ]}
        takeaway={[
          "Nguồn peer-reviewed (IMF, OECD, NBER) là chuẩn vàng khi trích dẫn",
          "Luôn kiểm chứng bằng ≥ 2 nguồn độc lập trước khi kết luận",
          "Chiến lược tìm kiếm theo tầng hiệu quả hơn từ khóa đơn lẻ",
        ]}
        aiUse={[
          "Dùng ChatGPT gợi ý các từ khoá tìm kiếm bằng tiếng Anh",
          "Dùng AI giải nghĩa nhanh các thuật ngữ kinh tế chuyên ngành",
        ]}
        commit={[
          "Tự đọc và tóm tắt từng nguồn tham khảo, không phụ thuộc AI",
          "Trích dẫn theo Harvard được viết tay, không copy-paste từ AI",
          "Điểm đánh giá độ tin cậy dựa trên phán đoán cá nhân",
        ]}
      />
    </ProjectShell>
  );
}


/* ---------- Dự án 3 ---------- */
function Project3() {
  const compare = [
    { c: "Độ rõ ràng", a: "Câu hỏi chung chung, thiếu định hướng", b: "Có bối cảnh cụ thể (sinh viên năm 1, nhanh 200–300 từ)", c2: "Đầy đủ vai trò + cấu trúc bảng 4 cột" },
    { c: "Cấu trúc", a: "Đoạn văn dài, khó tra cứu", b: "Phân tách ý theo yêu cầu", c2: "Chain-of-Thought 5 bước rõ ràng" },
    { c: "Chất lượng học thuật", a: "Khái quát, thiếu ví dụ", b: "Có ví dụ minh họa, phù hợp học tập", c2: "Chuyên sâu, có bảng biểu, giải thích chi tiết" },
    { c: "Ưu điểm", a: "Nhanh, dễ viết", b: "Có định hướng, dễ hiểu", c2: "Chuyên nghiệp, dễ tra cứu, tái sử dụng" },
    { c: "Nhược điểm", a: "Thiếu chiều sâu", b: "Vẫn còn dạng đoạn văn dài", c2: "Prompt dài, tốn thời gian soạn" },
  ];
  return (
    <ProjectShell
      id="task-3"
      tag="Bài tập 3 · Mục 3.4"
      icon="💬"
      title="Viết Prompt hiệu quả cho các tác vụ học tập"
      skills={["Prompt engineering", "Role prompting", "Chain-of-Thought", "Few-shot"]}
      objective="Thiết kế và thử nghiệm prompt cho 3 tác vụ học tập phổ biến ở 3 cấp độ (Cơ bản → Cải tiến → Nâng cao) để so sánh chất lượng phản hồi của AI."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Chọn 3 tác vụ: <em>Tóm tắt bài nghiên cứu “Impact of Social Media on Student Learning”</em>, <em>Giải thích Tháp nhu cầu Maslow</em>, <em>Tạo 20 câu hỏi ôn tập Cung – Cầu (Kinh tế vi mô)</em>.</li>
          <li>Viết Prompt Cơ bản → Cải tiến (thêm bối cảnh, độ dài) → Nâng cao (Role + Cấu trúc / Few-shot + Analogy / Chain-of-Thought).</li>
          <li>Chạy trên ChatGPT, ghi lại phản hồi cho từng cấp độ.</li>
          <li>Đánh giá theo tiêu chí: độ rõ ràng, cấu trúc, chất lượng học thuật.</li>
        </ol>
      }
      tools={["ChatGPT", "Gemini", "Claude"]}
      evidence={
        <div className="space-y-3">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-blush/20 p-4">
              <div className="text-xs font-semibold text-plum">CƠ BẢN</div>
              <p className="mt-1 font-mono text-xs leading-relaxed">
                “Hãy tóm tắt tài liệu ‘Impact of Social Media on Student Learning’ giúp tôi.”
              </p>
            </div>
            <div className="rounded-xl bg-sky/25 p-4">
              <div className="text-xs font-semibold text-plum">CẢI TIẾN</div>
              <p className="mt-1 font-mono text-xs leading-relaxed">
                “Tóm tắt trong 200–300 từ, giới thiệu nhanh cho sinh viên năm 1, tập trung vào luận điểm chính & phương pháp nghiên cứu.”
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 p-4">
              <div className="text-xs font-semibold text-plum">NÂNG CAO (Role + Cấu trúc)</div>
              <p className="mt-1 font-mono text-xs leading-relaxed">
                “Đóng vai giảng viên giáo dục học, tóm tắt tài liệu theo bảng 4 cột: <em>Mục tiêu · Phương pháp · Kết quả · Hạn chế</em>. Văn phong khách quan, dễ hiểu.”
              </p>
            </div>
          </div>
        </div>
      }
      analysis={
        <div className="overflow-hidden rounded-xl border border-border">
          <table className="w-full text-xs">
            <thead className="bg-secondary">
              <tr>
                <th className="px-3 py-2 text-left">Tiêu chí</th>
                <th className="px-3 py-2 text-left">Cơ bản</th>
                <th className="px-3 py-2 text-left">Cải tiến</th>
                <th className="px-3 py-2 text-left">Nâng cao</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.c} className="border-t border-border align-top">
                  <td className="px-3 py-2 font-medium text-plum">{r.c}</td>
                  <td className="px-3 py-2 text-muted-foreground">{r.a}</td>
                  <td className="px-3 py-2">{r.b}</td>
                  <td className="px-3 py-2 font-medium">{r.c2}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
      lesson={[
        "Prompt càng có Vai trò – Bối cảnh – Cấu trúc – Định dạng, kết quả AI càng học thuật.",
        "Kỹ thuật Chain-of-Thought giúp AI đi qua từng bước tư duy, hạn chế bịa thông tin.",
        "Đầu tư thời gian viết prompt tốt là đầu tư vào chất lượng đầu ra học tập.",
      ]}
      gallery={
        <EvidenceGallery
          items={[
            { label: "Prompt CƠ BẢN: hạn chế khi dùng trong tác vụ học thuật", src: bai3Img39.url },
            { label: "Prompt CẢI TIẾN: nêu ≥ 2 lý do vì sao cho kết quả tốt hơn", src: bai3Img40.url },
            { label: "Prompt NÂNG CAO: phân tích 3 loại prompt theo tiêu chí học thuật", src: bai3Img41.url },
          ]}
          file="SoSanh_Prompt_3CapDo.docx"
          fileUrl={bai3Doc.url}
        />
      }
    >
      <ReviewSection
        good={[
          "Thiết kế 3 cấp độ prompt cho 3 tác vụ học tập khác nhau",
          "So sánh kết quả bằng bảng biểu chi tiết, có tiêu chí rõ",
          "Áp dụng đa dạng kỹ thuật: Role, Few-shot, Chain-of-Thought",
        ]}
        improve={[
          "Thử thêm Gemini và Claude để có so sánh chéo giữa các mô hình",
          "Đo thời gian phản hồi và số token tiêu tốn cho từng prompt",
        ]}
        takeaway={[
          "Prompt càng có cấu trúc, kết quả AI càng học thuật hơn",
          "Chain-of-Thought giúp AI đi qua từng bước, hạn chế bịa thông tin",
          "Đầu tư thời gian viết prompt là đầu tư vào chất lượng đầu ra",
        ]}
        aiUse={[
          "Dùng ChatGPT để chạy thử toàn bộ 9 prompt và ghi lại phản hồi",
          "AI đóng vai 'đối tượng thử nghiệm', không phải người viết bài",
        ]}
        commit={[
          "Toàn bộ đầu ra AI đã được em đọc và phân tích lại",
          "Bảng so sánh Cơ bản – Cải tiến – Nâng cao do em tự tổng hợp",
          "Không sao chép nguyên văn nội dung AI vào báo cáo",
        ]}
      />
    </ProjectShell>
  );
}


/* ---------- Dự án 4 ---------- */
function Project4() {
  const board = [
    { m: "Thành viên 1 (Dẫn dắt)", task: "Giới thiệu & Kết luận video", due: "15/11", state: "Hoàn thành", note: "Đã duyệt kịch bản mở đầu (00:00 – 00:45)" },
    { m: "Thành viên 2 (Chuyên gia 1)", task: "AI cá nhân hoá học tập (Elsa Speak, nền tảng tự học)", due: "16/11", state: "Đang làm", note: "Đang thu voice-over phân cảnh 2" },
    { m: "Thành viên 3 (Chuyên gia 2)", task: "AI hỗ trợ giáo viên chấm bài / soạn giáo án", due: "16/11", state: "Đang làm", note: "Chuẩn bị demo slide" },
    { m: "Thành viên 4 (Người thực hành)", task: "Demo công cụ & prompt trên máy tính (B-roll)", due: "17/11", state: "Cần chỉnh sửa", note: "Quay lại phần thao tác máy tính + giải thích" },
    { m: "Thành viên 5 (Phân tích)", task: "Phân tích lợi ích & thách thức tại Việt Nam", due: "18/11", state: "Chưa làm", note: "Chờ nhận số liệu từ TV2" },
  ];
  const stateColor: Record<string, string> = {
    "Hoàn thành": "bg-emerald-100 text-emerald-700",
    "Đang làm": "bg-sky/40 text-plum",
    "Chưa làm": "bg-muted text-muted-foreground",
    "Cần chỉnh sửa": "bg-blush/40 text-plum",
  };
  const challenges = [
    { t: "Khó đồng bộ tiến độ giữa các thành viên", s: "Dùng Trello/Asana phân chia nhiệm vụ, đặt thời hạn và cập nhật trạng thái. Mỗi thành viên chủ động đánh dấu tiến độ, tránh trùng lặp và bỏ sót nhiệm vụ." },
    { t: "Khó chỉnh sửa tài liệu cùng lúc", s: "Google Docs cho phép nhiều người cùng chỉnh sửa; lịch sử phiên bản và bình luận giúp theo dõi đóng góp, khôi phục nội dung khi cần và hạn chế ghi đè." },
    { t: "Quản lý & chia sẻ tài liệu chưa khoa học", s: "Lưu trữ tập trung trên Google Drive theo thư mục nội dung, đặt tên tệp thống nhất và cấp quyền phù hợp — đảm bảo luôn dùng phiên bản mới nhất." },
  ];
  return (
    <ProjectShell
      id="task-4"
      tag="Bài tập 4 · Mục 4.4"
      icon="🤝"
      title="Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm"
      skills={["Asana / Trello", "Google Docs", "Google Drive", "Google Meet"]}
      objective="Lập kế hoạch và sản xuất video nhóm “AI trong Giáo dục tại Việt Nam” — phân công 5 vai trò (Dẫn dắt, Chuyên gia 1, Chuyên gia 2, Người thực hành, Phân tích) và quản lý tiến độ – tài liệu bằng bộ công cụ cộng tác."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Phân công 5 vai trò cố định: Dẫn dắt (mở đầu & kết luận), Chuyên gia 1 (AI cá nhân hoá học tập), Chuyên gia 2 (AI hỗ trợ giáo viên), Người thực hành (demo prompt), Phân tích (lợi ích & thách thức tại VN).</li>
          <li>Lập bảng <strong>Asana / Trello</strong> theo trạng thái <em>Chưa làm · Đang làm · Cần chỉnh sửa · Hoàn thành</em>; mỗi người tự cập nhật tiến độ.</li>
          <li>Soạn kịch bản chi tiết trên <strong>Google Docs</strong> với các cột: Thời lượng · Phân cảnh · Voice-over/Thoại · Hình ảnh & hiệu ứng B-roll (00:00 – 00:45 Mở đầu; 00:45 – 02:15 Ứng dụng thực tế; Demo; Kết luận).</li>
          <li>Lưu trữ B-roll, ảnh minh hoạ và bản dựng video trên <strong>Google Drive</strong> dùng chung — phân thư mục theo nội dung, đặt tên tệp thống nhất.</li>
          <li>Họp <strong>Google Meet</strong> định kỳ để cả nhóm cùng chỉnh sửa kịch bản, cập nhật tiến độ và gỡ khó.</li>
        </ol>
      }
      tools={["Asana / Trello", "Google Docs", "Google Drive", "Google Meet"]}
      evidence={
        <div className="space-y-3">
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
          <div className="rounded-xl bg-gradient-to-br from-rose-50 to-fuchsia-50 p-4 text-xs">
            <div className="font-semibold text-plum mb-1">🎬 Kịch bản video — trích cấu trúc</div>
            <p>
              <strong>00:00 – 00:45 · Mở đầu:</strong> TV1 dẫn dắt tại khuôn viên trường, chèn infographic sự phát triển của AI.<br />
              <strong>00:45 – 02:15 · Ứng dụng thực tế:</strong> TV2 nói về Elsa Speak và các nền tảng tự học có AI định hướng lộ trình — quay màn hình các ứng dụng giáo dục phổ biến.<br />
              <strong>Demo &amp; Kết luận:</strong> TV4 thao tác prompt trên máy tính; TV5 phân tích lợi ích – thách thức tại Việt Nam; TV1 chốt vấn đề.
            </p>
          </div>
        </div>
      }
      analysis={
        <div className="space-y-2">
          {challenges.map((c) => (
            <div key={c.t} className="rounded-xl border border-border bg-card p-3">
              <div className="text-sm font-semibold text-plum">⚠️ {c.t}</div>
              <p className="mt-1 text-xs text-muted-foreground">✅ {c.s}</p>
            </div>
          ))}
        </div>
      }
      lesson={[
        "Công cụ hợp tác (Asana/Trello + Google Docs + Drive + Meet) giúp nhóm minh bạch hoá tiến độ, giảm rủi ro trùng lặp và bỏ sót nhiệm vụ.",
        "Làm việc song song trên Google Docs cùng với lịch sử phiên bản & bình luận giúp tổng hợp nhanh, hạn chế ghi đè.",
        "Lưu trữ tập trung trên Google Drive với quy tắc đặt tên & phân quyền giúp cả nhóm luôn dùng đúng phiên bản mới nhất.",
      ]}
      gallery={
        <EvidenceGallery
          items={[
            { label: "Google Meet — cả nhóm cùng chỉnh sửa kịch bản video", src: bai4Img43.url },
            { label: "Google Docs — tài liệu 'Công nghệ số (Giữa kì)' đã mở", src: bai4Img44.url },
            { label: "Kịch bản video: AI trong giáo dục tại Việt Nam", src: bai4Img45.url },
            { label: "Asana — Content calendar phân công 5 nhiệm vụ", src: bai4Img46.url },
          ]}
          file="KichBan_Video_Nhom.docx"
          fileUrl={bai4Doc.url}
          video={{ url: "https://youtu.be/YNjjYKzETfA?si=P8oMEMIb2eqw8iax", label: "Video sản phẩm nhóm — AI trong giáo dục tại Việt Nam" }}
        />

      }
    >
      <ReviewSection
        good={[
          "Phân công rõ 5 vai trò (Dẫn dắt · Chuyên gia 1 · Chuyên gia 2 · Người thực hành · Phân tích) cho từng thành viên",
          "Kịch bản chi tiết theo bảng Thời lượng – Phân cảnh – Voice-over – B-roll trên Google Docs",
          "Kết hợp nhịp nhàng Asana/Trello + Google Docs + Google Drive + Google Meet trong suốt dự án",
        ]}
        improve={[
          "Thành viên cần cập nhật trạng thái công việc trên Asana/Trello đều đặn hơn",
          "Chuẩn hoá quy tắc đặt tên tệp và phân thư mục trên Google Drive dùng chung",
          "Bổ sung thêm phân cảnh Demo & Kết luận có mốc thời lượng cụ thể như hai phân cảnh đầu",
        ]}
        takeaway={[
          "Công cụ số minh bạch hoá tiến độ, giảm rủi ro bỏ sót đầu việc",
          "Chỉnh sửa đồng thời + lịch sử phiên bản giúp nhóm biên soạn nhanh và hạn chế sai sót",
          "Lưu trữ tập trung theo quy tắc giúp mọi người luôn dùng đúng phiên bản mới nhất",
        ]}
        aiUse={[
          "Dùng ChatGPT gợi ý cấu trúc kịch bản video 4 phân cảnh",
          "Không dùng AI thay thế phần đóng góp của mỗi thành viên",
        ]}
        commit={[
          "Kịch bản và bảng phân công là sản phẩm của cả nhóm",
          "Mỗi thành viên chịu trách nhiệm phần việc của mình",
          "Ghi rõ nguồn khi tham khảo tài liệu bên ngoài",
        ]}
      />
    </ProjectShell>
  );
}


/* ---------- Dự án 5 ---------- */
function Project5() {
  const steps = [
    { t: "ChatGPT", ai: "Xây dựng dàn ý logic, diễn đạt mạch lạc", me: "Chỉnh giọng văn, bổ sung ví dụ Việt Nam" },
    { t: "Gemini", ai: "Cập nhật số liệu, tra cứu thông tin mới", me: "Kiểm chứng lại từ nguồn gốc" },
    { t: "Claude", ai: "Phân tích văn bản dài, diễn đạt tự nhiên", me: "Rút gọn, biên tập cho phù hợp bài thuyết trình" },
    { t: "DALL·E", ai: "Vẽ minh họa 4 góc nhìn về “Tồn tại xã hội”", me: "Chọn ảnh phù hợp, chỉnh bố cục trong Canva" },
    { t: "Yeri AI", ai: "Tạo hình ảnh nhanh theo mô tả", me: "Sửa lỗi chính tả trong ảnh, chọn khung 16:9" },
    { t: "Canva", ai: "Đề xuất mẫu slide, tự động phối màu", me: "Tùy biến theo phong cách cá nhân" },
  ];
  return (
    <ProjectShell
      id="task-5"
      tag="Bài tập 5 · Mục 5.4"
      icon="🎬"
      title="Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung học tập"
      skills={["ChatGPT", "Gemini", "Claude", "DALL·E", "Canva", "So sánh công cụ"]}
      objective="Ứng dụng 3 nhóm AI tạo sinh (văn bản – hình ảnh – thiết kế) để chuẩn bị bài học chủ đề “Tồn tại xã hội & Ý thức xã hội” trong Triết học Mác – Lênin."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Chọn chủ đề: <em>“Tồn tại xã hội và Ý thức xã hội — Mối quan hệ biện chứng · Liên hệ Việt Nam”</em>.</li>
          <li>Dùng 3 AI văn bản (<strong>ChatGPT, Gemini, Claude</strong>) cùng đặt một câu hỏi để so sánh cách trình bày của từng công cụ.</li>
          <li>Dùng 2 AI hình ảnh (<strong>DALL·E, Yeri AI</strong>) tạo 4 minh hoạ khung 16:9 theo 4 góc nhìn về “Tồn tại xã hội”.</li>
          <li>Dùng <strong>Canva AI</strong> thiết kế slide, phối hợp ảnh minh hoạ từ DALL·E; tham khảo thêm Adobe Firefly cho phần đồ hoạ chuyên sâu.</li>
          <li>Biên tập lại toàn bộ, kiểm chứng thông tin, ghi rõ công cụ AI đã dùng và chịu trách nhiệm về sản phẩm cuối.</li>
        </ol>
      }
      tools={["ChatGPT", "Google Gemini", "Claude", "DALL·E", "Yeri AI", "Canva AI", "Adobe Firefly"]}
      evidence={
        <div className="space-y-3">
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-xl bg-sky/25 p-4 text-xs">
              <div className="font-semibold text-plum">📝 AI văn bản</div>
              <p className="mt-1">
                <strong>ChatGPT</strong> dựng dàn ý logic, mạch lạc, dễ chỉnh sửa.<br />
                <strong>Gemini</strong> tra cứu & cập nhật thông tin mới nhanh.<br />
                <strong>Claude</strong> diễn đạt tự nhiên, tốt cho biên tập câu văn dài.
              </p>
            </div>
            <div className="rounded-xl bg-blush/20 p-4 text-xs">
              <div className="font-semibold text-plum">🖼️ AI hình ảnh</div>
              <p className="mt-1">
                <strong>DALL·E</strong> — bố cục hài hoà, hầu như không lỗi chính tả trong ảnh, dùng trực tiếp được.<br />
                <strong>Yeri AI</strong> — tạo ảnh nhanh nhưng chữ chèn hay sai/thiếu ký tự, cần chỉnh sửa lại.
              </p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-rose-50 to-fuchsia-50 p-4 text-xs">
              <div className="font-semibold text-plum">🎨 AI thiết kế</div>
              <p className="mt-1">
                <strong>Canva AI</strong> — nhiều mẫu đẹp, thao tác đơn giản, phù hợp bài thuyết trình.<br />
                <strong>Adobe Firefly</strong> — hiệu ứng cao cấp, hợp dự án đồ hoạ chuyên sâu (một số tính năng trả phí).
              </p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-4 text-xs">
            <div className="font-semibold text-plum mb-1">⚖️ Vấn đề đạo đức khi dùng AI</div>
            <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
              <li>Dùng AI như công cụ hỗ trợ, không sao chép hay phụ thuộc hoàn toàn vào nội dung do AI tạo ra.</li>
              <li>Kiểm chứng thông tin từ nguồn đáng tin cậy trước khi đưa vào bài học/nghiên cứu.</li>
              <li>Minh bạch khi được yêu cầu; tôn trọng bản quyền hình ảnh và tài liệu tham khảo.</li>
              <li>Chịu trách nhiệm về sản phẩm cuối, đảm bảo có tư duy và đóng góp cá nhân.</li>
            </ul>
          </div>
        </div>
      }
      analysis={
        <div className="space-y-3">
          <p>
            Quy trình chia rõ <strong>“AI làm gì – Con người làm gì”</strong> ở từng công cụ, đảm bảo sản phẩm cuối
            luôn có dấu ấn biên tập cá nhân và kiểm chứng học thuật.
          </p>
          <div className="overflow-hidden rounded-xl border border-border">
            <table className="w-full text-xs">
              <thead className="bg-secondary">
                <tr>
                  <th className="px-3 py-2 text-left">Công cụ</th>
                  <th className="px-3 py-2 text-left">AI hỗ trợ</th>
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
        "Mỗi AI có thế mạnh riêng — biết chọn đúng công cụ cho đúng tác vụ.",
        "AI tạo sinh là trợ lý, không thay thế vai trò biên tập và kiểm chứng của người học.",
        "Luôn ghi rõ công cụ AI đã dùng để đảm bảo minh bạch học thuật.",
      ]}
      gallery={
        <EvidenceGallery
          items={[
            { label: "ChatGPT — dàn ý bài thuyết trình 'Tồn tại xã hội trong triết học'", src: bai5Img49.url },
            { label: "Yeri AI — sinh ảnh minh hoạ chủ đề 'Tồn tại xã hội trong môn triết học'", src: bai5Img50.url },
            { label: "Phân tích ý định & kế hoạch thực hiện 4 ảnh minh hoạ (Intent + Task Planning)", src: bai5Img51.url },
            { label: "Gemini — tổng hợp 'Tồn tại xã hội & ý thức xã hội' trong triết học Mác – Lênin", src: bai5Img52.url },
          ]}
          file="SoSanh_AI_VanBan-HinhAnh.pdf"
        />
      }
    >
      <ReviewSection
        good={[
          "So sánh song song 3 AI văn bản + 2 AI ảnh + 2 AI thiết kế",
          "Chỉ ra rõ ưu – nhược điểm cụ thể của từng công cụ",
          "Kết hợp AI tạo sinh với bước biên tập cá nhân",
        ]}
        improve={[
          "Thử thêm Midjourney, Adobe Firefly để mở rộng phạm vi so sánh",
          "Đối chiếu chi phí giữa các phiên bản miễn phí và trả phí",
        ]}
        takeaway={[
          "Mỗi AI có thế mạnh riêng — biết chọn đúng công cụ cho đúng việc",
          "Hình ảnh AI vẫn cần con người kiểm chứng chi tiết & lỗi chính tả",
          "Sản phẩm chất lượng luôn cần bước biên tập cuối của người dùng",
        ]}
        aiUse={[
          "Dùng ChatGPT / Gemini / Claude sinh nội dung Triết Mác – Lênin",
          "Dùng DALL·E và Yeri AI tạo ảnh minh họa 'Tồn tại xã hội'",
          "Dùng Canva AI phối slide và bố cục trình bày",
        ]}
        commit={[
          "Ghi rõ công cụ AI đã dùng cho từng phần trong sản phẩm",
          "Nội dung cuối cùng đã được em biên tập và kiểm chứng lại",
          "Chịu trách nhiệm hoàn toàn về sản phẩm cuối cùng",
        ]}
      />
    </ProjectShell>
  );
}


/* ---------- Dự án 6 ---------- */
function Project6() {
  const issues = [
    { i: "Ranh giới hỗ trợ hợp lý ↔ gian lận học thuật", s: "Chỉ dùng AI để gợi ý ý tưởng và chỉnh ngôn ngữ, không để AI làm toàn bộ bài." },
    { i: "Quyền sở hữu trí tuệ & trích dẫn", s: "Ghi rõ việc dùng AI khi có đóng góp đáng kể; kiểm chứng lại thông tin qua nguồn tin cậy." },
    { i: "Tác động đến tư duy phản biện", s: "Dùng AI ở bước brainstorm, tự phân tích & kết luận để giữ kỹ năng tư duy." },
    { i: "Thông tin sai / hallucination", s: "Đối chiếu với ≥ 2 nguồn học thuật (IMF, OECD, Cambridge…) trước khi trích dẫn." },
    { i: "Quyền riêng tư & dữ liệu cá nhân", s: "Không nhập họ tên, mã sinh viên, tài liệu nội bộ vào công cụ AI." },
    { i: "Phụ thuộc AI, thui chột kỹ năng viết", s: "Duy trì thói quen tự viết bản nháp đầu tiên trước khi tham khảo AI." },
  ];
  const info4 = [
    { t: "Hiểu rõ công cụ AI", d: "Biết khả năng & giới hạn của mô hình ngôn ngữ, nhận biết rủi ro sai sót." },
    { t: "Minh bạch & trích dẫn", d: "Khai báo khi dùng AI, trích nguồn thông tin AI tạo ra theo quy định." },
    { t: "Tư duy phản biện là chính", d: "Kiểm tra kỹ, đánh giá tính xác thực & phù hợp của thông tin AI." },
    { t: "Sáng tạo nội dung gốc", d: "AI là trợ lý; kết hợp ý tưởng riêng, phân tích cá nhân và lập luận sâu." },
  ];
  return (
    <ProjectShell
      id="task-6"
      tag="Bài tập 6 · Mục 6.4"
      icon="🛡️"
      title="Sử dụng AI có trách nhiệm — Bài thuyết trình “Vai trò của AI trong Giáo dục Đại học”"
      skills={["AI Ethics", "Đạo đức học thuật", "Infographic", "Tự phản biện"]}
      objective="Chuẩn bị bài thuyết trình 10 phút về vai trò AI trong giáo dục đại học, đồng thời xây dựng bộ 7 nguyên tắc cá nhân và infographic “Sử dụng AI có trách nhiệm trong học thuật”."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Dùng ChatGPT để lập dàn ý 3 phần (Mở đầu · 8’ nội dung · Kết luận).</li>
          <li>Dùng prompt bổ sung để lấy 5 ví dụ thực tế sinh viên ứng dụng AI.</li>
          <li>Đánh giá, chỉnh sửa và tích hợp đầu ra AI — bổ sung ví dụ Việt Nam, kiểm chứng qua giáo trình.</li>
          <li>Phân tích 3 vấn đề đạo đức: ranh giới hỗ trợ, sở hữu trí tuệ, tác động đến tư duy.</li>
          <li>Tổng hợp thành 7 nguyên tắc cá nhân + infographic 4 bước.</li>
        </ol>
      }
      tools={["ChatGPT", "Chính sách nhà trường", "UNESCO AI Guidance", "Canva (Infographic)"]}
      evidence={
        <div className="space-y-4">

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
          <div className="rounded-2xl border border-border p-4">
            <div className="mb-3 text-sm font-semibold text-plum">🖼️ Infographic “Sử dụng AI có trách nhiệm” — 4 bước</div>
            <div className="grid gap-2 sm:grid-cols-2">
              {info4.map((x, i) => (
                <div key={x.t} className="rounded-xl bg-gradient-to-br from-violet-50 to-fuchsia-50 p-3 text-xs">
                  <div className="font-semibold text-plum">{i + 1}. {x.t}</div>
                  <p className="mt-1 text-muted-foreground">{x.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs font-semibold text-plum">
              → HƯỚNG TỚI THÀNH CÔNG HỌC THUẬT BỀN VỮNG VÀ CHÍNH TRỰC
            </p>
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
        "AI mang lại cơ hội lớn nhưng cũng kèm rủi ro đạo đức học thuật.",
        "Trách nhiệm số là kỹ năng bắt buộc trong thời đại AI.",
        "Sử dụng AI có trách nhiệm bảo vệ tính trung thực và sự sáng tạo cá nhân.",
      ]}
      gallery={
        <EvidenceGallery
          items={[
            "Slide bài thuyết trình ‘Vai trò của AI trong GDĐH’",
            "ChatGPT: dàn ý 3 phần cho bài thuyết trình",
            "Infographic 4 bước ‘Sử dụng AI có trách nhiệm’ trên Canva",
            "Trích dẫn hướng dẫn của UNESCO về AI trong GD",
            "Bảng đối chiếu 6 vấn đề đạo đức & giải pháp",
          ]}
          file="ThuyetTrinh_AI_GDDH.pptx"
        />
      }
    >
      <ReviewSection
        good={[
          "Xây dựng bộ 7 nguyên tắc cá nhân sử dụng AI rõ ràng",
          "Phân tích 6 vấn đề đạo đức kèm giải pháp cụ thể",
          "Thiết kế infographic 4 bước dễ nhớ, dễ chia sẻ",
        ]}
        improve={[
          "Bổ sung ví dụ vi phạm học thuật thực tế để minh hoạ",
          "Cập nhật chính sách AI mới nhất của nhà trường và UNESCO",
        ]}
        takeaway={[
          "Trách nhiệm số bảo vệ sự trung thực trong học thuật",
          "AI là trợ lý — không thay thế được tư duy phản biện",
          "Minh bạch khi dùng AI là chuẩn mực bắt buộc, không phải tuỳ chọn",
        ]}
        aiUse={[
          "Dùng ChatGPT lập dàn ý bài thuyết trình 10 phút",
          "Dùng AI gợi ý 5 ví dụ thực tế sinh viên ứng dụng AI",
        ]}
        commit={[
          "Đã kiểm chứng thông tin AI bằng giáo trình và nguồn học thuật",
          "Toàn bộ nội dung cuối đã được em chỉnh sửa và biên tập lại",
          "Chịu trách nhiệm hoàn toàn về sản phẩm bài học",
        ]}
      />
    </ProjectShell>
  );
}


/* ============================================================
 *  EVIDENCE GALLERY
 * ============================================================ */

/* ============================================================
 *  SKILLS
 * ============================================================ */
function Skills() {
  const icons = ["📁", "🔍", "🛡️", "💬", "👥", "💡", "🤖", "🎯"];
  const left = SKILLS.slice(0, 4).map((s, i) => ({ ...s, icon: icons[i], no: i + 1 }));
  const right = SKILLS.slice(4).map((s, i) => ({ ...s, icon: icons[i + 4], no: i + 5 }));

  const Pod = ({
    s,
    side,
  }: {
    s: { name: string; level: number; use: string; icon: string; no: number };
    side: "left" | "right";
  }) => (
    <div
      className={`group flex items-center gap-4 rounded-full border border-violet-200/70 bg-white/80 p-3 pr-5 shadow-[0_8px_30px_-12px_rgba(139,92,246,0.35)] backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-12px_rgba(139,92,246,0.55)] ${
        side === "right" ? "md:flex-row-reverse md:pl-5 md:pr-3" : ""
      }`}
    >
      <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 border-violet-300 bg-gradient-to-br from-violet-50 to-white text-2xl text-violet-700 shadow-inner">
        {s.icon}
      </div>
      <div className={`min-w-0 flex-1 ${side === "right" ? "md:text-right" : ""}`}>
        <div
          className={`flex items-baseline gap-2 ${side === "right" ? "md:justify-end" : ""}`}
        >
          <span className="font-display text-2xl font-black text-violet-300">
            {String(s.no).padStart(2, "0")}
          </span>
          <h4 className="font-display text-base font-bold leading-tight text-plum">
            {s.name}
          </h4>
          <span className="ml-auto text-sm font-bold text-violet-600 md:ml-2">
            {s.level}%
          </span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-violet-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400"
            style={{ width: `${s.level}%` }}
          />
        </div>
        <p className="mt-1.5 text-xs text-muted-foreground">
          <span className="font-semibold text-plum">Ứng dụng: </span>
          {s.use}
        </p>
      </div>
    </div>
  );

  return (
    <Section id="ky-nang" eyebrow="Skills Matrix" title="Bảng tổng hợp kỹ năng đạt được">
      <p className="reveal -mt-4 mb-10 text-center text-muted-foreground">
        Tổng kết năng lực theo các lĩnh vực trọng tâm
      </p>

      <div className="relative">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_auto_1fr]">
          <div className="flex flex-col gap-6">
            {left.map((s) => (
              <Pod key={s.name} s={s} side="left" />
            ))}
          </div>

          <div className="reveal relative mx-auto my-6 grid place-items-center lg:my-0">
            <div className="absolute inset-0 -m-8 rounded-full border border-dashed border-violet-300/60" />
            <div className="absolute inset-0 -m-16 rounded-full border border-dashed border-violet-200/50" />
            <div className="relative grid h-56 w-56 place-items-center rounded-full bg-gradient-to-br from-violet-200 via-fuchsia-100 to-violet-100 shadow-[0_20px_60px_-20px_rgba(139,92,246,0.6)]">
              <div className="grid h-44 w-44 place-items-center rounded-full bg-white text-center">
                <div>
                  <div className="text-4xl">📈</div>
                  <div className="mt-2 font-display text-sm font-black tracking-wider text-plum">
                    NĂNG LỰC
                    <br />
                    TOÀN DIỆN
                  </div>
                  <div className="mt-1 text-violet-400">• • •</div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {right.map((s) => (
              <Pod key={s.name} s={s} side="right" />
            ))}
          </div>
        </div>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3 rounded-full border border-violet-200 bg-white/70 px-6 py-4 text-sm font-semibold text-plum backdrop-blur">
          <span className="inline-flex items-center gap-2">🎯 Không ngừng học hỏi</span>
          <span className="text-violet-300">|</span>
          <span className="inline-flex items-center gap-2">🧠 Ứng dụng thông minh</span>
          <span className="text-violet-300">|</span>
          <span className="inline-flex items-center gap-2">🌱 Phát triển bền vững</span>
        </div>
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
            <li>Sinh viên: <span className="text-foreground">Dương Thị Thu Thảo</span><br />Lớp: KTQT6</li>
            <li>Khoa: <span className="text-foreground">Kinh Tế Quốc Tế</span></li>
            <li>Môn: Nhập môn Công nghệ số & Ứng dụng AI</li>
            <li>Năm học: 2025 – 2026</li>
          </ul>
        </div>
        <div className="text-sm">
          <div className="mb-2 font-semibold text-plum">Liên hệ</div>
          <ul className="space-y-1.5 text-muted-foreground">
            <li>Email: <span className="text-foreground">25051054@vnu.edu.vn</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border px-6 py-5 text-center text-xs text-muted-foreground">
        © 2026 · Portfolio cá nhân môn công nghệ số
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
