import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const BRAND_NAME = "Problemlot";
const DEFAULT_TITLE = "EU261, opoznienia i odwolane loty";
const DEFAULT_DESCRIPTION =
  "Przewodniki dla pasazerow: opoznienia, odwolania, overbooking i odszkodowanie do 600 EUR.";

function clampText(value: string, maxLength: number) {
  if (value.length <= maxLength) {
    return value;
  }

  return `${value.slice(0, maxLength - 1).trimEnd()}...`;
}

function buildTitle(searchParams: URLSearchParams) {
  return clampText(searchParams.get("title") || DEFAULT_TITLE, 92);
}

function buildDescription(searchParams: URLSearchParams) {
  return clampText(searchParams.get("desc") || DEFAULT_DESCRIPTION, 150);
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const title = buildTitle(searchParams);
    const description = buildDescription(searchParams);

    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            padding: "34px",
            background:
              "linear-gradient(135deg, #f4efe6 0%, #e8f1f8 55%, #f6f8fb 100%)",
            color: "#0f172a",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              borderRadius: "30px",
              overflow: "hidden",
              backgroundColor: "#ffffff",
              border: "1px solid rgba(15, 23, 42, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "38%",
                padding: "42px 38px",
                background:
                  "linear-gradient(160deg, #0f172a 0%, #12325c 60%, #1768a5 100%)",
                color: "#f8fafc",
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "22px",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      width: "16px",
                      height: "16px",
                      borderRadius: "999px",
                      backgroundColor: "#f59e0b",
                    }}
                  />
                  {BRAND_NAME}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    fontSize: "16px",
                    opacity: 0.9,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    {["EU261", "UK261", "CLAIMS"].map((label) => (
                      <div
                        key={label}
                        style={{
                          display: "flex",
                          padding: "7px 12px",
                          borderRadius: "999px",
                          backgroundColor: "rgba(255, 255, 255, 0.14)",
                          border: "1px solid rgba(255, 255, 255, 0.14)",
                          fontSize: "14px",
                          fontWeight: 700,
                          letterSpacing: "0.05em",
                        }}
                      >
                        {label}
                      </div>
                    ))}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      maxWidth: "300px",
                      lineHeight: 1.45,
                    }}
                  >
                    Practical passenger-rights guides for delays, cancellations
                    and missed connections.
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "220px",
                  borderRadius: "28px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 100%)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: "-18px",
                    top: "112px",
                    width: "290px",
                    height: "2px",
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.8) 55%, rgba(255,255,255,0.0) 100%)",
                    transform: "rotate(-14deg)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: "56px",
                    top: "84px",
                    width: "158px",
                    height: "64px",
                    borderRadius: "999px",
                    border: "2px solid rgba(255,255,255,0.78)",
                    transform: "rotate(-14deg)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: "186px",
                    top: "70px",
                    width: "30px",
                    height: "30px",
                    borderTop: "2px solid rgba(255,255,255,0.78)",
                    borderRight: "2px solid rgba(255,255,255,0.78)",
                    transform: "rotate(31deg)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: "56px",
                    top: "152px",
                    width: "72px",
                    height: "2px",
                    backgroundColor: "rgba(255,255,255,0.78)",
                    transform: "rotate(20deg)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    left: "118px",
                    top: "136px",
                    width: "86px",
                    height: "2px",
                    backgroundColor: "rgba(255,255,255,0.78)",
                    transform: "rotate(-32deg)",
                  }}
                />
                <div
                  style={{
                    display: "flex",
                    position: "absolute",
                    right: "24px",
                    bottom: "24px",
                    width: "78px",
                    height: "78px",
                    borderRadius: "22px",
                    backgroundColor: "rgba(245, 158, 11, 0.16)",
                    border: "1px solid rgba(245, 158, 11, 0.28)",
                  }}
                />
              </div>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                width: "62%",
                padding: "46px 48px 42px",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "22px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      padding: "7px 12px",
                      borderRadius: "999px",
                      backgroundColor: "#eef6ff",
                      color: "#1768a5",
                      border: "1px solid #d8e8fb",
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Niestandardowy preview
                  </div>
                  <div style={{ opacity: 0.45 }}>problemlot.com</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    fontSize: "54px",
                    lineHeight: 1.08,
                    fontWeight: 800,
                    letterSpacing: "-0.03em",
                    color: "#0f172a",
                  }}
                >
                  {title}
                </div>

                <div
                  style={{
                    display: "flex",
                    maxWidth: "640px",
                    fontSize: "26px",
                    lineHeight: 1.35,
                    color: "#475569",
                  }}
                >
                  {description}
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "26px",
                  borderTop: "1px solid #e2e8f0",
                  fontSize: "22px",
                  color: "#0f172a",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                  }}
                >
                  <div style={{ display: "flex", fontWeight: 700 }}>
                    Opoznienia
                  </div>
                  <div style={{ display: "flex", fontWeight: 700 }}>
                    Odwolania
                  </div>
                  <div style={{ display: "flex", fontWeight: 700 }}>
                    Odszkodowania
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    fontWeight: 700,
                    color: "#1768a5",
                  }}
                >
                  Do 600 EUR
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch {
    return new Response("Failed to generate the image", {
      status: 500,
    });
  }
}
