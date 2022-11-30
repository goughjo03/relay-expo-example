import { Text, View } from "react-native";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import { graphql } from "relay-runtime";
import Profile from "./Profile";
import { BusinessOverviewQuery } from "./__generated__/BusinessOverviewQuery.graphql";

type Props = {
  business: PreloadedQuery<BusinessOverviewQuery>;
};

const query = graphql`
  query BusinessOverviewQuery($id: ID!) {
    business(id: $id) {
      name
      owner {
        ...Profile_user
      }
    }
  }
`;

const BusinessOverview = ({ business }: Props) => {
  const {
    business: { name, owner },
  } = usePreloadedQuery(query, business);
  return (
    <View>
      <Text>{name}</Text>
      <Profile user={owner} />
    </View>
  );
};

export default BusinessOverview;
