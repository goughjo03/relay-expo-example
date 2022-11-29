import React, { Suspense, useEffect } from "react";
import {
  useQueryLoader,
} from "react-relay/hooks";
import compiledQuery, {
  QueryComponentQuery,
} from "./__generated__/QueryComponentQuery.graphql";
import QueryComponent from "./QueryComponent";

const QueryLoaderComponent = () => {
  const [queryRef, loadQuery, disposeQuery] =
    useQueryLoader<QueryComponentQuery>(compiledQuery);
  useEffect(() => {
    disposeQuery?.();
    loadQuery?.({ id: "US" });
    return () => {
      disposeQuery?.();
    };
  }, [loadQuery, disposeQuery]);
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        {queryRef && <QueryComponent queryRef={queryRef} />}
      </Suspense>
    </div>
  );
};

export default QueryLoaderComponent;
