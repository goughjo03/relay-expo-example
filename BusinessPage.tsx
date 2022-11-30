import { Suspense, useEffect, useState } from "react";
import { ActivityIndicator, Button, View } from "react-native";
import { useQueryLoader } from "react-relay";
import BusinessOverview, { query } from "./BusinessOverview";
import { BusinessOverviewQuery } from "./__generated__/BusinessOverviewQuery.graphql";

type Props = {
  id: string;
};

const BusinessPage = ({ id }: Props) => {
  const [queryRef, loadQuery, disposeQuery] =
    useQueryLoader<BusinessOverviewQuery>(query);
  const [expanded, setExpanded] = useState(false);
  const showMore = () => {
    setExpanded(true);
    loadQuery({ id });
  };
  useEffect(() => {
    return () => {
      disposeQuery();
    };
  }, [disposeQuery]);
  return (
    <View>
      <Button title="Show more" onPress={showMore} />
      {expanded && (
        <Suspense fallback={<ActivityIndicator />}>
          {queryRef && <BusinessOverview business={queryRef} />}
        </Suspense>
      )}
    </View>
  );
};

export default BusinessPage;
