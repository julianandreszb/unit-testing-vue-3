import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import MessageContainer from "../MessageContainer.vue";

describe("MessageContainer", () => {
  it("warps MessageDisplay component", async () => {
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            template: '<p data-testid="message">Hello from the DB!</p>',
          },
        },
      },
    });
    const message = wrapper.find('[data-testid="message"]').text();
    expect(message).eq("Hello from the DB!");
  });
});
