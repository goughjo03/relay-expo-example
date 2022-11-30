/**
 * @generated SignedSource<<e26c534b293a60cac1044b57561a206e>>
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
        "storageKey": "country(code:\"test-id\")"
      }
    ]
  },
  "params": {
    "cacheID": "27230457c544c29be04f9ed36d5d7dac",
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
        "myData.currency": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "String"
        },
        "myData.phone": (v1/*: any*/)
      }
    },
    "name": "FragmentComponentTwoQuery",
    "operationKind": "query",
    "text": "query FragmentComponentTwoQuery {\n  myData: country(code: \"test-id\") {\n    ...FragmentComponent_country\n  }\n}\n\nfragment FragmentComponent_country on Country {\n  phone\n  currency\n  continent {\n    name\n  }\n}\n"
  }
};
})();

(node as any).hash = "e4ffe03ce249f8401dd725da20841a66";

export default node;
