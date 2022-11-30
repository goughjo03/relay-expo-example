/**
 * @generated SignedSource<<f3660e594c0fd80f9b22151f6f753124>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FragmentComponentTwoQuery$variables = {};
export type FragmentComponentTwoQuery$data = {
  readonly myData: {
    readonly " $fragmentSpreads": FragmentRefs<"FragmentComponent_country">;
  } | null;
};
export type FragmentComponentTwoQuery = {
  response: FragmentComponentTwoQuery$data;
  variables: FragmentComponentTwoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "code",
    "value": "test-id"
  }
],
v1 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FragmentComponentTwoQuery",
    "selections": [
      {
        "alias": "myData",
        "args": (v0/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "FragmentComponent_country"
          }
        ],
        "storageKey": "country(code:\"test-id\")"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FragmentComponentTwoQuery",
    "selections": [
      {
        "alias": "myData",
        "args": (v0/*: any*/),
        "concreteType": "Country",
        "kind": "LinkedField",
        "name": "country",
        "plural": false,
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
        "storageKey": "country(code:\"test-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "f6320c5a6483b538f23fce8c132b2303",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "myData": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Country"
        },
        "myData.continent": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Continent"
        },
        "myData.continent.name": (v1/*: any*/),
        "myData.phone": (v1/*: any*/)
      }
    },
    "name": "FragmentComponentTwoQuery",
    "operationKind": "query",
    "text": "query FragmentComponentTwoQuery {\n  myData: country(code: \"test-id\") {\n    ...FragmentComponent_country\n  }\n}\n\nfragment FragmentComponent_country on Country {\n  phone\n  continent {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "e4ffe03ce249f8401dd725da20841a66";

export default node;
