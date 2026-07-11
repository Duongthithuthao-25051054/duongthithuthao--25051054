import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: PortfolioPage,
  head: () => ({
    meta: [
      { title: "Portfolio · NMCNS-AI — Hồ sơ năng lực số cá nhân" },
      {
        name: "description",
        content:
          "Hồ sơ dạng nhật ký nghiên cứu: 6 dự án học tập, minh chứng, ma trận kỹ năng và bộ nguyên tắc AI có trách nhiệm.",
      },
    ],
  }),
});

/* ============================================================
 *  DATA
 * ============================================================ */
const TASKS = [
  {
    id: "task-1",
    code: "T-01",
    title: "Thao tác cơ bản với tệp tin & thư mục",
    short:
      "Xây dựng cấu trúc thư mục khoa học và quy tắc đặt tên nhất quán cho toàn bộ tài liệu học tập.",
    progress: 100,
    domain: "Data hygiene",
    skills: ["Quản lý dữ liệu", "Đặt tên file", "Cloud Drive"],
  },
  {
    id: "task-2",
    code: "T-02",
    title: "Tìm kiếm & đánh giá thông tin học thuật",
    short:
      "Vận dụng hơn 6 toán tử tìm kiếm nâng cao và bảng đánh giá độ tin cậy đa nguồn.",
    progress: 100,
    domain: "Information literacy",
    skills: ["Search operators", "Đánh giá nguồn", "Google Scholar"],
  },
  {
    id: "task-3",
    code: "T-03",
    title: "Viết Prompt hiệu quả cho tác vụ học tập",
    short:
      "So sánh prompt sơ khai và prompt cải tiến theo khung Vai trò – Bối cảnh – Yêu cầu – Định dạng.",
    progress: 100,
    domain: "Prompt engineering",
    skills: ["R-C-T-F", "Tư duy phản biện", "ChatGPT/Gemini"],
  },
  {
    id: "task-4",
    code: "T-04",
    title: "Công cụ hợp tác trực tuyến cho dự án nhóm",
    short:
      "Bảng Kanban trên Trello/Notion với phân công, hạn chót, trạng thái và ghi chú phản hồi.",
    progress: 95,
    domain: "Team ops",
    skills: ["Trello/Notion", "Teamwork", "Kanban"],
  },
  {
    id: "task-5",
    code: "T-05",
    title: "AI tạo sinh hỗ trợ sáng tạo nội dung",
    short:
      "Quy trình 6 bước sản xuất video giải thích ngắn kết hợp AI viết kịch bản, tạo ảnh và giọng đọc.",
    progress: 90,
    domain: "Generative media",
    skills: ["Canva", "CapCut", "DALL·E", "AI voice"],
  },
  {
    id: "task-6",
    code: "T-06",
    title: "Sử dụng AI có trách nhiệm trong học tập",
    short:
      "Bộ 7 nguyên tắc cá nhân và phân tích 6 vấn đề đạo đức AI kèm giải pháp cụ thể.",
    progress: 100,
    domain: "AI ethics",
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
 *  HOOK
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
      { threshold: 0.1 },
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
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(
        d.toISOString().replace("T", " ").slice(0, 19) + " UTC",
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="min-h-screen">
      <Nav />
      <Ticker />
      <Hero now={now} />
      <About />
      <Overview />
      <Projects />
      <Evidence />
      <Skills />
      <Principles />
      <Conclusion />
      <Footer />
    </div>
  );
}

/* ============================================================
 *  NAV
 * ============================================================ */
const NAV = [
  { href: "#gioi-thieu", n: "01", label: "Hồ sơ" },
  { href: "#tong-quan", n: "02", label: "Chỉ mục" },
  { href: "#du-an", n: "03", label: "Dự án" },
  { href: "#minh-chung", n: "04", label: "Minh chứng" },
  { href: "#ky-nang", n: "05", label: "Ma trận" },
  { href: "#nguyen-tac", n: "06", label: "Nguyên tắc" },
  { href: "#tong-ket", n: "07", label: "Tổng kết" },
];

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-paper/90 backdrop-blur">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-6 px-6 py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-8 w-8 place-items-center border border-ink bg-ink text-paper mono text-xs">
            NM
          </span>
          <div className="leading-tight">
            <div className="mono text-[10px] tracking-[0.2em] text-muted-foreground">
              LAB · NMCNS-AI · 2026
            </div>
            <div className="font-display text-lg italic">Portfolio</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center justify-center gap-1">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group flex items-center gap-1.5 px-3 py-1.5 mono text-xs hover:bg-ink hover:text-paper transition-colors"
            >
              <span className="text-signal group-hover:text-acid">§{l.n}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden md:inline mono text-[10px] text-muted-foreground">
            v.1.0 / cuoi-ky
          </span>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden mono text-xs border border-ink px-3 py-1.5"
          >
            {open ? "×" : "≡"} MENU
          </button>
        </div>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-ink/15 bg-paper px-6 py-3">
          {NAV.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 py-2 mono text-xs"
            >
              <span className="text-signal">§{l.n}</span> {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Ticker() {
  const items = [
    "◉ SEMESTER LOG · 2025–2026",
    "◈ 06 DỰ ÁN HOÀN THÀNH",
    "◇ 08 KỸ NĂNG SỐ ĐO LƯỜNG",
    "◆ 07 NGUYÊN TẮC AI CÁ NHÂN",
    "◉ TRUNG BÌNH HOÀN THÀNH · 96%",
    "◈ NHẬP MÔN CÔNG NGHỆ SỐ & ỨNG DỤNG TRÍ TUỆ NHÂN TẠO",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-ink/15 bg-ink text-paper">
      <div className="ticker-track flex whitespace-nowrap py-1.5">
        {doubled.map((t, i) => (
          <span key={i} className="mono text-[11px] px-6 tracking-widest">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ============================================================
 *  HERO
 * ============================================================ */
function Hero({ now }: { now: string }) {
  return (
    <section id="top" className="relative border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <div className="flex items-center gap-3 mono text-[11px] text-muted-foreground mb-8">
              <span className="h-2 w-2 rounded-full bg-mark animate-pulse" />
              <span>FILE · portfolio.md</span>
              <span className="text-ink/30">/</span>
              <span>{now || "--"}</span>
            </div>

            <div className="mono text-xs text-signal mb-4">§00 — HỒ SƠ NĂNG LỰC SỐ</div>
            <h1 className="font-display text-6xl md:text-8xl leading-[0.95] tracking-tight">
              Nhật ký{" "}
              <em className="text-signal">nghiên cứu</em>
              <br />
              về quá trình{" "}
              <span className="ink-underline">học tập số</span>{" "}
              <span className="cursor-blink" />
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/75">
              Portfolio cá nhân được trình bày dưới dạng một hồ sơ nghiên cứu:
              6 dự án, minh chứng có kiểm chứng, ma trận kỹ năng đo lường được và
              bộ nguyên tắc sử dụng AI có trách nhiệm cho môn{" "}
              <strong>Nhập môn Công nghệ số & Ứng dụng Trí tuệ nhân tạo</strong>.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#du-an"
                className="mono text-xs bg-ink text-paper px-5 py-3 hover:bg-signal transition-colors"
              >
                → XEM DỰ ÁN
              </a>
              <a
                href="#minh-chung"
                className="mono text-xs border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
              >
                MINH CHỨNG
              </a>
              <a
                href="#tong-ket"
                className="mono text-xs border border-ink px-5 py-3 hover:bg-ink hover:text-paper transition-colors"
              >
                TỔNG KẾT
              </a>
            </div>
          </div>

          {/* Data panel */}
          <div className="reveal">
            <div className="hairline bg-card">
              <div className="flex items-center justify-between border-b border-ink/15 px-4 py-2 mono text-[10px] uppercase tracking-widest">
                <span>Fig.00 — Snapshot</span>
                <span className="text-signal">◉ live</span>
              </div>
              <div className="p-6 space-y-6">
                <StatRow label="Dự án hoàn thành" value="06 / 06" ratio={1} />
                <StatRow label="Kỹ năng đo lường" value="08" ratio={0.88} />
                <StatRow label="Nguyên tắc AI" value="07" ratio={1} />
                <StatRow label="Điểm tự đánh giá TB" value="9.1 / 10" ratio={0.91} />

                {/* mini bar chart */}
                <div className="pt-4 border-t border-ink/15">
                  <div className="mono text-[10px] uppercase tracking-widest mb-3 text-muted-foreground">
                    Tiến độ theo dự án
                  </div>
                  <div className="flex items-end gap-1.5 h-24">
                    {TASKS.map((t) => (
                      <div key={t.id} className="flex-1 flex flex-col items-center gap-1">
                        <div
                          className="w-full bg-ink relative"
                          style={{ height: `${t.progress}%` }}
                        >
                          <span className="absolute -top-4 left-1/2 -translate-x-1/2 mono text-[9px]">
                            {t.progress}
                          </span>
                        </div>
                        <span className="mono text-[9px] text-muted-foreground">
                          {t.code.replace("T-", "")}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatRow({ label, value, ratio }: { label: string; value: string; ratio: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="mono text-[11px] uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        <span className="font-display text-2xl">{value}</span>
      </div>
      <div className="h-1 bg-ink/10 relative">
        <div className="absolute inset-y-0 left-0 bg-signal" style={{ width: `${ratio * 100}%` }} />
      </div>
    </div>
  );
}

/* ============================================================
 *  SECTION helper
 * ============================================================ */
function Section({
  id,
  n,
  eyebrow,
  title,
  intro,
  children,
}: {
  id: string;
  n: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-ink/15">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="reveal grid gap-8 md:grid-cols-[240px_1fr] mb-14">
          <div className="border-l-2 border-signal pl-4">
            <div className="mono text-xs text-signal">§{n}</div>
            <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
              {eyebrow}
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              {title}
            </h2>
            {intro && (
              <p className="mt-4 max-w-2xl text-ink/75 leading-relaxed">{intro}</p>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

/* ============================================================
 *  ABOUT
 * ============================================================ */
function About() {
  return (
    <Section
      id="gioi-thieu"
      n="01"
      eyebrow="Profile / Metadata"
      title="Hồ sơ chủ thể nghiên cứu"
      intro="Portfolio này là tài liệu tự sự về quá trình học tập — không chỉ trưng bày sản phẩm, mà còn ghi lại cách chủ thể suy nghĩ, làm việc, mắc lỗi và tiến bộ khi tiếp cận công nghệ số và AI."
    >
      <div className="grid gap-0 md:grid-cols-[1fr_1.2fr] hairline bg-card">
        {/* Identity card */}
        <div className="p-8 border-b md:border-b-0 md:border-r border-ink/15">
          <div className="flex items-start gap-6">
            <div className="grid h-24 w-24 shrink-0 place-items-center bg-ink text-paper font-display text-4xl italic">
              SV
            </div>
            <div className="flex-1">
              <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Subject ID · #NMCNS-26
              </div>
              <h3 className="mt-1 font-display text-3xl">[Điền tên của bạn]</h3>
              <div className="mono text-xs mt-2 text-muted-foreground">
                Sinh viên · [Điền ngành học]
              </div>
            </div>
          </div>

          <dl className="mt-8 divide-y divide-ink/15 border-t border-ink/15">
            <MetaRow k="Trường / Lớp" v="[Điền trường / lớp]" />
            <MetaRow k="Môn học" v="Nhập môn CNS & Ứng dụng AI" />
            <MetaRow k="Năm học" v="2025 – 2026" />
            <MetaRow k="Email" v="[email@example.com]" />
            <MetaRow k="Phiên bản" v="v1.0 · cuối kỳ" />
          </dl>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {["#học-công-nghệ-số", "#khám-phá-AI", "#nội-dung-số", "#dữ-liệu", "#teamwork"].map((s) => (
              <span key={s} className="mono text-[10px] border border-ink/30 px-2 py-1">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="p-8">
          <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
            Fig.01 — Mục tiêu Portfolio
          </div>
          <div className="grid gap-0">
            {[
              { k: "01", t: "Hệ thống hóa", d: "Tập trung toàn bộ bài tập cuối kỳ trong một không gian số duy nhất." },
              { k: "02", t: "Chứng minh năng lực", d: "Thể hiện khả năng sử dụng công cụ số và AI trong học tập." },
              { k: "03", t: "Lưu trữ & chia sẻ", d: "Dễ dàng truy cập, chia sẻ và tiếp tục phát triển trong tương lai." },
              { k: "04", t: "Phản tư bản thân", d: "Rèn luyện kỹ năng phân tích, phản biện và tự đánh giá." },
            ].map((g) => (
              <div
                key={g.k}
                className="group grid grid-cols-[60px_1fr] gap-4 border-t border-ink/15 py-5 hover:bg-ink hover:text-paper transition-colors"
              >
                <div className="mono text-2xl text-signal group-hover:text-acid">{g.k}</div>
                <div>
                  <div className="font-display text-xl">{g.t}</div>
                  <div className="text-sm mt-1 text-ink/70 group-hover:text-paper/80">{g.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function MetaRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-3 py-2.5">
      <dt className="mono text-[10px] uppercase tracking-widest text-muted-foreground pt-0.5">
        {k}
      </dt>
      <dd className="text-sm">{v}</dd>
    </div>
  );
}

/* ============================================================
 *  OVERVIEW — index table
 * ============================================================ */
function Overview() {
  return (
    <Section
      id="tong-quan"
      n="02"
      eyebrow="Index / Table of Contents"
      title="Chỉ mục 6 nhiệm vụ"
      intro="Sáu nhiệm vụ được tổ chức theo trình tự phát triển kỹ năng: từ nền tảng quản lý dữ liệu, tìm kiếm và đánh giá thông tin, cho đến khai thác AI, hợp tác trực tuyến và sử dụng AI có trách nhiệm."
    >
      <div className="hairline overflow-x-auto bg-card">
        <table className="w-full text-sm min-w-[720px]">
          <thead className="border-b border-ink/15">
            <tr className="mono text-[10px] uppercase tracking-widest text-muted-foreground text-left">
              <th className="px-4 py-3 w-16">Code</th>
              <th className="px-4 py-3">Tiêu đề</th>
              <th className="px-4 py-3">Lĩnh vực</th>
              <th className="px-4 py-3 w-56">Tiến độ</th>
              <th className="px-4 py-3 w-24"></th>
            </tr>
          </thead>
          <tbody>
            {TASKS.map((t) => (
              <tr key={t.id} className="border-b border-ink/10 hover:bg-ink/5">
                <td className="px-4 py-4 mono text-signal font-medium">{t.code}</td>
                <td className="px-4 py-4">
                  <div className="font-display text-lg leading-tight">{t.title}</div>
                  <div className="text-xs text-ink/60 mt-1 max-w-xl">{t.short}</div>
                </td>
                <td className="px-4 py-4">
                  <span className="mono text-[10px] uppercase border border-ink/30 px-2 py-1">
                    {t.domain}
                  </span>
                </td>
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-1 bg-ink/10 relative">
                      <div className="absolute inset-y-0 left-0 bg-ink" style={{ width: `${t.progress}%` }} />
                    </div>
                    <span className="mono text-xs w-10 text-right">{t.progress}%</span>
                  </div>
                </td>
                <td className="px-4 py-4 text-right">
                  <a href={`#${t.id}`} className="mono text-xs underline underline-offset-4 decoration-signal hover:text-signal">
                    open ↗
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Section>
  );
}

/* ============================================================
 *  PROJECTS
 * ============================================================ */
function Projects() {
  return (
    <Section
      id="du-an"
      n="03"
      eyebrow="Case Studies"
      title="Sáu dự án học tập"
      intro="Mỗi dự án được trình bày như một mục nghiên cứu ngắn: mục tiêu, phương pháp, minh chứng, phân tích và bài học rút ra."
    >
      <div className="space-y-14">
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

/* ---------- Project shell ---------- */
function ProjectShell({
  id,
  code,
  tag,
  title,
  objective,
  process,
  tools,
  evidence,
  analysis,
  lesson,
  skills,
}: {
  id: string;
  code: string;
  tag: string;
  title: string;
  objective: string;
  process: React.ReactNode;
  tools: string[];
  evidence: React.ReactNode;
  analysis: React.ReactNode;
  lesson: string[];
  skills: string[];
}) {
  return (
    <article id={id} className="reveal scroll-mt-24 hairline bg-card">
      <header className="grid grid-cols-[80px_1fr] border-b border-ink/15">
        <div className="grid place-items-center border-r border-ink/15 bg-ink text-paper mono text-xs">
          {code}
        </div>
        <div className="p-6">
          <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {tag}
          </div>
          <h3 className="mt-1 font-display text-3xl md:text-4xl leading-tight">
            {title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {skills.map((s) => (
              <span key={s} className="mono text-[10px] border border-ink/30 px-2 py-1">
                {s}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="grid gap-0 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink/15">
        <div className="p-6 md:p-8 space-y-6">
          <Block label="01 · Mục tiêu">{objective}</Block>
          <Block label="02 · Quá trình">{process}</Block>
          <Block label="03 · Công cụ">
            <div className="flex flex-wrap gap-1.5">
              {tools.map((t) => (
                <span key={t} className="mono text-[10px] bg-ink text-paper px-2 py-1">
                  {t}
                </span>
              ))}
            </div>
          </Block>
        </div>
        <div className="p-6 md:p-8 space-y-6">
          <Block label="04 · Minh chứng">{evidence}</Block>
          <Block label="05 · Phân tích">{analysis}</Block>
          <Block label="06 · Bài học">
            <ul className="space-y-2 text-sm">
              {lesson.map((l, i) => (
                <li key={i} className="grid grid-cols-[20px_1fr] gap-2">
                  <span className="mono text-signal">→</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>
    </article>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mono text-[10px] uppercase tracking-widest text-signal border-l-2 border-signal pl-2 mb-2">
        {label}
      </div>
      <div className="text-sm leading-relaxed text-ink/85">{children}</div>
    </div>
  );
}

function EvidencePlaceholder({ label }: { label: string }) {
  return (
    <div className="relative border border-dashed border-ink/40 bg-ink/5 aspect-video grid place-items-center text-center p-4">
      <div>
        <div className="mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Fig · {label}
        </div>
        <div className="mono text-[10px] text-muted-foreground mt-1">
          [ Thay bằng minh chứng thật ]
        </div>
      </div>
      <span className="absolute top-1 left-1 mono text-[9px] text-muted-foreground">
        ┌
      </span>
      <span className="absolute top-1 right-1 mono text-[9px] text-muted-foreground">
        ┐
      </span>
      <span className="absolute bottom-1 left-1 mono text-[9px] text-muted-foreground">
        └
      </span>
      <span className="absolute bottom-1 right-1 mono text-[9px] text-muted-foreground">
        ┘
      </span>
    </div>
  );
}

/* ---------- P1 ---------- */
function Project1() {
  return (
    <ProjectShell
      id="task-1"
      code="T-01"
      tag="Bài tập 1 · Mục 1.4"
      title="Thao tác cơ bản với tệp tin và thư mục"
      skills={["Quản lý dữ liệu", "Cloud Drive", "Đặt tên nhất quán"]}
      objective="Biết tạo thư mục, lưu trữ tài liệu học tập một cách khoa học và đặt tên tệp nhất quán để quản lý dữ liệu lâu dài."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Tạo thư mục gốc riêng cho môn học: <code className="bg-ink/10 px-1.5 py-0.5 text-xs">NMCNS-AI_2026</code>.</li>
          <li>Chia thành 4 thư mục con: <em>Bài tập</em>, <em>Tài liệu tham khảo</em>, <em>Minh chứng</em>, <em>Sản phẩm cuối kỳ</em>.</li>
          <li>Đồng bộ lên Google Drive/OneDrive để sao lưu và truy cập nhiều thiết bị.</li>
          <li>Áp dụng quy tắc đặt tên nhất quán cho từng phiên bản.</li>
        </ol>
      }
      tools={["File Explorer", "Google Drive", "OneDrive"]}
      evidence={
        <div className="space-y-3">
          <EvidencePlaceholder label="Cấu trúc thư mục môn học" />
          <div className="bg-ink text-paper p-4 mono text-xs leading-relaxed">
            <div>▸ NMCNS-AI_2026/</div>
            <div className="pl-4">▸ 01_BaiTap/</div>
            <div className="pl-8 text-acid">NMCNS_Bai01_QuanLyTep_2026-10-05_v1.docx</div>
            <div className="pl-8 text-acid">NMCNS_Bai01_QuanLyTep_2026-10-08_v2.docx</div>
            <div className="pl-4">▸ 02_TaiLieuThamKhao/</div>
            <div className="pl-4">▸ 03_MinhChung/</div>
            <div className="pl-4">▸ 04_SanPhamCuoiKy/</div>
          </div>
        </div>
      }
      analysis={
        <div className="space-y-2">
          <p>
            Quy tắc <code className="bg-ink/10 px-1.5 py-0.5 text-xs">MonHoc_Bai_TenBaiTap_NgayThucHien_PhienBan</code>
            {" "}giúp phân biệt phiên bản cũ – mới, hỗ trợ tìm kiếm và tránh nhầm lẫn khi làm nhóm.
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

/* ---------- P2 ---------- */
function Project2() {
  const operators = [
    { op: "site:", ex: "site:edu.vn AI trong giáo dục", why: "Giới hạn tìm kiếm ở tên miền học thuật" },
    { op: "filetype:", ex: "filetype:pdf trí tuệ nhân tạo", why: "Chỉ tìm tài liệu PDF chính thống" },
    { op: "intitle:", ex: 'intitle:"prompt engineering"', why: "Từ khóa xuất hiện ở tiêu đề trang" },
    { op: '"..."', ex: '"generative AI ethics"', why: "Cụm từ chính xác, tránh kết quả rời rạc" },
    { op: "OR", ex: "ChatGPT OR Gemini học tập", why: "Mở rộng kết quả sang công cụ thay thế" },
    { op: "-", ex: "AI giáo dục -quảng cáo", why: "Loại bỏ từ khóa gây nhiễu" },
    { op: "after:", ex: "AI education after:2023", why: "Chỉ lấy tài liệu cập nhật" },
  ];
  const sources = [
    { name: "UNESCO — Guidance on Generative AI in Education", org: "UNESCO", year: 2023, trust: "Rất cao", limit: "Khái quát, chưa đi sâu bối cảnh Việt Nam." },
    { name: "Bài giảng NMCNS-AI của trường", org: "ĐH · Khoa CNTT", year: 2026, trust: "Cao", limit: "Chỉ áp dụng trong phạm vi môn." },
    { name: "Bài báo Scholar về Prompt Engineering", org: "IEEE / ACM", year: 2024, trust: "Cao", limit: "Yêu cầu nền tảng kỹ thuật để đọc." },
    { name: "Blog cá nhân về ChatGPT", org: "Tác giả ẩn danh", year: "n/a", trust: "TB – Thấp", limit: "Không rõ tác giả, không nguồn dẫn." },
  ];
  return (
    <ProjectShell
      id="task-2"
      code="T-02"
      tag="Bài tập 2 · Mục 2.4"
      title="Tìm kiếm và đánh giá thông tin học thuật"
      skills={["Search operators", "Đánh giá nguồn", "Tư duy phản biện"]}
      objective="Sử dụng toán tử tìm kiếm nâng cao và xây dựng bảng đánh giá đa tiêu chí để chọn nguồn thông tin đáng tin cậy."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Chọn chủ đề: <em>“Ứng dụng AI tạo sinh trong giáo dục đại học”</em>.</li>
          <li>Áp dụng &gt; 6 toán tử tìm kiếm nâng cao trên Google & Google Scholar.</li>
          <li>Thu thập 8 nguồn, sau đó sàng lọc còn 4 nguồn có giá trị.</li>
          <li>Đánh giá theo 5 tiêu chí: tác giả, năm, độ tin cậy, lý do chọn, hạn chế.</li>
        </ol>
      }
      tools={["Google Search", "Google Scholar", ".edu / .gov", "Zotero"]}
      evidence={
        <div className="space-y-3">
          <EvidencePlaceholder label="Kết quả tìm kiếm với operator" />
          <div className="hairline overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-ink/5 border-b border-ink/15">
                <tr className="mono text-[10px] uppercase text-left">
                  <th className="px-3 py-2">Toán tử</th>
                  <th className="px-3 py-2">Ví dụ</th>
                  <th className="px-3 py-2">Mục đích</th>
                </tr>
              </thead>
              <tbody>
                {operators.map((o) => (
                  <tr key={o.op} className="border-t border-ink/10">
                    <td className="px-3 py-2 mono text-signal">{o.op}</td>
                    <td className="px-3 py-2 mono">{o.ex}</td>
                    <td className="px-3 py-2 text-ink/70">{o.why}</td>
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
            Chiến lược tìm kiếm được xây theo tầng: <strong>khoanh vùng miền</strong> → <strong>khớp chính xác</strong> → <strong>lọc nhiễu</strong>.
          </p>
          <div className="hairline overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-ink/5 border-b border-ink/15">
                <tr className="mono text-[10px] uppercase text-left">
                  <th className="px-2 py-2">Nguồn</th>
                  <th className="px-2 py-2">Tác giả</th>
                  <th className="px-2 py-2">Năm</th>
                  <th className="px-2 py-2">Tin cậy</th>
                  <th className="px-2 py-2">Hạn chế</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((s) => (
                  <tr key={s.name} className="border-t border-ink/10 align-top">
                    <td className="px-2 py-2 font-medium">{s.name}</td>
                    <td className="px-2 py-2 text-ink/70">{s.org}</td>
                    <td className="px-2 py-2 mono">{s.year}</td>
                    <td className="px-2 py-2 text-signal mono">{s.trust}</td>
                    <td className="px-2 py-2 text-ink/70">{s.limit}</td>
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

/* ---------- P3 ---------- */
function Project3() {
  const compare = [
    { c: "Vai trò", a: "Không nêu", b: "“Bạn là gia sư đại học môn Lịch sử VN”" },
    { c: "Bối cảnh", a: "Không có", b: "Sinh viên năm 1, ôn thi cuối kỳ" },
    { c: "Yêu cầu", a: "“Tóm tắt bài này”", b: "5 ý chính, ≤ 200 từ, gạch đầu dòng" },
    { c: "Tiêu chí", a: "Không đề cập", b: "Chính xác, giữ mốc thời gian" },
    { c: "Định dạng", a: "Đoạn văn chung", b: "Markdown, heading & bullet" },
    { c: "Kiểm soát", a: "Thấp — lan man", b: "Cao — dễ chấm điểm" },
  ];
  return (
    <ProjectShell
      id="task-3"
      code="T-03"
      tag="Bài tập 3 · Mục 3.4"
      title="Viết Prompt hiệu quả cho tác vụ học tập"
      skills={["Prompt engineering", "Framework R-C-T-F", "So sánh phiên bản"]}
      objective="Biết viết prompt rõ ràng theo khung Vai trò – Bối cảnh – Yêu cầu – Định dạng để AI trả lời đúng mục tiêu hơn."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Chọn tác vụ: <em>tóm tắt bài Lịch sử phục vụ ôn thi</em>.</li>
          <li>Viết prompt phiên bản 1 (sơ khai, ngắn gọn).</li>
          <li>Áp dụng khung R-C-T-F để nâng cấp thành prompt phiên bản 2.</li>
          <li>Chạy trên 2 mô hình khác nhau và so sánh kết quả.</li>
        </ol>
      }
      tools={["ChatGPT", "Gemini", "Claude"]}
      evidence={
        <div className="space-y-3">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="hairline p-4 relative">
              <div className="absolute -top-2 left-3 bg-paper px-1 mono text-[10px] text-mark">
                PROMPT V1
              </div>
              <p className="mt-2 mono text-xs leading-relaxed">
                “Tóm tắt bài Chiến dịch Điện Biên Phủ giúp mình.”
              </p>
            </div>
            <div className="hairline p-4 relative border-signal bg-signal/5">
              <div className="absolute -top-2 left-3 bg-paper px-1 mono text-[10px] text-signal">
                PROMPT V2
              </div>
              <p className="mt-2 mono text-xs leading-relaxed">
                “Bạn là gia sư đại học môn Lịch sử. Tóm tắt Chiến dịch ĐBP cho SV năm 1 dưới dạng markdown, 5 ý chính (bối cảnh, diễn biến, kết quả, ý nghĩa, bài học), ≤ 200 từ, giữ mốc thời gian, không thêm sự kiện.”
              </p>
            </div>
          </div>
          <EvidencePlaceholder label="Phản hồi AI cho 2 prompt" />
        </div>
      }
      analysis={
        <div className="hairline overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-ink/5 border-b border-ink/15">
              <tr className="mono text-[10px] uppercase text-left">
                <th className="px-3 py-2">Tiêu chí</th>
                <th className="px-3 py-2 text-mark">V1</th>
                <th className="px-3 py-2 text-signal">V2</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((r) => (
                <tr key={r.c} className="border-t border-ink/10 align-top">
                  <td className="px-3 py-2 mono">{r.c}</td>
                  <td className="px-3 py-2 text-ink/70">{r.a}</td>
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
        "AI phản hồi dựa trên ngữ cảnh: càng cụ thể thì càng ít sai lệch.",
      ]}
    />
  );
}

/* ---------- P4 ---------- */
function Project4() {
  const board = [
    { m: "An", task: "Nghiên cứu tài liệu tham khảo", due: "10/11", state: "Hoàn thành" },
    { m: "Bình", task: "Viết kịch bản video", due: "13/11", state: "Đang làm" },
    { m: "Chi", task: "Thiết kế slide & poster", due: "15/11", state: "Chưa làm" },
    { m: "Duy", task: "Dựng video & lồng tiếng", due: "18/11", state: "Đang làm" },
    { m: "Em", task: "Tổng hợp Portfolio & báo cáo", due: "20/11", state: "Cần chỉnh sửa" },
  ];
  const stateColor: Record<string, string> = {
    "Hoàn thành": "bg-acid text-ink",
    "Đang làm": "bg-signal text-paper",
    "Chưa làm": "bg-ink/10 text-ink",
    "Cần chỉnh sửa": "bg-mark text-paper",
  };
  return (
    <ProjectShell
      id="task-4"
      code="T-04"
      tag="Bài tập 3 · Mục 4.4"
      title="Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm"
      skills={["Kanban", "Trello / Notion", "Phân công", "Theo dõi tiến độ"]}
      objective="Lập kế hoạch, phân công, theo dõi tiến độ và tối ưu quy trình làm việc nhóm bằng công cụ số."
      process={
        <ol className="ml-4 list-decimal space-y-1.5">
          <li>Chia dự án thành 5 đầu việc lớn theo vòng đời sản phẩm.</li>
          <li>Tạo bảng Kanban trên Trello/Notion với 4 cột trạng thái.</li>
          <li>Phân công theo thế mạnh của mỗi thành viên, gắn hạn hoàn thành.</li>
          <li>Họp nhanh 15 phút/tuần để cập nhật, gỡ khó và nhắc hạn.</li>
        </ol>
      }
      tools={["Trello", "Notion", "Google Sheets", "MS Planner"]}
      evidence={
        <div className="space-y-3">
          <EvidencePlaceholder label="Bảng Kanban thực tế của nhóm" />
          <div className="hairline overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-ink/5 border-b border-ink/15">
                <tr className="mono text-[10px] uppercase text-left">
                  <th className="px-2 py-2">TV</th>
                  <th className="px-2 py-2">Nhiệm vụ</th>
                  <th className="px-2 py-2">Hạn</th>
                  <th className="px-2 py-2">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {board.map((r) => (
                  <tr key={r.m} className="border-t border-ink/10">
                    <td className="px-2 py-2 mono">{r.m}</td>
                    <td className="px-2 py-2">{r.task}</td>
                    <td className="px-2 py-2 mono text-ink/70">{r.due}</td>
                    <td className="px-2 py-2">
                      <span className={`mono text-[10px] px-2 py-1 ${stateColor[r.state]}`}>
                        {r.state}
                      </span>
                    </td>
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
            Công cụ trực tuyến <strong>minh bạch hóa tiến độ</strong>, tránh trùng lặp và bỏ sót đầu việc. Mỗi thành viên đều thấy công việc của người khác, tạo áp lực đồng đội tích cực.
          </p>
          <p>
            Trạng thái “Cần chỉnh sửa” giúp phát hiện vấn đề sớm và trả bài đúng chất lượng, thay vì đợi đến deadline mới sửa.
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

/* ---------- P5 ---------- */
function Project5() {
  const steps = [
    { t: "1. Lên ý tưởng", ai: "Gợi ý outline & góc nhìn", me: "Chốt thông điệp phù hợp môn học" },
    { t: "2. Viết kịch bản", ai: "Draft lời thoại", me: "Chỉnh giọng văn, thêm ví dụ VN" },
    { t: "3. Tạo hình ảnh", ai: "DALL·E vẽ minh họa", me: "Chọn ảnh, chỉnh bố cục Canva" },
    { t: "4. Lồng giọng", ai: "AI voice đọc tiếng Việt", me: "Cắt nhịp, thêm nhạc nền" },
    { t: "5. Dựng video", ai: "CapCut auto-cut", me: "Timeline, phụ đề, thương hiệu" },
    { t: "6. Kiểm tra", ai: "AI gợi ý sửa", me: "Rà soát học thuật, xuất bản" },
  ];
  return (
    <ProjectShell
      id="task-5"
      code="T-05"
      tag="Bài tập 2 · Mục 5.4"
      title="Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung"
      skills={["Video AI", "Kịch bản", "Canva", "CapCut", "DALL·E"]}
      objective="Sản xuất một video giải thích khái niệm học tập ≤ 5 phút với sự hỗ trợ của AI tạo sinh, giữ vai trò biên tập của con người."
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
          <a href="#" className="mono text-xs inline-flex items-center gap-2 bg-ink text-paper px-4 py-2 hover:bg-signal transition-colors">
            ▶ XEM SẢN PHẨM (link thật)
          </a>
        </div>
      }
      analysis={
        <div className="space-y-3">
          <p>
            Quy trình chia rõ <strong>“AI làm gì – Con người làm gì”</strong> ở từng bước, đảm bảo sản phẩm cuối cùng luôn có dấu ấn biên tập cá nhân.
          </p>
          <div className="hairline overflow-x-auto">
            <table className="w-full text-xs">
              <thead className="bg-ink/5 border-b border-ink/15">
                <tr className="mono text-[10px] uppercase text-left">
                  <th className="px-3 py-2">Bước</th>
                  <th className="px-3 py-2 text-signal">AI</th>
                  <th className="px-3 py-2 text-mark">Em</th>
                </tr>
              </thead>
              <tbody>
                {steps.map((s) => (
                  <tr key={s.t} className="border-t border-ink/10">
                    <td className="px-3 py-2 mono">{s.t}</td>
                    <td className="px-3 py-2 text-ink/70">{s.ai}</td>
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

/* ---------- P6 ---------- */
function Project6() {
  const issues = [
    { i: "Đạo văn / gian lận học thuật", s: "Tự viết lại bằng ngôn ngữ cá nhân, kiểm tra qua Turnitin." },
    { i: "Phụ thuộc AI, thui chột tư duy", s: "Dùng AI ở bước brainstorm, không ở bước ra quyết định." },
    { i: "Sai lệch / hallucination", s: "Đối chiếu với ≥ 2 nguồn chính thống." },
    { i: "Quyền riêng tư & dữ liệu cá nhân", s: "Không nhập họ tên, mã SV, dữ liệu nhạy cảm vào AI." },
    { i: "Thiên kiến thuật toán (bias)", s: "Nhận diện góc nhìn thiếu, chủ động bổ sung nguồn đa dạng." },
    { i: "Vi phạm bản quyền", s: "Chỉ dùng hình ảnh, giọng AI được cấp phép cho học tập." },
  ];
  return (
    <ProjectShell
      id="task-6"
      code="T-06"
      tag="Bài tập 4 · Mục 6.4"
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
      tools={["Chính sách trường", "UNESCO AI Guidance", "Coursera"]}
      evidence={
        <div className="space-y-3">
          <div className="hairline">
            <div className="border-b border-ink/15 px-4 py-2 mono text-[10px] uppercase tracking-widest text-signal">
              Fig · 7 Nguyên tắc cá nhân dùng AI
            </div>
            <ol className="divide-y divide-ink/10">
              {PRINCIPLES.map((p, i) => (
                <li key={i} className="grid grid-cols-[48px_1fr] gap-2 px-4 py-3 text-sm">
                  <span className="mono text-signal">P.0{i + 1}</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      }
      analysis={
        <div className="hairline overflow-x-auto">
          <table className="w-full text-xs">
            <thead className="bg-ink/5 border-b border-ink/15">
              <tr className="mono text-[10px] uppercase text-left">
                <th className="px-3 py-2">Vấn đề đạo đức</th>
                <th className="px-3 py-2">Giải pháp cá nhân</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((r) => (
                <tr key={r.i} className="border-t border-ink/10">
                  <td className="px-3 py-2 text-mark">{r.i}</td>
                  <td className="px-3 py-2 text-ink/80">{r.s}</td>
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
 *  EVIDENCE GRID
 * ============================================================ */
function Evidence() {
  const items = [
    { code: "E-01", t: "Cấu trúc thư mục", d: "Sơ đồ và ảnh chụp cây thư mục môn học.", tag: "T-01", href: "#task-1" },
    { code: "E-02", t: "Kết quả tìm kiếm học thuật", d: "Ảnh chụp Google Scholar với operator.", tag: "T-02", href: "#task-2" },
    { code: "E-03", t: "So sánh Prompt V1 vs V2", d: "Ảnh chụp phản hồi từ ChatGPT/Gemini.", tag: "T-03", href: "#task-3" },
    { code: "E-04", t: "Bảng quản lý công việc nhóm", d: "Ảnh chụp Trello / Notion Kanban.", tag: "T-04", href: "#task-4" },
    { code: "E-05", t: "Video sản phẩm AI", d: "Video ≤ 5 phút giải thích khái niệm.", tag: "T-05", href: "#task-5" },
    { code: "E-06", t: "Bộ nguyên tắc AI", d: "Poster 7 điều nguyên tắc cá nhân.", tag: "T-06", href: "#task-6" },
  ];
  return (
    <Section
      id="minh-chung"
      n="04"
      eyebrow="Evidence archive"
      title="Thư viện minh chứng"
      intro="Bộ sưu tập minh chứng của 6 nhiệm vụ, được đánh mã E-01 → E-06 để dễ tra cứu chéo với các dự án."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 hairline bg-card">
        {items.map((it, i) => (
          <a
            key={it.code}
            href={it.href}
            className={`group p-6 hover:bg-ink hover:text-paper transition-colors ${
              i % 3 !== 2 ? "lg:border-r" : ""
            } ${i < items.length - 3 ? "lg:border-b" : ""} ${
              i % 2 === 0 ? "md:border-r" : ""
            } border-ink/15 ${i < items.length - 1 ? "border-b md:border-b" : ""}`}
          >
            <div className="flex items-center justify-between mono text-[10px] uppercase tracking-widest">
              <span>{it.code}</span>
              <span className="border border-current px-2 py-0.5">{it.tag}</span>
            </div>
            <div className="mt-6 aspect-[4/3] relative border border-current/30 border-dashed grid place-items-center bg-current/5">
              <div className="mono text-[10px] opacity-60">Fig · {it.code}</div>
            </div>
            <h4 className="mt-6 font-display text-2xl leading-tight">{it.t}</h4>
            <p className="mt-2 text-sm opacity-75">{it.d}</p>
            <div className="mt-4 mono text-xs group-hover:text-acid">open ↗</div>
          </a>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 *  SKILLS MATRIX
 * ============================================================ */
function Skills() {
  const max = Math.max(...SKILLS.map((s) => s.level));
  return (
    <Section
      id="ky-nang"
      n="05"
      eyebrow="Skill matrix"
      title="Ma trận năng lực số"
      intro="Tự đánh giá mức độ vận dụng 8 kỹ năng số cốt lõi trên thang 100. Cột phải mô tả tình huống ứng dụng thực tế."
    >
      <div className="hairline bg-card">
        <div className="grid grid-cols-[1fr_60px_1fr] border-b border-ink/15 bg-ink/5 mono text-[10px] uppercase tracking-widest">
          <div className="px-4 py-2">Kỹ năng</div>
          <div className="px-4 py-2 text-right">Mức</div>
          <div className="px-4 py-2 border-l border-ink/15">Ứng dụng</div>
        </div>
        {SKILLS.map((s, i) => (
          <div
            key={s.name}
            className={`grid grid-cols-[1fr_60px_1fr] items-center ${
              i < SKILLS.length - 1 ? "border-b border-ink/10" : ""
            }`}
          >
            <div className="px-4 py-4">
              <div className="font-display text-lg">{s.name}</div>
              <div className="mt-2 h-1 bg-ink/10 relative">
                <div
                  className={`absolute inset-y-0 left-0 ${s.level === max ? "bg-signal" : "bg-ink"}`}
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </div>
            <div className="px-4 py-4 text-right mono text-lg">{s.level}</div>
            <div className="px-4 py-4 border-l border-ink/15 text-sm text-ink/75">{s.use}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ============================================================
 *  PRINCIPLES
 * ============================================================ */
function Principles() {
  return (
    <Section
      id="nguyen-tac"
      n="06"
      eyebrow="Personal manifesto"
      title="Bộ nguyên tắc dùng AI"
      intro="Bộ 7 nguyên tắc cá nhân — được cam kết áp dụng trong mọi hoạt động học tập và nghiên cứu."
    >
      <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3 hairline bg-card">
        {PRINCIPLES.map((p, i) => (
          <div
            key={i}
            className={`p-6 relative ${
              (i + 1) % 3 !== 0 ? "lg:border-r" : ""
            } ${i % 2 === 0 ? "sm:border-r lg:border-r" : ""} border-ink/15 border-b ${
              i >= PRINCIPLES.length - 1 ? "border-b-0" : ""
            }`}
          >
            <div className="flex items-baseline justify-between mono text-[10px] uppercase tracking-widest">
              <span className="text-signal">P.0{i + 1}</span>
              <span className="text-muted-foreground">Rule</span>
            </div>
            <p className="mt-4 font-display text-xl leading-snug">{p}</p>
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
    { d: "Khó cân bằng AI và tư duy cá nhân.", f: "Chia rõ vai trò AI – Con người ở từng bước sản phẩm." },
  ];
  return (
    <Section
      id="tong-ket"
      n="07"
      eyebrow="Conclusion / Reflection"
      title="Tổng kết & phản tư"
    >
      <div className="reveal hairline bg-card p-8 md:p-14 relative">
        <span className="absolute top-4 left-4 mono text-[10px] text-signal">« quote</span>
        <p className="font-display text-3xl md:text-5xl italic leading-tight max-w-4xl">
          “Portfolio giúp em nhìn lại toàn bộ quá trình rèn luyện kỹ năng công nghệ số, tư duy phản biện và khả năng sử dụng AI có trách nhiệm.”
        </p>
        <span className="absolute bottom-4 right-4 mono text-[10px] text-signal">end »</span>
      </div>

      <div className="mt-10 grid gap-0 md:grid-cols-2 hairline bg-card">
        <div className="p-8 border-b md:border-b-0 md:border-r border-ink/15">
          <div className="mono text-[10px] uppercase tracking-widest text-signal">Fig · Điều tâm đắc</div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="mono text-signal">→</span>
              <span>Học được cách <strong>tư duy có hệ thống</strong> khi đối diện thông tin trên mạng.</span>
            </li>
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="mono text-signal">→</span>
              <span>Xây dựng được <strong>bộ nguyên tắc cá nhân dùng AI</strong> để tự bảo vệ mình.</span>
            </li>
            <li className="grid grid-cols-[20px_1fr] gap-2">
              <span className="mono text-signal">→</span>
              <span>Biết cách <strong>phối hợp AI – Con người</strong> mà vẫn giữ được bản sắc học tập.</span>
            </li>
          </ul>
        </div>
        <div className="p-8">
          <div className="mono text-[10px] uppercase tracking-widest text-mark">Fig · Khó khăn & khắc phục</div>
          <div className="mt-4 divide-y divide-ink/10">
            {difficulties.map((x) => (
              <div key={x.d} className="py-3 grid grid-cols-[20px_1fr] gap-2 text-sm">
                <span className="mono text-mark">⚠</span>
                <div>
                  <div className="font-medium">{x.d}</div>
                  <div className="mt-0.5 text-ink/70">→ {x.f}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="reveal mt-10 hairline bg-card p-8">
        <div className="mono text-[10px] uppercase tracking-widest text-signal">Fig · Định hướng tương lai</div>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {[
            { k: "F.01", t: "Duy trì Portfolio", d: "Tiếp tục cập nhật sản phẩm học tập & dự án cá nhân." },
            { k: "F.02", t: "Học tập & nghiên cứu", d: "Ứng dụng kỹ năng số vào tiểu luận, khóa luận, seminar." },
            { k: "F.03", t: "Công việc", d: "Sử dụng AI có trách nhiệm như một cộng sự nghề nghiệp." },
          ].map((g) => (
            <div key={g.k} className="border-l-2 border-signal pl-4">
              <div className="mono text-[10px] text-signal">{g.k}</div>
              <div className="mt-1 font-display text-2xl">{g.t}</div>
              <div className="mt-2 text-sm text-ink/75">{g.d}</div>
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
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mono text-[10px] uppercase tracking-widest text-acid">EOF · End of file</div>
          <h3 className="mt-3 font-display text-5xl italic leading-none">
            Cảm ơn <br />
            đã đọc.
          </h3>
          <p className="mt-6 text-sm text-paper/70 max-w-md">
            Portfolio được xây dựng nhằm phục vụ mục đích học tập và tự đánh giá năng lực số. Mọi phản hồi, góp ý đều được trân trọng.
          </p>
        </div>
        <div>
          <div className="mono text-[10px] uppercase tracking-widest text-acid mb-4">// Thông tin</div>
          <ul className="space-y-2 text-sm">
            <li className="grid grid-cols-[80px_1fr]"><span className="text-paper/50 mono text-xs">Sinh viên</span><span>[Điền tên]</span></li>
            <li className="grid grid-cols-[80px_1fr]"><span className="text-paper/50 mono text-xs">Ngành</span><span>[Điền ngành]</span></li>
            <li className="grid grid-cols-[80px_1fr]"><span className="text-paper/50 mono text-xs">Môn</span><span>NMCNS-AI</span></li>
            <li className="grid grid-cols-[80px_1fr]"><span className="text-paper/50 mono text-xs">Năm</span><span>2025–2026</span></li>
          </ul>
        </div>
        <div>
          <div className="mono text-[10px] uppercase tracking-widest text-acid mb-4">// Liên hệ</div>
          <ul className="space-y-2 text-sm">
            <li className="grid grid-cols-[80px_1fr]"><span className="text-paper/50 mono text-xs">Email</span><span>[email@example.com]</span></li>
            <li className="grid grid-cols-[80px_1fr]"><span className="text-paper/50 mono text-xs">GitHub</span><span>github.com/[username]</span></li>
            <li className="grid grid-cols-[80px_1fr]"><span className="text-paper/50 mono text-xs">LinkedIn</span><span>linkedin.com/in/[username]</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto max-w-7xl px-6 py-4 flex flex-wrap items-center justify-between gap-4 mono text-[10px] uppercase tracking-widest text-paper/60">
          <span>© 2026 · Portfolio · NMCNS-AI</span>
          <span>v1.0 · built with responsibility</span>
          <a href="#top" className="hover:text-acid">↑ back to top</a>
        </div>
      </div>
    </footer>
  );
}
