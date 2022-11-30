/**
 * @generated SignedSource<<9f9bdfd3f97a2421a93954b1ef1de0d9>>
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
  readonly currency: string | null;
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
      "kind": "ScalarField",
      "name": "currency",
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

(node as any).hash = "96830408e094e51fcf7f6fdae991e2b3";

export default node;
