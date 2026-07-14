export type BlogArticleJaCategory =
  | "answers"
  | "foundation"
  | "airlines"
  | "airports"
  | "routes"
  | "situations"
  | "diaspora";

export type BlogArticleJaCtaPath = "/delayed-flight" | "/cancelled-flight";

export interface BlogArticleJa {
  id: string;
  title: string;
  slug: string;
  category: BlogArticleJaCategory;
  cluster: string;
  focus: string;
  excerpt: string;
  publishDate: string;
  updatedDate: string;
  readTime: string;
  wordCount: number;
  featured: boolean;
  ctaPath: BlogArticleJaCtaPath;
  airlineName?: string;
  routeName?: string;
  airportCode?: string;
  airportName?: string;
  nonEuCarrier?: boolean;
  uk261?: boolean;
  localAuthority?: boolean;
  limitation?: boolean;
  voucher?: boolean;
  ota?: boolean;
  business?: boolean;
  cancelledCase?: boolean;
  technical?: boolean;
  miles?: boolean;
}

const defaultPublishDate = "2026-05-04";

function article(
  slug: string,
  title: string,
  category: BlogArticleJaCategory,
  cluster: string,
  focus: string,
  options: Partial<BlogArticleJa> = {},
): BlogArticleJa {
  const publishDate = options.publishDate || defaultPublishDate;
  return {
    id: slug,
    slug,
    title,
    category,
    cluster,
    focus,
    excerpt:
      options.excerpt ||
      `${title}:日本人の乗客のための実践ガイド — EU規則261/2004、証拠の集め方、請求期限、最大600ユーロの補償金について解説します。`,
    publishDate,
    updatedDate: publishDate,
    readTime: options.readTime || "8 min",
    wordCount: options.wordCount || 1800,
    featured: false,
    ctaPath: "/delayed-flight",
    ...options,
  };
}

