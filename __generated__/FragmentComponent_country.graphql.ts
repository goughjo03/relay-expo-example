/**
 * @generated SignedSource<<ac6a2e378690662b72cfc4ec7743bdd2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FragmentComponent_country$data = {
  readonly continent: {
    readonly name: string;
  };
  readonly phone: string;
  readonly " $fragmentType": "FragmentComponent_country";
};
export type FragmentComponent_country$key = {
  readonly " $data"?: FragmentComponent_country$data;
  readonly " $fragmentSpreads": FragmentRefs<"FragmentComponent_country">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FragmentComponent_country",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "phone",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Continent",
      "kind": "LinkedField",
      "name": "continent",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Country",
  "abstractKey": null
};

(node as any).hash = "decd469310342c8f37ee85e0d3c0417e";

export default node;
