import { Suspense, useState } from "react";
// @ts-ignore
import graphql from "babel-plugin-relay/macro";
import { QueryComponentQuery } from "./__generated__/QueryComponentQuery.graphql";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import FragmentComponent from "./FragmentComponent";

const query = graphql`
  query QueryComponentQuery($id: ID!) {
    country(code: $id) {
      name
      ...FragmentComponent_country
    }
  }
`;

interface Props {
  queryRef: PreloadedQuery<QueryComponentQuery>;
}

const QueryComponent = ({ queryRef }: Props) => {
  const [showContinent, setShowContinent] = useState(false);
  const data = usePreloadedQuery<QueryComponentQuery>(query, queryRef);
  return (
    <div>
      <button onClick={() => setShowContinent(!showContinent)}>
        {showContinent ? "Hide" : "Show"} continent
      </button>
      <h1>{data.country?.name}</h1>
      {showContinent && (
        <Suspense fallback={<div>Loading...</div>}>
          {data.country && <FragmentComponent country={data.country} />}
        </Suspense>
      )}
    </div>
  );
};

export default QueryComponent;
