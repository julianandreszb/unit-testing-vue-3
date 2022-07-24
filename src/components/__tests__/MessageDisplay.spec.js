import { afterEach, describe, it, expect, vi } from "vitest";
import { mount, flushPromises } from "@vue/test-utils";
import MessageDisplay from "../MessageDisplay.vue";
import { getMessage } from "../../../services/axios.js";
vi.mock("../../../services/axios.js", () => {
  return {
    getMessage: vi.fn(),
  };
});

describe("MessageDisplay", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("Calls getMessage and displays message", async () => {
    const mockMessage = "Hello from the DB!";
    getMessage.mockResolvedValueOnce({
      text: mockMessage,
    });
    const wrapper = await mount(MessageDisplay);
    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);

    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).eq(mockMessage);
  });

  it("Displays an error message when getMessage fails", async () => {
    const mockError = "Oops! Something went wrong";
    getMessage.mockRejectedValue({
      text: mockError,
    });
    const wrapper = await mount(MessageDisplay);
    await flushPromises();
    expect(getMessage).toHaveBeenCalledTimes(1);

    const displayedError = wrapper.find('[data-testid="message-error"]').text();
    expect(displayedError).eq(mockError);
  });
});
