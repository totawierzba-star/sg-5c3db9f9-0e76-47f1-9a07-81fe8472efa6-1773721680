import {
  buildClaimWingerViLink,
  type ClaimWingerViDestination,
} from "@/lib/claimwingerLinksVi";

export interface ViBlogContextualLink {
  label: string;
  href: string;
  placement: string;
  description: string;
}

export interface ViBlogSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface ViBlogFaq {
  question: string;
  answer: string;
}

export interface ViBlogArticle {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  date: string;
  updatedDate: string;
  readTime: string;
  cluster: string;
  featured: boolean;
  heroEyebrow: string;
  heroSummary: string;
  quickAnswer: string[];
  keyPoints: string[];
  sections: ViBlogSection[];
  faqs: ViBlogFaq[];
  claimVariant: ClaimWingerViDestination;
  contextualLinks: ViBlogContextualLink[];
}

export const blogArticlesVi: ViBlogArticle[] = [
  {
    slug: "eu261-la-gi-va-khi-nao-duoc-ap-dung",
    title: "EU261 là gì và khi nào được áp dụng?",
    seoTitle: "EU261 là gì? Khi nào hành khách Việt có thể nhận đến €600",
    description:
      "Hướng dẫn bằng tiếng Việt về EU261: chuyến bay nào được áp dụng, khi nào phát sinh bồi thường 250 / 400 / 600 EUR, và hành khách Việt nên chuẩn bị gì để yêu cầu quyền lợi.",
    excerpt:
      "Bài nền tảng quan trọng nhất cho thị trường Việt Nam: EU261 áp dụng với chặng nào, bồi thường khi nào phát sinh và vì sao cùng một hành trình có thể khác kết quả tùy hãng khai thác.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "8 phút",
    cluster: "Core EU261",
    featured: true,
    heroEyebrow: "Core EU261 cho hành khách Việt",
    heroSummary:
      "Nếu bạn bay giữa châu Âu và Việt Nam, EU261 không áp dụng cho mọi chặng theo cùng một cách. Điểm khởi hành, hãng khai thác thực tế và thời gian đến cuối cùng mới là các yếu tố quyết định.",
    quickAnswer: [
      "EU261 thường áp dụng cho chuyến bay khởi hành từ EU, hoặc chuyến bay từ ngoài EU vào EU nếu chặng đó do hãng hàng không EU khai thác.",
      "Với chuyến bay bị hoãn, mốc quan trọng thường là chậm từ 3 giờ trở lên tại điểm đến cuối cùng, chứ không chỉ là giờ cất cánh.",
      "Với chuyến bay bị hủy, thời điểm hãng thông báo, chuyến thay thế và thực tế đến muộn bao nhiêu sẽ quyết định liệu có phát sinh bồi thường hay không.",
    ],
    keyPoints: [
      "Không nhìn vào logo trên vé, hãy nhìn hãng khai thác thực tế.",
      "Bồi thường, hoàn tiền và hỗ trợ tại sân bay là ba quyền khác nhau.",
      "Cùng một tuyến Việt Nam - châu Âu có thể cho kết quả khác nhau tùy hãng bay.",
      "Giữ booking, boarding pass, email đổi lịch và ảnh bảng giờ bay là rất quan trọng.",
    ],
    sections: [
      {
        title: "1. EU261 thường áp dụng cho chặng nào?",
        paragraphs: [
          "Logic cốt lõi của EU261 là nhìn vào điểm khởi hành và hãng khai thác thực tế. Nếu chuyến bay khởi hành từ EU, hành khách thường có thể được bảo vệ theo EU261 dù hãng đó là hãng châu Âu hay hãng ngoài châu Âu.",
          "Với chuyến bay từ ngoài EU vào EU, quyền này thường chỉ mạnh khi chặng đó do hãng hàng không EU khai thác. Vì vậy cùng một hành trình từ Việt Nam sang châu Âu có thể khác hoàn toàn tùy bạn bay với Air France, KLM, Lufthansa hay một hãng không thuộc EU.",
        ],
        bullets: [
          "Paris → TP.HCM: thường có thể nằm trong phạm vi EU261 vì chuyến bay khởi hành từ EU.",
          "TP.HCM → Paris do Air France khai thác: thường có thể nằm trong phạm vi EU261.",
          "TP.HCM → Paris do hãng không thuộc EU khai thác: thường không phải là ca điển hình của EU261 cho chính chặng đó.",
        ],
      },
      {
        title: "2. Khi nào phát sinh bồi thường 250 / 400 / 600 EUR?",
        paragraphs: [
          "Bồi thường theo EU261 không tự động phát sinh chỉ vì chuyến bay có vấn đề. Với chuyến bay bị hoãn, câu hỏi quan trọng nhất là bạn đến điểm đến cuối cùng chậm bao lâu. Trong phần lớn hồ sơ, mốc 3 giờ tại điểm đến cuối cùng là mốc then chốt.",
          "Với chuyến bay bị hủy, kết quả phụ thuộc vào việc hãng thông báo trước bao lâu, có đưa ra chuyến thay thế hợp lý hay không, và bạn đến cuối cùng muộn hơn lịch ban đầu bao nhiêu. Vì vậy từ “bị hủy” chưa đủ để kết luận ngay rằng chắc chắn có tiền.",
        ],
        bullets: [
          "250 EUR thường gắn với chặng ngắn.",
          "400 EUR thường gắn với chặng trung bình và nhiều chặng châu Âu - Trung Đông / Bắc Phi.",
          "600 EUR thường gắn với long-haul khi hồ sơ thật sự nằm trong phạm vi EU261.",
        ],
      },
      {
        title: "3. Bồi thường, hoàn tiền và hỗ trợ không phải là một",
        paragraphs: [
          "Đây là điểm nhiều người dùng Việt Nam nhầm lẫn nhất. Hoàn tiền vé là quyền liên quan tới giá trị phần hành trình bạn không sử dụng. Bồi thường là khoản tiền bổ sung cho sự bất tiện khi hồ sơ đáp ứng đúng điều kiện của EU261.",
          "Ngoài ra còn có quyền được hỗ trợ trong lúc chờ đợi, ví dụ ăn uống, khách sạn hoặc phương tiện đưa đón trong một số tình huống. Một hãng có thể phải hỗ trợ bạn ngay tại sân bay, nhưng điều đó không đồng nghĩa hồ sơ chắc chắn đủ điều kiện để nhận khoản 250 / 400 / 600 EUR.",
        ],
        bullets: [
          "Refund = trả lại tiền vé hoặc phần vé chưa sử dụng.",
          "Compensation = khoản tiền bồi thường độc lập theo EU261.",
          "Care / assistance = hỗ trợ phát sinh trong quá trình chờ đợi.",
        ],
      },
      {
        title: "4. Hành khách Việt nên giữ những gì để hồ sơ mạnh hơn?",
        paragraphs: [
          "Ngay khi chuyến bay bị hoãn, bị hủy hoặc bị đổi lịch, bạn nên bắt đầu gom chứng cứ. Các hồ sơ long-haul và nối chuyến qua châu Âu thường mất sức vì hành khách chỉ nhớ giờ cất cánh chậm, nhưng không lưu bằng chứng về giờ đến cuối cùng hoặc email đổi lịch.",
          "Nếu hành trình có transit, hãy giữ đầy đủ dữ liệu của toàn bộ booking thay vì chỉ chặng bị lỗi. Trong nhiều hồ sơ, điểm đến cuối cùng và hãng khai thác thực tế mới là chi tiết quyết định, không phải đoạn bạn nhìn thấy rõ nhất trong ứng dụng đặt vé.",
        ],
        bullets: [
          "Mã đặt chỗ, vé điện tử, email xác nhận.",
          "Boarding pass nếu còn giữ được.",
          "Email, SMS hoặc thông báo app về delay / cancellation / reschedule.",
          "Ảnh bảng điện tử hoặc ảnh chụp giờ đến cuối cùng nếu có thể.",
          "Biên lai chi phí phát sinh hợp lý.",
        ],
      },
    ],
    faqs: [
      {
        question: "EU261 có áp dụng cho chuyến bay từ Việt Nam sang châu Âu không?",
        answer:
          "Có thể, nhưng không phải mọi trường hợp. Với chặng bay từ ngoài EU vào EU, yếu tố rất quan trọng là hãng khai thác thực tế có phải hãng hàng không EU hay không.",
      },
      {
        question: "Chỉ cần chuyến bay bị trễ là sẽ có bồi thường?",
        answer:
          "Không. Trong phần lớn hồ sơ, cần xem bạn đến điểm đến cuối cùng chậm bao nhiêu, chuyến bay có nằm trong phạm vi EU261 hay không, và hãng có viện dẫn được lý do loại trừ hay không.",
      },
      {
        question: "Nhận hoàn tiền vé rồi có còn thể được bồi thường không?",
        answer:
          "Trong nhiều tình huống, hoàn tiền vé và bồi thường là hai vấn đề khác nhau. Tuy nhiên kết quả cụ thể vẫn phụ thuộc vào hoàn cảnh chuyến bay, thông báo của hãng và cách bạn đã chấp nhận phương án thay thế.",
      },
      {
        question: "Không còn boarding pass thì có hết cơ hội không?",
        answer:
          "Không hẳn. Boarding pass rất hữu ích, nhưng hồ sơ vẫn có thể được đánh giá bằng các chứng cứ khác như PNR, email xác nhận, lịch sử app và thông báo đổi chuyến.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra hồ sơ EU261 bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "eu261-la-gi-va-khi-nao-duoc-ap-dung",
          content: "general_check",
        }),
        placement: "vi_article_eu261_general_check",
        description:
          "Dùng khi bạn chưa chắc hồ sơ là delay, cancellation hay đổi lịch đáng kể và muốn kiểm tra tổng quát trước.",
      },
      {
        label: "Mở luồng cho chuyến bay bị hoãn",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "eu261-la-gi-va-khi-nao-duoc-ap-dung",
          content: "delayed_flow",
        }),
        placement: "vi_article_eu261_delayed_flow",
        description:
          "Phù hợp nếu vấn đề chính là đến muộn và bạn muốn kiểm tra nhanh mốc chậm giờ ở điểm đến cuối cùng.",
      },
      {
        label: "Mở luồng cho chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "eu261-la-gi-va-khi-nao-duoc-ap-dung",
          content: "cancelled_flow",
        }),
        placement: "vi_article_eu261_cancelled_flow",
        description:
          "Phù hợp nếu bạn nhận thông báo hủy chuyến, bị dời sang chuyến khác hoặc bị đổi lịch sát ngày bay.",
      },
    ],
  },
  {
    slug: "chuyen-bay-bi-tre-khi-nao-duoc-boi-thuong-den-600",
    title: "Chuyến bay bị trễ: khi nào được bồi thường đến €600?",
    seoTitle:
      "Chuyến bay bị trễ: khi nào hành khách Việt có thể được bồi thường đến €600?",
    description:
      "Hướng dẫn bằng tiếng Việt cho case chuyến bay bị trễ hoặc bị hoãn: mốc 3 giờ tại điểm đến cuối cùng, logic 250 / 400 / 600 EUR và khi nào hồ sơ delay thực sự mạnh theo EU261.",
    excerpt:
      "Bài high-intent quan trọng nhất cho case delay: khi nào một chuyến bay bị trễ thực sự đủ điều kiện để phát sinh bồi thường, vì sao giờ đến cuối cùng quan trọng hơn giờ cất cánh và khi nào long-haul có thể chạm mức €600.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "Core EU261",
    featured: true,
    heroEyebrow: "Delay compensation cho hành khách Việt",
    heroSummary:
      "Một chuyến bay bị trễ không tự động tạo ra quyền nhận €600. Trước hết cần nhìn vào phạm vi áp dụng EU261, sau đó là thời gian đến muộn tại điểm đến cuối cùng và cuối cùng là lý do thật sự của việc chậm chuyến.",
    quickAnswer: [
      "Trong nhiều hồ sơ EU261, mốc quan trọng nhất là bạn đến điểm đến cuối cùng chậm từ 3 giờ trở lên, không phải chỉ nhìn vào giờ cất cánh.",
      "Mức €250 / €400 / €600 thường phụ thuộc vào khoảng cách chuyến bay, nhưng chỉ xuất hiện khi case delay thật sự nằm trong phạm vi EU261.",
      "Với hành khách Việt, nhóm dễ tạo ra hồ sơ delay mạnh nhất thường là các chặng châu Âu → Việt Nam hoặc các chặng từ Việt Nam vào EU do hãng hàng không EU khai thác.",
    ],
    keyPoints: [
      "Arrival delay tại điểm đến cuối cùng thường quan trọng hơn departure delay.",
      "Transit trên cùng một booking có thể biến một delay nhỏ thành hồ sơ mạnh.",
      "Long-haul không tự động đồng nghĩa với €600 nếu case không thuộc phạm vi EU261.",
      "Không phải mọi lý do hãng nêu ra đều tự động loại trừ compensation.",
    ],
    sections: [
      {
        title: "1. Khi nào chuyến bay bị trễ mới thực sự là hồ sơ bồi thường?",
        paragraphs: [
          "Câu hỏi quan trọng nhất không phải là máy bay cất cánh muộn bao nhiêu, mà là bạn đến điểm đến cuối cùng muộn bao nhiêu. Trong nhiều hồ sơ EU261, mốc 3 giờ tại điểm đến cuối cùng là mốc mở đầu cho việc đánh giá compensation.",
          "Điều này đặc biệt quan trọng với hành khách Việt bay long-haul hoặc nối chuyến qua các hub như Frankfurt, Paris CDG, Amsterdam Schiphol hay Vienna. Một chặng đầu chỉ chậm vừa phải vẫn có thể kéo cả hành trình đến cuối cùng muộn hơn nhiều giờ.",
        ],
        bullets: [
          "Delay ở cổng khởi hành không đủ để kết luận ngay về compensation.",
          "Nếu có transit, hãy luôn nhìn vào giờ đến cuối cùng của toàn hành trình.",
          "Một booking duy nhất thường là chi tiết rất quan trọng trong case missed connection.",
        ],
      },
      {
        title: "2. Điều kiện đầu tiên: chuyến bay phải nằm trong phạm vi EU261",
        paragraphs: [
          "EU261 thường áp dụng mạnh với các chuyến bay khởi hành từ EU. Với các chuyến bay từ ngoài EU vào EU, quyền này thường chỉ mạnh khi chặng đó do hãng hàng không EU khai thác thực tế.",
          "Vì vậy, cùng là hành trình Việt Nam - châu Âu, kết quả có thể rất khác nhau giữa một chặng do Air France, KLM, Lufthansa hay SWISS khai thác và một chặng do hãng ngoài EU khai thác.",
        ],
        bullets: [
          "Paris → Hà Nội bị trễ: thường là nhóm hồ sơ đáng kiểm tra kỹ.",
          "TP.HCM → Paris do hãng EU khai thác: có thể vẫn là case EU261 mạnh.",
          "TP.HCM → Paris do hãng ngoài EU khai thác: không phải mẫu hồ sơ mạnh điển hình cho chính chặng đó.",
        ],
      },
      {
        title: "3. Vì sao có người được €250, có người €400 và có người €600?",
        paragraphs: [
          "Ba mức này thường gắn với khoảng cách chuyến bay. Các chặng ngắn hơn thường nghiêng về €250, chặng trung bình thường nghiêng về €400, còn long-haul đủ điều kiện mới có thể chạm €600.",
          "Nhưng khoảng cách chỉ là một phần của bài toán. Nếu case không nằm trong phạm vi EU261 hoặc hãng có căn cứ loại trừ hợp lệ, việc chuyến bay rất dài cũng không tự động tạo ra mức €600.",
        ],
        bullets: [
          "€250 thường gắn với chặng ngắn.",
          "€400 thường gắn với chặng trung bình hoặc nhiều chặng trong và quanh châu Âu.",
          "€600 thường gắn với long-haul đủ điều kiện, ví dụ một số tuyến châu Âu → Việt Nam.",
        ],
      },
      {
        title: "4. Delay vì transit vỡ: đây là nơi nhiều hồ sơ Việt Nam trở nên rất mạnh",
        paragraphs: [
          "Với traffic Việt Nam, case hay gặp nhất không phải lúc nào cũng là một chặng bay thẳng đến muộn. Nhiều người bay nối chuyến qua châu Âu, và chính việc lỡ chuyến nối khiến arrival delay ở điểm đến cuối cùng vượt xa 3 giờ.",
          "Nếu các chặng nằm trên cùng một booking, toàn bộ hành trình thường cần được nhìn như một case duy nhất. Đây là lý do tại sao bạn nên giữ đầy đủ email xác nhận, boarding pass của từng chặng và thông báo đổi chuyến từ hãng.",
        ],
        bullets: [
          "Một delay nhỏ ở chặng đầu có thể phá toàn bộ hành trình long-haul.",
          "Missed connection trên cùng booking thường mạnh hơn self-transfer.",
          "Giờ đến cuối cùng mới là tâm điểm khi đánh giá hồ sơ transit.",
        ],
      },
      {
        title: "5. Lý do hãng đưa ra có phải lúc nào cũng chặn compensation?",
        paragraphs: [
          "Không. Việc hãng viện dẫn một lý do nào đó không có nghĩa hồ sơ tự động hết cơ hội. Một số tình huống thật sự bất thường có thể loại trừ compensation, nhưng cũng có nhiều tình huống cần xem kỹ xem đó là vấn đề bên ngoài hay chỉ là khó khăn vận hành nội bộ.",
          "Vì thế, nếu hãng chỉ gửi một câu trả lời mẫu hoặc mô tả rất chung, đừng vội tự kết luận rằng case đã hết khả năng. Với hồ sơ delay, phần giải thích của hãng luôn nên được đối chiếu với toàn bộ dữ liệu chuyến bay.",
        ],
      },
      {
        title: "6. Hành khách Việt nên làm gì ngay khi chuyến bay bị trễ?",
        paragraphs: [
          "Ngay tại sân bay hoặc ngay khi nhận thông báo delay, bạn nên bắt đầu gom chứng cứ. Những gì hữu ích nhất thường là mã đặt chỗ, boarding pass, ảnh bảng giờ bay, email thông báo chậm chuyến và giờ đến cuối cùng nếu có thể ghi nhận được.",
          "Nếu delay kéo dài và phát sinh ăn uống, khách sạn hoặc taxi hợp lý, hãy giữ biên lai. Trong nhiều case long-haul, hồ sơ mạnh không chỉ vì delay đủ lâu, mà còn vì người dùng giữ được toàn bộ dòng bằng chứng một cách sạch và nhất quán.",
        ],
        bullets: [
          "Giữ PNR, vé điện tử và toàn bộ email liên quan.",
          "Chụp ảnh bảng điện tử và thông báo delay nếu có.",
          "Giữ boarding pass của cả chặng đầu lẫn chặng nối chuyến.",
          "Lưu biên lai chi phí phát sinh hợp lý.",
        ],
      },
    ],
    faqs: [
      {
        question: "Trễ 2 tiếng có được bồi thường tiền mặt không?",
        answer:
          "Trong nhiều hồ sơ EU261, mốc quan trọng với compensation tiền mặt là đến điểm đến cuối cùng chậm từ 3 giờ trở lên. Delay 2 giờ thường chưa phải mốc điển hình để phát sinh compensation.",
      },
      {
        question: "Trễ 3 tiếng được bao nhiêu tiền?",
        answer:
          "Không có một mức cố định cho mọi chuyến bay. Sau mốc 3 giờ, mức €250 / €400 / €600 thường còn phụ thuộc vào khoảng cách hành trình và việc case có thực sự nằm trong phạm vi EU261 hay không.",
      },
      {
        question: "Bay giá rẻ có được bồi thường không?",
        answer:
          "Có thể. Việc là hãng low-cost không tự loại trừ EU261. Điều quan trọng vẫn là phạm vi áp dụng của quy định, giờ đến cuối cùng và bối cảnh delay thực tế.",
      },
      {
        question: "Nếu lỡ chuyến nối vì chặng đầu bị trễ thì sao?",
        answer:
          "Đây có thể là một case rất đáng kiểm tra, đặc biệt nếu toàn bộ hành trình nằm trên cùng một booking. Với transit, việc đến nơi cuối cùng muộn hơn 3 giờ thường là chi tiết quyết định.",
      },
      {
        question: "Không còn boarding pass thì có còn cơ hội không?",
        answer:
          "Có thể vẫn còn. Boarding pass rất hữu ích, nhưng hồ sơ delay vẫn có thể được đánh giá bằng các dữ liệu khác như PNR, email xác nhận, lịch sử ứng dụng và thông báo từ hãng.",
      },
    ],
    claimVariant: "delayed",
    contextualLinks: [
      {
        label: "Kiểm tra ngay hồ sơ chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "chuyen-bay-bi-tre-khi-nao-duoc-boi-thuong-den-600",
          content: "delay_primary_flow",
        }),
        placement: "vi_article_delay_600_primary_flow",
        description:
          "Dành cho case đến muộn, lỡ nối chuyến hoặc nghi ngờ arrival delay đã vượt quá mốc 3 giờ.",
      },
      {
        label: "Kiểm tra hồ sơ tổng quát bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "chuyen-bay-bi-tre-khi-nao-duoc-boi-thuong-den-600",
          content: "general_check",
        }),
        placement: "vi_article_delay_600_general_check",
        description:
          "Phù hợp nếu bạn chưa chắc case của mình là delay thuần túy, cancellation ngầm hay thay đổi lịch đáng kể.",
      },
      {
        label: "Nếu hãng đã đổi sang chuyến khác",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "chuyen-bay-bi-tre-khi-nao-duoc-boi-thuong-den-600",
          content: "reroute_or_cancelled_flow",
        }),
        placement: "vi_article_delay_600_reroute_flow",
        description:
          "Dùng khi case ban đầu là delay nhưng thực tế hãng đã chuyển bạn sang một chuyến thay thế hoặc đổi lịch đáng kể.",
      },
    ],
  },
  {
    slug: "chuyen-bay-bi-huy-quyen-loi-va-cach-nhan-tien",
    title: "Chuyến bay bị hủy – quyền lợi và cách nhận tiền",
    seoTitle:
      "Chuyến bay bị hủy: quyền lợi của hành khách Việt và cách nhận tiền đúng",
    description:
      "Hướng dẫn bằng tiếng Việt về chuyến bay bị hủy: refund, re-routing, compensation, quy tắc 14 ngày, voucher hay tiền mặt và cách kiểm tra hồ sơ cancellation theo EU261.",
    excerpt:
      "Bài high-intent cho case cancellation: khi nào bạn có quyền được hoàn tiền, khi nào có thể nhận thêm bồi thường, vì sao rerouting không tự động làm mất compensation và cách hành khách Việt nên xử lý hồ sơ để nhận tiền đúng.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "Core EU261",
    featured: true,
    heroEyebrow: "Cancellation rights cho hành khách Việt",
    heroSummary:
      "Khi chuyến bay bị hủy, câu hỏi không chỉ là có được tiền hay không. Hành khách thường có ba lớp quyền cần tách riêng: hoàn tiền, đổi chuyến và trong nhiều trường hợp là bồi thường thêm theo EU261.",
    quickAnswer: [
      "Nếu chuyến bay bị hủy, hành khách thường có quyền chọn giữa hoàn tiền, đổi chuyến sớm nhất hoặc đổi sang ngày khác thuận tiện hơn, tùy điều kiện chỗ ngồi.",
      "Nếu hãng thông báo hủy chuyến dưới 14 ngày trước giờ khởi hành, bạn có thể có thêm quyền nhận compensation, trừ khi hãng chứng minh được hoàn cảnh bất thường hoặc đưa ra rerouting đủ sát lịch gốc.",
      "Ngay cả khi không có compensation, quyền được refund, re-routing và hỗ trợ tại sân bay vẫn rất quan trọng với case cancellation.",
    ],
    keyPoints: [
      "Cancellation không chỉ là mất chuyến bay mà là một gói quyền lợi riêng biệt.",
      "Refund, compensation và assistance là ba vấn đề khác nhau.",
      "Nếu hãng dời giờ bay sớm hơn hơn 1 giờ, tình huống đó thường được xử lý như cancellation.",
      "Voucher không phải lúc nào cũng là lựa chọn tốt nhất nếu bạn thực sự muốn nhận tiền mặt.",
    ],
    sections: [
      {
        title: "1. Khi nào một chuyến bay được coi là bị hủy?",
        paragraphs: [
          "Case cancellation không chỉ xảy ra khi hãng gửi email ghi rõ là hủy chuyến. Theo cách hiểu thực tế của quyền hành khách EU, một chuyến bay cũng có thể bị coi là bị hủy khi lịch gốc bị bỏ hẳn và bạn bị chuyển sang chuyến khác.",
          "Một chi tiết rất quan trọng với traffic tìm kiếm là trường hợp giờ bay bị đẩy sớm. Nếu chuyến bay bị đưa lên sớm hơn đáng kể, nhất là hơn 1 giờ so với lịch ban đầu, tình huống đó thường được xử lý theo logic của cancellation chứ không chỉ là thay đổi nhỏ.",
        ],
        bullets: [
          "Hãng bỏ hẳn chuyến gốc và chuyển bạn sang chuyến khác.",
          "Máy bay quay lại sân bay đi và bạn được chuyển sang hành trình khác.",
          "Giờ khởi hành bị đưa lên sớm hơn hơn 1 giờ so với lịch ban đầu.",
        ],
      },
      {
        title: "2. Quyền đầu tiên: hoàn tiền, đổi chuyến hoặc quay lại điểm xuất phát",
        paragraphs: [
          "Khi chuyến bay bị hủy, quyền nền tảng nhất của hành khách là được chọn giữa hoàn tiền vé, đi chuyến thay thế sớm nhất hoặc đi vào thời điểm khác thuận tiện hơn nếu còn chỗ. Đây là phần nhiều người bỏ qua vì chỉ tập trung vào compensation.",
          "Nếu hành trình có nối chuyến và việc hủy làm chuyến đi mất ý nghĩa, hồ sơ có thể còn kéo theo quyền hoàn tiền cho phần hành trình chưa thực hiện, thậm chí kèm return flight về điểm khởi hành đầu tiên trong một số tình huống cụ thể.",
        ],
        bullets: [
          "Refund thường là trả lại tiền vé cho phần hành trình không còn dùng được.",
          "Re-routing là hãng phải tìm phương án để bạn vẫn tới được điểm đến cuối cùng.",
          "Nếu hãng tự ý hoàn tiền mà không đưa quyền chọn rõ ràng, hồ sơ có thể phát sinh thêm vấn đề về chi phí chênh lệch vé mới.",
        ],
      },
      {
        title: "3. Khi nào cancellation có thể tạo ra compensation?",
        paragraphs: [
          "Một chuyến bay bị hủy không tự động tạo ra khoản bồi thường tiền mặt. Câu hỏi đầu tiên là bạn có được thông báo dưới 14 ngày trước giờ khởi hành hay không. Nếu có, hồ sơ bắt đầu bước vào vùng có khả năng phát sinh compensation.",
          "Nhưng vẫn phải xem hãng có đưa ra chuyến thay thế đủ gần với lịch ban đầu hay không. Có những trường hợp hãng thông báo sát ngày nhưng rerouting vẫn đủ gần để làm giảm hoặc loại trừ compensation. Vì vậy chỉ riêng mốc dưới 14 ngày là chưa đủ để kết luận toàn bộ hồ sơ.",
        ],
        bullets: [
          "Thông báo hơn 14 ngày trước chuyến bay: thường không phải nhóm mạnh cho compensation.",
          "Thông báo trong khoảng 7 đến 14 ngày: cần nhìn kỹ khung giờ rerouting.",
          "Thông báo dưới 7 ngày: case thường mạnh hơn, nhưng vẫn phải kiểm tra lịch thay thế thực tế.",
        ],
      },
      {
        title: "4. Vì sao rerouting không có nghĩa là bạn mất quyền nhận tiền?",
        paragraphs: [
          "Nhiều hành khách Việt nghĩ rằng chỉ cần chấp nhận chuyến bay thay thế là đã hết quyền đòi tiền. Thực tế không hẳn như vậy. Nếu rerouting làm bạn đến cuối cùng muộn đáng kể hoặc được hãng đề nghị trong khung giờ không đủ sát lịch gốc, compensation vẫn có thể còn mở.",
          "Điều này đặc biệt quan trọng với các hành trình long-haul châu Âu - Việt Nam hoặc case transit qua hub EU. Một chuyến thay thế có thể cứu được hành trình, nhưng vẫn không nhất thiết xóa toàn bộ quyền lợi về compensation.",
        ],
      },
      {
        title: "5. Voucher hay tiền mặt: điều gì thực sự quan trọng?",
        paragraphs: [
          "Trong case cancellation, hãng rất hay đề nghị voucher thay vì hoàn tiền mặt. Với người dùng đang cần đi lại tiếp, voucher đôi khi có vẻ tiện. Nhưng nếu bạn ưu tiên lấy lại tiền hoặc không chắc còn sử dụng hãng đó, voucher không phải lúc nào cũng là lựa chọn tốt.",
          "Điểm quan trọng là đừng vội coi voucher là mặc định. Trước khi chấp nhận, bạn nên nhìn rõ mình đang từ bỏ điều gì, đặc biệt là trong những case mà hồ sơ cancellation còn có thể kéo theo refund và compensation song song.",
        ],
      },
      {
        title: "6. Hành khách Việt nên chuẩn bị gì để nhận tiền đúng và nhanh hơn?",
        paragraphs: [
          "Ngay khi chuyến bay bị hủy, bạn nên lưu lại email hoặc tin nhắn thông báo hủy, thời điểm bạn nhận được thông báo và phương án thay thế mà hãng đề xuất. Đây là các chi tiết có giá trị trực tiếp khi đánh giá mốc dưới 14 ngày và chất lượng rerouting.",
          "Ngoài ra, hãy giữ PNR, vé điện tử, boarding pass nếu còn, ảnh bảng điện tử, cũng như biên lai ăn uống, khách sạn hay taxi nếu hãng không tự cung cấp hỗ trợ. Với hành trình transit, dữ liệu của toàn bộ booking còn quan trọng hơn riêng chặng bị hủy.",
        ],
        bullets: [
          "Email hoặc SMS báo hủy chuyến và thời gian nhận thông báo.",
          "Đề xuất rerouting của hãng, bao gồm giờ đi và giờ đến mới.",
          "PNR, vé điện tử, boarding pass còn giữ được.",
          "Biên lai chi phí phát sinh hợp lý nếu hãng không hỗ trợ đầy đủ.",
        ],
      },
    ],
    faqs: [
      {
        question: "Chuyến bay bị hủy có luôn được hoàn tiền không?",
        answer:
          "Hành khách thường có quyền chọn giữa hoàn tiền và phương án đi lại thay thế. Tuy nhiên kết quả cụ thể còn phụ thuộc vào việc bạn chọn refund, rerouting hay tiếp tục hành trình theo phương án mới của hãng.",
      },
      {
        question: "Bị hủy dưới 14 ngày có chắc chắn được bồi thường không?",
        answer:
          "Không chắc chắn tuyệt đối. Đây là mốc rất quan trọng, nhưng vẫn cần xem hãng có chứng minh được hoàn cảnh bất thường hay có đưa ra chuyến thay thế đủ sát lịch gốc hay không.",
      },
      {
        question: "Nếu hãng đổi chuyến cho tôi thì còn được tiền không?",
        answer:
          "Có thể vẫn được. Rerouting không tự động xóa quyền compensation. Hồ sơ cần được xem tiếp theo giờ đến cuối cùng và mức độ lệch so với lịch ban đầu.",
      },
      {
        question: "Refund phải được trả trong bao lâu?",
        answer:
          "Với quyền hành khách EU, hoàn tiền vé thường phải được xử lý trong vòng 7 ngày. Nếu hãng chậm trễ, bạn nên giữ toàn bộ trao đổi và theo dõi hồ sơ sát hơn.",
      },
      {
        question: "Nếu hãng nói hủy do đình công thì sao?",
        answer:
          "Không phải mọi cuộc đình công đều có cùng hệ quả. Trong nhiều trường hợp, đình công nội bộ của hãng không tự động loại trừ compensation, còn đình công bên ngoài như kiểm soát không lưu có thể được đánh giá khác.",
      },
    ],
    claimVariant: "cancelled",
    contextualLinks: [
      {
        label: "Kiểm tra ngay hồ sơ chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "chuyen-bay-bi-huy-quyen-loi-va-cach-nhan-tien",
          content: "cancelled_primary_flow",
        }),
        placement: "vi_article_cancelled_rights_primary_flow",
        description:
          "Dành cho case hãng đã hủy chuyến, đẩy bạn sang chuyến khác hoặc thay đổi lịch bay đáng kể gần ngày khởi hành.",
      },
      {
        label: "Kiểm tra hồ sơ tổng quát bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "chuyen-bay-bi-huy-quyen-loi-va-cach-nhan-tien",
          content: "general_check",
        }),
        placement: "vi_article_cancelled_rights_general_check",
        description:
          "Phù hợp nếu hồ sơ của bạn có cả yếu tố delay, rerouting và cancellation nên cần một điểm vào trung tính hơn.",
      },
      {
        label: "Nếu case thực ra là delay dài sau rerouting",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "chuyen-bay-bi-huy-quyen-loi-va-cach-nhan-tien",
          content: "delay_after_reroute",
        }),
        placement: "vi_article_cancelled_rights_delay_after_reroute",
        description:
          "Dùng khi hãng đổi bạn sang chuyến khác và vấn đề chính của hồ sơ chuyển thành đến cuối cùng muộn hơn nhiều giờ.",
      },
    ],
  },
  {
    slug: "eu-to-viet-nam-khi-nao-duoc-ap-dung-eu261",
    title: "EU → Việt Nam: khi nào được áp dụng EU261?",
    seoTitle:
      "EU → Việt Nam: khi nào hành khách Việt được áp dụng EU261 và đòi đến €600?",
    description:
      "Hướng dẫn bằng tiếng Việt cho các chuyến bay từ châu Âu sang Việt Nam: khi nào EU261 áp dụng, vai trò của hãng khai thác, transit trên cùng booking và khi nào hành khách có thể yêu cầu compensation.",
    excerpt:
      "Một trong những bài route quan trọng nhất cho thị trường Việt Nam. Nếu hành trình khởi hành từ EU sang Việt Nam, EU261 thường mạnh hơn nhiều người nghĩ, kể cả trong một số case có chặng nối do hãng ngoài EU khai thác.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "Routes & hub logic",
    featured: true,
    heroEyebrow: "Europe → Vietnam route logic",
    heroSummary:
      "Với hành trình khởi hành từ châu Âu sang Việt Nam, EU261 thường là một khung bảo vệ rất mạnh. Điểm quyết định đầu tiên chính là nơi hành trình bắt đầu, sau đó mới đến chuyện delay, cancellation, transit và hãng khai thác từng chặng.",
    quickAnswer: [
      "Nếu chuyến bay khởi hành từ EU đi Việt Nam, EU261 thường áp dụng dù hãng khai thác là hãng EU hay hãng ngoài EU.",
      "Nếu hành trình có nối chuyến trên cùng một booking và xuất phát từ EU, điểm đến cuối cùng ở Việt Nam mới là mốc quan trọng để đánh giá delay và missed connection.",
      "Các case mạnh nhất thường là delay hơn 3 giờ tại điểm đến cuối cùng hoặc cancellation được thông báo dưới 14 ngày trước giờ khởi hành.",
    ],
    keyPoints: [
      "Xuất phát từ EU là lợi thế pháp lý lớn nhất cho tuyến châu Âu → Việt Nam.",
      "Không phải cứ bay hãng ngoài EU là mất EU261 nếu hành trình bắt đầu từ EU.",
      "Một booking duy nhất giúp hồ sơ transit mạnh hơn rất nhiều.",
      "Delay, cancellation và re-routing cần được đánh giá ở cấp toàn hành trình, không chỉ một chặng.",
    ],
    sections: [
      {
        title: "1. Quy tắc nền tảng: xuất phát từ EU thường đủ để EU261 áp dụng",
        paragraphs: [
          "Đối với thị trường Việt Nam, đây là nguyên tắc có giá trị thương mại và SEO cao nhất: nếu chuyến bay khởi hành từ EU tới Việt Nam, EU261 thường áp dụng bất kể hãng khai thác là hãng EU hay hãng ngoài EU.",
          "Nói cách khác, với hành trình Paris → Hà Nội, Frankfurt → TP.HCM hay Amsterdam → Hà Nội, lợi thế pháp lý bắt đầu từ chính nơi khởi hành. Đây là lý do các tuyến Europe → Vietnam thường mạnh hơn rất nhiều so với chiều bay ngược lại từ Việt Nam vào châu Âu.",
        ],
        bullets: [
          "Paris → Hà Nội do Air France khai thác: thường nằm trong phạm vi EU261.",
          "Frankfurt → TP.HCM do hãng ngoài EU khai thác: vẫn có thể nằm trong phạm vi EU261 vì chuyến bay khởi hành từ EU.",
          "Logic cốt lõi ở đây là nơi khởi hành, không chỉ quốc tịch của hãng bay.",
        ],
      },
      {
        title: "2. Điều gì xảy ra nếu có transit qua một hub khác trong châu Âu hoặc châu Á?",
        paragraphs: [
          "Rất nhiều hành khách Việt không bay thẳng mà đi theo hành trình như Vienna → Doha → Hà Nội hoặc Amsterdam → Bangkok → TP.HCM. Trong những hồ sơ này, điều quan trọng là xem toàn bộ hành trình có nằm trên một booking duy nhất hay không.",
          "Nếu chuyến đi bắt đầu từ EU và các chặng được bán như một hành trình thống nhất, điểm đến cuối cùng ở Việt Nam thường là mốc để đánh giá việc đến muộn, missed connection và khả năng phát sinh compensation.",
        ],
        bullets: [
          "Một delay nhỏ tại chặng đầu trong EU có thể tạo ra missed connection mạnh ở chặng sau.",
          "Điểm đến cuối cùng mới là mốc chính để đánh giá arrival delay.",
          "Self-transfer và multi-ticket riêng lẻ thường yếu hơn một booking thống nhất.",
        ],
      },
      {
        title: "3. Nếu chặng nối từ ngoài EU do hãng ngoài EU khai thác thì sao?",
        paragraphs: [
          "Đây là nơi nhiều người dùng nhầm. Với hành trình khởi hành từ EU, một chuyến nối ra ngoài EU hoặc tới Việt Nam vẫn có thể được nhìn ở cấp toàn hành trình nếu bạn đi trên một booking và sự cố làm bạn đến cuối cùng muộn hơn đáng kể.",
          "Nói cách khác, điều hành thương mại phức tạp hoặc sự hiện diện của một chặng do hãng ngoài EU khai thác không tự động phá hỏng case. Với tuyến xuất phát từ EU, EU261 thường vẫn là khung đánh giá quan trọng nhất cho delay và missed connection tại điểm đến cuối cùng.",
        ],
      },
      {
        title: "4. Khi nào route EU → Việt Nam có thể dẫn tới compensation?",
        paragraphs: [
          "Với delay, câu hỏi lớn nhất thường là bạn có đến nơi cuối cùng tại Việt Nam chậm từ 3 giờ trở lên hay không. Với cancellation, câu hỏi đầu tiên là bạn có được thông báo dưới 14 ngày trước giờ khởi hành hay không, sau đó mới tới chất lượng rerouting.",
          "Vì phần lớn tuyến EU → Việt Nam là long-haul, nhiều hồ sơ đủ điều kiện có thể rơi vào nhóm €600. Tuy nhiên điều đó không tự động xảy ra chỉ vì đường bay dài. Hồ sơ vẫn cần vượt qua hai tầng lọc: thuộc phạm vi EU261 và không bị loại trừ bởi hoàn cảnh bất thường hoặc rerouting đủ sát.",
        ],
        bullets: [
          "Delay tại điểm đến cuối cùng từ 3 giờ trở lên là mốc then chốt.",
          "Cancellation dưới 14 ngày thường là nhóm cần kiểm tra rất kỹ.",
          "Rerouting vẫn có thể để ngỏ compensation nếu bạn đến muộn đáng kể.",
        ],
      },
      {
        title: "5. Những tuyến nào đáng ưu tiên kiểm tra nhất?",
        paragraphs: [
          "Từ góc nhìn market fit cho tiếng Việt, các tuyến như London, Paris, Frankfurt, Amsterdam và Vienna đi Hà Nội hoặc TP.HCM là nhóm có giá trị cao nhất. Đây là nơi long-haul, transit logic và ticket value gặp nhau.",
          "Ngay cả khi người dùng không chắc case của mình là delay hay cancellation, chỉ cần biết hành trình bắt đầu từ châu Âu đi Việt Nam cũng đã là tín hiệu đủ mạnh để khuyên họ kiểm tra hồ sơ thay vì tự loại trừ cơ hội.",
        ],
      },
      {
        title: "6. Hành khách Việt nên giữ gì ở các hồ sơ Europe → Vietnam?",
        paragraphs: [
          "Bạn nên giữ đầy đủ PNR, email xác nhận, boarding pass từng chặng, thông báo delay hoặc cancellation và đặc biệt là bằng chứng về giờ đến cuối cùng tại Việt Nam. Với hành trình dài, người dùng rất hay giữ bằng chứng giờ khởi hành nhưng quên chi tiết quyết định là giờ đến cuối cùng.",
          "Nếu chuyến đi bị dời sang ngày hôm sau hoặc transit bị vỡ, hãy giữ thêm biên lai khách sạn, ăn uống, taxi và mọi thông báo rerouting. Những tài liệu này không chỉ phục vụ compensation mà còn hỗ trợ phần refund hoặc reimbursement chi phí hợp lý nếu cần.",
        ],
        bullets: [
          "PNR và toàn bộ email xác nhận hành trình.",
          "Boarding pass của cả chặng khởi hành từ EU lẫn chặng vào Việt Nam.",
          "Ảnh bảng điện tử hoặc lịch sử app thể hiện delay hoặc gate change.",
          "Biên lai chi phí phát sinh hợp lý trong lúc chờ rerouting.",
        ],
      },
    ],
    faqs: [
      {
        question: "Bay từ châu Âu sang Việt Nam bằng hãng ngoài EU có được EU261 không?",
        answer:
          "Trong nhiều trường hợp là có, miễn là hành trình khởi hành từ EU. Đây chính là khác biệt lớn nhất giữa chiều bay Europe → Vietnam và chiều ngược lại Vietnam → Europe.",
      },
      {
        question: "Nếu lỡ chuyến nối và đến Hà Nội muộn hơn 3 giờ thì sao?",
        answer:
          "Nếu toàn bộ hành trình nằm trên một booking và xuất phát từ EU, đây thường là một case rất đáng kiểm tra theo logic missed connection và arrival delay tại điểm đến cuối cùng.",
      },
      {
        question: "Tuyến EU → Việt Nam có thường rơi vào mức €600 không?",
        answer:
          "Nhiều case đủ điều kiện trên tuyến dài này có thể chạm €600, nhưng mức tiền cuối cùng vẫn phụ thuộc vào khoảng cách, loại gián đoạn và việc hồ sơ có thực sự vượt qua các điều kiện của EU261 hay không.",
      },
      {
        question: "Nếu hãng đổi tôi sang chuyến khác thì còn được tiền không?",
        answer:
          "Có thể vẫn được. Với cancellation hoặc re-routing, điều quan trọng là bạn đến cuối cùng muộn bao nhiêu so với lịch ban đầu và hãng thông báo cho bạn trước bao lâu.",
      },
      {
        question: "Chiều Việt Nam → châu Âu có giống hệt không?",
        answer:
          "Không. Với chiều từ ngoài EU vào EU, vai trò của hãng khai thác thực tế trở nên quan trọng hơn nhiều. Vì vậy, Europe → Vietnam thường là nhóm đơn giản và mạnh hơn về mặt phạm vi áp dụng.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra hồ sơ Europe → Vietnam",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "eu-to-viet-nam-khi-nao-duoc-ap-dung-eu261",
          content: "general_route_check",
        }),
        placement: "vi_article_eu_vietnam_general_route_check",
        description:
          "Điểm vào tốt nhất nếu bạn biết hành trình bắt đầu từ châu Âu nhưng chưa chắc case là delay, cancellation hay transit vỡ.",
      },
      {
        label: "Nếu vấn đề chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "eu-to-viet-nam-khi-nao-duoc-ap-dung-eu261",
          content: "delay_route_flow",
        }),
        placement: "vi_article_eu_vietnam_delay_flow",
        description:
          "Dùng khi hành trình từ châu Âu sang Việt Nam đến cuối cùng muộn hơn nhiều giờ hoặc bị lỡ chuyến nối.",
      },
      {
        label: "Nếu vấn đề chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "eu-to-viet-nam-khi-nao-duoc-ap-dung-eu261",
          content: "cancelled_route_flow",
        }),
        placement: "vi_article_eu_vietnam_cancelled_flow",
        description:
          "Dùng khi hãng hủy chuyến xuất phát từ EU, đổi bạn sang chuyến khác hoặc dời lịch đáng kể trước khi bay sang Việt Nam.",
      },
    ],
  },
  {
    slug: "hang-hang-khong-chau-au-bay-tu-viet-nam-co-duoc-boi-thuong-khong",
    title: "Hãng hàng không châu Âu bay từ Việt Nam – có được bồi thường không?",
    seoTitle:
      "Bay từ Việt Nam với hãng hàng không châu Âu: khi nào vẫn được EU261 bồi thường?",
    description:
      "Hướng dẫn bằng tiếng Việt cho hành khách bay từ Việt Nam sang EU với hãng hàng không châu Âu: khi nào EU261 vẫn áp dụng, vai trò của hãng khai thác thực tế, transit và khi nào delay hoặc cancellation có thể phát sinh compensation.",
    excerpt:
      "Đây là một trong những bài có giá trị chuyển đổi cao nhất cho thị trường Việt Nam. Nhiều người nghĩ bay từ Việt Nam thì EU261 không áp dụng, nhưng nếu chặng vào EU do hãng hàng không EU khai thác thực tế, kết quả có thể hoàn toàn khác.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "Core EU261",
    featured: true,
    heroEyebrow: "Vietnam → EU with EU carrier",
    heroSummary:
      "Bay từ Việt Nam sang châu Âu không phải lúc nào cũng nằm ngoài EU261. Nếu chuyến bay của bạn đến EU và được khai thác bởi một hãng hàng không được cấp phép tại EU, bạn có thể vẫn có quyền theo EU261 cho case delay, cancellation hoặc missed connection.",
    quickAnswer: [
      "Nếu chuyến bay từ Việt Nam vào EU do hãng hàng không EU khai thác thực tế, EU261 có thể áp dụng dù hành trình bắt đầu ngoài EU.",
      "Điểm quyết định không phải chỉ là nơi bạn mua vé hay logo hiện trên booking, mà là hãng khai thác thực tế của chặng liên quan.",
      "Với delay, mốc quan trọng thường vẫn là đến điểm đến cuối cùng chậm từ 3 giờ trở lên; với cancellation, mốc quan trọng đầu tiên thường là thông báo dưới 14 ngày.",
    ],
    keyPoints: [
      "Vietnam → EU không tự động bị loại khỏi EU261.",
      "Hãng khai thác thực tế quan trọng hơn hãng bán vé hoặc website đặt vé.",
      "Một booking thống nhất làm case transit mạnh hơn đáng kể.",
      "EU carrier và non-EU carrier có thể cho kết quả hoàn toàn khác trên cùng một tuyến.",
    ],
    sections: [
      {
        title: "1. Quy tắc quan trọng nhất: từ ngoài EU vào EU vẫn có thể được bảo vệ",
        paragraphs: [
          "Đây là chỗ nhiều hành khách Việt bỏ lỡ cơ hội nhất. Dù hành trình bắt đầu tại TP.HCM, Hà Nội hay Đà Nẵng, EU261 vẫn có thể áp dụng nếu chuyến bay vào EU được khai thác bởi một hãng hàng không được cấp phép tại EU.",
          "Nói ngắn gọn: chiều bay `Việt Nam → châu Âu` không mạnh bằng chiều `châu Âu → Việt Nam`, nhưng hoàn toàn không có nghĩa là nó nằm ngoài cuộc chơi. Với Air France, KLM, Lufthansa, SWISS, Austrian hay Finnair, nhiều hồ sơ vẫn rất đáng kiểm tra.",
        ],
        bullets: [
          "TP.HCM → Paris do Air France khai thác: có thể là case EU261.",
          "Hà Nội → Amsterdam do KLM khai thác: có thể là case EU261.",
          "TP.HCM → Frankfurt do Lufthansa khai thác: có thể là case EU261.",
        ],
      },
      {
        title: "2. Tại sao hãng khai thác thực tế lại quan trọng hơn hãng bán vé?",
        paragraphs: [
          "Nhiều người nhìn vào email xác nhận hoặc logo hiện trên vé và nghĩ đó là hãng quyết định quyền lợi. Nhưng với EU261, hãng khai thác thực tế thường mới là chi tiết quan trọng. Một codeshare có thể được bán bởi hãng này nhưng lại do hãng khác thực sự vận hành.",
          "Vì vậy, cùng một hành trình Việt Nam - châu Âu, nếu một chặng được khai thác bởi hãng EU thì hồ sơ có thể mở ra EU261, còn nếu do hãng ngoài EU khai thác thì kết quả có thể khác hoàn toàn. Đây là lý do bạn nên luôn kiểm tra cụm từ 'operated by' trên vé hoặc email xác nhận.",
        ],
      },
      {
        title: "3. Nếu có transit thì đánh giá như thế nào?",
        paragraphs: [
          "Rất nhiều hành trình từ Việt Nam sang châu Âu không phải là chuyến bay thẳng. Bạn có thể bay TP.HCM → Paris → Amsterdam hoặc Hà Nội → Frankfurt → Vienna. Trong các case như vậy, điều quan trọng nhất là toàn bộ hành trình có nằm trên một booking duy nhất hay không.",
          "Nếu các chặng nằm trên một reservation thống nhất, điểm đến cuối cùng trong EU thường là mốc để đánh giá arrival delay hoặc missed connection. Một delay ở chặng đầu vẫn có thể tạo ra một hồ sơ mạnh nếu bạn đến nơi cuối cùng muộn hơn 3 giờ.",
        ],
        bullets: [
          "Single booking thường mạnh hơn self-transfer.",
          "Missed connection có thể mở compensation nếu đến cuối cùng muộn hơn 3 giờ.",
          "Không nên chỉ nhìn vào chặng đầu tiên mà bỏ qua toàn bộ hành trình.",
        ],
      },
      {
        title: "4. Khi nào hành khách Việt có thể được bồi thường?",
        paragraphs: [
          "Với delay, case thường bắt đầu mạnh khi bạn đến điểm đến cuối cùng tại châu Âu muộn từ 3 giờ trở lên và sự chậm trễ không do hoàn cảnh bất thường thật sự. Với cancellation, câu hỏi đầu tiên thường là hãng thông báo trước bao lâu và rerouting có đủ sát lịch gốc hay không.",
          "Điều quan trọng là đừng dừng lại ở câu 'tôi bay từ Việt Nam nên chắc không có quyền'. Nếu chặng vào EU do hãng EU khai thác, đây vẫn có thể là một hồ sơ compensation đáng giá, đặc biệt ở các hành trình dài hoặc transit nhiều chặng.",
        ],
      },
      {
        title: "5. Những trường hợp dễ bị hiểu sai nhất",
        paragraphs: [
          "Trường hợp hiểu sai phổ biến nhất là codeshare. Bạn mua vé qua một website hoặc thấy thương hiệu của một hãng ngoài EU, nhưng thực tế chặng bị lỗi lại do một hãng EU khai thác. Nếu không kiểm tra sâu, người dùng rất dễ tự bỏ qua quyền của mình.",
          "Hiểu sai thứ hai là nghĩ rằng chỉ có flight direct mới có cơ hội. Thực tế, chính các hành trình transit trên một booking mới là nơi nhiều hồ sơ mạnh nhất xuất hiện, vì một delay nhỏ có thể làm vỡ cả chuỗi kết nối và tạo arrival delay lớn tại nơi đến cuối cùng.",
        ],
      },
      {
        title: "6. Hành khách Việt nên giữ gì để hồ sơ mạnh hơn?",
        paragraphs: [
          "Bạn nên giữ vé điện tử, email xác nhận, boarding pass từng chặng, thông báo từ hãng và bằng chứng cho thấy ai là operating carrier thực tế của chuyến bay. Nếu case là transit, việc giữ dữ liệu của toàn bộ hành trình càng quan trọng.",
          "Ngoài ra, hãy lưu bất kỳ thông báo delay, cancellation, gate change hoặc rerouting nào, cũng như ảnh bảng điện tử và biên lai chi phí phát sinh hợp lý. Với hồ sơ `Việt Nam → EU`, một case mạnh thường được xây bằng chính các chi tiết nhỏ này.",
        ],
        bullets: [
          "Email xác nhận có ghi operating carrier.",
          "PNR, boarding pass và vé điện tử của toàn bộ booking.",
          "Thông báo delay, cancellation hoặc rerouting từ hãng.",
          "Biên lai chi phí khách sạn, taxi, ăn uống nếu phát sinh hợp lý.",
        ],
      },
    ],
    faqs: [
      {
        question: "Bay từ Việt Nam sang châu Âu có luôn được EU261 không?",
        answer:
          "Không phải luôn luôn. Điểm quan trọng nhất là chặng vào EU có do hãng hàng không EU khai thác thực tế hay không.",
      },
      {
        question: "Nếu tôi bay Air France hoặc KLM từ Việt Nam thì sao?",
        answer:
          "Đây là nhóm hồ sơ rất đáng kiểm tra. Nếu chặng vào EU do chính hãng EU đó khai thác thực tế, EU261 có thể áp dụng cho case delay hoặc cancellation.",
      },
      {
        question: "Nếu vé do hãng EU bán nhưng chặng bị lỗi do hãng ngoài EU khai thác thì sao?",
        answer:
          "Khi đó kết quả có thể khác. Với EU261, hãng khai thác thực tế của chặng liên quan thường quan trọng hơn hãng bán vé hoặc thương hiệu hiện trên booking.",
      },
      {
        question: "Nếu tôi lỡ nối chuyến ở châu Âu thì có được bồi thường không?",
        answer:
          "Có thể. Nếu các chặng nằm trên cùng một booking và bạn đến điểm đến cuối cùng muộn hơn 3 giờ, đây có thể là một case missed connection đáng kiểm tra theo EU261.",
      },
      {
        question: "Tôi không còn boarding pass thì có hết cơ hội không?",
        answer:
          "Không hẳn. Boarding pass rất hữu ích, nhưng case vẫn có thể được đánh giá bằng PNR, email xác nhận, lịch sử ứng dụng và các thông báo của hãng.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra hồ sơ Việt Nam → EU",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "hang-hang-khong-chau-au-bay-tu-viet-nam-co-duoc-boi-thuong-khong",
          content: "general_vi_to_eu_check",
        }),
        placement: "vi_article_eu_carrier_from_vietnam_general_check",
        description:
          "Điểm vào tốt nhất nếu bạn bay từ Việt Nam sang châu Âu với hãng EU và chưa chắc case là delay, cancellation hay transit vỡ.",
      },
      {
        label: "Nếu vấn đề chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "hang-hang-khong-chau-au-bay-tu-viet-nam-co-duoc-boi-thuong-khong",
          content: "delayed_vi_to_eu_flow",
        }),
        placement: "vi_article_eu_carrier_from_vietnam_delayed_flow",
        description:
          "Dùng khi bạn đến nơi cuối cùng ở châu Âu muộn hơn nhiều giờ hoặc bị lỡ nối chuyến trên cùng booking.",
      },
      {
        label: "Nếu vấn đề chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "hang-hang-khong-chau-au-bay-tu-viet-nam-co-duoc-boi-thuong-khong",
          content: "cancelled_vi_to_eu_flow",
        }),
        placement: "vi_article_eu_carrier_from_vietnam_cancelled_flow",
        description:
          "Dùng khi hãng EU hủy chuyến từ Việt Nam, đổi bạn sang chuyến khác hoặc thay đổi lịch đáng kể trước giờ bay.",
      },
    ],
  },
  {
    slug: "boi-thuong-250-400-600-duoc-tinh-nhu-the-nao",
    title: "Bồi thường €250 / €400 / €600 được tính như thế nào?",
    seoTitle:
      "EU261 €250 / €400 / €600: cách tính tiền bồi thường chuyến bay dễ hiểu nhất",
    description:
      "Hướng dẫn bằng tiếng Việt về cách tính mức bồi thường €250, €400 và €600 theo EU261: ngưỡng khoảng cách, khi nào áp dụng cho delay hoặc cancellation, khi nào bị giảm 50% nếu hãng đổi chuyến.",
    excerpt:
      "Đây là bài giải thích money keyword quan trọng nhất sau phần nền tảng EU261. Người dùng cần biết case của mình rơi vào €250, €400 hay €600, và vì sao long-haul không phải lúc nào cũng tự động nhận mức cao nhất.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "Core EU261",
    featured: true,
    heroEyebrow: "Compensation bands under EU261",
    heroSummary:
      "Mức €250, €400 và €600 không được tính theo giá vé, mà chủ yếu theo khoảng cách chuyến bay và loại gián đoạn. Với re-routing hợp lý, số tiền còn có thể bị giảm 50%, nên việc hiểu đúng logic là rất quan trọng trước khi nộp claim.",
    quickAnswer: [
      "€250 thường áp dụng cho chuyến bay 1.500 km trở xuống; €400 cho nhiều chuyến bay trên 1.500 km trong EU và các chuyến bay khác từ 1.500 đến 3.500 km; €600 thường áp dụng cho chuyến bay trên 3.500 km.",
      "Các mức này có thể xuất hiện trong case delay đến điểm đến cuối cùng từ 3 giờ trở lên, cancellation đủ điều kiện hoặc denied boarding/overbooking.",
      "Nếu hãng re-route bạn và bạn vẫn đến nơi không quá muộn, khoản bồi thường có thể bị giảm 50%, tức còn €125, €200 hoặc €300.",
    ],
    keyPoints: [
      "EU261 tính theo nhóm khoảng cách, không tính theo giá vé bạn đã mua.",
      "Long-haul không tự động nghĩa là €600; case phải thật sự nằm trong phạm vi EU261.",
      "Với một booking nối chuyến, điểm đến cuối cùng thường là chi tiết rất quan trọng.",
      "Re-routing tốt hơn lịch gốc chỉ một phần có thể làm mức tiền giảm một nửa.",
    ],
    sections: [
      {
        title: "1. €250 / €400 / €600 áp dụng trong những trường hợp nào?",
        paragraphs: [
          "Ba mức tiền này là các ngưỡng bồi thường chuẩn của EU261. Chúng không phải khoản hoàn vé, cũng không phải hỗ trợ ăn uống hay khách sạn tại sân bay. Đây là khoản compensation riêng, thường phát sinh khi chuyến bay đủ điều kiện theo EU261 và sự cố thuộc nhóm delay dài tại điểm đến cuối cùng, cancellation hoặc denied boarding.",
          "Nói cách khác, cùng một case bạn có thể đồng thời có quyền được chăm sóc tại sân bay, hoàn tiền hoặc đổi chuyến, và thêm một khoản €250 / €400 / €600 nếu điều kiện thực tế đáp ứng. Vì vậy người dùng không nên nhầm giữa refund với compensation.",
        ],
        bullets: [
          "Delay: thường nhìn vào thời gian đến điểm đến cuối cùng, không chỉ giờ cất cánh.",
          "Cancellation: cần xem hãng báo trước bao lâu và re-routing có sát lịch gốc không.",
          "Denied boarding / overbooking: thường là nhóm dễ phát sinh compensation nhất nếu bạn check-in đúng hạn.",
        ],
      },
      {
        title: "2. Khi nào là €250?",
        paragraphs: [
          "Mức €250 thường gắn với chuyến bay có khoảng cách 1.500 km trở xuống. Đây là nhóm short-haul điển hình trong châu Âu, ví dụ các chặng nội địa hoặc xuyên biên giới ngắn.",
          "Nếu một chuyến bay thuộc nhóm này đến điểm đến cuối cùng chậm từ 3 giờ trở lên và không bị loại trừ bởi extraordinary circumstances, mức bồi thường thường được nhìn vào ngưỡng €250. Với cancellation hoặc denied boarding, cùng nhóm khoảng cách này cũng thường bắt đầu từ €250 khi hồ sơ đủ điều kiện.",
        ],
        bullets: [
          "Ví dụ điển hình: các chặng ngắn trong EU như Paris → Berlin hoặc Vienna → Rome thường rơi gần nhóm này.",
          "Nếu hãng re-route tốt và bạn đến nơi chậm không quá 2 giờ, mức này có thể giảm còn €125.",
        ],
      },
      {
        title: "3. Khi nào là €400?",
        paragraphs: [
          "Mức €400 thường áp dụng cho hai nhóm. Nhóm thứ nhất là các chuyến bay trong EU dài hơn 1.500 km. Nhóm thứ hai là các chuyến bay khác có khoảng cách từ 1.500 km đến 3.500 km.",
          "Đây là vùng rất nhiều hành trình medium-haul rơi vào, nên người dùng thường nhầm với €600. Trên thực tế, không phải cứ bay quốc tế là lên mức cao nhất. Nếu tuyến của bạn nằm trong ngưỡng 1.500 đến 3.500 km, mức chuẩn thường sẽ là €400 khi case đủ điều kiện.",
        ],
        bullets: [
          "Ví dụ điển hình: nhiều chặng trong EU trên 1.500 km và nhiều tuyến giữa EU với khu vực lân cận có thể rơi vào nhóm €400.",
          "Nếu hãng re-route và bạn đến nơi chậm không quá 3 giờ, mức này có thể giảm còn €200.",
        ],
      },
      {
        title: "4. Khi nào là €600?",
        paragraphs: [
          "Mức €600 thường gắn với các chuyến bay trên 3.500 km. Đây là nhóm long-haul và là nơi người dùng Việt Nam quan tâm nhiều nhất, vì các tuyến giữa châu Âu và Việt Nam thường vượt xa ngưỡng này.",
          "Tuy vậy, long-haul không tự động nghĩa là chắc chắn được €600. Trước hết, case phải thực sự nằm trong phạm vi EU261. Sau đó mới đến bước xem sự cố là delay, cancellation hay denied boarding và có bị loại bởi hoàn cảnh bất thường hay không.",
        ],
        bullets: [
          "Europe → Việt Nam thường là nhóm khoảng cách có thể chạm €600 nếu case thuộc EU261.",
          "Việt Nam → EU với hãng hàng không châu Âu khai thác thực tế cũng có thể mở ra logic tương tự.",
          "Nếu hãng re-route và bạn đến nơi chậm không quá 4 giờ, mức này có thể giảm còn €300.",
        ],
      },
      {
        title: "5. Khi nào số tiền bị giảm 50%?",
        paragraphs: [
          "Đây là chi tiết rất quan trọng cho cả SEO lẫn chuyển đổi, vì nhiều người chỉ biết mốc €600 nhưng không biết hãng có thể giảm một nửa trong một số case re-routing. Theo hướng dẫn chính thức của EU, nếu hãng đưa bạn sang chuyến khác và bạn đến điểm đến cuối cùng với độ trễ vẫn còn trong ngưỡng nhất định, compensation có thể giảm 50%.",
          "Thực tế, điều này có nghĩa là short-haul có thể còn €125 nếu trễ không quá 2 giờ, nhóm trung bình có thể còn €200 nếu trễ không quá 3 giờ, và long-haul có thể còn €300 nếu trễ không quá 4 giờ. Người dùng vì thế nên nhìn vào giờ đến thực tế, không chỉ nhìn vào việc hãng đã đổi cho mình chuyến khác.",
        ],
        bullets: [
          "€250 → €125 nếu đến nơi chậm không quá 2 giờ.",
          "€400 → €200 nếu đến nơi chậm không quá 3 giờ.",
          "€600 → €300 nếu đến nơi chậm không quá 4 giờ.",
        ],
      },
      {
        title: "6. Với nối chuyến và hành trình dài thì tính theo cách nào?",
        paragraphs: [
          "Với hành trình có transit trên một booking thống nhất, cách nhìn thực tế thường không nên dừng ở từng chặng lẻ. Nếu bạn bị lỡ nối chuyến và đến nơi cuối cùng muộn hơn đáng kể, điểm đến cuối cùng thường là mấu chốt để đánh giá case. Đây là lý do nhiều hồ sơ Vietnam market rất có giá trị dù sự cố ban đầu xảy ra ở một chặng trong châu Âu.",
          "Điều quan trọng nhất là giữ booking đầy đủ, boarding pass nếu còn, email đổi lịch, và bằng chứng về giờ đến thực tế. Nếu bạn chỉ nhìn vào chặng đầu tiên hoặc chỉ nhớ chuyến bị delay bao lâu lúc cất cánh, bạn có thể đánh giá sai hoàn toàn mức €250 / €400 / €600 của mình.",
        ],
        bullets: [
          "Một booking thống nhất thường mạnh hơn self-transfer.",
          "Missed connection có thể mở ra compensation nếu đến điểm cuối cùng muộn hơn 3 giờ.",
          "Long-haul Europe ↔ Việt Nam thường cần kiểm tra theo toàn bộ hành trình, không chỉ một segment.",
        ],
      },
    ],
    faqs: [
      {
        question: "€250 / €400 / €600 có tính theo giá vé tôi mua không?",
        answer:
          "Không. Các mức này chủ yếu gắn với nhóm khoảng cách của chuyến bay và điều kiện EU261, không phụ thuộc trực tiếp vào việc bạn mua vé rẻ hay vé đắt.",
      },
      {
        question: "Bay châu Âu đến Việt Nam có luôn là €600 không?",
        answer:
          "Thường là nhóm khoảng cách có thể chạm €600, nhưng không tự động. Hồ sơ còn phải thật sự nằm trong phạm vi EU261 và không bị loại do hoàn cảnh bất thường hoặc điều kiện re-routing.",
      },
      {
        question: "Nếu hãng đổi chuyến cho tôi thì có mất quyền bồi thường không?",
        answer:
          "Không hẳn. Bạn vẫn có thể có quyền bồi thường, nhưng số tiền có thể bị giảm 50% nếu chuyến thay thế đưa bạn đến điểm đến cuối cùng trong ngưỡng trễ tương đối thấp.",
      },
      {
        question: "Nối chuyến trên một booking thì nhìn từng chặng hay nhìn điểm đến cuối cùng?",
        answer:
          "Trong nhiều case missed connection trên một booking thống nhất, điểm đến cuối cùng là chi tiết rất quan trọng để đánh giá delay thực tế và mức compensation phù hợp.",
      },
      {
        question: "Mỗi hành khách nhận một khoản riêng hay cả booking nhận chung?",
        answer:
          "Về thực tế xử lý claim, compensation thường được đánh giá theo từng hành khách đủ điều kiện, không phải chỉ một khoản chung cho cả booking.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh case của bạn thuộc mức nào",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "boi-thuong-250-400-600-duoc-tinh-nhu-the-nao",
          content: "general_amounts_check",
        }),
        placement: "vi_article_compensation_bands_general_check",
        description:
          "Phù hợp nếu bạn đã biết chuyến bay bị delay, hủy hoặc overbooking nhưng chưa rõ case của mình rơi vào €250, €400 hay €600.",
      },
      {
        label: "Nếu case chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "boi-thuong-250-400-600-duoc-tinh-nhu-the-nao",
          content: "delay_amounts_flow",
        }),
        placement: "vi_article_compensation_bands_delay_flow",
        description:
          "Dùng khi bạn muốn kiểm tra delay từ 3 giờ trở lên tại điểm đến cuối cùng và xem mức tiền có thể rơi vào ngưỡng nào.",
      },
      {
        label: "Nếu case chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "boi-thuong-250-400-600-duoc-tinh-nhu-the-nao",
          content: "cancellation_amounts_flow",
        }),
        placement: "vi_article_compensation_bands_cancellation_flow",
        description:
          "Dùng khi hãng đã hủy hoặc đổi chuyến đáng kể và bạn muốn xem mức compensation có bị giảm vì re-routing hay không.",
      },
    ],
  },
  {
    slug: "tre-chuyen-huy-chuyen-overbooking-su-khac-biet",
    title: "Trễ chuyến, hủy chuyến, overbooking – sự khác biệt",
    seoTitle:
      "Trễ chuyến, hủy chuyến hay overbooking: khác nhau thế nào và quyền lợi nào mạnh hơn?",
    description:
      "Hướng dẫn bằng tiếng Việt giúp phân biệt delay, cancellation và overbooking theo logic EU261: khi nào là trễ chuyến, khi nào bị coi là hủy chuyến, khi nào overbooking trở thành denied boarding và mỗi case dẫn đến quyền lợi gì.",
    excerpt:
      "Đây là bài giải thích cực mạnh cho AI search và GEO vì người dùng thường không biết case của mình thuộc nhóm nào. Chỉ cần phân loại sai giữa delay, cancellation và overbooking là có thể hiểu sai hoàn toàn về quyền được bồi thường, hoàn vé hoặc đổi chuyến.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "10 phút",
    cluster: "Core EU261",
    featured: true,
    heroEyebrow: "Delay vs cancellation vs overbooking",
    heroSummary:
      "Ba khái niệm này nghe giống nhau nhưng tạo ra hệ quả pháp lý khác nhau. Với EU261, điều quan trọng không phải bạn cảm thấy chuyến bay 'rối loạn' ra sao, mà là case đó được xếp vào delay, cancellation hay denied boarding do overbooking.",
    quickAnswer: [
      "Delay thường là chuyến bay vẫn diễn ra nhưng bị chậm; compensation thường gắn mạnh với việc đến điểm đến cuối cùng muộn từ 3 giờ trở lên.",
      "Cancellation là khi lịch bay gốc bị bỏ, chuyến bị đổi sang chuyến khác, bị đưa sớm hơn hơn 1 giờ, hoặc có một số thay đổi lớn khác mà EU coi là hủy chuyến.",
      "Overbooking là tình huống hãng bán quá số ghế; nếu bạn bị từ chối lên máy bay dù check-in đúng và không tự nguyện nhường chỗ, case thường được xử lý như denied boarding với quyền rất mạnh.",
    ],
    keyPoints: [
      "Không phải mọi thay đổi lịch đều là delay; một số trường hợp pháp lý được tính là cancellation.",
      "Overbooking không chỉ là 'hết ghế', mà quan trọng là bạn có bị denied boarding hay không.",
      "Delay, cancellation và denied boarding đều có thể dẫn tới compensation, nhưng điều kiện không giống nhau.",
      "Việc phân loại đúng case quyết định bạn nên đòi refund, re-routing hay compensation trước.",
    ],
    sections: [
      {
        title: "1. Vì sao phải phân biệt đúng ba khái niệm này?",
        paragraphs: [
          "Người dùng thường nhớ case của mình bằng mô tả cảm tính như 'bị đổi chuyến', 'bị dời giờ', 'ra cổng rồi mà không được lên', nhưng EU261 không đánh giá theo cảm giác. Quyền lợi phát sinh dựa trên việc case đó được xếp vào delay, cancellation hay denied boarding.",
          "Nếu phân loại sai, bạn có thể đòi sai quyền. Ví dụ có người chỉ nghĩ chuyến bị trễ, trong khi theo logic của EU đó đã là cancellation vì lịch bay gốc bị bỏ và họ bị chuyển sang chuyến khác. Ngược lại, có người nghĩ bị overbooking nhưng thực tế hãng từ chối lên máy bay vì giấy tờ hoặc lý do an toàn, khi đó logic compensation lại khác.",
        ],
      },
      {
        title: "2. Khi nào là trễ chuyến?",
        paragraphs: [
          "Delay thường là trường hợp chuyến bay vẫn diễn ra, nhưng bị chậm so với giờ dự kiến. Với quyền lợi EU261, phần mạnh nhất của case delay thường không nằm ở giờ cất cánh bị lùi bao lâu, mà ở việc bạn đến điểm đến cuối cùng muộn bao nhiêu.",
          "Theo hướng dẫn chính thức của EU, nếu bạn đến điểm đến cuối cùng chậm từ 3 giờ trở lên và sự chậm trễ không do extraordinary circumstances, compensation có thể phát sinh. Ngoài compensation, ở giai đoạn chờ đợi tại sân bay bạn còn có thể có quyền được hỗ trợ ăn uống, liên lạc, khách sạn hoặc phương tiện đưa đón trong một số ngưỡng nhất định.",
        ],
        bullets: [
          "Delay không nhất thiết nghĩa là được bồi thường ngay.",
          "Mốc 3 giờ tại điểm đến cuối cùng thường là mốc then chốt cho compensation.",
          "Một chuyến đáp ở sân bay khác nhưng cùng thành phố hoặc vùng, hoặc được đưa tiếp hợp lý, có thể vẫn được nhìn như delay chứ không phải cancellation.",
        ],
      },
      {
        title: "3. Khi nào EU coi đó là hủy chuyến?",
        paragraphs: [
          "Cancellation không chỉ là trường hợp hãng thông báo 'flight cancelled' trong email. Theo hướng dẫn của EU, cancellation còn có thể xảy ra khi lịch bay gốc bị bỏ và bạn bị chuyển sang chuyến khác, khi giờ khởi hành bị đưa sớm hơn hơn 1 giờ, hoặc khi máy bay đã cất cánh nhưng phải quay lại sân bay xuất phát rồi bạn được chuyển sang chuyến khác.",
          "Một chi tiết rất quan trọng cho AI Overviews là: nếu chuyến bay hạ cánh tại sân bay khác với điểm đến ghi trên vé, case đó có thể là cancellation. Tuy nhiên nếu bạn chấp nhận re-routing hợp lý đến sân bay gốc hoặc sân bay thay thế phục vụ cùng thành phố, vùng hoặc khu vực, EU có thể coi đây là delay thay vì cancellation.",
        ],
        bullets: [
          "Dời giờ bay sớm hơn hơn 1 giờ có thể bị coi là cancellation.",
          "Bị chuyển sang chuyến khác vì lịch gốc bị bỏ là dấu hiệu rất mạnh của cancellation.",
          "Không phải mọi hạ cánh ở sân bay khác đều là cancellation; còn phải xem sân bay đó phục vụ cùng thành phố hoặc bạn có chấp nhận re-routing tương đương hay không.",
        ],
      },
      {
        title: "4. Overbooking khác gì với denied boarding?",
        paragraphs: [
          "Overbooking là hành vi hoặc tình huống phía hãng bán nhiều chỗ hơn số ghế thực tế có thể bố trí. Nhưng với quyền của hành khách, thứ tạo ra quyền mạnh theo EU261 thường là denied boarding, tức bạn đã có đặt chỗ hợp lệ, có mặt đúng giờ với giấy tờ hợp lệ, không tự nguyện nhường chỗ, nhưng vẫn bị từ chối lên máy bay do overbooking hoặc lý do vận hành.",
          "Điểm này rất quan trọng, vì không phải cứ nghe hãng nói 'full flight' là đủ. Nếu bạn tự nguyện nhận voucher để nhường chỗ, case sẽ khác với việc bạn bị từ chối không tự nguyện. Ngoài ra, nếu bị từ chối vì giấy tờ không hợp lệ, lý do an ninh, sức khỏe hoặc không đáp ứng quy định vận chuyển, đó cũng không phải denied boarding kiểu được EU261 bồi thường chuẩn.",
        ],
        bullets: [
          "Overbooking là nguyên nhân phổ biến.",
          "Denied boarding là kết quả pháp lý đối với hành khách.",
          "Tự nguyện nhường chỗ khác với bị ép không cho lên máy bay.",
        ],
      },
      {
        title: "5. Case nào thường cho quyền mạnh nhất?",
        paragraphs: [
          "Về mặt thực tế, denied boarding do overbooking thường là nhóm rất mạnh vì nếu bạn check-in đúng giờ, có đặt chỗ hợp lệ và không tự nguyện nhường ghế, quyền compensation thường khá rõ ràng. Cancellation cũng là nhóm mạnh, đặc biệt nếu hãng thông báo trong vòng dưới 14 ngày và re-routing không đáp ứng ngưỡng của EU.",
          "Delay thì thường cần phân tích kỹ hơn, vì không phải mọi chuyến bị chậm đều phát sinh compensation. Case delay mạnh nhất thường là khi bạn đến điểm đến cuối cùng muộn từ 3 giờ trở lên, đặc biệt ở các hành trình long-haul hoặc nối chuyến trên cùng booking.",
        ],
        bullets: [
          "Denied boarding: thường rõ quyền nhất nếu đủ điều kiện cơ bản.",
          "Cancellation: mạnh khi thông báo muộn hoặc đổi chuyến không sát lịch gốc.",
          "Delay: mạnh khi arrival delay từ 3 giờ trở lên tại điểm đến cuối cùng.",
        ],
      },
      {
        title: "6. Người dùng nên tự hỏi gì để phân loại case cho đúng?",
        paragraphs: [
          "Thay vì hỏi chung 'tôi có được bồi thường không?', hãy bắt đầu bằng bốn câu: chuyến có thực sự cất cánh theo lịch gốc không, bạn có bị chuyển sang chuyến khác không, bạn có bị từ chối lên máy bay dù đã check-in đúng không, và bạn đến nơi cuối cùng muộn bao lâu. Chỉ bốn câu này đã đủ tách phần lớn case thành delay, cancellation hoặc denied boarding.",
          "Với thị trường Việt Nam, câu hỏi thứ năm cũng rất quan trọng: toàn bộ hành trình có nằm trên một booking hay không. Nếu có transit qua châu Âu, việc nhìn vào điểm đến cuối cùng thay vì chỉ một chặng riêng lẻ thường quyết định hướng claim và mức compensation thực tế.",
        ],
        bullets: [
          "Có đổi sang chuyến khác không?",
          "Giờ bay có bị kéo sớm hơn hơn 1 giờ không?",
          "Bạn có bị từ chối boarding dù check-in đúng hạn không?",
          "Bạn đến điểm cuối cùng muộn bao nhiêu giờ?",
        ],
      },
    ],
    faqs: [
      {
        question: "Nếu hãng đổi tôi sang chuyến bay khác thì đó là trễ chuyến hay hủy chuyến?",
        answer:
          "Trong nhiều trường hợp, nếu lịch bay gốc bị bỏ và bạn được chuyển sang chuyến khác, EU sẽ nhìn case theo hướng cancellation chứ không chỉ là delay.",
      },
      {
        question: "Nếu giờ bay bị dời sớm hơn 90 phút thì có thể bị coi là hủy chuyến không?",
        answer:
          "Có thể. Theo hướng dẫn chính thức của EU, việc đưa giờ khởi hành sớm hơn hơn 1 giờ có thể nằm trong logic cancellation.",
      },
      {
        question: "Overbooking có luôn nghĩa là tôi được bồi thường không?",
        answer:
          "Không tự động chỉ vì chuyến bị bán quá chỗ. Quyền mạnh thường phát sinh khi bạn bị denied boarding dù có đặt chỗ hợp lệ, đến đúng giờ và không tự nguyện nhường chỗ.",
      },
      {
        question: "Nếu tôi tự nguyện nhận voucher để nhường chỗ thì có giống denied boarding không?",
        answer:
          "Không giống hoàn toàn. Tự nguyện nhường chỗ là một tình huống khác với việc bị từ chối lên máy bay không tự nguyện, nên quyền compensation chuẩn theo denied boarding có thể không đi theo cùng cách.",
      },
      {
        question: "Máy bay hạ ở sân bay khác thì luôn là hủy chuyến à?",
        answer:
          "Không phải lúc nào cũng vậy. Nếu sân bay thay thế phục vụ cùng thành phố hoặc vùng, hoặc bạn được đưa tiếp hợp lý đến điểm đến gốc, EU có thể coi đó là delay thay vì cancellation.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh case của bạn thuộc nhóm nào",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "tre-chuyen-huy-chuyen-overbooking-su-khac-biet",
          content: "general_case_type_check",
        }),
        placement: "vi_article_delay_cancel_overbooking_general_check",
        description:
          "Dùng khi bạn chưa chắc case của mình là delay, cancellation hay denied boarding do overbooking và muốn phân loại đúng trước khi claim.",
      },
      {
        label: "Nếu case chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "tre-chuyen-huy-chuyen-overbooking-su-khac-biet",
          content: "delay_case_flow",
        }),
        placement: "vi_article_delay_cancel_overbooking_delay_flow",
        description:
          "Dùng khi chuyến vẫn bay nhưng bạn đến nơi cuối cùng rất muộn và muốn kiểm tra delay claim theo EU261.",
      },
      {
        label: "Nếu case chính là chuyến bay bị hủy hoặc đổi chuyến lớn",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "tre-chuyen-huy-chuyen-overbooking-su-khac-biet",
          content: "cancelled_case_flow",
        }),
        placement: "vi_article_delay_cancel_overbooking_cancelled_flow",
        description:
          "Dùng khi hãng bỏ lịch bay gốc, dời giờ đáng kể hoặc chuyển bạn sang chuyến khác và bạn cần kiểm tra logic cancellation.",
      },
    ],
  },
  {
    slug: "quy-trinh-yeu-cau-boi-thuong-eu261-tung-buoc",
    title: "Quy trình yêu cầu bồi thường EU261 từng bước",
    seoTitle:
      "Cách yêu cầu bồi thường EU261 từng bước: gửi cho ai, chờ bao lâu, khi nào cần leo thang tiếp",
    description:
      "Hướng dẫn bằng tiếng Việt từng bước để yêu cầu bồi thường EU261: cách xác định case, chuẩn bị hồ sơ, gửi claim đúng cho operating carrier, theo dõi thời hạn phản hồi và leo thang lên cơ quan phù hợp nếu hãng im lặng hoặc từ chối.",
    excerpt:
      "Đây là bài quy trình có intent chuyển đổi rất mạnh. Người dùng không cần thêm lý thuyết, họ cần biết phải làm gì ngay bây giờ, gửi ở đâu, đính kèm gì, chờ bao lâu và lúc nào nên chuyển sang cơ quan quốc gia, ADR hoặc tòa.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "10 phút",
    cluster: "Procedure / Money",
    featured: true,
    heroEyebrow: "EU261 claim workflow",
    heroSummary:
      "Muốn đi từ bực bội sang có kết quả, bạn cần đi đúng thứ tự. Với EU261, đường đi chuẩn thường là: xác định operating carrier và loại sự cố, gom chứng cứ, gửi claim trực tiếp cho hãng, chờ phản hồi hợp lý, rồi mới leo thang lên cơ quan quốc gia, ADR hoặc tòa nếu cần.",
    quickAnswer: [
      "Bạn nên gửi complaint cho hãng hàng không khai thác thực tế trước, không phải chỉ cho OTA hoặc nơi đã bán vé.",
      "Nếu hãng không trả lời trong 2 tháng hoặc trả lời không thỏa đáng, bạn có thể khiếu nại lên cơ quan quốc gia phù hợp ở nước nơi sự cố xảy ra trong một khoảng thời gian hợp lý.",
      "Trước khi claim, hãy giữ PNR, boarding pass nếu còn, email đổi lịch, bằng chứng giờ đến thực tế và mọi biên lai chi phí hợp lý phát sinh.",
    ],
    keyPoints: [
      "Luôn bắt đầu với hãng khai thác thực tế, không chỉ với nơi bán vé.",
      "Outbound và return thường được xem là hai chuyến riêng, kể cả khi cùng một đặt chỗ.",
      "2 tháng là mốc quan trọng nếu hãng không phản hồi hoặc phản hồi không thỏa đáng.",
      "National authority thường cho ý kiến pháp lý không ràng buộc, còn ADR hoặc tòa mới là bước xử lý tranh chấp sâu hơn.",
    ],
    sections: [
      {
        title: "1. Bước đầu tiên: xác định đúng case và đúng hãng chịu trách nhiệm",
        paragraphs: [
          "Trước khi viết bất kỳ email nào, bạn cần xác định case của mình là delay, cancellation, denied boarding hay missed connection. Đây là bước quyết định, vì điều kiện compensation và bộ bằng chứng cần nhấn mạnh sẽ khác nhau theo từng nhóm.",
          "Ngay sau đó, hãy xác định đúng operating carrier, tức hãng khai thác thực tế chuyến bay. Theo hướng dẫn chính thức của EU, trong tranh chấp chỉ hãng khai thác mới là bên chịu trách nhiệm trực tiếp theo EU261, không phải lúc nào cũng là hãng bán vé hoặc nền tảng OTA bạn đã mua qua.",
        ],
        bullets: [
          "Đừng gửi claim chỉ cho OTA nếu chuyến bay do airline khác khai thác.",
          "Trong codeshare, hãy kiểm tra dòng `operated by` trên vé hoặc email.",
          "Outbound và return thường được xử lý như hai chuyến riêng.",
        ],
      },
      {
        title: "2. Gom hồ sơ trước khi gửi claim",
        paragraphs: [
          "Một claim mạnh không cần quá dài, nhưng phải có chứng cứ đúng. Tối thiểu bạn nên có mã đặt chỗ, vé điện tử, boarding pass nếu còn, email hoặc SMS về delay / cancellation / re-routing, và bằng chứng cho thấy bạn đến điểm đến cuối cùng muộn bao lâu.",
          "Nếu hãng không hỗ trợ tại sân bay và bạn phải tự bỏ tiền cho đồ ăn, taxi, khách sạn hoặc phương tiện quay lại, hãy giữ biên lai. Các khoản chi này không tự động là compensation, nhưng có thể rất quan trọng cho phần reimbursement hoặc nghĩa vụ chăm sóc của hãng.",
        ],
        bullets: [
          "PNR, vé điện tử, boarding pass.",
          "Email đổi lịch, thông báo hủy hoặc chậm chuyến.",
          "Ảnh bảng giờ bay hoặc dấu thời gian đến nơi cuối cùng nếu có.",
          "Biên lai chi phí hợp lý phát sinh.",
        ],
      },
      {
        title: "3. Viết claim ngắn, rõ và đi thẳng vào quyền lợi",
        paragraphs: [
          "Nội dung claim không cần quá dài. Cách hiệu quả nhất là nêu ngắn gọn số chuyến bay, ngày bay, tuyến bay, loại sự cố, độ trễ thực tế tại điểm đến cuối cùng và yêu cầu bạn đang đưa ra theo EU261. Nếu có missed connection, hãy nhấn mạnh toàn bộ hành trình nằm trên một booking thống nhất và điểm đến cuối cùng bị chậm bao nhiêu.",
          "Bạn cũng nên nói rõ mình đang yêu cầu gì: compensation, reimbursement cho chi phí hợp lý, hay hoàn vé / re-routing nếu case phù hợp. Nhiều claim bị kéo dài chỉ vì hành khách kể lại toàn bộ câu chuyện nhưng không chốt yêu cầu rõ ràng.",
        ],
        bullets: [
          "Nêu flight number, ngày bay, tuyến bay.",
          "Nêu loại sự cố: delay, cancellation, denied boarding hoặc missed connection.",
          "Nêu giờ đến thực tế tại điểm đến cuối cùng nếu đó là trọng tâm.",
          "Gắn kèm chứng cứ ngay ở email đầu tiên.",
        ],
      },
      {
        title: "4. Gửi claim ở đâu và gửi bằng cách nào?",
        paragraphs: [
          "Theo hướng dẫn của EU, bạn nên dùng complaint form do airline cung cấp. Trên thực tế, đó có thể là biểu mẫu web, email chính thức của customer relations hoặc cổng claim riêng cho passenger rights. Điểm quan trọng là để lại bằng chứng đã gửi: email confirmation, ticket support hoặc ảnh chụp màn hình form thành công.",
          "Nếu case có wet lease, hãng thuê máy bay kèm tổ bay thường vẫn là bên chịu trách nhiệm vận hành theo EU261. Vì vậy, đừng chỉ nhìn vào logo máy bay bạn thấy ở sân bay mà hãy bám theo hãng có trách nhiệm vận hành thực tế theo tài liệu chuyến bay.",
        ],
        bullets: [
          "Ưu tiên official claim form của hãng.",
          "Luôn giữ confirmation đã nộp.",
          "Nếu gửi email, dùng tiêu đề rõ ràng và đính kèm file gọn.",
        ],
      },
      {
        title: "5. Chờ bao lâu và khi nào nên leo thang?",
        paragraphs: [
          "Mốc quan trọng nhất ở đây là 2 tháng. Theo Your Europe, nếu bạn không nhận được phản hồi từ airline trong vòng 2 tháng hoặc phản hồi không thỏa đáng, bạn có thể nộp complaint tới cơ quan quốc gia có thẩm quyền ở nước nơi sự cố xảy ra, trong một khoảng thời gian hợp lý.",
          "Đây là lúc nhiều người mất động lực vì hãng trả lời chung chung, xin thêm thời gian hoặc đẩy bạn sang nơi bán vé. Nếu bạn đã gửi đúng cho operating carrier, cung cấp đủ chứng cứ và vẫn bị kéo dài quá mức, đó là tín hiệu đã đến lúc leo thang thay vì tiếp tục gửi thư vòng vo.",
        ],
        bullets: [
          "Dưới 2 tháng: thường nên theo dõi, nhắc lại, bổ sung hồ sơ nếu cần.",
          "Sau 2 tháng không có kết quả rõ: cân nhắc leo thang.",
          "Phản hồi mơ hồ, né tránh hoặc đổ lỗi chung chung cũng là dấu hiệu cần bước tiếp.",
        ],
      },
      {
        title: "6. Leo thang lên đâu sau hãng?",
        paragraphs: [
          "Bước leo thang đầu tiên thường là national authority phù hợp ở nước nơi sự cố xảy ra. Theo EU, cơ quan này thường đưa ra một ý kiến pháp lý không ràng buộc về hướng xử lý claim. Đây không phải lúc nào cũng là bước mang tiền về ngay, nhưng rất có giá trị để tăng sức nặng cho hồ sơ.",
          "Sau đó, tùy bạn có phải cư dân EU hay không và tùy case, còn có thể cân nhắc ADR hoặc đi tòa. EU cũng nêu rõ rằng ADR chỉ mở cho cư dân EU, còn với tòa án, nơi nộp có thể phụ thuộc vào điểm đi, điểm đến, điểm nối chuyến hoặc nơi đăng ký của airline. Thời hiệu khởi kiện lại do luật quốc gia chi phối, nên không nên để hồ sơ bị treo quá lâu.",
        ],
        bullets: [
          "National authority: ý kiến pháp lý không ràng buộc.",
          "ADR: chỉ dành cho cư dân EU.",
          "Court / small claims: bước mạnh hơn nếu tranh chấp kéo dài.",
        ],
      },
      {
        title: "7. Những lỗi thường làm claim yếu đi",
        paragraphs: [
          "Lỗi phổ biến nhất là gửi sai bên, đặc biệt khi mua qua OTA hoặc codeshare. Lỗi thứ hai là chỉ nói chuyến bay bị chậm mà không nêu giờ đến cuối cùng. Lỗi thứ ba là quên đính kèm bằng chứng ngay từ đầu, khiến airline dễ kéo hồ sơ sang vòng hỏi đáp dài.",
          "Một lỗi khác rất thường gặp ở thị trường Việt Nam là coi cả hành trình khứ hồi như một case duy nhất. Trong khi đó, outbound và return thường là hai chuyến riêng cho mục đích complaint. Việc tách đúng từng chuyến sẽ giúp claim rõ ràng hơn rất nhiều.",
        ],
        bullets: [
          "Gửi nhầm cho nơi bán vé thay vì operating carrier.",
          "Không nêu arrival delay tại điểm đến cuối cùng.",
          "Không lưu xác nhận đã nộp claim.",
          "Trộn outbound và return vào một complaint duy nhất.",
        ],
      },
    ],
    faqs: [
      {
        question: "Tôi nên gửi complaint cho hãng nào nếu vé mua qua đại lý hoặc OTA?",
        answer:
          "Bạn nên bắt đầu với airline khai thác thực tế chuyến bay, tức operating carrier, vì đây thường là bên chịu trách nhiệm trực tiếp theo EU261.",
      },
      {
        question: "Nếu airline không trả lời thì bao lâu tôi có thể leo thang?",
        answer:
          "Theo hướng dẫn chính thức của EU, nếu airline không trả lời trong 2 tháng hoặc trả lời không thỏa đáng, bạn có thể khiếu nại lên cơ quan quốc gia phù hợp trong một khoảng thời gian hợp lý.",
      },
      {
        question: "National authority có buộc airline trả tiền cho tôi ngay không?",
        answer:
          "Không hẳn. Theo Your Europe, cơ quan này thường đưa ra ý kiến pháp lý không ràng buộc về cách tiếp tục claim, nhưng ý kiến đó vẫn rất hữu ích để tăng sức nặng cho hồ sơ.",
      },
      {
        question: "ADR có dùng được cho mọi hành khách không?",
        answer:
          "Không. Theo thông tin của EU, thủ tục alternative dispute resolution chỉ khả dụng cho cư dân EU.",
      },
      {
        question: "Khứ hồi trên cùng đặt chỗ có nên gửi một complaint chung không?",
        answer:
          "Không nên mặc định như vậy. Theo hướng dẫn của EU, outbound và return thường được coi là hai chuyến riêng, kể cả khi nằm trong cùng một reservation.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra ngay case của bạn trước khi nộp claim",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "quy-trinh-yeu-cau-boi-thuong-eu261-tung-buoc",
          content: "general_claim_workflow_check",
        }),
        placement: "vi_article_claim_process_general_check",
        description:
          "Phù hợp nếu bạn muốn xác định nhanh case có đáng đi tiếp theo quy trình claim EU261 hay không trước khi tự gửi complaint.",
      },
      {
        label: "Nếu hồ sơ chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "quy-trinh-yeu-cau-boi-thuong-eu261-tung-buoc",
          content: "delay_claim_workflow",
        }),
        placement: "vi_article_claim_process_delay_flow",
        description:
          "Dùng khi trọng tâm là delay từ 3 giờ trở lên tại điểm đến cuối cùng và bạn muốn kiểm tra hồ sơ trước khi gửi claim.",
      },
      {
        label: "Nếu hồ sơ chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "quy-trinh-yeu-cau-boi-thuong-eu261-tung-buoc",
          content: "cancellation_claim_workflow",
        }),
        placement: "vi_article_claim_process_cancellation_flow",
        description:
          "Dùng khi hãng đã hủy hoặc đổi chuyến lớn và bạn muốn kiểm tra case có đủ mạnh cho compensation trước khi đi hết quy trình complaint.",
      },
    ],
  },
  {
    slug: "can-chuan-bi-giay-to-gi-de-yeu-cau-boi-thuong",
    title: "Cần chuẩn bị giấy tờ gì để yêu cầu bồi thường",
    seoTitle:
      "Cần chuẩn bị giấy tờ gì để yêu cầu bồi thường EU261? Checklist dễ dùng nhất",
    description:
      "Checklist bằng tiếng Việt về hồ sơ cần chuẩn bị để yêu cầu bồi thường EU261: PNR, vé điện tử, boarding pass, email đổi lịch, bằng chứng giờ đến thực tế, biên lai chi phí và cách sắp xếp tài liệu để claim mạnh hơn.",
    excerpt:
      "Đây là bài checklist có intent rất cao vì người dùng thường biết mình muốn đòi tiền nhưng không chắc cần giữ gì. Chỉ thiếu hoặc trình bày sai tài liệu, claim có thể bị kéo dài hàng tuần dù case vốn đủ điều kiện.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "Procedure / Money",
    featured: true,
    heroEyebrow: "EU261 documents checklist",
    heroSummary:
      "EU không yêu cầu bạn viết một bộ hồ sơ dài dòng, nhưng claim mạnh luôn cần chứng cứ đúng. Mục tiêu của bạn là chứng minh ba việc: bạn đã có chỗ trên chuyến bay, sự cố thực sự đã xảy ra, và bạn đến nơi cuối cùng muộn hoặc phát sinh thiệt hại đúng như mình đang trình bày.",
    quickAnswer: [
      "Tối thiểu, bạn nên giữ mã đặt chỗ, vé điện tử, thông báo từ hãng và bằng chứng về chuyến bay bị chậm, hủy hoặc đổi chuyến.",
      "Nếu case xoay quanh delay hoặc missed connection, bằng chứng về giờ đến thực tế tại điểm đến cuối cùng thường rất quan trọng.",
      "Nếu bạn tự bỏ tiền cho đồ ăn, taxi, khách sạn hoặc phương tiện di chuyển do hãng không hỗ trợ, hãy giữ biên lai ngay từ đầu.",
    ],
    keyPoints: [
      "Hồ sơ tốt không phải hồ sơ dài, mà là hồ sơ có đúng tài liệu.",
      "PNR và email xác nhận thường là nền tảng quan trọng nhất của claim.",
      "Boarding pass rất hữu ích, nhưng nên giữ cả chứng cứ thay thế như e-ticket, email, app screenshot và lịch sử chuyến bay.",
      "Nếu có transit, hãy lưu tài liệu của toàn bộ booking thay vì chỉ chặng gặp sự cố.",
    ],
    sections: [
      {
        title: "1. Bộ giấy tờ tối thiểu nên có ngay từ đầu",
        paragraphs: [
          "Với một claim EU261 tiêu chuẩn, bộ tài liệu nền tảng thường gồm mã đặt chỗ (PNR), vé điện tử hoặc xác nhận đặt chỗ, và các thông báo từ airline về việc chuyến bay bị delay, cancellation, re-routing hoặc thay đổi lịch. Đây là phần giúp bạn chứng minh mình thực sự là hành khách của hành trình đó.",
          "Theo hướng dẫn của EU, complaint nên gửi tới hãng khai thác thực tế, vì vậy những tài liệu thể hiện rõ operating carrier cũng rất quan trọng. Trong codeshare hoặc hành trình nối chuyến, đừng chỉ giữ bản xác nhận từ OTA; hãy giữ mọi email hoặc màn hình đặt chỗ có dòng `operated by` nếu có.",
        ],
        bullets: [
          "PNR hoặc booking reference.",
          "Vé điện tử hoặc email xác nhận đặt chỗ.",
          "Thông báo từ airline về delay, cancellation hoặc đổi chuyến.",
          "Bằng chứng cho thấy ai là hãng khai thác thực tế.",
        ],
      },
      {
        title: "2. Tài liệu quan trọng nhất trong case delay và missed connection",
        paragraphs: [
          "Nếu trọng tâm của hồ sơ là chuyến bay đến nơi muộn, điều cần chứng minh không chỉ là giờ cất cánh bị lùi, mà là giờ đến thực tế tại điểm đến cuối cùng. Đây là chi tiết quyết định trong rất nhiều case compensation theo EU261.",
          "Với hành trình có nối chuyến trên cùng booking, hãy giữ tài liệu của toàn bộ itinerary: boarding pass từng chặng nếu còn, màn hình app, email rebooking và mọi bằng chứng cho thấy bạn đến đích cuối cùng muộn bao lâu. Nhiều hồ sơ yếu đi chỉ vì hành khách chỉ lưu bằng chứng của chặng đầu tiên.",
        ],
        bullets: [
          "Ảnh bảng điện tử hoặc app thể hiện giờ đến / giờ hạ cánh thực tế nếu có.",
          "Boarding pass của các chặng còn lại hoặc chuyến thay thế.",
          "Email re-routing hoặc xác nhận đổi chuyến.",
          "Tài liệu của toàn bộ booking nếu có transit.",
        ],
      },
      {
        title: "3. Tài liệu quan trọng trong case cancellation hoặc đổi chuyến lớn",
        paragraphs: [
          "Với cancellation, tài liệu giá trị nhất thường là email, SMS hoặc thông báo trong ứng dụng cho thấy airline đã hủy chuyến, đổi bạn sang chuyến khác hoặc dời giờ đáng kể. Nếu giờ khởi hành bị kéo sớm hơn hơn 1 giờ hoặc bạn bị chuyển sang hành trình khác, việc lưu lại các mốc thời gian này đặc biệt hữu ích.",
          "Bạn cũng nên giữ cả lịch ban đầu lẫn lịch sau khi hãng đổi chuyến. Việc có hai mốc này giúp claim rõ hơn rất nhiều, vì nó cho thấy chính xác airline đã thay đổi gì và bạn đến nơi cuối cùng chênh lệch bao nhiêu so với kế hoạch gốc.",
        ],
        bullets: [
          "Email hoặc SMS xác nhận hủy chuyến.",
          "Ảnh hoặc file cho thấy lịch gốc ban đầu.",
          "Xác nhận chuyến thay thế hoặc lịch mới.",
          "Bằng chứng về thời điểm bạn được thông báo.",
        ],
      },
      {
        title: "4. Biên lai chi phí nào nên giữ?",
        paragraphs: [
          "Nếu airline không cung cấp hỗ trợ tại sân bay và bạn phải tự chi cho bữa ăn, nước uống, khách sạn, taxi hoặc phương tiện đi lại hợp lý, hãy giữ biên lai ngay. Theo hướng dẫn của EU, các chi phí này có thể được hoàn lại nếu chúng cần thiết, hợp lý và phù hợp với tình huống.",
          "Đừng đợi đến khi về nhà mới cố nhớ lại mình đã chi gì. Claim về reimbursement thường yếu đi rất nhanh nếu không còn hóa đơn, đặc biệt với taxi, khách sạn hoặc đồ ăn mua tại sân bay trong lúc hỗn loạn.",
        ],
        bullets: [
          "Biên lai đồ ăn, nước uống trong thời gian chờ hợp lý.",
          "Biên lai khách sạn nếu phải ở qua đêm.",
          "Biên lai taxi hoặc phương tiện đi lại cần thiết.",
          "Bất kỳ chi phí nào phát sinh vì airline không thực hiện nghĩa vụ chăm sóc.",
        ],
      },
      {
        title: "5. Nếu thiếu boarding pass thì sao?",
        paragraphs: [
          "Trong thực tế, boarding pass rất hữu ích vì nó chứng minh bạn đã check-in và có mặt trên hành trình. Tuy nhiên, không phải lúc nào mất boarding pass cũng khiến hồ sơ hết cơ hội. Nếu vẫn còn PNR, vé điện tử, email xác nhận, lịch sử ứng dụng hoặc các thông báo chính thức từ airline, hồ sơ vẫn có thể được đánh giá.",
          "Điểm quan trọng là đừng để toàn bộ case phụ thuộc vào một tài liệu duy nhất. Bạn càng có nhiều chứng cứ nhất quán cho cùng một câu chuyện, claim càng dễ đi nhanh hơn.",
        ],
        bullets: [
          "Giữ app screenshot nếu airline hiển thị pass điện tử.",
          "Lưu email check-in hoặc email boarding.",
          "Giữ mọi xác nhận rebooking hoặc notification trong app.",
        ],
      },
      {
        title: "6. Sắp xếp hồ sơ thế nào để airline đọc nhanh và khó từ chối hơn?",
        paragraphs: [
          "Cách sắp xếp tốt nhất là chia hồ sơ thành ba nhóm: tài liệu đặt chỗ, tài liệu về sự cố và tài liệu về chi phí phát sinh. Khi gửi claim, hãy đặt tên file rõ ràng theo thứ tự và đính kèm vừa đủ, thay vì ném hàng chục ảnh màn hình không tiêu đề.",
          "Một email ngắn gọn nhưng có tài liệu gọn gàng thường hiệu quả hơn rất nhiều so với một câu chuyện dài mà file đính kèm lộn xộn. Airline hoặc đơn vị xử lý claim càng dễ đọc, khả năng hồ sơ đi đúng hướng ngay từ đầu càng cao.",
        ],
        bullets: [
          "Nhóm 1: booking, e-ticket, PNR.",
          "Nhóm 2: delay / cancellation / re-routing evidence.",
          "Nhóm 3: receipts và chi phí phát sinh.",
          "Đặt tên file rõ ràng theo ngày hoặc loại tài liệu.",
        ],
      },
      {
        title: "7. Checklist ngắn trước khi bấm gửi",
        paragraphs: [
          "Trước khi gửi complaint, hãy tự kiểm tra: bạn đã xác định đúng operating carrier chưa, đã nêu rõ loại sự cố chưa, đã có bằng chứng về giờ đến cuối cùng chưa, và đã đính kèm các file cốt lõi chưa. Chỉ cần thiếu một trong các phần này, airline rất dễ kéo claim sang vòng bổ sung hồ sơ.",
          "Nếu case là long-haul hoặc transit qua châu Âu, hãy kiểm tra thêm xem bạn đã đính kèm tài liệu của toàn bộ booking chưa. Với thị trường Việt Nam, đây là chỗ sai rất phổ biến và cũng là chỗ dễ cải thiện nhất.",
        ],
        bullets: [
          "Đúng operating carrier.",
          "Đúng loại sự cố.",
          "Đúng bằng chứng giờ đến cuối cùng nếu case là delay.",
          "Đủ biên lai nếu có chi phí phát sinh.",
        ],
      },
    ],
    faqs: [
      {
        question: "Tài liệu tối thiểu để bắt đầu claim EU261 là gì?",
        answer:
          "Thực tế tối thiểu thường là mã đặt chỗ, vé điện tử hoặc xác nhận đặt chỗ, cùng thông báo từ airline về sự cố như delay, cancellation hoặc đổi chuyến.",
      },
      {
        question: "Boarding pass có bắt buộc không?",
        answer:
          "Boarding pass rất hữu ích, nhưng không phải lúc nào cũng là tài liệu duy nhất. Nếu còn PNR, e-ticket, email check-in, app screenshot hoặc thông báo từ airline, hồ sơ vẫn có thể có giá trị.",
      },
      {
        question: "Nếu tôi bị lỡ nối chuyến thì cần giữ tài liệu của chặng nào?",
        answer:
          "Bạn nên giữ tài liệu của toàn bộ booking, không chỉ chặng gặp lỗi ban đầu, vì điểm đến cuối cùng thường là phần rất quan trọng trong việc đánh giá compensation.",
      },
      {
        question: "Biên lai ăn uống và taxi có thực sự cần giữ không?",
        answer:
          "Có. Nếu airline không hỗ trợ mà bạn phải tự chi các khoản hợp lý, biên lai là nền tảng quan trọng cho phần reimbursement chi phí phát sinh.",
      },
      {
        question: "Tôi nên gửi một file duy nhất hay nhiều file tách riêng?",
        answer:
          "Thường hiệu quả hơn nếu bạn gửi hồ sơ gọn, chia rõ nhóm tài liệu và đặt tên file rõ ràng để airline đọc nhanh và khó yêu cầu bổ sung vô lý hơn.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh hồ sơ của bạn đã đủ mạnh chưa",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "can-chuan-bi-giay-to-gi-de-yeu-cau-boi-thuong",
          content: "general_documents_check",
        }),
        placement: "vi_article_documents_general_check",
        description:
          "Phù hợp nếu bạn đã có một phần giấy tờ nhưng muốn kiểm tra nhanh case và hồ sơ trước khi chính thức gửi complaint.",
      },
      {
        label: "Nếu giấy tờ liên quan đến chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "can-chuan-bi-giay-to-gi-de-yeu-cau-boi-thuong",
          content: "delay_documents_flow",
        }),
        placement: "vi_article_documents_delay_flow",
        description:
          "Dùng khi bạn muốn kiểm tra xem bằng chứng về delay và giờ đến điểm cuối cùng đã đủ mạnh cho claim hay chưa.",
      },
      {
        label: "Nếu giấy tờ liên quan đến chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "can-chuan-bi-giay-to-gi-de-yeu-cau-boi-thuong",
          content: "cancellation_documents_flow",
        }),
        placement: "vi_article_documents_cancellation_flow",
        description:
          "Dùng khi trọng tâm hồ sơ là email hủy chuyến, re-routing hoặc thay đổi lịch lớn và bạn muốn kiểm tra độ mạnh của case.",
      },
    ],
  },
  {
    slug: "thoi-gian-nhan-tien-boi-thuong-bao-lau",
    title: "Thời gian nhận tiền bồi thường bao lâu",
    seoTitle:
      "Bao lâu thì nhận được tiền bồi thường EU261? Mốc 7 ngày, 2 tháng và điều cần biết",
    description:
      "Hướng dẫn bằng tiếng Việt về thời gian nhận tiền theo EU261: khi nào hoàn tiền vé phải trả trong 7 ngày, vì sao bồi thường không có một thời hạn cố định áp dụng chung toàn EU, và khi nào nên leo thang nếu hãng không phản hồi sau 2 tháng.",
    excerpt:
      "Đây là bài chuyển đổi rất mạnh vì người dùng thường chỉ có một câu hỏi: bao giờ tiền về. Bài viết giải thích rõ điểm quan trọng nhất là EU phân biệt giữa hoàn tiền vé và bồi thường, nên không thể lấy mốc 7 ngày áp thẳng cho mọi loại khoản tiền.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "8 phút",
    cluster: "Procedure / Money",
    featured: true,
    heroEyebrow: "Compensation timing under EU261",
    heroSummary:
      "Không có một câu trả lời duy nhất cho mọi case. Theo nguồn chính thức của EU, hoàn tiền vé trong một số trường hợp phải được trả trong 7 ngày, nhưng việc thanh toán bồi thường lại không có một thời hạn cố định áp dụng chung toàn EU. Mốc thực tế quan trọng nhất với hành khách là 2 tháng: nếu airline không phản hồi hoặc phản hồi không thỏa đáng, đã đến lúc leo thang.",
    quickAnswer: [
      "Nếu bạn chọn hoàn tiền vé trong case hủy chuyến, nguồn FAQ chính thức của EU nêu rằng khoản đó lẽ ra phải được nhận trong 7 ngày.",
      "Với bồi thường theo EU261, chính FAQ của EU nói rõ rằng luật không đặt ra một thời hạn cố định cho việc thanh toán.",
      "Nếu airline không trả lời trong 2 tháng hoặc phản hồi không thỏa đáng, bạn có thể khiếu nại tiếp lên cơ quan quốc gia phù hợp.",
    ],
    keyPoints: [
      "Đừng nhầm hoàn tiền vé với bồi thường EU261.",
      "7 ngày là mốc mạnh cho hoàn tiền vé trong một số case, không phải lời hứa chung cho mọi khoản tiền.",
      "Bồi thường có thể nhanh hoặc chậm tùy việc airline có chấp nhận trách nhiệm ngay hay không.",
      "2 tháng là mốc quan trọng nhất để quyết định có nên leo thang hay không.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: không phải khoản tiền nào cũng có cùng thời hạn",
        paragraphs: [
          "Người dùng thường hỏi 'bao lâu thì tiền về', nhưng dưới EU261 có nhiều loại khoản tiền khác nhau. Có hoàn tiền vé, có hoàn chi phí hợp lý như khách sạn hay taxi, và có bồi thường cố định như €250 / €400 / €600. Mỗi loại có logic thời gian khác nhau.",
          "Vì vậy, nếu bạn nghe đâu đó 'EU bắt hãng trả trong 7 ngày', câu đó chỉ đúng trong những bối cảnh nhất định. Nó không tự động có nghĩa là mọi case compensation sẽ được chuyển khoản trong 7 ngày.",
        ],
      },
      {
        title: "2. Khi nào là 7 ngày?",
        paragraphs: [
          "Nguồn FAQ chính thức của Your Europe nêu rõ rằng nếu chuyến bay bị hủy và bạn chọn hoàn tiền vé, bạn lẽ ra phải nhận được khoản đó trong vòng 7 ngày. Đây là điểm rất quan trọng vì nhiều hành khách chờ quá lâu mà không biết mình đang hỏi về một khoản có mốc khá rõ trong luật.",
          "Tuy nhiên, hoàn tiền vé không phải lúc nào cũng là bồi thường. Bạn có thể có quyền lấy lại tiền vé, nhưng khoản bồi thường riêng do hủy chuyến hoặc delay lại là câu chuyện khác. Đó là lý do bài này cần tách hai khái niệm ngay từ đầu.",
        ],
        bullets: [
          "Hoàn tiền vé: có thể có mốc 7 ngày trong case phù hợp.",
          "Bồi thường: không tự động đi theo cùng mốc đó.",
          "Nhiều hành khách nhầm giữa 'hoàn tiền vé' và 'bồi thường thêm'.",
        ],
      },
      {
        title: "3. Bồi thường có thời hạn cố định không?",
        paragraphs: [
          "Theo FAQ chính thức của EU, việc thanh toán bồi thường còn phụ thuộc vào lý do hủy chuyến và luật EU không đặt ra một thời hạn cố định cho khoản bồi thường này. Nói đơn giản: với bồi thường EU261, không có một mốc chung như 7 ngày áp dụng cho mọi hồ sơ.",
          "Đây là lý do một số case rất thẳng có thể được xử lý nhanh, còn một số case khác bị kéo dài khi airline tranh luận về extraordinary circumstances, hãng khai thác thực tế, giờ đến cuối cùng hoặc tính đủ điều kiện của hành trình. Không có thời hạn cố định không có nghĩa là hãng được chậm vô hạn, nhưng nó có nghĩa là bạn cần nhìn vào mốc leo thang thay vì chờ một ngày cố định để tự động nhận tiền.",
        ],
        bullets: [
          "Không có một 'x ngày' cố định cho mọi hồ sơ bồi thường.",
          "Airline càng sớm chấp nhận trách nhiệm, payout thường càng nhanh.",
          "Case bị tranh cãi về nguyên nhân hoặc phạm vi áp dụng sẽ chậm hơn rõ rệt.",
        ],
      },
      {
        title: "4. Mốc thực tế quan trọng nhất: 2 tháng",
        paragraphs: [
          "Your Europe nêu rõ rằng nếu bạn không nhận được phản hồi từ airline trong 2 tháng hoặc phản hồi không thỏa đáng, bạn có thể khiếu nại lên cơ quan quốc gia phù hợp ở nước nơi sự cố xảy ra, trong một khoảng thời gian hợp lý. Với hành khách, đây là mốc thực tế quan trọng nhất để ra quyết định.",
          "Nói cách khác, nếu đã qua 2 tháng mà airline vẫn im lặng, trả lời chung chung hoặc lặp lại mẫu thư không đi vào hồ sơ cụ thể của bạn, đừng tiếp tục chờ vô thời hạn. Đó là lúc nên chuyển từ tâm thế 'đợi trả lời' sang tâm thế 'leo thang có chiến lược'.",
        ],
        bullets: [
          "Dưới 2 tháng: thường vẫn còn trong vùng theo dõi và nhắc lại.",
          "Qua 2 tháng: nên cân nhắc bước tiếp theo thay vì chỉ chờ.",
          "Phản hồi không thỏa đáng cũng được tính như một tín hiệu để leo thang.",
        ],
      },
      {
        title: "5. Điều gì làm tiền về nhanh hơn hoặc chậm hơn?",
        paragraphs: [
          "Một case thường đi nhanh hơn khi airline dễ xác định trách nhiệm: chuyến bay rõ ràng đủ điều kiện, loại sự cố rõ, thời gian đến cuối cùng được chứng minh tốt, và không có tranh cãi về extraordinary circumstances. Hồ sơ gọn, có đủ PNR, e-ticket, thông báo từ hãng và chi tiết giờ đến thực tế cũng giúp giảm thời gian qua lại.",
          "Ngược lại, việc chuyển tiền thường chậm hơn nếu case có codeshare, thuê ướt, missed connection nhiều chặng, tranh cãi về lý do kỹ thuật hay thời tiết, hoặc nếu hành khách chỉ gửi một email chung chung mà không có chứng cứ cốt lõi. Nhiều chậm trễ thực tế không đến từ luật, mà đến từ việc hồ sơ ban đầu quá yếu.",
        ],
        bullets: [
          "Case rõ ràng, chứng cứ đủ: thường nhanh hơn.",
          "Codeshare, transit, tranh cãi nguyên nhân: thường chậm hơn.",
          "Thiếu chứng cứ hoặc gửi sai airline: gần như chắc chắn làm chậm.",
        ],
      },
      {
        title: "6. Làm gì nếu bạn muốn rút ngắn thời gian chờ?",
        paragraphs: [
          "Cách tốt nhất để rút ngắn thời gian không phải là gửi nhiều email hơn, mà là gửi đúng ngay từ đầu. Hãy xác định đúng hãng khai thác thực tế, nêu rõ loại sự cố, nêu giờ đến cuối cùng nếu case là delay hoặc missed connection, và đính kèm tài liệu theo một cấu trúc dễ đọc.",
          "Nếu airline đã chấp nhận trả tiền, hãy kiểm tra xem họ có đang chờ thêm thông tin thanh toán, xác nhận danh tính hay tài khoản nhận tiền hay không. Có nhiều case chậm chỉ vì bước chuyển khoản cuối cùng không được hoàn tất ngay.",
        ],
        bullets: [
          "Gửi đúng cho hãng khai thác thực tế.",
          "Đính kèm tài liệu quan trọng ngay ở email đầu tiên.",
          "Theo dõi xem airline có yêu cầu thêm bank details hay xác nhận nào không.",
          "Đừng trộn refund, reimbursement và compensation thành một yêu cầu mơ hồ.",
        ],
      },
      {
        title: "7. Khi nào nên dừng chờ và đổi chiến thuật?",
        paragraphs: [
          "Nếu case đã qua 2 tháng mà không có tiến triển thực chất, bạn nên coi việc chờ thêm như một lựa chọn có chi phí. Ở giai đoạn đó, chiến thuật tốt hơn thường là gửi nhắc lại ngắn gọn kèm toàn bộ reference cũ, rồi chuẩn bị escalte lên national authority hoặc bước tiếp phù hợp.",
          "Điểm quan trọng là đừng để airline giữ hồ sơ của bạn trong trạng thái 'đang xem xét' quá lâu mà không có mốc cụ thể. Một claim tốt không chỉ cần đúng về pháp lý, mà còn cần có nhịp xử lý rõ ràng để không trôi mất động lực và bằng chứng.",
        ],
        bullets: [
          "Im lặng quá 2 tháng: nên đổi chiến thuật.",
          "Trả lời mẫu, không đi vào hồ sơ: cũng là lý do để leo thang.",
          "Giữ lại toàn bộ email thread và số tham chiếu trước khi escalte.",
        ],
      },
    ],
    faqs: [
      {
        question: "EU261 có bắt airline trả compensation trong 7 ngày không?",
        answer:
          "Không theo cách chung cho mọi case. FAQ chính thức của EU nêu rằng hoàn tiền vé trong case hủy chuyến nên được nhận trong 7 ngày, nhưng luật EU không đặt ra một thời hạn cố định cho việc thanh toán bồi thường.",
      },
      {
        question: "Vậy tại sao có người nhận tiền nhanh còn có người chờ rất lâu?",
        answer:
          "Khác biệt thường đến từ việc airline có chấp nhận trách nhiệm ngay hay không, hồ sơ có đủ chứng cứ không, và case có bị tranh cãi về extraordinary circumstances hoặc phạm vi áp dụng hay không.",
      },
      {
        question: "Sau bao lâu thì tôi nên thôi chờ và leo thang?",
        answer:
          "Theo Your Europe, nếu airline không trả lời trong 2 tháng hoặc phản hồi không thỏa đáng, bạn có thể khiếu nại tiếp lên cơ quan quốc gia phù hợp.",
      },
      {
        question: "Refund và compensation có thể về ở hai thời điểm khác nhau không?",
        answer:
          "Có. Đây là hai loại khoản tiền khác nhau, nên việc xử lý và thời điểm thanh toán có thể không trùng nhau.",
      },
      {
        question: "Nếu airline nói case vẫn đang được review thì tôi có phải chờ mãi không?",
        answer:
          "Không nên chờ vô hạn. Nếu quá 2 tháng mà không có tiến triển rõ hoặc phản hồi vẫn mơ hồ, đó thường là lúc nên chuẩn bị bước leo thang.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh case của bạn trước khi tiếp tục chờ",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "thoi-gian-nhan-tien-boi-thuong-bao-lau",
          content: "general_timing_check",
        }),
        placement: "vi_article_payout_timing_general_check",
        description:
          "Phù hợp nếu bạn đã gửi claim nhưng chưa biết mình nên tiếp tục chờ hay đã đến lúc đổi chiến thuật.",
      },
      {
        label: "Nếu hồ sơ chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "thoi-gian-nhan-tien-boi-thuong-bao-lau",
          content: "delay_timing_flow",
        }),
        placement: "vi_article_payout_timing_delay_flow",
        description:
          "Dùng khi bạn muốn kiểm tra lại sức mạnh của hồ sơ delay trước khi quyết định có nên chờ thêm hay leo thang.",
      },
      {
        label: "Nếu hồ sơ chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "thoi-gian-nhan-tien-boi-thuong-bao-lau",
          content: "cancellation_timing_flow",
        }),
        placement: "vi_article_payout_timing_cancellation_flow",
        description:
          "Dùng khi bạn đang chờ tiền sau một chuyến bay bị hủy và muốn tách rõ hoàn tiền vé với bồi thường trước khi leo thang hồ sơ.",
      },
    ],
  },
  {
    slug: "tre-bao-nhieu-gio-thi-duoc-boi-thuong",
    title: "Trễ bao nhiêu giờ thì được bồi thường?",
    seoTitle:
      "Trễ bao nhiêu giờ thì được bồi thường? Mốc 3 giờ theo EU261 cho hành khách Việt",
    description:
      "Câu trả lời ngắn gọn cho hành khách Việt: khi nào delay 3 giờ trở lên tạo quyền đòi bồi thường theo EU261, khi nào bạn chỉ có quyền được hỗ trợ tại sân bay, và vì sao phải nhìn giờ đến cuối cùng thay vì chỉ nhìn giờ cất cánh.",
    excerpt:
      "Đây là bài short-answer quan trọng cho AI search và GEO vì người dùng thường hỏi rất trực tiếp: trễ bao nhiêu giờ thì được tiền. Câu trả lời đúng dưới EU261 là phải nhìn giờ đến điểm đến cuối cùng, phạm vi áp dụng của quy định và lý do thật sự của việc chậm chuyến.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "7 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Short answer cho case delay",
    heroSummary:
      "Trong đa số hồ sơ EU261, mốc cốt lõi cho bồi thường là đến điểm đến cuối cùng chậm từ 3 giờ trở lên. Nhưng để có tiền, case còn phải nằm trong phạm vi EU261 và không bị loại trừ bởi extraordinary circumstances.",
    quickAnswer: [
      "Mốc bồi thường tiền mặt điển hình là chậm từ 3 giờ trở lên tại điểm đến cuối cùng, không phải chỉ nhìn lúc cất cánh.",
      "Ngưỡng chậm 2, 3 hoặc 4 giờ tại sân bay thường liên quan đến quyền được hỗ trợ tùy nhóm hành trình, không đồng nghĩa tự động có bồi thường tiền mặt.",
      "Nếu chuyến bay không nằm trong phạm vi EU261 hoặc delay do extraordinary circumstances, bạn có thể không có quyền nhận €250, €400 hoặc €600.",
    ],
    keyPoints: [
      "3 giờ ở điểm đến cuối cùng quan trọng hơn 3 giờ lúc khởi hành.",
      "Transit trên cùng một booking có thể biến một delay nhỏ thành hồ sơ rất mạnh.",
      "Quyền được hỗ trợ tại sân bay và quyền được bồi thường là hai tầng quyền khác nhau.",
      "Bay xa không tự động tạo ra €600 nếu case không thuộc EU261.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: thường là từ 3 giờ ở điểm đến cuối cùng",
        paragraphs: [
          "Nếu bạn hỏi rất ngắn gọn 'trễ bao nhiêu giờ thì được bồi thường?', câu trả lời thực tế nhất dưới EU261 là: trong nhiều hồ sơ, bạn cần đến điểm đến cuối cùng chậm từ 3 giờ trở lên. Đây là mốc được dùng để đánh giá quyền nhận compensation tiền mặt trong case delay.",
          "Điểm dễ gây nhầm là nhiều hành khách chỉ nhìn giờ máy bay cất cánh muộn. Nhưng với EU261, trọng tâm thường là bạn đến đích cuối cùng muộn bao nhiêu, đặc biệt nếu hành trình có nối chuyến. Vì vậy cùng là một chuyến bị trễ, có người đủ điều kiện đòi tiền còn người khác thì không.",
        ],
        bullets: [
          "Mốc cốt lõi cho compensation thường là 3 giờ trở lên khi đến nơi cuối cùng.",
          "Chậm lúc khởi hành không phải lúc nào cũng quyết định kết quả.",
          "Transit làm cho cách tính quyền lợi khác hẳn so với việc chỉ nhìn một chặng đơn lẻ.",
        ],
      },
      {
        title: "2. Vì sao không nên chỉ nhìn giờ cất cánh?",
        paragraphs: [
          "Nguồn chính thức của EU nhấn mạnh đến delay tại final destination. Điều đó có nghĩa là nếu chặng đầu chỉ trễ vừa phải nhưng đủ để bạn lỡ chuyến nối và đến Hà Nội, TP.HCM hay điểm cuối khác muộn hơn 3 giờ, hồ sơ vẫn có thể rất mạnh.",
          "Đây là lý do traffic Việt Nam qua các hub như Frankfurt, Paris CDG, Amsterdam Schiphol hay Vienna thường tạo ra nhiều case đáng kiểm tra. Một delay nhỏ ở châu Âu có thể kéo toàn bộ hành trình long-haul muộn hơn rất nhiều tại điểm đến cuối cùng.",
        ],
        bullets: [
          "Luôn đo độ trễ ở điểm đến cuối cùng của toàn hành trình.",
          "Một booking duy nhất thường quan trọng hơn rất nhiều trong case nối chuyến.",
          "Missed connection thường mạnh hơn cảm nhận ban đầu của hành khách về 'chỉ trễ một chút'.",
        ],
      },
      {
        title: "3. Vậy delay 2 giờ, 3 giờ, 4 giờ ở sân bay có ý nghĩa gì?",
        paragraphs: [
          "Ở đây cần tách rất rõ hai tầng quyền lợi. Với delay tại lúc khởi hành, hành khách có thể phát sinh quyền được hỗ trợ như bữa ăn, đồ uống, liên lạc, khách sạn hoặc đưa đón nếu phải qua đêm. Các mốc hỗ trợ này thay đổi tùy độ dài và loại hành trình, thường xoay quanh các ngưỡng 2 giờ, 3 giờ và 4 giờ.",
          "Nhưng quyền được hỗ trợ không đồng nghĩa tự động có compensation tiền mặt. Đây là lỗi hiểu phổ biến nhất trong AI search: người dùng thấy con số 2 giờ hoặc 4 giờ rồi tưởng đó là ngưỡng chung để nhận tiền. Với câu hỏi về bồi thường tiền mặt, mốc quan trọng nhất vẫn là đến final destination chậm từ 3 giờ trở lên.",
        ],
        bullets: [
          "Ngưỡng 2/3/4 giờ thường liên quan đến assistance tại sân bay.",
          "Compensation tiền mặt thường quay về bài toán 3 giờ tại nơi đến cuối cùng.",
          "Đừng trộn quyền được chăm sóc với quyền được nhận €250, €400 hoặc €600.",
        ],
      },
      {
        title: "4. Khi nào chậm hơn 3 giờ mà vẫn không được bồi thường?",
        paragraphs: [
          "Chậm hơn 3 giờ chưa đủ để kết luận ngay rằng bạn chắc chắn sẽ có tiền. Hồ sơ còn phải nằm trong phạm vi áp dụng của EU261. Với hành khách Việt, nhóm mạnh nhất thường là chuyến bay khởi hành từ EU, hoặc chuyến từ Việt Nam vào EU do hãng hàng không EU khai thác thực tế.",
          "Ngoài ra, airline có thể từ chối compensation nếu chứng minh được extraordinary circumstances. Điều quan trọng là không phải cứ hãng viện ra một lý do nào đó thì hồ sơ tự động chết. Nhưng bạn cũng không nên coi mốc 3 giờ như một tấm vé chắc thắng nếu chuyến bay vốn không thuộc EU261 hoặc nguyên nhân thực sự nằm ngoài khả năng kiểm soát hợp lý của hãng.",
        ],
        bullets: [
          "3 giờ là điều kiện rất quan trọng, nhưng không phải điều kiện duy nhất.",
          "Phạm vi áp dụng EU261 luôn phải kiểm tra trước.",
          "Extraordinary circumstances có thể chặn compensation trong một số case.",
        ],
      },
      {
        title: "5. Những case Việt Nam gặp nhiều nhất",
        paragraphs: [
          "Với người dùng tiếng Việt, câu hỏi này thường xuất hiện ở ba nhóm hành trình. Nhóm đầu là châu Âu → Việt Nam, ví dụ Paris → Hà Nội hay Frankfurt → TP.HCM, nơi EU261 thường áp dụng khá rõ. Nhóm thứ hai là Việt Nam → châu Âu do hãng EU khai thác, ví dụ Air France, KLM, Lufthansa hoặc SWISS. Nhóm thứ ba là hành trình nối chuyến qua hub châu Âu, nơi final delay mới là chìa khóa.",
          "Chính vì vậy, một câu hỏi tưởng đơn giản như 'trễ bao nhiêu giờ thì được bồi thường?' thực ra không nên trả lời chỉ bằng một con số. Con số đúng là 3 giờ ở final destination, nhưng kết luận cuối cùng còn phụ thuộc vào route, operating carrier, booking structure và lý do delay.",
        ],
        bullets: [
          "Europe → Vietnam thường là nhóm traffic rất đáng kiểm tra.",
          "Vietnam → EU do hãng EU khai thác cũng có thể là hồ sơ mạnh.",
          "Hub connection qua EU là nơi rất nhiều case Việt phát sinh quyền lợi thật sự.",
        ],
      },
      {
        title: "6. Nên giữ gì để kiểm tra nhanh xem mình có đủ điều kiện?",
        paragraphs: [
          "Ngay khi thấy chuyến bay bị trễ, hãy giữ lại PNR, vé điện tử, boarding pass, email từ hãng và bằng chứng về giờ đến thực tế nếu có. Với case nối chuyến, đừng chỉ giữ chứng cứ của chặng đầu. Toàn bộ chuỗi hành trình mới là thứ quyết định bạn có vượt mốc 3 giờ ở điểm đến cuối cùng hay không.",
          "Nếu phát sinh chi phí hợp lý trong lúc chờ, hãy giữ biên lai. Dù câu hỏi chính của bài này là về compensation tiền mặt, việc có hồ sơ sạch và đầy đủ vẫn giúp đẩy nhanh quá trình đánh giá, đặc biệt khi airline tranh cãi về arrival delay hoặc nguyên nhân dẫn đến việc chậm chuyến.",
        ],
        bullets: [
          "Giữ PNR, e-ticket và toàn bộ email từ hãng.",
          "Giữ boarding pass của cả chặng đầu lẫn chặng nối chuyến nếu có.",
          "Lưu bằng chứng về giờ đến cuối cùng và các chi phí phát sinh hợp lý.",
        ],
      },
    ],
    faqs: [
      {
        question: "Trễ 2 tiếng có được bồi thường tiền mặt không?",
        answer:
          "Thường là không, nếu bạn chỉ nhìn vào con số 2 giờ. Với compensation tiền mặt theo EU261, mốc điển hình cần kiểm tra là bạn đến điểm đến cuối cùng chậm từ 3 giờ trở lên. Tuy vậy, delay 2 giờ vẫn có thể tạo ra quyền được hỗ trợ trong một số nhóm hành trình.",
      },
      {
        question: "Trễ đúng 3 tiếng thì có được bồi thường không?",
        answer:
          "Có thể, nếu đó là độ trễ tại điểm đến cuối cùng, chuyến bay thuộc phạm vi EU261 và delay không rơi vào extraordinary circumstances. Mốc 3 giờ là điểm bắt đầu rất quan trọng, nhưng không phải điều kiện duy nhất.",
      },
      {
        question: "Tôi bay nối chuyến, tính giờ trễ ở đâu?",
        answer:
          "Trong nhiều case trên cùng một booking, bạn nên nhìn vào giờ đến của điểm đến cuối cùng chứ không chỉ nhìn chặng đầu. Đây là lý do missed connection thường tạo ra hồ sơ mạnh hơn người dùng nghĩ.",
      },
      {
        question: "Bay từ Việt Nam sang châu Âu có được tính không?",
        answer:
          "Có thể, nhưng không phải lúc nào cũng vậy. Một nhóm quan trọng là các chuyến từ Việt Nam vào EU do hãng hàng không EU khai thác thực tế. Nếu là hãng ngoài EU, kết quả có thể khác.",
      },
      {
        question: "Bay giá rẻ có được bồi thường không?",
        answer:
          "Có thể. Việc là hãng low-cost không tự động loại trừ quyền theo EU261. Điều vẫn phải kiểm tra là phạm vi áp dụng của quy định, final delay và nguyên nhân thật sự của sự cố.",
      },
    ],
    claimVariant: "delayed",
    contextualLinks: [
      {
        label: "Kiểm tra ngay hồ sơ delay của bạn",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "tre-bao-nhieu-gio-thi-duoc-boi-thuong",
          content: "delay_hours_primary_check",
        }),
        placement: "vi_article_delay_hours_primary_check",
        description:
          "Phù hợp nếu bạn muốn kiểm tra nhanh xem final delay đã đủ mạnh cho EU261 hay chưa, nhất là khi có nối chuyến hoặc đến nơi muộn hơn dự kiến nhiều giờ.",
      },
      {
        label: "Kiểm tra case tổng quát bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "tre-bao-nhieu-gio-thi-duoc-boi-thuong",
          content: "general_eligibility_check",
        }),
        placement: "vi_article_delay_hours_general_check",
        description:
          "Dùng khi bạn chưa chắc đây là delay thuần túy, missed connection, hay một case gần với cancellation hoặc thay đổi lịch lớn.",
      },
      {
        label: "Nếu hãng đã đổi sang chuyến khác hoặc báo hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "tre-bao-nhieu-gio-thi-duoc-boi-thuong",
          content: "reroute_or_cancellation_check",
        }),
        placement: "vi_article_delay_hours_reroute_check",
        description:
          "Hữu ích khi vấn đề ban đầu trông như delay nhưng sau đó hãng re-route, đổi lịch đáng kể hoặc chuyển case sang logic hủy chuyến.",
      },
    ],
  },
  {
    slug: "tre-3-tieng-duoc-boi-thuong-bao-nhieu-tien",
    title: "Trễ 3 tiếng được bồi thường bao nhiêu tiền?",
    seoTitle:
      "Trễ 3 tiếng được bồi thường bao nhiêu tiền? Bảng €250, €400, €600 theo EU261",
    description:
      "Hướng dẫn tiếng Việt trả lời đúng intent money keyword: nếu đến điểm đến cuối cùng chậm từ 3 giờ trở lên theo EU261 thì có thể được €250, €400 hoặc €600, tùy khoảng cách chuyến bay, phạm vi áp dụng và việc hãng có re-route hay không.",
    excerpt:
      "Đây là bài short-answer có intent rất cao vì người dùng không hỏi quyền lợi chung nữa mà hỏi thẳng số tiền. Bài viết giải thích rõ vì sao delay 3 giờ không tự động đồng nghĩa với €600 và khi nào số tiền có thể là €250, €400, €600 hoặc bị giảm còn một nửa.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "8 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Money keyword cho case delay",
    heroSummary:
      "Nếu chuyến bay thuộc EU261 và bạn đến điểm đến cuối cùng chậm từ 3 giờ trở lên, mức bồi thường thường không dựa vào đúng mỗi con số 3 giờ. Số tiền tiêu biểu là €250, €400 hoặc €600 tùy khoảng cách hành trình, và trong một số case re-routing còn có thể bị giảm 50%.",
    quickAnswer: [
      "Với delay đủ điều kiện theo EU261, mức thường thấy là €250 cho chặng 1.500 km hoặc ít hơn, €400 cho nhiều chặng trung bình và intra-EU dài hơn, và €600 cho các chặng dài trên 3.500 km.",
      "Trễ 3 tiếng không tự động đồng nghĩa với €600. Muốn biết số tiền nào áp dụng, phải nhìn khoảng cách chuyến bay hoặc hành trình đủ điều kiện, điểm đến cuối cùng và phạm vi áp dụng của EU261.",
      "Nếu airline đã re-route bạn và độ trễ sau khi đến nơi không quá lớn, compensation trong một số case có thể bị giảm còn 50%, tức là €125, €200 hoặc €300.",
    ],
    keyPoints: [
      "3 giờ là ngưỡng mở quyền đòi tiền trong nhiều case, không phải công thức ra ngay một mức cố định.",
      "€250, €400, €600 phụ thuộc vào khoảng cách, không phụ thuộc riêng vào số giờ trễ.",
      "Long-haul Europe → Vietnam thường nằm gần nhóm €600 nếu case thuộc EU261.",
      "Re-routing có thể làm mức bồi thường giảm một nửa trong một số tình huống.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: có thể là €250, €400 hoặc €600",
        paragraphs: [
          "Nếu bạn hỏi 'trễ 3 tiếng được bồi thường bao nhiêu tiền?', câu trả lời ngắn gọn nhưng đúng là: không có một con số duy nhất. Theo bảng quyền lợi của EU, delay đủ điều kiện tại điểm đến cuối cùng thường dẫn đến một trong ba mức chính: €250, €400 hoặc €600.",
          "Ba mức này không được quyết định chỉ bởi việc bạn trễ đúng 3 giờ. Con số 3 giờ chủ yếu là ngưỡng mở quyền yêu cầu compensation trong nhiều hồ sơ delay. Sau đó, số tiền phụ thuộc vào khoảng cách chuyến bay hoặc hành trình đủ điều kiện theo logic của EU261.",
        ],
        bullets: [
          "€250: 1.500 km hoặc ít hơn.",
          "€400: trên 1.500 km trong EU và các chuyến khác từ 1.500 đến 3.500 km.",
          "€600: trên 3.500 km.",
        ],
      },
      {
        title: "2. Vì sao trễ 3 tiếng không tự động là €600?",
        paragraphs: [
          "Đây là lỗi hiểu rất phổ biến trong AI search và cả trên các diễn đàn du lịch. Người dùng thấy tiêu đề kiểu 'delay 3 hours compensation' rồi tự nối nó với mức cao nhất. Nhưng dưới EU261, số giờ trễ và số tiền là hai lớp logic khác nhau: 3 giờ giúp mở cánh cửa compensation, còn số tiền phụ thuộc vào khoảng cách.",
          "Vì vậy hai hành khách cùng đến nơi muộn hơn 3 giờ vẫn có thể nhận hai mức hoàn toàn khác nhau. Một chặng ngắn trong hoặc gần châu Âu có thể rơi vào €250, trong khi một hành trình dài châu Âu → Việt Nam đủ điều kiện thường nghiêng về €600.",
        ],
        bullets: [
          "3 giờ trả lời câu hỏi bạn có thể có quyền hay không.",
          "Khoảng cách trả lời câu hỏi số tiền là bao nhiêu.",
          "Không nên dùng một bài toán đơn giản '3 giờ = €600'.",
        ],
      },
      {
        title: "3. Bảng tiền thực tế cho case delay 3 giờ trở lên",
        paragraphs: [
          "Theo trang quyền hành khách của EU, nếu bạn đến điểm đến cuối cùng với delay từ 3 giờ trở lên và không rơi vào extraordinary circumstances, mức compensation tiêu biểu là €250 cho chuyến bay 1.500 km hoặc ít hơn, €400 cho chuyến bay trên 1.500 km trong EU và các chuyến khác từ 1.500 đến 3.500 km, và €600 cho các chuyến trên 3.500 km.",
          "Đây là lý do người dùng Việt bay long-haul từ châu Âu về Việt Nam thường quan tâm đặc biệt đến mốc €600. Nhưng ngay cả trong nhóm long-haul, vẫn cần kiểm tra xem chuyến bay có thực sự thuộc phạm vi EU261 hay không, và bạn có đang tính delay tại điểm đến cuối cùng hay chỉ nhìn một chặng riêng lẻ.",
        ],
        bullets: [
          "Short-haul: thường là €250.",
          "Mid-haul hoặc intra-EU dài: thường là €400.",
          "Long-haul trên 3.500 km: thường là €600 nếu case đủ điều kiện.",
        ],
      },
      {
        title: "4. Với hành khách Việt, khi nào 3 giờ thường nghiêng về €600?",
        paragraphs: [
          "Những route như Paris → Hà Nội, Frankfurt → TP.HCM, Amsterdam → TP.HCM hay Vienna → Hà Nội thường nằm trong nhóm khoảng cách dài. Nếu các chuyến này thuộc phạm vi EU261 và bạn đến điểm đến cuối cùng chậm từ 3 giờ trở lên, hồ sơ thường sẽ được nhìn ở khung €600 thay vì €250 hay €400.",
          "Tương tự, nếu bạn bay từ Việt Nam vào châu Âu trên một hãng hàng không EU và case đó nằm trong phạm vi áp dụng của EU261, long-haul delay 3 giờ cũng có thể tiến gần nhóm €600. Điều quan trọng là phải kiểm tra operating carrier thực tế và logic route, không chỉ nhìn vào nơi mua vé.",
        ],
        bullets: [
          "Europe → Vietnam long-haul đủ điều kiện: thường là nhóm €600.",
          "Vietnam → EU do hãng EU khai thác: cũng có thể rơi vào nhóm này.",
          "Không phải mọi vé đường dài đều tự động nằm trong EU261.",
        ],
      },
      {
        title: "5. Khi nào chỉ còn €125, €200 hoặc €300?",
        paragraphs: [
          "Trang chính thức của EU cũng nêu rõ rằng nếu airline đã re-route bạn và bạn vẫn đến nơi muộn nhưng độ trễ ở điểm đến cuối cùng không vượt quá một số ngưỡng nhất định, compensation có thể bị giảm 50%. Khi đó các mức €250, €400, €600 có thể trở thành €125, €200 hoặc €300.",
          "Đây là chi tiết rất quan trọng về mặt chuyển đổi vì nhiều hành khách nghe rằng mình 'đã trễ hơn kế hoạch' nên mặc định nghĩ sẽ nhận đủ mức tối đa. Thực tế, nếu hãng đưa bạn sang chuyến khác và mức chậm sau re-routing không vượt các ngưỡng nêu trong bảng chính thức, số tiền có thể thấp hơn đáng kể.",
        ],
        bullets: [
          "€250 có thể giảm còn €125.",
          "€400 có thể giảm còn €200.",
          "€600 có thể giảm còn €300.",
        ],
      },
      {
        title: "6. Khi nào trễ 3 tiếng mà vẫn không có tiền?",
        paragraphs: [
          "Trễ 3 tiếng chưa đủ để đảm bảo payout. Trước hết, chuyến bay phải nằm trong phạm vi áp dụng của EU261. Với người dùng Việt, nhóm mạnh nhất thường là chuyến khởi hành từ EU, hoặc chuyến từ Việt Nam vào EU do hãng EU khai thác thực tế.",
          "Ngoài ra, nếu airline chứng minh được extraordinary circumstances, compensation có thể không phát sinh. Đây là lý do một câu trả lời chất lượng cho truy vấn money keyword không thể chỉ nêu bảng €250 / €400 / €600 mà bỏ qua điều kiện áp dụng. Con số chỉ có ý nghĩa sau khi case được xác nhận là eligible.",
        ],
        bullets: [
          "Phải thuộc EU261 trước khi bàn đến số tiền.",
          "Phải nhìn delay ở điểm đến cuối cùng.",
          "Extraordinary circumstances có thể chặn compensation.",
        ],
      },
      {
        title: "7. Nên giữ gì để ước lượng đúng mức tiền?",
        paragraphs: [
          "Nếu bạn muốn biết mình nghiêng về €250, €400 hay €600, hãy giữ đầy đủ PNR, vé điện tử, boarding pass, email của hãng và bằng chứng về giờ đến cuối cùng. Với case nối chuyến, toàn bộ itinerary trên cùng booking mới là thứ nên được xem xét.",
          "Điểm quan trọng là đừng chỉ gửi cho bên xử lý một ảnh thông báo delay của chặng đầu. Để định mức compensation đúng, cần hiểu cả khoảng cách hành trình và kết quả thực tế tại final destination. Một hồ sơ sạch sẽ giúp phân loại nhanh hơn rất nhiều.",
        ],
        bullets: [
          "Giữ đầy đủ itinerary trên cùng booking.",
          "Giữ boarding pass của từng chặng nếu có transit.",
          "Giữ bằng chứng về thời điểm đến cuối cùng thực tế.",
        ],
      },
    ],
    faqs: [
      {
        question: "Trễ 3 tiếng có chắc chắn được €600 không?",
        answer:
          "Không. €600 thường dành cho các chuyến trên 3.500 km đủ điều kiện theo EU261. Nếu chuyến ngắn hơn hoặc trung bình hơn, mức có thể là €250 hoặc €400. Ngoài ra vẫn phải kiểm tra phạm vi EU261 và extraordinary circumstances.",
      },
      {
        question: "Trễ 3 tiếng thì €250, €400 và €600 khác nhau ở đâu?",
        answer:
          "Khác nhau chủ yếu ở khoảng cách chuyến bay hoặc hành trình đủ điều kiện. 1.500 km hoặc ít hơn thường là €250, nhóm trung bình thường là €400, còn trên 3.500 km thường là €600.",
      },
      {
        question: "Bay từ châu Âu về Việt Nam trễ hơn 3 tiếng thì thường là bao nhiêu?",
        answer:
          "Nhiều route châu Âu → Việt Nam là long-haul trên 3.500 km, nên nếu case thuộc EU261 và đủ điều kiện, hồ sơ thường nghiêng về mức €600.",
      },
      {
        question: "Nếu hãng đổi tôi sang chuyến khác thì còn nhận đủ tiền không?",
        answer:
          "Không phải lúc nào cũng đủ mức tối đa. Nếu airline re-route bạn và độ trễ khi đến nơi cuối cùng không vượt các ngưỡng nêu trong bảng chính thức của EU, compensation có thể bị giảm 50%, còn €125, €200 hoặc €300.",
      },
      {
        question: "Trễ 2 giờ 59 phút có được cùng mức tiền như trễ 3 giờ không?",
        answer:
          "Trong logic EU261 cho delay compensation, mốc 3 giờ tại điểm đến cuối cùng rất quan trọng. Nếu chưa chạm mốc đó, hồ sơ thường không được nhìn theo cùng cách như case 3 giờ trở lên, dù bạn vẫn có thể có quyền được hỗ trợ tại sân bay trong một số tình huống.",
      },
    ],
    claimVariant: "delayed",
    contextualLinks: [
      {
        label: "Kiểm tra ngay case delay để ước lượng số tiền",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "tre-3-tieng-duoc-boi-thuong-bao-nhieu-tien",
          content: "delay_amount_primary_check",
        }),
        placement: "vi_article_delay_amount_primary_check",
        description:
          "Phù hợp nếu bạn muốn biết hồ sơ của mình nghiêng về €250, €400 hay €600 và có đang đủ điều kiện theo EU261 hay chưa.",
      },
      {
        label: "Kiểm tra case tổng quát bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "tre-3-tieng-duoc-boi-thuong-bao-nhieu-tien",
          content: "general_amount_check",
        }),
        placement: "vi_article_delay_amount_general_check",
        description:
          "Dùng khi bạn chưa chắc case của mình là delay thuần túy, missed connection, hay một hành trình đã bị đổi chuyến và cần đánh giá tổng quát.",
      },
      {
        label: "Nếu hãng đã re-route hoặc biến case thành hủy chuyến",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "tre-3-tieng-duoc-boi-thuong-bao-nhieu-tien",
          content: "reroute_cancellation_amount_check",
        }),
        placement: "vi_article_delay_amount_reroute_check",
        description:
          "Hữu ích khi ban đầu là delay nhưng sau đó hãng đổi sang chuyến khác, thay lịch đáng kể hoặc cần kiểm tra logic giảm 50% sau re-routing.",
      },
    ],
  },
  {
    slug: "chuyen-bay-bi-huy-co-duoc-nhan-tien-khong",
    title: "Chuyến bay bị hủy có được nhận tiền không?",
    seoTitle:
      "Chuyến bay bị hủy có được nhận tiền không? Refund, bồi thường và quyền lợi EU261",
    description:
      "Câu trả lời ngắn gọn cho hành khách Việt: khi chuyến bay bị hủy bạn có thể được hoàn tiền vé, có thể được bồi thường thêm, và có thể được hoàn chi phí phát sinh hợp lý. Ba loại tiền này không giống nhau và không phải case hủy chuyến nào cũng tạo ra compensation.",
    excerpt:
      "Đây là bài short-answer có intent rất mạnh vì người dùng hỏi thẳng về tiền sau khi flight bị hủy. Bài viết giải thích rõ sự khác nhau giữa refund, compensation và reimbursement, khi nào hãng phải trả tiền, và vì sao việc hủy chuyến không tự động đồng nghĩa với €250, €400 hoặc €600.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "8 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Short answer cho case cancellation",
    heroSummary:
      "Có, chuyến bay bị hủy có thể dẫn đến tiền. Nhưng phải tách rất rõ ba lớp quyền lợi: hoàn tiền vé hoặc re-routing, bồi thường thêm trong một số case, và hoàn lại chi phí hợp lý nếu hãng không cung cấp hỗ trợ cần thiết.",
    quickAnswer: [
      "Có, nếu chuyến bay bị hủy bạn luôn có quyền chọn giữa hoàn tiền vé, đổi sang chuyến khác hoặc chuyến bay quay lại điểm xuất phát nếu phù hợp với hành trình.",
      "Bạn cũng có thể có quyền nhận bồi thường tiền mặt nếu được thông báo chưa đến 14 ngày trước giờ bay và hãng không chứng minh được extraordinary circumstances.",
      "Ngoài ra, nếu trong lúc chờ bạn phải tự trả chi phí cần thiết và hợp lý vì hãng không hỗ trợ đúng cách, bạn còn có thể đòi hoàn các chi phí đó.",
    ],
    keyPoints: [
      "Hủy chuyến không chỉ có một loại tiền.",
      "Refund và compensation là hai quyền khác nhau.",
      "Compensation không phát sinh trong mọi case cancellation.",
      "Thông báo dưới 14 ngày là mốc rất quan trọng.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: có, nhưng không chỉ là một loại tiền",
        paragraphs: [
          "Nếu bạn hỏi 'chuyến bay bị hủy có được nhận tiền không?', câu trả lời đúng là có thể có, nhưng phải tách rõ bạn đang hỏi loại tiền nào. Dưới EU261, hành khách có thể có quyền hoàn tiền vé, có thể có quyền nhận compensation riêng, và cũng có thể có quyền đòi lại các chi phí phát sinh hợp lý nếu hãng không hỗ trợ đúng cách.",
          "Rất nhiều người dùng chỉ dùng một chữ 'tiền' cho cả ba nhóm này, nên dễ bị nhầm. Đây cũng là lý do tại sao một số hành khách nghĩ hãng đã 'trả tiền rồi' khi chỉ mới hoàn vé, trong khi compensation vẫn chưa được xử lý. Hoặc ngược lại, họ kỳ vọng €600 trong khi case thực tế chỉ chắc ở phần refund.",
        ],
        bullets: [
          "Refund: tiền vé hoặc phần hành trình chưa bay.",
          "Compensation: khoản bồi thường thêm theo logic EU261.",
          "Reimbursement: hoàn lại chi phí cần thiết, hợp lý như ăn uống, khách sạn, taxi.",
        ],
      },
      {
        title: "2. Quyền chắc chắn nhất khi chuyến bay bị hủy",
        paragraphs: [
          "Nguồn FAQ chính thức của EU nêu rất rõ: bất kể hoàn cảnh nào, nếu chuyến bay bị hủy, bạn luôn có quyền chọn một trong các phương án là hoàn tiền vé, re-routing hoặc một chuyến bay quay lại điểm xuất phát nếu đó là phần phù hợp của hành trình. Đây là lớp quyền lợi cơ bản nhất trong case cancellation.",
          "Điều đó có nghĩa là ngay cả khi bạn không đủ điều kiện để nhận compensation tiền mặt, bạn vẫn không mất quyền ở lớp cơ bản này. Vì vậy câu trả lời cho câu hỏi 'có được nhận tiền không?' trong nhiều case trước hết là có ở phần hoàn tiền vé, nếu bạn chọn không bay tiếp và chọn reimbursement thay vì re-routing.",
        ],
        bullets: [
          "Refund là quyền rất mạnh trong case hủy chuyến.",
          "Re-routing là lựa chọn thay thế cho refund, không phải khoản tiền cộng thêm.",
          "Không đủ compensation không có nghĩa là mất hết quyền lợi.",
        ],
      },
      {
        title: "3. Khi nào hủy chuyến còn tạo ra compensation tiền mặt?",
        paragraphs: [
          "Theo FAQ của Your Europe, bạn có thể có quyền nhận compensation nếu được thông báo về việc hủy chuyến chưa đến 14 ngày trước ngày khởi hành dự kiến. Đây là mốc rất quan trọng trong hầu hết các truy vấn chuyển đổi về cancellation.",
          "Nhưng mốc dưới 14 ngày chưa phải là kết luận cuối cùng. Hãng vẫn có thể tránh trách nhiệm compensation nếu chứng minh được cancellation do extraordinary circumstances. Nói cách khác, cancellation có thể tạo ra tiền, nhưng không phải mọi cancellation đều tự động ra €250, €400 hoặc €600.",
        ],
        bullets: [
          "Thông báo dưới 14 ngày: case mạnh hơn rõ rệt.",
          "Extraordinary circumstances có thể chặn compensation.",
          "Compensation là lớp quyền thêm, không thay thế refund.",
        ],
      },
      {
        title: "4. Số tiền là bao nhiêu nếu case đủ điều kiện?",
        paragraphs: [
          "Nếu case cancellation đủ điều kiện cho compensation, mức tiền thường đi theo logic quen thuộc của EU261: €250, €400 hoặc €600 tùy khoảng cách chuyến bay. Vì vậy câu hỏi 'chuyến bay bị hủy có được nhận tiền không?' trong thực tế thường tách thành hai câu nhỏ: có được compensation hay không, và nếu có thì thuộc mức nào.",
          "Với người dùng Việt bay đường dài từ châu Âu về Việt Nam hoặc ngược lại trên hãng EU, nhiều route đủ điều kiện thường tiến gần khung €600. Nhưng nếu chuyến ngắn hơn hoặc trung bình hơn, mức có thể là €250 hoặc €400. Con số này không chỉ phụ thuộc vào việc flight bị hủy, mà còn phụ thuộc vào distance và phạm vi áp dụng EU261.",
        ],
        bullets: [
          "€250 cho nhóm ngắn hơn.",
          "€400 cho nhiều route trung bình và intra-EU dài hơn.",
          "€600 cho nhiều route long-haul đủ điều kiện.",
        ],
      },
      {
        title: "5. Nếu hãng không hỗ trợ và bạn phải tự chi trả thì sao?",
        paragraphs: [
          "Trong trường hợp bạn đang chờ re-routing sau khi chuyến bay bị hủy, hãng còn có nghĩa vụ hỗ trợ như ăn uống, liên lạc, và nếu cần thì khách sạn cùng phương tiện đi lại giữa sân bay và nơi ở. Nếu hãng không cung cấp hỗ trợ đó và bạn phải tự chi trả những khoản cần thiết, hợp lý và phù hợp, bạn có thể yêu cầu hoàn lại chi phí.",
          "Đây là lớp quyền lợi thứ ba mà nhiều hành khách bỏ sót. Khi người dùng hỏi 'có được nhận tiền không?', đôi khi phần tiền dễ lấy nhất thực tế không phải compensation mà là refund và reimbursement các khoản thực chi có chứng từ rõ ràng.",
        ],
        bullets: [
          "Giữ tất cả hóa đơn chi phí hợp lý.",
          "Chỉ những chi phí cần thiết và phù hợp mới dễ được hoàn lại.",
          "Reimbursement khác với compensation.",
        ],
      },
      {
        title: "6. Khi nào cancellation không tạo ra compensation nhưng vẫn có refund?",
        paragraphs: [
          "Một case rất điển hình là chuyến bay bị hủy vì nguyên nhân mà hãng có thể chứng minh là extraordinary circumstances. Trong tình huống đó, compensation có thể không phát sinh. Tuy nhiên, điều này không xóa quyền hoàn tiền vé hoặc quyền được sắp xếp lại hành trình.",
          "Đây là điểm người dùng thường hiểu sai nhất. Họ nhận một email từ chối compensation rồi nghĩ rằng mọi quyền lợi đều chấm dứt. Trên thực tế, một case có thể không đủ cho compensation nhưng vẫn hoàn toàn đủ cho refund, re-routing và hỗ trợ tại sân bay hoặc trong thời gian chờ chuyến thay thế.",
        ],
        bullets: [
          "Từ chối compensation không đồng nghĩa với mất refund.",
          "Refund, re-routing và assistance tồn tại độc lập với compensation.",
          "Cần đọc lý do từ chối rất kỹ trước khi kết luận case đã hết giá trị.",
        ],
      },
      {
        title: "7. Hành khách Việt nên giữ gì để nhận tiền dễ hơn?",
        paragraphs: [
          "Hãy giữ email hoặc SMS thông báo hủy chuyến, PNR, vé điện tử, boarding pass nếu đã check-in, thông tin re-routing và toàn bộ hóa đơn chi phí phát sinh. Nếu case có nhiều chặng hoặc transit qua châu Âu, toàn bộ cấu trúc booking có thể rất quan trọng trong việc đánh giá quyền lợi cuối cùng.",
          "Nếu bạn chọn refund, cần lưu ý đây là khoản có logic riêng về thời gian trả tiền. Nếu bạn theo compensation, hồ sơ lại cần chứng minh thêm về phạm vi áp dụng, thời điểm thông báo và bối cảnh hủy chuyến. Một bộ hồ sơ sạch sẽ ngay từ đầu giúp phân loại case nhanh và chính xác hơn nhiều.",
        ],
        bullets: [
          "Giữ thông báo hủy chuyến từ hãng.",
          "Giữ PNR, e-ticket và chi tiết re-routing nếu có.",
          "Giữ hóa đơn cho các chi phí phát sinh hợp lý.",
        ],
      },
    ],
    faqs: [
      {
        question: "Chuyến bay bị hủy thì có chắc chắn được bồi thường tiền mặt không?",
        answer:
          "Không. Bạn luôn có quyền ở lớp cơ bản như refund hoặc re-routing, nhưng compensation tiền mặt chỉ phát sinh trong một số case, thường khi thông báo hủy chuyến đến chưa đủ 14 ngày và hãng không chứng minh được extraordinary circumstances.",
      },
      {
        question: "Nếu flight bị hủy thì tôi có thể lấy lại tiền vé không?",
        answer:
          "Có. Nếu chuyến bay bị hủy, bạn có quyền chọn giữa hoàn tiền vé, re-routing hoặc trong một số trường hợp là chuyến bay quay lại điểm xuất phát. Refund là một quyền cơ bản trong case cancellation.",
      },
      {
        question: "Refund và compensation khác nhau như thế nào?",
        answer:
          "Refund là trả lại tiền vé hoặc phần hành trình chưa bay. Compensation là khoản bồi thường thêm theo EU261 nếu case đủ điều kiện. Hai khoản này khác nhau và có thể cùng tồn tại trong một số trường hợp.",
      },
      {
        question: "Nếu hãng báo hủy chuyến hơn 14 ngày trước giờ bay thì còn được tiền không?",
        answer:
          "Bạn vẫn có thể có quyền refund hoặc re-routing, nhưng compensation tiền mặt thường không phải là nhóm mạnh nhất trong trường hợp đã được thông báo hơn 14 ngày trước lịch bay.",
      },
      {
        question: "Nếu tôi tự trả tiền khách sạn hoặc đồ ăn sau khi chuyến bay bị hủy thì sao?",
        answer:
          "Nếu các chi phí đó là cần thiết, hợp lý và hãng lẽ ra phải hỗ trợ nhưng đã không làm, bạn có thể yêu cầu hoàn lại. Hãy giữ đầy đủ hóa đơn và bằng chứng liên quan.",
      },
    ],
    claimVariant: "cancelled",
    contextualLinks: [
      {
        label: "Kiểm tra ngay case hủy chuyến của bạn",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "chuyen-bay-bi-huy-co-duoc-nhan-tien-khong",
          content: "cancellation_primary_check",
        }),
        placement: "vi_article_cancellation_money_primary_check",
        description:
          "Phù hợp nếu bạn muốn biết nhanh case của mình nghiêng về refund, compensation hay cả hai sau khi chuyến bay bị hủy.",
      },
      {
        label: "Kiểm tra case tổng quát bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "chuyen-bay-bi-huy-co-duoc-nhan-tien-khong",
          content: "general_cancellation_money_check",
        }),
        placement: "vi_article_cancellation_money_general_check",
        description:
          "Dùng khi bạn chưa chắc đây là hủy chuyến thuần túy, thay đổi lịch lớn, re-routing hay một tình huống gần với delay kéo dài.",
      },
      {
        label: "Nếu case đang chuyển sang logic delay sau re-routing",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "chuyen-bay-bi-huy-co-duoc-nhan-tien-khong",
          content: "reroute_delay_followup_check",
        }),
        placement: "vi_article_cancellation_money_delay_followup",
        description:
          "Hữu ích khi hãng đã đổi bạn sang chuyến khác và bây giờ trọng tâm là bạn đến nơi cuối cùng trễ bao lâu sau re-routing.",
      },
    ],
  },
  {
    slug: "co-the-yeu-cau-boi-thuong-neu-mat-boarding-pass-khong",
    title: "Có thể yêu cầu bồi thường nếu mất boarding pass không?",
    seoTitle:
      "Mất boarding pass có còn đòi bồi thường được không? Hướng dẫn EU261 cho hành khách Việt",
    description:
      "Câu trả lời ngắn gọn cho hành khách Việt: mất boarding pass không tự động làm mất quyền yêu cầu bồi thường theo EU261 nếu bạn vẫn có thể chứng minh đặt chỗ đã được xác nhận bằng vé, PNR hoặc bằng chứng khác. Tuy nhiên, thiếu boarding pass thường làm hồ sơ yếu hơn và cần thay thế bằng tài liệu khác.",
    excerpt:
      "Đây là bài short-answer có intent rất rõ vì người dùng thường chỉ muốn biết một điều: không còn boarding pass thì case đã chết chưa. Bài viết giải thích vì sao câu trả lời thường là chưa, dựa trên logic ticket hoặc other proof trong luật EU, đồng thời chỉ ra khi nào việc mất boarding pass thực sự trở thành vấn đề lớn.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "8 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Proof question cho claim EU261",
    heroSummary:
      "Thường là có thể. Theo logic của Regulation 261/2004 và án lệ CJEU năm 2025, boarding pass là một dạng bằng chứng hữu ích về reservation đã được chấp nhận, nhưng không phải dạng bằng chứng duy nhất. Nếu bạn vẫn còn vé, PNR, email của hãng hoặc dữ liệu tương đương, hồ sơ thường chưa chết chỉ vì mất boarding pass.",
    quickAnswer: [
      "Có, trong nhiều case bạn vẫn có thể yêu cầu bồi thường dù đã mất boarding pass, nếu vẫn chứng minh được reservation đã được hãng chấp nhận bằng ticket hoặc other proof.",
      "Boarding pass là bằng chứng mạnh, nhưng không phải bằng chứng duy nhất theo logic EU261. PNR, e-ticket, email xác nhận, dữ liệu app của hãng hoặc tài liệu từ tour operator vẫn có thể rất quan trọng.",
      "Vấn đề lớn hơn không phải là mất boarding pass, mà là không còn cách nào chứng minh confirmed reservation, check-in đúng hạn hoặc mối liên hệ của bạn với chuyến bay bị delay hay cancelled.",
    ],
    keyPoints: [
      "Mất boarding pass không tự động làm mất claim.",
      "Ticket hoặc other proof vẫn có thể cứu hồ sơ.",
      "Nếu bạn không thể chứng minh confirmed reservation, case yếu đi rõ rệt.",
      "Case cancellation thường dễ xử lý hơn case delay nếu chưa kịp check-in và đã có thông báo hủy chuyến từ hãng.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: thường là vẫn có thể",
        paragraphs: [
          "Nếu bạn hỏi 'mất boarding pass có còn đòi bồi thường được không?', câu trả lời thực tế nhất là: thường là có thể. Dưới EU261, boarding pass là một mảnh bằng chứng rất hữu ích, nhưng không phải chiếc chìa khóa duy nhất mở hồ sơ.",
          "Điểm cốt lõi không phải là bạn có còn tấm boarding pass hay không, mà là bạn có còn chứng minh được rằng mình có reservation đã được xác nhận cho chuyến bay đó hay không. Nếu câu trả lời là có, hồ sơ thường vẫn còn sống.",
        ],
        bullets: [
          "Mất boarding pass không đồng nghĩa tự động mất quyền.",
          "Điều quan trọng là năng lực chứng minh reservation đã được chấp nhận.",
          "Càng nhiều bằng chứng thay thế, hồ sơ càng mạnh.",
        ],
      },
      {
        title: "2. Cơ sở pháp lý chính: ticket hoặc other proof",
        paragraphs: [
          "Trong án lệ CJEU ngày 6 tháng 3 năm 2025 về Regulation 261/2004, Tòa nhắc lại logic ở Điều 2(g): reservation gắn với việc hành khách có ticket hoặc other proof cho thấy đặt chỗ đã được hãng hoặc tour operator chấp nhận và đăng ký. Tòa cũng nêu rõ boarding pass có thể là một dạng other proof như vậy.",
          "Từ chính logic đó, có thể rút ra một kết luận thực tế rất quan trọng: nếu boarding pass chỉ là một dạng proof, thì việc không còn boarding pass không tự động có nghĩa là không còn proof. Nói cách khác, hồ sơ có thể vẫn đi được nếu bạn còn những chứng cứ khác đủ mạnh.",
        ],
        bullets: [
          "Boarding pass là một dạng proof mạnh, không phải dạng duy nhất.",
          "Ticket, PNR và tài liệu từ hãng hoặc tour operator vẫn rất quan trọng.",
          "Kết luận thực tế: mất boarding pass chưa đủ để tự động bác claim.",
        ],
      },
      {
        title: "3. Những gì có thể thay boarding pass trong thực tế",
        paragraphs: [
          "Trong nhiều hồ sơ thực tế, thứ cứu claim không phải là một tài liệu duy nhất mà là cả cụm bằng chứng. E-ticket, email xác nhận đặt chỗ, mã PNR, dữ liệu từ ứng dụng của hãng, tin nhắn đổi giờ bay, email hủy chuyến, xác nhận re-routing hoặc hóa đơn mua vé qua OTA hay tour operator đều có thể giúp dựng lại case.",
          "Với hành khách Việt bay long-haul hoặc transit qua châu Âu, việc có toàn bộ chuỗi email của hãng thường đặc biệt hữu ích. Trong case missed connection hoặc delay dài, boarding pass bị mất vẫn không nhất thiết là đòn chí mạng nếu bạn còn đầy đủ PNR, thông tin itinerary và bằng chứng về giờ đến cuối cùng.",
        ],
        bullets: [
          "E-ticket và PNR thường là nền tảng tốt nhất.",
          "Email hủy chuyến, đổi chuyến hoặc delay rất hữu ích.",
          "Dữ liệu app của hãng hoặc OTA có thể hỗ trợ mạnh.",
        ],
      },
      {
        title: "4. Khi nào mất boarding pass thực sự là vấn đề lớn?",
        paragraphs: [
          "Vấn đề trở nên nghiêm trọng hơn khi boarding pass biến mất và bạn cũng không còn ticket, PNR, email xác nhận hay bất kỳ dấu vết số nào từ hãng. Khi đó hồ sơ không yếu vì thiếu đúng tấm boarding pass, mà yếu vì gần như không còn cách chứng minh confirmed reservation hoặc mối liên hệ giữa bạn và chuyến bay gặp sự cố.",
          "Một điểm nữa cần tách bạch là mất boarding pass sau chuyến bay khác hoàn toàn với việc bạn chưa bao giờ check-in hoặc đến sân bay muộn. FAQ chính thức của EU nêu rõ rằng hành khách đến quá muộn và không đáp ứng yêu cầu check-in đúng hạn thì không có quyền theo cùng logic này. Vì vậy, đừng nhầm việc mất chứng từ sau đó với việc ngay từ đầu không đủ điều kiện lên chuyến bay.",
        ],
        bullets: [
          "Mất boarding pass + không còn bất kỳ proof nào khác: case yếu mạnh.",
          "Không check-in đúng hạn là rủi ro pháp lý khác hẳn.",
          "Hãy phân biệt mất chứng cứ với không đáp ứng điều kiện bay.",
        ],
      },
      {
        title: "5. Case cancellation thường dễ hơn hay case delay dễ hơn?",
        paragraphs: [
          "Nếu chuyến bay bị hủy và hãng đã gửi email hoặc SMS thông báo, việc thiếu boarding pass thường ít nguy hiểm hơn. Lý do là chính hãng đã để lại dấu vết rõ ràng rằng bạn là hành khách của booking bị ảnh hưởng. Trong nhiều case cancellation, chuỗi email của hãng và PNR đủ để làm hồ sơ vẫn rất mạnh.",
          "Với delay, nhất là delay trên hành trình nhiều chặng, boarding pass của từng chặng hữu ích hơn vì nó giúp gắn bạn với luồng di chuyển thực tế. Nhưng ngay cả ở đây, thiếu boarding pass vẫn không nhất thiết giết case nếu còn e-ticket, mã đặt chỗ, dữ liệu check-in điện tử và bằng chứng về arrival delay tại điểm đến cuối cùng.",
        ],
        bullets: [
          "Cancellation có email từ hãng: thường dễ dựng lại hồ sơ hơn.",
          "Delay nhiều chặng: boarding pass hữu ích hơn, nhưng vẫn không phải proof duy nhất.",
          "PNR và itinerary đầy đủ giúp bù đáng kể cho chứng từ bị mất.",
        ],
      },
      {
        title: "6. Bạn nên làm gì ngay nếu đã mất boarding pass?",
        paragraphs: [
          "Việc đầu tiên là đừng coi hồ sơ như đã hết giá trị. Hãy gom lại toàn bộ dấu vết số còn lại: email xác nhận đặt chỗ, email check-in, email thay đổi lịch, dữ liệu trong app của hãng, ảnh chụp màn hình từ tài khoản OTA, sao kê thanh toán và mọi thông báo liên quan đến chuyến bay.",
          "Nếu case là long-haul hoặc transit qua EU, hãy sắp xếp bằng chứng theo thứ tự hành trình. Điều này giúp làm rõ bạn đã thuộc booking nào, chặng nào bị ảnh hưởng và kết quả cuối cùng ra sao. Một hồ sơ có cấu trúc tốt thường bù lại được khá nhiều cho việc thiếu một tài liệu đơn lẻ.",
        ],
        bullets: [
          "Tìm lại PNR, e-ticket và email check-in.",
          "Chụp hoặc tải lại dữ liệu từ app của hãng và OTA.",
          "Sắp xếp bằng chứng theo thứ tự từng chặng của hành trình.",
        ],
      },
      {
        title: "7. Kết luận thực tế cho người dùng Việt",
        paragraphs: [
          "Với người dùng Việt, đặc biệt là các hành trình châu Âu ↔ Việt Nam hoặc nối chuyến qua hub EU, mất boarding pass là chuyện rất thường gặp vì hành trình dài, nhiều app và nhiều email. Tin tốt là EU261 không vận hành theo kiểu 'mất một tờ giấy là mất luôn quyền'.",
          "Kết luận thực tế là: nếu bạn còn đủ dấu vết để chứng minh mình có confirmed reservation và thực sự là hành khách bị ảnh hưởng, claim vẫn thường đáng kiểm tra. Boarding pass giúp case đẹp hơn, nhưng hiếm khi là tài liệu duy nhất quyết định sống còn của hồ sơ.",
        ],
        bullets: [
          "Đừng tự bỏ claim chỉ vì mất boarding pass.",
          "Hãy nghĩ theo cụm bằng chứng, không nghĩ theo một tài liệu duy nhất.",
          "Case vẫn đáng kiểm tra nếu còn proof về reservation và hành trình.",
        ],
      },
    ],
    faqs: [
      {
        question: "Mất boarding pass thì còn đòi bồi thường EU261 được không?",
        answer:
          "Thường là có thể, nếu bạn vẫn có ticket, PNR hoặc other proof cho thấy reservation đã được chấp nhận và bạn là hành khách của chuyến bay bị ảnh hưởng. Mất boarding pass làm hồ sơ khó hơn, nhưng không tự động giết claim.",
      },
      {
        question: "Boarding pass có phải là giấy tờ bắt buộc duy nhất không?",
        answer:
          "Không. Theo logic của Regulation 261/2004 và án lệ CJEU năm 2025, boarding pass là một dạng proof hữu ích, nhưng không phải dạng duy nhất. Ticket hoặc other proof vẫn có thể rất quan trọng.",
      },
      {
        question: "Nếu tôi chỉ còn email xác nhận và mã PNR thì sao?",
        answer:
          "Đó vẫn có thể là nền tảng rất tốt cho hồ sơ. Trong nhiều case, email xác nhận, e-ticket, PNR và dữ liệu từ hãng hoặc OTA đủ để chứng minh booking đã được chấp nhận, đặc biệt nếu còn thêm email delay, cancellation hoặc re-routing.",
      },
      {
        question: "Case hủy chuyến có dễ hơn case delay khi mất boarding pass không?",
        answer:
          "Thường là dễ hơn một chút nếu hãng đã gửi thông báo hủy chuyến rõ ràng. Khi đó chính hãng để lại dấu vết mạnh rằng bạn thuộc booking bị ảnh hưởng. Với delay nhiều chặng, boarding pass hữu ích hơn nhưng vẫn không phải yếu tố duy nhất.",
      },
      {
        question: "Nếu tôi chưa bao giờ check-in thì có giống với việc mất boarding pass không?",
        answer:
          "Không. Đây là hai việc khác nhau. Mất boarding pass là mất chứng từ sau đó; còn không check-in đúng hạn hoặc đến quá muộn có thể ảnh hưởng trực tiếp đến quyền của bạn theo EU rules.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh case của bạn bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "co-the-yeu-cau-boi-thuong-neu-mat-boarding-pass-khong",
          content: "general_proof_check",
        }),
        placement: "vi_article_boarding_pass_general_check",
        description:
          "Phù hợp nếu bạn đã mất boarding pass nhưng vẫn còn một phần hồ sơ như PNR, email hãng hoặc dữ liệu từ app và muốn biết case còn đi được không.",
      },
      {
        label: "Nếu vấn đề chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "co-the-yeu-cau-boi-thuong-neu-mat-boarding-pass-khong",
          content: "delay_proof_recovery",
        }),
        placement: "vi_article_boarding_pass_delay_check",
        description:
          "Hữu ích khi bạn không còn boarding pass của chuyến bay bị delay hoặc missed connection và muốn kiểm tra xem bằng chứng thay thế đã đủ mạnh chưa.",
      },
      {
        label: "Nếu vấn đề chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "co-the-yeu-cau-boi-thuong-neu-mat-boarding-pass-khong",
          content: "cancellation_proof_recovery",
        }),
        placement: "vi_article_boarding_pass_cancellation_check",
        description:
          "Dùng khi flight đã bị hủy, bạn không còn boarding pass nhưng vẫn có email hoặc tin nhắn từ hãng và muốn đánh giá nhanh sức mạnh của hồ sơ.",
      },
    ],
  },
  {
    slug: "da-nhan-voucher-thi-con-duoc-tien-mat-khong",
    title: "Đã nhận voucher thì còn được tiền mặt không?",
    seoTitle:
      "Đã nhận voucher thì còn được tiền mặt không? Refund, cash và EU261 giải thích rõ",
    description:
      "Câu trả lời ngắn gọn cho hành khách Việt: còn hay không còn được tiền mặt phụ thuộc vào loại voucher bạn đã nhận. Voucher đồ ăn tại sân bay thường không chặn quyền đòi bồi thường. Travel voucher thay cho refund hoặc compensation chỉ có giá trị thay tiền mặt nếu bạn đã đồng ý một cách thực sự rõ ràng và có thông tin đầy đủ.",
    excerpt:
      "Đây là bài short-answer rất mạnh về chuyển đổi vì người dùng thường đã ở rất gần bước claim và muốn biết mình có lỡ mất quyền tiền mặt sau khi nhận voucher hay chưa. Bài viết tách rõ meal voucher, travel voucher và voucher thay cho refund hoặc compensation để tránh nhầm lẫn phổ biến.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Voucher versus cash dưới EU261",
    heroSummary:
      "Không có một câu trả lời chung cho mọi loại voucher. Voucher ăn uống tại sân bay thường không lấy mất quyền compensation. Nhưng nếu voucher được dùng thay cho hoàn tiền vé hoặc thay cho compensation, câu hỏi then chốt là bạn có thật sự đồng ý một cách tự nguyện, rõ ràng và được cung cấp đầy đủ thông tin về lựa chọn tiền mặt hay không.",
    quickAnswer: [
      "Nếu bạn chỉ nhận meal voucher, hotel voucher hoặc hỗ trợ tại sân bay, bạn thường vẫn có thể đòi compensation tiền mặt nếu case đủ điều kiện.",
      "Nếu bạn nhận travel voucher thay cho refund hoặc compensation, quyền đòi tiền mặt còn hay không phụ thuộc vào việc bạn có thực sự đồng ý nhận voucher thay tiền mặt hay không.",
      "Theo án lệ CJEU năm 2024, hành khách chỉ được coi là đã đồng ý voucher thay tiền mặt khi đã có lựa chọn hiệu quả và được thông tin đầy đủ, rõ ràng về các phương án hoàn trả.",
    ],
    keyPoints: [
      "Không phải voucher nào cũng giống nhau.",
      "Meal voucher và travel voucher là hai chuyện hoàn toàn khác.",
      "Voucher chỉ thay cash nếu có sự đồng ý hợp lệ của hành khách.",
      "Voucher cho một quyền không tự động xóa mọi quyền khác.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: còn hay không còn tùy loại voucher",
        paragraphs: [
          "Nếu bạn hỏi 'đã nhận voucher thì còn được tiền mặt không?', câu trả lời đúng là: tùy loại voucher bạn đã nhận và bạn đã đồng ý với nó như thế nào. Đây là một trong những câu hỏi dễ bị trả lời sai nhất vì rất nhiều người dùng dùng chung một từ 'voucher' cho những thứ pháp lý hoàn toàn khác nhau.",
          "Một voucher đồ ăn ở sân bay không giống travel voucher để đổi chuyến khác trong tương lai. Và travel voucher được gửi như một đề nghị hoàn vé lại không giống voucher được dùng để thanh toán compensation. Nếu không tách những lớp này ra, rất dễ tự bỏ mất quyền hoặc ngược lại kỳ vọng quá mức.",
        ],
        bullets: [
          "Meal voucher: thường chỉ là một phần của quyền được chăm sóc.",
          "Travel voucher: có thể là phương thức refund hoặc compensation thay cho tiền mặt.",
          "Muốn biết còn được cash không, trước tiên phải biết voucher đó dùng để làm gì.",
        ],
      },
      {
        title: "2. Nếu đó chỉ là meal voucher hoặc hotel voucher tại sân bay",
        paragraphs: [
          "Trong case delay hoặc cancellation, hãng có nghĩa vụ chăm sóc hành khách bằng đồ ăn, thức uống, liên lạc, khách sạn hoặc di chuyển khi cần. Nếu bạn nhận voucher đồ ăn, voucher khách sạn hoặc hỗ trợ tương tự tại sân bay, điều đó thường không có nghĩa là bạn đã từ bỏ compensation tiền mặt.",
          "Nói đơn giản, loại voucher này thường chỉ là công cụ để thực hiện quyền được chăm sóc trong lúc chờ chuyến mới hoặc trong lúc delay kéo dài. Nó không giống với việc bạn ký nhận travel credit để thay cho refund hoặc compensation. Vì vậy trong đa số trường hợp, nhận meal voucher không chặn claim EU261.",
        ],
        bullets: [
          "Voucher ăn uống thường không khóa quyền compensation.",
          "Voucher khách sạn thường không khóa quyền refund hoặc compensation.",
          "Đây là nhóm voucher ít gây rủi ro pháp lý nhất cho hành khách.",
        ],
      },
      {
        title: "3. Nếu hãng đề nghị travel voucher thay cho tiền mặt",
        paragraphs: [
          "Khi chuyến bay bị hủy, quyền cơ bản của hành khách bao gồm reimbursement của vé trong 7 ngày hoặc re-routing. Luật EU và phần giải thích chính thức cho thấy reimbursement về nguyên tắc là tiền mặt, chuyển khoản, lệnh ngân hàng hoặc séc; còn travel voucher chỉ được dùng nếu hành khách đồng ý. Điều đó có nghĩa là hãng không thể đơn giản áp voucher thay tiền mặt như một mặc định hợp lệ cho mọi case.",
          "Án lệ Cobult của CJEU năm 2024 còn đi xa hơn khi nói rõ rằng hành khách chỉ được xem là đã đồng ý travel voucher thay cho tiền mặt nếu đã có một lựa chọn hiệu quả và được thông tin đầy đủ, rõ ràng về các phương án hoàn trả. Vì vậy nếu hãng chỉ đẩy bạn vào voucher mà không thật sự cho lựa chọn công bằng, câu chuyện chưa chắc đã kết thúc theo hướng bất lợi cho bạn.",
        ],
        bullets: [
          "Travel voucher không tự động thay cash.",
          "Cần có sự đồng ý hợp lệ của hành khách.",
          "Sự đồng ý hợp lệ đòi hỏi lựa chọn hiệu quả và thông tin rõ ràng.",
        ],
      },
      {
        title: "4. Đã bấm nhận voucher rồi thì có còn đòi cash không?",
        paragraphs: [
          "Nếu bạn đã chủ động chọn voucher sau khi được trình bày công bằng, rõ ràng và đầy đủ về lựa chọn tiền mặt, khả năng quay lại đòi đúng khoản refund đó bằng cash sẽ yếu hơn nhiều. Đây là điểm người dùng cần nhìn rất thực tế: nếu bạn đã chấp nhận voucher một cách có thông tin và loại trừ lựa chọn tiền mặt, luật có xu hướng coi đó là sự đồng ý hợp lệ.",
          "Nhưng nếu việc 'đồng ý' diễn ra trong bối cảnh thiếu thông tin, giao diện gây hiểu lầm, hoặc hãng không nêu rõ rằng bạn vẫn có quyền nhận tiền mặt, bạn vẫn có cơ sở để xem lại. Nói cách khác, không phải cứ thấy email voucher trong inbox là mặc định mất luôn quyền cash. Câu hỏi thực sự là quá trình chấp nhận voucher đó có đạt chuẩn đồng ý hợp lệ hay không.",
        ],
        bullets: [
          "Đồng ý rõ ràng và có thông tin: cash cho cùng khoản đó thường yếu đi.",
          "Đồng ý trong môi trường mập mờ hoặc bị ép: vẫn cần xem lại.",
          "Đừng chỉ nhìn vào việc voucher đã được gửi, hãy nhìn vào cách nó được chấp nhận.",
        ],
      },
      {
        title: "5. Voucher cho refund có xóa luôn compensation không?",
        paragraphs: [
          "Không nên mặc định như vậy. Refund và compensation là hai lớp quyền khác nhau dưới EU261. Nếu voucher chỉ xử lý phần refund của vé, điều đó không tự động có nghĩa là mọi quyền compensation cũng đã biến mất, trừ khi thỏa thuận thực tế giữa bạn và hãng nêu rất rõ điều ngược lại.",
          "Đây là một suy luận pháp lý thực tế từ cấu trúc quyền của EU261: hoàn vé và bồi thường không phải là cùng một khoản tiền. Vì vậy nếu hãng gửi một travel voucher để thay cho vé chưa bay, bạn vẫn nên kiểm tra riêng xem compensation có còn mở hay không, đặc biệt trong case cancellation dưới 14 ngày hoặc long delay đủ điều kiện.",
        ],
        bullets: [
          "Refund và compensation là hai bài toán tách riêng.",
          "Voucher cho vé chưa bay không tự động dập mọi quyền khác.",
          "Cần đọc kỹ phạm vi thỏa thuận mà voucher thực sự giải quyết.",
        ],
      },
      {
        title: "6. Với người dùng Việt, những tình huống hay gặp nhất",
        paragraphs: [
          "Người dùng Việt thường gặp ba tình huống. Tình huống đầu là nhận voucher đồ ăn hoặc khách sạn ở sân bay rồi lo mình mất compensation. Tình huống thứ hai là hãng EU hoặc OTA gửi travel credit sau cancellation thay vì tiền. Tình huống thứ ba là hành khách đã bấm chọn voucher trong lúc gấp và giờ muốn quay lại hỏi xem còn cơ hội lấy cash không.",
          "Mỗi tình huống cho ra câu trả lời khác nhau. Meal voucher thường không sao. Travel voucher cho refund hoặc compensation thì phải soi kỹ quy trình đồng ý. Và nếu case liên quan đến route châu Âu ↔ Việt Nam hoặc transit qua EU, số tiền tiềm năng có thể đủ lớn để việc kiểm tra lại điều kiện voucher trở nên rất đáng giá.",
        ],
        bullets: [
          "Meal voucher: thường ít rủi ro cho cash claim.",
          "Travel credit sau cancellation: phải kiểm tra consent rất kỹ.",
          "Long-haul EU ↔ Việt Nam: càng nên kiểm tra vì ticket value và compensation có thể cao.",
        ],
      },
      {
        title: "7. Bạn nên làm gì trước khi kết luận mình đã mất quyền tiền mặt?",
        paragraphs: [
          "Hãy giữ lại email đề nghị voucher, ảnh chụp màn hình trang lựa chọn hoàn trả, điều khoản của voucher, và mọi thông báo của hãng về các phương án cash hoặc re-routing. Nếu bạn đã bấm chọn voucher, hãy kiểm tra xem lúc đó hãng có nêu rõ quyền tiền mặt hay không, có cho lựa chọn ngang bằng hay không, và voucher đó đang thay cho refund, compensation hay chỉ là hỗ trợ.",
          "Nếu bạn chưa chắc, đừng tự kết luận rằng mình đã khóa cửa cash. Trong nhiều case, chỉ cần đọc lại đúng email và đúng trang lựa chọn đã có thể thấy đây là meal voucher vô hại, hay là travel voucher cần đánh giá lại về consent. Đây là loại chi tiết nhỏ nhưng ảnh hưởng trực tiếp đến tỷ lệ chuyển đổi của cả hồ sơ.",
        ],
        bullets: [
          "Lưu email và screenshot lúc chọn voucher.",
          "Xác định voucher xử lý quyền nào: care, refund hay compensation.",
          "Kiểm tra xem hãng có nêu rõ lựa chọn tiền mặt hay không.",
        ],
      },
    ],
    faqs: [
      {
        question: "Nếu tôi chỉ nhận voucher đồ ăn ở sân bay thì còn đòi tiền mặt được không?",
        answer:
          "Thường là có. Meal voucher hoặc hotel voucher thường chỉ là một phần của quyền được chăm sóc trong lúc chờ, và không tự động chặn compensation tiền mặt nếu case của bạn đủ điều kiện theo EU261.",
      },
      {
        question: "Nếu tôi đã nhận travel voucher thay cho refund thì còn lấy cash được không?",
        answer:
          "Có thể có hoặc không, tùy việc bạn đã thật sự đồng ý nhận voucher thay tiền mặt như thế nào. Nếu bạn có lựa chọn hiệu quả, được thông tin rõ và đã chọn voucher một cách có hiểu biết, việc quay lại đòi cash cho cùng khoản refund sẽ khó hơn.",
      },
      {
        question: "Hãng gửi voucher cho tôi, như vậy có nghĩa là tôi đã mất quyền cash chưa?",
        answer:
          "Chưa chắc. Việc hãng gửi voucher không tự động đồng nghĩa bạn đã đồng ý hợp lệ để thay tiền mặt. Cần xem bạn đã chấp nhận voucher thế nào và lúc đó hãng có cung cấp lựa chọn tiền mặt rõ ràng, đầy đủ hay không.",
      },
      {
        question: "Voucher cho refund có làm mất luôn compensation không?",
        answer:
          "Không nên mặc định như vậy. Refund và compensation là hai lớp quyền khác nhau. Nếu voucher chỉ xử lý phần vé hoặc phần refund, bạn vẫn nên kiểm tra riêng xem compensation có còn mở hay không.",
      },
      {
        question: "Nếu tôi đã bấm chọn voucher trên website của hãng thì sao?",
        answer:
          "Theo án lệ CJEU năm 2024, việc chọn voucher trên website có thể được xem là sự đồng ý hợp lệ nếu bạn đã có lựa chọn hiệu quả và được cung cấp thông tin rõ ràng, đầy đủ về các phương án hoàn trả. Nếu không có các điều kiện đó, vẫn có lý do để xem lại.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh case của bạn bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "da-nhan-voucher-thi-con-duoc-tien-mat-khong",
          content: "general_voucher_cash_check",
        }),
        placement: "vi_article_voucher_cash_general_check",
        description:
          "Phù hợp nếu bạn đã nhận một loại voucher nhưng chưa rõ nó có thật sự thay cho tiền mặt hay chỉ là hỗ trợ tạm thời trong hồ sơ.",
      },
      {
        label: "Nếu case chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "da-nhan-voucher-thi-con-duoc-tien-mat-khong",
          content: "delay_voucher_cash_check",
        }),
        placement: "vi_article_voucher_cash_delay_check",
        description:
          "Hữu ích khi bạn đã nhận meal voucher hoặc travel voucher sau delay và muốn biết compensation tiền mặt còn mở hay không.",
      },
      {
        label: "Nếu case chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "da-nhan-voucher-thi-con-duoc-tien-mat-khong",
          content: "cancellation_voucher_cash_check",
        }),
        placement: "vi_article_voucher_cash_cancellation_check",
        description:
          "Dùng khi flight đã bị hủy, hãng gửi travel voucher hoặc credit thay cho refund và bạn muốn kiểm tra xem tiền mặt còn có thể được nhận hay không.",
      },
    ],
  },
  {
    slug: "co-the-yeu-cau-boi-thuong-cho-chuyen-bay-2-3-nam-truoc-khong",
    title: "Có thể yêu cầu bồi thường cho chuyến bay 2–3 năm trước không?",
    seoTitle:
      "Có thể yêu cầu bồi thường cho chuyến bay 2–3 năm trước không? Còn hạn EU261 hay đã muộn?",
    description:
      "Có thể, nhưng không có một thời hạn EU261 chung cho toàn châu Âu. Theo nguồn chính thức của EU và án lệ CJEU, thời hạn đưa vụ việc đi tiếp phụ thuộc vào luật quốc gia. Điều đó nghĩa là chuyến bay cũ 2–3 năm đôi khi vẫn còn cửa, nhưng cần kiểm tra nhanh trước khi để lỡ hạn.",
    excerpt:
      "Đây là bài short-answer cực mạnh cho intent chuyển đổi vì nhiều hành khách Việt bỏ claim chỉ vì nghe câu 'quá 2 năm là hết'. Thực tế pháp lý dưới EU261 phức tạp hơn: không có một deadline chung cho mọi nước, nên chuyến bay 2–3 năm trước vẫn có thể còn cơ hội nếu route thuộc EU261 và hồ sơ còn nền tảng chứng cứ.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Old claim under EU261",
    heroSummary:
      "Câu trả lời ngắn là có thể. Chuyến bay bị trễ hoặc bị hủy từ 2–3 năm trước không tự động mất quyền bồi thường. Điểm quan trọng là EU261 không đặt ra một thời hạn kiện chung cho toàn EU; thời hạn thực tế phụ thuộc vào luật quốc gia của nước liên quan. Vì vậy, điều đúng không phải là 'quá 2 năm là hết', mà là 'phải kiểm tra đúng jurisdiction trước khi kết luận là đã muộn'.",
    quickAnswer: [
      "Có thể. Chuyến bay 2–3 năm trước không tự động hết quyền bồi thường theo EU261.",
      "Không có một deadline EU261 chung cho toàn châu Âu; thời hạn pháp lý phụ thuộc vào luật quốc gia.",
      "Nếu case của bạn vẫn thuộc EU261 và còn proof cơ bản, 2–3 năm trước vẫn rất đáng kiểm tra ngay thay vì tự bỏ hồ sơ.",
    ],
    keyPoints: [
      "Không có một hạn EU261 duy nhất cho mọi nước châu Âu.",
      "Mốc 2 năm của các công ước hàng không không phải câu trả lời chung cho compensation EU261.",
      "Case cũ 2–3 năm vẫn có thể còn cửa, nhưng không nên trì hoãn thêm.",
      "Càng để lâu, việc gom chứng cứ và xử lý tranh chấp càng khó hơn.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: có thể, và đừng tự loại hồ sơ quá sớm",
        paragraphs: [
          "Nếu bạn đang hỏi liệu chuyến bay bị trễ hoặc bị hủy từ 2–3 năm trước còn đòi bồi thường được không, câu trả lời đúng là: có thể. Case cũ không tự động chết chỉ vì đã qua 24 hoặc 36 tháng. Rất nhiều hành khách Việt bỏ tiền của mình chỉ vì nghe một câu truyền miệng kiểu 'quá 2 năm là hết', trong khi cách nói đó dễ sai trong bối cảnh EU261.",
          "Điều cần tránh nhất ở đây là kết luận quá nhanh. Với EU261, cái quyết định không chỉ là tuổi của chuyến bay, mà còn là route có thuộc phạm vi luật hay không, hãng nào vận hành, bạn có còn hồ sơ nền tảng hay không, và đặc biệt là thời hạn pháp lý của quốc gia liên quan. Vì vậy, với chuyến bay cũ 2–3 năm, phản xạ đúng không phải là bỏ qua, mà là kiểm tra eligibility càng sớm càng tốt.",
        ],
        bullets: [
          "2–3 năm trước không đồng nghĩa với hết quyền.",
          "Điều nguy hiểm nhất là tự bỏ claim dựa trên thông tin quá đơn giản.",
          "Case cũ vẫn có thể đáng giá, nhất là khi liên quan long-haul và mức €600.",
        ],
      },
      {
        title: "2. Vì sao không có một deadline EU261 chung cho toàn EU?",
        paragraphs: [
          "Nguồn chính thức của EU nói khá rõ: thời hạn để đưa hành động pháp lý đòi compensation không được Regulation 261/2004 ấn định bằng một con số chung cho toàn châu Âu. Your Europe nêu thẳng rằng thời hạn này phụ thuộc vào luật quốc gia của từng nước. Điều đó có nghĩa là không thể trả lời đúng bằng một câu kiểu 'EU261 luôn là 2 năm' hoặc 'luôn là 3 năm'.",
          "Điểm này cũng được CJEU làm rõ trong vụ Cuadrench Moré. Tòa xác nhận rằng các mốc thời gian của Warsaw hoặc Montreal không phải đáp án mặc định cho compensation theo EU261; thay vào đó, thời hạn được xác định theo quy tắc limitation của từng quốc gia thành viên. Nói cách khác, nếu ai đó nói với bạn rằng mọi claim EU261 đều chết sau đúng 2 năm, họ đang nói quá mức đơn giản so với khung pháp lý thực tế.",
        ],
        bullets: [
          "EU261 không cho một deadline chung áp cho mọi case.",
          "Thời hạn phụ thuộc vào national law của nước liên quan.",
          "Mốc 2 năm không phải là câu trả lời tự động cho mọi compensation claim.",
        ],
      },
      {
        title: "3. Vậy điều gì quyết định case 2–3 năm trước còn hạn hay không?",
        paragraphs: [
          "Trong thực tế, câu hỏi đúng không phải là 'đã qua 2 năm chưa?' mà là 'quy tắc limitation của nước liên quan áp thế nào cho vụ việc này?'. Điều đó thường gắn với nơi bạn có thể đưa vụ việc ra tiếp như tòa án có thẩm quyền, nơi đi, nơi đến hoặc nơi hãng có trụ sở theo cấu trúc tranh chấp cụ thể. Vì phần này mang tính quốc gia, một case còn cửa ở nước này chưa chắc còn cửa giống hệt ở nước khác.",
          "Với người dùng Việt thường bay châu Âu ↔ Việt Nam hoặc từ Việt Nam với hãng châu Âu, logic thực tế là: đừng tự lấy một con số chung để áp lên toàn bộ case. Hãy bắt đầu từ việc xác nhận chuyến bay có thuộc EU261 không, sau đó mới nhìn tới cửa pháp lý còn mở đến đâu. Sai lầm phổ biến là nhảy thẳng tới kết luận 'đã quá lâu' mà chưa kiểm tra đúng quốc gia và đúng đường claim.",
        ],
        bullets: [
          "Jurisdiction và national limitation rules mới là chìa khóa.",
          "Một con số chung cho mọi nước là cách nghĩ dễ sai.",
          "Cần tách bước eligibility EU261 khỏi bước time limit pháp lý.",
        ],
      },
      {
        title: "4. Khi nào chuyến bay 2–3 năm trước vẫn rất đáng kiểm tra?",
        paragraphs: [
          "Case cũ vẫn rất đáng kiểm tra khi chuyến bay rõ ràng nằm trong phạm vi EU261, ví dụ bay từ EU đi Việt Nam với bất kỳ hãng nào, hoặc bay từ Việt Nam vào EU do hãng hàng không châu Âu khai thác. Nếu điểm đến cuối cùng trễ từ 3 giờ trở lên, hoặc chuyến bay bị hủy trong điều kiện phù hợp, giá trị hồ sơ vẫn có thể đủ lớn để việc xem lại limitation period trở nên hoàn toàn đáng công.",
          "Case cũng đáng kiểm tra khi bạn vẫn còn PNR, email xác nhận đặt chỗ, thông báo delay hoặc cancellation, tin nhắn từ hãng, thẻ lên máy bay cũ, hoặc lịch trình trong app. Nhiều người nghĩ hồ sơ cũ là vô vọng, nhưng trên thực tế chỉ cần còn bộ chứng cứ nền tảng đủ tốt, claim vẫn có thể được đánh giá nghiêm túc. Với long-haul Europe ↔ Vietnam, chỉ riêng khả năng chạm mức €600 đã khiến việc kiểm tra lại trở nên rất hợp lý.",
        ],
        bullets: [
          "EU → Việt Nam: thường rất đáng kiểm tra.",
          "Việt Nam → EU với hãng châu Âu: cũng rất đáng kiểm tra.",
          "Còn PNR, email hoặc thông báo từ hãng là đã có nền hồ sơ tốt.",
        ],
      },
      {
        title: "5. Đừng nhầm giữa gửi complaint cho hãng và deadline pháp lý cuối cùng",
        paragraphs: [
          "Một điểm khiến nhiều hành khách bỏ lỡ thời gian là họ đã từng gửi email cho hãng, rồi chờ quá lâu vì nghĩ rằng chỉ cần đã 'mở case' là thời gian tự dừng lại. Trong thực tế, việc bạn đã liên hệ hãng không luôn đồng nghĩa rằng limitation period cho bước pháp lý tiếp theo đã được treo lại hoặc bảo toàn theo cùng một cách trong mọi nước. Đây là lý do tại sao claim cũ không nên tiếp tục bị để nằm yên thêm nhiều tháng nữa.",
          "Cách xử lý an toàn hơn là xem complaint với airline chỉ là bước đầu. Nếu hãng im lặng, trả lời rất chậm hoặc từ chối bằng lý do chung chung, đừng mặc định rằng bạn có thể chờ vô hạn. Với case 2–3 năm tuổi, thời gian còn lại có thể vẫn có, nhưng thường không còn rộng để trì hoãn một cách bị động.",
        ],
        bullets: [
          "Đã gửi email cho hãng không có nghĩa là thời gian pháp lý luôn tự dừng.",
          "Case cũ càng cần quyết định nhanh bước tiếp theo.",
          "Đừng nhầm tốc độ xử lý của hãng với deadline của luật.",
        ],
      },
      {
        title: "6. Nếu hãng từng từ chối hoặc không phản hồi, case cũ có chết luôn không?",
        paragraphs: [
          "Không. Một email từ chối từ hãng không tự động có nghĩa là bạn không còn quyền. Nhiều thư từ chối chỉ là phản hồi vận hành ban đầu, đôi khi rất chung chung, và chưa phải kết luận cuối cùng về mặt pháp lý. Tương tự, việc hãng không phản hồi trong thời gian dài cũng không tự biến claim thành vô hiệu, nhưng nó làm tăng rủi ro để lỡ limitation period nếu bạn không đẩy vụ việc đi tiếp.",
          "Với case 2–3 năm cũ, việc hãng từng từ chối thực ra còn là lý do để kiểm tra lại kỹ hơn, không phải để bỏ cuộc sớm hơn. Điều quan trọng là đánh giá lại xem case có thật sự thuộc EU261 không, lý do từ chối có đứng vững không, và cửa thời gian pháp lý của nước liên quan còn mở không.",
        ],
        bullets: [
          "Từ chối lần đầu không đồng nghĩa với hết quyền.",
          "Im lặng từ hãng cũng không đồng nghĩa claim tự mất.",
          "Điểm mấu chốt vẫn là eligibility và time limit quốc gia.",
        ],
      },
      {
        title: "7. Checklist nhanh cho một claim cũ 2–3 năm",
        paragraphs: [
          "Nếu bạn đang ngồi trên một hồ sơ cũ, hãy gom lại tối thiểu các dữ liệu sau: mã đặt chỗ PNR, email e-ticket, tên chuyến bay, ngày bay, giờ đến thực tế nếu nhớ hoặc còn lưu, email hay SMS báo delay hoặc cancellation, ảnh boarding pass nếu còn, và mọi trao đổi cũ với hãng. Đó là lớp dữ liệu đủ mạnh để bắt đầu đánh giá xem hồ sơ có còn đáng đi tiếp hay không.",
          "Quan trọng hơn, đừng tự kết luận bằng một công thức quá đơn giản. Với EU261, case 2–3 năm trước có thể còn cơ hội thật. Nhưng vì time limit không đồng nhất toàn EU, việc chậm thêm là phần rủi ro lớn nhất lúc này. Nếu hồ sơ có tiềm năng, hành động đúng là kiểm tra ngay chứ không phải tiếp tục đợi.",
        ],
        bullets: [
          "Gom PNR, e-ticket, email và thông báo từ hãng.",
          "Giữ lại cả thư từ chối cũ nếu đã có.",
          "Ưu tiên kiểm tra ngay thay vì tiếp tục để hồ sơ cũ hơn.",
        ],
      },
    ],
    faqs: [
      {
        question: "Chuyến bay 3 năm trước còn có thể đòi bồi thường EU261 không?",
        answer:
          "Có thể. Không có một deadline EU261 chung cho toàn bộ châu Âu. Việc chuyến bay 3 năm trước còn claim được hay không phụ thuộc vào luật quốc gia áp dụng cho bước pháp lý tiếp theo, nên không nên tự kết luận là đã quá muộn nếu chưa kiểm tra đúng jurisdiction.",
      },
      {
        question: "EU261 có hạn chung 2 năm cho mọi case không?",
        answer:
          "Không. Nguồn chính thức của EU và án lệ CJEU cho thấy thời hạn đưa action đi tiếp phụ thuộc vào national law của từng nước. Vì vậy, câu nói 'EU261 luôn là 2 năm' là quá đơn giản và có thể sai trong nhiều trường hợp.",
      },
      {
        question: "Nếu tôi đã gửi complaint cho hãng từ lâu rồi thì có giữ được quyền mãi không?",
        answer:
          "Không nên hiểu như vậy. Việc đã gửi complaint cho airline là bước quan trọng, nhưng không có nghĩa deadline pháp lý ở mọi nước tự dừng lại vô thời hạn. Với case cũ 2–3 năm, bạn nên kiểm tra sớm bước tiếp theo thay vì chỉ chờ hãng phản hồi.",
      },
      {
        question: "Không còn boarding pass nhưng còn email đặt chỗ cũ thì sao?",
        answer:
          "Vẫn rất đáng kiểm tra. Với claim cũ, PNR, e-ticket, email xác nhận, tin nhắn từ hãng hoặc lịch trình trong app đều có thể là proof hữu ích. Boarding pass rất tốt nếu còn, nhưng không phải lúc nào cũng là chứng cứ duy nhất.",
      },
      {
        question: "Hãng từng từ chối claim cũ của tôi, giờ có nên kiểm tra lại không?",
        answer:
          "Có. Một thư từ chối cũ không tự động có nghĩa là hãng đúng. Nếu case thuộc EU261, lý do từ chối yếu hoặc chung chung, và cửa thời gian pháp lý vẫn còn theo luật quốc gia liên quan, claim cũ vẫn có thể đáng làm lại hoặc đẩy đi tiếp.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh claim cũ của bạn bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "co-the-yeu-cau-boi-thuong-cho-chuyen-bay-2-3-nam-truoc-khong",
          content: "general_old_claim_check",
        }),
        placement: "vi_article_old_claim_general_check",
        description:
          "Phù hợp nếu chuyến bay đã diễn ra từ 2–3 năm trước và bạn muốn biết case còn cửa hay đã sát hạn mà không phải tự đoán theo một mốc chung dễ sai.",
      },
      {
        label: "Nếu case cũ chủ yếu là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "co-the-yeu-cau-boi-thuong-cho-chuyen-bay-2-3-nam-truoc-khong",
          content: "delay_old_claim_check",
        }),
        placement: "vi_article_old_claim_delay_check",
        description:
          "Dùng khi chuyến bay đã bị delay từ nhiều năm trước, đặc biệt nếu điểm đến cuối cùng trễ từ 3 giờ trở lên và bạn muốn kiểm tra lại khả năng bồi thường.",
      },
      {
        label: "Nếu case cũ chủ yếu là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "co-the-yeu-cau-boi-thuong-cho-chuyen-bay-2-3-nam-truoc-khong",
          content: "cancellation_old_claim_check",
        }),
        placement: "vi_article_old_claim_cancellation_check",
        description:
          "Hữu ích khi flight bị hủy từ 2–3 năm trước, hãng từng từ chối hoặc không phản hồi, và bạn muốn xem hồ sơ còn cơ hội đi tiếp hay không.",
      },
    ],
  },
  {
    slug: "bay-gia-re-co-duoc-boi-thuong-khong",
    title: "Bay giá rẻ có được bồi thường không?",
    seoTitle:
      "Bay giá rẻ có được bồi thường không? Vé rẻ vẫn có thể nhận €250–€600 theo EU261",
    description:
      "Có. Hãng low-cost không tự động đứng ngoài EU261. Nếu chuyến bay thuộc phạm vi luật và bị trễ dài, hủy chuyến hoặc denied boarding trong điều kiện phù hợp, hành khách vẫn có thể được bồi thường. Mức tiền thường phụ thuộc vào quãng đường và tình huống, không phải vì vé rẻ mà mất quyền.",
    excerpt:
      "Đây là bài short-answer chuyển đổi rất mạnh vì nhiều hành khách Việt đi Ryanair, easyJet, Wizz Air hoặc vé rẻ nội châu Âu thường tự bỏ claim chỉ vì nghĩ 'vé rẻ thì không được gì'. Thực tế EU261 không vận hành theo logic đó: giá vé thấp không tự xóa quyền bồi thường khi chuyến bay đủ điều kiện.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "8 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Low-cost flights and EU261",
    heroSummary:
      "Câu trả lời ngắn là có. Bay giá rẻ vẫn có thể được bồi thường theo EU261 nếu chuyến bay thuộc phạm vi luật và sự cố phù hợp với điều kiện compensation. Điều nhiều người hiểu sai là cho rằng giá vé quyết định quyền lợi. Thực tế, với compensation chuẩn hóa dưới EU261, yếu tố cốt lõi là loại disruption, thời gian chậm đến đích cuối cùng, quãng đường bay và việc hãng có chứng minh được extraordinary circumstances hay không.",
    quickAnswer: [
      "Có. Vé rẻ không tự động làm mất quyền bồi thường theo EU261.",
      "Nếu chuyến bay đủ điều kiện, hành khách của hãng low-cost vẫn có thể nhận €250, €400 hoặc €600.",
      "Điều quan trọng là route, loại gián đoạn và điều kiện pháp lý của case, không phải việc bạn săn được vé rẻ.",
    ],
    keyPoints: [
      "Low-cost airline vẫn có thể phải trả compensation như hãng truyền thống.",
      "Mức bồi thường chuẩn hóa thường gắn với quãng đường, không phải giá vé.",
      "Vé rẻ không bảo vệ hãng khỏi trách nhiệm khi case đủ điều kiện.",
      "Cần tách low-cost khỏi các rủi ro khác như self-transfer hoặc thiếu check-in đúng hạn.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: có, vé rẻ vẫn có thể được bồi thường",
        paragraphs: [
          "Nếu bạn bay hãng giá rẻ và chuyến bay bị trễ, bị hủy hoặc bị từ chối lên máy bay, câu trả lời ngắn là: có thể được bồi thường. EU261 không có quy tắc nào nói rằng hành khách của hãng low-cost bị loại khỏi quyền compensation chỉ vì giá vé thấp hơn. Đây là một trong những hiểu lầm phổ biến nhất ở nhóm người dùng thường đặt vé rẻ nội châu Âu hoặc săn flash sale.",
          "Điểm cần nhớ là luật không nhìn vào việc bạn mua vé 19 euro hay 199 euro để quyết định có quyền hay không. Nó nhìn vào việc chuyến bay có thuộc phạm vi EU261 không, vấn đề xảy ra là delay, cancellation hay denied boarding, bạn đến đích cuối cùng chậm bao lâu, và hãng có chứng minh được extraordinary circumstances hay không. Vì vậy, 'vé rẻ' và 'không được bồi thường' không phải là cùng một chuyện.",
        ],
        bullets: [
          "Low-cost không đồng nghĩa với mất quyền.",
          "Giá vé thấp không tự động chặn compensation.",
          "Case vẫn phải đi qua các điều kiện EU261 như bình thường.",
        ],
      },
      {
        title: "2. EU261 nhìn vào điều gì, nếu không phải giá vé?",
        paragraphs: [
          "Nguồn chính thức của EU giải thích quyền hành khách theo logic route và sự cố. Your Europe nêu rõ EU air passenger rights áp dụng tùy theo điểm đi, điểm đến và trong một số trường hợp là việc chuyến bay được vận hành bởi hãng EU hay không. Khi chuyến bay thuộc phạm vi đó, hành khách có thể có quyền được chăm sóc, hoàn vé, đổi hành trình và compensation.",
          "Ở phần compensation, luật chuẩn hóa mức tiền theo nhóm quãng đường và mức độ chậm đến nơi hoặc tình huống cancellation / denied boarding. Điều này rất quan trọng với câu hỏi về vé rẻ: nếu compensation được chuẩn hóa theo inconvenience và distance, thì bản thân giá vé thấp không phải lá chắn để hãng low-cost miễn trách nhiệm. Nói ngắn gọn, EU261 vận hành theo logic quyền tối thiểu cho hành khách, chứ không phải theo logic 'vé càng rẻ thì quyền càng ít'.",
        ],
        bullets: [
          "Quyền phát sinh từ route, airline type trong phạm vi luật và disruption.",
          "Compensation chuẩn hóa không bám vào giá vé như tiêu chí chính.",
          "Hãng giá rẻ và hãng truyền thống đều đi qua cùng khung EU261 khi case đủ điều kiện.",
        ],
      },
      {
        title: "3. Vé rẻ vẫn có thể nhận €250, €400 hoặc €600 không?",
        paragraphs: [
          "Có thể. Đây chính là điểm làm nhiều hành khách bất ngờ nhất. Nếu chuyến bay của bạn đủ điều kiện theo EU261, mức compensation chuẩn hóa có thể vẫn là €250, €400 hoặc €600 dù bạn chỉ trả một số tiền rất thấp cho vé. Điều này không có gì mâu thuẫn với luật, vì compensation ở đây được thiết kế để bù cho sự bất tiện và mất thời gian theo chuẩn chung, chứ không đơn thuần là hoàn lại đúng số tiền vé.",
          "Với hãng low-cost, điều này xảy ra khá thường xuyên trên các route nội châu Âu hoặc đường bay từ EU ra ngoài EU khi case đạt ngưỡng cần thiết. Vì vậy, việc bạn mua vé rẻ không phải lý do để tự kết luận rằng hồ sơ của mình 'không đáng'. Nhiều case giá vé thấp nhưng quyền compensation vẫn mạnh hơn nhiều so với giá trị ban đầu của tấm vé.",
        ],
        bullets: [
          "Vé rẻ vẫn có thể chạm mức €250, €400 hoặc €600.",
          "Compensation không phải lúc nào cũng tỷ lệ với số tiền đã trả cho vé.",
          "Đây là cơ chế phổ biến, không phải ngoại lệ lạ của EU261.",
        ],
      },
      {
        title: "4. Hãng low-cost có những gì giống và khác hãng truyền thống?",
        paragraphs: [
          "Về phần quyền cốt lõi dưới EU261, hãng low-cost không đứng ở một chế độ hoàn toàn khác. Nếu case là long delay, cancellation hoặc denied boarding và chuyến bay thuộc phạm vi luật, hành khách vẫn có thể có quyền compensation, reimbursement hoặc re-routing, cũng như quyền được chăm sóc khi chờ. Ở tầng nguyên tắc, đây là cùng một khung quyền như các hãng truyền thống.",
          "Khác biệt thực tế thường nằm ở mô hình vận hành và trải nghiệm xử lý hồ sơ. Hãng low-cost có thể bán thêm rất nhiều dịch vụ phụ như ghế, hành lý, ưu tiên lên máy bay, boarding nhanh hoặc gói linh hoạt. Nhưng các phần add-on thương mại đó không tự động thay đổi câu trả lời cho câu hỏi 'có được compensation EU261 hay không'. Chúng có thể ảnh hưởng đến vài khoản refund cụ thể trong một số tình huống, nhưng không xóa khung quyền cơ bản nếu disruption đủ điều kiện.",
        ],
        bullets: [
          "Khung quyền EU261 cơ bản không biến mất vì hãng là low-cost.",
          "Add-on như seat, baggage hay priority không tự động giết compensation claim.",
          "Sự khác biệt lớn hơn thường nằm ở cách hãng xử lý, không phải việc luật có áp hay không.",
        ],
      },
      {
        title: "5. Điều gì dễ bị nhầm là do 'vé rẻ', nhưng thực ra là vấn đề khác?",
        paragraphs: [
          "Nhiều người dùng nhầm giữa việc đi hãng low-cost với những rủi ro khác vốn thường đi kèm mô hình vé rẻ. Ví dụ phổ biến nhất là self-transfer, mua hai vé tách rời, không có bảo vệ nối chuyến, hoặc tới sân bay muộn vì quy trình kiểm tra hành lý và cổng lên máy bay nghiêm hơn. Trong những case như vậy, lý do hồ sơ yếu không phải vì vé rẻ, mà vì cấu trúc booking hoặc hành vi di chuyển của hành khách.",
          "Tương tự, nếu bạn bị từ chối lên máy bay vì không có giấy tờ đúng, không check-in đúng hạn, hoặc lỡ giờ boarding, đó không phải là câu chuyện 'hãng giá rẻ nên không đền'. Đó là một loại case khác hoàn toàn. Vì vậy, khi đánh giá hồ sơ, cần tách rất rõ: vấn đề nằm ở EU261 eligibility thật sự hay chỉ là bạn đang gộp low-cost với những rủi ro khác thường gặp ở low-cost.",
        ],
        bullets: [
          "Low-cost không giống self-transfer.",
          "Low-cost không giống việc đến muộn hoặc miss boarding.",
          "Muốn đánh giá đúng case, phải tách giá vé khỏi cấu trúc booking và hành vi check-in.",
        ],
      },
      {
        title: "6. Khi nào hành khách vé rẻ vẫn nên kiểm tra claim ngay?",
        paragraphs: [
          "Bạn nên kiểm tra ngay nếu chuyến bay bị trễ đến đích cuối cùng từ 3 giờ trở lên, bị hủy sát ngày bay, hoặc bạn bị denied boarding dù đã có mặt đúng giờ với booking hợp lệ. Điều này đúng cả khi hãng là Ryanair, easyJet, Wizz Air hoặc bất kỳ hãng low-cost nào khác. Đặc biệt với các route khá dài hoặc các case cancellation dưới 14 ngày, giá trị hồ sơ có thể lớn hơn nhiều so với cảm giác ban đầu về 'một vé rẻ thì chắc không đáng'.",
          "Bạn cũng nên kiểm tra nếu hãng đã đưa ra voucher, đổi hành trình không thuận lợi hoặc hoàn vé nhưng không giải thích rõ phần compensation. Với hãng giá rẻ, người dùng rất dễ chấp nhận nhanh một giải pháp tối thiểu rồi tự cho rằng vậy là xong. Nhưng nếu case thật sự thuộc EU261, vẫn có thể còn một lớp quyền khác mà bạn chưa tận dụng.",
        ],
        bullets: [
          "Delay 3+ giờ đến đích cuối cùng: rất đáng kiểm tra.",
          "Cancellation sát ngày bay: rất đáng kiểm tra.",
          "Denied boarding với booking hợp lệ: cũng rất đáng kiểm tra.",
        ],
      },
      {
        title: "7. Checklist nhanh cho người bay low-cost",
        paragraphs: [
          "Nếu bạn bay giá rẻ và muốn biết case có mạnh không, hãy giữ lại PNR, email đặt chỗ, boarding pass nếu còn, thông báo delay hoặc cancellation, ảnh giờ đến thực tế và mọi chi phí hợp lý bạn đã phải tự bỏ ra khi hãng không chăm sóc đúng mức. Với low-cost, dữ liệu trong app hoặc email thường rất quan trọng vì nhiều quy trình đều diễn ra online và tự động.",
          "Điều quan trọng nhất là đừng để chữ 'low-cost' làm bạn tự từ chối quyền của mình. Câu hỏi đúng không phải là 'vé có rẻ không?', mà là 'chuyến bay có đủ điều kiện EU261 không?'. Nếu câu trả lời cho vế sau là có, hồ sơ hoàn toàn có thể đáng giá, kể cả khi vé ban đầu rất rẻ.",
        ],
        bullets: [
          "Giữ PNR, email, boarding pass và thông báo từ hãng.",
          "Ưu tiên nhìn vào điều kiện EU261 thay vì giá vé.",
          "Đừng tự bỏ claim chỉ vì đã săn được vé rẻ.",
        ],
      },
    ],
    faqs: [
      {
        question: "Bay hãng giá rẻ có được bồi thường EU261 không?",
        answer:
          "Có. Hãng giá rẻ không tự động nằm ngoài EU261. Nếu chuyến bay thuộc phạm vi luật và sự cố đáp ứng điều kiện về delay, cancellation hoặc denied boarding, hành khách vẫn có thể được bồi thường.",
      },
      {
        question: "Vé rẻ có làm mất quyền nhận €250, €400 hoặc €600 không?",
        answer:
          "Không. Trong case đủ điều kiện, compensation chuẩn hóa theo EU261 vẫn có thể ở mức €250, €400 hoặc €600 dù giá vé ban đầu thấp. Yếu tố chính thường là quãng đường bay và loại disruption, không phải vì vé rẻ mà mất quyền.",
      },
      {
        question: "Ryanair, Wizz Air hoặc easyJet có phải trả bồi thường như hãng thường không?",
        answer:
          "Có thể có, nếu case đủ điều kiện theo EU261. Về khung quyền cơ bản, hãng low-cost cũng có thể phải trả compensation, cung cấp chăm sóc, hoàn vé hoặc đổi hành trình như các hãng khác khi luật áp dụng.",
      },
      {
        question: "Tôi đi vé rẻ nhưng bị lỡ nối chuyến, có còn được bồi thường không?",
        answer:
          "Có thể, nhưng cần tách rõ low-cost với self-transfer hoặc vé tách rời. Nếu bạn tự mua hai vé riêng và tự nối chuyến, case có thể yếu vì cấu trúc booking, không phải vì vé rẻ. Nếu các chặng nằm trong một reservation đủ điều kiện, câu trả lời có thể khác.",
      },
      {
        question: "Hãng giá rẻ đã hoàn tiền vé rẻ cho tôi rồi, vậy còn compensation không?",
        answer:
          "Có thể vẫn còn. Refund và compensation là hai lớp quyền khác nhau trong nhiều case EU261. Việc hoàn lại tiền vé không tự động có nghĩa mọi quyền compensation đã biến mất.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh case vé rẻ của bạn bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "bay-gia-re-co-duoc-boi-thuong-khong",
          content: "general_low_cost_check",
        }),
        placement: "vi_article_low_cost_general_check",
        description:
          "Phù hợp nếu bạn bay hãng giá rẻ và muốn biết nhanh liệu vé rẻ có thực sự ảnh hưởng đến quyền bồi thường hay không.",
      },
      {
        label: "Nếu case low-cost chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "bay-gia-re-co-duoc-boi-thuong-khong",
          content: "delay_low_cost_check",
        }),
        placement: "vi_article_low_cost_delay_check",
        description:
          "Dùng khi chuyến bay của hãng giá rẻ bị delay dài và bạn muốn kiểm tra xem compensation theo EU261 còn mở không.",
      },
      {
        label: "Nếu case low-cost chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "bay-gia-re-co-duoc-boi-thuong-khong",
          content: "cancellation_low_cost_check",
        }),
        placement: "vi_article_low_cost_cancellation_check",
        description:
          "Hữu ích khi flight của hãng giá rẻ đã bị hủy, hãng chỉ hoàn vé hoặc đổi chuyến, và bạn muốn kiểm tra xem compensation còn có thể được yêu cầu hay không.",
      },
    ],
  },
  {
    slug: "lo-chuyen-bay-noi-chuyen-co-duoc-boi-thuong-khong",
    title: "Lỡ chuyến bay nối chuyến có được bồi thường không?",
    seoTitle:
      "Lỡ chuyến bay nối chuyến có được bồi thường không? Khi nào missed connection được EU261",
    description:
      "Có thể, nếu các chặng nằm trong một single reservation, EU261 áp dụng và bạn đến điểm cuối chậm từ 3 giờ trở lên. Nhưng không phải mọi missed connection đều được bồi thường: self-transfer, trễ ở security hoặc lỡ boarding time tại sân bay nối chuyến có thể làm case yếu hoặc không đủ điều kiện.",
    excerpt:
      "Đây là bài short-answer rất mạnh cho intent chuyển đổi vì nhiều hành khách Việt bay qua Frankfurt, Paris CDG, Amsterdam hoặc Vienna thường hỏi đúng một câu này. Bài viết tách rõ missed connection được bảo vệ dưới EU261 khỏi self-transfer và các tình huống hành khách tự lỡ chuyến, nhờ đó rất mạnh cho SEO, GEO và AI Overviews.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Missed connection under EU261",
    heroSummary:
      "Câu trả lời ngắn là có thể. Nếu bạn lỡ chuyến bay nối chuyến và toàn bộ hành trình nằm trong một single reservation, bạn đến điểm đến cuối cùng chậm từ 3 giờ trở lên, và sự cố không do extraordinary circumstances, bạn có thể có quyền compensation theo EU261. Nhưng nếu bạn tự mua vé rời, bị chậm ở security, hoặc không có mặt đúng boarding time ở sân bay transit, câu trả lời có thể đổi hoàn toàn.",
    quickAnswer: [
      "Có thể, nếu các chặng thuộc một single reservation và bạn đến đích cuối chậm từ 3 giờ trở lên.",
      "EU261 không tự động bảo vệ mọi missed connection, đặc biệt khi đó là self-transfer hoặc hành khách lỡ giờ boarding.",
      "Điểm quan trọng nhất là reservation structure, final destination delay và nguyên nhân gây lỡ chuyến nối.",
    ],
    keyPoints: [
      "Single reservation là điều kiện trọng yếu trong nhiều case missed connection.",
      "Mốc quan trọng là độ trễ ở điểm đến cuối cùng, thường từ 3 giờ trở lên.",
      "Self-transfer thường không mạnh như nối chuyến trong cùng một booking.",
      "Lỡ chuyến do security delay hoặc do không đúng boarding time có thể không được compensation.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: có thể, nhưng không phải mọi nối chuyến đều giống nhau",
        paragraphs: [
          "Nếu bạn lỡ chuyến bay nối chuyến, câu trả lời đúng là: có thể được bồi thường, nhưng chỉ trong những điều kiện khá cụ thể. Đây là một trong những chủ đề dễ bị trả lời sai nhất vì nhiều người gom tất cả mọi kiểu transit, self-transfer và booking rời vào cùng một nhóm là 'nối chuyến'. Dưới EU261, cách phân loại đó quá thô và dễ dẫn đến kết luận sai.",
          "Điều mà luật nhìn vào không chỉ là việc bạn có lỡ máy bay thứ hai hay không. Luật nhìn vào cấu trúc đặt chỗ, việc EU261 có áp cho hành trình đó không, bạn đến điểm cuối cùng muộn bao nhiêu, và nguyên nhân của sự cố nằm ở hãng hay ngoài tầm kiểm soát của hãng. Vì vậy, hai hành khách cùng 'lỡ nối chuyến' có thể nhận hai câu trả lời pháp lý hoàn toàn khác nhau.",
        ],
        bullets: [
          "Missed connection không phải lúc nào cũng được bồi thường.",
          "Cấu trúc booking quan trọng không kém bản thân sự cố.",
          "Muốn đánh giá đúng, phải nhìn vào cả hành trình chứ không chỉ riêng chặng bị lỡ.",
        ],
      },
      {
        title: "2. Khi nào lỡ nối chuyến có thể được bồi thường theo EU261?",
        paragraphs: [
          "Nguồn chính thức của EU nêu khá rõ: nếu các chuyến bay là một phần của single reservation, EU air passenger rights áp dụng, và bạn đến điểm đến cuối cùng với độ trễ từ 3 giờ trở lên, bạn có thể có quyền compensation. Điều này rất quan trọng vì mốc pháp lý được nhìn ở final destination, không chỉ ở sân bay transit nơi bạn bị lỡ chặng tiếp theo.",
          "Với người dùng Việt, điều này hay xảy ra trên các hành trình như Hà Nội hoặc TP.HCM đi qua Frankfurt, Paris, Amsterdam hay Vienna rồi nối tiếp vào châu Âu khác, hoặc chiều ngược lại từ châu Âu về Việt Nam qua hub EU. Nếu toàn bộ itinerary nằm trong một booking và sự cố bắt đầu từ chặng trước khiến bạn vỡ kết nối, case có thể mạnh hơn nhiều so với cảm giác ban đầu là 'chỉ lỡ một chặng trung gian'.",
        ],
        bullets: [
          "Cần single reservation.",
          "Cần final destination delay đủ lớn, thường từ 3 giờ trở lên.",
          "Cần EU261 áp dụng cho hành trình đó.",
        ],
      },
      {
        title: "3. Single reservation khác gì với self-transfer?",
        paragraphs: [
          "Đây là điểm quyết định rất nhiều hồ sơ. Single reservation thường có nghĩa là các chặng bay nằm trong cùng một booking, được hãng hoặc hệ thống bán như một hành trình nối chuyến thống nhất. Khi đó, nếu chặng đầu trễ làm bạn lỡ chặng sau và bạn đến đích cuối cùng trễ mạnh, EU261 có thể nhìn hành trình như một chuỗi được bảo vệ.",
          "Self-transfer thì khác. Đây là tình huống bạn tự ghép hai hoặc nhiều vé riêng, đôi khi với hai hãng khác nhau, không có nghĩa vụ kết nối chính thức giữa các chặng. Trong case như vậy, việc bạn lỡ chuyến sau thường yếu hơn rất nhiều về mặt EU261 đối với chặng tiếp theo, vì hãng của vé sau có thể xem đó đơn giản là bạn không xuất hiện đúng giờ. Rất nhiều người gọi cả hai tình huống này là 'nối chuyến', nhưng về pháp lý chúng không giống nhau.",
        ],
        bullets: [
          "Single reservation thường mạnh hơn rõ rệt so với self-transfer.",
          "Vé tách rời không tự động tạo quyền bảo vệ như một through-booking.",
          "Sai lầm phổ biến nhất là nhầm self-transfer với protected connection.",
        ],
      },
      {
        title: "4. Mốc 3 giờ được tính ở đâu?",
        paragraphs: [
          "Mốc quan trọng thường là thời gian bạn đến điểm đến cuối cùng, không chỉ là việc bạn bị lỡ máy bay ở sân bay transit. Your Europe nói rất rõ rằng nếu bạn miss connecting flight và đến final destination chậm từ 3 giờ trở lên, bạn có thể có quyền compensation nếu các điều kiện còn lại cũng đúng. Đây là lý do nhiều case missed connection được đánh giá dựa trên tổng độ trễ của toàn hành trình.",
          "Điều này giúp tránh một hiểu lầm rất phổ biến: có người nghĩ chặng đầu chỉ trễ 40 hoặc 50 phút nên chắc chắn không có gì. Nhưng nếu chính độ trễ đó làm bạn vỡ connection và kết quả là tới nơi cuối cùng muộn thêm nhiều giờ, đánh giá pháp lý có thể khác hoàn toàn. Với missed connection, cái quan trọng thường là hậu quả ở cuối hành trình, không chỉ số phút delay của riêng chặng feeder.",
        ],
        bullets: [
          "Trọng tâm là điểm đến cuối cùng.",
          "Một delay đầu ngắn vẫn có thể dẫn tới claim mạnh nếu làm vỡ connection.",
          "Đừng chỉ nhìn vào delay của chặng đầu tiên.",
        ],
      },
      {
        title: "5. Khi nào lỡ nối chuyến có thể không được bồi thường?",
        paragraphs: [
          "Nguồn chính thức của EU cũng nêu rõ hai ngoại lệ rất thực tế: bạn không được compensation nếu lỡ chuyến nối do chậm ở security checks hoặc do không tôn trọng boarding time của chuyến bay tại sân bay transfer. Đây là điểm nhiều người bỏ qua, đặc biệt ở các hub lớn nơi việc di chuyển giữa terminal có thể lâu và căng.",
          "Ngoài ra, nếu disruption bắt nguồn từ extraordinary circumstances mà hãng chứng minh được, case cũng có thể không có compensation dù bạn vẫn có thể có các quyền khác như re-routing hoặc care. Vì vậy, việc 'lỡ nối chuyến' không tự nó bảo đảm tiền. Nó chỉ mở ra khả năng claim nếu các điều kiện còn lại đi cùng đúng hướng.",
        ],
        bullets: [
          "Security delay có thể làm mất quyền compensation trong case missed connection.",
          "Không đúng boarding time cũng là ngoại lệ quan trọng.",
          "Extraordinary circumstances vẫn có thể loại compensation khỏi hồ sơ.",
        ],
      },
      {
        title: "6. Nếu hãng chặng sau từ chối cho lên máy bay vì nghĩ bạn tới muộn thì sao?",
        paragraphs: [
          "Your Europe có một điểm rất hữu ích cho loại case này: nếu airline operating connecting flight từ chối cho bạn lên vì cho rằng bạn sẽ tới quá muộn do chặng đầu bị delay, compensation có thể vẫn phát sinh trong mô hình one reservation with a single check-in. Đây là một dạng case mà hành khách dễ bỏ qua vì nghĩ mình 'đâu có tự ra gate trễ', nhưng hệ thống của hãng đã khóa chuyến nối trước khi bạn thực sự có cơ hội lên máy bay.",
          "Với người dùng thực tế, đây là loại hồ sơ đáng kiểm tra kỹ. Nó thường xảy ra ở các hub nơi hệ thống tự động rebook hoặc tự đánh dấu hành khách là misconnected. Nếu hành trình là một booking hợp lệ và delay đầu tiên là nguyên nhân thật sự khiến bạn không thể tiếp tục chặng sau, hồ sơ có thể vẫn mạnh dù bạn không hề tự ý bỏ chuyến nối.",
        ],
        bullets: [
          "Denied boarding trong bối cảnh missed connection không phải lúc nào cũng là lỗi của hành khách.",
          "Hệ thống tự động rebook hoặc khóa chặng sau vẫn có thể để lại quyền compensation.",
          "Case kiểu này rất đáng kiểm tra nếu booking là một chuỗi hợp lệ.",
        ],
      },
      {
        title: "7. Checklist nhanh cho case missed connection",
        paragraphs: [
          "Hãy giữ lại PNR chung của cả hành trình, boarding pass của chặng đầu, ảnh màn hình rebooking nếu có, giờ đến thực tế của chặng bị delay, thông báo từ hãng về việc lỡ nối chuyến, và bất kỳ email hay SMS nào liên quan tới thay đổi hành trình. Với missed connection, các dấu vết về cách cả hành trình được bán và quản lý thường quan trọng không kém thời gian delay thực tế.",
          "Quan trọng nhất là đừng tự gộp case của mình vào nhãn 'tôi lỡ chuyến nên chắc không được gì'. Câu hỏi đúng là: đây có phải là single reservation không, tôi đến final destination chậm bao lâu, và lý do lỡ chuyến là gì? Nếu ba câu đó đi đúng hướng, missed connection hoàn toàn có thể là một claim tốt dưới EU261.",
        ],
        bullets: [
          "Giữ PNR chung và mọi chứng cứ của cả hành trình.",
          "Xác định rõ đây là through-booking hay self-transfer.",
          "Nhìn vào final destination delay, không chỉ riêng sân bay transit.",
        ],
      },
    ],
    faqs: [
      {
        question: "Lỡ chuyến bay nối chuyến có được bồi thường không?",
        answer:
          "Có thể. Nếu các chặng thuộc một single reservation, EU261 áp dụng và bạn đến điểm đến cuối cùng chậm từ 3 giờ trở lên, bạn có thể có quyền compensation, miễn là sự cố không do extraordinary circumstances.",
      },
      {
        question: "Nếu tôi tự mua hai vé riêng thì sao?",
        answer:
          "Case có thể yếu hơn nhiều. Khi đó đây thường là self-transfer, không phải một protected connection trong cùng booking. Việc lỡ vé sau thường không được nhìn giống như missed connection trong single reservation.",
      },
      {
        question: "Mốc 3 giờ được tính ở sân bay nối chuyến hay ở điểm đến cuối cùng?",
        answer:
          "Điểm quan trọng thường là final destination. Với missed connection, điều EU sources nhấn mạnh là độ trễ khi bạn tới điểm cuối cùng của hành trình, không chỉ việc bạn bị lỡ chặng giữa ở sân bay transit.",
      },
      {
        question: "Nếu tôi lỡ nối chuyến vì xếp hàng security quá lâu thì sao?",
        answer:
          "Nguồn chính thức của EU nêu rằng bạn không được compensation nếu miss connecting flight do delays at security checks. Đây là một ngoại lệ rất quan trọng trong loại case này.",
      },
      {
        question: "Nếu hãng chặng sau không cho tôi lên vì nghĩ tôi sẽ tới gate muộn do chặng đầu delay thì sao?",
        answer:
          "Trong mô hình one reservation with a single check-in, compensation có thể vẫn phát sinh. Đây là loại case đáng kiểm tra kỹ vì hành khách không nhất thiết tự làm lỡ chuyến nối.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh case missed connection bằng tiếng Việt",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "lo-chuyen-bay-noi-chuyen-co-duoc-boi-thuong-khong",
          content: "general_missed_connection_check",
        }),
        placement: "vi_article_missed_connection_general_check",
        description:
          "Phù hợp nếu bạn bị lỡ chuyến nối và muốn biết nhanh đây là protected connection có thể claim hay chỉ là self-transfer yếu về mặt EU261.",
      },
      {
        label: "Nếu case chính bắt đầu từ chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "lo-chuyen-bay-noi-chuyen-co-duoc-boi-thuong-khong",
          content: "delay_missed_connection_check",
        }),
        placement: "vi_article_missed_connection_delay_check",
        description:
          "Dùng khi chặng đầu bị delay làm bạn vỡ connection và bạn muốn kiểm tra xem độ trễ ở điểm đến cuối cùng đã đủ mạnh cho compensation chưa.",
      },
      {
        label: "Nếu case chính kết thúc bằng rebooking hoặc hủy chặng sau",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "lo-chuyen-bay-noi-chuyen-co-duoc-boi-thuong-khong",
          content: "cancellation_missed_connection_check",
        }),
        placement: "vi_article_missed_connection_cancellation_check",
        description:
          "Hữu ích khi sau khi lỡ connection, hãng đã đổi hoặc hủy chặng tiếp theo và bạn muốn kiểm tra xem compensation cùng các quyền khác còn mở không.",
      },
    ],
  },
  {
    slug: "hang-khong-phan-hoi-thi-lam-gi",
    title: "Hãng không phản hồi thì làm gì?",
    seoTitle:
      "Hãng không phản hồi thì làm gì? Cách escalte claim EU261 khi airline im lặng",
    description:
      "Nếu hãng hàng không không phản hồi, đừng để claim đứng yên. Theo hướng dẫn chính thức của EU, nếu bạn không nhận được phản hồi trong 2 tháng hoặc không hài lòng với phản hồi, bạn có thể khiếu nại lên cơ quan quốc gia có thẩm quyền. Trong một số trường hợp còn có thể dùng ADR hoặc đưa vụ việc ra tòa.",
    excerpt:
      "Đây là bài short-answer có intent chuyển đổi rất cao vì nhiều hành khách Việt dừng lại ngay ở bước gửi email đầu tiên. Bài viết đưa ra lộ trình rất thực dụng khi airline ghosting: giữ hồ sơ, xác định operating carrier, chờ đến mốc phù hợp rồi escalte sang cơ quan có thẩm quyền thay vì để claim trôi đi.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "No reply from airline",
    heroSummary:
      "Câu trả lời ngắn là: đừng chỉ chờ. Nếu hãng không phản hồi claim EU261 của bạn, hướng dẫn chính thức của EU nói rằng sau 2 tháng không có phản hồi hoặc nếu phản hồi không thỏa đáng, bạn có thể gửi khiếu nại tới cơ quan quốc gia có thẩm quyền ở nước nơi sự cố xảy ra. Tùy case, bạn cũng có thể thử ADR hoặc đi tiếp bằng con đường pháp lý.",
    quickAnswer: [
      "Nếu airline không trả lời, đừng để claim đứng yên quá lâu.",
      "Hướng dẫn chính thức của EU cho phép escalte sau 2 tháng không có phản hồi hoặc khi phản hồi không thỏa đáng.",
      "Điểm quan trọng là giữ đủ hồ sơ, xác định đúng operating carrier và chọn đúng cơ quan hoặc bước tiếp theo.",
    ],
    keyPoints: [
      "Không phản hồi không có nghĩa là bạn hết quyền.",
      "Mốc thực tế quan trọng trong guidance chính thức là 2 tháng.",
      "Bạn nên escalte lên cơ quan có thẩm quyền ở nước nơi incident xảy ra.",
      "ADR và court vẫn là các đường đi tiếp trong một số case.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: đừng chỉ tiếp tục chờ",
        paragraphs: [
          "Nếu hãng hàng không không phản hồi claim của bạn, phản ứng an toàn nhất không phải là chờ thêm vô thời hạn. Rất nhiều hành khách Việt dừng lại sau email đầu tiên và nghĩ rằng chỉ cần đã 'gửi khiếu nại' là việc còn lại sẽ tự chạy. Trong thực tế, nếu airline im lặng quá lâu, hồ sơ của bạn có thể mất đà và bạn có nguy cơ bỏ lỡ thời gian hoặc bỏ qua bước escalte quan trọng.",
          "Không phản hồi cũng không phải là dấu hiệu cho thấy bạn chắc chắn sai. Trong nhiều case, đó chỉ là dấu hiệu hãng đang chậm, đẩy hàng chờ xử lý, hoặc không muốn chủ động trả lời rõ. Vì vậy, cách nghĩ đúng không phải là 'họ im lặng chắc mình không có quyền', mà là 'mình cần chuyển sang bước tiếp theo theo đúng quy trình của EU'.",
        ],
        bullets: [
          "Im lặng từ airline không tự động giết claim.",
          "Chờ vô hạn là cách làm yếu hồ sơ nhất.",
          "Claim mạnh thường cần escalte đúng lúc, không chỉ gửi một email rồi bỏ đó.",
        ],
      },
      {
        title: "2. Mốc quan trọng theo hướng dẫn chính thức của EU là gì?",
        paragraphs: [
          "Your Europe nêu khá rõ: nếu bạn không nhận được phản hồi từ airline trong 2 tháng hoặc không hài lòng với phản hồi, bạn có thể khiếu nại lên cơ quan quốc gia có thẩm quyền ở nước nơi incident xảy ra. Đây là một điểm rất quan trọng cho SEO và cho người dùng thật, vì nó biến câu hỏi mơ hồ 'đợi bao lâu?' thành một hành động rất cụ thể.",
          "Điều đó nghĩa là khi đã qua mốc 2 tháng mà hãng vẫn im lặng, bạn không nên tiếp tục ở trạng thái chờ thụ động nữa. Từ lúc đó, hồ sơ nên được nhìn như một case đã đủ điều kiện để escalte. Với người dùng Việt bay trong EU hoặc trên các route EU ↔ Việt Nam có áp EU261, bước này thường là khác biệt giữa hồ sơ bị bỏ quên và hồ sơ tiếp tục đi được.",
        ],
        bullets: [
          "Mốc 2 tháng là mốc thực dụng rất quan trọng.",
          "Sau mốc này có thể escalte nếu hãng không trả lời hoặc trả lời không thỏa đáng.",
          "Đừng nhầm giữa 'chưa thấy email' và 'chưa được phép làm gì tiếp'.",
        ],
      },
      {
        title: "3. Escalate lên đâu nếu airline không phản hồi?",
        paragraphs: [
          "Theo guidance chính thức, bạn có thể lodge a complaint với cơ quan quốc gia có thẩm quyền ở nước nơi incident xảy ra. Nói ngắn gọn, đây không phải là bước gửi đại vào bất kỳ cơ quan nào bạn tìm thấy trên mạng, mà là bước chọn đúng national authority hoặc National Enforcement Body liên quan tới địa điểm xảy ra vấn đề. Chính cơ quan đó sẽ đưa ra một legal opinion không ràng buộc về cách tiếp tục claim.",
          "Với người dùng thực tế, phần khó thường không phải là viết thêm một email, mà là biết đúng nơi cần gửi tiếp. Vì vậy, điểm quan trọng ở bước này là xác định incident của bạn gắn với nước nào theo logic của vụ việc và sử dụng đúng kênh khiếu nại. Gửi sai nơi thường chỉ làm chậm thêm hồ sơ.",
        ],
        bullets: [
          "Escalation tiếp theo là cơ quan có thẩm quyền ở nước nơi incident xảy ra.",
          "Mục tiêu là legal opinion và hướng xử lý tiếp theo.",
          "Gửi sai cơ quan dễ làm hồ sơ mất thêm thời gian.",
        ],
      },
      {
        title: "4. Có nên gửi lại airline lần nữa không?",
        paragraphs: [
          "Có thể có ích, nhưng không nên coi đó là bước duy nhất. Một follow-up rõ ràng, ngắn gọn, đính kèm số booking, ngày bay, route, loại disruption và claim đã gửi trước đó có thể giúp nếu case bị trôi khỏi hàng xử lý. Nhưng nếu airline đã im lặng quá lâu, gửi thêm nhiều email cùng một nội dung thường không tạo ra khác biệt lớn bằng việc chuyển sang escalation chính thức.",
          "Cách làm thực tế hơn là kết hợp cả hai: gửi một follow-up cuối cùng thật gọn, đồng thời chuẩn bị hồ sơ để escalte. Như vậy bạn không bị mắc kẹt trong vòng lặp gửi mail nhắc vô hạn. Điều người dùng cần tránh nhất là tiếp tục gửi thêm email mà không thay đổi vị trí pháp lý của hồ sơ.",
        ],
        bullets: [
          "Follow-up có thể hữu ích, nhưng không nên thay thế escalation.",
          "Một email nhắc gọn tốt hơn nhiều email dài và lặp lại.",
          "Sau mốc phù hợp, giá trị lớn nhất nằm ở bước escalte đúng nơi.",
        ],
      },
      {
        title: "5. Nếu phản hồi có nhưng rất chung chung hoặc né trách nhiệm thì sao?",
        paragraphs: [
          "Theo guidance của EU, không chỉ trường hợp 'không có phản hồi' mới được đi tiếp. Nếu bạn không satisfied with the reply, bạn cũng có thể lodge complaint với cơ quan có thẩm quyền. Điều này rất quan trọng vì nhiều airline không ghost hoàn toàn, nhưng gửi một phản hồi rất mơ hồ kiểu 'extraordinary circumstances' mà không giải thích đủ.",
          "Trong thực tế, một phản hồi yếu nhưng có vẻ 'chính thức' đôi khi còn làm hành khách bỏ cuộc nhanh hơn sự im lặng hoàn toàn. Nhưng về mặt xử lý hồ sơ, hai tình huống này có thể dẫn tới cùng một bước tiếp theo: escalte. Vì vậy, câu hỏi không phải chỉ là 'có trả lời hay chưa', mà còn là 'câu trả lời đó có thực sự giải quyết claim không'.",
        ],
        bullets: [
          "Phản hồi yếu hoặc né tránh chưa phải là kết thúc.",
          "Không hài lòng với phản hồi vẫn là cơ sở để escalte.",
          "Đừng để một email chung chung làm bạn tự đóng hồ sơ.",
        ],
      },
      {
        title: "6. Ngoài national authority, còn đường nào khác không?",
        paragraphs: [
          "Có. Your Europe cũng nêu rằng bạn có thể thử alternative dispute resolution, tức giải quyết tranh chấp ngoài tòa, nhưng quyền truy cập ADR chỉ dành cho EU residents. Trong một số case, đây có thể là con đường hữu ích để đẩy tranh chấp đi tiếp mà không vào court ngay. Tuy nhiên, không phải ai cũng dùng được, nên bài toán residency ở đây rất quan trọng.",
          "Ngoài ra, bạn cũng có thể resort to formal legal action, bao gồm cả European Small Claims procedure trong các case phù hợp. Điểm cốt lõi của đoạn này không phải là khuyên ai cũng phải kiện, mà là nhấn mạnh rằng 'airline không trả lời' không phải ngõ cụt. Vẫn còn các tầng escalte tiếp theo ngoài việc ngồi chờ hộp thư đến.",
        ],
        bullets: [
          "ADR là một đường đi tiếp, nhưng chỉ mở cho EU residents.",
          "Court hoặc European Small Claims cũng có thể là bước sau.",
          "Im lặng từ airline không phải là điểm kết thúc của hồ sơ.",
        ],
      },
      {
        title: "7. Bạn nên chuẩn bị gì trước khi escalte?",
        paragraphs: [
          "Hãy gom lại complaint gốc đã gửi cho airline, bằng chứng ngày gửi, mọi email follow-up, booking reference, boarding pass nếu còn, thông báo delay hoặc cancellation, và bất kỳ phản hồi nào đã nhận được. Với case airline không phản hồi, bằng chứng cho thấy bạn đã thật sự liên hệ trước với hãng là rất quan trọng, vì nhiều quy trình yêu cầu bước này xảy ra trước khi complaint được tiếp nhận ở tầng tiếp theo.",
          "Nếu có thể, hãy tóm hồ sơ trong một timeline ngắn: ngày bay, chuyện gì xảy ra, ngày gửi claim đầu tiên, ngày follow-up, và đến thời điểm hiện tại airline đã im lặng bao lâu. Một hồ sơ được sắp gọn như vậy giúp bước escalte mạnh hơn rất nhiều và cũng phù hợp với cách AI systems, claim handlers và human reviewers đánh giá thông tin nhanh.",
        ],
        bullets: [
          "Giữ complaint gốc và proof ngày gửi.",
          "Gom booking reference, email, boarding pass và thông báo disruption.",
          "Tạo timeline ngắn cho toàn bộ hồ sơ trước khi escalte.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hãng không phản hồi claim thì tôi nên làm gì trước tiên?",
        answer:
          "Trước tiên hãy chắc rằng bạn đã gửi claim đến đúng operating carrier và lưu lại proof ngày gửi. Nếu airline tiếp tục im lặng, đừng chỉ chờ vô hạn; hãy chuẩn bị hồ sơ để escalte theo bước tiếp theo.",
      },
      {
        question: "Sau bao lâu không có phản hồi thì có thể escalte?",
        answer:
          "Theo hướng dẫn chính thức của EU trên Your Europe, nếu bạn không nhận được phản hồi trong 2 tháng hoặc không hài lòng với phản hồi, bạn có thể khiếu nại lên cơ quan quốc gia có thẩm quyền.",
      },
      {
        question: "Escalate lên đâu nếu airline không trả lời?",
        answer:
          "Bạn có thể lodge complaint với cơ quan quốc gia có thẩm quyền ở nước nơi incident xảy ra. Cơ quan này có thể đưa ra một non-binding legal opinion về cách tiếp tục claim.",
      },
      {
        question: "Nếu airline có trả lời nhưng rất chung chung thì sao?",
        answer:
          "Bạn vẫn có thể đi tiếp. Guidance chính thức nói rằng nếu bạn không satisfied with the reply, bạn cũng có thể khiếu nại lên cơ quan có thẩm quyền, không chỉ khi airline hoàn toàn im lặng.",
      },
      {
        question: "Có thể dùng ADR hoặc ra tòa không?",
        answer:
          "Có thể. Your Europe nêu ADR là một lựa chọn ngoài tòa, nhưng chỉ mở cho EU residents. Ngoài ra, tùy case, bạn cũng có thể dùng các bước pháp lý như European Small Claims procedure.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh claim đang bị airline im lặng",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "hang-khong-phan-hoi-thi-lam-gi",
          content: "general_airline_no_reply_check",
        }),
        placement: "vi_article_airline_no_reply_general_check",
        description:
          "Phù hợp nếu bạn đã gửi claim nhưng airline không trả lời và muốn biết hồ sơ còn mạnh để escalte tiếp hay không.",
      },
      {
        label: "Nếu case chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "hang-khong-phan-hoi-thi-lam-gi",
          content: "delay_airline_no_reply_check",
        }),
        placement: "vi_article_airline_no_reply_delay_check",
        description:
          "Dùng khi airline im lặng sau claim về chuyến bay bị delay và bạn muốn kiểm tra xem case có đủ mạnh để đi tiếp không.",
      },
      {
        label: "Nếu case chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "hang-khong-phan-hoi-thi-lam-gi",
          content: "cancellation_airline_no_reply_check",
        }),
        placement: "vi_article_airline_no_reply_cancellation_check",
        description:
          "Hữu ích khi airline không phản hồi claim sau cancellation và bạn muốn đánh giá nhanh hướng escalte cho hồ sơ.",
      },
    ],
  },
  {
    slug: "hang-tu-choi-yeu-cau-thi-phai-lam-sao",
    title: "Hãng từ chối yêu cầu thì phải làm sao?",
    seoTitle:
      "Hãng từ chối yêu cầu thì phải làm sao? Cách phản biện khi airline bác claim EU261",
    description:
      "Nếu hãng hàng không từ chối claim EU261 của bạn, đừng mặc định rằng vụ việc đã kết thúc. Theo hướng dẫn chính thức của EU, nếu bạn không hài lòng với phản hồi hoặc hãng không đưa ra giải thích thỏa đáng, bạn có thể khiếu nại lên cơ quan quốc gia có thẩm quyền, cân nhắc ADR hoặc đi tiếp bằng con đường pháp lý.",
    excerpt:
      "Đây là bài short-answer có intent chuyển đổi rất cao vì nhiều hành khách Việt bỏ cuộc ngay khi nhận email từ chối đầu tiên. Bài viết giúp phân biệt giữa một từ chối có cơ sở và một phản hồi yếu kiểu 'extraordinary circumstances' chung chung, rồi chỉ rõ cách escalte claim theo nguồn chính thức của EU.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Airline rejected your claim",
    heroSummary:
      "Câu trả lời ngắn là: đừng coi email từ chối đầu tiên là kết luận cuối cùng. Nếu hãng từ chối yêu cầu bồi thường mà bạn thấy lý do yếu, không rõ hoặc không thỏa đáng, hướng dẫn chính thức của EU cho phép bạn đi tiếp bằng cách khiếu nại lên cơ quan quốc gia có thẩm quyền. Trong một số case, ADR hoặc court cũng là bước tiếp theo.",
    quickAnswer: [
      "Hãng từ chối claim không có nghĩa là bạn tự động thua case.",
      "Nếu phản hồi không thỏa đáng hoặc không có giải thích đủ mạnh, bạn có thể escalte tiếp.",
      "Điều quan trọng là đọc đúng lý do từ chối, giữ hồ sơ và chọn đúng bước tiếp theo.",
    ],
    keyPoints: [
      "Từ chối lần đầu không phải lúc nào cũng là câu trả lời cuối cùng.",
      "Phản hồi mơ hồ về extraordinary circumstances chưa chắc đã đủ.",
      "Bạn có thể đi tiếp lên cơ quan có thẩm quyền nếu không hài lòng với phản hồi.",
      "ADR và court vẫn là các đường xử lý tiếp theo trong một số case.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: đừng đóng hồ sơ chỉ vì một email từ chối",
        paragraphs: [
          "Nếu hãng hàng không từ chối yêu cầu bồi thường của bạn, điều đầu tiên cần nhớ là: một email từ chối đầu tiên không tự động quyết định toàn bộ vụ việc. Rất nhiều hành khách Việt nhận được một phản hồi có vẻ chính thức, thấy vài cụm như 'extraordinary circumstances' hoặc 'not eligible', rồi mặc định rằng claim đã chết. Trong thực tế, đó có thể chỉ là lập trường ban đầu của hãng chứ chưa phải kết luận vững về mặt pháp lý.",
          "Điều nguy hiểm nhất ở bước này là bỏ cuộc quá sớm. EU passenger rights được thiết kế để hành khách còn có các tầng redress tiếp theo nếu họ không hài lòng với phản hồi từ airline. Vì vậy, câu hỏi đúng sau khi bị từ chối không phải là 'mình còn làm được gì nữa không?', mà là 'lý do từ chối này có thật sự đủ mạnh không và bước escalte đúng là gì?'.",
        ],
        bullets: [
          "Email từ chối đầu tiên không luôn là điểm kết thúc.",
          "Nhiều phản hồi từ hãng chỉ là lập trường mở đầu.",
          "Bỏ cuộc ngay sau phản hồi đầu tiên là lỗi rất phổ biến.",
        ],
      },
      {
        title: "2. Khi nào nên nghi ngờ một phản hồi từ chối?",
        paragraphs: [
          "Bạn nên nghi ngờ khi hãng chỉ dùng một công thức rất chung như 'do extraordinary circumstances' nhưng không giải thích đủ bản chất sự cố, mối liên hệ giữa sự cố đó với delay hoặc cancellation, hoặc các biện pháp hợp lý đã được thực hiện để tránh hậu quả. Your Europe nhiều lần nhấn mạnh rằng nếu airline không cung cấp một giải thích thỏa đáng, hành khách có thể liên hệ cơ quan quốc gia có thẩm quyền để được hỗ trợ thêm.",
          "Nói cách khác, không phải cứ email có vẻ dài hoặc có giọng điệu pháp lý là lý do đã chắc chắn đúng. Một phản hồi tốt phải ít nhất cho thấy hãng đang giải thích case của chính bạn, chứ không chỉ dán một template chung cho mọi hồ sơ. Nếu bạn đọc mà vẫn không hiểu hãng đang dựa vào sự kiện nào và vì sao sự kiện đó miễn trách nhiệm compensation, đó thường là dấu hiệu phản hồi còn yếu.",
        ],
        bullets: [
          "Template chung chung là dấu hiệu cần cảnh giác.",
          "Một lý do từ chối tốt phải giải thích case cụ thể của bạn.",
          "Không hiểu hãng đang dựa vào đâu thường có nghĩa phản hồi chưa đủ mạnh.",
        ],
      },
      {
        title: "3. Những lý do từ chối nào thường xuất hiện nhất?",
        paragraphs: [
          "Trong thực tế, các lý do từ chối hay gặp gồm: hãng nói delay hoặc cancellation do extraordinary circumstances, nói bạn không đủ điều kiện vì route không thuộc EU261, nói bạn không có mặt đúng giờ để check-in hoặc boarding, hoặc nói claim đang nhắm sai carrier. Không phải tất cả các lý do này đều sai, nhưng từng lý do đều cần được soi lại theo đúng dữ kiện của hành trình.",
          "Ví dụ, nếu vấn đề là operating carrier chứ không phải airline bạn đã viết nhầm sang, hướng xử lý sẽ khác với case thực sự rơi vào extraordinary circumstances. Vì vậy, bước đầu tiên sau khi bị từ chối không phải là phản ứng cảm tính, mà là phân loại đúng kiểu từ chối. Khi biết hãng đang bác ở lớp nào, bạn mới chọn đúng cách phản biện hoặc escalte.",
        ],
        bullets: [
          "Extraordinary circumstances là lý do từ chối phổ biến nhất.",
          "Sai operating carrier cũng là lỗi rất hay gặp.",
          "Muốn phản biện tốt, trước hết phải xác định đúng loại từ chối.",
        ],
      },
      {
        title: "4. Nếu tôi không hài lòng với phản hồi thì sao?",
        paragraphs: [
          "Nguồn chính thức của EU nêu rất rõ rằng nếu bạn không hài lòng với phản hồi, bạn có thể lodge a complaint với cơ quan quốc gia có thẩm quyền ở nước nơi incident xảy ra. Đây là điểm cực quan trọng: luật hướng người dùng tới bước escalte chứ không yêu cầu phải chấp nhận lập trường của airline chỉ vì hãng đã trả lời.",
          "Với người dùng Việt, điều này có nghĩa là một phản hồi từ chối không đóng cửa case. Nó chỉ chuyển hồ sơ sang giai đoạn bạn cần một tầng đánh giá khác bên ngoài hãng. Nếu lý do từ chối yếu, mâu thuẫn với dữ kiện bạn có, hoặc né tránh giải thích, bước tiếp theo hợp lý thường là chuẩn bị hồ sơ để gửi lên authority phù hợp thay vì tranh luận email qua lại quá lâu.",
        ],
        bullets: [
          "Không hài lòng với phản hồi là đủ để mở bước escalte tiếp theo.",
          "Authority bên ngoài hãng là tầng đánh giá rất quan trọng.",
          "Đừng kẹt quá lâu trong vòng lặp tranh luận email với airline.",
        ],
      },
      {
        title: "5. Escalate lên đâu sau khi bị từ chối?",
        paragraphs: [
          "Theo guidance của EU, bạn có thể gửi khiếu nại tới cơ quan quốc gia có thẩm quyền ở nước nơi incident xảy ra. Cơ quan này sẽ đưa ra một non-binding legal opinion về cách tiếp tục claim. Dù không phải lúc nào đây cũng là một quyết định cưỡng chế trả tiền ngay, nó vẫn là một bước rất quan trọng để đánh giá độc lập xem lập trường từ chối của hãng có hợp lý hay không.",
          "Ngoài ra, nếu bạn là EU resident, ADR cũng có thể là một lối đi ngoài tòa trong một số trường hợp. Và nếu vụ việc cần đi xa hơn, Your Europe cũng nhắc đến con đường formal legal action, bao gồm cả European Small Claims procedure trong các case phù hợp. Điều cốt lõi ở đây là: bị từ chối không phải là hết đường đi.",
        ],
        bullets: [
          "Bước chính là authority ở nước nơi incident xảy ra.",
          "ADR là lựa chọn thêm cho EU residents.",
          "Court hoặc European Small Claims vẫn có thể là bước sau.",
        ],
      },
      {
        title: "6. Có nên gửi lại claim cho hãng thêm một lần nữa không?",
        paragraphs: [
          "Có thể có ích nếu bạn phản hồi rất gọn, đúng điểm và chỉ ra chỗ yếu trong lý do từ chối. Ví dụ, nếu hãng nói extraordinary circumstances nhưng không nêu sự kiện cụ thể, bạn có thể yêu cầu họ làm rõ. Nếu họ nói bạn không thuộc EU261 nhưng route thực tế lại nằm trong phạm vi luật, bạn có thể chỉ ra điều đó bằng dữ kiện booking. Một phản hồi ngắn, chính xác thường tốt hơn một email dài mang tính tranh cãi.",
          "Nhưng điều quan trọng là không nên coi việc gửi lại cho hãng là chiến lược duy nhất. Nếu airline đã bác claim bằng template hoặc tiếp tục né tránh, giá trị lớn hơn thường nằm ở bước escalte ra ngoài hãng. Nói cách khác, reply có thể hữu ích như một nhịp cuối, nhưng không nên thay thế con đường chính thức tiếp theo.",
        ],
        bullets: [
          "Reply lại có thể hữu ích nếu bạn bám đúng điểm yếu của lý do từ chối.",
          "Một email ngắn, chính xác tốt hơn tranh luận dài dòng.",
          "Đừng để bước reply làm bạn trì hoãn escalation chính thức quá lâu.",
        ],
      },
      {
        title: "7. Bạn nên chuẩn bị gì trước khi phản biện hoặc escalte?",
        paragraphs: [
          "Hãy giữ lại email từ chối của hãng, claim gốc, proof ngày gửi, booking reference, boarding pass nếu còn, thông báo delay hoặc cancellation, ảnh giờ đến thực tế và mọi tài liệu cho thấy route, carrier hoặc nguyên nhân sự cố có thể đã bị hãng mô tả sai. Trong rất nhiều case, điểm mạnh của hồ sơ nằm ở một chi tiết cụ thể mà template từ chối của airline đã bỏ qua.",
          "Bạn cũng nên viết lại case của mình trong một timeline ngắn: ngày bay, chuyện gì xảy ra, bạn đã claim khi nào, hãng từ chối khi nào, và chính xác họ từ chối vì lý do gì. Timeline gọn và rõ giúp cả authority, ADR, claim handler lẫn AI systems hiểu hồ sơ nhanh hơn và nhìn ra ngay điểm tranh chấp thật sự nằm ở đâu.",
        ],
        bullets: [
          "Giữ email từ chối và claim gốc.",
          "Gom booking reference, bằng chứng disruption và dữ kiện route/carrier.",
          "Tóm case thành timeline ngắn trước khi escalte.",
        ],
      },
    ],
    faqs: [
      {
        question: "Hãng từ chối yêu cầu bồi thường thì có nghĩa là tôi hết quyền không?",
        answer:
          "Không. Một phản hồi từ chối đầu tiên không tự động có nghĩa case đã kết thúc. Nếu bạn không hài lòng với phản hồi hoặc thấy lý do yếu, bạn vẫn có thể đi tiếp theo các bước escalte được hướng dẫn chính thức bởi EU.",
      },
      {
        question: "Nếu airline chỉ nói 'extraordinary circumstances' thì sao?",
        answer:
          "Đó chưa chắc đã là câu trả lời đủ mạnh. Nếu hãng không đưa ra giải thích thỏa đáng hoặc không làm rõ lý do cụ thể, guidance của EU cho phép bạn liên hệ cơ quan quốc gia có thẩm quyền để được hỗ trợ thêm.",
      },
      {
        question: "Sau khi bị từ chối, tôi nên làm gì tiếp theo?",
        answer:
          "Bạn nên đọc kỹ lý do từ chối, giữ lại toàn bộ hồ sơ và cân nhắc escalte lên cơ quan quốc gia có thẩm quyền ở nước nơi incident xảy ra nếu bạn không hài lòng với phản hồi.",
      },
      {
        question: "Có nên reply lại email từ chối của hãng không?",
        answer:
          "Có thể, nếu bạn phản hồi ngắn gọn và đánh đúng vào điểm yếu của lý do từ chối. Nhưng reply lại không nên thay thế bước escalte chính thức nếu hãng tiếp tục giữ lập trường yếu hoặc né tránh.",
      },
      {
        question: "Nếu bị từ chối, tôi còn có thể dùng ADR hoặc ra tòa không?",
        answer:
          "Có thể. ADR là một lựa chọn cho EU residents trong một số trường hợp, và tùy case bạn cũng có thể resort to formal legal action như European Small Claims procedure.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh claim đã bị hãng từ chối",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "hang-tu-choi-yeu-cau-thi-phai-lam-sao",
          content: "general_rejected_claim_check",
        }),
        placement: "vi_article_rejected_claim_general_check",
        description:
          "Phù hợp nếu bạn đã nhận email từ chối và muốn biết nhanh liệu lý do bác claim có thật sự mạnh hay vẫn còn cửa đi tiếp.",
      },
      {
        label: "Nếu case bị từ chối liên quan đến chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "hang-tu-choi-yeu-cau-thi-phai-lam-sao",
          content: "delay_rejected_claim_check",
        }),
        placement: "vi_article_rejected_claim_delay_check",
        description:
          "Dùng khi airline bác claim delay và bạn muốn kiểm tra xem lập luận từ chối đó có đứng vững không.",
      },
      {
        label: "Nếu case bị từ chối liên quan đến chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "hang-tu-choi-yeu-cau-thi-phai-lam-sao",
          content: "cancellation_rejected_claim_check",
        }),
        placement: "vi_article_rejected_claim_cancellation_check",
        description:
          "Hữu ích khi hãng bác claim sau cancellation và bạn muốn đánh giá nhanh xem có nên escalte hồ sơ tiếp hay không.",
      },
    ],
  },
  {
    slug: "co-can-luat-su-de-yeu-cau-boi-thuong-khong",
    title: "Có cần luật sư để yêu cầu bồi thường không?",
    seoTitle:
      "Có cần luật sư để yêu cầu bồi thường chuyến bay không? Câu trả lời ngắn theo EU261",
    description:
      "Trong đa số trường hợp, bạn không cần luật sư để bắt đầu claim EU261. Nguồn chính thức của EU cho thấy hành khách nên liên hệ airline trước, có quyền tự quyết định có đại diện hay không, và ngay cả European Small Claims Procedure cũng không bắt buộc phải có luật sư.",
    excerpt:
      "Bài short-answer premium cho người dùng Việt đang phân vân giữa tự làm claim, dùng claim company hay thuê luật sư. Trọng tâm là: khi nào tự làm là đủ, khi nào hỗ trợ chuyên môn bắt đầu có giá trị và cần kiểm tra gì trước khi giao hồ sơ cho bên thứ ba.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "9 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Self-claim hay nhờ luật sư?",
    heroSummary:
      "Câu trả lời ngắn là: thường không cần luật sư để bắt đầu yêu cầu bồi thường EU261. Guidance chính thức của EU cho thấy bạn nên liên hệ airline trước, và bạn có quyền tự quyết định có dùng người đại diện hay không. Hỗ trợ pháp lý hoặc claim company thường chỉ bắt đầu thật sự có ích khi case bị từ chối, phức tạp hoặc phải đi sang giai đoạn escalte mạnh hơn.",
    quickAnswer: [
      "Không, đa số case không cần luật sư để bắt đầu claim EU261 với hãng.",
      "Nguồn EU còn cho thấy hành khách nên liên hệ operating carrier trước khi cân nhắc cách khác.",
      "Việc nhờ luật sư hoặc claim company thường hợp lý hơn khi hồ sơ bị từ chối, phức tạp hoặc cần đi tiếp tới ADR hay court.",
    ],
    keyPoints: [
      "Bạn có quyền tự quyết định có người đại diện hay không.",
      "European Small Claims Procedure không bắt buộc phải có luật sư.",
      "Tự claim thường đủ với case rõ, tài liệu đủ và airline phản hồi bình thường.",
      "Nếu dùng bên thứ ba, hãy kiểm tra phí, điều khoản và giấy ủy quyền thật kỹ.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: thường không cần luật sư để bắt đầu",
        paragraphs: [
          "Nếu câu hỏi của bạn là 'muốn đòi bồi thường chuyến bay theo EU261 thì có bắt buộc phải thuê luật sư không?', câu trả lời ngắn là không. Trong đa số case, bước đầu tiên vẫn là gửi claim trực tiếp tới airline vận hành chuyến bay. Đây cũng là hướng đi phù hợp với guidance chính thức của EU về redress cho hành khách hàng không.",
          "Điều này rất quan trọng với người dùng Việt, vì nhiều người bỏ qua bước claim trực tiếp chỉ vì nghĩ phải có luật sư mới làm được. Thực tế, một hồ sơ đơn giản với route rõ, delay hoặc cancellation rõ và giấy tờ đầy đủ hoàn toàn có thể được khởi động mà không cần representation ngay từ đầu.",
        ],
        bullets: [
          "Không có quy tắc chung nào nói rằng muốn claim EU261 thì bắt buộc phải thuê luật sư.",
          "Bước đầu tiêu chuẩn vẫn là claim trực tiếp tới airline.",
          "Case rõ và hồ sơ đủ thường chưa cần escalation pháp lý ngay.",
        ],
      },
      {
        title: "2. Nguồn chính thức của EU thực sự nói gì?",
        paragraphs: [
          "European Commission đã nêu trong information note về claim agencies rằng hành khách nên liên hệ operating carrier trước khi cân nhắc các con đường khác để đòi quyền lợi. Cùng tài liệu đó cũng nhấn mạnh rằng hành khách có quyền tự quyết định liệu mình có muốn được đại diện bởi một người hay một tổ chức khác hay không.",
          "Ngoài ra, Your Europe và trang của European Commission về European Small Claims Procedure đều cho thấy nếu vụ việc phải đi đến bước court phù hợp, đây vẫn là thủ tục phần lớn bằng văn bản và không bắt buộc phải có luật sư để nộp claim. Điều này không có nghĩa kiện tụng luôn dễ, nhưng nó có nghĩa là 'không có luật sư' không tự động chặn bạn khỏi việc theo đuổi quyền lợi.",
        ],
        bullets: [
          "EU guidance ưu tiên bước liên hệ airline trước.",
          "Hành khách có quyền chọn có đại diện hay không.",
          "Ngay cả thủ tục Small Claims của EU cũng không mặc định đòi luật sư.",
        ],
      },
      {
        title: "3. Khi nào tự làm claim thường là đủ?",
        paragraphs: [
          "Tự làm thường đủ khi case của bạn khá thẳng: chuyến bay đến muộn trên 3 giờ hoặc bị hủy, route nằm rõ trong phạm vi EU261, booking nằm trên một reservation rõ ràng, airline dễ xác định và bạn đang giữ được các giấy tờ cốt lõi như PNR, e-mail xác nhận, boarding pass hoặc dữ liệu tương đương. Nếu airline trả lời đúng hạn và lý do không gây tranh cãi lớn, tự claim thường là cách hợp lý nhất để bắt đầu.",
          "Nói ngắn gọn, nếu vấn đề của bạn chủ yếu là một disruption khá rõ và hồ sơ không có nhiều điểm mờ, bạn không cần biến nó thành một bài toán pháp lý ngay từ ngày đầu. Bắt đầu đơn giản thường tốt hơn: gửi claim gọn, đúng carrier, đúng dữ kiện và giữ tất cả bằng chứng.",
        ],
        bullets: [
          "Delay hoặc cancellation rõ ràng thường phù hợp để tự claim trước.",
          "Case càng ít điểm mờ về route, carrier và tài liệu thì càng dễ tự làm.",
          "Tự claim trước giúp bạn giữ chi phí thấp và không ràng buộc sớm với bên thứ ba.",
        ],
      },
      {
        title: "4. Khi nào luật sư hoặc claim company bắt đầu hữu ích hơn?",
        paragraphs: [
          "Phần này là nhận định thực tiễn dựa trên quy trình redress chính thức của EU, không phải một câu chữ cứng kiểu 'phải thuê luật sư'. Trong thực tế, hỗ trợ chuyên môn bắt đầu có giá trị hơn khi airline đã từ chối claim, dùng lý do extraordinary circumstances mơ hồ, đẩy trách nhiệm sang carrier khác, hoặc khi hành trình có nhiều chặng, codeshare, missed connection hay yếu tố cross-border khiến việc lập luận khó hơn.",
          "Hỗ trợ bên ngoài cũng có thể đáng cân nhắc nếu bạn gần chạm time limit, hồ sơ tài liệu của bạn mỏng, bạn không thoải mái với tiếng Anh hoặc ngôn ngữ của authority, hoặc case có khả năng phải đi sang ADR hay court. Ở giai đoạn này, vấn đề không còn là 'gửi một claim' nữa mà là chọn chiến lược escalte hiệu quả.",
        ],
        bullets: [
          "Claim bị từ chối là thời điểm hay bắt đầu cân nhắc hỗ trợ chuyên môn.",
          "Case multi-leg, codeshare hoặc missed connection thường phức tạp hơn.",
          "Gần hết thời hiệu hoặc phải đi sang dispute stage là dấu hiệu nên cân nhắc hỗ trợ.",
        ],
      },
      {
        title: "5. Luật sư và claim company không phải là một thứ",
        paragraphs: [
          "Nhiều hành khách dùng hai khái niệm này như nhau, nhưng chúng không hoàn toàn giống nhau. Claim company thường là đơn vị quản lý hồ sơ và theo đuổi claim thay cho bạn; trong một số case họ có thể dùng đội ngũ pháp lý hoặc hợp tác với luật sư ở các bước sau. Luật sư thì là representation pháp lý trực tiếp hơn, đặc biệt khi tranh chấp tiến sâu hơn.",
          "Nguồn chính thức của European Commission về claim agencies cũng nhắc rõ rằng nếu bạn làm việc với bên thứ ba, bạn nên chú ý đến giá dịch vụ hiển thị có đầy đủ hay không, tổng phí có rõ ràng không và giấy ủy quyền có minh bạch không. Đây là điểm rất quan trọng với người dùng Việt, vì quyết định sai ở bước ký ủy quyền hoặc chấp nhận một cấu trúc phí mơ hồ có thể làm case kém linh hoạt về sau.",
        ],
        bullets: [
          "Claim company là dịch vụ xử lý claim, không nhất thiết đồng nghĩa với một luật sư riêng cho bạn.",
          "Nếu dùng bên thứ ba, hãy xem tổng phí và điều khoản thật kỹ.",
          "Giấy ủy quyền phải rõ ràng trước khi bạn giao hồ sơ.",
        ],
      },
      {
        title: "6. Nếu phải đi tới court thì sao?",
        paragraphs: [
          "Ngay cả khi dispute phải đi tiếp, bạn vẫn không nên tự động nghĩ rằng 'không có luật sư là hết cửa'. Your Europe nêu rằng European Small Claims Procedure có thể được dùng cho các case phù hợp, bạn không cần luật sư để nộp claim và thủ tục này phần lớn là bằng văn bản. Commission cũng mô tả đây là một cách tương đối gọn để xử lý cross-border payment claims đủ điều kiện.",
          "Tuy vậy, điều đó không có nghĩa mọi người đều nên tự đi đến court. Court là giai đoạn cần sự kiên nhẫn, hiểu tài liệu và theo dõi procedural details. Vì thế, câu trả lời tốt hơn không phải là 'luôn tự làm' hay 'luôn thuê luật sư', mà là nhìn đúng độ khó của case trước khi chọn.",
        ],
        bullets: [
          "Small Claims của EU không tự động đòi luật sư.",
          "Court vẫn là bước nặng hơn về thời gian và chi tiết thủ tục.",
          "Quyết định có nhờ hỗ trợ hay không nên dựa vào độ khó thực tế của hồ sơ.",
        ],
      },
      {
        title: "7. Cách quyết định nhanh: tự claim hay nhờ hỗ trợ?",
        paragraphs: [
          "Nếu chuyến bay của bạn thuộc một case khá rõ, airline chưa từ chối, bạn có đủ giấy tờ và vẫn còn nhiều thời gian trước time limit, hãy bắt đầu bằng việc tự claim trực tiếp. Đây là lộ trình hợp lý nhất theo logic chính thức của EU và cũng giúp bạn tránh cam kết sớm với phí dịch vụ không cần thiết.",
          "Nếu hồ sơ đã chuyển sang giai đoạn tranh chấp thật sự, airline bác claim, không trả lời, hoặc case có nhiều lớp kỹ thuật hơn bình thường, lúc đó hỗ trợ bên ngoài mới thường tạo ra nhiều giá trị nhất. Tư duy đúng không phải là 'luật sư hay không', mà là 'case này đã đủ phức tạp để cần người xử lý chuyên sâu chưa?'.",
        ],
        bullets: [
          "Case rõ: tự claim trước.",
          "Case bị bác, bị im lặng hoặc quá phức tạp: cân nhắc hỗ trợ.",
          "Hãy quyết định theo độ khó của hồ sơ, không theo cảm giác sợ thủ tục.",
        ],
      },
    ],
    faqs: [
      {
        question: "Có bắt buộc phải thuê luật sư để yêu cầu bồi thường EU261 không?",
        answer:
          "Không. Trong đa số trường hợp, bạn có thể tự gửi claim tới airline. Nguồn chính thức của EU còn cho thấy hành khách nên liên hệ operating carrier trước khi cân nhắc các lựa chọn khác.",
      },
      {
        question: "Nếu case phải đi xa hơn, tôi có còn tự làm được không?",
        answer:
          "Có thể. Your Europe nêu rằng trong European Small Claims Procedure, bạn không cần luật sư để nộp claim và thủ tục này phần lớn là bằng văn bản. Tuy nhiên, mức độ phù hợp còn phụ thuộc vào độ khó thực tế của hồ sơ.",
      },
      {
        question: "Khi nào nên cân nhắc nhờ luật sư hoặc claim company?",
        answer:
          "Thường là khi airline đã từ chối claim, không phản hồi, hồ sơ có nhiều chặng hoặc carrier phức tạp, gần hết thời hiệu, hoặc case có khả năng phải đi sang ADR hay court. Đây là nhận định thực tiễn từ quy trình escalte, không phải quy tắc cứng rằng bạn bắt buộc phải thuê ai đó.",
      },
      {
        question: "Claim company và luật sư có giống nhau không?",
        answer:
          "Không hoàn toàn. Claim company thường xử lý claim thay bạn và có thể dùng hoặc phối hợp với đội ngũ pháp lý ở các bước sau, còn luật sư là representation pháp lý trực tiếp hơn. Nếu dùng bên thứ ba, hãy kiểm tra kỹ tổng phí và giấy ủy quyền.",
      },
      {
        question: "Nếu dùng bên thứ ba, tôi nên kiểm tra gì trước?",
        answer:
          "Hãy kiểm tra tổng chi phí có hiển thị rõ hay không, điều khoản có minh bạch không và giấy ủy quyền có rõ phạm vi hay không. European Commission đã lưu ý hành khách nên chú ý đặc biệt tới các điểm này khi làm việc với claim agencies.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh case của bạn trước khi thuê luật sư",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "co-can-luat-su-de-yeu-cau-boi-thuong-khong",
          content: "general_lawyer_need_check",
        }),
        placement: "vi_article_lawyer_need_general_check",
        description:
          "Phù hợp nếu bạn chưa chắc hồ sơ đã đủ phức tạp để cần hỗ trợ pháp lý và muốn biết trước claim của mình mạnh đến đâu.",
      },
      {
        label: "Nếu case chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "co-can-luat-su-de-yeu-cau-boi-thuong-khong",
          content: "delay_lawyer_need_check",
        }),
        placement: "vi_article_lawyer_need_delay_check",
        description:
          "Dùng khi bạn muốn xem claim delay của mình có đủ rõ để tự làm trước hay đã nên escalte sang bước mạnh hơn.",
      },
      {
        label: "Nếu case chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "co-can-luat-su-de-yeu-cau-boi-thuong-khong",
          content: "cancellation_lawyer_need_check",
        }),
        placement: "vi_article_lawyer_need_cancellation_check",
        description:
          "Hữu ích nếu cancellation claim của bạn đang bị tranh cãi và bạn muốn đánh giá xem tự làm còn hợp lý hay nên có hỗ trợ chuyên sâu.",
      },
    ],
  },
  {
    slug: "ai-nhan-tien-boi-thuong-hanh-khach-hay-cong-ty",
    title: "Ai nhận tiền bồi thường: hành khách hay công ty?",
    seoTitle:
      "Ai nhận tiền bồi thường EU261: hành khách hay công ty? Câu trả lời rõ cho vé công tác",
    description:
      "Trong EU261, quyền bồi thường được xây dựng như quyền của hành khách. Nếu công ty, bên thứ ba hoặc đại lý trả tiền vé, điều đó không tự động chuyển khoản compensation sang cho công ty. Tuy nhiên, refund tiền vé và quan hệ nội bộ giữa nhân viên với công ty là chuyện khác với standard compensation.",
    excerpt:
      "Bài short-answer premium cho nhóm người dùng Việt bay công tác hoặc có vé do công ty chi trả. Trọng tâm là phân biệt rõ ai có quyền với standard compensation theo EU261, khi nào yếu tố bên thứ ba trả tiền không làm mất quyền, và vì sao không được trộn compensation với refund vé.",
    date: "2026-04-16",
    updatedDate: "2026-04-16",
    readTime: "10 phút",
    cluster: "AI / GEO / SHORT ANSWERS",
    featured: true,
    heroEyebrow: "Passenger hay company nhận tiền?",
    heroSummary:
      "Câu trả lời ngắn là: theo logic chính thức của EU261, standard compensation là quyền gắn với hành khách bị ảnh hưởng, không tự động chuyển cho công ty chỉ vì công ty trả tiền vé. Điều cần tách bạch là compensation khác với refund vé, và khác tiếp với cách nhân viên với công ty tự xử lý khoản tiền đó trong quan hệ nội bộ.",
    quickAnswer: [
      "Thông thường, standard compensation EU261 là quyền của hành khách, không phải tự động của công ty trả tiền vé.",
      "Nếu bên thứ ba trả tiền cho hành trình, điều đó không tự nó làm mất quyền passenger theo logic của CJEU và Regulation 261/2004.",
      "Refund tiền vé là vấn đề khác với compensation, nên không nên gộp hai khoản này thành một.",
    ],
    keyPoints: [
      "Điểm xuất phát của EU261 là passenger rights, không phải company rights.",
      "Article 7 nói hành khách nhận compensation; Article 8 nói về reimbursement của giá vé.",
      "Bên thứ ba trả tiền không tự động chuyển standard compensation sang công ty.",
      "Nếu là staff ticket hoặc reduced fare không mở cho công chúng, kết quả có thể khác.",
    ],
    sections: [
      {
        title: "1. Câu trả lời ngắn nhất: thường là hành khách",
        paragraphs: [
          "Nếu bạn đang hỏi 'vé công tác do công ty trả tiền thì khi chuyến bay bị delay hoặc hủy, ai nhận khoản €250, €400 hoặc €600?', câu trả lời ngắn nhất thường là: hành khách. Toàn bộ cấu trúc của Regulation 261/2004 và trang Your Europe đều nói về quyền của passenger bị ảnh hưởng bởi disruption, chứ không xây dựng đây như một quyền mặc định của người thanh toán vé.",
          "Vì vậy, việc công ty mua vé, công ty hoàn ứng, OTA đặt hộ hay người khác trả tiền không tự động làm cho standard compensation trở thành tiền của công ty. Câu hỏi đúng phải là: đây là standard compensation cho hành khách hay là reimbursement của giá vé? Hai thứ đó khác nhau ngay từ gốc.",
        ],
        bullets: [
          "Với EU261, điểm xuất phát là quyền của passenger.",
          "Người trả tiền vé không tự động trở thành người có quyền nhận standard compensation.",
          "Muốn trả lời đúng, phải tách compensation khỏi refund.",
        ],
      },
      {
        title: "2. Vì sao câu trả lời nghiêng về hành khách?",
        paragraphs: [
          "Nguồn chính thức rất nhất quán ở điểm này. Regulation 261/2004, tại Article 7, dùng công thức 'passengers shall receive compensation'. Your Europe cũng mô tả các quyền này theo hướng nếu bạn là người bị delay, bị cancellation hoặc denied boarding thì bạn là người có quyền đòi compensation. Điều này cho thấy khoản bồi thường tiêu chuẩn được gắn với sự bất tiện và mất thời gian của hành khách bị ảnh hưởng.",
          "European Commission khi nói về claim agencies cũng dùng ngôn ngữ tương tự: đó là các doanh nghiệp đòi compensation thay cho passenger, tức là thay mặt hành khách chứ không phải vì họ tự trở thành chủ thể có quyền riêng của khoản tiền. Điều này củng cố thêm logic rằng compensation EU261 là passenger-centred.",
        ],
        bullets: [
          "Article 7 nói thẳng về passengers receiving compensation.",
          "Your Europe mô tả đây là quyền của hành khách bị disruption.",
          "Claim agencies chỉ đại diện cho passenger, không thay thế bản chất của quyền đó.",
        ],
      },
      {
        title: "3. Nếu công ty hoặc bên thứ ba trả tiền vé thì sao?",
        paragraphs: [
          "Điểm này có hỗ trợ rất mạnh từ án lệ mới của CJEU. Trong vụ Cymdek, Tòa nêu rằng khi một bên thứ ba trả tiền cho package tour và tour operator trả giá chuyến bay cho operating air carrier theo market conditions, việc hành khách không trực tiếp bỏ tiền ra là điều không liên quan đến khả năng họ tự mình thực hiện quyền đối với hãng. Nói ngắn hơn: việc bên thứ ba trả tiền không tự nó làm mất quyền passenger.",
          "Về mặt kỹ thuật, vụ đó nói về package tour được một bên thứ ba chi trả, chứ không phải đúng từng chi tiết của mọi vé công tác doanh nghiệp. Nhưng suy luận hợp lý từ nguồn chính thức là: chỉ riêng việc công ty trả tiền vé không đủ để biến standard compensation thành tiền của công ty. Nếu hãng đã được trả tiền chuyến bay theo điều kiện thương mại bình thường, yếu tố 'ai cầm thẻ để thanh toán' không phải là chìa khóa duy nhất.",
        ],
        bullets: [
          "CJEU đã xác nhận third-party payment không tự động phá quyền của passenger.",
          "Đây là nền tảng rất mạnh cho các case vé do công ty hoặc bên khác chi trả.",
          "Phần áp dụng sang vé công tác trực tiếp là suy luận hợp lý, không phải cùng một factual pattern 100%.",
        ],
      },
      {
        title: "4. Compensation và refund không giống nhau",
        paragraphs: [
          "Đây là chỗ nhiều người dùng Việt nhầm nhất. Standard compensation dưới EU261 là khoản tiền chuẩn hóa cho disruption. Còn reimbursement hay refund là việc hoàn lại giá vé, toàn bộ hoặc một phần, khi hành khách chọn hoàn tiền thay vì tiếp tục hành trình trong các tình huống phù hợp. Regulation 261/2004 tách hai cơ chế này ra khá rõ.",
          "Trong thực tế, nếu công ty hoặc đại lý là bên thanh toán vé, phần refund của ticket thường dễ gắn hơn với người hoặc hệ thống đã mua vé. Nhưng điều đó không có nghĩa khoản compensation tiêu chuẩn cũng tự động đi cùng đường đó. Vì thế, một trong những lỗi phổ biến nhất là lấy logic của refund để áp vào compensation, trong khi hai khoản này phục vụ hai mục đích khác nhau.",
        ],
        bullets: [
          "Compensation là khoản chuẩn hóa cho disruption.",
          "Refund là hoàn lại giá vé trong các tình huống được luật cho phép.",
          "Cùng một vụ việc có thể phát sinh cả hai khoản, nhưng chúng không phải cùng bản chất.",
        ],
      },
      {
        title: "5. Vé công tác thì công ty có thể giữ khoản tiền đó không?",
        paragraphs: [
          "Dưới góc nhìn EU261 thuần túy, điểm xuất phát vẫn là passenger rights. Tuy nhiên, câu hỏi 'sau khi airline trả tiền, nhân viên có phải chuyển lại cho công ty không?' lại có thể chạm sang hợp đồng lao động, travel policy nội bộ hoặc thỏa thuận riêng giữa người lao động với công ty. Đây không phải lúc nào cũng là câu hỏi được Regulation 261/2004 tự nó trả lời trực tiếp.",
          "Vì vậy, cách nói chính xác nhất là: luật hành khách hàng không của EU cho thấy người có quyền đòi standard compensation thường là hành khách; còn việc nội bộ giữa bạn với công ty xử lý khoản tiền đó ra sao có thể phụ thuộc thêm vào policy hoặc hợp đồng. Nói cách khác, 'công ty trả tiền vé' và 'công ty đương nhiên có quyền với compensation' không phải là cùng một mệnh đề.",
        ],
        bullets: [
          "EU261 trả lời tốt câu hỏi về passenger rights hơn là câu hỏi về nội quy nội bộ công ty.",
          "Company policy và employment terms là lớp vấn đề khác với air passenger rights.",
          "Đừng mặc định rằng vì công ty mua vé nên công ty tự động là chủ thể của compensation.",
        ],
      },
      {
        title: "6. Khi nào kết quả có thể khác?",
        paragraphs: [
          "Article 3(3) của Regulation 261/2004 loại trừ hành khách travelling free of charge hoặc at a reduced fare not available directly or indirectly to the public. Điều này có nghĩa nếu case của bạn là staff travel, industry discount đặc biệt hoặc loại vé nội bộ không mở cho công chúng, phân tích có thể khác với vé công tác mua theo điều kiện thương mại thông thường.",
          "Vì thế, nếu vé của bạn là một corporate ticket bình thường, yếu tố công ty trả tiền thường không phải điểm phá case. Nhưng nếu đó là travel benefit nội bộ hoặc fare đặc biệt ngoài thị trường công khai, cần phân tích kỹ hơn trước khi kết luận ai có quyền và liệu EU261 có áp dụng đầy đủ hay không.",
        ],
        bullets: [
          "Staff ticket và special concession fare là vùng cần cảnh giác.",
          "Không phải mọi vé do công ty liên quan đều giống nhau về mặt pháp lý.",
          "Điểm mấu chốt là fare type và cấu trúc booking, không chỉ là ai thanh toán.",
        ],
      },
      {
        title: "7. Cách xử lý thực tế nếu bạn đang tranh chấp khoản tiền",
        paragraphs: [
          "Nếu bạn là hành khách đi công tác, hãy giữ booking confirmation, proof of payment nếu có, itinerary, thông tin về fare type, email với employer hoặc travel desk và mọi thư từ với airline. Khi claim, bạn nên trình bày rõ đây là standard compensation under EU261 cho hành khách bị ảnh hưởng, và nếu có tranh chấp nội bộ với công ty thì đó là lớp vấn đề riêng.",
          "Nếu airline hoặc một bên trung gian đang trộn lẫn refund với compensation, hãy ép họ tách hai câu hỏi ra: ai có quyền với reimbursement của ticket và ai có quyền với flat-rate compensation. Chỉ cần tách đúng hai lớp này, phần lớn sự lẫn lộn sẽ giảm đi rất nhiều.",
        ],
        bullets: [
          "Giữ tài liệu về booking, fare type và ai thanh toán.",
          "Trình bày claim theo logic passenger rights, không theo cảm giác công bằng chung chung.",
          "Luôn tách refund của vé khỏi flat-rate compensation.",
        ],
      },
    ],
    faqs: [
      {
        question: "Nếu công ty trả tiền vé, tôi có còn quyền nhận compensation EU261 không?",
        answer:
          "Thông thường có. EU261 được xây dựng quanh quyền của hành khách bị ảnh hưởng. Việc công ty hoặc bên thứ ba trả tiền vé không tự động chuyển standard compensation sang cho công ty.",
      },
      {
        question: "Compensation và refund tiền vé có phải là một không?",
        answer:
          "Không. Compensation là khoản tiền chuẩn hóa do disruption, còn refund là hoàn lại giá vé trong các tình huống phù hợp. Đây là hai cơ chế khác nhau và không nên gộp lại.",
      },
      {
        question: "Có án lệ chính thức nào hỗ trợ việc bên thứ ba trả tiền nhưng passenger vẫn có quyền không?",
        answer:
          "Có. Trong vụ C-20/24 Cymdek, CJEU xác nhận rằng việc giá package tour được một bên thứ ba trả là không liên quan đến việc hành khách thực hiện quyền đối với operating air carrier, với các điều kiện nêu trong phán quyết.",
      },
      {
        question: "Khi nào công ty trả tiền vé nhưng case vẫn có thể yếu đi?",
        answer:
          "Nếu đây là staff ticket, reduced fare đặc biệt hoặc loại vé không mở trực tiếp hay gián tiếp cho công chúng, Article 3(3) có thể ảnh hưởng đến phạm vi áp dụng EU261. Khi đó cần xem kỹ loại fare cụ thể.",
      },
      {
        question: "Nếu công ty yêu cầu tôi chuyển lại khoản compensation thì sao?",
        answer:
          "Đó có thể trở thành vấn đề policy nội bộ hoặc hợp đồng lao động, khác với câu hỏi ai có passenger rights theo EU261. Về mặt passenger-rights, standard compensation thường được xây dựng như quyền của hành khách; còn quan hệ nội bộ với công ty cần xem riêng.",
      },
    ],
    claimVariant: "home",
    contextualLinks: [
      {
        label: "Kiểm tra nhanh case vé công tác của bạn",
        href: buildClaimWingerViLink("home", {
          medium: "context_link",
          campaign: "ai-nhan-tien-boi-thuong-hanh-khach-hay-cong-ty",
          content: "general_business_trip_compensation_recipient_check",
        }),
        placement: "vi_article_business_trip_compensation_recipient_general_check",
        description:
          "Phù hợp nếu vé của bạn do công ty hoặc bên thứ ba chi trả và bạn muốn biết claim EU261 đang mạnh theo hướng nào.",
      },
      {
        label: "Nếu case chính là chuyến bay bị trễ",
        href: buildClaimWingerViLink("delayed", {
          medium: "context_link",
          campaign: "ai-nhan-tien-boi-thuong-hanh-khach-hay-cong-ty",
          content: "delay_business_trip_compensation_recipient_check",
        }),
        placement: "vi_article_business_trip_compensation_recipient_delay_check",
        description:
          "Dùng khi chuyến bay công tác bị delay và bạn muốn phân biệt rõ claim compensation với câu chuyện refund hoặc thanh toán nội bộ.",
      },
      {
        label: "Nếu case chính là chuyến bay bị hủy",
        href: buildClaimWingerViLink("cancelled", {
          medium: "context_link",
          campaign: "ai-nhan-tien-boi-thuong-hanh-khach-hay-cong-ty",
          content: "cancellation_business_trip_compensation_recipient_check",
        }),
        placement: "vi_article_business_trip_compensation_recipient_cancellation_check",
        description:
          "Hữu ích nếu vé công tác bị hủy và bạn cần đánh giá ai có quyền với compensation, ai có thể liên quan tới refund của giá vé.",
      },
    ],
  },
];

export const blogArticlesViSorted = [...blogArticlesVi].sort((a, b) =>
  b.date.localeCompare(a.date),
);

export const featuredBlogArticlesVi = blogArticlesViSorted.filter((article) => article.featured);

export function getViBlogArticleBySlug(slug: string) {
  return blogArticlesVi.find((article) => article.slug === slug);
}