export const blogArticlesJa: BlogArticleJa[] = [
  article(
    "lot-polish-airlines-chien-hosho",
    "LOTポーランド航空の遅延補償 — 日本発着も両方向で対象になる完全ガイド",
    "airlines",
    "LOTポーランド航空",
    "LOTポーランド航空はEUの航空会社としてワルシャワのハブから日本まで両方向でEU規則261/2004の対象となること、補償金の請求手順と証拠",
    {
      excerpt:
        "LOTポーランド航空はEUの航空会社のため、ヨーロッパ発日本行きの便だけでなく、日本発ヨーロッパ行きの便も両方向でEU規則261/2004の対象となります。ワルシャワのハブ経由を含め、最終目的地への到着が3時間以上遅れた場合、ヨーロッパ–日本間の補償金は乗客1人あたり600ユーロです。",
      publishDate: "2026-05-04",
      airlineName: "LOTポーランド航空",
      featured: true,
      wordCount: 2300,
      readTime: "10 min",
    },
  ),
  article(
    "warushawa-tokyo-lot-bin-chien",
    "ワルシャワ–東京 LOT直行便の遅延 — 約8,600 kmで補償金は600ユーロ",
    "routes",
    "ヨーロッパ・日本路線",
    "LOTポーランド航空のワルシャワ–東京成田直行便は約8,600 kmで3,500 km超の最高区分に該当し、フライトの遅延で600ユーロの補償金が発生すること",
    {
      excerpt:
        "LOTポーランド航空のワルシャワ–東京成田直行便は約8,600 kmで、3,500 kmを超えるため補償金は最も高い区分の600ユーロです。LOTはEUの航空会社なので、ワルシャワ発でも東京発でも同じように請求でき、条件は最終目的地への3時間以上の到着遅延です。",
      publishDate: "2026-05-10",
      routeName: "ワルシャワ-東京",
      featured: true,
      wordCount: 2100,
      readTime: "9 min",
    },
  ),
  article(
    "eu261-nihonjin-joukyaku-gaido",
    "EU規則261/2004 — 日本人乗客のための完全ガイド",
    "foundation",
    "法律と権利",
    "日本はEU加盟国ではないものの、EU発の便は航空会社を問わず、日本発の便はLOTポーランド航空などEUの航空会社に限り対象となる適用範囲の全体像",
    {
      excerpt:
        "日本はEU加盟国ではありませんが、日本人の乗客もEU規則261/2004で保護されます。EU加盟国から出発する便は航空会社を問わず対象となり、日本から出発する便はLOTポーランド航空などEUの航空会社が運航する場合のみ対象です。3時間以上の遅延で補償金は距離に応じて250〜600ユーロです。",
      publishDate: "2026-05-16",
      featured: true,
      wordCount: 2200,
      readTime: "10 min",
    },
  ),
  article(
    "eu261-jal-ana-tekiyou",
    "EU261はJAL・ANAにも適用されますか?",
    "answers",
    "クイック回答",
    "JAL・ANAはヨーロッパ出発便のみEU規則261/2004の対象で、日本出発便は対象外となること、両方向で保護されるLOTポーランド航空という選択肢",
    {
      excerpt:
        "JAL・ANAの便は、ヨーロッパ(EU域内)から出発する場合のみEU規則261/2004の対象となり、日本から出発する便は対象外です。両方向で補償を受けられるのはEUの航空会社だけで、LOTポーランド航空はその代表例です。対象便が3時間以上遅延すれば、補償金はヨーロッパ–日本間で600ユーロです。",
      publishDate: "2026-05-22",
      featured: true,
      nonEuCarrier: true,
    },
  ),
  article(
    "hikouki-chien-hosho-ikura",
    "フライトの遅延補償はいくら?250・400・600ユーロの3区分",
    "answers",
    "クイック回答",
    "距離による250・400・600ユーロの補償金区分と、ヨーロッパ–日本間の長距離便が常に600ユーロになる理由",
    {
      excerpt:
        "補償金はフライトの距離で決まります:1,500 km未満は250ユーロ、1,500〜3,500 kmは400ユーロ、3,500 km超は600ユーロです。ヨーロッパ–日本間はすべて3,500 kmを大きく超えるため(例:LOTポーランド航空のワルシャワ–東京は約8,600 km)、補償金は常に600ユーロです。",
      publishDate: "2026-05-28",
      featured: true,
      wordCount: 2000,
      readTime: "9 min",
    },
  ),
  article(
    "nanjikan-chien-de-hosho",
    "何時間の遅延で補償金がもらえますか?",
    "answers",
    "クイック回答",
    "最終目的地への3時間以上の到着遅延という補償金の条件と、2時間から始まる食事・飲み物などのケアを受ける権利",
    {
      excerpt:
        "金銭的な補償金(250〜600ユーロ)は、原則として最終目的地への到着が3時間以上遅れた場合に発生します — 出発時刻の遅れだけでは決まりません。食事・飲み物・連絡手段などのケアを受ける権利は、待ち時間が2時間に達した時点ですでに始まります。",
      publishDate: "2026-06-03",
    },
  ),
  article(
    "kekko-bin-kenri",
    "欠航便の権利 — 払い戻しか代替便か、そして14日ルール",
    "answers",
    "クイック回答",
    "欠航時の全額払い戻しと代替便の選択権、出発14日前までに通知されなかった場合の250〜600ユーロの補償金",
    {
      excerpt:
        "欠航の場合、航空会社は運賃の全額払い戻しか代替便のどちらかを必ず提供しなければなりません。さらに、出発の14日前までに通知されなかった欠航では、距離に応じて250〜600ユーロの補償金も請求できます — LOTポーランド航空などヨーロッパ–日本間の便なら600ユーロです。",
      publishDate: "2026-06-09",
      ctaPath: "/cancelled-flight",
    },
  ),
  article(
    "lot-warushawa-noritsugi-chien",
    "ワルシャワでLOT乗り継ぎに乗り遅れたら — 遅延は最終目的地で計算されます",
    "routes",
    "ヨーロッパ・日本路線",
    "1つの予約ならフライトの遅延は乗り継ぎ地ではなく最終目的地への到着時点で計算されること、東京→ワルシャワ→パリの例",
    {
      excerpt:
        "1つの予約であれば、フライトの遅延は乗り継ぎ地ではなく最終目的地への到着時点で計算されます。例えば東京→ワルシャワ→パリの旅程でワルシャワでのLOTポーランド航空の乗り継ぎ便に乗り遅れ、パリに3時間以上遅れて到着した場合、補償金は600ユーロです。",
      publishDate: "2026-06-15",
      routeName: "ワルシャワ乗り継ぎ",
      airlineName: "LOTポーランド航空",
      featured: true,
      wordCount: 2100,
      readTime: "9 min",
    },
  ),
  article(
    "lufthansa-finnair-nihon-hosho",
    "ルフトハンザとフィンエアーの遅延補償 — 日本人乗客向けガイド",
    "airlines",
    "ヨーロッパの航空会社",
    "ルフトハンザ(フランクフルト・ミュンヘン経由)とフィンエアー(ヘルシンキ経由)もEUの航空会社として日本発着の両方向で対象となること",
    {
      excerpt:
        "ルフトハンザ(フランクフルト・ミュンヘン経由)もフィンエアー(ヘルシンキ–東京は約7,800 km)もEUの航空会社のため、LOTポーランド航空と同じく日本発着の両方向でEU規則261/2004の対象です。フランクフルト–東京は約9,350 kmで、3時間以上の遅延なら補償金は600ユーロです。",
      publishDate: "2026-06-21",
      airlineName: "Lufthansa / Finnair",
    },
  ),
  article(
    "tokubetsu-jijou-towa",
    "特別な事情とは?補償金が支払われないケースと支払われるケース",
    "answers",
    "クイック回答",
    "悪天候や航空管制の制限は特別な事情に当たる一方、機材の技術的不具合や航空会社自身の従業員のストライキは原則として当たらないこと",
    {
      excerpt:
        "特別な事情とは、悪天候や航空管制の制限など航空会社に責任のない事象のことで、この場合は補償金の支払い義務がありません。一方、機材の技術的な不具合や航空会社自身の従業員によるストライキは、EU司法裁判所の判例では原則として特別な事情に当たらず、250〜600ユーロの補償金の対象となり得ます。",
      publishDate: "2026-06-27",
    },
  ),
  article(
    "eu261-hosho-seikyu-houhou",
    "EU261補償金の請求方法 — ステップバイステップガイド",
    "foundation",
    "法律と権利",
    "証拠の保管、航空会社への書面での請求、EU規則261/2004に基づく手続きの流れと、ClaimWingerの日本語フォームによる代行",
    {
      excerpt:
        "請求はステップごとに進めます:搭乗券と遅延の証拠を保管し、遅延の理由を航空会社に書面で確認し、EU規則261/2004に基づいて補償金を請求します。ClaimWingerの日本語フォームを使えば、この手続きをすべて任せることができます — LOTポーランド航空などヨーロッパ–日本間の便なら補償金は600ユーロです。",
      publishDate: "2026-07-04",
      wordCount: 2000,
      readTime: "9 min",
    },
  ),
  article(
    "narita-haneda-yoroppa-bin-chien",
    "成田・羽田発着ヨーロッパ便の遅延 — 補償金の対象になる条件",
    "airports",
    "空港",
    "日本出発便はLOTポーランド航空などEUの航空会社のみ対象、EUから成田・羽田への到着便は航空会社を問わず常に対象となる適用ルール",
    {
      excerpt:
        "成田・羽田から出発するヨーロッパ行きの便は、LOTポーランド航空、ルフトハンザ、フィンエアーなどEUの航空会社が運航する場合のみEU規則261/2004の対象です。一方、EU域内から成田・羽田に到着する便は、JAL・ANAを含めどの航空会社でも常に対象です。3時間以上の遅延なら補償金は600ユーロです。",
      publishDate: "2026-07-13",
      airportCode: "NRT",
      airportName: "成田・羽田",
      nonEuCarrier: true,
    },
  ),
];

export const blogArticlesJaSorted = [...blogArticlesJa].sort((articleA, articleB) =>
  articleB.publishDate.localeCompare(articleA.publishDate) ||
  Number(articleB.featured) - Number(articleA.featured) ||
  articleA.title.localeCompare(articleB.title, "ja"),
);

export function getCategoryLabelJa(category: BlogArticleJaCategory | string) {
  const labels: Record<BlogArticleJaCategory, string> = {
    answers: "クイック回答",
    foundation: "法律と権利",
    airlines: "航空会社",
    airports: "空港",
    routes: "路線",
    situations: "特別なケース",
    diaspora: "海外在住者",
  };

  return labels[category as BlogArticleJaCategory] || category;
}

export function getJaArticleBySlug(slug: string) {
  return blogArticlesJa.find((article) => article.slug === slug);
}
