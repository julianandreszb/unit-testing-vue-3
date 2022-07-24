import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import RandomNumber from "../RandomNumber.vue";

describe("RandomNumber", () => {
  it("By default, randomNumber should be 0", async () => {
    const wrapper = mount(RandomNumber);
    expect(wrapper.html()).contains("<span>0</span>");
  });
  it("If button is clicked, randomNumber should be between 1 and 10", async () => {
    const wrapper = mount(RandomNumber);
    await wrapper.find("button").trigger("click");
    const randomNumber = parseInt(wrapper.find("span").text());
    expect(randomNumber).greaterThanOrEqual(1);
    expect(randomNumber).lessThanOrEqual(10);
  });
  it("If button is clicked, randomNumber should be between 200 and 300", async () => {
    const wrapper = mount(RandomNumber, { props: { min: 200, max: 300 } });
    await wrapper.find("button").trigger("click");
    const randomNumber = parseInt(wrapper.find("span").text());
    expect(randomNumber).greaterThanOrEqual(200);
    expect(randomNumber).lessThanOrEqual(300);
  });
});
