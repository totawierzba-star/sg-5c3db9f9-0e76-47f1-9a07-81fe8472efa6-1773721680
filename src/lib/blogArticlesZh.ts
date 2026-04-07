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
    slug: "delayed-baggage-after-arrival-guide",
    title: "飞机到了但行李没到，能索赔吗？延误行李指南",
    excerpt:
      "航班已到达，但托运行李很晚才到、没有上同一班飞机或完全丢失怎么办？本文讲清 delayed baggage、Montreal Convention、EU261 与费用追偿边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "行李争议",
    featured: true,
  },
  {
    slug: "landed-but-stuck-on-plane-arrival-time-guide",
    title: "飞机落地了却迟迟不能下机，延误怎么算？Arrival Time 指南",
    excerpt:
      "航班已落地，但因为停机位、摆渡车、廊桥或机场调度迟迟不能下机，延误时间怎么算？本文讲清 landed but stuck on plane、arrival time 与 EU261 边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "赔偿基础",
    featured: true,
  },
  {
    slug: "airline-rerouted-without-consent-guide",
    title: "航司没问我就改到别的航班，合法吗？Rerouting 指南",
    excerpt:
      "航空公司未经明确同意就把你改到别的日期、别的航班或更长转机路线，怎么办？本文讲清 rerouting、consent、refund 与 EU261 边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "改签边界",
    featured: true,
  },
  {
    slug: "family-separated-seats-flight-rights-guide",
    title: "一家人被分开坐怎么办？儿童与家人座位分离指南",
    excerpt:
      "值机后被分开座、儿童没和家长坐一起、预选座被改掉怎么办？本文讲清 family seating、seat reassignment、refund 与 EU261 边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "座位争议",
    featured: true,
  },
  {
    slug: "flight-upgrade-passenger-rights-guide",
    title: "被免费升舱了，还会影响赔偿吗？航班 Upgrade 权利指南",
    excerpt:
      "被航空公司免费升舱到更高舱位，会影响退款、赔偿或其他旅客权利吗？本文讲清 flight upgrade、goodwill、EU261 与舱位权利边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "舱位争议",
    featured: true,
  },
  {
    slug: "flight-downgrade-business-to-economy-guide",
    title: "买了商务舱却被安排到经济舱？航班降舱赔偿指南",
    excerpt:
      "买了商务舱、豪华经济舱或高级舱位，却被安排到更低舱位怎么办？本文讲清 flight downgrade、refund、EU261 和乘客权利边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "舱位争议",
    featured: true,
  },
  {
    slug: "booking-disappeared-reservation-not-found-guide",
    title: "机票订单突然消失了怎么办？Reservation Not Found 指南",
    excerpt:
      "App 里航班消失、PNR 查不到、订单显示 reservation not found 怎么办？本文讲清 booking disappeared、票务异常、拒载风险与 EU261 边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "票务边界",
    featured: true,
  },
  {
    slug: "gate-change-airport-queue-missed-flight-guide",
    title: "登机口变更或排队太久错过航班，算谁的责任？",
    excerpt:
      "因为 gate change、安检排队、边检拥堵或机场动线太乱错过航班怎么办？本文讲清 missed flight、gate closure、airport queue 与 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "登机边界",
    featured: true,
  },
  {
    slug: "online-checkin-failed-airport-desk-guide",
    title: "网上值机失败怎么办？App 让去机场柜台的风险与赔偿指南",
    excerpt:
      "在线值机失败、App 显示“please check in at airport desk”意味着什么？本文讲清 online check-in failed、airport desk、拒载与 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "登机边界",
    featured: true,
  },
  {
    slug: "name-mismatch-boarding-denied-guide",
    title: "机票名字写错了怎么办？拼写错误、缺少中间名与拒载指南",
    excerpt:
      "机票姓名和护照不完全一致，会被拒绝登机吗？本文讲清 typo、middle name、surname mismatch、denied boarding 与 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "登机边界",
    featured: true,
  },
  {
    slug: "hidden-city-ticketing-skiplagging-guide",
    title: "买到更远的票，中途下飞机可以吗？Hidden City / Skiplagging 指南",
    excerpt:
      "为了便宜而买到更远目的地的机票，然后中途提前下飞机合法吗？本文讲清 hidden city ticketing、skiplagging、no-show 与 EU261 的边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "票规边界",
    featured: true,
  },
  {
    slug: "no-show-cancelled-remaining-ticket-guide",
    title: "没坐第一段，后面机票全被取消了？No-show 规则指南",
    excerpt:
      "错过第一段、主动放弃一段，结果后续航班全被取消怎么办？本文讲清 no-show、remaining ticket cancellation、联程结构与 EU261 的边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "票规边界",
    featured: true,
  },
  {
    slug: "flight-time-change-notification-compensation-guide",
    title: "航司改了起飞时间，算取消吗？时间变更与赔偿指南",
    excerpt:
      "航空公司提前或临时修改起飞时间，只是 schedule change 还是已经接近 cancellation？本文讲清 time change、notification、EU261 和赔偿边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "改签边界",
    featured: true,
  },
  {
    slug: "ota-travel-agent-airline-responsibility-guide",
    title: "机票在 OTA 买的，延误后该找谁？航司、平台、代理责任指南",
    excerpt:
      "通过 OTA、旅行社或代理买的机票，发生延误、取消、误机后到底该找谁？本文讲清 airline、OTA、travel agent 与 EU261 的责任边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "责任判断",
    featured: true,
  },
  {
    slug: "wet-lease-subcontracted-flight-compensation-guide",
    title: "飞机和机组都不是原航司的，延误找谁赔？Wet Lease 指南",
    excerpt:
      "订票时是A航司，结果实际飞行的是B航司的飞机和机组。wet lease、subcontracted flight、actual carrier 和 EU261 该怎么判断？",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "责任判断",
    featured: true,
  },
  {
    slug: "codeshare-operating-carrier-compensation-guide",
    title: "代码共享航班延误找谁赔？营销航司 vs 实际承运人指南",
    excerpt:
      "代码共享航班延误、取消或误机后，到底该找出票航司还是实际执飞航司？本文讲清 codeshare、marketing carrier、operating carrier 与 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "责任判断",
    featured: true,
  },
  {
    slug: "through-checked-baggage-vs-through-ticket-guide",
    title: "行李直挂到终点，就一定算联程受保护吗？",
    excerpt:
      "行李被直挂到最终目的地，就等于整段行程受 EU261 联程保护吗？本文讲清 through-checked baggage、through ticket 和 separate tickets 的核心区别。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "转机规则",
    featured: true,
  },
  {
    slug: "open-jaw-mixed-carriers-pnr-guide",
    title: "Open-jaw、不同航司、不同 PNR，还是一段行程吗？",
    excerpt:
      "不同航司、多个 PNR、open-jaw 或 interline 结构下，误机后到底谁负责？本文讲清 mixed carriers、PNR 和 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "结构判断",
    featured: true,
  },
  {
    slug: "minimum-connection-time-guide",
    title: "最短转机时间是谁定的？MCT 与误机责任指南",
    excerpt:
      "联程票转机时间太短，误机后该怪谁？本文讲清 minimum connection time、官方最短转机时间、self-transfer 和 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "转机规则",
    featured: true,
  },
  {
    slug: "self-transfer-separate-tickets-guide",
    title: "自己分开买票转机，错过下一段怎么办？Self-Transfer 指南",
    excerpt:
      "自己分开买票、不同终端或不同机场转机时，错过下一段还能索赔吗？本文讲清 self-transfer、separate tickets 和 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "转机风险",
    featured: true,
  },
  {
    slug: "missed-check-in-gate-closure-guide",
    title: "错过值机或登机口关闭怎么办？Missed Check-in 指南",
    excerpt:
      "因为 missed check-in、gate closed、late to boarding 或 airport queue 错过航班，就一定是乘客自己的责任吗？本文讲清错过值机、登机口关闭和 EU261 的边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "登机边界",
    featured: true,
  },
  {
    slug: "denied-boarding-document-visa-guide",
    title: "因证件或签证被拒载怎么办？Denied Boarding 指南",
    excerpt:
      "因为 passport、visa、travel document 或 check-in issue 被拒绝登机，就一定能拿赔偿吗？本文讲清证件问题、拒载赔偿和 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "拒载边界",
    featured: true,
  },
  {
    slug: "crew-out-of-hours-duty-time-guide",
    title: "机组超时就一定免赔吗？Crew Out of Hours 指南",
    excerpt:
      "航空公司说因为 crew out of hours、duty time exceeded 或 crew timed out 所以不能赔？本文讲清机组超时、前序延误和 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "slot-restriction-airport-congestion-guide",
    title: "Slot 限制或机场拥堵就一定免赔吗？延误指南",
    excerpt:
      "航空公司说因为 slot restriction、airport congestion 或 flow control 所以不能赔？本文讲清 slot 延误、机场拥堵和后续运营混乱之间的 EU261 边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "runway-closure-airport-infrastructure-guide",
    title: "跑道关闭就一定免赔吗？Runway Closure 延误与取消指南",
    excerpt:
      "航空公司说因为 runway closure、airport infrastructure issue 或 airport operations 所以不能赔？本文讲清跑道关闭、机场故障和后续延误之间的 EU261 边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "weather-extraordinary-circumstances-guide",
    title: "天气原因就一定免赔吗？Weather Delay 与 EU261 指南",
    excerpt:
      "航空公司说因为 weather、strong winds、fog 或 storm 所以不能赔？本文讲清真正恶劣天气、普通天气借口和后续延误之间的 EU261 边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "天气争议",
    featured: true,
  },
  {
    slug: "security-issue-compensation-guide",
    title: "安全问题就一定免赔吗？Security Issue 延误与取消指南",
    excerpt:
      "航空公司说因为 security issue、security alert 或 safety reason 所以不能赔？本文讲清真实安全事件、机场安保决定和后续延误之间的 EU261 边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "airspace-closure-atc-restriction-guide",
    title: "空域关闭或 ATC 限制就一定免赔吗？Airspace Closure 指南",
    excerpt:
      "航空公司说因为 airspace closure、ATC restriction 或 slot limitation 所以不能赔？本文讲清空域关闭、空管限制和后续延误之间的 EU261 边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "medical-emergency-diversion-compensation-guide",
    title: "机上紧急医疗情况就一定免赔吗？Medical Emergency 改降指南",
    excerpt:
      "航空公司说因 passenger medical emergency 或 emergency landing 所以不能赔？本文讲清机上急症、备降、后续延误和 EU261 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "bird-strike-compensation-guide",
    title: "鸟击就一定免赔吗？Bird Strike 延误和取消赔偿指南",
    excerpt:
      "航空公司说因为 bird strike 所以不能赔？本文讲清鸟击本身、后续维修、替代航班和连锁延误之间的区别，以及什么时候 EU261 仍值得继续核查。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "crew-shortage-sick-crew-guide",
    title: "机组生病或人员不足就一定免赔吗？航司常见拒赔理由解析",
    excerpt:
      "航空公司说因为 crew sickness、crew shortage 或 operational reasons 所以不能赔？本文讲清机组生病、缺人和排班问题何时仍可能受 EU261 保护。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "strike-extraordinary-circumstances-guide",
    title: "罢工就一定免赔吗？航司罢工、机场罢工、空管罢工区别",
    excerpt:
      "航空公司说因为罢工所以不能赔？本文讲清 airline strike、airport strike、ATC strike 的核心区别，以及什么时候 EU261 仍然保护乘客。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "technical-problem-extraordinary-circumstances-guide",
    title: "技术故障就一定免赔吗？航空公司最常见借口解析",
    excerpt:
      "航空公司说是技术故障、维护问题、零件故障，就一定属于特殊情况吗？本文讲清 ordinary technical problems 和 extraordinary circumstances 的关键边界。",
    date: "2026-04-07",
    readTime: "8 分钟",
    category: "特殊情况",
    featured: true,
  },
  {
    slug: "arrival-time-door-open-guide",
    title: "到达时间到底怎么算？开门时间 vs 落地时间",
    excerpt:
      "EU261 里为什么很多案件更看开门时间而不是轮子着地时间？本文讲清 arrival time、door open、下机时间与 3 小时规则的关系。",
    date: "2026-04-06",
    readTime: "7 分钟",
    category: "赔偿基础",
    featured: true,
  },
  {
    slug: "refund-vs-rerouting-choice-guide",
    title: "退款还是改签到最终目的地？一文看懂怎么选",
    excerpt:
      "航班取消、大延误或改到次日后，乘客该选退款还是 rerouting？本文讲清两条权利路径的差别、隐藏代价和最容易选错的场景。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "赔偿基础",
    featured: true,
  },
  {
    slug: "eu261-flight-eligibility-checklist",
    title: "怎么快速判断一趟航班是否受 EU261 保护？【检查清单】",
    excerpt:
      "不知道自己的航班能不能走 EU261？本文用最实用的 checklist 讲清出发地、承运人、最终目的地、联程票和第三国返欧的核心判断顺序。",
    date: "2026-04-06",
    readTime: "7 分钟",
    category: "赔偿基础",
    featured: true,
  },
  {
    slug: "how-to-document-delay-costs-guide",
    title: "航班延误后，怎么证明酒店、餐饮和出租车费用？",
    excerpt:
      "自己垫付了酒店、餐饮、出租车和机场交通后，怎样保留证据最有效？本文讲清票据、截图、书面原因和索赔时最容易缺失的证明。",
    date: "2026-04-06",
    readTime: "7 分钟",
    category: "取证重点",
    featured: true,
  },
  {
    slug: "three-hour-arrival-delay-rule-guide",
    title: "为什么是到达晚点 3 小时，不是起飞晚点 3 小时？",
    excerpt:
      "EU261 为什么更看最终到达时间，而不是起飞推迟了多久？本文讲清 3 小时规则、开门时间、转机失败和最容易被误解的到达计算方式。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "赔偿基础",
    featured: true,
  },
  {
    slug: "cancellation-vs-major-schedule-change-guide",
    title: "取消航班和大改时是一回事吗？赔偿区别指南",
    excerpt:
      "航司把航班提前很多小时、推迟到第二天，算取消还是普通改时？本文讲清 cancellation、major schedule change、退款与改签权利的区别。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "赔偿基础",
    featured: true,
  },
  {
    slug: "final-destination-delay-rule-guide",
    title: "什么叫最终目的地？EU261 里最容易被误解的规则",
    excerpt:
      "赔偿为什么看最终目的地晚点，而不是第一段晚了多久？本文讲清 final destination、联程票、转机失败和单独出票之间的关键区别。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "赔偿基础",
    featured: true,
  },
  {
    slug: "actual-carrier-charter-flight-guide",
    title: "包机里谁才是实际承运人？一文看懂该找谁索赔",
    excerpt:
      "旅行社卖的包机、旅游套餐和代码共享里，谁才是真正负责赔偿的实际承运人？本文讲清 actual carrier、售票方与旅行社的责任边界。",
    date: "2026-04-06",
    readTime: "9 分钟",
    category: "责任边界",
    featured: true,
  },
  {
    slug: "flight-delay-written-reason-guide",
    title: "航班延误后，为什么一定要拿书面原因？",
    excerpt:
      "航空公司口头说是天气、罢工、技术故障，为什么不够？本文讲清为什么书面原因在 EU261 和后续索赔里很关键。",
    date: "2026-04-06",
    readTime: "7 分钟",
    category: "取证重点",
    featured: true,
  },
  {
    slug: "airport-taxi-hotel-reimbursement-guide",
    title: "航班延误后出租车和酒店能报销吗？",
    excerpt:
      "因为航班延误、取消或过夜而自付出租车、酒店和机场交通，后面还能追吗？本文讲清合理费用、票据和照护边界。",
    date: "2026-04-06",
    readTime: "7 分钟",
    category: "费用报销",
    featured: true,
  },
  {
    slug: "airport-meal-voucher-delay-guide",
    title: "航班延误后餐饮券该给吗？Meal Voucher 指南",
    excerpt:
      "航班延误、取消或过夜时，航空公司什么时候该给餐饮券？如果不给，乘客自己买饭还能报吗？本文讲清 meal voucher 和票据保留重点。",
    date: "2026-04-06",
    readTime: "7 分钟",
    category: "现场照护",
    featured: true,
  },
  {
    slug: "charter-flight-rebooked-next-day-rights",
    title: "包机被改到第二天，乘客有哪些权利？",
    excerpt:
      "包机或度假航班被改到第二天后，酒店、餐饮、改签和赔偿该怎么判断？本文讲清包机延误、取消和次日重飞时的权利边界。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "次日改签",
    featured: true,
  },
  {
    slug: "greek-islands-weather-delay-guide",
    title: "希腊群岛航班因天气延误，还能索赔吗？",
    excerpt:
      "飞圣托里尼、罗得岛、克里特等岛屿时，航空公司说是天气原因就一定免赔吗？本文讲清真正恶劣天气、运营借口和 EU261 边界。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "天气争议",
    featured: true,
  },
  {
    slug: "pegasus-saw-self-transfer-guide",
    title: "Pegasus 在 SAW 自己分开买票转机，错过下一段怎么办？",
    excerpt:
      "在萨比哈机场 SAW 用 Pegasus 自己分开买票转机时，错过下一段会怎样？本文讲清联程票区别、重买机票、酒店和赔偿边界。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "转机风险",
    featured: true,
  },
  {
    slug: "antalya-overnight-delay-hotel-guide",
    title: "安塔利亚延误过夜，酒店该谁出？AYT 指南",
    excerpt:
      "在安塔利亚机场 AYT 因延误或取消被迫过夜时，航空公司必须安排酒店吗？本文讲清返程、包机、餐饮和票据保留重点。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "过夜安置",
    featured: true,
  },
  {
    slug: "athens-strike-delay-rights",
    title: "雅典机场罢工延误怎么办？ATH 赔偿与改签指南",
    excerpt:
      "在雅典 ATH 遇到机场罢工、空管限制、取消或改到次日时，什么时候还能拿 EU261，什么时候很难？本文讲清罢工与照护边界。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "dalaman-airport-delay-rights",
    title: "达拉曼机场延误怎么办？DLM 航班赔偿指南",
    excerpt:
      "在达拉曼机场 DLM 遇到返欧航班延误、取消、包机混乱或被改到次日时，什么时候受 EU261 保护，什么时候不受？本文讲清返程边界与照护义务。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "bodrum-airport-delay-rights",
    title: "博德鲁姆机场延误怎么办？BJV 航班赔偿指南",
    excerpt:
      "在博德鲁姆机场 BJV 遇到返欧航班延误、取消、过夜或包机混乱时，什么时候还能拿 EU261？本文讲清返程边界、酒店和赔偿路径。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "heraklion-airport-delay-rights",
    title: "伊拉克利翁机场延误怎么办？HER 航班赔偿指南",
    excerpt:
      "在克里特伊拉克利翁机场 HER 遇到航班延误、取消或改到次日，什么时候还能拿 EU261？本文讲清岛屿机场、大风、过夜和赔偿边界。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "turkish-airlines-hotel-voucher-istanbul",
    title: "Turkish Airlines 在伊斯坦布尔不给酒店怎么办？",
    excerpt:
      "Turkish Airlines 在 IST 延误、取消或错过转机后，如果不给 hotel voucher 怎么办？本文讲清过夜安置、餐饮和票据保留重点。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "过夜安置",
    featured: true,
  },
  {
    slug: "bodrum-diverted-to-izmir-guide",
    title: "原本飞博德鲁姆却降落伊兹密尔，怎么办？",
    excerpt:
      "飞博德鲁姆 BJV 却被改降到伊兹密尔后，航空公司必须安排什么？本文讲清大巴、出租车、最终到达时间和赔偿边界。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "改降场景",
    featured: true,
  },
  {
    slug: "self-transfer-risk-istanbul",
    title: "在伊斯坦布尔自己分开买票转机，错过下一段怎么办？",
    excerpt:
      "自己分开买票在 IST 或 SAW 转机时，一旦错过下一段通常会发生什么？本文讲清 self-transfer、联程票区别、酒店和赔偿边界。",
    date: "2026-04-06",
    readTime: "9 分钟",
    category: "转机风险",
    featured: true,
  },
  {
    slug: "rhodes-airport-delay-rights",
    title: "罗得岛机场延误怎么办？RHO 航班赔偿指南",
    excerpt:
      "在罗得岛机场 RHO 遇到航班延误、取消、机场混乱或改到次日，什么时候还能拿 EU261？本文讲清岛屿机场、罢工和照护边界。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "santorini-airport-delay-rights",
    title: "圣托里尼机场延误怎么办？JTR 航班赔偿指南",
    excerpt:
      "在圣托里尼机场 JTR 遇到航班延误、取消或大风导致混乱时，什么时候还能拿 EU261？本文讲清天气理由、岛屿航线和过夜安置边界。",
    date: "2026-04-06",
    readTime: "8 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "istanbul-airport-delay-rights",
    title: "伊斯坦布尔机场 IST 航班延误怎么办？乘客权利指南",
    excerpt:
      "在伊斯坦布尔机场 IST 遇到 Turkish Airlines 或其他航班延误、取消、错过联程后，什么时候受 EU261 保护，什么时候不受？本文讲清终点延误、过夜和赔偿边界。",
    date: "2026-04-06",
    readTime: "9 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "istanbul-overnight-delay-hotel-guide",
    title: "伊斯坦布尔延误过夜，酒店该谁出？IST / SAW 指南",
    excerpt:
      "在伊斯坦布尔因延误或取消被迫过夜，航空公司必须提供酒店吗？本文讲清 IST / SAW 的酒店、餐饮、交通与赔偿边界。",
    date: "2026-04-06",
    readTime: "9 分钟",
    category: "过夜安置",
    featured: true,
  },
  {
    slug: "sabiha-gokcen-delay-rights",
    title: "萨比哈机场 SAW 航班延误怎么办？乘客权利指南",
    excerpt:
      "在伊斯坦布尔萨比哈机场 SAW 遇到 Pegasus 或其他航班延误、过夜和错过转机后，什么时候受 EU261 保护，什么时候不受？本文讲清现场处理与赔偿边界。",
    date: "2026-04-06",
    readTime: "9 分钟",
    category: "机场指南",
    featured: true,
  },
  {
    slug: "sports-equipment-damaged-charter-flight",
    title: "包机托运风筝板、高尔夫包损坏怎么办？运动装备索赔指南",
    excerpt:
      "风筝板、冲浪板、高尔夫球包在包机或度假航班中损坏后，除了 EU261 之外还能追什么？本文讲清行李损失与蒙特利尔公约边界。",
    date: "2026-04-06",
    readTime: "10 分钟",
    category: "行李损失",
    featured: true,
  },
  {
    slug: "missed-cruise-due-to-delayed-flight",
    title: "航班延误错过邮轮登船怎么办？Cruise 高价值索赔指南",
    excerpt:
      "因为航班延误错过邮轮登船，损失可能远超 €600。本文讲清 EU261、联程结构、后续损失与邮轮行程中哪些能追、哪些不能。",
    date: "2026-04-06",
    readTime: "11 分钟",
    category: "高价值案件",
    featured: true,
  },
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
