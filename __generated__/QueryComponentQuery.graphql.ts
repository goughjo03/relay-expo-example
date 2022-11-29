/**
 * @generated SignedSource<<323864dcb8aecfdf6896dab5e71c6572>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type QueryComponentQuery$variables = {
  id: string;
};
export type QueryComponentQuery$data = {
  readonly country: {
    readonly name: string;
    readonly " $fragmentSpreads": FragmentRefs<"FragmentComponent_country">;
  } | null;
};
export type QueryComponentQuery = {
  response: QueryComponentQuery$data;
  variables: QueryComponentQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "code",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "QueryComponentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FragmentComponent_country"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "QueryComponentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "12fa3f50e30a6b09df130975c97c7f67",
    "id": null,
    "metadata": {},
    "name": "QueryComponentQuery",
    "operationKind": "query",
    "text": "query QueryComponentQuery(\n  $id: ID!\n) {\n  country(code: $id) {\n    name\n    ...FragmentComponent_country\n  }\n}\n\nfragment FragmentComponent_country on Country {\n  phone\n  continent {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "478c4d4b96d207bf7810aacb3048895c";

export default node;
