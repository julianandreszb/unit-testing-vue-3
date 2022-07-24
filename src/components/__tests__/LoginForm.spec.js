import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import LoginForm from "../LoginForm.vue";

describe("LoginForm", () => {
  it("emits an event with a user data payload", async () => {
    const wrapper = mount(LoginForm);
    wrapper.vm.$.setupState.name = "Julian Zapata";

    await wrapper.trigger("submit");
    const formSubmittedCalls = wrapper.emitted("formSubmitted");
    expect(formSubmittedCalls).lengthOf(1);

    const expectedPayload = { name: "Julian Zapata" };
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload);
  });
});
