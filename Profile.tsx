import { Image, Text, View } from "react-native";
import { useFragment } from "react-relay";
import { graphql } from "relay-runtime";
import { Profile_user$key } from "./__generated__/Profile_user.graphql";

const fragment = graphql`
  fragment Profile_user on User {
    name
    profilePicture
  }
`;

type Props = {
  user: Profile_user$key;
};

const Profile = ({ user }: Props) => {
  const { name, profilePicture } = useFragment(fragment, user);
  return (
    <View>
      <Text>{name}</Text>
      <Image source={{ uri: profilePicture }} />
    </View>
  );
};

export { mutation, subscription };
export default Profile;
