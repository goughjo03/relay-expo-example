/**
 * @generated SignedSource<<e50e1329759883880eef53d80de34c5c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Profile_user$data = {
  readonly name: string;
  readonly profilePicture: string;
  readonly " $fragmentType": "Profile_user";
};
export type Profile_user$key = {
  readonly " $data"?: Profile_user$data;
  readonly " $fragmentSpreads": FragmentRefs<"Profile_user">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Profile_user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "profilePicture",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "59e3c52f398ee96cba3fe799c5b7145c";

export default node;
