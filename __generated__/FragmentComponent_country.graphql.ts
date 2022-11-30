/**
 * @generated SignedSource<<200e1ae22bad197c58d5578d34e2e44c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FragmentComponent_country$data = {
  readonly capital: string | null;
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
      "kind": "ScalarField",
      "name": "capital",
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

(node as any).hash = "52c07b9ab218e7e1f65cd9d861d9ca6b";

export default node;
