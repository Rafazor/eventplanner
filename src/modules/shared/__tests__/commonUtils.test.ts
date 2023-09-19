import { isURL } from "@/modules/shared/utils/commonUtils";

describe("isURL helper function", () => {
  it("should validate valid URLs", () => {
    expect(isURL("https://www.google.com")).toBe(true);
    expect(isURL("www.example.com")).toBe(true);
    expect(isURL("192.168.0.1")).toBe(true);
  });

  it("should invalidate invalid URLs", () => {
    expect(isURL("not-a-url")).toBe(false);
    expect(isURL("http:/broken.com")).toBe(false);
    expect(isURL("https//missing.colon.com")).toBe(false);
    expect(isURL("invalid-ip-256.256.256.256")).toBe(false);
    expect(isURL("http://localhost:3000")).toBe(false);
  });
});
