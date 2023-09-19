import { act, renderHook } from "@testing-library/react";
import { useLocalStorage } from "@/modules/shared/hooks/useLocalStorage";

describe("useLocalStorage hook", () => {
  // mock local storage functions
  const storageMock = () => {
    let storage: { [key: string]: string } = {};
    return {
      getItem(key: string) {
        return storage[key] || null;
      },
      setItem(key: string, value: string) {
        storage[key] = value;
      },
      clear() {
        storage = {};
      },
    };
  };

  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: storageMock(),
    });
  });

  it("should get initial value from local storage", () => {
    window.localStorage.setItem("myKey", JSON.stringify("storedValue"));
    const { result } = renderHook(() =>
      useLocalStorage("myKey", "initialValue"),
    );
    expect(result.current[0]).toBe("storedValue");
  });

  it("should use the initial value if there is nothing in local storage", () => {
    const { result } = renderHook(() =>
      useLocalStorage("anotherKey", "initialValue"),
    );
    expect(result.current[0]).toBe("initialValue");
  });

  it("should update value and reflect in local storage", () => {
    const { result } = renderHook(() =>
      useLocalStorage("myKey", "initialValue"),
    );

    act(() => {
      result.current[1]("newValue");
    });

    expect(result.current[0]).toBe("newValue");
    expect(window.localStorage.getItem("myKey")).toBe(
      JSON.stringify("newValue"),
    );
  });
});
