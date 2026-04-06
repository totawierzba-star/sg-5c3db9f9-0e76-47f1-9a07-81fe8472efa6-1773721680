// Chinese blog articles configuration
export interface BlogArticleZh {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
}

export const blogArticlesZh: BlogArticleZh[] = [
  {
    slug: "diverted-flight-greece-turkey-guide",
    title: "航班改降别的机场怎么办？希腊和土耳其 diverted flight 指南",
    excerpt:
      "原本飞博德鲁姆却降落伊兹密尔，原本飞希腊岛屿却改到别的城市，这种 diverted flight 能赔吗？本文讲清替代交通、最终到达时间和 EU261 边界。",
    date: "2026-04-06",
    readTime: "10 分钟",
    category: "特殊场景",
    featured: true,
  },
  {
    slug: "holiday-flight-overbooking-guide",
    title: "度假航班超售被拒载怎么办？Overbooking 赔偿指南",
    excerpt:
      "在暑期包机、返程航班或度假机场遇到 overbooking 被拒绝登机，什么时候能拿标准赔偿？本文讲清自愿放弃座位、强制拒载和改签权利。",
    date: "2026-04-06",
    readTime: "10 分钟",
    category: "拒载赔偿",
    featured: true,
  },
  {
    slug: "athens-cancelled-flight-rerouting-guide",
    title: "雅典航班取消后，怎么逼航空公司安排替代航班？",
    excerpt:
      "在雅典 ATH 遇到航班取消后，航空公司必须怎样改签、提供酒店和餐饮？本文专门讲清 rerouting 权利、退款与替代航班的区别。",
    date: "2026-04-06",
    readTime: "10 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "heraklion-rhodes-strike-compensation",
    title: "伊拉克利翁和罗得岛机场混乱：罢工时还能索赔吗？",
    excerpt:
      "在 HER 或 RHO 遇到航班取消、延误、机场混乱或空管罢工时，什么时候还能拿 EU261，什么时候很难？本文讲清罢工、天气和航司责任边界。",
    date: "2026-04-06",
    readTime: "10 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "dalaman-bodrum-cancelled-flight-rights",
    title: "达拉曼和博德鲁姆航班取消怎么办？返程酒店与赔偿指南",
    excerpt:
      "在达拉曼 DLM 或博德鲁姆 BJV 返欧时航班取消、改到次日或被迫滞留，什么时候受 EU261 保护，什么时候不受？本文讲清酒店、返程改签和赔偿边界。",
    date: "2026-04-06",
    readTime: "11 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "smartwings-island-flight-compensation",
    title: "Smartwings 飞希腊和度假岛屿延误怎么办？赔偿指南",
    excerpt:
      "Smartwings 包机或度假航班飞希腊、土耳其和南欧岛屿时发生延误、取消或改点，什么时候能拿 EU261？本文专门讲清中东欧出发、返程和包机责任边界。",
    date: "2026-04-06",
    readTime: "11 分钟",
    category: "航空公司指南",
    featured: true,
  },
  {
    slug: "aegean-airlines-island-flight-compensation",
    title: "Aegean Airlines 飞希腊群岛延误怎么办？赔偿指南",
    excerpt:
      "Aegean Airlines 飞雅典、圣托里尼、罗得岛、克里特等航线延误或取消后，什么时候能拿 EU261？本文专门讲清岛屿航线、转机、天气借口和赔偿边界。",
    date: "2026-04-06",
    readTime: "11 分钟",
    category: "航空公司指南",
    featured: true,
  },
  {
    slug: "antalya-charter-delay-guide",
    title: "安塔利亚机场包机延误怎么办？终端滞留赔偿指南",
    excerpt:
      "在安塔利亚 AYT 等包机、返欧航班或旅游航班时发生长时间延误，什么时候受 EU261 保护，什么时候不受？本文专门讲清机场现场、酒店餐饮和赔偿边界。",
    date: "2026-04-06",
    readTime: "11 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "istanbul-missed-connection-compensation",
    title: "在伊斯坦布尔错过转机怎么办？IST / SAW 赔偿指南",
    excerpt:
      "在伊斯坦布尔机场 IST 或 SAW 错过下一程后，什么时候能拿 EU261，什么时候不能？本文专门讲清联程票、单独出票、酒店安置和 Turkish Airlines / Pegasus 的责任边界。",
    date: "2026-04-06",
    readTime: "12 分钟",
    category: "转机权益",
    featured: true,
  },
  {
    slug: "turkish-airlines-transit-compensation-guide",
    title: "Turkish Airlines 转机延误、取消、错过联程怎么索赔？",
    excerpt:
      "经伊斯坦布尔 IST 搭乘 Turkish Airlines 转机时，什么时候能拿 EU261，什么时候只能走土耳其规则？本文专门讲清欧盟出发联程、返欧和错过转机的赔偿边界。",
    date: "2026-04-06",
    readTime: "13 分钟",
    category: "航空公司指南",
    featured: true,
  },
  {
    slug: "corendon-airlines-compensation-guide",
    title: "Corendon Airlines 延误、取消、改点怎么索赔？",
    excerpt:
      "Corendon 飞土耳其、希腊和度假岛屿时，若发生延误、取消或大幅改点，什么时候受 EU261 保护，什么时候不受？本文专门讲清改时、返程与包机边界。",
    date: "2026-04-06",
    readTime: "12 分钟",
    category: "航空公司指南",
    featured: true,
  },
  {
    slug: "sunexpress-delay-cancellation-compensation",
    title: "SunExpress 延误或取消怎么办？度假航班索赔指南",
    excerpt:
      "SunExpress 航班在安塔利亚、达拉曼、伊兹密尔等航线延误或取消后，什么时候还能拿 EU261，什么时候要改看土耳其规则？本文专门讲清返程与度假损失边界。",
    date: "2026-04-06",
    readTime: "12 分钟",
    category: "航空公司指南",
    featured: true,
  },
  {
    slug: "pegasus-airlines-delay-cancellation-guide",
    title: "Pegasus Airlines 延误、取消、转机失败怎么索赔？",
    excerpt:
      "Pegasus 在伊斯坦布尔 SAW 延误、取消或错过转机后，什么时候能拿 EU261，什么时候只能走土耳其规则？本文专门讲清常见场景和索赔边界。",
    date: "2026-04-06",
    readTime: "13 分钟",
    category: "航空公司指南",
    featured: true,
  },
  {
    slug: "all-inclusive-delayed-flight-hotel-loss",
    title: "All Inclusive 套餐遇上航班延误：少住一晚酒店谁赔？",
    excerpt:
      "航班延误后丢掉第一晚酒店、接送和度假时间，到底该找航空公司还是旅行社？这篇文章专门讲清航班赔偿与套餐缩水损失的责任边界。",
    date: "2026-04-06",
    readTime: "12 分钟",
    category: "度假套餐",
    featured: true,
  },
  {
    slug: "charter-vs-scheduled-flight-compensation",
    title: "包机延误了该找旅行社还是航空公司？一文看懂赔偿责任",
    excerpt:
      "包机、旅游航班和 All Inclusive 套餐延误后，谁该赔？这篇文章专门讲清实际承运人、旅行社责任、EU261 适用边界，以及什么时候根本不受欧洲法规保护。",
    date: "2026-04-06",
    readTime: "12 分钟",
    category: "包机权益",
    featured: true,
  },
  {
    slug: "turkey-shy-pass-passenger-rights",
    title: "SHY-PASS 是什么？土耳其航班延误取消赔偿全指南",
    excerpt:
      "EU261 不适用时，土耳其的 SHY-YOLCU 规则常常才是真正决定能否索赔的关键。本文讲清楚 Turkish Airlines、Pegasus、包机和土耳其国内航班的赔偿边界。",
    date: "2026-04-06",
    readTime: "13 分钟",
    category: "法规指南",
    featured: true,
  },
  {
    slug: "eu261-turkey-flights-compensation",
    title: "土耳其航班也能拿 EU261 赔偿吗？一文看懂飞土耳其的欧盟航班规则",
    excerpt:
      "飞土耳其、从土耳其飞回欧盟、或者经伊斯坦布尔转机时，什么时候能拿 €600，什么时候完全不受 EU261 保护？这篇文章专门讲清楚欧盟-土耳其航线的边界。",
    date: "2026-04-06",
    readTime: "12 分钟",
    category: "法规指南",
    featured: true,
  },
  {
    slug: "shanghai-pudong-delayed-flight-compensation",
    title: "上海浦东机场航班延误赔偿指南【2026】飞欧洲如何判断能否拿到 €600",
    excerpt:
      "从浦东飞法兰克福、巴黎、阿姆斯特丹时航班延误了？这篇指南专门解释 PVG 出发航班的 EU261 适用范围、取证重点、常见误区和索赔步骤。",
    date: "2026-03-12",
    readTime: "11 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "air-china-eu261-compensation-rules",
    title: "中国国际航空 Air China 能申请 EU261 吗？中国乘客最容易搞错的规则",
    excerpt:
      "国航飞欧洲延误或取消，到底什么时候能索赔、什么时候完全不受 EU261 保护？本文用北京、上海、伦敦、法兰克福等真实航线场景讲清楚。",
    date: "2026-03-08",
    readTime: "10 分钟",
    category: "航空公司指南",
    featured: true,
  },
  {
    slug: "amsterdam-schiphol-missed-connection-compensation",
    title: "阿姆斯特丹史基浦转机失败怎么办？中国乘客错过转机赔偿全指南",
    excerpt:
      "在史基浦机场经 KLM、法航或达美联程转机时错过下一程，您可能拿到 €600。了解联程票、单独出票和过夜安置之间的关键差别。",
    date: "2026-03-03",
    readTime: "12 分钟",
    category: "转机权益",
    featured: true,
  },
  {
    slug: "missed-connection-compensation-guide",
    title: "错过转机赔偿指南【2026】Missed Connection Compensation",
    excerpt:
      "第一程只延误40分钟却导致错过转机？您可能获得€600赔偿！详解联程机票权益、转机延误计算规则、食宿安排及索赔流程。北京/上海经欧洲转机乘客必读。",
    date: "2026-02-26",
    readTime: "14 分钟",
    category: "转机权益",
    featured: true,
  },
  {
    slug: "extraordinary-circumstances-explained",
    title: "特殊情况解释【2026】Extraordinary Circumstances - When Airlines Can Refuse",
    excerpt:
      "航空公司说'特殊情况'拒绝赔偿？了解真相！60%案例中航司在撒谎。详解合法vs虚假借口、技术故障真相、如何挑战拒绝、真实案例分析。",
    date: "2026-02-26",
    readTime: "15 分钟",
    category: "权利保护",
    featured: true,
  },
  {
    slug: "compensation-vs-refund-difference",
    title: "航班补偿vs退款【完整区别】Compensation vs Refund Difference Explained",
    excerpt:
      "95%的乘客混淆补偿(€250-€600)和退款！详解两者区别、何时可同时获得、航司5大陷阱、实际案例、如何正确索赔双重赔偿。",
    date: "2026-02-26",
    readTime: "12分钟",
    category: "赔偿基础",
  },
  {
    slug: "european-airline-china-departure-compensation",
    title: "欧洲航司从中国出发航班补偿【2026】Europe Airlines China Departure",
    excerpt:
      "汉莎、法航等欧洲航司从北京、上海出发延误有赔偿吗？详解EU 261对China→Europe航线适用规则、实际案例、索赔流程。最高€600。",
    date: "2026-02-25",
    readTime: "15分钟",
    category: "从中国出发",
  },
  {
    slug: "europe-to-china-flight-delay-rights",
    title: "欧洲出发飞中国航班延误权利【完整指南】Europe→China Flight Delay Rights",
    excerpt:
      "欧洲飞中国的航班延误有赔偿吗？详解EU 261对Europe→China航线的适用规则、欧盟航司vs中国航司差异、codeshare陷阱、实际案例分析。",
    date: "2026-02-25",
    readTime: "15分钟",
    category: "核心规则解析",
  },
  {
    slug: "3-hour-delay-compensation-rule",
    title: "航班延误3小时补偿规则【2026最新】3小时延误赔偿详解",
    excerpt:
      "为什么3小时是EU 261赔偿的关键门槛？详解3小时延误规则、如何正确测量延误时间、边界情况处理、常见错误避免。北京/上海往返欧洲航线最高€600赔偿指南。",
    date: "2026-02-25",
    readTime: "12分钟",
    category: "赔偿金额",
  },
  {
    slug: "swiss-compensation-guide",
    title: "瑞士航空延误/取消索赔指南【2026】Swiss International完整攻略",
    excerpt:
      "瑞士国际航空延误或取消？本指南详解EU 261赔偿权利、索赔流程、常见拒赔理由应对策略。北京/上海往返苏黎世航线最高可获€600赔偿。",
    date: "2026-02-25",
    readTime: "12分钟",
    category: "航空公司指南",
  },
  {
    slug: "flight-cancellation-compensation-guide",
    title: "航班取消如何索赔？取消vs延误赔偿规则对比【2026】",
    excerpt:
      "航班取消与延误有何不同？了解EU 261/2004取消航班赔偿规则、14天通知规则、再安排权利。中国乘客必读完整指南。",
    date: "2026-02-25",
    readTime: "12分钟",
    category: "法律解读",
  },
  {
    slug: "how-many-hours-delay-compensation",
    title: "航班延误超过几小时才能索赔？3小时规则详解",
    excerpt:
      "了解EU 261/2004的3小时规则、时间计算方式、不同距离的赔偿金额（€250/€400/€600）及航空公司常见陷阱",
    date: "2026-02-25",
    readTime: "9 分钟",
    category: "法律解读",
  },
  {
    slug: "chinese-airlines-china-departure-no-eu261",
    title: "中国航司从中国出发无法申请EU261",
    excerpt:
      "为什么从中国出发乘坐中国航空公司的航班（国航、东航、南航）即使飞往欧洲也无法申请EU 261/2004赔偿？完整法律解释+替代方案指南",
    date: "2026-02-25",
    readTime: "8 分钟",
    category: "法律解读",
  },
  {
    slug: "lufthansa-delay-cancellation-compensation",
    title: "🇩🇪汉莎航空Lufthansa延误/取消索赔攻略【2026】€250-€600赔偿",
    excerpt:
      "法兰克福/慕尼黑转机延误？汉莎航空拒赔？✅本文教你如何成功索赔€250-€600 | 3分钟了解你的权利 | 真实案例分析",
    date: "2026-02-25",
    readTime: "4分钟",
    category: "航空公司指南",
    featured: true,
  },
  {
    slug: "eu261-complete-guide-protected-flights",
    title: "欧盟航班延误赔偿完整指南——哪些航班受EU 261/2004保护？",
    excerpt:
      "详细解读EU 261/2004法规，了解哪些从中国出发或抵达欧洲的航班有资格申请最高€600的延误赔偿。",
    date: "2026-02-24",
    readTime: "12分钟",
    category: "法规指南",
  },
  {
    slug: "eu261-regulation-explained-chinese-passengers",
    title: "EU 261/2004法规详解——中国乘客如何获得欧洲航班赔偿？",
    excerpt:
      "深入解读欧盟乘客权益保护法规EU 261/2004，专为中国乘客设计的完整申请指南，包括适用范围、赔偿金额和申请流程。",
    date: "2026-02-24",
    readTime: "15分钟",
    category: "法规解读",
  },
  {
    slug: "which-flights-qualify-compensation",
    title: "哪些航班有资格申请EU261赔偿？2026完整判断指南",
    excerpt:
      "详细说明欧洲出发航班vs欧洲航空公司航班的区别，帮助中国乘客快速判断自己的航班是否符合EU261赔偿条件。",
    date: "2026-02-24",
    readTime: "10分钟",
    category: "资格判断",
  },
  {
    slug: "finnair-compensation-guide",
    title: "芬兰航空Finnair延误/取消索赔攻略【2026】",
    excerpt:
      "芬兰航空连接中国和欧洲的重要枢纽。了解如何通过赫尔辛基转机时遇到延误或取消航班申请€250-€600赔偿。",
    date: "2026-02-25",
    readTime: "10分钟",
    category: "航空公司",
  },
  {
    slug: "klm-compensation-guide",
    title: "荷兰皇家航空KLM延误/取消赔偿指南",
    excerpt:
      "KLM是中国乘客前往欧洲的热门选择。了解通过阿姆斯特丹转机时的权益保护和赔偿申请流程。",
    date: "2026-02-25",
    readTime: "11分钟",
    category: "航空公司",
  },
  {
    slug: "british-airways-compensation-guide",
    title: "英国航空延误/取消赔偿完整指南【2026中国乘客版】",
    excerpt:
      "详解英国航空BA在EU261和UK261下的赔偿责任，包括Brexit后的变化和中国乘客的申请策略。",
    date: "2026-02-24",
    readTime: "14分钟",
    category: "航空公司",
  },
  {
    slug: "air-france-compensation-guide",
    title: "法国航空延误/取消赔偿攻略——巴黎转机乘客必读",
    excerpt:
      "法航是连接中国和欧洲的主要航空公司。了解通过巴黎戴高乐机场转机时遇到问题如何申请高达€600的赔偿。",
    date: "2026-02-24",
    readTime: "13分钟",
    category: "航空公司",
  },
  {
    slug: "lot-polish-airlines-compensation-guide",
    title: "波兰航空LOT延误/取消赔偿指南【华沙转机专题】",
    excerpt:
      "LOT波兰航空通过华沙连接亚洲和欧洲。详解华沙转机延误、行李丢失和航班取消的赔偿申请全流程。",
    date: "2026-02-24",
    readTime: "12分钟",
    category: "航空公司",
  },
  {
    slug: "chinese-citizens-eu261-compensation-guide",
    title: "中国公民欧洲航班索赔完整指南【2026最新】",
    excerpt:
      "从资格判断到成功获赔的完整流程，专为中国公民设计的EU261赔偿申请宝典，包含真实案例和常见陷阱。",
    date: "2026-02-24",
    readTime: "18分钟",
    category: "完整指南",
    featured: true,
  },
  {
    slug: "beijing-capital-delayed-flight-compensation",
    title: "北京首都机场出发航班延误赔偿指南【飞往欧洲】",
    excerpt:
      "从北京首都机场T3航站楼出发飞往欧洲的航班延误？了解EU261保护范围和€250-€600赔偿申请流程。",
    date: "2026-02-24",
    readTime: "11分钟",
    category: "机场指南",
  },
  {
    slug: "beijing-capital-cancelled-flight-compensation",
    title: "北京首都机场航班取消赔偿攻略【欧洲航线】",
    excerpt:
      "北京飞欧洲的航班突然取消？了解哪些情况下可以获得赔偿，以及如何快速申请€250-€600的补偿金。",
    date: "2026-02-24",
    readTime: "10分钟",
    category: "机场指南",
  },
  {
    slug: "eu261-uk261-passenger-rights",
    title: "EU261 vs UK261：英国脱欧后的乘客权益变化【2026】",
    excerpt:
      "Brexit后英国航班的权益保护发生了什么变化？详解EU261和UK261的区别，以及对中国乘客的影响。",
    date: "2026-02-24",
    readTime: "13分钟",
    category: "政策变化",
  },
];

export const blogArticlesZhSorted = [...blogArticlesZh].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const featuredBlogArticlesZh = blogArticlesZhSorted.filter((article) => article.featured);

export const blogCategoriesZh = [
  "全部文章",
  ...Array.from(new Set(blogArticlesZhSorted.map((article) => article.category))),
];
