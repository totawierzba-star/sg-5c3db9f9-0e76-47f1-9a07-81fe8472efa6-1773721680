import type { UnifiedBlogCategory } from "@/components/UnifiedBlogIndex";

const viBlogClusterLabels: Record<string, string> = {
  "Core EU261": "Quyền lợi EU261",
  "AI / GEO / SHORT ANSWERS": "Câu trả lời nhanh",
  "Routes & hub logic": "Tuyến bay và hub transit",
  "AI answer & route intent": "Tình huống theo tuyến bay",
  "Hub connections": "Nối chuyến tại châu Âu",
  Airlines: "Hãng hàng không",
  "Edge cases": "Tình huống đặc biệt",
  Procedure: "Quy trình yêu cầu",
  "Procedure / Money": "Thanh toán và xử lý hồ sơ",
  Baggage: "Hành lý",
};

const viBlogClusterOrder = [
  "Core EU261",
  "AI / GEO / SHORT ANSWERS",
  "Routes & hub logic",
  "Hub connections",
  "Airlines",
  "Edge cases",
  "Procedure",
  "Procedure / Money",
  "Baggage",
  "AI answer & route intent",
];

export function getViBlogClusterLabel(cluster: string) {
  return viBlogClusterLabels[cluster] || cluster;
}

export function getViBlogEyebrowLabel(eyebrow: string) {
  return eyebrow.replace(/^AI answer for /, "Tình huống tuyến bay: ");
}

export function getViBlogCategoryOrder(): UnifiedBlogCategory[] {
  return viBlogClusterOrder.map((id) => ({
    id,
    label: getViBlogClusterLabel(id),
  }));
}

export function getTrBlogCategoryLabel(category: string) {
  return category;
}

export function getSvBlogCategoryLabel(category: string) {
  return category;
}
