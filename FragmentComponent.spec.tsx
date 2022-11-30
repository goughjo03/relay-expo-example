import {
  graphql,
  RelayEnvironmentProvider,
  useLazyLoadQuery,
} from "react-relay";
import { createMockEnvironment, MockPayloadGenerator } from "relay-test-utils";
import FragmentComponent from "./FragmentComponent";
import renderer, { act } from "react-test-renderer";
import { Suspense } from "react";

describe("FragmentComponent", () => {
  it("renders correctly with automatically generated data", async () => {
    const environment = createMockEnvironment();
    const TestRenderer = () => {
      const data = useLazyLoadQuery(
        graphql`
          query FragmentComponentQuery @relay_test_operation {
            myData: country(code: "test-id") {
              # Spread the fragment you want to test here
              ...FragmentComponent_country
            }
          }
        `,
        {}
      );
      return <FragmentComponent country={(data as any).myData} />;
    };
    const tree = renderer.create(
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback="Loading...">
          <TestRenderer />
        </Suspense>
      </RelayEnvironmentProvider>
    );
    act(() => {
      environment.mock.resolveMostRecentOperation((operation) =>
        MockPayloadGenerator.generate(operation)
      );
    });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(tree.toJSON()).toMatchSnapshot();
  });
  it("renders correctly with specifically generated data", async () => {
    const environment = createMockEnvironment();
    const TestRenderer = () => {
      const data = useLazyLoadQuery(
        graphql`
          query FragmentComponentTwoQuery @relay_test_operation {
            myData: country(code: "test-id") {
              # Spread the fragment you want to test here
              ...FragmentComponent_country
            }
          }
        `,
        {}
      );
      return <FragmentComponent country={(data as any).myData} />;
    };
    const tree = renderer.create(
      <RelayEnvironmentProvider environment={environment}>
        <Suspense fallback="Loading...">
          <TestRenderer />
        </Suspense>
      </RelayEnvironmentProvider>
    );
    act(() => {
      environment.mock.resolveMostRecentOperation((operation) =>
        MockPayloadGenerator.generate(operation, {
          Country() {
            return {
              phone: "123456789",
              currency: "USD",
              continent: {
                name: "Europe",
              },
            };
          },
        })
      );
    });
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
