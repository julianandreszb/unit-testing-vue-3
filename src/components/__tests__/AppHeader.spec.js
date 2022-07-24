import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import AppHeader from "../AppHeader.vue";

describe("AppHeader", () => {
  it("If user is not logged in, do not show logout button", async () => {
    const wrapper = mount(AppHeader);
    wrapper.vm.$.setupState.loggedIn = false;
    await wrapper.vm.$nextTick();
    expect(wrapper.find("button").isVisible()).eq(false);
  });

  it("If user is logged in, show logout button", async () => {
    const wrapper = mount(AppHeader);
    wrapper.vm.$.setupState.loggedIn = true;
    await wrapper.vm.$nextTick();
    expect(wrapper.find("button").isVisible()).eq(true);
  });
});
