import { useFragment } from "react-relay";
// @ts-ignore
import graphql from "babel-plugin-relay/macro";
import { FragmentComponent_country$key } from "./__generated__/FragmentComponent_country.graphql";
import { Text, View } from "react-native";

export const fragment = graphql`
  fragment FragmentComponent_country on Country {
    phone
    capital
    currency
    continent {
      name
    }
  }
`;

interface Props {
  country: FragmentComponent_country$key;
}

const FragmentComponent = ({ country }: Props) => {
  const data = useFragment(fragment, country);
  return (
    <View>
      <Text>{data.continent.name}</Text>
      <Text>{data.phone}</Text>
      <Text>{data.capital}</Text>
      <Text>{data.currency}</Text>
    </View>
  );
};

export default FragmentComponent;
