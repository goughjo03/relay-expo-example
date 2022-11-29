import { RelayEnvironmentProvider } from "react-relay";
import { Store, Network, Environment, RecordSource } from "relay-runtime";
import QueryLoaderComponent from "./QueryLoaderComponent";

const fetchQuery = async (operation: any, variables: any) => {
  const response = await fetch(
    "https://api.graph.cool/relay/v1/cjv0q2q0q0j2o0123j2q0q0j2o",
    {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }
  );
  return await response.json();
};

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource()),
});

export default function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <QueryLoaderComponent />
    </RelayEnvironmentProvider>
  );
}
