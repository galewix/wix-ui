import * as React from "react";
import { ReactDOMTestContainer } from "../../../test/dom-test-container";
import { buttonDriverFactory } from "./buttonTwo.driver";
import { buttonPrivateDriverFactory } from "./buttonTwo.driver.private";
import ButtonTwo from "./buttonTwo";

describe("ButtonTwo", () => {
  const createDriver = new ReactDOMTestContainer()
    .unmountAfterEachTest()
    .createLegacyRenderer(buttonDriverFactory);

  const createPrivateDriver = new ReactDOMTestContainer()
    .unmountAfterEachTest()
    .createLegacyRenderer(buttonPrivateDriverFactory);

  describe("onClick prop", () => {
    it("should be called on click", () => {
      const onClick = jest.fn();
      const driver = createDriver(<ButtonTwo onClick={onClick} />);
      driver.click();
      expect(onClick).toBeCalled();
    });
  });

  describe("suffixIcon and prefixIcon props", () => {
    const suffix = <div>suffix</div>;
    const prefix = <div>prefix</div>;
    it("should render suffix when given", () => {
      const driver = createPrivateDriver(<ButtonTwo suffixIcon={suffix} />);
      expect(driver.suffixExists()).toBeTruthy();
      expect(driver.prefixExists()).toBeFalsy();
    });

    it("should render prefix when given", () => {
      const driver = createPrivateDriver(<ButtonTwo prefixIcon={prefix} />);
      expect(driver.prefixExists()).toBeTruthy();
      expect(driver.suffixExists()).toBeFalsy();
    });
  });
});
