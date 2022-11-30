/**
 * @generated SignedSource<<40d16bb6b86a33ab0b9fd55252b58bbb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type BusinessOverviewQuery$variables = {
  id: string;
};
export type BusinessOverviewQuery$data = {
  readonly business: {
    readonly name: string;
    readonly owner: {
      readonly " $fragmentSpreads": FragmentRefs<"Profile_user">;
    };
  };
};
export type BusinessOverviewQuery = {
  response: BusinessOverviewQuery$data;
  variables: BusinessOverviewQuery$variables;
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
    "name": "id",
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
    "name": "BusinessOverviewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Business",
        "kind": "LinkedField",
        "name": "business",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Profile_user"
              }
            ],
            "storageKey": null
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
    "name": "BusinessOverviewQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Business",
        "kind": "LinkedField",
        "name": "business",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "owner",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "profilePicture",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3498d3373d77b4d71139759a71be64e1",
    "id": null,
    "metadata": {},
    "name": "BusinessOverviewQuery",
    "operationKind": "query",
    "text": "query BusinessOverviewQuery(\n  $id: ID!\n) {\n  business(id: $id) {\n    name\n    owner {\n      ...Profile_user\n    }\n  }\n}\n\nfragment Profile_user on User {\n  name\n  profilePicture\n}\n"
  }
};
})();

(node as any).hash = "c1bd38410677a3f94d1516d49cc6ff64";

export default node;
